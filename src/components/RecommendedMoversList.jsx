import React from "react";
import MoversCard from "./MoversCard";

const RecommendedMoversList = ({ makeActive }) => {
  return (
    <div className="ml-4 h-fit w-full recommendContainer">
      <div className="overflow-y-scroll h-[1200px] pb-[70px] custom-scroll ">
        <div className="flex items-center w-full justify-between">
          <div className="flex mb-4 items-center">
            <h3 className="mr-2 font-sans text-[20px] font-bold text-[#121212] ">
              Showing
            </h3>
            <p className="font-sans text-[20px] font-semibold italic text-[#9e9e9e]">
              22 Recommended Movers
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 mb-[30px] moversCardContainer gap-[13px]">
          <MoversCard makeActive={makeActive} />
          <MoversCard makeActive={makeActive} />
          <MoversCard makeActive={makeActive} />
          <MoversCard makeActive={makeActive} />
          <MoversCard makeActive={makeActive} />
          <MoversCard makeActive={makeActive} />
          <MoversCard makeActive={makeActive} />
          <MoversCard makeActive={makeActive} />
        </div>
      </div>
    </div>
  );
};

export default RecommendedMoversList;
