import React from "react";
import logo from "../Assets/domain.com.png";
import { SiGmail } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#E5E5E5] w-full h-fit ">
      <div className="w-[90vw] py-10  max-w-[1500px] mx-auto">
        <div className="flex footerContainer justify-between">
          <div>
            <img src={logo} alt="logo" className="" />
            <div className="flex mt-5">
              <SiGmail size={20} className="mr-2" />
              <AiFillInstagram size={20} className="mr-2" />
              <BsTwitterX size={20} className="mr-2" />
              <FaFacebookF size={20} />
            </div>
          </div>
          <div className="flex footerSubContainer">
            <div className="mr-8">
              <p className="font-sans text-[24px] footerMainText text-[#136AB5] text-right font-bold ">
                Quicklinks
              </p>
              <div className="flex flex-col">
                <Link
                  to="/about"
                  className="font-sora text-right font-regular footerDesc"
                >
                  {" "}
                  About Us
                </Link>
                <Link
                  to="/faq"
                  className="font-sora text-right font-regular footerDesc mt-2"
                >
                  {" "}
                  Frequently Asked Questions
                </Link>
                <Link
                  to="/privacy"
                  className="font-sora text-right font-regular footerDesc mt-2"
                >
                  {" "}
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="font-sora text-right font-regular footerDesc mt-2"
                >
                  {" "}
                  Terms & Conditions
                </Link>
              </div>
            </div>
            <div className="footerSubBox">
              <p className="font-sans text-[24px] footerMainText text-[#136AB5] text-right font-bold ">
                Contact
              </p>
              <div className="flex flex-col">
                <a
                  href="mailto:support@zinter.nl"
                  className="font-sora mb-2 text-right font-regular"
                >
                  {" "}
                  support@zinter.nl
                </a>
                <a
                  href="tel:+4930000000000"
                  className="font-sora text-right font-regular footerDesc"
                >
                  {" "}
                  +493 00 00000000
                </a>
                <p className="font-sora text-right font-regular footerDesc mt-2">
                  {" "}
                  Mon. - Fri.: 08:00 - 19:00
                </p>
                <p className="font-sora text-right font-regular footerDesc mt-2">
                  {" "}
                  Sat.: 09:00 - 17:00
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 w-full py-4 footerEndContainer flex justify-between border-black mt-6 ">
          <p className="font-sans text-[18px] text-[#121212] font-normal ">
            © 2025 All rights Reserved
          </p>
          <p className="font-sans text-[18px] text-[#121212] font-normal ">
            Zinter.nl
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
