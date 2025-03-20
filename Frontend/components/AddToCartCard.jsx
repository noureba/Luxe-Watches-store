import React from 'react'
import { IoStar } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import Link from "next/Link";

function AddToCartCard() {
  return (
    <>
        <div className="flex flex-col grow-1 gap-5 border rounded border-gray-300  shadow-md md:px-20 p-8">
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <i className="text-yellow-500">
                <IoStar />
              </i>
              <p className="text-gray-500">3.9</p>
              <p className="text-gray-500">(65) Reviews</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-green-500 font-medium text-lg">$123</p>
              <p className="text-gray-500 line-through">$432</p>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">Wactch bood luxe</h1>
          </div>
          <div>
            <ul>
              <li className="text-gray-500">Brand: Boos</li>
              <li className="text-gray-500">Category: Mens</li>
              <li className="text-gray-500">
                Availability: <span className="text-green-500">In Stock</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p>Size:</p>
            <div className="flex gap-2">
              <button className="border border-gray-500 py-2 px-4 rounded">
                S
              </button>
              <button className="border border-gray-500 py-2 px-4 rounded">
                M
              </button>
              <button className="border border-gray-500 py-2 px-4 rounded">
                L
              </button>
              <button className="border border-gray-500 py-2 px-4 rounded">
                XL
              </button>
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="flex gap-1  rounded">
              <button className="border p-2 bg-gray-100 rounded-full cursor-pointer">
                -
              </button>
              <input
                type="number"
                className="border  border-gray-500 p-2 bg-gray-100 rounded w-20 text-center focus:outline-none"
                value="1"
                readOnly
              />
              <button className="border p-2 bg-gray-100 rounded-full cursor-pointer">
                +
              </button>
            </div>
            <button className="bg-gray-900 text-xl rounded text-white py-3 px-6 cursor-pointer">
              Add to Cart
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p>Share:</p>
            <ul className="flex gap-2">
              <li className="flex  items-center gap-2 ">
                <Link className=" text-gray-700" href="#">
                  <i className="text-2xl text-gray-700">
                    <FaFacebook />
                  </i>
                </Link>
              </li>
              <li className="flex  items-center gap-2 ">
                <Link className=" text-gray-700" href="#">
                  <i className="text-2xl text-gray-700">
                    <FaInstagramSquare />
                  </i>
                </Link>
              </li>
              <li className="flex  items-center gap-2 ">
                <Link className=" text-gray-700" href="#">
                  <i className="text-2xl text-gray-700">
                    <FaFacebook />
                  </i>
                </Link>
              </li>
              <li className="flex  items-center gap-2 ">
                <Link className=" text-gray-700" href="#">
                  <i className="text-2xl text-gray-700">
                    <IoLogoYoutube />
                  </i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default AddToCartCard