import React from "react";

const QuoteProgress = () => {
  return (
    <div className="h-fit w-[450px] bg-[#f7f7f7] rounded-[20px] border-[1px] border-[#E4F2FB] px-[24px] py-[32px] ">
      <div className="flex relative">
        <div className="absolute top-9 left-[15px] bg-[#E3E8EF] h-[60px] w-[2px] rounded-[2px] "></div>
        <div className="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <rect x="1" y="1" width="30" height="30" rx="15" fill="#E4F0FC" />
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
        <div className="h-[100px] ">
          <p className="text-primary font-sans font-bold text-[16px] mb-2">
            Location Details
          </p>
          <p className="text-primary font-sans text-[14px]">
            Details of you are moving from
          </p>
        </div>
      </div>
      <div className="flex relative">
        <div className="absolute top-9 left-[15px] bg-[#E3E8EF] h-[60px] w-[2px] rounded-[2px] "></div>
        <div className="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <rect x="1" y="1" width="30" height="30" rx="15" fill="#fff" />
            <rect
              x="1"
              y="1"
              width="30"
              height="30"
              rx="15"
              stroke="#CDD5DF"
              stroke-width="2"
            />
            <circle cx="16" cy="16" r="5" fill="#CDD5DF" />
          </svg>
        </div>
        <div className="h-[100px] ">
          <p className="text-[#697586] font-sans font-bold text-[16px] mb-2">
            Setup Inventory List
          </p>
          <p className="text-[#697586] font-sans text-[14px]">
            Detailed list of items to be moved
          </p>
        </div>
      </div>
      <div className="flex relative">
        <div className="absolute top-9 left-[15px] bg-[#E3E8EF] h-[60px] w-[2px] rounded-[2px] "></div>
        <div className="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <rect x="1" y="1" width="30" height="30" rx="15" fill="#fff" />
            <rect
              x="1"
              y="1"
              width="30"
              height="30"
              rx="15"
              stroke="#CDD5DF"
              stroke-width="2"
            />
            <circle cx="16" cy="16" r="5" fill="#CDD5DF" />
          </svg>
        </div>
        <div className="h-[100px] ">
          <p className="text-[#697586] font-sans font-bold text-[16px] mb-2">
            Moving Information
          </p>
          <p className="text-[#697586] font-sans text-[14px]">
            Date, contacts, restrictions, etc...
          </p>
        </div>
      </div>
      <div className="flex ">
        <div className="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <rect x="1" y="1" width="30" height="30" rx="15" fill="#fff" />
            <rect
              x="1"
              y="1"
              width="30"
              height="30"
              rx="15"
              stroke="#CDD5DF"
              stroke-width="2"
            />
            <circle cx="16" cy="16" r="5" fill="#CDD5DF" />
          </svg>
        </div>
        <div className="h-[100px] ">
          <p className="text-[#697586] font-sans font-bold text-[16px] mb-2">
            View Summary
          </p>
          <p className="text-[#697586] font-sans text-[14px]">
            Full summary of your move
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteProgress;
