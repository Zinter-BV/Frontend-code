import React, { useState, useRef, useEffect } from "react";
import LocationIcon from "../Assets/SVG/LocationIcon";
import DownIcon from "../Assets/SVG/DownIcon";
import MoveSize from "../Assets/SVG/MoveSize";
import PrimaryBtn from "./PrimaryBtn";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../redux/action";

const MoveDetails = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // State management for both inputs
  const [fromLocation, setFromLocation] = useState("");
  const [fromPickupLongitude, setFromPickupLongitude] = useState("");
  const [fromPickupLatitude, setFromPickupLatitude] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [toDropOffLongitude, setToDropOffLongitude] = useState("");
  const [toDropOffLatitude, setToDropOffLatitude] = useState("");
  const [moveSize, setMoveSize] = useState("");
  const [showFromModal, setShowFromModal] = useState(false);
  const [showToModal, setShowToModal] = useState(false);
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState({ from: -1, to: -1 });

  // Places search states
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [loadingFrom, setLoadingFrom] = useState(false);
  const [loadingTo, setLoadingTo] = useState(false);

  // Refs for DOM access
  const fromModalRef = useRef(null);
  const toModalRef = useRef(null);
  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);
  const locationItemsRef = useRef({ from: [], to: [] });

  // size
  const modalRef = useRef(null);
  const inputRef = useRef(null);

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

  // Free Photon API search function - NO API KEY REQUIRED
  const searchPlaces = async (input, setSuggestions, setLoading) => {
    if (!input.trim() || input.length < 3) {
      setSuggestions([]);
      return;
    }

    setLoading(true);

    try {
      // Using Photon API - 100% FREE, no registration needed
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
    searchPlaces(input, setFromSuggestions, setLoadingFrom);
  }, 500);

  const debouncedToSearch = debounce((input) => {
    searchPlaces(input, setToSuggestions, setLoadingTo);
  }, 500);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        e.target !== inputRef.current
      ) {
        setShowSizeModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Combined filter for both mock data and API suggestions
  const getCombinedSuggestions = (type) => {
    return type === "from" ? fromSuggestions : toSuggestions;
  };

  // Common handlers
  const handleInputChange = (type) => (e) => {
    const value = e.target.value;
    if (type === "from") {
      setFromLocation(value);
      setActiveIndex((prev) => ({ ...prev, from: -1 }));

      // Trigger API search for places
      if (value.length >= 3) {
        debouncedFromSearch(value);
      } else {
        setFromSuggestions([]);
      }
    } else {
      setToLocation(value);
      setActiveIndex((prev) => ({ ...prev, to: -1 }));

      // Trigger API search for places
      if (value.length >= 3) {
        debouncedToSearch(value);
      } else {
        setToSuggestions([]);
      }
    }
  };

  const handleSelectLocation = (type) => (suggestion) => {
    console.log(suggestion);

    if (type === "from") {
      setFromLocation(suggestion.description);
      setFromPickupLongitude(suggestion.geometry.lng);
      setFromPickupLatitude(suggestion.geometry.lat);
      setShowFromModal(false);
      setFromSuggestions([]);
      fromInputRef.current?.focus();
    } else {
      setToLocation(suggestion.description);
      setToDropOffLongitude(suggestion.geometry.lng);
      setToDropOffLatitude(suggestion.geometry.lat);
      setShowToModal(false);
      setToSuggestions([]);
      toInputRef.current?.focus();
    }
  };

  const handleKeyDown = (type) => (e) => {
    const showModal = type === "from" ? showFromModal : showToModal;
    if (!showModal) return;

    const locations = getCombinedSuggestions(type);
    const activeIdx = type === "from" ? activeIndex.from : activeIndex.to;
    const setActive = (idx) =>
      setActiveIndex((prev) => ({ ...prev, [type]: idx }));

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActive(Math.min(activeIdx + 1, locations.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActive(Math.max(activeIdx - 1, -1));
        break;
      case "Enter":
        if (activeIdx >= 0) {
          e.preventDefault();
          const apiSuggestions =
            type === "from" ? fromSuggestions : toSuggestions;
          handleSelectLocation(type)(apiSuggestions[activeIdx]);
        }
        break;
      case "Escape":
        type === "from" ? setShowFromModal(false) : setShowToModal(false);
        break;
    }
  };

  // Scroll active item into view
  useEffect(() => {
    ["from", "to"].forEach((type) => {
      const activeIdx = type === "from" ? activeIndex.from : activeIndex.to;
      if (activeIdx >= 0 && locationItemsRef.current[type][activeIdx]) {
        locationItemsRef.current[type][activeIdx]?.scrollIntoView({
          block: "nearest",
        });
      }
    });
  }, [activeIndex.from, activeIndex.to]);

  // Close modals when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        showFromModal &&
        fromModalRef.current &&
        !fromModalRef.current.contains(e.target)
      ) {
        if (e.target !== fromInputRef.current) setShowFromModal(false);
      }
      if (
        showToModal &&
        toModalRef.current &&
        !toModalRef.current.contains(e.target)
      ) {
        if (e.target !== toInputRef.current) setShowToModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showFromModal, showToModal]);

  // Modal template with API suggestions
  const renderLocationModal = (type) => {
    const showModal = type === "from" ? showFromModal : showToModal;
    const locations = getCombinedSuggestions(type);
    const apiSuggestions = type === "from" ? fromSuggestions : toSuggestions;
    const loading = type === "from" ? loadingFrom : loadingTo;
    const activeIdx = type === "from" ? activeIndex.from : activeIndex.to;

    return (
      showModal && (
        <div
          ref={type === "from" ? fromModalRef : toModalRef}
          className="w-[400px] max-h-[300px] fromAndToContainer overflow-y-auto bg-white absolute top-[80px] border border-gray-200 rounded-[12px] left-0 shadow-lg z-50"
        >
          <p className="text-[#3C82F6] px-3 mb-1 pt-3 font-sans text-[12px]">
            {loading ? "Searching places..." : t("hero.suggestedDestinations")}
          </p>

          {loading && (
            <div className="p-3 flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 text-blue-500"
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
              <span className="ml-2 text-sm text-gray-500">
                Loading suggestions...
              </span>
            </div>
          )}

          {!loading && apiSuggestions.length > 0
            ? apiSuggestions.map((suggestion, index) => (
                <div
                  key={`${type}-${suggestion.place_id}`}
                  ref={(el) => (locationItemsRef.current[type][index] = el)}
                  className={`p-3 border-b-[1px] border-[#E3E2E0] hover:bg-gray-100 cursor-pointer ${
                    index === activeIdx ? "bg-blue-50" : ""
                  }`}
                  onClick={() => handleSelectLocation(type)(suggestion)}
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
                      <p className="font-sans text-[16px] leading-[25.6px] text-[#373737] truncate">
                        {suggestion.structured_formatting.main_text}
                      </p>
                      <p className="text-[12px] font-sans text-[#9e9e9e] line-clamp-2">
                        {suggestion.structured_formatting.secondary_text}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : !loading && (
                <div className="p-3 text-gray-500">
                  <p className="font-sans text-[14px]">
                    {(type === "from" ? fromLocation : toLocation).length < 3
                      ? "Type at least 3 characters to search places..."
                      : "No locations found. Try a different search term."}
                  </p>
                </div>
              )}
        </div>
      )
    );
  };

  const data = {
    fromLocation,
    toLocation,
    moveSize,
  };

  const dispatch = useDispatch();

  const handlePress = () => {
    if (data.fromLocation === "" || data.toLocation === "") return;
    else {
      dispatch(
        setUserDetails({
          pickUpAddress: fromLocation,
          dropOffAddress: toLocation,
          pickUpLongitude: fromPickupLongitude,
          pickUpLatitude: fromPickupLatitude,
          dropOffLongitude: toDropOffLongitude,
          dropOffLatitude: toDropOffLatitude,
        })
      );
      navigate("/quote");
    }
  };

  return (
    <div className="w-[90vw] mt-16 moveDetails bg-gradient-to-br rounded-[20px] flex justify-center items-center p-8 from-[#1A7BC6] to-[#054D96] max-w-[1500px] mx-auto h-fit">
      <div className="w-[90%]">
        <div className="bg-[#136AB5] flex justify-center w-fit mx-auto items-center rounded-[100px] p-3">
          <p className="text-white font-sans text-[14px]">
            {t("hero.getQuote")}
          </p>
        </div>
        <h2 className="font-unbounded moveDetailsText text-white text-center font-bold my-2 text-[32px]">
          {t("features.smarterTitle")}
        </h2>
        <p className="font-sans moveDetailsDesc w-[60%] mx-auto text-center text-[18px] text-[#BCDFF6]">
          {t("features.smarterDescription")}
        </p>

        <div className="w-full bg-white my-4 h-[80px] moveDetailsCtaContainer rounded-[10px] flex">
          {/* Moving From Input */}
          <div className="w-[42%] moveDetailsBtnBox relative flex justify-between border-r-2 border-[#E3E2E0] p-3 items-center">
            <div className="flex w-[90%] items-center">
              <div className="mr-[8px]">
                <LocationIcon color="#12B981" />
              </div>
              <input
                ref={fromInputRef}
                value={fromLocation}
                onChange={handleInputChange("from")}
                onFocus={() => setShowFromModal(true)}
                onKeyDown={handleKeyDown("from")}
                placeholder="Moving From"
                className="font-sans w-full leading-[25.6px] font-light text-[#707070] border-none outline-none"
              />
            </div>
            <button onClick={() => setShowFromModal(true)}>
              {loadingFrom ? (
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
              ) : (
                <DownIcon />
              )}
            </button>
            {renderLocationModal("from")}
          </div>

          {/* Moving To Input */}
          <div className="w-[42%] moveDetailsBtnBox relative flex justify-between border-r-2 border-[#E3E2E0] p-3 items-center">
            <div className="flex w-[90%] items-center">
              <div className="mr-[8px]">
                <LocationIcon color="#DE2527" />
              </div>
              <input
                ref={toInputRef}
                value={toLocation}
                onChange={handleInputChange("to")}
                onFocus={() => setShowToModal(true)}
                onKeyDown={handleKeyDown("to")}
                placeholder="Moving To"
                className="font-sans w-full font-light text-[#707070] leading-[25.6px] border-none outline-none"
              />
            </div>
            <button onClick={() => setShowToModal(true)}>
              {loadingTo ? (
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
              ) : (
                <DownIcon />
              )}
            </button>
            {renderLocationModal("to")}
          </div>

          {/* Get Quote Button */}
          <div className="w-[16%] flex justify-center p-3 moversBtnContainer items-center">
            <PrimaryBtn
              handlePress={handlePress}
              className="text-[14px] moversBtn"
            >
              GET A QUOTE
            </PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoveDetails;
