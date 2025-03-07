import React from "react";
import moniePoint from "../Assets/Moniepoint Logo 1.png";
import spikk from "../Assets/Spikk Logo.png";
import jumia from "../Assets/j-group.67a6140 2.png";
import konga from "../Assets/Konga Logo 1.png";
import nestle from "../Assets/Nestle Logo 1.png";
import netflix from "../Assets/images-removebg-preview 1.png";

const TrustedBy = () => {
  return (
    <div className="my-12 max-w-[1500px] mx-auto w-[90vw]  ">
      <p className="text-[#9E9E9E] font-sans text-[18px] text-center">
        Trusted Partners
      </p>
      <div className="flex mt-3 justify-between items-center mx-auto w-[85%]">
        <img src={moniePoint} alt="trustedBy" />
        <img src={spikk} alt="trustedBy" />
        <img src={jumia} alt="trustedBy" />
        <img src={konga} alt="trustedBy" />
        <img src={nestle} alt="trustedBy" />
        <img src={netflix} alt="trustedBy" />
      </div>
    </div>
  );
};

export default TrustedBy;
