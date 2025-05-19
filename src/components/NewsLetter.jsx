import React from "react";
import MessageIcon from "../Assets/SVG/Message";

const NewsLetter = () => {
  return (
    <div className="w-[90vw] my-20 bg-gradient-to-br rounded-[20px] flex justify-center items-center newsLetterContainer p-8 pb-10 from-[#1A7BC6] to-[#054D96] max-w-[1500px] mx-auto h-fit">
      <div className="w-[90%]">
        <div className="bg-[#136AB5] flex justify-center w-fit mx-auto newsLetterStyle items-center rounded-[100px] p-3 ">
          <p className="text-white font-sans text-[14px]">NEWS LETTER</p>
        </div>
        <h2 className="font-unbounded text-white text-center newsLetterText font-bold w-[70%] mx-auto my-2 text-[36px] ">
          Subscribe to get our latest updates, freebies, and tips.
        </h2>
        <div className="w-[50%] newsLetterInputContainer mx-auto h-[50px] bg-white rounded-[70px] flex ">
          <input
            className="w-[90%] h-full p-4 rounded-tl-[70px] rounded-bl-[70px] rounded-[70px] outline-none font-sans"
            placeholder="Enter your email address"
          />
          <button className="bg-[#136AB5] cursor-pointer w-[10%] newsLetterSendBtn flex items-center justify-center rounded-tr-[70px] rounded-br-[70px] ">
            <MessageIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
