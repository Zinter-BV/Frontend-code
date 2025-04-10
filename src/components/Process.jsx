import React from "react";
import coffeeGirl from "../Assets/coffeeGirl.jpeg";
import StarIcon from "../Assets/SVG/StarIcon";
import HeroIcon from "../Assets/SVG/HeroIcon";
import DiamondIcon from "../Assets/SVG/DiamondIcon";

const Process = () => {
  return (
    <div className="bg-[#121212] w-full h-fit">
      <div className="w-[90vw] py-12 max-w-[1500px] mx-auto">
        <h2 className="font-unbounded processText text-[#fff] mb-10 font-bold w-[95%] text-[56px]">
          It Only takes 1 Minute to enter move details and get competitive
          quotes from movers
        </h2>
        <div className="relative mt-16 flex processSection justify-between w-full">
          <div className="w-[50%] processLeft ">
            {/* Step 1 */}
            <div className="flex mb-8 items-start">
              <div className="h-[40px] min-w-[40px] rounded-full bg-[#121212] flex justify-center items-center border-2 border-[#BCDFF6]">
                <p className="font-unbounded text-[24px] text-[#136AB5]">1</p>
              </div>
              <div className="ml-4">
                <h3 className="font-unbounded processLeftText text-[#fff] mb-3 font-bold text-[24px]">
                  Submit your move details
                </h3>
                <p className="font-sans processLeftDesc text-[18px] w-[70%] text-[#bbb]">
                  Fill in our quick form with your move's start and end
                  locations, and size of your move
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex mb-8 items-start">
              <div className="h-[40px] min-w-[40px] rounded-full bg-[#121212] flex justify-center items-center border-2 border-[#BCDFF6]">
                <p className="font-unbounded text-[24px] text-[#136AB5]">2</p>
              </div>
              <div className="ml-4">
                <h3 className="font-unbounded text-[#fff] mb-3 font-bold text-[24px] processLeftText">
                  Receive personalized quotes
                </h3>
                <p className="font-sans text-[18px] w-[70%] text-[#bbb] processLeftDesc">
                  Our network of professional movers will review your details
                  and send you competitive quotes
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex mb-8 items-start">
              <div className="h-[40px] min-w-[40px] rounded-full bg-[#121212] flex justify-center items-center border-2 border-[#BCDFF6]">
                <p className="font-unbounded text-[24px] text-[#136AB5]">3</p>
              </div>
              <div className="ml-4">
                <h3 className="font-unbounded text-[#fff] mb-3 font-bold text-[24px] processLeftText">
                  Choose your move
                </h3>
                <p className="font-sans text-[18px] w-[70%] text-[#bbb] processLeftDesc">
                  Evaluate the quotes and select the mover that fits your needs
                  and moving budget
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex mb-8 items-start">
              <div className="h-[40px] min-w-[40px] rounded-full bg-[#121212] flex justify-center items-center border-2 border-[#BCDFF6]">
                <p className="font-unbounded text-[24px] text-[#136AB5]">4</p>
              </div>
              <div className="ml-4">
                <h3 className="font-unbounded text-[#fff] mb-3 font-bold text-[24px] processLeftText">
                  Enjoy a hassle-free move
                </h3>
                <p className="font-sans text-[18px] w-[70%] text-[#bbb] processLeftDesc">
                  Your chosen mover will handle packaging & transportation
                  ensuring a seamless experience
                </p>
              </div>
            </div>
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
