import React, { useEffect, useState } from "react";
import StaticMoversStepper from "./StaticMoversStepper";
import MoversProgress from "./MoversProgress";
import Payment from "./Payment";
import TrackMove from "./TrackMove";
import MoversHolder from "./MoversHolder";
import PrimaryBtn from "./PrimaryBtn";
import PaymentSuccess from "../modal/PaymentSuccess";
import MoversMobileContainer from "./MoversMobileContainer";
import "./MoversContainer.css";
import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const MoversContainer = ({ trackingCode }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [isPaymentMade, setIsPaymentMade] = useState(false);

  const [isActive, setIsActive] = useState(false);

  const [err, setErr] = useState(false);

  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const moversData = useSelector((state) => state.user.moversData);

  useEffect(() => {
    if (trackingCode) setActiveTab(3);
    else setActiveTab(1);
  }, [trackingCode]);

  let content = (
    <MoversHolder MoversHolder isActive={isActive} setIsActive={setIsActive} />
  );

  switch (activeTab) {
    case 1:
      // content = <MoversHolder isActive={isActive} setIsActive={setIsActive} />;
      content = <TrackMove />;
      break;
    case 2:
      content = <Payment />;
      break;
    case 3:
      content = <TrackMove />;
      break;
    default:
      content = (
        <MoversHolder
          MoversHolder
          isActive={isActive}
          setIsActive={setIsActive}
        />
      );
  }

  useEffect(() => {
    if (isPaymentMade) {
      setActiveTab(3);
    }
  }, [isPaymentMade]);
  const sendQuoteData = async () => {
    const response = await axios.get(
      `https://involved-birgit-zinter-cb767b47.koyeb.app/api/Quote/AcceptQuote?id=${moversData?.quoteId}`
    );
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: sendQuoteData,
    onSuccess: (data) => {
      if (data.responseStatus) {
        setOpenSuccessModal(true);
        setErr(false);
      } else {
        alert("Not Cool");
        setErr(true);
      }
    },
    onError: (error) => {
      console.error("Error creating user:", error);
    },
  });

  const fetchData = () => {
    mutation.mutate();
  };

  // Function to handle moving forward in tabs
  const handleTabs = () => {
    if (activeTab === 2) {
      console.log("Handling tab 2");
      if (!isPaymentMade) {
        setActiveTab(2);
        console.log("Payment not made yet, staying on tab 2");
        return;
      }
    }
    if (activeTab >= 3) return; // Ensure we don't go beyond the last tab
    if (err && activeTab === 2) {
      return;
    } else setActiveTab((prevTab) => prevTab + 1);
  };

  // Function to handle moving backward in tabs
  const handlePrevTabs = () => {
    if (activeTab <= 1) return; // Ensure we don't go below tab 1
    setActiveTab((prevTab) => prevTab - 1);
  };

  // const handleSubmit = () => {
  //   console.log("Helloo");
  // };

  const openModal = () => {
    handleTabs();
    fetchData();
    // ;
  };

  const closeSuccessModal = () => {
    setOpenSuccessModal(false);
  };

  return (
    <div className="relative">
      <div className="w-[90vw] relative h-[calc(100vh-90px)] max-w-[1500px] mx-auto mt-24">
        <div className="w-full moversMainContainer mt-4 flex ">
          <div className="mr-4 stepHolder ">
            <StaticMoversStepper />
            <MoversMobileContainer activeTab={activeTab} />
            <MoversProgress activeTab={activeTab} />
          </div>
          {content}
        </div>
        {isActive && activeTab !== 3 && (
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
                {activeTab === 2 ? (
                  <PrimaryBtn
                    handlePress={openModal}
                    className={"text-[14px] "}
                  >
                    COMPLETE PAYMENT
                  </PrimaryBtn>
                ) : (
                  <PrimaryBtn
                    handlePress={() => handleTabs(activeTab)}
                    className={"text-[14px] "}
                  >
                    MAKE PAYMENT
                  </PrimaryBtn>
                )}
              </div>
            </div>
          </div>
        )}
        <div className={`${activeTab === 3 ? "hidden" : ""} pb-[20px]`}>
          {activeTab > 1 && (
            <button
              onClick={() => handlePrevTabs(activeTab)}
              className="text-[#3C82F6] w-full quoteContainerPrimaryBtn  py-1 px-2 rounded-[20px] cursor-pointer text-[14px] text-manrope font-light "
            >
              GO BACK
            </button>
          )}
          <div>
            {activeTab === 2 ? (
              <PrimaryBtn
                handlePress={openModal}
                className={
                  "text-[14px] quoteContainerPrimaryBtn hidden my-3 w-full "
                }
              >
                COMPLETE PAYMENT
              </PrimaryBtn>
            ) : (
              <PrimaryBtn
                handlePress={() => handleTabs(activeTab)}
                className={
                  "text-[14px] quoteContainerPrimaryBtn hidden my-3 w-full "
                }
              >
                MAKE PAYMENT
              </PrimaryBtn>
            )}
          </div>
          {/* <PrimaryBtn
            handlePress={() => handleTabs(activeTab)}
            className={
              "text-[14px] quoteContainerPrimaryBtn hidden my-3 w-full "
            }
          >
            CONTINUE
          </PrimaryBtn> */}
        </div>
      </div>
      {openSuccessModal && (
        <PaymentSuccess closeSuccessModal={closeSuccessModal} />
      )}
    </div>
  );
};

export default MoversContainer;
