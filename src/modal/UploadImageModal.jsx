import React, { useState } from "react";
import SelectImage from "../components/SelectImage";
import UploadImageSuccess from "./UploadImageSuccess";

const UploadImageModal = ({
  closeUploadImageModal,
  isUploadImageModalOpen,
  openIsInventoryList,
}) => {
  const [allImages, setAllImages] = useState([]);

  const [isUploadImageSuccess, setIsUploadImageSuccess] = useState(false);

  const handleImagesSelected = (newImages) => {
    setAllImages((prevImages) => [...prevImages, ...newImages]); // Append new images
  };

  const closeUploadSuccessModal = () => setIsUploadImageSuccess(false);

  const uploadImage = () => {
    if (allImages.length === 0) return;
    console.log(allImages);
    setIsUploadImageSuccess(true);

    // send image to API
    // const formData = new FormData();
    // allImages.forEach((file, index) => {
    //   formData.append(`image_${index}`, file);
    // });

    // // Send formData to API
    // fetch("https://your-api-endpoint.com/upload", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log("Upload successful", data))
    //   .catch((error) => console.error("Upload error", error));
  };

  return (
    <div className="fixed top-0 z-50 left-0 backdrop-blur-[3px] bg-[rgba(0,0,0,0.10)] h-full w-full flex justify-center items-center ">
      <div className="bg-white flex flex-col relative justify-between w-[80%] rounded-[16px] h-[90%]">
        <div className="flex items-center w-full justify-between p-[28px] border-b-[1px] border-[#E3E8EF] ">
          <div className="flex uploadImageHeader items-center">
            <h3 className="mr-2 font-sans text-[20px] font-bold text-[#121212] ">
              Upload Image
            </h3>
            <p className="font-sans text-[20px] font-semibold italic text-[#9e9e9e]">
              For Image Recognition
            </p>
          </div>
          <div
            onClick={closeUploadImageModal}
            className="h-[32px] cursor-pointer w-[32px] rounded-full  flex items-center border-[1px] border-[#f7f7f7] justify-center "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3.68 14L8 9.68L12.32 14L14 12.32L9.68 8L14 3.68L12.32 2L8 6.32L3.68 2L2 3.68L6.32 8L2 12.32L3.68 14Z"
                fill="#DE2527"
              />
            </svg>
          </div>
        </div>
        <div className="w-full overflow-y-scroll h-[80%]">
          <div className="w-[90%] py-4 mx-auto h-full ">
            <div className="h-[42px] w-fit rounded-[1000px] border-[1px] p-[3px] border-[#E5E5E5] flex items-center ">
              <div
                onClick={openIsInventoryList}
                className={`h-[36px] mr-1 cursor-pointer {${!isUploadImageModalOpen} && border-[1px]}  rounded-[1000px] p-[10px] flex justify-center items-center border-[#E5E5E5] `}
              >
                <p className="font-sans text-[16px] inventoryListModal leading-[25.6px] text-[#9e9e9e] ">
                  Inventory List
                </p>
              </div>
              <div className="h-[36px] border-[1px] cursor-pointer  rounded-[1000px] p-[10px] flex justify-center items-center border-[#E5E5E5] ">
                <p
                  className={` font-sans text-[16px] leading-[25.6px] inventoryListModal {${
                    isUploadImageModalOpen ? "text-[#121212]" : "text-[#9e9e9e]"
                  }`}
                >
                  Upload Image
                </p>
              </div>
            </div>
            <div className="flex items-center mt-[18px] tipsContainer rounded-[12px] bg-[#F0F9FD] py-[16px] px-[20px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="15"
                  transform="rotate(180 16 16)"
                  fill="white"
                  stroke="#D9D9D9"
                  stroke-width="1.25"
                />
                <path
                  d="M18.1331 13.5935L14.3558 14.0669L14.2206 14.6936L14.9628 14.8305C15.4478 14.946 15.5434 15.1208 15.4379 15.6041L14.2206 21.3244C13.9006 22.8039 14.3938 23.5 15.5533 23.5C16.4523 23.5 17.4964 23.0843 17.9698 22.5136L18.1149 21.8275C17.785 22.1178 17.3034 22.2332 16.9834 22.2332C16.5298 22.2332 16.3649 21.9149 16.482 21.3541L18.1331 13.5935ZM18.2485 10.1494C18.2485 10.5869 18.0747 11.0064 17.7654 11.3158C17.4561 11.6251 17.0365 11.7989 16.5991 11.7989C16.1616 11.7989 15.7421 11.6251 15.4328 11.3158C15.1234 11.0064 14.9496 10.5869 14.9496 10.1494C14.9496 9.71198 15.1234 9.29244 15.4328 8.98311C15.7421 8.67378 16.1616 8.5 16.5991 8.5C17.0365 8.5 17.4561 8.67378 17.7654 8.98311C18.0747 9.29244 18.2485 9.71198 18.2485 10.1494Z"
                  fill="black"
                />
              </svg>
              <p className="font-sans ml-2 text-[16px] imagesDescText text-[#136AB5] leading-[25.6px] ">
                The images should be of a very good quality, file Size should
                not be more than 2MB.
              </p>
            </div>
            <div className="my-3 grid grid-cols-3 uploadImageContainer gap-[18px] pb-4 w-full">
              <SelectImage
                title="Living Room Images"
                onImagesSelected={handleImagesSelected}
              />
              <SelectImage
                title="Room 1 Images"
                onImagesSelected={handleImagesSelected}
              />
              <SelectImage
                title="Dinning Room Images"
                onImagesSelected={handleImagesSelected}
              />
              <SelectImage
                title="Kitchen Images"
                onImagesSelected={handleImagesSelected}
              />
              <SelectImage
                title="Bathroom Images"
                onImagesSelected={handleImagesSelected}
              />
              <SelectImage
                title="Toilet Images"
                onImagesSelected={handleImagesSelected}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center z-40 w-full shadow-[0px_-6px_6px_-6px_rgba(0,0,0,0.3)] justify-between  p-[28px] border-t-[1px] border-[#E3E8EF] ">
          <div className="flex bg-[#F0F9FF] border-[1px] border-[#E0F2FE] rounded-[4px] p-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
            >
              <path
                d="M3.77578 6.9998L0.925781 4.1498L1.63828 3.4373L3.77578 5.5748L8.36328 0.987305L9.07578 1.6998L3.77578 6.9998Z"
                fill="#3C82F6"
              />
            </svg>
            <p className="font-sans text-[16px] text-[#3C82F6] ml-2 leading-[25.6px] ">
              {allImages.length}
              <span className="uploadImageItemSelected"> Items Selected</span>
            </p>
          </div>
          <button
            onClick={uploadImage}
            className="self-center bg-primary py-2 px-4 text-white rounded-[20px] cursor-pointer text-[12px] text-manrope font-light "
          >
            UPLOAD IMAGE
          </button>
        </div>
        {isUploadImageSuccess && (
          <UploadImageSuccess
            closeUploadImageModal={closeUploadImageModal}
            closeUploadSuccessModal={closeUploadSuccessModal}
          />
        )}
      </div>
    </div>
  );
};

export default UploadImageModal;
