import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import SecondaryBtn from "./SecondaryBtn";
import InvoiceIcon from "../Assets/SVG/Invoice";
import TrackingIcon from "../Assets/SVG/TrackingIcon";
import TruckIcon from "../Assets/SVG/TruckIcon";
import Logo from "./Logo";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [menuOptionsOpen, setMenuOptionsOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the menu options container

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };

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
    <header className="h-[80px] header mx-auto w-[100vw] border-b-[1px] border-[#d1d1d1] z-30 bg-white fixed top-0 left-0 flex justify-center items-center">
      <nav className="flex w-[90vw] desktopNav relative items-center mx-auto max-w-[1500px] justify-between">
        <Link to="/" className="">
          <Logo />
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
            <Link to="/quote">
              <div className="p-[8px] hover:bg-[#f7f7f7] mb-[4px] flex items-center w-full ">
                <InvoiceIcon />
                <p className="ml-[8px] font-sans text-[#373737] ">Get Quotes</p>
              </div>
            </Link>
            <Link>
              <div className="p-[8px] hover:bg-[#f7f7f7] mb-[4px] flex items-center w-full ">
                <TrackingIcon />
                <p className="ml-[8px] font-sans text-[#373737] ">Track Move</p>
              </div>
            </Link>
            <Link>
              <div className="p-[8px] hover:bg-[#f7f7f7] border-t-[1px] border-[#E4F2FB] flex items-center w-full ">
                <TruckIcon />
                <p className="ml-[8px] font-sans text-[#373737] ">
                  Become a partner
                </p>
              </div>
            </Link>
          </div>
        )}
      </nav>
      <nav className=" w-[90vw] mobileNav hidden relative items-center mx-auto max-w-[1500px] justify-between">
        <Link to="/" className="">
          <Logo />
        </Link>
        <div
          onClick={toggleMobileMenu}
          className="h-[26px] w-[26px] border-[1px] border-[#d9d9d9] rounded-full flex items-center justify-center "
        >
          {!isMobileOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M18.6184 8H4.77224C4.45685 8 4.19531 7.54667 4.19531 7C4.19531 6.45333 4.45685 6 4.77224 6H18.6184C18.9338 6 19.1953 6.45333 19.1953 7C19.1953 7.54667 18.9338 8 18.6184 8Z"
                fill="#1F0047"
              />
              <path
                d="M18.6184 13H4.77224C4.45685 13 4.19531 12.5467 4.19531 12C4.19531 11.4533 4.45685 11 4.77224 11H18.6184C18.9338 11 19.1953 11.4533 19.1953 12C19.1953 12.5467 18.9338 13 18.6184 13Z"
                fill="#1F0047"
              />
              <path
                d="M18.6184 18H4.77224C4.45685 18 4.19531 17.5467 4.19531 17C4.19531 16.4533 4.45685 16 4.77224 16H18.6184C18.9338 16 19.1953 16.4533 19.1953 17C19.1953 17.5467 18.9338 18 18.6184 18Z"
                fill="#1F0047"
              />
            </svg>
          ) : (
            <IoCloseSharp size={20} />
          )}
        </div>
        {isMobileOpen && (
          <div className="pt-3 w-full bg-white z-100 fixed flex-col  items-center justify-center top-[80px] left-0 h-[calc(100vh-80px)]  ">
            <ul className="flex justify-between flex-col items-center gap-[16px] ">
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
            <div className="self-center w-full flex mt-4 items-center justify-center">
              <SecondaryBtn
                handlePress={openMenuOptions}
                className={"text-[14px] "}
              >
                GET STARTED
              </SecondaryBtn>
            </div>
            {menuOptionsOpen && (
              <div className="top-[10px] w-full justify-center flex left-0 absolute right-0 ">
                <div
                  ref={menuRef} // Attach the ref to the menu options container
                  className="bg-white w-[304px] h-fit p-[4px] rounded-[8px] border-[1px] border-[#E4F2FB] "
                >
                  <Link to="/quote">
                    <div className="p-[8px] hover:bg-[#f7f7f7] mb-[4px] flex items-center w-full ">
                      <InvoiceIcon />
                      <p className="ml-[8px] font-sans text-[#373737] ">
                        Get Quotes
                      </p>
                    </div>
                  </Link>
                  <Link>
                    <div className="p-[8px] hover:bg-[#f7f7f7] mb-[4px] flex items-center w-full ">
                      <TrackingIcon />
                      <p className="ml-[8px] font-sans text-[#373737] ">
                        Track Move
                      </p>
                    </div>
                  </Link>
                  <Link>
                    <div className="p-[8px] hover:bg-[#f7f7f7] border-t-[1px] border-[#E4F2FB] flex items-center w-full ">
                      <TruckIcon />
                      <p className="ml-[8px] font-sans text-[#373737] ">
                        Become a partner
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
