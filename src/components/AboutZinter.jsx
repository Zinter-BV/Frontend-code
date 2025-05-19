import React from "react";
import ZoomingCardAboutUs from "./ZoomingCardAboutUs";
import smallImg from "../Assets/small-pictures.svg";
import arrowDown from "../Assets/arrow-down-pictures.svg";
import "./aboutZinter.css";

const AboutZinter = () => {
  return (
    <div className="mx-auto w-full">
      <div className="about_zinter_container mx-auto w-[90vw] max-w-[1500px]">
        <div className="about_zinter_head">
          <h1 className="text-[96px] leading-[69.44px] font-bold font-unbounded w-[90%]">
            About Zinter
          </h1>
          <span className="about_zinter_text">
            Our mission is to revolutionize the logistics industry
          </span>
        </div>

        <div className="zoom_card w-full">
          <ZoomingCardAboutUs />
          <div className="inner_card w-full">
            <div className="small_picture_container">
              <span className="small_picture">
                <img src={smallImg} alt="" />
              </span>
              <span className="small_picture_text">
                <p>A strong team of highly skilled and disciplined people</p>
              </span>
            </div>
            <div className="arrow_down">
              <img src={arrowDown} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutZinter;
