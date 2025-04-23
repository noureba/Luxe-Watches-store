"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/actions/authActions";

function page() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });


  const handleSubmit = () => {
    dispatch(loginUser(info));
    setInfo({
      email: "",
      password: "",
    });
  };
  return (
    <div className="flex justify-center items-center h-screen p-10">
      <div className="flex flex-col gap-4 justify-center mx-10 bg-blue-100  p-10 my-20 border border-gray-500 rounded md:min-w-[500px] min-w-[350px]">
        <h1 className="text-2xl my-5 text-gray-700 font-bold text-center">
          Login
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xl font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="rounded border bg-white border-gray-700 text-gray-700 p-2 "
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={info.email}
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
              required
            />
            <label className="text-xl font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="rounded border bg-white border-gray-700 text-gray-700 p-2 "
              type="password"
              name="password"
              value={info.password}
              onChange={(e) => setInfo({ ...info, password: e.target.value })}
              required
            />
          </div>
        </div>
        <button
          className={`${
            store.auth.loading ? "bg-gray-900" : "bg-gray-500"
          } text-white font-bold py-2 px-4 rounded`}
          disabled={store.auth.loading}
          onClick={handleSubmit}
        >
          {store.auth.loading ? "Login..." : "login"}
        </button>
        <div className="flex flex-col gap-1">
          <Link href="/reset-password" className="text-blue-500 underline">
            Forget Password
          </Link>
          <Link href="/register" className="text-gray-700 ">
            I have dont have account,{" "}
            <span className="text-blue-500 underline">sing up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
