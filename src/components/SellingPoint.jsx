import React from "react";
import SellingPointCard from "./SellingPointCard";
import girl from "../Assets/girlStandiing.jpeg";
import manWithTruck from "../Assets/manWithTruck.jpeg";
import customer from "../Assets/customer.jpeg";

const SellingPoint = () => {
  const data = [
    {
      id: 0,
      text: "Seamless and easy booking process",
      img: girl,
    },
    {
      id: 1,
      text: "Trusted network of moving companies",
      img: manWithTruck,
    },
    {
      id: 2,
      text: "Expert guidance and swift support anytime",
      img: customer,
    },
  ];

  return (
    <div className=" max-w-[1500px] w-[90vw] mt-16 mx-auto mb-36 ">
      <div className="bg-[#E5E5E54D] flex sellingPointStyle justify-center w-fit mx-auto items-center rounded-[100px] p-3 ">
        <p className="text-[#707070] font-sans text-[14px]">SELLING POINT</p>
      </div>
      <h2 className="font-unbounded text-[#121212] sellingPointText text-center font-bold my-2 text-[36px]">
        Professional movers at your service
      </h2>
      <p className="font-sans text-center sellingPointDesc text-[18px] text-[#9E9E9E] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
      <div className="mt-16 sellingCardContainer  grid gap-8 grid-cols-3 ">
        {data?.map((card) => {
          return <SellingPointCard key={card?.id} card={card} />;
        })}
      </div>
    </div>
  );
};

export default SellingPoint;
