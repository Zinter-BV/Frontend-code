import React, { useState, useRef, useEffect } from "react";
import Map from "../Assets/Map.svg";
import { useTranslation } from "react-i18next";

const Location = ({
  fromLocation,
  toLocation,
  setFromLocation,
  setToLocation,
  isEditingFrom,
  isEditingTo,
  setIsEditingFrom,
  setIsEditingTo,
  setFromPickupLongitude,
  setFromPickupLatitude,
  setToDropOffLongitude,
  setToDropOffLatitude,
}) => {
  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);

  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);
  const [loadingFrom, setLoadingFrom] = useState(false);
  const [loadingTo, setLoadingTo] = useState(false);

  const { t } = useTranslation();

  // MapBox API - Get your free token at https://account.mapbox.com/access-tokens/
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoieW91cnVzZXJuYW1lIiwiaCI6InlvdXJfYWNjZXNzX3Rva2VuX2hlcmUifQ.example";

  // Debounce function to limit API calls
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Focus input when editing starts
  useEffect(() => {
    if (isEditingFrom && fromInputRef.current) {
      fromInputRef.current.focus();
    }
  }, [isEditingFrom]);

  useEffect(() => {
    if (isEditingTo && toInputRef.current) {
      toInputRef.current.focus();
    }
  }, [isEditingTo]);

  // MapBox Geocoding API search function - FREE with 100,000 requests/month
  const searchPlaces = async (input, setSuggestions, setLoading) => {
    if (!input.trim() || input.length < 3) {
      setSuggestions([]);
      return;
    }

    setLoading(true);

    try {
      const encodedInput = encodeURIComponent(input);
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedInput}.json?` +
          new URLSearchParams({
            access_token: MAPBOX_TOKEN,
            country: "US", // Restrict to US, remove for worldwide
            limit: "5",
            types: "place,postcode,address,poi", // Include various location types
          })
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Transform MapBox response to our expected format
      const transformedSuggestions = data.features.map((feature) => ({
        place_id: feature.id,
        description: feature.place_name,
        structured_formatting: {
          main_text: feature.text || feature.place_name.split(",")[0],
          secondary_text: feature.place_name
            .split(",")
            .slice(1)
            .join(",")
            .trim(),
        },
        geometry: {
          lat: feature.geometry.coordinates[1],
          lng: feature.geometry.coordinates[0],
        },
        properties: feature.properties,
        context: feature.context,
      }));

      setSuggestions(transformedSuggestions);
    } catch (error) {
      console.error("Error fetching place suggestions:", error);
      setSuggestions([]);

      // Fallback to a simple mock data if API fails
      if (input.length >= 3) {
        const mockSuggestions = [
          {
            place_id: `mock-1-${Date.now()}`,
            description: `${input} - Search result not available`,
            structured_formatting: {
              main_text: input,
              secondary_text:
                "Please try a different search or check your internet connection",
            },
            geometry: { lat: 0, lng: 0 },
          },
        ];
        setSuggestions(mockSuggestions);
      }
    } finally {
      setLoading(false);
    }
  };

  // Alternative: Use a completely free service (LocationIQ) - No registration required for basic use
  const searchPlacesLocationIQ = async (input, setSuggestions, setLoading) => {
    if (!input.trim() || input.length < 3) {
      setSuggestions([]);
      return;
    }

    setLoading(true);

    try {
      // Using LocationIQ free tier - 10,000 requests/month free
      const response = await fetch(
        `https://us1.locationiq.com/v1/search?` +
          new URLSearchParams({
            key: "YOUR_LOCATIONIQ_API_KEY", // Get free key at https://locationiq.com/
            q: input,
            format: "json",
            limit: "5",
            countrycodes: "us", // Remove for worldwide search
            addressdetails: "1",
          })
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      const transformedSuggestions = data.map((place) => ({
        place_id: place.place_id,
        description: place.display_name,
        structured_formatting: {
          main_text: place.name || place.display_name.split(",")[0],
          secondary_text: place.display_name
            .split(",")
            .slice(1)
            .join(",")
            .trim(),
        },
        geometry: {
          lat: parseFloat(place.lat),
          lng: parseFloat(place.lon),
        },
        address: place.address,
      }));

      setSuggestions(transformedSuggestions);
    } catch (error) {
      console.error("Error fetching place suggestions:", error);
      // Fallback to manual entry
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  // Using REST Countries API + Local search as completely free alternative
  const searchPlacesFree = async (input, setSuggestions, setLoading) => {
    if (!input.trim() || input.length < 3) {
      setSuggestions([]);
      return;
    }

    setLoading(true);

    try {
      // Using a free, no-API-key service: Photon (OpenStreetMap)
      const response = await fetch(
        `https://photon.komoot.io/api/?` +
          new URLSearchParams({
            q: input,
            limit: "5",
            osm_tag: "place",
          })
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      const transformedSuggestions = data.features.map((feature, index) => ({
        place_id: `photon-${feature.properties.osm_id || index}`,
        description: `${feature.properties.name || ""} ${
          feature.properties.street || ""
        } ${feature.properties.city || ""} ${
          feature.properties.state || ""
        }`.trim(),
        structured_formatting: {
          main_text:
            feature.properties.name || feature.properties.street || "Location",
          secondary_text: `${feature.properties.city || ""} ${
            feature.properties.state || ""
          } ${feature.properties.country || ""}`.trim(),
        },
        geometry: {
          lat: feature.geometry.coordinates[1],
          lng: feature.geometry.coordinates[0],
        },
        properties: feature.properties,
      }));

      setSuggestions(
        transformedSuggestions.filter(
          (s) => s.structured_formatting.main_text !== "Location"
        )
      );
    } catch (error) {
      console.error("Error fetching place suggestions:", error);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  // Debounced search functions
  const debouncedFromSearch = debounce((input) => {
    searchPlacesFree(input, setFromSuggestions, setLoadingFrom);
  }, 500);

  const debouncedToSearch = debounce((input) => {
    searchPlacesFree(input, setToSuggestions, setLoadingTo);
  }, 500);

  const handleFromChange = () => {
    setIsEditingFrom(true);
    setShowFromSuggestions(true);
  };

  const handleToChange = () => {
    setIsEditingTo(true);
    setShowToSuggestions(true);
  };

  const handleFromBlur = () => {
    setTimeout(() => {
      setIsEditingFrom(false);
      setShowFromSuggestions(false);
    }, 150);
  };

  const handleToBlur = () => {
    setTimeout(() => {
      setIsEditingTo(false);
      setShowToSuggestions(false);
    }, 150);
  };

  const handleFromInputChange = (e) => {
    const value = e.target.value;
    setFromLocation(value);

    if (value.length >= 3) {
      debouncedFromSearch(value);
    } else {
      setFromSuggestions([]);
    }
  };

  const handleToInputChange = (e) => {
    const value = e.target.value;
    setToLocation(value);

    if (value.length >= 3) {
      debouncedToSearch(value);
    } else {
      setToSuggestions([]);
    }
  };

  const handleKeyDown = (e, type) => {
    if (e.key === "Enter") {
      if (type === "from") {
        setIsEditingFrom(false);
        setShowFromSuggestions(false);
      } else {
        setIsEditingTo(false);
        setShowToSuggestions(false);
      }
    }
  };

  const selectFromSuggestion = (suggestion) => {
    setFromLocation(suggestion.description);
    setIsEditingFrom(false);
    setShowFromSuggestions(false);
    setFromSuggestions([]);

    console.log("Selected from location:", {
      address: suggestion.description,
      coordinates: suggestion.geometry,
      properties: suggestion.properties,
    });
    setFromPickupLongitude(suggestion.geometry.lng);
    setFromPickupLatitude(suggestion.geometry.lat);
  };

  const selectToSuggestion = (suggestion) => {
    setToLocation(suggestion.description);
    setIsEditingTo(false);
    setShowToSuggestions(false);
    setToSuggestions([]);

    console.log("Selected to location:", {
      address: suggestion.description,
      coordinates: suggestion.geometry,
      properties: suggestion.properties,
    });
    setToDropOffLongitude(suggestion.geometry.lng);
    setToDropOffLatitude(suggestion.geometry.lat);
  };

  return (
    <div className="ml-4 locationParentContainer w-full">
      <div className="justify-between locationDetailsContainer flex">
        <div className="w-[69%] locationContainer">
          <h2 className="font-sans text-[20px] mb-4 text-[#121212] font-bold">
            {t("location.title")}
          </h2>
          <div className="w-full flex flex-col gap-[16px]">
            {/* From Location */}
            <div className="relative">
              <div className="w-full h-[68px] locationFrom rounded-[8px] border-[1px] px-[16px] flex items-center justify-between border-[#e3e3e3]">
                <div className="flex items-center flex-1">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C14.3869 2 16.6761 2.94821 18.364 4.63604C20.0518 6.32387 21 8.61305 21 11C21 14.074 19.324 16.59 17.558 18.395C16.6757 19.2871 15.7129 20.0958 14.682 20.811L14.256 21.101L14.056 21.234L13.679 21.474L13.343 21.679L12.927 21.921C12.6446 22.0822 12.3251 22.1669 12 22.1669C11.6749 22.1669 11.3554 22.0822 11.073 21.921L10.657 21.679L10.137 21.359L9.945 21.234L9.535 20.961C8.42283 20.2085 7.3869 19.3491 6.442 18.395C4.676 16.589 3 14.074 3 11C3 8.61305 3.94821 6.32387 5.63604 4.63604C7.32387 2.94821 9.61305 2 12 2ZM12 4C10.1435 4 8.36301 4.7375 7.05025 6.05025C5.7375 7.36301 5 9.14348 5 11C5 13.322 6.272 15.36 7.871 16.996C8.55853 17.692 9.30166 18.3308 10.093 18.906L10.551 19.232C10.699 19.3353 10.8413 19.4313 10.978 19.52L11.368 19.77L11.711 19.979L12 20.148L12.455 19.879L12.822 19.649C13.0173 19.525 13.2263 19.386 13.449 19.232L13.907 18.906C14.6983 18.3308 15.4415 17.692 16.129 16.996C17.728 15.361 19 13.322 19 11C19 9.14348 18.2625 7.36301 16.9497 6.05025C15.637 4.7375 13.8565 4 12 4ZM12 7C13.0609 7 14.0783 7.42143 14.8284 8.17157C15.5786 8.92172 16 9.93913 16 11C16 12.0609 15.5786 13.0783 14.8284 13.8284C14.0783 14.5786 13.0609 15 12 15C10.9391 15 9.92172 14.5786 9.17157 13.8284C8.42143 13.0783 8 12.0609 8 11C8 9.93913 8.42143 8.92172 9.17157 8.17157C9.92172 7.42143 10.9391 7 12 7ZM12 9C11.4696 9 10.9609 9.21071 10.5858 9.58579C10.2107 9.96086 10 10.4696 10 11C10 11.5304 10.2107 12.0391 10.5858 12.4142C10.9609 12.7893 11.4696 13 12 13C12.5304 13 13.0391 12.7893 13.4142 12.4142C13.7893 12.0391 14 11.5304 14 11C14 10.4696 13.7893 9.96086 13.4142 9.58579C13.0391 9.21071 12.5304 9 12 9Z"
                        fill="#12B981"
                      />
                    </svg>
                    <p className="text-[#b8b8b8] ml-2 font-light font-sans text-[16px] leading-[25.6px]">
                      {t("location.from")}
                    </p>
                  </div>
                  <div className="flex flex-1 items-center">
                    <p className="text-[#b8b8b8] ml-2 font-light font-sans text-[16px]">
                      -
                    </p>
                    {isEditingFrom ? (
                      <div className="flex items-center flex-1">
                        <input
                          ref={fromInputRef}
                          type="text"
                          value={fromLocation}
                          onChange={handleFromInputChange}
                          onBlur={handleFromBlur}
                          onKeyDown={(e) => handleKeyDown(e, "from")}
                          placeholder="Search places... (min 3 chars)"
                          className="text-[#707070] ml-2 font-sans text-[16px] leading-[25.6px] bg-transparent outline-none flex-1 min-w-0"
                        />
                        {loadingFrom && (
                          <div className="ml-2">
                            <svg
                              className="animate-spin h-4 w-4 text-blue-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="text-[#707070] ml-2 font-sans text-[16px] line-clamp-2 leading-[25.6px] fromLocationText truncate">
                        {fromLocation}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={handleFromChange}
                  className="text-[#3C82F6] hover:bg-primary py-1 px-2 hover:text-white rounded-[20px] cursor-pointer text-[10px] text-manrope font-light ml-2"
                >
                  {t("location.btn")}
                </button>
              </div>

              {/* From Location Suggestions */}
              {showFromSuggestions && fromSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 z-50 bg-white border border-[#e3e3e3] rounded-[8px] shadow-lg mt-1 max-h-60 overflow-y-auto">
                  {fromSuggestions.map((suggestion, index) => (
                    <div
                      key={`${suggestion.place_id}-${index}`}
                      onClick={() => selectFromSuggestion(suggestion)}
                      className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"
                    >
                      <div className="flex items-start">
                        <svg
                          className="w-4 h-4 text-blue-500 mr-3 mt-1 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {suggestion.structured_formatting.main_text}
                          </p>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            {suggestion.structured_formatting.secondary_text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* To Location */}
            <div className="relative">
              <div className="w-full h-[68px] rounded-[8px] locationFrom border-[1px] px-[16px] flex items-center justify-between border-[#e3e3e3]">
                <div className="flex items-center flex-1">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C14.3869 2 16.6761 2.94821 18.364 4.63604C20.0518 6.32387 21 8.61305 21 11C21 14.074 19.324 16.59 17.558 18.395C16.6757 19.2871 15.7129 20.0958 14.682 20.811L14.256 21.101L14.056 21.234L13.679 21.474L13.343 21.679L12.927 21.921C12.6446 22.0822 12.3251 22.1669 12 22.1669C11.6749 22.1669 11.3554 22.0822 11.073 21.921L10.657 21.679L10.137 21.359L9.945 21.234L9.535 20.961C8.42283 20.2085 7.3869 19.3491 6.442 18.395C4.676 16.589 3 14.074 3 11C3 8.61305 3.94821 6.32387 5.63604 4.63604C7.32387 2.94821 9.61305 2 12 2ZM12 4C10.1435 4 8.36301 4.7375 7.05025 6.05025C5.7375 7.36301 5 9.14348 5 11C5 13.322 6.272 15.36 7.871 16.996C8.55853 17.692 9.30166 18.3308 10.093 18.906L10.551 19.232C10.699 19.3353 10.8413 19.4313 10.978 19.52L11.368 19.77L11.711 19.979L12 20.148L12.455 19.879L12.822 19.649C13.0173 19.525 13.2263 19.386 13.449 19.232L13.907 18.906C14.6983 18.3308 15.4415 17.692 16.129 16.996C17.728 15.361 19 13.322 19 11C19 9.14348 18.2625 7.36301 16.9497 6.05025C15.637 4.7375 13.8565 4 12 4ZM12 7C13.0609 7 14.0783 7.42143 14.8284 8.17157C15.5786 8.92172 16 9.93913 16 11C16 12.0609 15.5786 13.0783 14.8284 13.8284C14.0783 14.5786 13.0609 15 12 15C10.9391 15 9.92172 14.5786 9.17157 13.8284C8.42143 13.0783 8 12.0609 8 11C8 9.93913 8.42143 8.92172 9.17157 8.17157C9.92172 7.42143 10.9391 7 12 7ZM12 9C11.4696 9 10.9609 9.21071 10.5858 9.58579C10.2107 9.96086 10 10.4696 10 11C10 11.5304 10.2107 12.0391 10.5858 12.4142C10.9609 12.7893 11.4696 13 12 13C12.5304 13 13.0391 12.7893 13.4142 12.4142C13.7893 12.0391 14 11.5304 14 11C14 10.4696 13.7893 9.96086 13.4142 9.58579C13.0391 9.21071 12.5304 9 12 9Z"
                        fill="#DE2527"
                      />
                    </svg>
                    <p className="text-[#b8b8b8] ml-2 font-light font-sans text-[16px] leading-[25.6px]">
                      {t("location.to")}
                    </p>
                  </div>
                  <div className="flex flex-1 items-center">
                    <p className="text-[#b8b8b8] ml-2 font-light font-sans text-[16px]">
                      -
                    </p>
                    {isEditingTo ? (
                      <div className="flex items-center flex-1">
                        <input
                          ref={toInputRef}
                          type="text"
                          value={toLocation}
                          onChange={handleToInputChange}
                          onBlur={handleToBlur}
                          onKeyDown={(e) => handleKeyDown(e, "to")}
                          placeholder="Search places... (min 3 chars)"
                          className="text-[#707070] ml-2 font-sans text-[16px] leading-[25.6px] bg-transparent outline-none flex-1 min-w-0"
                        />
                        {loadingTo && (
                          <div className="ml-2">
                            <svg
                              className="animate-spin h-4 w-4 text-blue-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="text-[#707070] ml-2 fromLocationText line-clamp-2 truncate font-sans text-[16px] leading-[25.6px]">
                        {toLocation}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={handleToChange}
                  className="text-[#3C82F6] hover:bg-primary py-1 px-2 hover:text-white rounded-[20px] cursor-pointer text-[10px] text-manrope font-light ml-2"
                >
                  {t("location.btn")}
                </button>
              </div>

              {/* To Location Suggestions */}
              {showToSuggestions && toSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 z-50 bg-white border border-[#e3e3e3] rounded-[8px] shadow-lg mt-1 max-h-60 overflow-y-auto">
                  {toSuggestions.map((suggestion, index) => (
                    <div
                      key={`${suggestion.place_id}-${index}`}
                      onClick={() => selectToSuggestion(suggestion)}
                      className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"
                    >
                      <div className="flex items-start">
                        <svg
                          className="w-4 h-4 text-blue-500 mr-3 mt-1 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {suggestion.structured_formatting.main_text}
                          </p>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            {suggestion.structured_formatting.secondary_text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <img className="locationMap" src={Map} alt="map" />
        </div>
      </div>
    </div>
  );
};

export default Location;
