import React from "react";
import BackwardArrow from "../Assets/SVG/BackwardArrow";
import ForwardArrow from "../Assets/SVG/ForwardArrow";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="bg-[#E8F5F5] w-full h-fit ">
      <div className="w-[90vw] py-20 max-w-[1500px] mx-auto">
        <div className="bg-white flex justify-center w-fit border-[#FFDA5B] border-2 items-center rounded-[100px] p-3 ">
          <p className="text-[#434343] font-sans text-[14px]">TESTIMONIALS</p>
        </div>
        <div className="flex justify-between my-10">
          <h2 className="font-unbounded text-[#121212] font-bold w-[80%]  text-[48px] ">
            Don't just take our word for it, Here is what our users are saying
          </h2>
          <div className="flex self-end ">
            <div className="w-[41.2px] cursor-pointer mr-5 h-[41.2px] rounded-full bg-white border-2 border-[#D9D9D9] flex justify-center items-center  ">
              <BackwardArrow />
            </div>
            <div className="w-[41.2px] cursor-pointer h-[41.2px] rounded-full bg-white border-2 border-[#D9D9D9] flex justify-center items-center  ">
              <ForwardArrow />
            </div>
          </div>
        </div>
        <div className="flex w-[90vw] h-fit gap-4 overflow-x-scroll ">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
