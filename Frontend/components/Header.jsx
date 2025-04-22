"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { useSelector } from "react-redux";

function Header() {
  const [cartLength, setCartLength] = useState(0);
  const store = useSelector((store) => store.cart.items);
  useEffect(() => {
    setCartLength(store.length);
  });

  return (
    <>
      <header className="flex justify-between items-center py-4 md:px-20 px-10 shadow-md">
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" width={70} height={70} />
          </Link>
        </div>
        <div className="hidden md:block">
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
            <Link href="/login">
              <i className="text-2xl text-gray-700">
                <VscAccount />
              </i>
            </Link>
          </div>
          <div className="relative">
            <Link href="/cart">
              <i className="text-2xl text-gray-700">
                <BsCart2 />
              </i>
              <p className="bg-blue-500 px-2 rounded-full text-white absolute right-[-10px] top-[-15px]">
                {cartLength}
              </p>
            </Link>
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
