import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";

const Header = () => {
  return (
    <header className="h-[80px] w-full z-30 bg-white fixed top-0 left-0 right-0  mx-auto max-w-[1500px] flex justify-center items-center">
      <nav className="flex w-[90vw]  items-center justify-between">
        <Link to="/" className="">
          <img src={logo} className="object-cover" alt="logo" />
        </Link>
        <div>
          <SecondaryBtn className={"mr-6"}>GET STARTED</SecondaryBtn>
          <PrimaryBtn>BECOME A PARTNER</PrimaryBtn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
