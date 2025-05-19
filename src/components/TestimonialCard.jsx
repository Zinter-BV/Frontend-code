import React from "react";
import user from "../Assets/user.png";

const TestimonialCard = () => {
  return (
    <div className="w-[500px] testimonialCardContainer h-fit rounded-[20px] p-7 bg-white border-2 flex justify-between flex-col border-[#D1D1D1] ">
      <p className="font-sans testimonialText text-[18px] text-[#232323] ">
        Lorem ipsum dolor sit amet, consecte elit, sed do eiusmod tempor
        incididunt abore et dolore magna aliqua. Ut enim ad min.
      </p>
      <div className="flex cardImageContainer mt-10 ">
        <img
          src={user}
          alt="user"
          className="w-[48px] mr-4 h-[48px] rounded-full border-2 border-[#C4C4C4] "
        />
        <div>
          <p className="font-manrope text-[18px] ">Chidozie Usman</p>
          <p className="font-manrope text-[14px] ">Zaanstad</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
