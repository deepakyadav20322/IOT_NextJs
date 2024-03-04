import Image from "next/image";
import React from "react";

const AdminProfile = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full xl:w-[80%] m-auto border-2 my-2 flex flex-col md:flex-row justify-center items-center p-6">
        <Image
          src="/Images/avatar.svg"
          width={200}
          height={200}
          alt="avtar"
          draggable='false'
          className="bg-[#f3f4f6] rounded-full"
        />
        <div className="profileInfo my-4 md:ml-10">
          <h1 className="text-xl ">
            {" "}
            Hi, <span className="font-bold"> Deepak Yadav! </span>{" "}
          </h1>
          <div className="pl-2 py-1 mr-4 rounded-xl text-white bg-[#2563eb] text-semibold my-3 ">
            <span className="pr-2">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                className="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                ></path>
              </svg>
            </span>
            Verified
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
