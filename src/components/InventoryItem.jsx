import { useState } from "react";

const InventoryItem = ({
  activeRoom = { activeRoom },
  img,
  appendItemToArray,
  title,
  handleInventoriesSelected,
  handleRemoveInventory,
  selectedItems = [], // Pass selected items from parent
}) => {
  // Find if this item is already selected
  const existingItem = selectedItems.find((item) => item.itemName === title);
  const initialCount = existingItem ? existingItem.numberOfCount : 0;
  const initialSelected = existingItem ? true : false;

  const [isCardSelected, setIsCardSelected] = useState(initialSelected);
  const [count, setCount] = useState(initialCount);

  const increaseItems = () => {
    const newCount = count + 1;
    setCount(newCount);
    handleInventoriesSelected(title);

    // Update the array with the new count
    updateItemInArray(newCount);
  };

  const decreaseItems = () => {
    if (count === 0) return;

    const newCount = count - 1;
    setCount(newCount);
    handleRemoveInventory(title);

    // Update the array with the new count
    updateItemInArray(newCount);
  };

  const updateItemInArray = (newCount) => {
    // Pass the item with a flag to indicate it should update existing
    appendItemToArray({
      itemName: title,
      numberOfCount: newCount,
      room: activeRoom,
      shouldUpdateExisting: true,
    });
  };

  return (
    <div
      className={`w-full group cursor-pointer h-[290px] rounded-[16px] border-[1px]
        `}
    >
      <div className="border-b-[5px] border-[#054D96] h-[65%] flex justify-center items-center ">
        <img
          src={img}
          className="max-w-[150px] object-cover max-h-[110px] "
          alt=""
        />
      </div>
      <div className="flex h-[40%] flex-col items-center justify-center ">
        <p className="font-sans text-[20px] inventoryItemText leading-[32px] text-[#262626] ">
          {title}
        </p>
        <div className="flex mt-1 items-center">
          <button
            className={` bg-[#EEF2F6] h-[25px] w-[25px] flex items-center justify-center ${
              isCardSelected && "bg-primary opacity-100"
            } duration-500 p-1 rounded-[6px] transition`}
            onClick={decreaseItems}
          >
            <p
              className={`font-sans font-bold  text-[18px] text-black ${
                isCardSelected ? "text-white" : "text-black"
              } `}
            >
              -
            </p>
          </button>
          <p
            className={`mx-3 font-sans text-[16px] font-bold ${
              isCardSelected ? "text-black" : "text-black"
            } `}
          >
            {count}
          </p>
          <button
            className={`bg-[#EEF2F6]  h-[25px] w-[25px] flex items-center justify-center ${
              isCardSelected && "bg-primary opacity-100"
            } duration-500 p-1 rounded-[6px] transition`}
            onClick={increaseItems}
          >
            <p
              className={`font-sans font-bold  text-[20px] text-black ${
                isCardSelected ? "text-white" : "text-black"
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
