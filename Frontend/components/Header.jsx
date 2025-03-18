import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <>
      <header className="flex justify-between items-center py-4 md:px-20 px-10 shadow-md">
        <div>
          <Image src={logo} alt="logo" width={70} height={70} />
        </div>
        <div>
          <div className="bg-gray-100 flex items-center rounded-full p-2 gap-2">
            <i className="text-2xl">
              <CiSearch />
            </i>
            <input
              className="border-0 focus:border-none focus:outline-none md:w-[400px]"
              type="search"
              placeholder="Search in products..."
              name="seatch"
              id="search"
            />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div>
            <i className="text-2xl text-gray-700">
              <VscAccount />
            </i>
          </div>
          <div>
            <i className="text-2xl text-gray-700">
              <BsCart2 />
            </i>
          </div>
        </div>
        <div className="md:hidden">
          <button className="text-3xl text-gray-700">
            <FaBars />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
