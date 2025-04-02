import React from "react";
import img from "../Assets/Rectangle 4562.svg";

const MovingCompanyDetails = ({ makeInActive }) => {
  return (
    <div className="ml-4 h-fit ">
      <div className="overflow-y-scroll pb-[70px] custom-scroll ">
        <div className="flex mb-3 items-center">
          <p
            onClick={makeInActive}
            className="text-[#9e9e9e] cursor-pointer text-[14px] font-sans leading-[19.6px]"
          >
            Quotes
          </p>{" "}
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
            Quote Breakdown & Moving Company Details
          </p>
        </div>
        <div className="w-full h-[300px] overflow-hidden rounded-[20px] relative">
          <img
            src={img}
            className=" w-full h-full object-cover rounded-[25px]"
            alt="hero"
          />
          <div className="absolute bottom-[20px] flex justify-center items-center left-[5] w-full  ">
            <div className="w-full px-[23px] ">
              <div className="bg-[#d9d9d9] w-fit flex items-center  p-[10px] rounded-t-[10px] bg-opacity-70 backdrop-blur-sm h-[50px]">
                <div className="border-[0.5px] backdrop-blur-[3px] bg-[rgba(255,255,255,0.50)] border-[#D1D1D1] py-1 px-2  w-fit items-center rounded-[18px] flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                  >
                    <path
                      d="M9 13.3589L14.562 16.5L13.086 10.58L18 6.59684L11.529 6.07474L9 0.5L6.471 6.07474L0 6.59684L4.905 10.58L3.438 16.5L9 13.3589Z"
                      fill="#121212"
                    />
                  </svg>
                  <p className="ml-1 self-center text-[16px] font-sora ">4.3</p>
                </div>
              </div>
              <div className="bg-[#d9d9d9] flex items-center w-fit rounded-tr-[10px] py-[10px] bg-opacity-70 backdrop-blur-sm rounded-b-[10px] pl-[14px] ">
                <span className="mr-1 font-unbounded text-[24px] text-[#121212] font-bold leading-[25.6px] ">
                  Independent Movers
                </span>
                <div className="bg-[#DCFAE6] mx-3 rounded-[4px] px-[8px] py-[4px] ">
                  <p className="text-[#079455] text-[14px] font-sans leading-[18.2px] ">
                    Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 border-[1px] w-full h-[146px] flex justify-center items-center rounded-[20px] border-[#136AB5] ">
          <div className="bg-slate-500 w-[95%] h-[80%]"></div>
        </div>
        <div className="w-full">
          <div className="h-[160px] w-full  border-[#e3e3e3] border-[1px] rounded-[12px] ">
            <div className="w-full h-[50%] flex items-center justify-between border-[#e3e3e3] border-b-[1px]">
              <div className="flex rounded-tl-[12px] p-[16px] flex-col  hover:bg-[#f7f7f7] w-[33%] h-full justify-between">
                <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                  Move Size
                </p>
                <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                  House - 3 Bedrooms
                </p>
              </div>

              <div className="flex flex-col p-[16px]  hover:bg-[#f7f7f7] w-[33%] h-full  justify-between">
                <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                  Living Room
                </p>
                <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                  20 items selected
                </p>
              </div>
              <div className="flex p-[16px] rounded-tr-[12px] flex-col  hover:bg-[#f7f7f7] w-[33%] h-full  justify-between">
                <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                  Bedroom 1
                </p>
                <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                  12 items selected
                </p>
              </div>
            </div>
            <div className="w-full h-[50%] flex items-center justify-between ">
              <div className="flex rounded-bl-[12px] p-[16px] flex-col  hover:bg-[#f7f7f7] w-[33%] h-full justify-between">
                <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                  Bedroom 2
                </p>
                <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                  7 items selected
                </p>
              </div>
              <div className="flex flex-col p-[16px]  hover:bg-[#f7f7f7] w-[33%] h-full  justify-between">
                <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                  Dinning Room
                </p>
                <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                  6 items selected
                </p>
              </div>
              <div className="flex p-[16px] rounded-br-[12px] flex-col  hover:bg-[#f7f7f7] w-[33%] h-full  justify-between">
                <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                  Kitchen
                </p>
                <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                  18 items selected
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[90px] flex items-center border-[#e3e3e3] border-[1px] mt-[20px] rounded-[12px] justify-between ">
            <div className="flex rounded-bl-[12px] p-[16px] flex-col  hover:bg-[#f7f7f7] w-[33%] h-full justify-between">
              <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                Move Date
              </p>
              <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                22 March, 2025
              </p>
            </div>
            <div className="flex flex-col p-[16px]  hover:bg-[#f7f7f7] w-[33%] h-full  justify-between">
              <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                Day
              </p>
              <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                Tuesday
              </p>
            </div>
            <div className="flex p-[16px] rounded-br-[12px] flex-col  hover:bg-[#f7f7f7] w-[33%] h-full  justify-between">
              <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                Move Time
              </p>
              <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                10:00 AM
              </p>
            </div>
          </div>
          <div className="w-full h-[90px] flex items-center border-[#e3e3e3] border-[1px] mt-[20px] rounded-[12px] justify-between ">
            <div className="flex rounded-bl-[12px] p-[16px] flex-col  hover:bg-[#f7f7f7] w-[33%] h-full justify-between">
              <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                Movers phone
              </p>
              <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                08148705378
              </p>
            </div>
            <div className="flex flex-col p-[16px]  hover:bg-[#f7f7f7] w-[33%] h-full  justify-between">
              <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                Movers email
              </p>
              <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                dasola_awoye@gmail.com
              </p>
            </div>
            <div className="flex p-[16px] rounded-br-[12px] flex-col  hover:bg-[#f7f7f7] w-[33%] h-full  justify-between">
              <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                Address
              </p>
              <p className="text-[16px] overflow-hidden text-ellipsis whitespace-nowrap leading-[25.6px] font-light text-[#121212] font-sans ">
                utrechtsestraat 30 1017 va amsterdam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingCompanyDetails;
