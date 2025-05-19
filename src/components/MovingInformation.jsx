import React from "react";
import "./movingInformation.css";

const MovingInformation = () => {
  return (
    <div className="ml-4 movingInfoBox w-full">
      <div className="overflow-y-scroll pb-[40px] h-[700px] moveBox custom-scroll w-fit">
        <div className="flex movingInformationHeader mb-4 items-center">
          <h3 className="mr-2 font-sans text-[20px] font-bold text-[#121212] ">
            Moving Information
          </h3>
          <p className="font-sans text-[20px] font-semibold italic text-[#9e9e9e]">
            3 Bedroom Apartment
          </p>
        </div>

        <div className="p-[24px] movingInformationContainer w-[600px] h-fit mb-20 border-[#e3e3e3] border-[1px] rounded-[12px] ">
          <p className="font-sans text-[#136AB5] text-[18px] font-bold ">
            Date and Time
          </p>
          <div className="mt-[10px] mb-6 border-[#e3e3e3] border-b-[1px] pb-3 ">
            <div className="flex mb-[15px] flex-col">
              <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                Move Date
              </label>
              <input
                placeholder="Select Move Date"
                type="date"
                className="h-[45px] border-[#e3e3e3] w-full font-light border-[1px] outline-none p-[8px] rounded-[8px] "
              />
            </div>
            <div className="flex mb-[10px] flex-col">
              <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                Pickup Time
              </label>
              <input
                placeholder="Select Move Time"
                type="time"
                className="h-[45px] w-full border-[#e3e3e3] font-light border-[1px] outline-none p-[8px] rounded-[8px] "
              />
            </div>
          </div>
          <p className="font-sans text-[#136AB5] text-[18px] font-bold ">
            Contact Info
          </p>
          <div className="mt-[10px] mb-6 border-[#e3e3e3] border-b-[1px] pb-3 ">
            <div className="flex mb-[15px] flex-col">
              <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                Full Name
              </label>
              <input
                placeholder="Enter Your Full Name"
                type="text"
                className="h-[45px] border-[#e3e3e3] font-light w-full border-[1px] outline-none p-[8px] rounded-[8px] "
              />
            </div>
            <div className="flex mb-[10px] flex-col">
              <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                Email Address
              </label>
              <input
                placeholder="Enter Your Email Address"
                type="text"
                className="h-[45px] w-full border-[#e3e3e3] font-light border-[1px] outline-none p-[8px] rounded-[8px] "
              />
            </div>
            <div className="flex mb-[10px] flex-col">
              <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                Phone Number
              </label>
              <input
                placeholder="Enter Your Phone Number"
                type="number"
                className="h-[45px] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full border-[#e3e3e3] font-light border-[1px] outline-none p-[8px] rounded-[8px] "
              />
            </div>
          </div>
          <div>
            <p className="font-sans mb-2 text-[#136AB5] text-[18px] font-bold ">
              Pickup Details
            </p>
            <div>
              <div className="w-full h-[68px] rounded-[8px] border-[1px] px-[16px] flex items-center justify-between border-[#e3e3e3] ">
                <div className="flex items-center">
                  <div className="flex items-center">
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
                    <p className="text-[#b8b8b8] ml-2 font-light font-sans text-[16px] leading-[25.6px] ">
                      From
                    </p>
                  </div>
                  <div className="flex">
                    <p className="text-[#b8b8b8] ml-2 font-light font-sans text-[16px]">
                      -
                    </p>
                    <p className="text-[#707070] ml-2 font-sans text-[16px] leading-[25.6px]">
                      Keizersgracht 123, 1015 CJ Amsterdam
                    </p>
                  </div>
                </div>
                <button className="text-[#3C82F6] hover:bg-primary py-1 px-2 hover:text-white rounded-[20px] cursor-pointer text-[12px] text-manrope font-light ">
                  CHANGE
                </button>
              </div>
            </div>
            <div className="flex mt-4 mb-5 justify-between  items-center apartmentNumberContainer ">
              <div className="flex  w-[35%] mb-[10px] flex-col">
                <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                  Apartment Number
                </label>
                <input
                  placeholder="Apartment Number"
                  type="number"
                  className="h-[45px] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full border-[#e3e3e3] font-light border-[1px] outline-none p-[8px] rounded-[8px] "
                />
              </div>
              <div className="flex w-[60%] mb-[10px] flex-col">
                <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                  Remarks for the location
                </label>
                <input
                  placeholder="Enter Remarks for this location"
                  type="text"
                  className="h-[45px]  border-[#e3e3e3] font-light border-[1px] outline-none p-[8px] rounded-[8px] "
                />
              </div>
            </div>
            <div>
              <p className="font-sans mb-2 text-[#136AB5] text-[16px] ">
                Restrictions
              </p>
              <div className="flex mt-4 mb-1 justify-between  items-center apartmentNumberContainer">
                <div className="flex  w-[48%] mb-[10px] flex-col">
                  <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Number of floors
                  </label>
                  <input
                    placeholder="How many floors"
                    type="number"
                    className="h-[45px] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full border-[#e3e3e3] font-light border-[1px] outline-none p-[8px] rounded-[8px] "
                  />
                </div>
                <div className="flex w-[48%] mb-[10px] flex-col">
                  <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Long Carry
                  </label>
                  <input
                    placeholder="Enter Number"
                    type="number"
                    className="h-[45px] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full border-[#e3e3e3] font-light border-[1px] outline-none p-[8px] rounded-[8px] "
                  />
                </div>
              </div>
              <div className="mb-2 elevatorContainer flex">
                <div className="flex eleInnerBox mb-[10px] mr-4 flex-col">
                  <p className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Elevator?
                  </p>
                  <div className="flex w-[200px] elevatorQuestionBox h-[45px] border-[1px] rounded-[8px] border-[#e3e3e3] items-center">
                    <div className="flex w-[50%] bg-[#E4F0FC] rounded-tl-[8px] rounded-bl-[8px] h-full border-r-[1px] justify-center border-[#e3e3e3] items-center ">
                      <input
                        placeholder="Enter Number"
                        type="radio"
                        name="elevator"
                        id="yes"
                      />
                      <label
                        htmlFor="yes"
                        className=" text-[#136AB5] font-sans ml-1"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center justify-center h-full w-[50%]">
                      <input
                        placeholder="Enter Number"
                        type="radio"
                        name="elevator"
                        id="no"
                      />
                      <label className="ml-1" htmlFor="no">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex mb-[10px] flex-col">
                  <p className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Need Shuttle?
                  </p>
                  <div className="flex w-[200px] elevatorQuestionBox h-[45px] border-[1px] rounded-[8px] border-[#e3e3e3] items-center">
                    <div className="flex w-[50%] bg-[#E4F0FC] rounded-tl-[8px] rounded-bl-[8px] h-full border-r-[1px] justify-center border-[#e3e3e3] items-center ">
                      <input
                        placeholder="Enter Number"
                        type="radio"
                        name="from_shuttle"
                        id="needShuttle_yes"
                      />
                      <label
                        htmlFor="needShuttle_yes"
                        className=" text-[#136AB5] font-sans ml-1"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center justify-center h-full w-[50%]">
                      <input
                        placeholder="Enter Number"
                        type="radio"
                        name="from_shuttle"
                        id="needShuttle_no"
                      />
                      <label className="ml-1" htmlFor="needShuttle_no">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3 elevatorContainer flex">
                <div className="flex eleInnerBox mb-[10px] mr-4 flex-col">
                  <p className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Building Insurance
                  </p>
                  <div className="flex w-[200px] elevatorQuestionBox h-[45px] border-[1px] rounded-[8px] border-[#e3e3e3] items-center">
                    <div className="flex w-[50%] bg-[#E4F0FC] rounded-tl-[8px] rounded-bl-[8px] h-full border-r-[1px] justify-center border-[#e3e3e3] items-center ">
                      <input
                        placeholder="Enter Number"
                        type="radio"
                        name="insurance"
                        id="insurance_yes"
                      />
                      <label
                        htmlFor="insurance_yes"
                        className=" text-[#136AB5] font-sans ml-1"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center justify-center h-full w-[50%]">
                      <input
                        placeholder="Enter Number"
                        type="radio"
                        name="insurance"
                        id="insurance_no"
                      />
                      <label className="ml-1" htmlFor="insurance_no">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex mb-[10px] flex-col">
                  <p className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Need help packing your items?
                  </p>
                  <div className="flex w-[200px] elevatorQuestionBox h-[45px] border-[1px] rounded-[8px] border-[#e3e3e3] items-center">
                    <div className="flex w-[50%] bg-[#E4F0FC] rounded-tl-[8px] rounded-bl-[8px] h-full border-r-[1px] justify-center border-[#e3e3e3] items-center ">
                      <input
                        placeholder="Enter Number"
                        type="radio"
                        name="from_need_help"
                        id="need_help_yes"
                      />
                      <label
                        htmlFor="need_help_yes"
                        className=" text-[#136AB5] font-sans ml-1"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center justify-center h-full w-[50%]">
                      <input
                        placeholder="Enter Number"
                        type="radio"
                        name="from_need_help"
                        id="need_help_no"
                      />
                      <label className="ml-1" htmlFor="need_help_no">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full h-[68px] rounded-[8px] border-[1px] px-[16px] flex items-center justify-between border-[#e3e3e3] ">
                <div className="flex items-center">
                  <div className="flex items-center">
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
                    <p className="text-[#b8b8b8] ml-2 font-light font-sans text-[16px] leading-[25.6px] ">
                      To
                    </p>
                  </div>
                  <div className="flex">
                    <p className="text-[#b8b8b8] ml-2 font-light font-sans text-[16px]">
                      -
                    </p>
                    <p className="text-[#707070] ml-2 font-sans text-[16px] leading-[25.6px]">
                      Rozengracht 55, 1016 LZ Amsterdam
                    </p>
                  </div>
                </div>
                <button className="text-[#3C82F6] hover:bg-primary py-1 px-2 hover:text-white rounded-[20px] cursor-pointer text-[12px] text-manrope font-light ">
                  CHANGE
                </button>
              </div>
            </div>
            <div className="flex mt-4 mb-5 justify-between  items-center apartmentNumberContainer ">
              <div className="flex  w-[35%] mb-[10px] flex-col">
                <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                  Apartment Number
                </label>
                <input
                  placeholder="Apartment Number"
                  type="number"
                  className="h-[45px] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full border-[#e3e3e3] font-light border-[1px] outline-none p-[8px] rounded-[8px] "
                />
              </div>
              <div className="flex w-[60%] mb-[10px] flex-col">
                <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                  Remarks for the location
                </label>
                <input
                  placeholder="Enter Remarks for this location"
                  type="text"
                  className="h-[45px]  border-[#e3e3e3] font-light border-[1px] outline-none p-[8px] rounded-[8px] "
                />
              </div>
            </div>
            <div>
              <p className="font-sans mb-2 text-[#136AB5] text-[16px] ">
                Restrictions
              </p>
              <div className="flex mt-4 mb-1 justify-between  items-center apartmentNumberContainer">
                <div className="flex  w-[48%] mb-[10px] flex-col">
                  <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Number of floors
                  </label>
                  <input
                    placeholder="How many floors"
                    type="number"
                    className="h-[45px] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full border-[#e3e3e3] font-light border-[1px] outline-none p-[8px] rounded-[8px] "
                  />
                </div>
                <div className="flex w-[48%] mb-[10px] flex-col">
                  <label className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Long Carry
                  </label>
                  <input
                    placeholder="Enter Number"
                    type="number"
                    className="h-[45px] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full border-[#e3e3e3] font-light border-[1px] outline-none p-[8px] rounded-[8px] "
                  />
                </div>
              </div>
              <div className="mb-2 elevatorContainer flex">
                <div className="flex eleInnerBox mb-[10px] mr-4 flex-col">
                  <p className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Elevator?
                  </p>
                  <div className="flex w-[200px] elevatorQuestionBox h-[45px] border-[1px] rounded-[8px] border-[#e3e3e3] items-center">
                    <div className="flex w-[50%] bg-[#E4F0FC] rounded-tl-[8px] rounded-bl-[8px] h-full border-r-[1px] justify-center border-[#e3e3e3] items-center ">
                      <input
                        placeholder="Enter Number"
                        type="radio"
                        name="to_elevator"
                        id="elevator_yes"
                      />
                      <label
                        htmlFor="elevator_yes"
                        className=" text-[#136AB5] font-sans ml-1"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center justify-center h-full w-[50%]">
                      <input
                        placeholder="Enter Number"
                        type="radio"
                        name="to_elevator"
                        id="elevator_no"
                      />
                      <label className="ml-1" htmlFor="elevator_no">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex mb-[10px] flex-col">
                  <p className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Need Shuttle?
                  </p>
                  <div className="flex w-[200px] elevatorQuestionBox h-[45px] border-[1px] rounded-[8px] border-[#e3e3e3] items-center">
                    <div className="flex w-[50%] bg-[#E4F0FC] rounded-tl-[8px] rounded-bl-[8px] h-full border-r-[1px] justify-center border-[#e3e3e3] items-center ">
                      <input
                        placeholder="Enter Number"
                        type="radio"
                        name="to_shuttle"
                        id="need_to_Shuttle_yes"
                      />
                      <label
                        htmlFor="need_to_Shuttle_yes"
                        className=" text-[#136AB5] font-sans ml-1"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center justify-center h-full w-[50%]">
                      <input
                        placeholder="Enter Number"
                        type="radio"
                        name="to_shuttle"
                        id="need_to_Shuttle_no"
                      />
                      <label className="ml-1" htmlFor="need_to_Shuttle_no">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3 elevatorContainer flex">
                <div className="flex eleInnerBox mb-[10px] mr-4 flex-col">
                  <p className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Building Insurance
                  </p>
                  <div className="flex w-[200px] elevatorQuestionBox h-[45px] border-[1px] rounded-[8px] border-[#e3e3e3] items-center">
                    <div className="flex w-[50%] bg-[#E4F0FC] rounded-tl-[8px] rounded-bl-[8px] h-full border-r-[1px] justify-center border-[#e3e3e3] items-center ">
                      <input
                        placeholder="Enter Number"
                        type="radio"
                        name="to_insurance"
                        id="to_insurance_yes"
                      />
                      <label
                        htmlFor="to_insurance_yes"
                        className=" text-[#136AB5] font-sans ml-1"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center justify-center h-full w-[50%]">
                      <input
                        placeholder="Enter Number"
                        type="radio"
                        name="to_insurance"
                        id="to_insurance_no"
                      />
                      <label className="ml-1" htmlFor="to_insurance_no">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex mb-[10px] flex-col">
                  <p className="text-[#2c2c2c] mb-1 font-sans text-[14px] ">
                    Need help packing your items?
                  </p>
                  <div className="flex w-[200px] elevatorQuestionBox h-[45px] border-[1px] rounded-[8px] border-[#e3e3e3] items-center">
                    <div className="flex w-[50%] bg-[#E4F0FC] rounded-tl-[8px] rounded-bl-[8px] h-full border-r-[1px] justify-center border-[#e3e3e3] items-center ">
                      <input
                        placeholder="Enter Number"
                        type="radio"
                        name="to_need_help"
                        id="need_help_to_yes"
                      />
                      <label
                        htmlFor="need_help_to_yes"
                        className=" text-[#136AB5] font-sans ml-1"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center justify-center h-full w-[50%]">
                      <input
                        placeholder="Enter Number"
                        type="radio"
                        name="to_need_help"
                        id="need_help_to_no"
                      />
                      <label className="ml-1" htmlFor="need_help_to_no">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingInformation;
