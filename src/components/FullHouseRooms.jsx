import React from "react";
import RoomItemContainer from "./RoomItemContainer";

const FullHouseRooms = ({ openIsInventoryList, data }) => {
  const roomSize = data?.houseSize || "";
  const roomSizeLower = roomSize.toLowerCase();

  // Check if it's a small space
  const isSmallSpace = ["few items", "studio", "small"].some((term) =>
    roomSizeLower.includes(term)
  );

  // If it's a small space, show ONLY Toilet and bath
  if (isSmallSpace) {
    return (
      <RoomItemContainer
        onClick={() => openIsInventoryList("Others")}
        activeIcon={"Others"}
      />
    );
  }

  // Extract bedroom count for regular houses
  const getBedroomCount = () => {
    // Look for bedroom patterns
    const bedroomMatch = roomSizeLower.match(/(\d+)\s*(?:bedroom|bed|br)/);
    if (bedroomMatch) return parseInt(bedroomMatch[1], 10);

    // Look for any number
    const anyNumberMatch = roomSizeLower.match(/\d+/);
    if (anyNumberMatch) return parseInt(anyNumberMatch[0], 10);

    return 1; // Default to 1 bedroom
  };

  const bedroomCount = getBedroomCount();
  const bedrooms = Array.from({ length: bedroomCount }, (_, i) => i + 1);

  // For regular houses, show all rooms
  return (
    <>
      {/* Bedrooms */}
      {bedrooms.map((num) => (
        <RoomItemContainer
          key={`bedroom-${num}`}
          onClick={() =>
            openIsInventoryList(bedroomCount > 1 ? `Bedroom` : "Bedroom")
          }
          activeIcon={"Bedroom"}
        />
      ))}

      {/* Other rooms */}
      <RoomItemContainer
        onClick={() => {
          console.log("Clicked");
          openIsInventoryList("Living Room");
        }}
        activeIcon="Living Room"
      />
      <RoomItemContainer
        onClick={() => openIsInventoryList("Dinning Room")}
        activeIcon="Dinning Room"
      />
      <RoomItemContainer
        onClick={() => openIsInventoryList("Kitchen")}
        activeIcon="Kitchen"
      />
    </>
  );
};

export default FullHouseRooms;
