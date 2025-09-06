import React, { useRef, useEffect, useState } from "react";
import "./movingInformation.css";

const MovingInformation = ({
  moveTime,
  setMoveTime,
  pickUpTime,
  setPickupTime,
  fullName,
  setFullName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  provinceId,
  setProvinceId,
  pickUpAddress,
  setPickUpAddress,
  dropOffAddress,
  setDropOffAddress,
  pickUpAddressNumber,
  setPickUpAddressNumber,
  dropOffAddressNumber,
  setDropOffAddressNumber,
  pickUpLongitude,
  setPickUpLongitude,
  pickUpLatitude,
  setPickUpLatitude,
  dropOffLongitude,
  setDropOffLongitude,
  dropOffLatitude,
  setDropOffLatitude,
  fromNumberOfFloors,
  setFromNumberOfFloors,
  toNumberOfFloors,
  setToNumberOfFloors,
  fromLongCarry,
  setFromLongCarry,
  toLongCarry,
  setToLongCarry,
  fromRemark,
  setFromRemark,
  toRemark,
  setToRemark,
  fromHasElevator,
  setFromHasElevator,
  toHasElevator,
  setToHasElevator,
  fromNeedShuttle,
  setFromNeedShuttle,
  toNeedShuttle,
  setToNeedShuttle,
  fromHasBuildingInsurance,
  setFromHasBuildingInsurance,
  toHasBuildingInsurance,
  setToHasBuildingInsurance,
  fromNeedHelpPacking,
  setFromNeedHelpPacking,
  toNeedHelpPacking,
  setToNeedHelpPacking,
  isEditingFrom,
  setIsEditingFrom,
  isEditingTo,
  setIsEditingTo,
  fromLocation,
  toLocation,
  setFromLocation,
  setToLocation,
}) => {
  const fromInputRef = useRef(null);
  const toInputRef = useRef(null);

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

  const handleFromChange = () => {
    setIsEditingFrom(true);
  };

  const handleToChange = () => {
    setIsEditingTo(true);
  };

  const handleFromBlur = () => {
    setIsEditingFrom(false);
  };

  const handleToBlur = () => {
    setIsEditingTo(false);
  };

  const handleFromInputChange = (e) => {
    setFromLocation(e.target.value);
  };

  const handleToInputChange = (e) => {
    setToLocation(e.target.value);
  };

  const handleKeyDown = (e, type) => {
    if (e.key === "Enter") {
      if (type === "from") {
        setIsEditingFrom(false);
      } else {
        setIsEditingTo(false);
      }
    }
  };
  //FROM
  // Change Background Color of selected option
  const [fromElevatorYes, setFromElevatorYes] = useState(true);
  const [fromElevatorNo, setFromElevatorNo] = useState(false);
  const [fromNeedShuttleYes, setFromNeedShuttleYes] = useState(true);
  const [fromNeedShuttleNo, setFromNeedShuttleNo] = useState(false);
  const [fromBuildingInsuranceYes, setFromBuildingInsuranceYes] =
    useState(true);
  const [fromBuildingInsuranceNo, setFromBuildingInsuranceNo] = useState(false);
  const [fromNeedHelpPackingYes, setFromNeedHelpPackingYes] = useState(true);
  const [fromNeedHelpPackingNo, setFromNeedHelpPackingNo] = useState(false);

  const handleFromElevator = (value) => {
    if (value === "yes") {
      setFromElevatorYes(true);
      setFromElevatorNo(false);
    } else {
      setFromElevatorYes(false);
      setFromElevatorNo(true);
    }
  };

  const handleFromNeedShuttle = (value) => {
    if (value === "yes") {
      setFromNeedShuttleYes(true);
      setFromNeedShuttleNo(false);
    } else {
      setFromNeedShuttleYes(false);
      setFromNeedShuttleNo(true);
    }
  };

  const handleFromBuildingInsurance = (value) => {
    if (value === "yes") {
      setFromBuildingInsuranceYes(true);
      setFromBuildingInsuranceNo(false);
    } else {
      setFromBuildingInsuranceYes(false);
      setFromBuildingInsuranceNo(true);
    }
  };

  const handleFromNeedHelpPacking = (value) => {
    if (value === "yes") {
      setFromNeedHelpPackingYes(true);
      setFromNeedHelpPackingNo(false);
    } else {
      setFromNeedHelpPackingYes(false);
      setFromNeedHelpPackingNo(true);
    }
  };

  // TO
  const [toElevatorYes, setToElevatorYes] = useState(true);
  const [toElevatorNo, setToElevatorNo] = useState(false);
  const [toNeedShuttleYes, setToNeedShuttleYes] = useState(true);
  const [toNeedShuttleNo, setToNeedShuttleNo] = useState(false);
  const [toBuildingInsuranceYes, setToBuildingInsuranceYes] = useState(true);
  const [toBuildingInsuranceNo, setToBuildingInsuranceNo] = useState(false);
  const [toNeedHelpPackingYes, setToNeedHelpPackingYes] = useState(true);
  const [toNeedHelpPackingNo, setToNeedHelpPackingNo] = useState(false);

  const handleToElevator = (value) => {
    if (value === "yes") {
      setToElevatorYes(true);
      setToElevatorNo(false);
    } else {
      setToElevatorYes(false);
      setToElevatorNo(true);
    }
  };

  const handleToNeedShuttle = (value) => {
    if (value === "yes") {
      setToNeedShuttleYes(true);
      setToNeedShuttleNo(false);
    } else {
      setToNeedShuttleYes(false);
      setToNeedShuttleNo(true);
    }
  };

  const handleToBuildingInsurance = (value) => {
    if (value === "yes") {
      setToBuildingInsuranceYes(true);
      setToBuildingInsuranceNo(false);
    } else {
      setToBuildingInsuranceYes(false);
      setToBuildingInsuranceNo(true);
    }
  };

  const handleToNeedHelpPacking = (value) => {
    if (value === "yes") {
      setToNeedHelpPackingYes(true);
      setToNeedHelpPackingNo(false);
    } else {
      setToNeedHelpPackingYes(false);
      setToNeedHelpPackingNo(true);
    }
  };

  return (
    <div className="ml-4 movingInfoBox w-full">
      <div className="overflow-y-scroll pb-[40px] h-[700px] moveBox custom-scroll w-fit">
        <div className="flex movingInformationHeader mb-4 items-center">
          <h3 className="mr-2 font-sans text-[20px] font-bold text-[#121212] ">
            Moving Information
          </h3>
          <p className="font-sans text-[20px] font-semibold italic text-[#9e9e9e]">
            3 Bedroom Apartment
          </p>
        </div>

        <div className="p-[24px] movingInformationContainer w-[600px] h-fit mb-20 border-[#e3e3e3] border-[1px] rounded-[12px] ">
          <p className="font-sans text-[#136AB5] text-[18px] font-bold ">
            Date and Time
          </p>
          <div className="mt-[10px] mb-6 border-[#e3e3e3] border-b-[1px] pb-3 ">
            <div className="flex mb-[15px] flex-col">
              <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                Move Date
              </label>
              <input
                placeholder="Select Move Date"
                type="date"
                value={moveTime}
                onChange={(e) => setMoveTime(e.target.value)}
                className="h-[45px] border-[#e3e3e3] w-full font-light border-[1px] outline-none p-[8px] rounded-[8px] "
              />
            </div>
            <div className="flex mb-[10px] flex-col">
              <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                Pickup Time
              </label>
              <input
                placeholder="Select Pickup Time"
                type="time"
                value={pickUpTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="h-[45px] border-[#e3e3e3] w-full font-light border-[1px] outline-none p-[8px] rounded-[8px] "
              />
            </div>
          </div>
          <p className="font-sans text-[#136AB5] text-[18px] font-bold ">
            Contact Info
          </p>
          <div className="mt-[10px] mb-6 border-[#e3e3e3] border-b-[1px] pb-3 ">
            <div className="flex mb-[15px] flex-col">
              <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                Full Name
              </label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter Your Full Name"
                type="text"
                className="h-[45px] border-[#e3e3e3] font-light w-full border-[1px] outline-none p-[8px] rounded-[8px] "
              />
            </div>
            <div className="flex mb-[10px] flex-col">
              <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                Email Address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
                type="email"
                className="h-[45px] w-full border-[#e3e3e3] font-light border-[1px] outline-none p-[8px] rounded-[8px] "
              />
            </div>
            <div className="flex mb-[10px] flex-col">
              <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                Phone Number
              </label>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter Your Phone Number"
                type="number"
                className="h-[45px] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full border-[#e3e3e3] font-light border-[1px] outline-none p-[8px] rounded-[8px] "
              />
            </div>
          </div>
          <div>
            <p className="font-sans mb-2 text-[#136AB5] text-[18px] font-bold ">
              Pickup Details
            </p>
            <div className="w-full h-[68px] locationFrom rounded-[8px] border-[1px] px-[16px] flex items-center justify-between border-[#e3e3e3] ">
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
                  <p className="text-[#b8b8b8] ml-2 font-light font-sans text-[16px] leading-[25.6px] ">
                    From
                  </p>
                </div>
                <div className="flex flex-1">
                  <p className="text-[#b8b8b8] ml-2 font-light font-sans text-[16px]">
                    -
                  </p>
                  {isEditingFrom ? (
                    <input
                      ref={fromInputRef}
                      type="text"
                      value={fromLocation}
                      onChange={handleFromInputChange}
                      onBlur={handleFromBlur}
                      onKeyDown={(e) => handleKeyDown(e, "from")}
                      className="text-[#707070] ml-2 font-sans text-[16px] leading-[25.6px] bg-transparent outline-none flex-1 min-w-0"
                    />
                  ) : (
                    <p className="text-[#707070] ml-2 font-sans text-[16px] line-clamp-2 leading-[25.6px] fromLocationText truncate ">
                      {fromLocation}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={handleFromChange}
                className="text-[#3C82F6] hover:bg-primary py-1 px-2 hover:text-white rounded-[20px] cursor-pointer text-[10px] text-manrope font-light ml-2"
              >
                CHANGE
              </button>
            </div>
            <div className="flex mt-4 mb-5 justify-between  items-center apartmentNumberContainer ">
              <div className="flex  w-[35%] mb-[10px] flex-col">
                <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                  Apartment Number
                </label>
                <input
                  value={pickUpAddressNumber}
                  onChange={(e) => setPickUpAddressNumber(e.target.value)}
                  placeholder="Apartment Number"
                  type="number"
                  className="h-[45px] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full border-[#e3e3e3] font-light border-[1px] outline-none p-[8px] rounded-[8px] "
                />
              </div>
              <div className="flex w-[60%] mb-[10px] flex-col">
                <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                  Remarks for the location
                </label>
                <input
                  value={fromRemark}
                  onChange={(e) => setFromRemark(e.target.value)}
                  placeholder="Enter Remarks for this location"
                  type="text"
                  className="h-[45px]  border-[#e3e3e3] font-light border-[1px] outline-none p-[8px] rounded-[8px] "
                />
              </div>
            </div>
            <div>
              <p className="font-sans mb-2 text-[#136AB5] text-[16px] ">
                Restrictions
              </p>
              <div className="flex mt-4 mb-1 justify-between  items-center apartmentNumberContainer">
                <div className="flex  w-[48%] mb-[10px] flex-col">
                  <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Number of floors
                  </label>
                  <input
                    value={fromNumberOfFloors}
                    onChange={(e) => setFromNumberOfFloors(e.target.value)}
                    placeholder="How many floors"
                    type="number"
                    className="h-[45px] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full border-[#e3e3e3] font-light border-[1px] outline-none p-[8px] rounded-[8px] "
                  />
                </div>
                <div className="flex w-[48%] mb-[10px] flex-col">
                  <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Long Carry
                  </label>
                  <input
                    placeholder="Enter Number"
                    value={fromLongCarry}
                    onChange={(e) => setFromLongCarry(e.target.value)}
                    type="number"
                    className="h-[45px] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full border-[#e3e3e3] font-light border-[1px] outline-none p-[8px] rounded-[8px] "
                  />
                </div>
              </div>
              <div className="mb-2 elevatorContainer flex">
                <div className="flex eleInnerBox mb-[10px] mr-4 flex-col">
                  <p className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Elevator?
                  </p>
                  <div className="flex w-[200px] elevatorQuestionBox h-[45px] border-[1px] rounded-[8px] border-[#e3e3e3] items-center">
                    <label
                      htmlFor="yes"
                      className="w-[50%] cursor-pointer h-full"
                      onClick={() => handleFromElevator("yes")}
                    >
                      <div
                        className={`flex w-[100%] ${
                          fromElevatorYes ? "bg-[#E4F0FC]" : ""
                        } rounded-tl-[8px] rounded-bl-[8px] h-full border-r-[1px] justify-center border-[#e3e3e3] items-center `}
                      >
                        <input
                          type="radio"
                          name="elevator"
                          id="yes"
                          checked={fromHasElevator === true}
                          onChange={() => setFromHasElevator(true)}
                        />
                        <span className=" text-[#136AB5] font-sans ml-1">
                          Yes
                        </span>
                      </div>
                    </label>
                    <label
                      onClick={() => handleFromElevator("no")}
                      htmlFor="no"
                      className="w-[50%] cursor-pointer h-full"
                    >
                      <div
                        className={`flex items-center justify-center h-full w-[100%] ${
                          fromElevatorNo ? "bg-[#E4F0FC]" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="elevator"
                          id="no"
                          checked={fromHasElevator === false}
                          onChange={() => setFromHasElevator(false)}
                        />
                        <label className="ml-1">No</label>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="flex mb-[10px] flex-col">
                  <p className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Need Shuttle?
                  </p>
                  <div className="flex w-[200px] elevatorQuestionBox h-[45px] border-[1px] rounded-[8px] border-[#e3e3e3] items-center">
                    <label
                      onClick={() => handleFromNeedShuttle("yes")}
                      className="w-[50%] cursor-pointer h-full"
                      htmlFor="needShuttle_yes"
                    >
                      <div
                        className={`flex w-[100%] ${
                          fromNeedShuttleYes ? "bg-[#E4F0FC]" : ""
                        } rounded-tl-[8px] rounded-bl-[8px] h-full border-r-[1px] justify-center border-[#e3e3e3] items-center `}
                      >
                        <input
                          type="radio"
                          name="from_shuttle"
                          id="needShuttle_yes"
                          checked={fromNeedShuttle === true}
                          onChange={() => setFromNeedShuttle(true)}
                        />
                        <span className=" text-[#136AB5] font-sans ml-1">
                          Yes
                        </span>
                      </div>
                    </label>
                    <label
                      onClick={() => handleFromNeedShuttle("no")}
                      className="w-[50%] cursor-pointer h-full"
                      htmlFor="needShuttle_no"
                    >
                      <div
                        className={`flex items-center justify-center h-full w-[100%] ${
                          fromNeedShuttleNo ? "bg-[#E4F0FC]" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="from_shuttle"
                          id="needShuttle_no"
                          checked={fromNeedShuttle === false}
                          onChange={() => setFromNeedShuttle(false)}
                        />
                        <span className="ml-1">No</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-3 elevatorContainer flex">
                <div className="flex eleInnerBox mb-[10px] mr-4 flex-col">
                  <p className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Building Insurance
                  </p>
                  <div className="flex w-[200px] elevatorQuestionBox h-[45px] border-[1px] rounded-[8px] border-[#e3e3e3] items-center">
                    <label
                      onClick={() => handleFromBuildingInsurance("yes")}
                      htmlFor="insurance_yes"
                      className="w-[50%] cursor-pointer h-full"
                    >
                      <div
                        className={`flex w-[100%] ${
                          fromBuildingInsuranceYes ? "bg-[#E4F0FC]" : ""
                        } rounded-tl-[8px] rounded-bl-[8px] h-full border-r-[1px] justify-center border-[#e3e3e3] items-center `}
                      >
                        <input
                          type="radio"
                          name="insurance"
                          id="insurance_yes"
                          checked={fromHasBuildingInsurance === true}
                          onChange={() => setFromHasBuildingInsurance(true)}
                        />
                        <span className=" text-[#136AB5] font-sans ml-1">
                          Yes
                        </span>
                      </div>
                    </label>
                    <label
                      htmlFor="insurance_no"
                      onClick={() => handleFromBuildingInsurance("no")}
                      className="w-[50%] cursor-pointer h-full"
                    >
                      <div
                        className={`flex items-center justify-center h-full w-[100%] ${
                          fromBuildingInsuranceNo ? "bg-[#E4F0FC]" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="insurance"
                          id="insurance_no"
                          checked={fromHasBuildingInsurance === false}
                          onChange={() => setFromHasBuildingInsurance(false)}
                        />
                        <span className="ml-1">No</span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="flex mb-[10px] flex-col">
                  <p className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Need help packing your items?
                  </p>
                  <div className="flex w-[200px] elevatorQuestionBox h-[45px] border-[1px] rounded-[8px] border-[#e3e3e3] items-center">
                    <label
                      onClick={() => handleFromNeedHelpPacking("yes")}
                      htmlFor="need_help_yes"
                      className="w-[50%] cursor-pointer h-full"
                    >
                      <div
                        className={`flex w-[100%] ${
                          fromNeedHelpPackingYes ? "bg-[#E4F0FC]" : ""
                        } rounded-tl-[8px] rounded-bl-[8px] h-full border-r-[1px] justify-center border-[#e3e3e3] items-center `}
                      >
                        <input
                          type="radio"
                          name="from_need_help"
                          id="need_help_yes"
                          checked={fromNeedHelpPacking === true}
                          onChange={() => setFromNeedHelpPacking(true)}
                        />
                        <span className=" text-[#136AB5] font-sans ml-1">
                          Yes
                        </span>
                      </div>
                    </label>
                    <label
                      onClick={() => handleFromNeedHelpPacking("no")}
                      htmlFor="need_help_no"
                      className="w-[50%] cursor-pointer h-full"
                    >
                      <div
                        className={`flex items-center justify-center h-full w-[100%] ${
                          fromNeedHelpPackingNo ? "bg-[#E4F0FC]" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="from_need_help"
                          id="need_help_no"
                          checked={fromNeedHelpPacking === false}
                          onChange={() => setFromNeedHelpPacking(false)}
                        />
                        <span className="ml-1">No</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[68px] rounded-[8px] locationFrom border-[1px] px-[16px] flex items-center justify-between border-[#e3e3e3] ">
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
                  <p className="text-[#b8b8b8] ml-2 font-light font-sans text-[16px] leading-[25.6px] ">
                    To
                  </p>
                </div>
                <div className="flex flex-1">
                  <p className="text-[#b8b8b8] ml-2 font-light font-sans text-[16px]">
                    -
                  </p>
                  {isEditingTo ? (
                    <input
                      ref={toInputRef}
                      type="text"
                      value={toLocation}
                      onChange={handleToInputChange}
                      onBlur={handleToBlur}
                      onKeyDown={(e) => handleKeyDown(e, "to")}
                      className="text-[#707070] ml-2 font-sans text-[16px] leading-[25.6px] bg-transparent outline-none flex-1 min-w-0"
                    />
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
                CHANGE
              </button>
            </div>
            <div className="flex mt-4 mb-5 justify-between  items-center apartmentNumberContainer ">
              <div className="flex  w-[35%] mb-[10px] flex-col">
                <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                  Apartment Number
                </label>
                <input
                  value={dropOffAddressNumber}
                  onChange={(e) => setDropOffAddressNumber(e.target.value)}
                  placeholder="Apartment Number"
                  type="number"
                  className="h-[45px] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full border-[#e3e3e3] font-light border-[1px] outline-none p-[8px] rounded-[8px] "
                />
              </div>
              <div className="flex w-[60%] mb-[10px] flex-col">
                <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                  Remarks for the location
                </label>
                <input
                  value={toRemark}
                  onChange={(e) => setToRemark(e.target.value)}
                  placeholder="Enter Remarks for this location"
                  type="text"
                  className="h-[45px]  border-[#e3e3e3] font-light border-[1px] outline-none p-[8px] rounded-[8px] "
                />
              </div>
            </div>
            <div>
              <p className="font-sans mb-2 text-[#136AB5] text-[16px] ">
                Restrictions
              </p>
              <div className="flex mt-4 mb-1 justify-between  items-center apartmentNumberContainer">
                <div className="flex  w-[48%] mb-[10px] flex-col">
                  <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Number of floors
                  </label>
                  <input
                    value={toNumberOfFloors}
                    onChange={(e) => setToNumberOfFloors(e.target.value)}
                    placeholder="How many floors"
                    type="number"
                    className="h-[45px] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full border-[#e3e3e3] font-light border-[1px] outline-none p-[8px] rounded-[8px] "
                  />
                </div>
                <div className="flex w-[48%] mb-[10px] flex-col">
                  <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Long Carry
                  </label>
                  <input
                    value={toLongCarry}
                    onChange={(e) => setToLongCarry(e.target.value)}
                    placeholder="Enter Number"
                    type="number"
                    className="h-[45px] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full border-[#e3e3e3] font-light border-[1px] outline-none p-[8px] rounded-[8px] "
                  />
                </div>
              </div>
              <div className="mb-2 elevatorContainer flex">
                <div className="flex eleInnerBox mb-[10px] mr-4 flex-col">
                  <p className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Elevator?
                  </p>
                  <div className="flex w-[200px] elevatorQuestionBox h-[45px] border-[1px] rounded-[8px] border-[#e3e3e3] items-center">
                    <label
                      onClick={() => handleToElevator("yes")}
                      htmlFor="elevator_yes"
                      className="w-[50%] cursor-pointer h-full"
                    >
                      <div
                        className={`flex w-[100%] ${
                          toElevatorYes ? "bg-[#E4F0FC]" : ""
                        } rounded-tl-[8px] rounded-bl-[8px] h-full border-r-[1px] justify-center border-[#e3e3e3] items-center `}
                      >
                        <input
                          placeholder="Enter Number"
                          type="radio"
                          name="to_elevator"
                          id="elevator_yes"
                          checked={toHasElevator === true}
                          onChange={() => setToHasElevator(true)}
                        />
                        <span className=" text-[#136AB5] font-sans ml-1">
                          Yes
                        </span>
                      </div>
                    </label>
                    <label
                      onClick={() => handleToElevator("no")}
                      htmlFor="elevator_no"
                      className="w-[50%] cursor-pointer h-full"
                    >
                      <div
                        className={`flex items-center justify-center h-full w-[100%] ${
                          toElevatorNo ? "bg-[#E4F0FC]" : ""
                        }`}
                      >
                        <input
                          placeholder="Enter Number"
                          type="radio"
                          name="to_elevator"
                          id="elevator_no"
                          checked={toHasElevator === false}
                          onChange={() => setToHasElevator(false)}
                        />
                        <span className="ml-1">No</span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="flex mb-[10px] flex-col">
                  <p className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Need Shuttle?
                  </p>
                  <div className="flex w-[200px] elevatorQuestionBox h-[45px] border-[1px] rounded-[8px] border-[#e3e3e3] items-center">
                    <label
                      onClick={() => handleToNeedShuttle("yes")}
                      htmlFor="need_to_Shuttle_yes"
                      className="w-[50%] cursor-pointer h-full"
                    >
                      <div
                        className={`flex w-[100%] ${
                          toNeedShuttleYes ? "bg-[#E4F0FC]" : ""
                        } rounded-tl-[8px] rounded-bl-[8px] h-full border-r-[1px] justify-center border-[#e3e3e3] items-center `}
                      >
                        <input
                          placeholder="Enter Number"
                          type="radio"
                          name="to_shuttle"
                          id="need_to_Shuttle_yes"
                          checked={toNeedShuttle === true}
                          onChange={() => setToNeedShuttle(true)}
                        />
                        <span className=" text-[#136AB5] font-sans ml-1">
                          Yes
                        </span>
                      </div>
                    </label>
                    <label
                      onClick={() => handleToNeedShuttle("no")}
                      htmlFor="need_to_Shuttle_no"
                      className="w-[50%] cursor-pointer h-full"
                    >
                      <div
                        className={`flex items-center justify-center h-full w-[100%] ${
                          toNeedShuttleNo ? "bg-[#E4F0FC]" : ""
                        }`}
                      >
                        <input
                          placeholder="Enter Number"
                          type="radio"
                          name="to_shuttle"
                          id="need_to_Shuttle_no"
                          checked={toNeedShuttle === false}
                          onChange={() => setToNeedShuttle(false)}
                        />
                        <span className="ml-1">No</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-3 elevatorContainer flex">
                <div className="flex eleInnerBox mb-[10px] mr-4 flex-col">
                  <p className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Building Insurance
                  </p>
                  <div className="flex w-[200px] elevatorQuestionBox h-[45px] border-[1px] rounded-[8px] border-[#e3e3e3] items-center">
                    <label
                      onClick={() => handleToBuildingInsurance("yes")}
                      htmlFor="to_insurance_yes"
                      className="w-[50%] cursor-pointer h-full"
                    >
                      <div
                        className={`flex w-[100%] ${
                          toBuildingInsuranceYes ? "bg-[#E4F0FC]" : ""
                        } rounded-tl-[8px] rounded-bl-[8px] h-full border-r-[1px] justify-center border-[#e3e3e3] items-center `}
                      >
                        <input
                          placeholder="Enter Number"
                          type="radio"
                          name="to_insurance"
                          id="to_insurance_yes"
                          checked={toHasBuildingInsurance === true}
                          onChange={() => setToHasBuildingInsurance(true)}
                        />
                        <span className=" text-[#136AB5] font-sans ml-1">
                          Yes
                        </span>
                      </div>
                    </label>
                    <label
                      onClick={() => handleToBuildingInsurance("no")}
                      htmlFor="to_insurance_no"
                      className="w-[50%] cursor-pointer h-full"
                    >
                      <div
                        className={`flex items-center justify-center h-full w-[100%] ${
                          toBuildingInsuranceNo ? "bg-[#E4F0FC]" : ""
                        }`}
                      >
                        <input
                          placeholder="Enter Number"
                          type="radio"
                          name="to_insurance"
                          id="to_insurance_no"
                          checked={toHasBuildingInsurance === false}
                          onChange={() => setToHasBuildingInsurance(false)}
                        />
                        <span className="ml-1">No</span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="flex mb-[10px] flex-col">
                  <p className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Need help packing your items?
                  </p>
                  <div className="flex w-[200px] elevatorQuestionBox h-[45px] border-[1px] rounded-[8px] border-[#e3e3e3] items-center">
                    <label
                      htmlFor="need_help_to_yes"
                      onClick={() => handleToNeedHelpPacking("yes")}
                      className="w-[50%] cursor-pointer h-full"
                    >
                      <div
                        className={`flex w-[100%] ${
                          toNeedHelpPackingYes ? "bg-[#E4F0FC]" : ""
                        } rounded-tl-[8px] rounded-bl-[8px] h-full border-r-[1px] justify-center border-[#e3e3e3] items-center `}
                      >
                        <input
                          placeholder="Enter Number"
                          type="radio"
                          name="to_need_help"
                          id="need_help_to_yes"
                          checked={toNeedHelpPacking === true}
                          onChange={() => setToNeedHelpPacking(true)}
                        />
                        <span className=" text-[#136AB5] font-sans ml-1">
                          Yes
                        </span>
                      </div>
                    </label>
                    <label
                      onClick={() => handleToNeedHelpPacking("no")}
                      htmlFor="need_help_to_no"
                      className="w-[50%] cursor-pointer h-full"
                    >
                      <div
                        className={`flex items-center justify-center h-full w-[100%] ${
                          toNeedHelpPackingNo ? "bg-[#E4F0FC]" : ""
                        }`}
                      >
                        <input
                          placeholder="Enter Number"
                          type="radio"
                          name="to_need_help"
                          id="need_help_to_no"
                          checked={toNeedHelpPacking === false}
                          onChange={() => setToNeedHelpPacking(false)}
                        />
                        <span className="ml-1">No</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingInformation;
