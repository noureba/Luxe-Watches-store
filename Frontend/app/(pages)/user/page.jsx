"use client";
import React, { useEffect, useState } from "react";
import Orders from "../../../components/user/Orders";
import Settings from "../../../components/user/Settings";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { FaBookOpen } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import { GoPackage } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../../redux/actions/dataActions";
import { useRouter } from "next/navigation";

function Page() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.data);
  const router = useRouter();
  const [SideBarMenu, setSidBareMenu] = useState(false);
  const [view, setView] = useState("home");

  const renderComponent = () => {
    switch (view) {
      case "my orders":
        return <Orders />;
      case "settings":
        return <Settings />;
      default:
        return <Orders />;
    }
  };

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="flex gap-10">
        <div
          className={` ${
            SideBarMenu ? "md:w-[7%] w-[100px]" : "md:w-[30%] w-[300px]"
          }`}
        >
          <div className="bg-white text-gray-900 border flex flex-col justify-between p-4 md:h-[100%] h-[100vh]">
            <div className="p-2 text-center cursor-pointer">
              <button onClick={() => setSidBareMenu(!SideBarMenu)}>
                <FaBookOpen className="text-gray-700 text-3xl" />
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
                  className="flex text-gray-700 gap-2 border-0 border-b justify-start items-center cursor-pointer"
                  onClick={() => setView("orders")}
                >
                  <i>
                    <GoPackage className="text-3xl" />
                  </i>
                  {!SideBarMenu ? <p>My orders</p> : null}
                </li>
                <li
                  className="flex text-gray-700 gap-2 border-0 border-b justify-start items-center cursor-pointer"
                  onClick={() => setView("settings")}
                >
                  <i>
                    <IoIosSettings className="text-3xl" />
                  </i>

                  {!SideBarMenu ? <p>Settings</p> : null}
                </li>
              </ul>
            </div>
            <div className="flex text-gray-700 gap-2 justify-start items-center mt-10 cursor-pointer p-5">
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

export default Page;
