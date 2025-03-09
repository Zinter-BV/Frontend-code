import React from "react";

const PrimaryBtn = ({ children, className }) => {
  return (
    <button
      className={`bg-primary ${className} font-sans hover:bg-white hover:text-primary hover:border-[1px] border-primary text-white rounded-[43px] px-[20px] py-[10px]`}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
