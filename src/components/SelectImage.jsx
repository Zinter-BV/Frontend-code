import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const SelectImage = ({ title }) => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles); // Handle uploaded files
  }, []);

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
            <button className="self-center border-[1px] border-primary py-2 px-4 text-[#054D96] rounded-[20px] cursor-pointer text-[12px] text-manrope font-light ">
              Browse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectImage;
