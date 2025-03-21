"use client";
import React from "react";
import productImage from "../../../public/product.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

function page() {
  const cart = useSelector((state) => state.cartItems);
  console.log(cart);

  return (
    <div className="my-20 mx-10 ">
      {cart.length == 0 ? (
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-gray-700 text-3xl font-bold">Items not found</h1>
          <Link className="bg-gray-700 text-white py-3 px-6" href="/shop">
            Go back to shop
          </Link>
        </div>
      ) : (
        <div>
          <h3 className=" font-bold text-2xl my-5">Cart</h3>
          <div className="flex  flex-wrap justify-between gap-10 ">
            {/*cart table */}
            <div className="grow-2 overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 border border-gray-300">
                      Pruduct
                    </th>
                    <th className="px-4 py-2 border border-gray-300">
                      Product Title
                    </th>
                    <th className="px-4 py-2 border border-gray-300">Price</th>
                    <th className="px-4 py-2 border border-gray-300">
                      Quantity
                    </th>
                    <th className="px-4 py-2 border border-gray-300">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr className="hover:bg-gray-100" key={index}>
                      <td className="px-4 py-2 border border-gray-300">
                        <Image
                          src={item.image}
                          alt="product"
                          width={100}
                          height={100}
                        />
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        {item.title}
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        {item.salePrice}$
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        <div className="flex gap-1  rounded">
                          <button className="border p-2 bg-gray-100 rounded-full cursor-pointer">
                            -
                          </button>
                          <input
                            type="number"
                            className="border  border-gray-500 p-2 bg-gray-100 rounded w-20 text-center focus:outline-none"
                            value={item.quantity}
                            readOnly
                          />
                          <button className="border p-2 bg-gray-100 rounded-full cursor-pointer">
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        {item.quantity * item.salePrice}$
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/*cart card */}
            <div className="border grow-1 flex flex-col gap-5  border-gray-500 rounded p-4">
              <h3 className=" font-bold text-2xl">Total</h3>
              <div className="border-t border-gray-500 flex justify-between items-center gap-4">
                <h3 className="text-xl font-medium text-gray-700">Subtotal:</h3>
                <p className="text-xl  text-gray-700">543$</p>
              </div>
              <div className="border-t border-gray-500 flex items-center justify-between gap-4">
                <h3 className="text-xl font-medium text-gray-700">Shipping:</h3>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="option1"
                    name="options"
                    value="1"
                    checked="1"
                    className="h-5 w-5 text-blue-500 border-gray-300 focus:ring-blue-500"
                    readOnly
                  />
                  <label htmlFor="option1" className="text-gray-700 text-xl">
                    Free shipping
                  </label>
                </div>
              </div>
              <div className="border-t border-gray-500 flex justify-between items-center gap-4">
                <h3 className="text-xl font-medium text-gray-700">Total :</h3>
                <p className="text-xl text-gray-700">543$</p>
              </div>
              <button className="bg-gray-900 text-xl py-3 rounded text-white">
                Ckeckout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
