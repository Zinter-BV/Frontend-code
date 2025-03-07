import React from "react";

const SecondaryBtn = ({ children, className }) => {
  return (
    <button
      className={`bg-white border-2 rounded-[43px] hover:bg-primary hover:text-white px-[20px] py-[10px] border-primary text-primary ${className} `}
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;
