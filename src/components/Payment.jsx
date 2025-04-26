import React, { useState } from "react";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  // card number
  const formatCardNumber = (value) => {
    // Remove non-numeric characters
    let numbersOnly = value.replace(/\D/g, "");

    // Limit to 16 digits
    numbersOnly = numbersOnly.slice(0, 16);

    // Add space after every 4 digits
    return numbersOnly.replace(/(\d{4})/g, "$1 ").trim();
  };

  const handleChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  // exp
  const formatExpiryDate = (value) => {
    // Remove non-numeric characters
    let numbersOnly = value.replace(/\D/g, "");

    // Limit to 4 digits (MMYY)
    numbersOnly = numbersOnly.slice(0, 4);

    // Auto-add "/" after MM
    if (numbersOnly.length > 2) {
      numbersOnly = numbersOnly.replace(/(\d{2})(\d{0,2})/, "$1/$2");
    }

    return numbersOnly;
  };

  const handleExpChange = (e) => {
    setExpiry(formatExpiryDate(e.target.value));
  };

  // cvv

  const handleCVVChange = (e) => {
    // Remove non-numeric characters and limit to 4 digits
    const formatted = e.target.value.replace(/\D/g, "").slice(0, 4);
    setCvv(formatted);
  };

  return (
    <div className="ml-4 h-fit movingCompanyDetailBox w-full">
      <div className="overflow-y-scroll pb-[70px] custom-scroll ">
        <p className="font-sans text-[20px] text-[#121212] font-bold ">
          Complete Payment
        </p>
        <div className="my-5 border-[1px] w-full h-[146px] flex justify-center moveDetailsMainiContainer items-center rounded-[20px] border-[#136AB5] ">
          <div className=" w-[95%] moveDetailsOptionsContainer flex items-center justify-between h-[75%]">
            <div className="flex moveCompanyDirectionContainer flex-col relative h-full justify-between">
              <div
                className={`absolute top-10 movingCompanyDetailsIconXCoontainer left-[15px]
             bg-[#E3E8EF] h-[28px] w-[2px] rounded-[2px] `}
              ></div>
              <div className="flex items-center  ">
                <div className="movingCompanyDetailsIconXCoontainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="30"
                      height="30"
                      rx="15"
                      fill="#E4F0FC"
                    />
                    <rect
                      x="1"
                      y="1"
                      width="30"
                      height="30"
                      rx="15"
                      stroke="#248CD9"
                      stroke-width="2"
                    />
                    <circle cx="16" cy="16" r="5" fill="#075DB2" />
                  </svg>
                </div>
                <div className="bg-[#f7f7f7] w-[400px] ml-3 movingCompanyDirection flex items-center rounded-[10px] p-[10px] ">
                  <div className="flex items-center">
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 2C14.3869 2 16.6761 2.94821 18.364 4.63604C20.0518 6.32387 21 8.61305 21 11C21 14.074 19.324 16.59 17.558 18.395C16.6757 19.2871 15.7129 20.0958 14.682 20.811L14.256 21.101L14.056 21.234L13.679 21.474L13.343 21.679L12.927 21.921C12.6446 22.0822 12.3251 22.1669 12 22.1669C11.6749 22.1669 11.3554 22.0822 11.073 21.921L10.657 21.679L10.137 21.359L9.945 21.234L9.535 20.961C8.42283 20.2085 7.3869 19.3491 6.442 18.395C4.676 16.589 3 14.074 3 11C3 8.61305 3.94821 6.32387 5.63604 4.63604C7.32387 2.94821 9.61305 2 12 2ZM12 4C10.1435 4 8.36301 4.7375 7.05025 6.05025C5.7375 7.36301 5 9.14348 5 11C5 13.322 6.272 15.36 7.871 16.996C8.55853 17.692 9.30166 18.3308 10.093 18.906L10.551 19.232C10.699 19.3353 10.8413 19.4313 10.978 19.52L11.368 19.77L11.711 19.979L12 20.148L12.455 19.879L12.822 19.649C13.0173 19.525 13.2263 19.386 13.449 19.232L13.907 18.906C14.6983 18.3308 15.4415 17.692 16.129 16.996C17.728 15.361 19 13.322 19 11C19 9.14348 18.2625 7.36301 16.9497 6.05025C15.637 4.7375 13.8565 4 12 4ZM12 7C13.0609 7 14.0783 7.42143 14.8284 8.17157C15.5786 8.92172 16 9.93913 16 11C16 12.0609 15.5786 13.0783 14.8284 13.8284C14.0783 14.5786 13.0609 15 12 15C10.9391 15 9.92172 14.5786 9.17157 13.8284C8.42143 13.0783 8 12.0609 8 11C8 9.93913 8.42143 8.92172 9.17157 8.17157C9.92172 7.42143 10.9391 7 12 7ZM12 9C11.4696 9 10.9609 9.21071 10.5858 9.58579C10.2107 9.96086 10 10.4696 10 11C10 11.5304 10.2107 12.0391 10.5858 12.4142C10.9609 12.7893 11.4696 13 12 13C12.5304 13 13.0391 12.7893 13.4142 12.4142C13.7893 12.0391 14 11.5304 14 11C14 10.4696 13.7893 9.96086 13.4142 9.58579C13.0391 9.21071 12.5304 9 12 9Z"
                          fill="#12B981"
                        />
                      </svg>
                    </div>
                    <p className="text-[#b8b8b8] ml-2 font-light font-sans text-[16px] leading-[25.6px] ">
                      From
                    </p>
                  </div>
                  <div className="flex">
                    <p className="text-[#b8b8b8] ml-2 font-light font-sans text-[16px]">
                      -
                    </p>
                    <p className="text-[#707070] ml-2 movingContainerFromLocation font-sans text-[16px] leading-[25.6px]">
                      Keizersgracht 123, 1015 CJ Amsterdam
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center  ">
                <div className="movingCompanyDetailsIconXCoontainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="30"
                      height="30"
                      rx="15"
                      fill="#E4F0FC"
                    />
                    <rect
                      x="1"
                      y="1"
                      width="30"
                      height="30"
                      rx="15"
                      stroke="#248CD9"
                      stroke-width="2"
                    />
                    <circle cx="16" cy="16" r="5" fill="#075DB2" />
                  </svg>
                </div>
                <div className="bg-[#f7f7f7] w-[400px] ml-3 movingCompanyDirection flex items-center rounded-[10px] p-[10px] ">
                  <div className="flex items-center">
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 2C14.3869 2 16.6761 2.94821 18.364 4.63604C20.0518 6.32387 21 8.61305 21 11C21 14.074 19.324 16.59 17.558 18.395C16.6757 19.2871 15.7129 20.0958 14.682 20.811L14.256 21.101L14.056 21.234L13.679 21.474L13.343 21.679L12.927 21.921C12.6446 22.0822 12.3251 22.1669 12 22.1669C11.6749 22.1669 11.3554 22.0822 11.073 21.921L10.657 21.679L10.137 21.359L9.945 21.234L9.535 20.961C8.42283 20.2085 7.3869 19.3491 6.442 18.395C4.676 16.589 3 14.074 3 11C3 8.61305 3.94821 6.32387 5.63604 4.63604C7.32387 2.94821 9.61305 2 12 2ZM12 4C10.1435 4 8.36301 4.7375 7.05025 6.05025C5.7375 7.36301 5 9.14348 5 11C5 13.322 6.272 15.36 7.871 16.996C8.55853 17.692 9.30166 18.3308 10.093 18.906L10.551 19.232C10.699 19.3353 10.8413 19.4313 10.978 19.52L11.368 19.77L11.711 19.979L12 20.148L12.455 19.879L12.822 19.649C13.0173 19.525 13.2263 19.386 13.449 19.232L13.907 18.906C14.6983 18.3308 15.4415 17.692 16.129 16.996C17.728 15.361 19 13.322 19 11C19 9.14348 18.2625 7.36301 16.9497 6.05025C15.637 4.7375 13.8565 4 12 4ZM12 7C13.0609 7 14.0783 7.42143 14.8284 8.17157C15.5786 8.92172 16 9.93913 16 11C16 12.0609 15.5786 13.0783 14.8284 13.8284C14.0783 14.5786 13.0609 15 12 15C10.9391 15 9.92172 14.5786 9.17157 13.8284C8.42143 13.0783 8 12.0609 8 11C8 9.93913 8.42143 8.92172 9.17157 8.17157C9.92172 7.42143 10.9391 7 12 7ZM12 9C11.4696 9 10.9609 9.21071 10.5858 9.58579C10.2107 9.96086 10 10.4696 10 11C10 11.5304 10.2107 12.0391 10.5858 12.4142C10.9609 12.7893 11.4696 13 12 13C12.5304 13 13.0391 12.7893 13.4142 12.4142C13.7893 12.0391 14 11.5304 14 11C14 10.4696 13.7893 9.96086 13.4142 9.58579C13.0391 9.21071 12.5304 9 12 9Z"
                          fill="#DE2527"
                        />
                      </svg>
                    </div>
                    <p className="text-[#b8b8b8] ml-2 font-light font-sans text-[16px] leading-[25.6px] ">
                      To
                    </p>
                  </div>
                  <div className="flex">
                    <p className="text-[#b8b8b8] ml-2 font-light font-sans text-[16px]">
                      -
                    </p>
                    <p className="text-[#707070] movingContainerFromLocation ml-2 font-sans text-[16px] leading-[25.6px]">
                      Rozengracht 55, 1016 LZ Amsterdam
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[42%] movingCompanyMoreDetails h-full flex flex-col justify-between  ">
              <div className="webOptionsContainer">
                <p className="text-[#9e9e9e] font-normal text-[16px] leading-[25.6px] font-sans ">
                  22 miles away
                </p>
                <p className="font-unbounded text-[36px] leading-[38.5px] text-[#136AB5] font-semibold ">
                  {" "}
                  $921
                </p>
                <p className="text-[16px] leading-[25.6px] font-light text-[#373737] font-sans ">
                  Pickup & delivery included
                </p>
              </div>
              <div className="mobileOptionsContainer">
                <p className="font-unbounded mobileOptionsContainerAmount text-[36px] leading-[38.5px] text-[#136AB5] font-semibold ">
                  {" "}
                  $921
                </p>
                <div>
                  <p className="text-[#9e9e9e] mobileOptionsContainerDistance font-normal text-[16px] leading-[25.6px] font-sans ">
                    22 miles away
                  </p>
                  <p className="text-[16px] leading-[25.6px] mobileOptionsContainerOptions font-light text-[#373737] font-sans ">
                    Pickup & delivery included
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="rounded-[12px] w-full flex justify-between h-fit border-[1px] p-[16px] border-[#e3e3e3] ">
          <div className="flex items-center">
            <div className="rounded-[2px] flex items-center justify-center h-[37px] w-[37px] border-[1px] border-[#E2E8F0] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1801_4481)">
                  <path
                    d="M19.9993 13.9998C20.3845 14 20.7549 14.1484 21.0336 14.4142C21.3124 14.6801 21.4783 15.043 21.4968 15.4277C21.5153 15.8125 21.3851 16.1896 21.1331 16.481C20.8811 16.7724 20.5267 16.9556 20.1433 16.9928L19.9993 16.9998H7.62026L9.06026 18.4398C9.33303 18.7116 9.49083 19.0779 9.50099 19.4628C9.51116 19.8477 9.3729 20.2218 9.11486 20.5076C8.85682 20.7934 8.49875 20.969 8.11479 20.9981C7.73084 21.0272 7.3504 20.9075 7.05226 20.6638L6.93826 20.5608L3.10926 16.7308C2.13526 15.7568 2.76926 14.1138 4.10026 14.0058L4.24026 13.9998H19.9993ZM14.9393 3.43981C15.2016 3.17721 15.5521 3.02122 15.9228 3.00201C16.2935 2.9828 16.6582 3.10173 16.9463 3.33581L17.0603 3.43881L20.8893 7.26881C21.8633 8.24281 21.2293 9.88581 19.8983 9.99381L19.7583 9.99981H3.99926C3.61404 9.99962 3.24366 9.85124 2.96487 9.5854C2.68608 9.31957 2.52025 8.95667 2.50173 8.5719C2.48322 8.18713 2.61345 7.80998 2.86543 7.51861C3.11742 7.22724 3.47184 7.04398 3.85526 7.00681L3.99926 6.99981H16.3783L14.9383 5.55981C14.6574 5.27856 14.4996 4.89731 14.4996 4.49981C14.4996 4.10231 14.6584 3.72106 14.9393 3.43981Z"
                    fill="#7B7B7B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1801_4481">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="ml-2">
              <p className="font-sans text-[16px] text-[#121212] leading-[25.6px] ">
                Pay with Transfer
              </p>
              <p className="text-[14px] font-sans text-[#9e9e9e] font-extralight leading-[18.2px] ">
                1000000342, Independent Movers LTD, Triodos Bank N.V.
              </p>
            </div>
          </div>
          <div className="">
            <div className="w-[16px] h-[16px] rounded-full border-[1px] border-[#CBD5E1] "></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
            >
              <circle cx="9.5" cy="10" r="9" fill="#F5F5F5" stroke="#136AB5" />
              <circle cx="9.49862" cy="9.99996" r="6.14706" fill="#136AB5" />
            </svg>
          </div>
        </div> */}
        <div className="rounded-[12px] paymentBox h-fit w-full flex-col mt-5 flex border-[1px] p-[16px] border-[#e3e3e3] ">
          <div className="items-center w-full justify-between flex">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="24"
                viewBox="0 0 35 24"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="34"
                  height="23"
                  rx="1.5"
                  fill="white"
                  stroke="#E2E8F0"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.6253 16.2582H8.50494L6.91495 10.1924C6.83949 9.91334 6.67925 9.66667 6.44354 9.5504C5.85531 9.25823 5.20712 9.0257 4.5 8.90843V8.6749H7.91567C8.38708 8.6749 8.74064 9.0257 8.79957 9.43313L9.62454 13.8086L11.7438 8.6749H13.8052L10.6253 16.2582ZM14.9838 16.2582H12.9813L14.6302 8.6749H16.6327L14.9838 16.2582ZM19.2234 10.7757C19.2823 10.3673 19.6359 10.1337 20.0483 10.1337C20.6965 10.0751 21.4026 10.1924 21.9919 10.4835L22.3454 8.85081C21.7562 8.61727 21.108 8.5 20.5198 8.5C18.5762 8.5 17.162 9.55041 17.162 11.0082C17.162 12.1173 18.1637 12.6996 18.8708 13.0504C19.6359 13.4002 19.9305 13.6338 19.8716 13.9835C19.8716 14.5082 19.2823 14.7418 18.6941 14.7418C17.9869 14.7418 17.2798 14.5669 16.6327 14.2747L16.2791 15.9085C16.9862 16.1996 17.7512 16.3169 18.4584 16.3169C20.6376 16.3745 21.9919 15.3251 21.9919 13.75C21.9919 11.7665 19.2234 11.6502 19.2234 10.7757ZM29 16.2582L27.41 8.6749H25.7022C25.3486 8.6749 24.9951 8.90843 24.8772 9.25823L21.9329 16.2582H23.9943L24.4058 15.1502H26.9386L27.1743 16.2582H29ZM25.9968 10.7171L26.585 13.5751H24.9361L25.9968 10.7171Z"
                  fill="#172B85"
                />
              </svg>
              <p className="font-sans ml-2 paymentCardText text-[16px] text-[#121212] leading-[25.6px] ">
                New credit or debit card
              </p>
            </div>
            <div className="">
              <div className="w-[16px] h-[16px] rounded-full border-[1px] border-[#CBD5E1] "></div>
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
            >
              <circle cx="9.5" cy="10" r="9" fill="#F5F5F5" stroke="#136AB5" />
              <circle cx="9.49862" cy="9.99996" r="6.14706" fill="#136AB5" />
            </svg> */}
            </div>
          </div>
          <div className="mt-4">
            <div className="mb-4">
              <label className="font-sans text-[14px] text-[#707070] font-extralight leading-[18.2px] ">
                Card Number
              </label>
              <div className="h-[50px] mt-1 flex items-center ">
                <div className="bg-[#E2E8F0] w-[50px] items-center justify-center flex h-full rounded-l-[6px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="24"
                    viewBox="0 0 35 24"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="34"
                      height="23"
                      rx="1.5"
                      fill="white"
                      stroke="#E2E8F0"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.6253 16.2582H8.50494L6.91495 10.1924C6.83949 9.91334 6.67925 9.66667 6.44354 9.5504C5.85531 9.25823 5.20712 9.0257 4.5 8.90843V8.6749H7.91567C8.38708 8.6749 8.74064 9.0257 8.79957 9.43313L9.62454 13.8086L11.7438 8.6749H13.8052L10.6253 16.2582ZM14.9838 16.2582H12.9813L14.6302 8.6749H16.6327L14.9838 16.2582ZM19.2234 10.7757C19.2823 10.3673 19.6359 10.1337 20.0483 10.1337C20.6965 10.0751 21.4026 10.1924 21.9919 10.4835L22.3454 8.85081C21.7562 8.61727 21.108 8.5 20.5198 8.5C18.5762 8.5 17.162 9.55041 17.162 11.0082C17.162 12.1173 18.1637 12.6996 18.8708 13.0504C19.6359 13.4002 19.9305 13.6338 19.8716 13.9835C19.8716 14.5082 19.2823 14.7418 18.6941 14.7418C17.9869 14.7418 17.2798 14.5669 16.6327 14.2747L16.2791 15.9085C16.9862 16.1996 17.7512 16.3169 18.4584 16.3169C20.6376 16.3745 21.9919 15.3251 21.9919 13.75C21.9919 11.7665 19.2234 11.6502 19.2234 10.7757ZM29 16.2582L27.41 8.6749H25.7022C25.3486 8.6749 24.9951 8.90843 24.8772 9.25823L21.9329 16.2582H23.9943L24.4058 15.1502H26.9386L27.1743 16.2582H29ZM25.9968 10.7171L26.585 13.5751H24.9361L25.9968 10.7171Z"
                      fill="#172B85"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={handleChange}
                  placeholder="Enter card number"
                  maxLength={19} // 16 digits + 3 spaces
                  className="w-full border-[1px] paymentCardText h-full pl-2 outline-none rounded-r-[6px] "
                />
              </div>
            </div>
            <div className="flex justify-between gap-[16px] items-center">
              <div className="w-full">
                <label className="font-sans block mb-2 text-[14px] text-[#707070] font-extralight leading-[18.2px] ">
                  Expiration
                </label>
                <input
                  type="text"
                  value={expiry}
                  onChange={handleExpChange}
                  placeholder="MM/YY"
                  maxLength={19} // 16 digits + 3 spaces
                  className="border-[1px] w-full h-[40px] pl-2 outline-none rounded-r-[6px] "
                />
              </div>
              <div className="w-full">
                <label className="font-sans block mb-2 text-[14px] text-[#707070] font-extralight leading-[18.2px] ">
                  CVV
                </label>
                <input
                  type="text"
                  value={cvv}
                  onChange={handleCVVChange}
                  placeholder="123"
                  maxLength={3} // 16 digits + 3 spaces
                  className="border-[1px] w-full h-[40px] pl-2 outline-none rounded-r-[6px] "
                />
              </div>
              <div className="w-full">
                <label className="font-sans block mb-2 text-[14px] text-[#707070] font-extralight leading-[18.2px] ">
                  Postal Code
                </label>
                <input
                  type="text"
                  // value={cardNumber}
                  // onChange={handleChange}
                  placeholder="12345"
                  maxLength={6} // 16 digits + 3 spaces
                  className="border-[1px] w-full h-[40px] pl-2 outline-none rounded-r-[6px] "
                />
              </div>
            </div>
            <div className="flex mt-3 items-center ">
              <input
                className="h-[20px] w-[20px] "
                id="check"
                type="checkbox"
              />
              <label
                className="font-sans font-extralight paymentCard ml-2 text-[16px] text-[#555]"
                htmlFor="check"
              >
                Save this credit card for future use
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
