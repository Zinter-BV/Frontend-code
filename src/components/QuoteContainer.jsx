import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import QuoteProgress from "./QuoteProgress";
import Location from "./Location";
import PrimaryBtn from "./PrimaryBtn";
import InventoryList from "./InventoryList";
import MovingInformation from "./MovingInformation";
import ViewSummary from "./ViewSummary";
import QuoteSuccess from "../modal/QuoteSuccess";
import MobileQuoteProgress from "./MobileQuoteProgress";
import { useDispatch, useSelector } from "react-redux";
import {
  resetUserInfo,
  setHouseSize,
  setUserDetails,
  setUserMoreInfo,
} from "../redux/action";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import Loader from "./loader";
import { useTranslation } from "react-i18next";
import MovingInformation2 from "./MovingInformation2";

const QuoteContainer = ({ data }) => {
  const [activeTab, setActiveTab] = useState(1);
  const dispatch = useDispatch();
  // gets the whole data needed and puts in one object
  const user = useSelector((state) => state.user);

  const { t } = useTranslation();

  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const navigate = useNavigate();
  // location details
  const [fromLocation, setFromLocation] = useState(
    user?.userMoveInfo?.pickUpAddress || "Keizersgracht 123, 1015 CJ Amsterdam"
  );
  const [fromPickupLongitude, setFromPickupLongitude] = useState(
    user?.userMoveInfo?.pickUpLongitude || "4.478618"
  );
  const [fromPickupLatitude, setFromPickupLatitude] = useState(
    user?.userMoveInfo?.pickUpLatitude || "51.924419"
  );

  const [toLocation, setToLocation] = useState(
    user?.userMoveInfo?.dropOffAddress || "Coolsingel 105, 3012 AG Rotterdam"
  );
  const [toDropOffLongitude, setToDropOffLongitude] = useState(
    user?.userMoveInfo?.dropOffLongitude || "6.093440"
  );
  const [toDropOffLatitude, setToDropOffLatitude] = useState(
    user?.userMoveInfo?.dropOffLatitude || '52.010199"'
  );
  const [isEditingFrom, setIsEditingFrom] = useState(false);
  const [isEditingTo, setIsEditingTo] = useState(false);

  //moving info
  const [moveDate, setMoveDate] = useState("");
  const [moveTime, setMoveTime] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [pickUpTime, setPickupTime] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [provinceId, setProvinceId] = useState(0);
  const [pickUpAddress, setPickUpAddress] = useState(fromLocation);
  const [dropOffAddress, setDropOffAddress] = useState(toLocation);
  const [pickUpAddressNumber, setPickUpAddressNumber] = useState("");
  const [dropOffAddressNumber, setDropOffAddressNumber] = useState("");
  const [pickUpLongitude, setPickUpLongitude] = useState(fromPickupLongitude);
  const [pickUpLatitude, setPickUpLatitude] = useState(fromPickupLatitude);
  const [dropOffLongitude, setDropOffLongitude] = useState(toDropOffLongitude);
  const [dropOffLatitude, setDropOffLatitude] = useState(toDropOffLatitude);
  const [toNumberOfFloors, setToNumberOfFloors] = useState("");
  const [toLongCarry, setToLongCarry] = useState("");
  const [toRemark, setToRemark] = useState("");
  const [toHasElevator, setToHasElevator] = useState(null);
  const [toNeedShuttle, setToNeedShuttle] = useState(null);
  const [toHasBuildingInsurance, setToHasBuildingInsurance] = useState(null);
  const [toNeedHelpPacking, setToNeedHelpPacking] = useState(null);
  const [fromNumberOfFloors, setFromNumberOfFloors] = useState("");
  const [fromLongCarry, setFromLongCarry] = useState("");
  const [fromRemark, setFromRemark] = useState("");
  const [fromHasElevator, setFromHasElevator] = useState(null);
  const [fromNeedShuttle, setFromNeedShuttle] = useState(null);
  const [fromHasBuildingInsurance, setFromHasBuildingInsurance] =
    useState(null);
  const [fromNeedHelpPacking, setFromNeedHelpPacking] = useState(null);
  //chheckbox
  const [acceptTerms, setAcceptTerms] = useState(null);
  const [receivePromotions, setReceivePromotions] = useState(null);
  const [provinceName, setProvinceName] = useState("");

  // Error message state
  const [errMessage, setErrMessage] = useState("");

  const [moveSize, setMoveSize] = useState("");

  // Function to format datetime to ISO 8601 format
  const formatToISODateTime = (dateStr) => {
    if (!dateStr) return "";

    // Create date from the selected date
    const date = new Date(dateStr);

    if (isNaN(date.getTime())) return "";

    // Get current time
    const now = new Date();
    date.setHours(
      now.getHours(),
      now.getMinutes(),
      now.getSeconds(),
      now.getMilliseconds()
    );

    return date.toISOString();
  };

  // Function to validate move info data
  const validateMoveInfo = () => {
    const requiredFields = [
      // { field: moveTime, name: "Move Time" },
      // { field: pickUpDate, name: "Pickup Date" },
      { field: moveDate, name: "Move Date" },
      // { field: pickUpTime, name: "Pickup Time" },
      { field: fullName, name: "Full Name" },
      { field: email, name: "Email" },
      // { field: phoneNumber, name: "Phone Number" },
      { field: pickUpAddress, name: "Pick Up Address" },
      { field: dropOffAddress, name: "Drop Off Address" },
      { field: fromLocation, name: "From Location" },
      { field: toLocation, name: "To Location" },
      { field: provinceId, name: "Province" },
      // { field: pickUpAddressNumber, name: "Pick Up Address Number" },
      // { field: dropOffAddressNumber, name: "Drop Off Address Number" },
      { field: pickUpLongitude, name: "Pick Up Longitude" },
      { field: pickUpLatitude, name: "Pick Up Latitude" },
      { field: dropOffLongitude, name: "Drop Off Longitude" },
      { field: dropOffLatitude, name: "Drop Off Latitude" },
      // { field: toNumberOfFloors, name: "To Number of Floors" },
      // { field: toLongCarry, name: "To Long Carry" },
      // { field: toHasElevator, name: "To Has Elevator" },
      // { field: toNeedShuttle, name: "To Need Shuttle" },
      // { field: toHasBuildingInsurance, name: "To Has Building Insurance" },
      // { field: toNeedHelpPacking, name: "To Need Help Packing" },
      // { field: fromNumberOfFloors, name: "From Number of Floors" },
      // { field: fromLongCarry, name: "From Long Carry" },
      // { field: fromHasElevator, name: "From Has Elevator" },
      // { field: fromNeedShuttle, name: "From Need Shuttle" },
      // { field: fromHasBuildingInsurance, name: "From Has Building Insurance" },
      // { field: fromNeedHelpPacking, name: "From Need Help Packing" },
      // { field: fromRemark, name: "From Remark" },
      // { field: toRemark, name: "To Remark" },
      { field: acceptTerms, name: "Accept Terms and Conditions" },
    ];

    const missingFields = requiredFields.filter(({ field }) => {
      // Handle different data types properly
      if (field === null || field === undefined) {
        return true; // Field is missing
      }

      // For strings, check if empty or only whitespace
      if (typeof field === "string") {
        return field.trim() === "";
      }

      // For numbers, check if it's a valid number (not NaN or 0 if 0 is invalid)
      if (typeof field === "number") {
        return false; // Numbers are considered valid (adjust logic as needed)
      }

      // For booleans, they're valid (true/false are both acceptable)
      if (typeof field === "boolean") {
        return false;
      }

      return true; // Unknown type, consider missing
    });

    if (missingFields.length > 0) {
      // const fieldNames = missingFields.map(({ name }) => name).join(", ");
      // setErrMessage(`Please fill in all required fields: ${fieldNames}`);
      setErrMessage(`Please fill in all required fields.`);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    } else {
      setErrMessage("");
    }

    // Additional validation for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }

    return true;
  };

  // Format the datetime when creating moreInfoData
  const formattedMoveDateTime = formatToISODateTime(moveDate, moveTime);
  const formattedPickUpDateTime = formatToISODateTime(pickUpDate, pickUpTime);

  const moreInfoData = {
    // moveTime: formattedMoveDateTime || null,
    // moveDate: formattedMoveDateTime || null,
    moveDate: formattedMoveDateTime,
    pickUpTime: null,
    fullName,
    email,
    phoneNumber: phoneNumber || null,
    provinceId,
    pickUpAddress: user?.userMoveInfo?.pickUpAddress || fromLocation,
    dropOffAddress: user?.userMoveInfo?.dropOffAddress || toLocation,
    pickUpAddressNumber: pickUpAddressNumber || null,
    dropOffAddressNumber: dropOffAddressNumber || null,
    pickUpLongitude: String(
      user?.userMoveInfo?.pickUpLongitude || fromPickupLongitude
    ),
    pickUpLatitude: String(
      user?.userMoveInfo?.pickUpLatitude || fromPickupLatitude
    ),
    dropOffLongitude: String(
      user?.userMoveInfo?.toDropOffLongitude || toDropOffLongitude
    ),
    dropOffLatitude: String(
      user?.userMoveInfo?.toDropOffLatitude || toDropOffLatitude
    ),
    toNumberOfFloors: toNumberOfFloors || null,
    toLongCarry: toLongCarry || null,
    toRemark: toRemark || null,
    toHasElevator: toHasElevator || null,
    toNeedShuttle: toNeedShuttle || null,
    toHasBuildingInsurance: toHasBuildingInsurance || null,
    toNeedHelpPacking: toNeedHelpPacking || null,
    fromNumberOfFloors: fromNumberOfFloors || null,
    fromLongCarry: fromLongCarry || null,
    fromRemark: fromRemark || null,
    fromHasElevator: fromHasElevator || null,
    fromNeedShuttle: fromNeedShuttle || null,
    fromHasBuildingInsurance: fromHasBuildingInsurance || null,
    toHasBuildingInsurance: toHasBuildingInsurance || null,
    toNeedHelpPacking: toNeedHelpPacking || null,
    fromNumberOfFloors: fromNumberOfFloors || null,
    fromLongCarry: fromLongCarry || null,
    fromRemark: fromRemark || null,
    fromHasElevator: fromHasElevator || null,
    fromNeedShuttle: fromNeedShuttle || null,
    fromHasBuildingInsurance: fromHasBuildingInsurance || null,
    fromNeedHelpPacking: fromNeedHelpPacking || null,
  };

  let content = (
    <Location
      fromLocation={fromLocation}
      toLocation={toLocation}
      setFromLocation={setFromLocation}
      setFromPickupLongitude={setFromPickupLongitude}
      setFromPickupLatitude={setFromPickupLatitude}
      setToDropOffLongitude={setToDropOffLongitude}
      setToDropOffLatitude={setToDropOffLatitude}
      setToLocation={setToLocation}
      isEditingFrom={isEditingFrom}
      isEditingTo={isEditingTo}
      setIsEditingFrom={setIsEditingFrom}
      setIsEditingTo={setIsEditingTo}
      fromPickupLongitude={fromPickupLongitude}
      fromPickupLatitude={fromPickupLatitude}
      toDropOffLongitude={toDropOffLongitude}
      toDropOffLatitude={toDropOffLatitude}
      setProvinceId={setProvinceId}
      provinceId={provinceId}
      moveSize={moveSize}
      setMoveSize={setMoveSize}
      errMessage={errMessage}
      setErrMessage={setErrMessage}
      provinceName={provinceName}
      setProvinceName={setProvinceName}
    />
  );

  // Ensure your merge function creates the correct structure
  function mergeTwoObjects(items, moreInfo) {
    return {
      items: items, // Should be array of {room, itemName, numberOfItems}
      ...moreInfo, // Should contain all other required fields
    };
  }
  const dataToSend = mergeTwoObjects(user?.items, user?.moreInfo);

  // Remove the wrapper object - send dataToSend directly
  const addUserDetails = async () => {
    const response = await axios.post(
      "https://involved-birgit-zinter-cb767b47.koyeb.app/api/MoveRequest/GetQuote",
      dataToSend // Send directly, not wrapped in an object
    );
    return response.data;
  };

  const {
    mutate: fetchData,
    isPending, // true when the request is running
  } = useMutation({
    mutationFn: addUserDetails,
    onSuccess: (data) => {
      console.log(data);
      if (data.responseStatus) {
        setOpenSuccessModal(true);
        setEmail("");
        localStorage.setItem("Code", JSON.stringify(data));
        setErrMessage("");
      } else {
        setErrMessage(
          data.responseMessage || "An error occurred. Please try again."
        );
      }
    },
    onError: (error) => {
      console.error("Error creating user:", error);
      setErrMessage("An error occurred. Please try again.");
    },
  });

  switch (activeTab) {
    case 1:
      content = (
        <Location
          fromLocation={fromLocation}
          toLocation={toLocation}
          setFromLocation={setFromLocation}
          setToLocation={setToLocation}
          isEditingFrom={isEditingFrom}
          isEditingTo={isEditingTo}
          setIsEditingFrom={setIsEditingFrom}
          setIsEditingTo={setIsEditingTo}
          setFromPickupLongitude={setFromPickupLongitude}
          setFromPickupLatitude={setFromPickupLatitude}
          setToDropOffLongitude={setToDropOffLongitude}
          setToDropOffLatitude={setToDropOffLatitude}
          fromPickupLongitude={fromPickupLongitude}
          fromPickupLatitude={fromPickupLatitude}
          toDropOffLongitude={toDropOffLongitude}
          toDropOffLatitude={toDropOffLatitude}
          provinceId={provinceId}
          setProvinceId={setProvinceId}
          moveSize={moveSize}
          setMoveSize={setMoveSize}
          errMessage={errMessage}
          setErrMessage={setErrMessage}
          provinceName={provinceName}
          setProvinceName={setProvinceName}
        />
      );
      break;
    case 2:
      content = <InventoryList />;
      break;
    case 3:
      content = (
        <MovingInformation2
          setMoveDate={setMoveDate}
          moveDate={moveDate}
          setPickUpDate={setPickUpDate}
          pickUpDate={pickUpDate}
          moveTime={moveTime}
          setMoveTime={setMoveTime}
          pickUpTime={pickUpTime}
          setPickupTime={setPickupTime}
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          provinceId={provinceId}
          setProvinceId={setProvinceId}
          pickUpAddress={pickUpAddress}
          setPickUpAddress={setPickUpAddress}
          dropOffAddress={dropOffAddress}
          setDropOffAddress={setDropOffAddress}
          pickUpAddressNumber={pickUpAddressNumber}
          setPickUpAddressNumber={setPickUpAddressNumber}
          dropOffAddressNumber={dropOffAddressNumber}
          setDropOffAddressNumber={setDropOffAddressNumber}
          pickUpLongitude={pickUpLongitude}
          setPickUpLongitude={setPickUpLongitude}
          pickUpLatitude={pickUpLatitude}
          setPickUpLatitude={setPickUpLatitude}
          dropOffLongitude={dropOffLongitude}
          setDropOffLongitude={setDropOffLongitude}
          dropOffLatitude={dropOffLatitude}
          setDropOffLatitude={setDropOffLatitude}
          fromNumberOfFloors={fromNumberOfFloors}
          setFromNumberOfFloors={setFromNumberOfFloors}
          toNumberOfFloors={toNumberOfFloors}
          setToNumberOfFloors={setToNumberOfFloors}
          fromLongCarry={fromLongCarry}
          setFromLongCarry={setFromLongCarry}
          toLongCarry={toLongCarry}
          setToLongCarry={setToLongCarry}
          fromRemark={fromRemark}
          setFromRemark={setFromRemark}
          toRemark={toRemark}
          setToRemark={setToRemark}
          fromHasElevator={fromHasElevator}
          setFromHasElevator={setFromHasElevator}
          toHasElevator={toHasElevator}
          setToHasElevator={setToHasElevator}
          fromNeedShuttle={fromNeedShuttle}
          setFromNeedShuttle={setFromNeedShuttle}
          toNeedShuttle={toNeedShuttle}
          setToNeedShuttle={setToNeedShuttle}
          fromHasBuildingInsurance={fromHasBuildingInsurance}
          setFromHasBuildingInsurance={setFromHasBuildingInsurance}
          toHasBuildingInsurance={toHasBuildingInsurance}
          setToHasBuildingInsurance={setToHasBuildingInsurance}
          fromNeedHelpPacking={fromNeedHelpPacking}
          setFromNeedHelpPacking={setFromNeedHelpPacking}
          toNeedHelpPacking={toNeedHelpPacking}
          setToNeedHelpPacking={setToNeedHelpPacking}
          isEditingFrom={isEditingFrom}
          setIsEditingFrom={setIsEditingFrom}
          isEditingTo={isEditingTo}
          setIsEditingTo={setIsEditingTo}
          fromLocation={fromLocation}
          toLocation={toLocation}
          setFromLocation={setFromLocation}
          setToLocation={setToLocation}
          errMessage={errMessage}
          receivePromotions={receivePromotions}
          setReceivePromotions={setReceivePromotions}
          acceptTerms={acceptTerms}
          setAcceptTerms={setAcceptTerms}
        />
      );
      break;
    case 4:
      content = <ViewSummary errMessage={errMessage} />;
      break;
    default:
      content = <Location />;
  }

  // Function to handle moving forward in tabs
  const handleTabs = () => {
    if (!moveSize) {
      setErrMessage("Please Enter House Size");
      return;
    } else if (!provinceId || provinceId === 0) {
      setErrMessage("Please enter a valid address");
      return;
    }
    if (activeTab === 1) {
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
      dispatch(setHouseSize(moveSize));
    }
    if (activeTab === 2) {
      // console.log(activeTab, 2);
      // if active tab is 2 and user has not added any items, stay on tab 2
      if (user.items.length === 0) {
        setActiveTab(2);
        return;
      }
    }
    if (activeTab === 3) {
      console.log(activeTab, 3);

      // Validate move info before proceeding
      if (!validateMoveInfo()) {
        return; // Stop execution if validation fails
      }
      if (!acceptTerms) {
        setErrMessage("Please accept terms and conditions");
        return;
      }
      dispatch(setUserMoreInfo(moreInfoData));
    }

    if (activeTab >= 5) return; // Ensure we don't go beyond the last tab
    setActiveTab((prevTab) => prevTab + 1);
  };

  // Function to handle moving backward in tabs
  const handlePrevTabs = () => {
    if (activeTab <= 1) return; // Ensure we don't go below tab 1
    setActiveTab((prevTab) => prevTab - 1);
    setErrMessage("");
  };

  const handleSubmit = () => {
    console.log(openSuccessModal);
    fetchData();
  };

  const closeSuccessModal = () => {
    navigate("/");
    setOpenSuccessModal(false);
    dispatch(resetUserInfo());
    dispatch(setHouseSize(""));
  };

  useEffect(() => {
    setMoveSize(user?.houseSize);
  }, [user]);

  return (
    <>
      {isPending && <Loader />}
      <div className="relative">
        <div className="w-[90vw] relative h-[calc(100vh-90px)] max-w-[1500px] mx-auto mt-24">
          <div className="w-full  ">
            <div className="flex items-center">
              <Link to="/">
                <p className="text-[#9e9e9e] text-[14px] font-sans leading-[19.6px]">
                  {t("quoteContainer.home")}
                </p>{" "}
              </Link>
              <div className="mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                  fill="none"
                >
                  <path
                    d="M0.219801 0.720115C0.0788617 0.861097 -0.000314284 1.05228 -0.000314301 1.25163C-0.000314319 1.45098 0.0788616 1.64217 0.219801 1.78315L3.94119 5.50454L0.219801 9.22592C0.0828549 9.36771 0.00707833 9.55762 0.00879111 9.75474C0.0105039 9.95186 0.0895692 10.1404 0.228958 10.2798C0.368347 10.4192 0.556907 10.4983 0.754025 10.5C0.951143 10.5017 1.14105 10.4259 1.28284 10.289L5.53574 6.03606C5.67668 5.89508 5.75586 5.70389 5.75586 5.50454C5.75586 5.30519 5.67668 5.114 5.53574 4.97302L1.28284 0.720115C1.14186 0.579175 0.950669 0.5 0.75132 0.5C0.551971 0.5 0.360784 0.579175 0.219801 0.720115Z"
                    fill="#E3E3E3"
                  />
                </svg>
              </div>
              <p className="text-[#525252] text-[16px] font-bold font-sans  ">
                {t("quoteContainer.desc")}
              </p>
            </div>
            <div className="mt-4  quoteContainer flex ">
              <MobileQuoteProgress activeTab={activeTab} />
              <QuoteProgress activeTab={activeTab} />
              {content}
            </div>
          </div>
          <div className="h-[80px] quoteContainerBtns shadow-[0px_-6px_6px_-6px_rgba(0,0,0,0.3)] bg-white fixed bottom-0 max-w-[1500px] mx-auto w-[90vw] flex items-center justify-center  ">
            <div className="w-full flex items-center justify-between">
              {activeTab === 1 ? (
                <p className="text-[#88b5fe]  py-1 px-2 rounded-[20px]  text-[14px] text-manrope font-light ">
                  {t("quoteContainer.back")}
                </p>
              ) : (
                <button
                  onClick={() => handlePrevTabs(activeTab)}
                  className="text-[#3C82F6] hover:bg-primary py-1 px-2 hover:text-white rounded-[20px] cursor-pointer text-[14px] text-manrope font-light "
                >
                  {t("quoteContainer.back")}
                </button>
              )}
              <div>
                {activeTab === 4 ? (
                  <PrimaryBtn
                    handlePress={handleSubmit}
                    className={"text-[14px] "}
                  >
                    {t("quoteContainer.getQuotes")}
                  </PrimaryBtn>
                ) : (
                  <PrimaryBtn
                    handlePress={() => handleTabs(activeTab)}
                    className={"text-[14px] "}
                  >
                    {t("quoteContainer.continue")}
                  </PrimaryBtn>
                )}
              </div>
            </div>
          </div>
          <div className="pb-[20px] md:hidden ">
            {activeTab > 1 && (
              <button
                onClick={() => handlePrevTabs(activeTab)}
                className="text-[#3C82F6] w-full quoteContainerPrimaryBtn mb-4 py-1 px-2 rounded-[20px] cursor-pointer text-[14px] text-manrope font-light "
              >
                {t("quoteContainer.back")}
              </button>
            )}

            {/* <PrimaryBtn
            handlePress={() => handleTabs(activeTab)}
            className={
              "text-[14px] quoteContainerPrimaryBtn md:hidden my-3 w-full "
            }
          >
            {t("quoteContainer.continue")}
          </PrimaryBtn> */}
            <div>
              {activeTab === 4 ? (
                <PrimaryBtn
                  handlePress={handleSubmit}
                  className={"text-[14px] w-full "}
                >
                  {t("quoteContainer.getQuotes")}
                </PrimaryBtn>
              ) : (
                <PrimaryBtn
                  handlePress={() => handleTabs(activeTab)}
                  className={"text-[14px] w-full"}
                >
                  {t("quoteContainer.continue")}
                </PrimaryBtn>
              )}
            </div>
          </div>
        </div>
        {openSuccessModal && <QuoteSuccess closeModal={closeSuccessModal} />}
      </div>
    </>
  );
};

export default QuoteContainer;
