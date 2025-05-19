import React, { useState, useRef, useEffect } from "react";
import LocationIcon from "../Assets/SVG/LocationIcon";
import DownIcon from "../Assets/SVG/DownIcon";
import MoveSize from "../Assets/SVG/MoveSize";
import PrimaryBtn from "./PrimaryBtn";
import { useNavigate } from "react-router-dom";

const MoveDetails = () => {
  const navigate = useNavigate();
  // State management for both inputs
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [moveSize, setMoveSize] = useState("");
  const [showFromModal, setShowFromModal] = useState(false);
  const [showToModal, setShowToModal] = useState(false);
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState({ from: -1, to: -1 });

  // Refs for DOM access
  const fromModalRef = useRef(null);
  const toModalRef = useRef(null);
  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);
  const locationItemsRef = useRef({ from: [], to: [] });

  // Mock location data
  const allLocations = [
    "Keizersgracht 123, 1015 CJ Amsterdam",
    "Herengracht 150, 1015 BA Amsterdam",
    "Lijnbaansgracht 70, 1016 EE Amsterdam",
    "Amstelstraat 89, 1018 CB Amsterdam",
  ];

  // size
  const modalRef = useRef(null);
  const inputRef = useRef(null);

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

  const houses = [
    {
      text: "Few Items",
      desc: '(10" Truck)',
    },
    {
      text: "1 Bedrooom",
      desc: '(17" Truck)',
    },
    {
      text: "2 Bedrooms",
      desc: '(20" Truck)',
    },
    {
      text: "3 Bedrooms",
      desc: '(26" Truck)',
    },
    {
      text: "4 Bedrooms",
      desc: '(28" Truck)',
    },
    {
      text: "5 Bedrooms",
      desc: '(32" Truck)',
    },
    {
      text: "6 Bedrooms",
      desc: '(36" Truck)',
    },
  ];

  const apartments = [
    {
      text: "Few Items",
      desc: '(10" Truck)',
    },
    {
      text: "Studio",
      desc: '(15" Truck)',
    },
    {
      text: "1 Bedrooom",
      desc: '(17" Truck)',
    },
    {
      text: "2 Bedrooms",
      desc: '(20" Truck)',
    },
    {
      text: "3 Bedrooms",
      desc: '(26" Truck)',
    },
    {
      text: "4 Bedrooms",
      desc: '(28" Truck)',
    },
    {
      text: "5 Bedrooms",
      desc: '(32" Truck)',
    },
    {
      text: "6 Bedrooms",
      desc: '(36" Truck)',
    },
  ];

  const storages = [
    "Small 2” x 4”",
    "Small 5” x 5”",
    "Small 5” x 10”",
    "Small 5” x 15”",
    "Small 10” x 20”",
    "Small 10” x 30”",
  ];

  const [activeMoveSizeTab, setActiveMoveSizeTab] = useState("house");

  // Tab content based on active tab
  const renderTabContent = () => {
    switch (activeMoveSizeTab) {
      case "house":
        return (
          <div className="p-3  overflow-y-auto h-[300px]">
            {houses.map((house, index) => (
              <div
                key={`house-${index}`}
                className="p-3 flex items-center border-b border-[#E3E2E0] hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setMoveSize(house.text);
                  setShowSizeModal(false);
                }}
              >
                <p className="font-sans text-[16px] leading-[25.6px] text-[#373737]">
                  {house.text}
                </p>
                <p className="text-[16px] ml-1 font-sans text-[#9e9e9e]">
                  {house.desc}
                </p>
              </div>
            ))}
          </div>
        );
      case "apartment":
        return (
          <div className="p-3  overflow-y-auto h-[300px]">
            {apartments.map((apartment, index) => (
              <div
                key={`apartment-${index}`}
                className="p-3 flex items-center border-b border-[#E3E2E0] hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setMoveSize(apartment.text);
                  setShowSizeModal(false);
                }}
              >
                <p className="font-sans text-[16px] leading-[25.6px] text-[#373737]">
                  {apartment.text}
                </p>
                <p className="text-[16px] ml-1 font-sans text-[#9e9e9e]">
                  {apartment.desc}
                </p>
              </div>
            ))}
          </div>
        );
      case "storage":
        return (
          <div className="p-3  overflow-y-auto h-[300px]">
            {storages.map((store, index) => (
              <div
                key={`storage-${index}`}
                className="p-3 flex items-center border-b border-[#E3E2E0] hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setMoveSize(store);
                  setShowSizeModal(false);
                }}
              >
                <p className="font-sans text-[16px] leading-[25.6px] text-[#373737]">
                  {store}
                </p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  // Filter locations for both inputs
  const filteredLocations = {
    from: allLocations.filter((loc) =>
      loc.toLowerCase().includes(fromLocation.toLowerCase())
    ),
    to: allLocations.filter((loc) =>
      loc.toLowerCase().includes(toLocation.toLowerCase())
    ),
  };

  // Common handlers
  const handleInputChange = (type) => (e) => {
    const value = e.target.value;
    if (type === "from") {
      setFromLocation(value);
      setActiveIndex((prev) => ({ ...prev, from: -1 }));
    } else {
      setToLocation(value);
      setActiveIndex((prev) => ({ ...prev, to: -1 }));
    }
  };

  const handleSelectLocation = (type) => (location) => {
    if (type === "from") {
      setFromLocation(location);
      setShowFromModal(false);
      fromInputRef.current?.focus();
    } else {
      setToLocation(location);
      setShowToModal(false);
      toInputRef.current?.focus();
    }
  };

  const handleKeyDown = (type) => (e) => {
    const showModal = type === "from" ? showFromModal : showToModal;
    if (!showModal) return;

    const locations =
      type === "from" ? filteredLocations.from : filteredLocations.to;
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
          handleSelectLocation(type)(locations[activeIdx]);
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

  // Modal template
  const renderLocationModal = (type) => {
    const showModal = type === "from" ? showFromModal : showToModal;
    const locations =
      type === "from" ? filteredLocations.from : filteredLocations.to;
    const activeIdx = type === "from" ? activeIndex.from : activeIndex.to;

    return (
      showModal && (
        <div
          ref={type === "from" ? fromModalRef : toModalRef}
          className="w-[400px] max-h-[300px] fromAndToContainer overflow-y-auto bg-white absolute top-[80px] border border-gray-200 rounded-[12px] left-0 shadow-lg z-50"
        >
          <p className="text-[#3C82F6] px-3 mb-1 pt-3 font-sans text-[12px]">
            Suggested Destinations
          </p>
          {locations.length > 0 ? (
            locations.map((location, index) => (
              <div
                key={`${type}-${location}`}
                ref={(el) => (locationItemsRef.current[type][index] = el)}
                className={`p-3 border-b-[1px] border-[#E3E2E0] hover:bg-gray-100 cursor-pointer ${
                  index === activeIdx ? "bg-blue-50" : ""
                }`}
                onClick={() => handleSelectLocation(type)(location)}
              >
                <p className="font-sans text-[16px] leading-[25.6px] text-[#373737]">
                  {location}
                </p>
                <p className="text-[12px] font-sans text-[#9e9e9e]">
                  200 km from your location
                </p>
              </div>
            ))
          ) : (
            <div className="p-3 text-gray-500">No locations found</div>
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

  const handlePress = () => {
    if (
      data.fromLocation === "" ||
      data.toLocation === "" ||
      data.moveSize === ""
    )
      return;
    navigate("/quote", { state: { data } });
  };

  return (
    <div className="w-[90vw] mt-16 moveDetails bg-gradient-to-br rounded-[20px] flex justify-center items-center p-8 from-[#1A7BC6] to-[#054D96] max-w-[1500px] mx-auto h-fit">
      <div className="w-[90%]">
        <div className="bg-[#136AB5] flex justify-center w-fit mx-auto items-center rounded-[100px] p-3">
          <p className="text-white font-sans text-[14px]">GET A QUOTE</p>
        </div>
        <h2 className="font-unbounded moveDetailsText text-white text-center font-bold my-2 text-[36px]">
          Submit your move details
        </h2>
        <p className="font-sans moveDetailsDesc text-center text-[18px] text-[#BCDFF6]">
          Professional movers for you, It only takes a minute
        </p>

        <div className="w-full bg-white my-4 h-[80px] moveDetailsCtaContainer rounded-[10px] flex">
          {/* Moving From Input */}
          <div className="w-[28%] moveDetailsBtnBox relative flex justify-between border-r-2 border-[#E3E2E0] p-3 items-center">
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
              <DownIcon />
            </button>
            {renderLocationModal("from")}
          </div>

          {/* Moving To Input */}
          <div className="w-[28%] moveDetailsBtnBox relative flex justify-between border-r-2 border-[#E3E2E0] p-3 items-center">
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
              <DownIcon />
            </button>
            {renderLocationModal("to")}
          </div>

          {/* Moving Size Input */}
          <div className="w-[28%] moveDetailsBtnBox relative flex justify-between border-r-2 border-[#E3E2E0] p-3 items-center">
            <div className="flex w-[90%] items-center">
              <div className="mr-[8px]">
                <MoveSize />
              </div>
              <input
                ref={inputRef}
                value={moveSize}
                // onChange={(e) => setMoveSize(e.target.value)}
                onFocus={() => setShowSizeModal(true)}
                placeholder="Moving Size"
                className="font-sans w-full font-light text-[#707070] leading-[25.6px] border-none outline-none"
              />
            </div>
            <button onClick={() => setShowSizeModal(true)}>
              <DownIcon />
            </button>

            {showSizeModal && (
              <div
                ref={modalRef}
                className="w-[400px] max-h-[300px] fromAndToContainer overflow-y-auto bg-white absolute top-[80px] border border-gray-200 rounded-[12px] left-0 shadow-lg z-50"
              >
                <div className="p-3 flex items-center border-b-[1px] justify-between">
                  <button
                    onClick={() => setActiveMoveSizeTab("house")}
                    className={`${
                      activeMoveSizeTab === "house"
                        ? "bg-[#F0F9FD] border-[1px]"
                        : ""
                    } w-[100px] p-2 rounded-[8px] border-[#BCDFF6] flex items-center`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M8.38688 10.9739H13.3869M4.22021 14.1406V9.68389C4.22021 9.23889 4.22021 9.01639 4.27438 8.80889C4.32235 8.62548 4.40126 8.4516 4.50771 8.29473C4.62855 8.11723 4.79605 7.96973 5.13105 7.67723L9.13188 4.17556C9.75355 3.63223 10.0644 3.36056 10.4135 3.25723C10.7219 3.16556 11.051 3.16556 11.3594 3.25723C11.7094 3.36056 12.021 3.63223 12.6427 4.17723L16.6427 7.67723C16.9785 7.97056 17.1452 8.11723 17.266 8.29389C17.3727 8.45334 17.4505 8.625 17.4994 8.80889C17.5535 9.01639 17.5535 9.23889 17.5535 9.68389V14.1439C17.5535 15.0756 17.5535 15.5414 17.3719 15.8981C17.2117 16.2115 16.9565 16.4661 16.6427 16.6256C16.2869 16.8072 15.821 16.8072 14.8894 16.8072H6.88438C5.95271 16.8072 5.48605 16.8072 5.13021 16.6256C4.81675 16.466 4.56181 16.2113 4.40188 15.8981C4.22021 15.5406 4.22021 15.0739 4.22021 14.1406Z"
                        stroke={
                          activeMoveSizeTab === "house" ? "#136AB5" : "#9e9e9e"
                        }
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={`${
                        activeMoveSizeTab === "house"
                          ? "text-[#136AB5]"
                          : "text-[#9e9e9e]"
                      } ml-2 font-sans text-[14px]`}
                    >
                      House
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveMoveSizeTab("apartment")}
                    className={`${
                      activeMoveSizeTab === "apartment"
                        ? "bg-[#F0F9FD] border-[1px]"
                        : ""
                    } w-[150px] p-2 rounded-[8px] border-[#BCDFF6] flex items-center`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M1.88687 16.6406H16.8869M6.88687 5.80729H7.7202M6.88687 9.14062H7.7202M6.88687 12.474H7.7202M11.0535 5.80729H11.8869M11.0535 9.14062H11.8869M11.0535 12.474H11.8869M3.55354 16.6406V3.30729C3.55354 2.86526 3.72913 2.44134 4.04169 2.12878C4.35425 1.81622 4.77818 1.64063 5.2202 1.64062H13.5535C13.9956 1.64063 14.4195 1.81622 14.732 2.12878C15.0446 2.44134 15.2202 2.86526 15.2202 3.30729V16.6406"
                        stroke={
                          activeMoveSizeTab === "apartment"
                            ? "#136AB5"
                            : "#9e9e9e"
                        }
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={`${
                        activeMoveSizeTab === "apartment"
                          ? "text-[#136AB5]"
                          : "text-[#9e9e9e]"
                      } ml-2 font-sans text-[14px]`}
                    >
                      Apartment
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveMoveSizeTab("storage")}
                    className={`${
                      activeMoveSizeTab === "storage"
                        ? "bg-[#F0F9FD] border-[1px]"
                        : ""
                    } w-[100px] p-2 rounded-[8px] border-[#BCDFF6] flex items-center`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                    >
                      <path
                        d="M8.88686 0.307129C4.30353 0.307129 0.553528 4.05713 0.553528 8.64046V13.6405H17.2202V8.64046C17.2202 4.05713 13.4702 0.307129 8.88686 0.307129ZM8.88686 1.9738C10.9952 1.9738 12.8702 2.9488 14.0952 4.4738H3.68686C4.90353 2.9488 6.77853 1.9738 8.88686 1.9738ZM5.55353 11.9738H2.22019V8.64046C2.22019 7.75713 2.39519 6.91546 2.70353 6.14046H5.55353V11.9738ZM10.5535 11.9738H7.22019V6.14046H10.5535V11.9738ZM15.5535 11.9738H12.2202V6.14046H15.0702C15.3785 6.91546 15.5535 7.75713 15.5535 8.64046V11.9738Z"
                        fill={
                          activeMoveSizeTab === "storage"
                            ? "#136AB5"
                            : "#9e9e9e"
                        }
                      />
                    </svg>
                    <span
                      className={`${
                        activeMoveSizeTab === "storage"
                          ? "text-[#136AB5]"
                          : "text-[#9e9e9e]"
                      } ml-2 font-sans text-[14px]`}
                    >
                      Storage
                    </span>
                  </button>
                </div>
                {renderTabContent()}
              </div>
            )}
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
