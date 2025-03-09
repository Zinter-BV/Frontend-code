import React from "react";
import coffeeGirl from "../Assets/coffeeGirl.jpeg";
import StarIcon from "../Assets/SVG/StarIcon";
import HeroIcon from "../Assets/SVG/HeroIcon";
import DiamondIcon from "../Assets/SVG/DiamondIcon";

const Process = () => {
  return (
    <div className="bg-[#FBF1EE] w-full pb-28 h-fit ">
      <div className="w-[90vw] py-12 max-w-[1500px] mx-auto">
        <h2 className="font-unbounded text-[#121212] mb-10 font-bold w-[95%]  text-[56px] ">
          It Only takes 1 Minute to enter move details and get competitive
          quotes from movers
        </h2>
        <div className="relative mt-16 flex justify-between w-full">
          <div className="w-[50%]">
            <div className="flex mb-8">
              <div className="font-unbounded text-[24px] text-[#136AB5] h-[40px] w-[40px] rounded-full flex justify-center items-center border-2 border-[#BCDFF6]">
                1
              </div>
              <div className="ml-3">
                <h3 className="font-unbounded text-[#121212] mb-3 font-bold text-[24px]">
                  Submit your move details
                </h3>
                <p className="font-sans text-[18px] w-[70%] text-[#555] ">
                  Fill in our quick form with your move’s start and end
                  locations, and size of your move
                </p>
              </div>
            </div>
            <div className="flex mb-8">
              <div className="font-unbounded text-[24px] text-[#136AB5] h-[40px] w-[40px] rounded-full flex justify-center items-center border-2 border-[#BCDFF6]">
                2
              </div>
              <div className="ml-3">
                <h3 className="font-unbounded text-[#121212] mb-3 font-bold text-[24px]">
                  Receive personalized quotes
                </h3>
                <p className="font-sans text-[18px] w-[70%] text-[#555] ">
                  Our network of professional movers will review your details
                  and send you competitive quotes
                </p>
              </div>
            </div>
            <div className="flex mb-8">
              <div className="font-unbounded text-[24px] text-[#136AB5] h-[40px] w-[40px] rounded-full flex justify-center items-center border-2 border-[#BCDFF6]">
                3
              </div>
              <div className="ml-3 bg-red">
                <h3 className="font-unbounded text-[#121212] mb-3 font-bold text-[24px]">
                  Choose your move
                </h3>
                <p className="font-sans text-[18px] w-[70%] text-[#555] ">
                  Evaluate the quotes and select the mover that fits your needs
                  and moving budget
                </p>
              </div>
            </div>
            <div className="flex mb-8">
              <div className="font-unbounded text-[24px] text-[#136AB5] h-[40px] w-[40px] rounded-full flex justify-center items-center border-2 border-[#BCDFF6]">
                4
              </div>
              <div className="ml-3">
                <h3 className="font-unbounded text-[#121212] mb-3 font-bold text-[24px]">
                  Enjoy a hassle-free move
                </h3>
                <p className="font-sans text-[18px] w-[70%] text-[#555] ">
                  Your chosen mover will handle packaging & transportation
                  ensuring a seamless experience
                </p>
              </div>
            </div>
          </div>
          <div className="w-[50%] relative">
            <img
              src={coffeeGirl}
              className="w-full absolute right-0 rounded-[18px] object-cover h-[600px] "
              alt=""
            />
            <div className="flex drop-shadow-md items-center absolute bottom-20 left-[-80px] bg-white rounded-[18px] w-fit p-3">
              <div className="bg-[#FFF2EB] h-[45px] w-[41px] rounded-[10px] flex items-center mr-4 justify-center ">
                <DiamondIcon />
              </div>
              <div>
                <h4 className="text-[14px] font-sans ">GlideWay Relocations</h4>
                <div className="flex items-center">
                  <div className="border-[0.5px] border-[#D1D1D1] p-1 w-fit items-center rounded-[18px] flex ">
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
