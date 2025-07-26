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

  // const selectCard = () => {
  //   const newSelectedState = !isCardSelected;
  //   setIsCardSelected(newSelectedState);

  //   if (newSelectedState) {
  //     // When selecting, add item with current count
  //     appendItemToArray({
  //       itemName: title,
  //       numberOfCount: count,
  //       room: activeRoom,
  //     });
  //   } else {
  //     // When deselecting, you might want to remove the item
  //     // or set count to 0 - depends on your requirements
  //     setCount(0);
  //     appendItemToArray({
  //       itemName: title,
  //       numberOfCount: 0,
  //       room: activeRoom,
  //     });
  //   }
  // };

  return (
    <div
      className={`w-full group cursor-pointer h-[290px] rounded-[16px] border-[1px]
        `}
    >
      <div className="border-b-[1px] border-[#e5e5e5] h-[65%] flex justify-center items-center ">
        <img
          src={img}
          className="w-full object-cover h-full rounded-t-[16px]"
          alt=""
        />
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
