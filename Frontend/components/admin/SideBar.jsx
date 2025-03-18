"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { FaBookOpen } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { IoLogOutSharp } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { GoPackage } from "react-icons/go";
import { IoIosAddCircle } from "react-icons/io";

function SideBar(Props) {
  return (
    <>
      <div className="bg-gray-700  rounded-xl">
        <div className="p-2 text-center">
          <button onClick={() => Props.setSidBareMenu(!Props.SideBarMenu)}>
            <FaBookOpen className="text-white text-3xl" />
          </button>
        </div>
        <div className="flex flex-col rounded-xl bg-gray-900 justify-center items-center gap-2 text-white p-5 ">
          <Image
            className="rounded-full border border-white bg-white"
            src={Logo}
            width={`${Props.SideBarMenu ? 70 : 100}`}
            height={50}
            alt="logo"
          />
          {!Props.SideBarMenu ? (
            <div>
              <h2>Admin name</h2>
              <h3>Admin email</h3>
            </div>
          ) : null}
        </div>
        <div className="p-5 flex flex-col">
          <ul className="flex flex-col gap-5">
            <li
              className="flex text-white gap-2 border-0 border-b justify-start items-center cursor-pointer"
              onClick={() => Props.setView("orders")}
            >
              <i>
                <GoPackage className="text-3xl" />
              </i>
              {!Props.SideBarMenu ? <p>Orders</p> : null}
            </li>
            <li
              className="flex text-white gap-2 border-0 border-b justify-start items-center cursor-pointer"
              onClick={() => Props.setView("products")}
            >
              <i>
                <AiFillProduct className="text-3xl" />
              </i>

              {!Props.SideBarMenu ? <p>Products</p> : null}
            </li>
            <li
              className="flex text-white gap-2 border-0 border-b justify-start items-center cursor-pointer"
              onClick={() => Props.setView("add Product")}
            >
              <i>
                <IoIosAddCircle className="text-3xl" />
              </i>

              {!Props.SideBarMenu ? <p>Add Product</p> : null}
            </li>
            <li
              className="flex text-white gap-2 border-0 border-b justify-start items-center cursor-pointer"
              onClick={() => Props.setView("categories")}
            >
              <i>
                <GrTasks className="text-3xl" />
              </i>

              {!Props.SideBarMenu ? <p>categories</p> : null}
            </li>
          </ul>
          <div className="flex text-white gap-2 justify-start items-center mt-10 cursor-pointer">
            <i>
              <IoLogOutSharp className="text-3xl" />
            </i>
            {!Props.SideBarMenu ? <p>Logout</p> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
