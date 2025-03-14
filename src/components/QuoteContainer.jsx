import React from "react";
import { Link } from "react-router-dom";
import QuoteProgress from "./QuoteProgress";
import Location from "./Location";

const QuoteContainer = () => {
  return (
    <div className="w-[90vw]  max-w-[1500px] mx-auto mt-24">
      <div className="w-full h-[85vh] relative">
        <div className="flex items-center">
          <Link to="/">
            <p className="text-[#9e9e9e] text-[14px] font-sans leading-[19.6px]">
              Home
            </p>{" "}
          </Link>
          <div className="mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="11"
              viewBox="0 0 6 11"
              fill="none"
            >
              <path
                d="M0.219801 0.720115C0.0788617 0.861097 -0.000314284 1.05228 -0.000314301 1.25163C-0.000314319 1.45098 0.0788616 1.64217 0.219801 1.78315L3.94119 5.50454L0.219801 9.22592C0.0828549 9.36771 0.00707833 9.55762 0.00879111 9.75474C0.0105039 9.95186 0.0895692 10.1404 0.228958 10.2798C0.368347 10.4192 0.556907 10.4983 0.754025 10.5C0.951143 10.5017 1.14105 10.4259 1.28284 10.289L5.53574 6.03606C5.67668 5.89508 5.75586 5.70389 5.75586 5.50454C5.75586 5.30519 5.67668 5.114 5.53574 4.97302L1.28284 0.720115C1.14186 0.579175 0.950669 0.5 0.75132 0.5C0.551971 0.5 0.360784 0.579175 0.219801 0.720115Z"
                fill="#E3E3E3"
              />
            </svg>
          </div>
          <p className="text-[#525252] text-[16px] font-bold font-sans  ">
            Get a quote for a move
          </p>
        </div>
        <div className="mt-4 flex ">
          <QuoteProgress />
          <Location />
        </div>
        <div className="h-[80px] absolute bottom-0 left-o w-full bg-emerald-500 "></div>
      </div>
    </div>
  );
};

export default QuoteContainer;
