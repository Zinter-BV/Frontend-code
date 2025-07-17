import React from "react";
import QuoteSuccessIcon from "../Assets/SVG/QuoteSuccess";
import PrimaryBtn from "../components/PrimaryBtn";

const PaymentSuccess = ({ closeSuccessModal }) => {
  return (
    <div className="fixed top-0 z-50 left-0 backdrop-blur-[3px] bg-[rgba(0,0,0,0.10)] h-full w-full flex pb-7 justify-center paymentSuccessModal items-center">
      <div className="flex flex-col paymentSuccessModalBox rounded-[12px] bg-white w-[470px] h-fit justify-center">
        <div className="flex flex-col  justify-center items-center px-[24px] pt-[24px] ">
          <div>
            <QuoteSuccessIcon />
          </div>
          <h2 className="my-3 text-center trackMoveSuccessText font-sans text-[24px] w-[90%] text-[#121212] font-bold ">
            You have successfully made payment for your move
          </h2>
          <p className="text-[16px] text-center trackMoveSuccessSubText mb-3 font-light leading-[25.6px] w-[90%] text-[#525252] font-sans ">
            Link to track move and move details have been sent to your email
            address
          </p>
          <div className="w-[90%] mx-auto trackMoveSuccessInnerBox rounded-[8px] border-[1px] p-4 border-[#e3e3e3] h-fit mb-4 ">
            <p className="font-sans text-center text-[14px] text-[#707070] ml-2 leading-[25.6px] ">
              Move Date & Location
            </p>
            <div className="flex justify-center items-center">
              <p className="text-[#121212] trackMoveSuccessInnerBoxText font-sans text-[18px] font-bold ">
                25th March, 2025,
              </p>
              <p className="text-[#121212] trackMoveSuccessInnerBoxText font-sans text-[18px] font-bold ml-2 ">
                10:00 AM
              </p>
            </div>
            <p className="text-[#121212] mt-2 text-center trackMoveSuccessInnerBoxText font-sans text-[18px] font-bold ">
              Rozengracht 55, 1016 LZ Amsterdam
            </p>
            <div className="flex flex-wrap w-[90%] items-center mx-auto "></div>
          </div>
        </div>
        <div className="border-[#e3e3e3] flex items-center justify-center p-[16px] border-t-[1px]">
          <PrimaryBtn
            handlePress={closeSuccessModal}
            className={"text-[14px] "}
          >
            OK, GOT IT
          </PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
