import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="flex justify-center items-center h-screen p-10">
      <div className="flex flex-col gap-4 justify-center  p-10 my-20 border border-gray-500 rounded" >
        <h1 className="text-2xl my-5 text-gray-700 font-bold text-center">Login</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xl font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="rounded border border-gray-700 text-gray-700 p-2 w-[400px]"
              type="email"
              name="email"
              placeholder="example@gmail.com"
              required
            />
            <label className="text-xl font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="rounded border border-gray-700 text-gray-700 p-2 w-[400px]"
              type="password"
              name="password"
              required
            />
          </div>
        </div>
        <button className="bg-gray-700 text-white py-2 px-4 rounded cursor-pointer">Login</button>
        <div>
            <Link href="/reset-password" className="text-blue-500 underline my-5">Forget Password</Link>
        </div>
      </div>
    </div>
  );
}

export default page;
