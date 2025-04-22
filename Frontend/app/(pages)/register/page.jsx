import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="flex justify-center items-center h-screen p-10">
      <div className="flex flex-col gap-4 justify-center  bg-blue-100 min-w-[350px] md:min-w-[500px] p-10 my-20 mx-10 border border-gray-500 rounded" >
        <h1 className="text-2xl my-5 text-gray-700 font-bold text-center">Regitser</h1>
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
              required
            />
            <label className="text-xl font-medium" htmlFor="fullName">
              Password
            </label>
            <input
              className="rounded border bg-white border-gray-700 text-gray-700 p-2"
              type="password"
              name="fullName"
              required
            />
          </div>
        </div>
        <button className="bg-gray-700 text-white py-2 px-4 rounded cursor-pointer">Sing up</button>
        <div>
            <Link href="/login" className="text-blue-500 underline my-5">Already have account</Link>
        </div>
      </div>
    </div>
  );
}

export default page;
