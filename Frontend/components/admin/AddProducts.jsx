import React from "react";
import { FaImage } from "react-icons/fa";

function AddProducts() {
  return (
    <div className="my-20 md:mx-5 mr-10 ">
      <div className="flex gap-3 justify-start items-buttom mb-4">
        <h3 className="font-bold text-3xl">Add product</h3>
        <span className="border border-[#8ECAE6] border-0 border-b-5 w-[100px] mb-2"></span>
      </div>
      <div>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Product name"
            className="border border-gray-300 px-2 py-1"
          />
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Product price"
              className="border border-gray-300 px-2 py-1"
            />
            <input
              type="text"
              placeholder="Product sale price"
              className="border border-gray-300 px-2 py-1"
            />
            <select
              id="choices"
              name="choices"
              className="mt-1 block p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="option1">Mens</option>
              <option value="option2">Womens</option>
              <option value="option3">Accesior </option>
            </select>
          </div>
          <textarea
            type="text"
            placeholder="Product description"
            className="border border-gray-300 px-2 py-1"
          />
          {/* Add product image*/}
          <div>
            <input
              type="uploads"
              placeholder="Product image"
              className="border border-gray-300 px-2 py-1 hidden"
            />
            <div className="flex flex-wrap gap-2">
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
          </div>
  
          <button className="bg-[#8ECAE6] text-white px-2 py-1 corsur-pointer rounded">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProducts;
