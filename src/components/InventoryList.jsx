import React, { useState } from "react";
import UploadImageForAIRecognition from "./UploadImageForAIRecognition";
import RoomItemContainer from "./RoomItemContainer";
import UploadImageModal from "../modal/UploadImageModal";
import InventoryListModal from "../modal/InventoryListModal";

const InventoryList = () => {
  const [isUploadImageModalOpen, setIsUploadImageModalOpen] = useState(true);
  const [isInventoryListModalOpen, setIsInventoryListModalModalOpen] =
    useState(false);

  // open inventorylist modal
  const openIsInventoryList = () => {
    setIsInventoryListModalModalOpen(true);
    setIsUploadImageModalOpen(false);
  };

  const closeInventoryListModal = () => {
    setIsInventoryListModalModalOpen(false);
  };

  // open uplo0ad image modal
  const openUploadImageModal = () => {
    setIsUploadImageModalOpen(true);
    setIsInventoryListModalModalOpen(false);
  };

  const closeUploadImageModal = () => {
    setIsUploadImageModalOpen(false);
  };

  return (
    <div className="ml-4  w-full">
      <div className="overflow-y-scroll pb-[70px] h-fit custom-scroll ">
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
        <UploadImageForAIRecognition
          openUploadImageModal={openUploadImageModal}
        />
        <RoomItemContainer activeIcon="Living Room" />
        <RoomItemContainer activeIcon="Toilet" />
        <RoomItemContainer activeIcon="Dinning Room" />
        <RoomItemContainer activeIcon="Kitchen" />
        <RoomItemContainer activeIcon="Bedroom" />
        <RoomItemContainer activeIcon="Bathroom" />
      </div>
      {isUploadImageModalOpen && (
        <UploadImageModal
          openIsInventoryList={openIsInventoryList}
          isUploadImageModalOpen={isUploadImageModalOpen}
          closeUploadImageModal={closeUploadImageModal}
        />
      )}
      {isInventoryListModalOpen && (
        <InventoryListModal
          isInventoryListModalOpen={isInventoryListModalOpen}
          openUploadImageModal={openUploadImageModal}
          closeInventoryListModal={closeInventoryListModal}
        />
      )}
    </div>
  );
};

export default InventoryList;
