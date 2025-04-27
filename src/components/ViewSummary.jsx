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
            <div className="absolute top-[65px] sideSide left-[15px] bg-[#E3E8EF] h-[65px] w-[2px] rounded-[2px]"></div>
            <div className="flex items-center">
              <div className="sideSide">
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
              </div>

              <div className="h-[88px] boxSide ml-[10px] w-full px-[24px] py-[16px] border-[#e3e3e3] flex flex-col justify-between border-[1px] rounded-[12px] ">
                <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                  Moving From
                </p>
                <p className="text-[20px] text-[#136AB5] font-bold font-sans ">
                  Keizersgracht 123, 1015 CJ Amsterdam
                </p>
              </div>
            </div>
          </div>
          <div className="mb-[20px] lineView items-center hidden h-[40px] justify-center">
            <div className="h-full bg-[#3C82F6] rounded-[2px] w-[2px] "></div>
          </div>
          <div className="mb-[20px]">
            <div className="flex items-center">
              <div className="sideSide">
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
              </div>

              <div className="h-[88px] boxSide ml-[10px] w-full px-[24px] py-[16px] border-[#e3e3e3] flex flex-col justify-between border-[1px] rounded-[12px] ">
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
            <div className="w-[30px] sideSide "></div>
            <div className="w-full boxSide ml-[10px]">
              <div className="h-[160px] w-full webTable border-[#e3e3e3] border-[1px] rounded-[12px] ">
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

              {/* mobile */}
              <div className="h-fit w-full mobileTable border-[#e3e3e3] border-[1px] rounded-[12px] ">
                <div className="w-full h-[50%] flex items-center justify-between border-[#e3e3e3] border-b-[1px]">
                  <div className="flex w-[50%] rounded-tl-[12px] p-[16px] flex-col  hover:bg-[#f7f7f7]  h-full justify-between">
                    <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                      Move Size
                    </p>
                    <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                      House - 3 Bedrooms
                    </p>
                  </div>

                  <div className="flex flex-col p-[16px]  hover:bg-[#f7f7f7] w-[50%] h-full  justify-between">
                    <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                      Living Room
                    </p>
                    <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                      20 items selected
                    </p>
                  </div>
                </div>
                <div className="w-full h-[50%] flex items-center border-[#e3e3e3] border-b-[1px] justify-between ">
                  <div className="flex rounded-bl-[12px] p-[16px] flex-col  hover:bg-[#f7f7f7] w-[50%] h-full justify-between">
                    <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                      Bedroom 2
                    </p>
                    <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                      7 items selected
                    </p>
                  </div>
                  <div className="flex flex-col p-[16px]  hover:bg-[#f7f7f7] w-[50%] h-full  justify-between">
                    <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                      Dinning Room
                    </p>
                    <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                      6 items selected
                    </p>
                  </div>
                </div>
                <div className="w-full h-[50%] flex items-center justify-between ">
                  <div className="flex rounded-bl-[12px] p-[16px] flex-col  hover:bg-[#f7f7f7] w-[50%] h-full justify-between">
                    <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                      Bedroom 2
                    </p>
                    <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                      7 items selected
                    </p>
                  </div>
                  <div className="flex flex-col p-[16px]  hover:bg-[#f7f7f7] w-[50%] h-full  justify-between">
                    <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                      Dinning Room
                    </p>
                    <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                      6 items selected
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full h-[90px] webTable flex items-center border-[#e3e3e3] border-[1px] mt-[20px] rounded-[12px] justify-between ">
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
              <div className="w-full h-[90px] webTable flex items-center border-[#e3e3e3] border-[1px] mt-[20px] rounded-[12px] justify-between ">
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

              {/* mobile */}
              <div className="h-fit w-full mobileTable border-[#e3e3e3] border-[1px] rounded-[12px] ">
                <div className="w-full h-[50%] flex items-center justify-between border-[#e3e3e3] border-b-[1px]">
                  <div className="flex w-[50%] rounded-tl-[12px] p-[16px] flex-col  hover:bg-[#f7f7f7]  h-full justify-between">
                    <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                      Move Date
                    </p>
                    <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                      22 March, 2025
                    </p>
                  </div>

                  <div className="flex flex-col p-[16px]  hover:bg-[#f7f7f7] w-[50%] h-full  justify-between">
                    <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                      Day
                    </p>
                    <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                      Tuesday
                    </p>
                  </div>
                </div>
                <div className="w-full h-[50%] flex items-center border-[#e3e3e3] border-b-[1px] justify-between ">
                  <div className="flex rounded-bl-[12px] p-[16px] flex-col  hover:bg-[#f7f7f7] w-[50%] h-full justify-between">
                    <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                      Move Time
                    </p>
                    <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                      10:00 AM
                    </p>
                  </div>
                  <div className="flex flex-col p-[16px]  hover:bg-[#f7f7f7] w-[50%] h-full  justify-between">
                    <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                      Movers phone
                    </p>
                    <p className="text-[16px] leading-[25.6px] font-light text-[#121212] font-sans ">
                      08148705378
                    </p>
                  </div>
                </div>
                <div className="w-full h-[50%] flex items-center justify-between ">
                  <div className="flex rounded-bl-[12px] p-[16px] flex-col  hover:bg-[#f7f7f7] w-[50%] h-full justify-between">
                    <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                      Movers email
                    </p>
                    <p className="text-[16px] tableText leading-[25.6px] font-light text-[#121212] font-sans ">
                      dasola_awoye@gmail.com
                    </p>
                  </div>
                  <div className="flex flex-col p-[16px]  hover:bg-[#f7f7f7] w-[50%] h-full  justify-between">
                    <p className="font-sans text-[14px] leading-[19.6px] text-[#707070] ">
                      Address
                    </p>
                    <p className="text-[16px] tableText overflow-hidden text-ellipsis whitespace-nowrap leading-[25.6px] font-light text-[#121212] font-sans ">
                      utrechtsestraat 30 1017 va amsterdam
                    </p>
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

export default ViewSummary;
