import React, { useState } from "react";
import InventoryItem from "../components/InventoryItem";
import { formattedItems, countMap } from "../utils";
import "./InventoryListModal.css";

const InventoryListModal = ({
  closeInventoryListModal,
  isInventoryListModalOpen,
  openUploadImageModal,
}) => {
  const [allInventories, setAllInventories] = useState([]);

  // add item to the array
  const handleInventoriesSelected = (newItems) => {
    setAllInventories((prevItems) => [...prevItems, newItems]); // Append new images
  };

  // remove item froom array
  const handleRemoveInventory = (itemToRemove) => {
    setAllInventories((prevItems) => {
      const index = prevItems.indexOf(itemToRemove);
      if (index !== -1) {
        const newItems = [...prevItems]; // Create a new array
        newItems.splice(index, 1); // Remove only one occurrence
        return newItems;
      }
      return prevItems; // Return original if item not found
    });
  };

  const newFormattedData = formattedItems(countMap(allInventories));

  const handleSubmit = () => {
    if (allInventories.length === 0) return;
    console.log(allInventories);
    closeInventoryListModal();
  };

  return (
    <div className="fixed top-0 z-50 left-0 backdrop-blur-[3px] bg-[rgba(0,0,0,0.10)] h-full w-full flex justify-center items-center ">
      <div className="bg-white flex flex-col justify-between w-[90%] rounded-[16px] h-[90%]">
        <div className="flex items-center w-full justify-between p-[28px] border-b-[1px] border-[#E3E8EF] ">
          <div className="flex inventoryListHeader items-center">
            <h3 className="mr-2 font-sans text-[20px] font-bold text-[#121212] ">
              Add Items to
            </h3>
            <p className="font-sans text-[20px] font-semibold italic text-[#9e9e9e]">
              Living room
            </p>
          </div>
          <div
            onClick={closeInventoryListModal}
            className="h-[32px] cursor-pointer w-[32px] rounded-full  flex items-center border-[1px] border-[#f7f7f7] justify-center "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3.68 14L8 9.68L12.32 14L14 12.32L9.68 8L14 3.68L12.32 2L8 6.32L3.68 2L2 3.68L6.32 8L2 12.32L3.68 14Z"
                fill="#DE2527"
              />
            </svg>
          </div>
        </div>
        <div className="w-full overflow-y-scroll  h-[80%]">
          <div className="w-[90%] py-4 mx-auto h-full ">
            <div className="h-[42px] w-fit rounded-[1000px] border-[1px] p-[3px] border-[#E5E5E5] flex items-center ">
              <div
                className={`h-[36px] mr-1 cursor-pointer  border-[1px] rounded-[1000px] p-[10px] flex justify-center items-center border-[#E5E5E5] `}
              >
                <p
                  className={` font-sans text-[16px] inventoryListModal leading-[25.6px] {${
                    isInventoryListModalOpen
                      ? "text-[#121212]"
                      : "text-[#9e9e9e]"
                  }`}
                >
                  Inventory List
                </p>
              </div>
              <div
                onClick={openUploadImageModal}
                className={`h-[36px]  cursor-pointer {${!isInventoryListModalOpen} && border-[1px]}  rounded-[1000px] p-[10px] flex justify-center items-center border-[#E5E5E5] `}
              >
                <p className="font-sans text-[16px] inventoryListModal leading-[25.6px] text-[#9e9e9e] ">
                  Upload Image
                </p>
              </div>
            </div>
            <div className="my-3 grid grid-cols-4 inventoryItemContainer gap-[18px] pb-4 w-full  ">
              <InventoryItem
                handleInventoriesSelected={handleInventoriesSelected}
                handleRemoveInventory={handleRemoveInventory}
                title="Elegant Floor Lamp"
              />
              <InventoryItem
                handleInventoriesSelected={handleInventoriesSelected}
                handleRemoveInventory={handleRemoveInventory}
                title="Artistic Wall Decor"
              />
              <InventoryItem
                handleInventoriesSelected={handleInventoriesSelected}
                handleRemoveInventory={handleRemoveInventory}
                title="Stylish Coffee Table"
              />
              <InventoryItem
                handleInventoriesSelected={handleInventoriesSelected}
                handleRemoveInventory={handleRemoveInventory}
                title="Toilet Seat"
              />
              <InventoryItem
                handleInventoriesSelected={handleInventoriesSelected}
                handleRemoveInventory={handleRemoveInventory}
                title="Sectional Sofa"
              />
              <InventoryItem
                handleInventoriesSelected={handleInventoriesSelected}
                handleRemoveInventory={handleRemoveInventory}
                title="Recliner Chair"
              />
              <InventoryItem
                handleInventoriesSelected={handleInventoriesSelected}
                handleRemoveInventory={handleRemoveInventory}
                title="Coffe Table"
              />
              <InventoryItem
                handleInventoriesSelected={handleInventoriesSelected}
                handleRemoveInventory={handleRemoveInventory}
                title="TV Stand"
              />
              <InventoryItem
                handleInventoriesSelected={handleInventoriesSelected}
                handleRemoveInventory={handleRemoveInventory}
                title="Bookshelf"
              />
              <InventoryItem
                handleInventoriesSelected={handleInventoriesSelected}
                handleRemoveInventory={handleRemoveInventory}
                title="Coffee Table"
              />
              <InventoryItem
                handleInventoriesSelected={handleInventoriesSelected}
                handleRemoveInventory={handleRemoveInventory}
                title="Accent Chair"
              />
            </div>
          </div>
        </div>
        <div className="flex allListCont items-center w-full shadow-[0px_-6px_6px_-6px_rgba(0,0,0,0.3)] justify-between  p-[28px] border-t-[1px] border-[#E3E8EF] ">
          <div className="flex allSelectedContainer items-center">
            <div className="flex bg-[#F0F9FF] border-[1px] border-[#E0F2FE] rounded-[4px] p-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
              >
                <path
                  d="M3.77578 6.9998L0.925781 4.1498L1.63828 3.4373L3.77578 5.5748L8.36328 0.987305L9.07578 1.6998L3.77578 6.9998Z"
                  fill="#3C82F6"
                />
              </svg>
              <p className="font-sans text-[16px] w-[130px] text-[#3C82F6] ml-2 leading-[25.6px] ">
                {allInventories.length}{" "}
                <span className="selectedItems  uploadImageItemSelected">
                  Items Selected
                </span>
              </p>
            </div>
            <div className="flex flex-wrap finalItemsContainer ml-2 w-[60%] items-center">
              {newFormattedData.map((item, index) => (
                <div key={index} className="flex ml-2 items-center">
                  <p className="mr-2 text-[14px] font-sans leading-[18.2px] text-[#707070] ">
                    {item}
                  </p>
                  {index !== newFormattedData.length - 1 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      viewBox="0 0 4 4"
                      fill="none"
                    >
                      <circle cx="2" cy="2" r="2" fill="#D1D1D1" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="self-center bg-primary py-2 px-4 w-[150px] inventoryListBtn text-white rounded-[20px] cursor-pointer text-[12px] text-manrope font-light "
          >
            ADD ITEMS
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryListModal;
