import React from "react";
import coffeeGirl from "../Assets/coffeeGirl.jpeg";
import StarIcon from "../Assets/SVG/StarIcon";
import HeroIcon from "../Assets/SVG/HeroIcon";
import DiamondIcon from "../Assets/SVG/DiamondIcon";
import PrimaryBtn from "./PrimaryBtn";

const Process = () => {
  return (
    <div className="bg-[#FFF5DA] w-full h-fit">
      <div className="w-[90vw] py-12 max-w-[1500px] mx-auto">
        <h2 className="font-unbounded processText text-[#121212] mb-10 font-bold w-[95%] text-[56px]">
          Your Move, in 60 Seconds.
        </h2>
        <div className="relative mt-16 flex processSection justify-between w-full">
          <div className="w-[50%] processLeft ">
            {/* Step 1 */}
            <div className="flex mb-8 items-start">
              <div className="h-[40px] min-w-[40px] rounded-full bg-[#fff] flex justify-center items-center border-2 border-[#BCDFF6]">
                <p className="font-unbounded text-[24px] text-[#136AB5]">1</p>
              </div>
              <div className="ml-4">
                <h3 className="font-unbounded processLeftText text-[#121212] mb-3 font-bold text-[24px]">
                  Submit your move details
                </h3>
                <p className="font-sans processLeftDesc text-[18px] w-[70%] text-[#373737]">
                  Fill in our quick form with your move's start and end
                  locations, and size of your move
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex mb-8 items-start">
              <div className="h-[40px] min-w-[40px] rounded-full bg-[#fff] flex justify-center items-center border-2 border-[#BCDFF6]">
                <p className="font-unbounded text-[24px] text-[#136AB5]">2</p>
              </div>
              <div className="ml-4">
                <h3 className="font-unbounded text-[#121212] mb-3 font-bold text-[24px] processLeftText">
                  Snap your space
                </h3>
                <p className="font-sans text-[18px] w-[70%] text-[#373737] processLeftDesc">
                  Take a few quick photos of the rooms or items you’re moving.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex mb-8 items-start">
              <div className="h-[40px] min-w-[40px] rounded-full bg-[#fff] flex justify-center items-center border-2 border-[#BCDFF6]">
                <p className="font-unbounded text-[24px] text-[#136AB5]">3</p>
              </div>
              <div className="ml-4">
                <h3 className="font-unbounded text-[#121212] mb-3 font-bold text-[24px] processLeftText">
                  Get real-time quotes
                </h3>
                <p className="font-sans text-[18px] w-[70%] text-[#373737] processLeftDesc">
                  Our AI scans your inventory and returns accurate estimates
                  from trusted pros.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex mb-8 items-start">
              <div className="h-[40px] min-w-[40px] rounded-full bg-[#fff] flex justify-center items-center border-2 border-[#BCDFF6]">
                <p className="font-unbounded text-[24px] text-[#136AB5]">4</p>
              </div>
              <div className="ml-4">
                <h3 className="font-unbounded text-[#121212] mb-3 font-bold text-[24px] processLeftText">
                  Pick your match
                </h3>
                <p className="font-sans text-[18px] w-[70%] text-[#373737] processLeftDesc">
                  Compare offers. Read reviews. Book the mover that fits your
                  needs and budget.
                </p>
              </div>
            </div>

            <PrimaryBtn className={"text-[20px]"}>
              Let’s Get You Moving{" "}
            </PrimaryBtn>
          </div>

          <div className="w-[50%] processRight relative">
            <img
              src={coffeeGirl}
              className="w-full processWoman rounded-[18px] object-cover h-[600px]"
              alt="Woman enjoying coffee after successful move"
            />
            <div className="flex drop-shadow-md items-center womanHighlight absolute bottom-20 left-[-80px] bg-white rounded-[10px] w-fit p-3">
              <div className="bg-[#FFF2EB] h-[45px] w-[41px] rounded-[10px] flex items-center mr-4 justify-center">
                <DiamondIcon />
              </div>
              <div>
                <h4 className="text-[14px] font-sans">GlideWay Relocations</h4>
                <div className="flex items-center">
                  <div className="border-[0.5px] border-[#D1D1D1] p-1 w-fit items-center rounded-[18px] flex">
                    <p className="mr-1 text-[8.58px] font-sora">4.2</p>
                    <StarIcon />
                  </div>
                  <p className="text-[#707070] font-sora text-[11px] ml-2">
                    Rotherham
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
