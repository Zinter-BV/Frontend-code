import React, { useEffect, useState } from "react";
import InventoryItem from "../components/InventoryItem";
import { formattedItems, countMap } from "../utils";
import "./InventoryListModal.css";
import { useDispatch } from "react-redux";
import { setUserItems } from "../redux/action";
import SearchIcon from "../Assets/SVG/SearchIcon";

const InventoryListModal = ({
  activeRoom,
  closeInventoryListModal,
  isInventoryListModalOpen,
  openUploadImageModal,
}) => {
  const [allInventories, setAllInventories] = useState([]);
  const [items, setItems] = useState([]);
  const [loadedImages, setLoadedImages] = useState({});
  const [isLoadingImages, setIsLoadingImages] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  // Centralized room data configuration with dynamic imports
  const ROOM_DATA = {
    "Living Room": [
      { id: 0, title: "Glass Lounge Table", imgPath: "Image.svg" },
      { id: 1, title: "Arm Chair", imgPath: "Image (1).svg" },
      { id: 2, title: "Speakers Home Theater", imgPath: "Image (2).svg" },
      { id: 3, title: "Picture / Painting", imgPath: "Image (3).svg" },
      { id: 4, title: "Mirror", imgPath: "Image (4).svg" },
      { id: 5, title: "Book Case", imgPath: "Image (5).svg" },
      { id: 6, title: "Coffee Table", imgPath: "Image (6).svg" },
      { id: 7, title: "Flat Screen TV", imgPath: "Image (8).svg" },
      { id: 8, title: "TV Stand", imgPath: "Image (9).svg" },
      { id: 9, title: "Sectional Sofa", imgPath: "Image (10).svg" },
      { id: 10, title: "Elegant Floor Lamp", imgPath: "Image (11).svg" },
      { id: 11, title: "Center Table", imgPath: "Image (12).svg" },
    ],
    Bedroom: [
      { id: 0, title: "Bed (All Parts Included)", imgPath: "Image (13).svg" },
      { id: 1, title: "Lamp", imgPath: "Image (14).svg" },
      { id: 2, title: "Dresser", imgPath: "Image (15).svg" },
      { id: 3, title: "Picture / Painting", imgPath: "Image (16).svg" },
      { id: 4, title: "TV", imgPath: "Image (17).svg" },
      { id: 5, title: "Walk-in Closet", imgPath: "Image (18).svg" },
      { id: 6, title: "Area Rug", imgPath: "Image (19).svg" },
      { id: 7, title: "Mirror", imgPath: "Image (20).svg" },
      { id: 8, title: "Armchair", imgPath: "Image (21).svg" },
      { id: 9, title: "Mattress", imgPath: "Image (22).svg" },
      { id: 10, title: "Desk", imgPath: "Image (23).svg" },
      { id: 11, title: "Shoe Stand", imgPath: "Image (24).svg" },
    ],
    "Dinning Room": [
      { id: 0, title: "Glassware (cups etc)", imgPath: "Image (25).svg" },
      { id: 1, title: "Dining Chairs", imgPath: "Image (26).svg" },
      { id: 2, title: "Dining Table", imgPath: "Image (27).svg" },
      { id: 3, title: "Cabinet", imgPath: "Image (28).svg" },
      { id: 4, title: "Buffet or Sideboard", imgPath: "Image (29).svg" },
      { id: 5, title: "Bar Stool", imgPath: "Image (30).svg" },
      { id: 6, title: "Cutlery (forks, spoons)", imgPath: "Image (31).svg" },
      { id: 7, title: "Area Rug", imgPath: "Image (32).svg" },
      { id: 8, title: "Table Runner", imgPath: "Image (42).svg" },
      { id: 9, title: "Serving dishes", imgPath: "Image (34).svg" },
      { id: 10, title: "Table Cloth", imgPath: "Image (35).svg" },
      { id: 11, title: "Candles / Candlestick", imgPath: "Image (36).svg" },
      { id: 12, title: "Salt & pepper shakers", imgPath: "Image (37).svg" },
      { id: 13, title: "Trays / Serving platters", imgPath: "Image (39).svg" },
      { id: 14, title: "Placemats", imgPath: "Image (40).svg" },
      { id: 15, title: "Pitcher / Carafe", imgPath: "Image (33).svg" },
    ],
    "Toilet and bath": [
      { id: 0, title: "Toilet plunger", imgPath: "Image (43).svg" },
      { id: 1, title: "Toilet seat & lid", imgPath: "Image (44).svg" },
      { id: 2, title: "Toilet paper", imgPath: "Image (45).svg" },
      { id: 3, title: "Hand towel & towel rack", imgPath: "Image (46).svg" },
      { id: 4, title: "Air freshener", imgPath: "Image (47).svg" },
      { id: 5, title: "Toilet brush & holder", imgPath: "Image (48).svg" },
      { id: 6, title: "Hand soap dispenser", imgPath: "Image (49).svg" },
      { id: 7, title: "Bathroom mirror", imgPath: "Image (50).svg" },
      { id: 8, title: "Sink & faucet", imgPath: "Image (51).svg" },
    ],
    Kitchen: [
      { id: 0, title: "Cutting board", imgPath: "Image (60).svg" },
      { id: 1, title: "Frying pan / skillet", imgPath: "Image (61).svg" },
      { id: 2, title: "Cooking Pots", imgPath: "Image (63).svg" },
      { id: 3, title: "Stove", imgPath: "Image (64).svg" },
      { id: 4, title: "Cabinet", imgPath: "Image (65).svg" },
      { id: 5, title: "Blender", imgPath: "Image (91).svg" },
      { id: 6, title: "Chef’s knives", imgPath: "Image (92).svg" },
      { id: 7, title: "Buffet or Sideboard", imgPath: "Image (93).svg" },
      { id: 8, title: "Mixing bowls", imgPath: "Image (94).svg" },
      { id: 9, title: "Kettle", imgPath: "Image (95).svg" },
      { id: 10, title: "Salt & pepper shakers", imgPath: "Image (37).svg" },
      { id: 11, title: "Cutlery (forks, spoons)", imgPath: "Image (96).svg" },
      { id: 12, title: "Air Fryer ", imgPath: "Image (97).svg" },
      { id: 13, title: "Serving dishes", imgPath: "Image (34).svg" },
      { id: 14, title: "Food storage containers", imgPath: "Image (98).svg" },
      { id: 15, title: "Grater", imgPath: "Image (99).svg" },
      { id: 16, title: "Coffee maker", imgPath: "Image (100).svg" },
      { id: 17, title: "Refrigerator", imgPath: "Image (101).svg" },
      { id: 18, title: "Measuring cups & spoons", imgPath: "Image (102).svg" },
      { id: 19, title: "Kitchen Scale", imgPath: "Image (103).svg" },
      { id: 20, title: "Oven", imgPath: "Image (104).svg" },
      { id: 21, title: "Trays / Serving platters", imgPath: "Image (39).svg" },
    ],
  };

  const DEFAULT_ROOM = "Living Room";

  // Dynamic image loading function
  const loadRoomImages = async (roomName) => {
    const roomData = ROOM_DATA[roomName] || ROOM_DATA[DEFAULT_ROOM];

    // Check if images for this room are already loaded
    if (loadedImages[roomName]) {
      return loadedImages[roomName];
    }

    setIsLoadingImages(true);

    try {
      const imagePromises = roomData.map(async (item) => {
        try {
          const module = await import(`../Assets/${item.imgPath}`);
          return {
            id: item.id,
            title: item.title,
            img: module.default,
          };
        } catch (error) {
          console.warn(`Failed to load image: ${item.imgPath}`, error);
          // Return a placeholder or fallback
          return {
            id: item.id,
            title: item.title,
            img: null, // or a default placeholder image
          };
        }
      });

      const loadedRoomImages = await Promise.all(imagePromises);

      // Cache the loaded images
      setLoadedImages((prev) => ({
        ...prev,
        [roomName]: loadedRoomImages,
      }));

      return loadedRoomImages;
    } catch (error) {
      console.error(`Error loading images for ${roomName}:`, error);
      return [];
    } finally {
      setIsLoadingImages(false);
    }
  };

  // Load images when activeRoom changes
  useEffect(() => {
    loadRoomImages(activeRoom);
  }, [activeRoom]);

  // Cleanup function to free up memory for unused rooms
  useEffect(() => {
    return () => {
      // Clean up loaded images when component unmounts
      setLoadedImages({});
    };
  }, []);

  // Get current room data
  const getCurrentRoomData = () => {
    return loadedImages[activeRoom] || [];
  };

  // Filter items based on search query
  useEffect(() => {
    const currentRoomData = getCurrentRoomData();

    if (!searchQuery.trim()) {
      setFilteredItems(currentRoomData);
    } else {
      const filtered = currentRoomData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  }, [searchQuery, loadedImages, activeRoom]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    // The search is already handled by the useEffect above
    // This function can be used for additional actions if needed
    console.log("Searching for:", searchQuery);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
  };

  const appendItemToArray = (newItem) => {
    setItems((prevArray) => {
      // Find if item already exists
      const existingItemIndex = prevArray.findIndex(
        (item) =>
          item.itemName === newItem.itemName && item.room === newItem.room
      );

      if (existingItemIndex >= 0) {
        // Item exists, update its count
        const updatedArray = [...prevArray];

        if (newItem.numberOfCount === 0) {
          // Remove item if count is 0
          return updatedArray.filter((_, index) => index !== existingItemIndex);
        } else {
          // Update existing item's count
          updatedArray[existingItemIndex] = {
            ...updatedArray[existingItemIndex],
            numberOfCount: newItem.numberOfCount,
          };
          return updatedArray;
        }
      } else if (newItem.numberOfCount > 0) {
        // Add new item only if count > 0
        return [
          ...prevArray,
          {
            itemName: newItem.itemName,
            numberOfCount: newItem.numberOfCount,
            room: newItem.room,
          },
        ];
      }
      return prevArray;
    });
  };

  // add item to the array
  const handleInventoriesSelected = (newItems) => {
    setAllInventories((prevItems) => [...prevItems, newItems]); // Append new images
  };

  // remove item from array
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
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (items.length === 0) return;
    console.log(items);
    dispatch(setUserItems(items));
    closeInventoryListModal();
  };

  const currentRoomData = getCurrentRoomData();

  return (
    <div className="fixed top-0 z-50 left-0 backdrop-blur-[3px] bg-[rgba(0,0,0,0.10)] h-full w-full flex justify-center items-center ">
      <div className="bg-white flex flex-col justify-between w-[90%] rounded-[16px] h-[90%]">
        <div className="flex items-center w-full justify-between p-[28px] border-b-[1px] border-[#E3E8EF] ">
          <div className="flex inventoryListHeader items-center">
            <h3 className="mr-2 font-sans text-[20px] font-bold text-[#121212] ">
              Add Items
            </h3>
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
            <div className="h-[42px] w-fit rounded-[1000px] mx-auto border-[1px] p-[3px] border-[#E5E5E5] flex items-center ">
              <div
                className={`h-[36px] mr-1 cursor-pointer  border-[1px] rounded-[1000px] p-[10px] flex justify-center items-center border-[#E5E5E5] `}
              >
                <p
                  className={` font-sans text-[16px] inventoryListModal leading-[25.6px] ${
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
            <div className="flex justify-between items-center">
              <p className="font-sans text-[20px] font-semibold italic text-[#9e9e9e]">
                {activeRoom}
              </p>
              <div className="w-[300px] border-[#E5E5E5] h-[40px] justify-between border-[1px] flex items-center rounded-[100px] px-1 ">
                <input
                  type="text"
                  placeholder="Search item here"
                  className="border-none pl-4 w-[94%] outline-none"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSearchClick();
                    }
                  }}
                />
                <div
                  className="w-[34px] bg-[#F7F7F7] h-[34px] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#E5E5E5] transition-colors"
                  onClick={handleSearchClick}
                >
                  <SearchIcon />
                </div>
              </div>
            </div>

            {/* Search results info */}
            {searchQuery && (
              <div className="my-2 text-sm text-[#9e9e9e]">
                {filteredItems.length > 0
                  ? `Found ${filteredItems.length} item${
                      filteredItems.length !== 1 ? "s" : ""
                    } matching "${searchQuery}"`
                  : `No items found matching "${searchQuery}"`}
              </div>
            )}

            {/* Loading indicator */}
            {isLoadingImages && (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="ml-2 text-[#9e9e9e]">Loading</p>
              </div>
            )}

            <div className="my-3 grid grid-cols-3 inventoryItemContainer gap-[18px] pb-4 w-full  ">
              {filteredItems.map((property) => {
                return (
                  <InventoryItem
                    key={property?.id}
                    handleInventoriesSelected={handleInventoriesSelected}
                    handleRemoveInventory={handleRemoveInventory}
                    title={property?.title}
                    img={property?.img}
                    appendItemToArray={appendItemToArray}
                    selectedItems={items}
                    activeRoom={activeRoom}
                  />
                );
              })}
            </div>

            {/* No results message */}
            {!isLoadingImages && searchQuery && filteredItems.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="text-[#9e9e9e] text-lg mb-2">
                  No items found
                </div>
                <div className="text-[#9e9e9e] text-sm mb-4">
                  Try searching with different keywords
                </div>
                <button
                  onClick={clearSearch}
                  className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-opacity-90 transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}
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
                {items.length}{" "}
                <span className="selectedItems  uploadImageItemSelected">
                  Items Selected
                </span>
              </p>
            </div>
            <div className="flex flex-wrap finalItemsContainer ml-2 w-[60%] items-center">
              {items.map((item, index) => (
                <div key={index} className="flex ml-2 items-center">
                  <p className="mr-2 text-[14px] font-sans leading-[18.2px] text-[#707070] ">
                    {item.itemName} ({item.numberOfCount})
                  </p>
                  {index !== items.length - 1 && (
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
