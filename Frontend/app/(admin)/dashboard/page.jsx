"use client";
import React, { useState } from "react";
import Orders from "../../../components/admin/orders";
import Products from "../../../components/admin/Products";
import Categories from "../../../components/admin/Categories";
import AddProduct from "../../../components/admin/AddProducts";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { FaBookOpen } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { IoLogOutSharp } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { GoPackage } from "react-icons/go";
import { IoIosAddCircle } from "react-icons/io";

function page() {
  const [SideBarMenu, setSidBareMenu] = useState(false);
  const [view, setView] = useState("home");

  const renderComponent = () => {
    switch (view) {
      case "orders":
        return <Orders />;
      case "products":
        return <Products />;
      case "add Product":
        return <AddProduct />;
      case "categories":
        return <Categories />;
      default:
        return <Orders />;
    }
  };
  return (
    <div>
      <div className="flex gap-10">
        <div
          className={` ${
            SideBarMenu ? "md:w-[7%] w-[100px]" : "md:w-[30%] w-[300px]"
          }`}
        >
          <div className="bg-gray-700 flex flex-col justify-between p-4 h-screen">
            <div className="p-2 text-center">
              <button onClick={() => setSidBareMenu(!SideBarMenu)}>
                <FaBookOpen className="text-white text-3xl" />
              </button>
            </div>
            <div className="flex flex-col rounded-xl bg-gray-900 justify-center items-center gap-2 text-white p-5 ">
              <Image
                className="rounded-full border border-white bg-white"
                src={Logo}
                width={`${SideBarMenu ? 70 : 100}`}
                height={50}
                alt="logo"
              />
              {!SideBarMenu ? (
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
                  onClick={() => setView("orders")}
                >
                  <i>
                    <GoPackage className="text-3xl" />
                  </i>
                  {!SideBarMenu ? <p>Orders</p> : null}
                </li>
                <li
                  className="flex text-white gap-2 border-0 border-b justify-start items-center cursor-pointer"
                  onClick={() => setView("products")}
                >
                  <i>
                    <AiFillProduct className="text-3xl" />
                  </i>

                  {!SideBarMenu ? <p>Products</p> : null}
                </li>
                <li
                  className="flex text-white gap-2 border-0 border-b justify-start items-center cursor-pointer"
                  onClick={() => setView("add Product")}
                >
                  <i>
                    <IoIosAddCircle className="text-3xl" />
                  </i>

                  {!SideBarMenu ? <p>Add Product</p> : null}
                </li>
                <li
                  className="flex text-white gap-2 border-0 border-b justify-start items-center cursor-pointer"
                  onClick={() => setView("categories")}
                >
                  <i>
                    <GrTasks className="text-3xl" />
                  </i>

                  {!SideBarMenu ? <p>categories</p> : null}
                </li>
              </ul>
            </div>
            <div className="flex text-white gap-2 justify-start items-center mt-10 cursor-pointer p-5">
                <i>
                  <IoLogOutSharp className="text-3xl" />
                </i>
                {!SideBarMenu ? <p>Logout</p> : null}
              </div>
          </div>
        </div>
        <div className={`${SideBarMenu ? "w-[90%]" : "w-[65%]"}`}>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}


export default page;
