import React from "react";
import LocationIcon from "../Assets/SVG/LocationIcon";
import DownIcon from "../Assets/SVG/DownIcon";
import MoveSize from "../Assets/SVG/MoveSize";
import PrimaryBtn from "./PrimaryBtn";

const MoveDetails = () => {
  return (
    <div className="w-[90vw] mt-16 bg-gradient-to-br rounded-[20px] flex justify-center items-center p-8 from-[#1A7BC6] to-[#054D96] max-w-[1500px] mx-auto h-fit">
      <div className="w-[90%]">
        <div className="bg-[#136AB5] flex justify-center w-fit mx-auto items-center rounded-[100px] p-3 ">
          <p className="text-white font-sans text-[14px]">GET A QUOTE</p>
        </div>
        <h2 className="font-unbounded text-white text-center font-bold my-2 text-[36px] ">
          Submit your move details
        </h2>
        <p className="font-sans text-center text-[18px] text-[#BCDFF6] ">
          Professional movers for you, It only takes a minute
        </p>
        <div className="w-full bg-white my-4 h-[80px] rounded-[10px] flex ">
          <div className="w-[25%] flex justify-between border-r-2 border-[#E3E2E0] p-3 items-center  ">
            <div className="flex items-center">
              <LocationIcon color="#12B981" />
              <p className="ml-3 font-sans">Moving From</p>
            </div>
            <DownIcon />
          </div>
          <div className="w-[25%] flex justify-between border-r-2 border-[#E3E2E0] p-3 items-center  ">
            <div className="flex items-center">
              <LocationIcon color="#DE2527" />
              <p className="ml-3 font-sans">Moving To</p>
            </div>
            <DownIcon />
          </div>
          <div className="w-[25%] flex justify-between border-r-2 border-[#E3E2E0] p-3 items-center  ">
            <div className="flex items-center">
              <MoveSize />
              <p className="ml-3 font-sans">Move Size</p>
            </div>
            <DownIcon />
          </div>
          <div className="w-[25%] flex justify-center p-3 items-center  ">
            <PrimaryBtn>GET A QUOTE</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoveDetails;
