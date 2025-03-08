import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";

const Header = () => {
  let activeClassName = " text-[#121212] font-sans text-[18px] font-bold";

  return (
    <header className="h-[80px] border-b-[1px] border-[#d1d1d1] w-full z-30 bg-white fixed top-0 left-0 right-0  mx-auto max-w-[1500px] flex justify-center items-center">
      <nav className="flex w-[90vw]  items-center justify-between">
        <Link to="/" className="">
          <img src={logo} className="object-cover" alt="logo" />
        </Link>
        <ul className="flex justify-between items-center gap-[16px] ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "font-sans text-[14px] leading-[19.6px] text-[#9E9E9E] "
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "font-sans text-[14px] leading-[19.6px] text-[#9E9E9E] "
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "font-sans text-[14px] leading-[19.6px] text-[#9E9E9E] "
              }
            >
              FAQs
            </NavLink>
          </li>
        </ul>
        <div>
          <SecondaryBtn className={"text-[14px] "}>GET STARTED</SecondaryBtn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
