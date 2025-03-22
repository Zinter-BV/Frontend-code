import React from "react";
import UploadImageForAIRecognition from "./UploadImageForAIRecognition";

const InventoryList = () => {
  return (
    <div className="ml-4  w-full">
      <div className="overflow-y-scroll pb-[40px] h-[700px] custom-scroll ">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center">
            <h3 className="mr-2 font-sans text-[20px] font-bold text-[#121212] ">
              Add items to your
            </h3>
            <p className="font-sans text-[20px] font-semibold italic text-[#9e9e9e]">
              3 Bedroom Apartment
            </p>
          </div>
          <button className="text-[#3C82F6] self-center hover:bg-primary py-2 px-4 hover:text-white rounded-[20px] cursor-pointer text-[14px] text-manrope font-light ">
            + ADDITIONAL ROOM
          </button>
        </div>
        <UploadImageForAIRecognition />
      </div>
    </div>
  );
};

export default InventoryList;
