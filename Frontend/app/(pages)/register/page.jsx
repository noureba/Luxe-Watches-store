"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../redux/actions/authActions";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();

  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const [info, setInfo] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    dispatch(registerUser(info));
  };
  useEffect(() => {
    if (store.auth.isRegisted) {
      setInfo({
        fullName: "",
        email: "",
        password: "",
      });
      router.push("/login");
    }
  }, [store.auth.isRegisted]);

  return (
    <div className="flex justify-center items-center h-screen p-10">
      <div className="flex flex-col gap-4 justify-center  bg-blue-100 min-w-[350px] md:min-w-[500px] p-10 my-20 mx-10 border border-gray-500 rounded">
        <h1 className="text-2xl my-5 text-gray-700 font-bold text-center">
          Regitser
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xl font-medium" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="rounded border border-gray-700 text-gray-700 p-2 bg-white"
              type="text"
              name="fullName"
              placeholder="Jhon..."
              value={info.fullName}
              onChange={(e) => setInfo({ ...info, fullName: e.target.value })}
              required
            />
            <label className="text-xl font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="rounded border border-gray-700 text-gray-700 p-2 bg-white"
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
              className="rounded border bg-white border-gray-700 text-gray-700 p-2"
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
          {store.auth.loading ? "Loading..." : "Register"}
        </button>
        <div>
          <Link href="/login" className="text-blue-500 underline my-5">
            Already have account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
