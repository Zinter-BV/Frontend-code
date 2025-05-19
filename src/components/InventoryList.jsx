import React, { useState } from "react";
import UploadImageForAIRecognition from "./UploadImageForAIRecognition";
import RoomItemContainer from "./RoomItemContainer";
import UploadImageModal from "../modal/UploadImageModal";
import InventoryListModal from "../modal/InventoryListModal";

const InventoryList = () => {
  const [isUploadImageModalOpen, setIsUploadImageModalOpen] = useState(false);
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
    <div className="ml-4 inventoryListContainer w-full">
      <div className="overflow-y-scroll pb-[70px] h-fit custom-scroll ">
        <div className="flex items-center addItemsBox w-full justify-between">
          <div className="flex addItemsContainer items-center">
            <h3 className="mr-2 font-sans text-[20px] font-bold text-[#121212] ">
              Add items to your
            </h3>
            <p className="font-sans text-[20px] font-semibold italic text-[#9e9e9e]">
              3 Bedroom Apartment
            </p>
          </div>
          <button className="text-[#3C82F6] addRoomBtnText self-center hover:bg-primary py-2 px-4 hover:text-white rounded-[20px] cursor-pointer text-[14px] text-manrope font-light ">
            + ADDITIONAL ROOM
          </button>
          <button className="h-[32px] w-[32px] rounded-full addRoomBtn hidden self-center justify-center items-center border-[1px] border-[#3C82F6] cursor-pointer text-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.8571 9.07143H9.14286V14.4286C9.14286 15.0179 8.62857 15.5 8 15.5C7.37143 15.5 6.85714 15.0179 6.85714 14.4286V9.07143H1.14286C0.514286 9.07143 0 8.58929 0 8C0 7.41071 0.514286 6.92857 1.14286 6.92857H6.85714V1.57143C6.85714 0.982143 7.37143 0.5 8 0.5C8.62857 0.5 9.14286 0.982143 9.14286 1.57143V6.92857H14.8571C15.4857 6.92857 16 7.41071 16 8C16 8.58929 15.4857 9.07143 14.8571 9.07143Z"
                fill="#3C82F6"
              />
            </svg>
          </button>
        </div>
        <UploadImageForAIRecognition
          openUploadImageModal={openUploadImageModal}
        />
        <RoomItemContainer
          openIsInventoryList={openIsInventoryList}
          activeIcon="Living Room"
        />
        <RoomItemContainer
          openIsInventoryList={openIsInventoryList}
          activeIcon="Toilet"
        />
        <RoomItemContainer
          openIsInventoryList={openIsInventoryList}
          activeIcon="Dinning Room"
        />
        <RoomItemContainer
          openIsInventoryList={openIsInventoryList}
          activeIcon="Kitchen"
        />
        <RoomItemContainer
          openIsInventoryList={openIsInventoryList}
          activeIcon="Bedroom"
        />
        <RoomItemContainer
          openIsInventoryList={openIsInventoryList}
          activeIcon="Bathroom"
        />
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
