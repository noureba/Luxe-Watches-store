import React from "react";
import { FaCamera } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/logo.png";

function Settings() {
  return (
    <div>
      <div className="my-20 md:mx-5 mr-10 ">
        <div className="flex gap-3 justify-start items-buttom mb-4">
          <h3 className="font-bold text-3xl">Settings</h3>
          <span className="border border-[#8ECAE6] border-0 border-b-5 w-[100px] mb-2"></span>
        </div>
        <div className="flex flex-col justify-around gap-4 my-10">
          <div className="flex flex-col rounded-xl bg-gray-900 justify-center items-center gap-2 text-white p-5">
            <Image
              className="rounded-full border border-white bg-white"
              src={logo}
              width={100}
              height={100}
              alt="profile"
            />
            <input className="hidden" type="file" accept="image/*" />
            <div className="flex gap-3 flex-wrap">
              <button className="flex gap-2 bg-white p-2 justify-center items-center text-gray-900 rounded cursor-pointer">
                <FaCamera />
                <p>change profile</p>
              </button>
              <button className="flex gap-2 bg-green-500 p-2 justify-center items-center text-gray-900 rounded cursor-pointer">
                <FaRegSave />
                <p>Save</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="md:w-[45%]">
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Nureddine ba"
                className="border border-gray-300 px-2 py-1"
              />
              <div className="flex justify-between items-center gap-2 ">
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="border border-gray-300 px-2 py-1 w-[80%]"
                />
                <p className="text-blue-500 underline text-nowrap cursor-pointer">
                  Verify Email
                </p>
              </div>
              <button className="bg-[#8ECAE6] text-white px-2 py-1 corsur-pointer rounded cursor-pointer">
                Save changes
              </button>
            </div>
          </div>
          <div className="md:w-[45%]">
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Old password"
                className="border border-gray-300 px-2 py-1"
              />
              <input
                type="text"
                placeholder="New password"
                className="border border-gray-300 px-2 py-1"
              />
              <button className="bg-[#8ECAE6] text-white px-2 py-1 corsur-pointer rounded cursor-pointer">
                change password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
