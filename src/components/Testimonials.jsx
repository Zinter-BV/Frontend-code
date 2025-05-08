import React, { useRef } from "react";
import BackwardArrow from "../Assets/SVG/BackwardArrow";
import ForwardArrow from "../Assets/SVG/ForwardArrow";
import TestimonialCard from "./TestimonialCard";
import "./testimonials.css";

const Testimonials = () => {
  const scrollContainerRef = useRef(null);

  // Function to scroll backward
  const scrollBackward = () => {
    if (scrollContainerRef.current) {
      // Calculate 90% of the container width for scroll distance
      const scrollDistance = scrollContainerRef.current.offsetWidth * 0.9;
      scrollContainerRef.current.scrollBy({
        left: -scrollDistance,
        behavior: "smooth",
      });
    }
  };

  // Function to scroll forward
  const scrollForward = () => {
    if (scrollContainerRef.current) {
      // Calculate 90% of the container width for scroll distance
      const scrollDistance = scrollContainerRef.current.offsetWidth * 0.9;
      scrollContainerRef.current.scrollBy({
        left: scrollDistance,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#E8F5F5] w-full h-fit">
      <div className="w-[90vw] py-20 testimonialContainer max-w-[1500px] mx-auto">
        <div className="bg-white testimonialsSmall flex justify-center w-fit border-[#FFDA5B] border-2 items-center rounded-[100px] p-3">
          <p className="text-[#4] font-sans text-[14px]">TESTIMONIALS</p>
        </div>
        <div className="flex testimonialHeader justify-between my-10">
          <h2 className="font-unbounded testimonialHeaderText text-[#121212] font-bold w-[80%] text-[48px]">
            Don't just take our word for it, Here is what our users are saying
          </h2>
          <div className="flex arrowsContainer self-end">
            <div
              className="w-[41.2px] cursor-pointer leftPointerbutton mr-5 h-[41.2px] rounded-full bg-white border-2 border-[#D9D9D9] flex justify-center items-center hover:bg-gray-100"
              onClick={scrollBackward}
            >
              <BackwardArrow />
            </div>
            <div
              className="w-[41.2px] cursor-pointer h-[41.2px] rounded-full bg-white border-2 border-[#D9D9D9] flex justify-center items-center hover:bg-gray-100"
              onClick={scrollForward}
            >
              <ForwardArrow />
            </div>
          </div>
        </div>
        <div
          style={{ scrollbarWidth: "none" }}
          className="w-[100%] overflow-x-auto pb-4 testimonial-row"
          ref={scrollContainerRef}
        >
          <style>
            {`
              .testimonial-row::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          <div
            style={{ msOverflowStyle: "none" }}
            className="flex gap-4 min-w-min"
          >
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
