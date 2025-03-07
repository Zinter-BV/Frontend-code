import React from "react";
import SecondaryBtn from "./SecondaryBtn";
import PrimaryBtn from "./PrimaryBtn";
import img from "../Assets/HeroImage1.jpeg";
import HeroIcon from "../Assets/SVG/HeroIcon";
import StarIcon from "../Assets/SVG/StarIcon";
import star from "../Assets/Star 2.png";

const HeroSection = () => {
  return (
    <div className="  w-full  bg-gradient-to-b mt-[80px] from-[#BCDFF6] to-white">
      <div className="w-[90vw] pt-14 max-w-[1500px] items-center flex justify-between mx-auto">
        <div className="w-[50%]">
          <h1 className="text-[45px] font-bold font-unbounded w-[90%]">
            Experience the future of stress free moving today
          </h1>
          <p className="my-4">
            Reliable and Professional Movers Dedicated to a Seamless Moving
            Experience
          </p>
          <PrimaryBtn>GET A QUOTE</PrimaryBtn>
          <SecondaryBtn className={"ml-5"}>TRACK MOVE</SecondaryBtn>
        </div>
        <div className="w-[400px] relative h-[476px]">
          <div className="flex drop-shadow-md items-center absolute top-10 left-[-120px] bg-white rounded-[18px] w-fit p-3">
            <div className="bg-[#FFF2EB] h-[45px] w-[41px] rounded-[10px] flex items-center mr-4 justify-center ">
              <div className="bg-[#FD6C00] h-[25px] w-[25px] rounded-full flex items-center justify-center ">
                <HeroIcon />
              </div>
            </div>
            <div>
              <h4 className="text-[14px] font-sans ">Urban Haulers</h4>
              <div className="flex items-center">
                <div className="border-2 border-[#D1D1D1] p-1 w-fit items-center rounded-[18px] flex ">
                  <p className="mr-1 text-[8.58px] font-sora ">4.3</p>
                  <StarIcon />
                </div>
                <p className="text-[#707070] text-[11px] font-sora ml-2">
                  Utrecht
                </p>
              </div>
            </div>
          </div>
          <img
            src={img}
            className="h-full w-full object-cover rounded-[20px]"
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
