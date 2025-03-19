import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { FaImage } from "react-icons/fa";

function Products() {
  return (
    <div className="my-20 md:mx-5 mr-10  md:w-[90%] w-[70%]">
      <div className="flex gap-3 justify-start items-buttom mb-4">
        <h3 className="font-bold text-3xl">Products</h3>
        <span className="border border-[#8ECAE6] border-0 border-b-5 w-[100px] mb-2"></span>
      </div>
      <div className="overflow-x-auto ">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-gray-300">Product id</th>
              <th className="px-4 py-2 border border-gray-300">Product name</th>
              <th className="px-4 py-2 border border-gray-300">Price</th>
              <th className="px-4 py-2 border border-gray-300">Sale Price</th>
              <th className="px-4 py-2 border border-gray-300">stock</th>
              <th className="px-4 py-2 border border-gray-300">Images</th>
              <th className="px-4 py-2 border border-gray-300">others</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border border-gray-300">12345</td>
              <td className="px-4 py-2 border border-gray-300">luxe watche</td>
              <td className="px-4 py-2 border border-gray-300">24$</td>
              <td className="px-4 py-2 border border-gray-300">14$</td>
              <td className="px-4 py-2 border border-gray-300">148</td>
              <td className="px-4 py-2 border border-gray-300">
                <div className="flex flex-wrap gap-4">
                  <div className="border border-gray-300 px-2 py-1 flex items-center rounded corsur-pointer">
                    <i className="text-gray-500 text-6xl">
                      <FaImage />
                    </i>
                  </div>
                  <div className="border border-gray-300 px-2 py-1 flex items-center rounded corsur-pointer">
                    <i className="text-gray-500 text-6xl">
                      <FaImage />
                    </i>
                  </div>
                  <div className="border border-gray-300 px-2 py-1 flex items-center rounded corsur-pointer">
                    <i className="text-gray-500 text-6xl">
                      <FaImage />
                    </i>
                  </div>
                  <div className="border border-gray-300 px-2 py-1 flex items-center rounded corsur-pointer">
                    <i className="text-gray-500 text-6xl">
                      <FaImage />
                    </i>
                  </div>
                </div>
              </td>
              <td className="flex flex-wrap justify-around items-center gap-2 px-2 py-2">
                <button className="flex justify-around items-center bg-green-600 text-white px-2 py-1 rounded gap-2">
                  <i>
                    <CiEdit className="text-white" />
                  </i>
                  <p className="text-white">Edit</p>
                </button>
                <button className="flex justify-around items-center bg-red-600 text-white px-2 py-1 rounded gap-2">
                  <i>
                    <MdDeleteOutline className="text-white" />
                  </i>
                  <p className="text-white">Delete</p>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
