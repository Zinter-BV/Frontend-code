import React from "react";
import "./ViewSummary.css";

const ViewSummary = () => {
  return (
    <div className="ml-4 summaryBox w-full">
      <div className="overflow-y-scroll pb-[80px] viewSummaryContainer h-[700px] custom-scroll w-full">
        <div className="flex mb-4 items-center">
          <h3 className="mr-2 font-sans text-[20px] font-bold text-[#121212] ">
            Move Summary
          </h3>
        </div>
        <div className="p-[24px] w-full h-fit mb-20 summaryContainer rounded-[12px] ">
          <div className="relative mb-[20px]">
            <div className="absolute top-[65px] left-[15px] bg-[#E3E8EF] h-[65px] w-[2px] rounded-[2px]"></div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <rect
                  x="1"
                  y="1"
                  width="30"
                  height="30"
                  rx="15"
                  fill="#E4F0FC"
                />
                <rect
                  x="1"
                  y="1"
                  width="30"
                  height="30"
                  rx="15"
                  stroke="#248CD9"
                  stroke-width="2"
                />
                <circle cx="16" cy="16" r="5" fill="#075DB2" />
              </svg>
              <div className="h-[88px] ml-[10px] w-full px-[24px] py-[16px] border-[#e3e3e3] flex flex-col justify-between border-[1px] rounded-[12px] ">
                <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                  Moving From
                </p>
                <p className="text-[20px] text-[#136AB5] font-bold font-sans ">
                  Keizersgracht 123, 1015 CJ Amsterdam
                </p>
              </div>
            </div>
          </div>
          <div className="mb-[20px]">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <rect
                  x="1"
                  y="1"
                  width="30"
                  height="30"
                  rx="15"
                  fill="#E4F0FC"
                />
                <rect
                  x="1"
                  y="1"
                  width="30"
                  height="30"
                  rx="15"
                  stroke="#248CD9"
                  stroke-width="2"
                />
                <circle cx="16" cy="16" r="5" fill="#075DB2" />
              </svg>
              <div className="h-[88px] ml-[10px] w-full px-[24px] py-[16px] border-[#e3e3e3] flex flex-col justify-between border-[1px] rounded-[12px] ">
                <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                  Moving To
                </p>
                <p className="text-[20px] text-[#136AB5] font-bold font-sans ">
                  Rozengracht 55, 1016 LZ Amsterdam
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[30px]"></div>
            <div className="w-full">
              <div className="h-[160px] w-full  ml-[10px] border-[#e3e3e3] border-[1px] rounded-[12px] ">
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
              <div className="w-full h-[90px] ml-[10px] flex items-center border-[#e3e3e3] border-[1px] mt-[20px] rounded-[12px] justify-between ">
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
              <div className="w-full h-[90px] ml-[10px] flex items-center border-[#e3e3e3] border-[1px] mt-[20px] rounded-[12px] justify-between ">
                <div className="flex rounded-bl-[12px] p-[16px] flex-col  hover:bg-[#f7f7f7] w-[33%] h-full justify-between">
                  <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                    Full Name
                  </p>
                  <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                    Dasola Awoye
                  </p>
                </div>
                <div className="flex flex-col p-[16px]  hover:bg-[#f7f7f7] w-[33%] h-full  justify-between">
                  <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                    Email Address
                  </p>
                  <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                    dasola_awoye@gmail.com
                  </p>
                </div>
                <div className="flex p-[16px] rounded-br-[12px] flex-col  hover:bg-[#f7f7f7] w-[33%] h-full  justify-between">
                  <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                    Phone Number
                  </p>
                  <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                    0814 870 5378
                  </p>
                </div>
              </div>
              <div className="h-fit w-full border-[#e3e3e3] border-[1px] rounded-[12px] ">
                <div className="w-full h-[50%] flex items-center justify-between border-[#e3e3e3] border-b-[1px]">
                  <div className="flex rounded-tl-[12px] p-[16px] flex-col  hover:bg-[#f7f7f7] w-full h-full justify-between">
                    <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                      Move Size
                    </p>
                    <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                      House - 3 Bedrooms
                    </p>
                  </div>

                  <div className="flex flex-col p-[16px]  hover:bg-[#f7f7f7] w-full h-full  justify-between">
                    <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                      Living Room
                    </p>
                    <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                      20 items selected
                    </p>
                  </div>
                </div>
                <div className="w-full h-[50%] flex items-center justify-between border-[#e3e3e3] border-b-[1px]">
                  <div className="flex rounded-tl-[12px] p-[16px] flex-col  hover:bg-[#f7f7f7] w-full h-full justify-between">
                    <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                      Move Size
                    </p>
                    <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                      House - 3 Bedrooms
                    </p>
                  </div>

                  <div className="flex flex-col p-[16px]  hover:bg-[#f7f7f7] w-full h-full  justify-between">
                    <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                      Living Room
                    </p>
                    <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                      20 items selected
                    </p>
                  </div>
                </div>
                <div className="w-full h-[50%] flex items-center justify-between ">
                  <div className="flex rounded-tl-[12px] p-[16px] flex-col  hover:bg-[#f7f7f7] w-full h-full justify-between">
                    <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                      Move Size
                    </p>
                    <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                      House - 3 Bedrooms
                    </p>
                  </div>

                  <div className="flex flex-col p-[16px]  hover:bg-[#f7f7f7] w-full h-full  justify-between">
                    <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                      Living Room
                    </p>
                    <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                      20 items selected
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="w-full h-[90px] ml-[10px] flex items-center border-[#e3e3e3] border-[1px] mt-[20px] rounded-[12px] justify-between ">
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
              <div className="w-full h-[90px] ml-[10px] flex items-center border-[#e3e3e3] border-[1px] mt-[20px] rounded-[12px] justify-between ">
                <div className="flex rounded-bl-[12px] p-[16px] flex-col  hover:bg-[#f7f7f7] w-[33%] h-full justify-between">
                  <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                    Full Name
                  </p>
                  <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                    Dasola Awoye
                  </p>
                </div>
                <div className="flex flex-col p-[16px]  hover:bg-[#f7f7f7] w-[33%] h-full  justify-between">
                  <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                    Email Address
                  </p>
                  <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                    dasola_awoye@gmail.com
                  </p>
                </div>
                <div className="flex p-[16px] rounded-br-[12px] flex-col  hover:bg-[#f7f7f7] w-[33%] h-full  justify-between">
                  <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                    Phone Number
                  </p>
                  <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                    0814 870 5378
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSummary;
