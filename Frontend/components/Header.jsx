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
import { IoMdCloseCircle } from "react-icons/io";

function Header() {
  const [cartLength, setCartLength] = useState(0);
  const store = useSelector((store) => store.cart.items);
  useEffect(() => {
    setCartLength(store.length);
  });
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center py-4 md:px-20 px-10 shadow-md">
        <div className="flex items-center gap-4">
          <div className="">
            <span
              className="text-3xl text-gray-700 cursor-pointer"
              onClick={() => setNavOpen(true)}
            >
              <FaBars />
            </span>
          </div>
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
        <div className="flex items-center gap-4">
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
      </header>
      {navOpen ? (
        <nav className="h-[100vh] bg-gray-100 w-[300px] fixed top-0 left-0 shadow-md  z-50 p-10">
          <span
            className="text-3xl text-gray-700 flex justify-end cursor-pointer"
            onClick={() => setNavOpen(false)}
          >
            <IoMdCloseCircle />
          </span>
          <ul className="flex flex-col gap-10">
          <li className="border-b-2 border-gray-300 py-2" onClick={() => setNavOpen(false)}>
              <Link href="/">Home</Link>
            </li>
            <li className="border-b-2 border-gray-300 py-2" onClick={() => setNavOpen(false)}>
              <Link href="/about">About Us</Link>
            </li>
            <li className="border-b-2 border-gray-300 py-2" onClick={() => setNavOpen(false)}>
              <Link href="/contact">Contact Us</Link>
            </li>

            <li className="border-b-2 border-gray-300 py-2" onClick={() => setNavOpen(false)}>
              <Link href="/shop">Shop</Link>
            </li>
            <li className="border-b-2 border-gray-300 py-2" onClick={() => setNavOpen(false)}>
              <Link href="/login">Login</Link>
            </li>
            <ul className="flex flex-col gap-4"></ul>
          </ul>
        </nav>
      ) : null}
    </>
  );
}

export default Header;
