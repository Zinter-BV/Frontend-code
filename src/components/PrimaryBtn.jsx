import React from "react";

const PrimaryBtn = ({ children }) => {
  return (
    <button className="bg-primary font-sans hover:bg-white hover:text-primary hover:border-2 border-primary text-white rounded-[43px] text-[20px] px-[20px] py-[10px]">
      {children}
    </button>
  );
};

export default PrimaryBtn;
