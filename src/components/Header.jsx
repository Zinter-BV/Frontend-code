import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import SecondaryBtn from "./SecondaryBtn";
import InvoiceIcon from "../Assets/SVG/Invoice";
import TrackingIcon from "../Assets/SVG/TrackingIcon";
import TruckIcon from "../Assets/SVG/TruckIcon";

const Header = () => {
  const [menuOptionsOpen, setMenuOptionsOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the menu options container

  // Function to open the menu options
  const openMenuOptions = () => {
    setMenuOptionsOpen(true);
  };

  // Function to close the menu options
  const closeMenuOptions = () => {
    setMenuOptionsOpen(false);
  };

  // Handle clicks outside the menu options
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenuOptions(); // Close the menu if the click is outside
      }
    };

    // Add event listener when the menu is open
    if (menuOptionsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOptionsOpen]);

  let activeClassName = " text-[#121212] font-sans text-[18px] font-bold";

  return (
    <header className="h-[80px] border-b-[1px] border-[#d1d1d1] w-full z-30 bg-white fixed top-0 left-0 right-0  mx-auto max-w-[1500px] flex justify-center items-center">
      <nav className="flex w-[90vw] relative items-center justify-between">
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
          <SecondaryBtn
            handlePress={openMenuOptions}
            className={"text-[14px] "}
          >
            GET STARTED
          </SecondaryBtn>
        </div>
        {menuOptionsOpen && (
          <div
            ref={menuRef} // Attach the ref to the menu options container
            className="bg-white w-[304px] top-[45px] absolute right-0 h-fit p-[4px] rounded-[8px] border-[1px] border-[#E4F2FB] "
          >
            <Link>
              <div className="p-[8px] mb-[4px] flex items-center w-full ">
                <InvoiceIcon />
                <p className="ml-[8px] font-sans text-[#373737] ">Get Quotes</p>
              </div>
            </Link>
            <Link>
              <div className="p-[8px] mb-[4px] flex items-center w-full ">
                <TrackingIcon />
                <p className="ml-[8px] font-sans text-[#373737] ">Track Move</p>
              </div>
            </Link>
            <Link>
              <div className="p-[8px] border-t-[1px] border-[#E4F2FB] flex items-center w-full ">
                <TruckIcon />
                <p className="ml-[8px] font-sans text-[#373737] ">
                  Become a partner
                </p>
              </div>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
