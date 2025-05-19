import React, { useEffect, useState } from "react";

const InventoryItem = ({
  title,
  handleInventoriesSelected,
  handleRemoveInventory,
}) => {
  const [isCardSelected, setIsCardSelected] = useState(false);

  const [count, setCount] = useState(0);

  const increaseItems = (e) => {
    e.stopPropagation(); // Prevent triggering parent click event
    if (!isCardSelected) return; // Prevent increasing if not selected

    setCount((prevCount) => prevCount + 1); // Ensure state is updated correctly
    handleInventoriesSelected(title);
  };

  const decreaseItems = (e) => {
    e.stopPropagation(); // Prevent triggering parent click event
    if (!isCardSelected || count === 0) return; // Prevent decreasing if not selected or already 0

    setCount((prevCount) => prevCount - 1); // Ensure state is updated correctly
    handleRemoveInventory(title);
  };

  const selectCard = () => {
    setIsCardSelected((prev) => !prev);
  };
  useEffect(() => {
    // console.log(isCardSelected); // This logs the latest state after it updates
  }, [isCardSelected]);

  return (
    <div
      onClick={selectCard}
      className={`w-full group cursor-pointer h-[240px] rounded-[16px] hover:bg-[#e8f6ff] hover:border-none border-[1px] ${
        isCardSelected ? "border-primary" : "border-[#BCDFF6]"
      }`}
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
        <p className="font-sans text-[20px] inventoryItemText leading-[32px] text-[#262626] ">
          {title}
        </p>
        <div className="flex items-center">
          <button
            className={`group-hover:bg-primary opacity-30 h-[25px] w-[25px] flex items-center justify-center ${
              isCardSelected && "bg-primary opacity-100"
            } duration-500 p-1 rounded-[6px] transition`}
            onClick={decreaseItems}
          >
            <p
              className={`font-sans font-bold  text-[18px] group-hover:text-white ${
                isCardSelected ? "text-white" : "text-[#d1d1d1]"
              } `}
            >
              -
            </p>
          </button>
          <p
            className={`mx-3 font-sans text-[16px] font-bold ${
              isCardSelected ? "text-black" : "text-[#d1d1d1]"
            } `}
          >
            {count}
          </p>
          <button
            className={`group-hover:bg-primary opacity-30 h-[25px] w-[25px] flex items-center justify-center ${
              isCardSelected && "bg-primary opacity-100"
            } duration-500 p-1 rounded-[6px] transition`}
            onClick={increaseItems}
          >
            <p
              className={`font-sans font-bold  text-[20px] group-hover:text-white ${
                isCardSelected ? "text-white" : "text-[#d1d1d1]"
              } `}
            >
              +
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
