import React, { useState } from "react";

const InventoryItem = ({ title }) => {
  const [isCardSelected, setIsCardSelected] = useState(false);

  const [count, setCount] = useState(0);

  const increaseItems = () => setCount(count + 1);

  const decreaseItems = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  const selectCard = () => {
    setIsCardSelected((prev) => !prev);
  };

  return (
    <div
      onClick={selectCard}
      className={`w-full cursor-pointer h-[240px] rounded-[16px] hover:bg-[#e8f6ff] hover:border-none border-[1px] {${isCardSelected} ? 'border-primary' : 'border-[#BCDFF6]'}`}
    >
      <div className="border-b-[1px] border-[#e5e5e5] h-[60%] p-[20px] flex justify-center items-center ">
        <div className="flex justify-center items-center rounded-[8px] bg-white w-full mx-auto ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="98"
            height="99"
            viewBox="0 0 98 99"
            fill="none"
          >
            <path
              d="M85.7506 37.25C81.259 37.25 77.584 40.925 77.584 45.4167V61.75H20.4173V45.4167C20.4173 40.925 16.7423 37.25 12.2507 37.25C7.75898 37.25 4.08398 40.925 4.08398 45.4167V65.8333C4.08398 72.5708 9.59648 78.0833 16.334 78.0833V82.1667C16.334 84.4125 18.1715 86.25 20.4173 86.25C22.6631 86.25 24.5006 84.4125 24.5006 82.1667V78.0833H73.5006V82.1667C73.5006 84.4125 75.3381 86.25 77.584 86.25C79.8298 86.25 81.6673 84.4125 81.6673 82.1667V78.0833C88.4048 78.0833 93.9173 72.5708 93.9173 65.8333V45.4167C93.9173 40.925 90.2423 37.25 85.7506 37.25Z"
              fill="#4BA8E9"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.4805 53.5833V45.4167C28.4805 37.8217 23.2538 31.4925 16.2305 29.655V25C16.2305 18.2625 21.743 12.75 28.4805 12.75H69.3138C76.0513 12.75 81.5638 18.2625 81.5638 25V29.655C74.5405 31.4925 69.3138 37.8217 69.3138 45.4167V53.5833H28.4805ZM48.5042 33.6113C51.5206 33.6113 53.9659 31.166 53.9659 28.1496C53.9659 25.1332 51.5206 22.6879 48.5042 22.6879C45.4878 22.6879 43.0425 25.1332 43.0425 28.1496C43.0425 31.166 45.4878 33.6113 48.5042 33.6113Z"
              fill="#136AB5"
            />
          </svg>
        </div>
      </div>
      <div className="flex h-[40%] flex-col items-center justify-center ">
        <p className="font-sans text-[20px] leading-[32px] text-[#262626] ">
          {title}
        </p>
        <div className="flex items-center">
          <button onClick={decreaseItems}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
            >
              <path
                d="M1.76578 8.29943H12.1396C12.5684 8.29943 12.9159 7.95185 12.9159 7.5231C12.9159 7.09435 12.5684 6.74678 12.1396 6.74678H1.76578C1.33703 6.74678 0.989453 7.09435 0.989453 7.5231C0.989453 7.95185 1.33703 8.29943 1.76578 8.29943Z"
                // fill="#121212"
                fill="#d1d1d1"
                // stroke="#121212"
                stroke="#d1d1d1"
                stroke-width="0.4"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <p className="mx-3 font-sans text-[16px] text-[#d1d1d1] font-bold ">
            {count}
          </p>
          <button onClick={increaseItems}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
            >
              <path
                d="M6.27012 2.33633V6.74693H1.85953C1.43078 6.74693 1.0832 7.0945 1.0832 7.52325C1.0832 7.952 1.43078 8.29957 1.85953 8.29957H6.27012V12.7102C6.27012 13.1389 6.61769 13.4865 7.04644 13.4865C7.4752 13.4865 7.82277 13.1389 7.82277 12.7102V8.29957H12.2334C12.6621 8.29957 13.0097 7.952 13.0097 7.52325C13.0097 7.0945 12.6621 6.74693 12.2334 6.74693H7.82277V2.33633C7.82277 1.90758 7.4752 1.56001 7.04644 1.56001C6.61769 1.56001 6.27012 1.90758 6.27012 2.33633Z"
                // fill="#121212"
                // stroke="#121212"
                fill="#d1d1d1"
                stroke="#d1d1d1"
                stroke-width="0.4"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
