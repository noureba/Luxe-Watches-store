import React from "react";

function page() {
  return (
    <div className="flex justify-center items-center h-screen p-10">
      <div className="flex flex-col gap-4 justify-center  p-10 my-20 border border-gray-500 rounded" >
        <h1 className="text-2xl my-5 text-gray-700 font-bold text-center">Reset Password</h1>
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
          </div>
        </div>
        <button className="bg-gray-700 text-white py-2 px-4 rounded cursor-pointer">Send Email</button>
      </div>
    </div>
  );
}

export default page;
