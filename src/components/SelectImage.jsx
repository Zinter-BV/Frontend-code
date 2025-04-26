import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const SelectImage = ({ title, onImagesSelected }) => {
  const [preview, setPreview] = useState(null);
  const [fileLength, setFileLength] = useState(0);
  const onDrop = useCallback(
    (acceptedFiles) => {
      const allFiles = acceptedFiles;
      const file = acceptedFiles[0]; // Get the first file
      // check the length of all files
      setFileLength(allFiles.length);
      if (file) {
        setPreview(URL.createObjectURL(file)); // Create a preview URL
      }
      onImagesSelected(acceptedFiles); // Pass selected images to parent
      // console.log(acceptedFiles); // Handle uploaded files
    },
    [onImagesSelected]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/webp": [],
      "image/gif": [],
    },
    multiple: true, // Set to false if you want only one image
  });

  return (
    <div className="cursor-pointer" {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="w-full h-[300px] rounded-[12px] p-[30px] border-[1px] border-[#E3E3E3] ">
        <p className="text-[#121212] text-[14px] font-bold font-sans ">
          {title}
        </p>
        {preview ? (
          <div className="w-full mt-3 relative h-[200px] ">
            <img
              src={preview}
              alt="Uploaded preview"
              className="w-full h-full object-cover rounded-[8px]"
            />

            {fileLength > 1 && (
              <div className=" flex items-center relative bottom-[70px] justify-center w-full">
                <div className="flex bg-[#F0F9FF] w-fit px-2 border-[1px]  border-[#E0F2FE] rounded-[4px] p-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M5.75 1.5C3.51083 1.5 2.39124 1.5 1.69562 2.19562C1 2.89124 1 4.01083 1 6.25C1 8.48917 1 9.60876 1.69562 10.3044C2.39124 11 3.51083 11 5.75 11C7.98917 11 9.10876 11 9.80438 10.3044C10.5 9.60876 10.5 8.48917 10.5 6.25V4.5"
                      stroke="#3C82F6"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M1 7.06772C1.30951 7.02277 1.62242 7.00055 1.93586 7.00134C3.26183 6.97332 4.55532 7.38647 5.58554 8.16709C6.541 8.89107 7.21236 9.88744 7.5 11"
                      stroke="#3C82F6"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.5 8.44811C9.91228 8.15043 9.30439 7.9994 8.69311 8.00003C7.76725 7.99638 6.85076 8.33667 6 9"
                      stroke="#3C82F6"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7 3C7 3 7.5 3 8 4C8 4 9.58824 1.5 11 1"
                      stroke="#3C82F6"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="font-sans text-[14px] text-[#3C82F6] ml-2 leading-[25.6px] ">
                    {fileLength} Images Added
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full border-[1px] mt-3 h-[200px] flex justify-center items-center border-dashed rounded-[8px] border-[#c4c4c4] ">
            <div>
              <svg
                className="mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="23"
                viewBox="0 0 33 23"
                fill="none"
              >
                <g clip-path="url(#clip0_1494_1180)">
                  <path
                    d="M26.3 9.05333C25.8521 6.78362 24.6301 4.73981 22.8428 3.27099C21.0554 1.80218 18.8135 0.999477 16.5 1C12.6467 1 9.3 3.18667 7.63333 6.38667C5.67365 6.59844 3.86134 7.52694 2.54465 8.99376C1.22796 10.4606 0.499771 12.3622 0.5 14.3333C0.5 18.7467 4.08667 22.3333 8.5 22.3333H25.8333C29.5133 22.3333 32.5 19.3467 32.5 15.6667C32.5 12.1467 29.7667 9.29333 26.3 9.05333ZM19.1667 13V18.3333H13.8333V13H9.83333L16.5 6.33333L23.1667 13H19.1667Z"
                    fill="#D1D1D1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1494_1180">
                    <rect
                      width="32"
                      height="22"
                      fill="white"
                      transform="translate(0.5 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-[#7B7B7B] text-center font-sans text-[16px] leading-[25.6px] my-3  ">
                Drop a file
              </p>
              <div className="flex mb-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="1"
                  viewBox="0 0 25 1"
                  fill="none"
                >
                  <path
                    d="M0.5 0C0.223858 0 0 0.223858 0 0.5C0 0.776142 0.223858 1 0.5 1V0ZM0.5 1H24.5V0H0.5V1Z"
                    fill="#D9D9D9"
                  />
                </svg>
                <p className="mx-2 font-sora text-[12px] leading-[14.261px] ">
                  or
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="1"
                  viewBox="0 0 25 1"
                  fill="none"
                >
                  <path
                    d="M0.5 0C0.223858 0 0 0.223858 0 0.5C0 0.776142 0.223858 1 0.5 1V0ZM0.5 1H24.5V0H0.5V1Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
              <button className="self-center border-[1px] border-primary py-2 px-4 text-[#054D96] rounded-[25px] cursor-pointer text-[12px] text-manrope font-light ">
                Browse
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectImage;
