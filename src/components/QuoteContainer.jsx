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

const QuoteContainer = ({ data }) => {
  const [activeTab, setActiveTab] = useState(1);

  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) setActiveTab(2);
    else setActiveTab(1);
  }, [data]);

  let content = <Location />;
  // let btnText = CONTINUE

  switch (activeTab) {
    case 1:
      content = <Location />;
      // Code to be executed if expression matches value1
      break;
    case 2:
      content = <InventoryList />;
      // Code to be executed if expression matches value2
      break;
    case 3:
      content = <MovingInformation />;
      // Code to be executed if expression matches value2
      break;
    case 4:
      content = <ViewSummary />;
      // Code to be executed if expression matches value2
      break;
    case 5:
      content = <p>Finish</p>;
      // Code to be executed if expression matches value2
      break;
    // Add more cases as needed
    default:
      content = <Location />;
    // Code to be executed if expression doesn't match any case
  }

  // Function to handle moving forward in tabs
  const handleTabs = () => {
    if (activeTab >= 5) return; // Ensure we don't go beyond the last tab
    setActiveTab((prevTab) => prevTab + 1);
    console.log("Next Tab:", activeTab + 1);
  };

  // Function to handle moving backward in tabs
  const handlePrevTabs = () => {
    if (activeTab <= 1) return; // Ensure we don't go below tab 1
    setActiveTab((prevTab) => prevTab - 1);
    console.log("Previous Tab:", activeTab - 1);
  };

  const handleSubmit = () => {
    console.log(openSuccessModal);
    setOpenSuccessModal(true);
  };

  const closeSuccessModal = () => {
    navigate("/");
    setOpenSuccessModal(false);
  };

  return (
    <div className="relative">
      <div className="w-[90vw] relative h-[calc(100vh-90px)] max-w-[1500px] mx-auto mt-24">
        <div className="w-full  ">
          <div className="flex items-center">
            <Link to="/">
              <p className="text-[#9e9e9e] text-[14px] font-sans leading-[19.6px]">
                Home
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
              Get a quote for a move
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
                GO BACK
              </p>
            ) : (
              <button
                onClick={() => handlePrevTabs(activeTab)}
                className="text-[#3C82F6] hover:bg-primary py-1 px-2 hover:text-white rounded-[20px] cursor-pointer text-[14px] text-manrope font-light "
              >
                GO BACK
              </button>
            )}
            <div>
              {activeTab === 4 ? (
                <PrimaryBtn
                  handlePress={handleSubmit}
                  className={"text-[14px] "}
                >
                  GET QUOTES
                </PrimaryBtn>
              ) : (
                <PrimaryBtn
                  handlePress={() => handleTabs(activeTab)}
                  className={"text-[14px] "}
                >
                  CONTINUE
                </PrimaryBtn>
              )}
            </div>
          </div>
        </div>
        <div className="pb-[20px]">
          {activeTab > 1 && (
            <button
              onClick={() => handlePrevTabs(activeTab)}
              className="text-[#3C82F6] w-full quoteContainerPrimaryBtn  py-1 px-2 rounded-[20px] cursor-pointer text-[14px] text-manrope font-light "
            >
              GO BACK
            </button>
          )}

          <PrimaryBtn
            handlePress={() => handleTabs(activeTab)}
            className={
              "text-[14px] quoteContainerPrimaryBtn hidden my-3 w-full "
            }
          >
            CONTINUE
          </PrimaryBtn>
        </div>
      </div>
      {openSuccessModal && <QuoteSuccess closeModal={closeSuccessModal} />}
    </div>
  );
};

export default QuoteContainer;
