"use client";
import React, { useEffect, useState } from "react";
import productImage from "../../../public/product.png";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import {
  changeShippingMethod,
  removeFromCart,
  updateQuantity,
} from "../../../redux/actions/cartActions";
import { IoMdCloseCircleOutline } from "react-icons/io";

function page() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.cart);
  const [cartLength, setCartLength] = useState(0);

  const [selectedShipping, setSelectedShipping] = useState(store.Shipping);

  const handleShippingChange = (e) => {
    setSelectedShipping(e.target.value);
    dispatch(changeShippingMethod(e.target.value));
  };

  useEffect(() => {
    setCartLength(store.items.length);
  });

  return (
    <div className="my-20 mx-10 ">
      {cartLength == 0 ? (
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
                    <th className="px-4 py-2 border border-gray-300"></th>
                  </tr>
                </thead>
                <tbody>
                  {store.items.map((item, index) => (
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
                          <button
                            className="border p-2 bg-gray-100 rounded-full cursor-pointer"
                            onClick={() =>
                              dispatch(
                                updateQuantity(
                                  item.id,
                                  Math.max(1, item.quantity - 1)
                                )
                              )
                            }
                          >
                            -
                          </button>
                          <input
                            type="number"
                            className="border  border-gray-500 p-2 bg-gray-100 rounded w-20 text-center focus:outline-none"
                            value={item.quantity}
                            onChange={(e) => {
                              const newQuantity = Math.max(
                                1,
                                parseInt(e.target.value) || 1
                              );
                              dispatch(updateQuantity(item.id, newQuantity));
                            }}
                          />
                          <button
                            className="border p-2 bg-gray-100 rounded-full cursor-pointer"
                            onClick={() =>
                              dispatch(
                                updateQuantity(item.id, item.quantity + 1)
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        {item.quantity * item.salePrice}$
                      </td>
                      <td
                        className="px-4 py-2 border border-gray-300"
                        onClick={() => dispatch(removeFromCart(item))}
                      >
                        <i className="text-xl text-red-500">
                          <IoMdCloseCircleOutline />
                        </i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/*cart card */}
            <div className="border grow-1 flex flex-col gap-5  border-gray-500 rounded p-4">
              <h3 className=" font-bold text-2xl">Total</h3>
              <div className="border-t border-gray-500 flex justify-between items-center gap-4 py-2">
                <h3 className="text-xl font-medium text-gray-700">Subtotal:</h3>
                <p className="text-xl  text-gray-700">{store.Subtotal}$</p>
              </div>
              <div className="border-t border-gray-500 flex items-center justify-between gap-4 py-2">
                <h3 className="text-xl font-medium text-gray-700">Shipping:</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="shipping"
                        value="Free"
                        checked={selectedShipping === "Free"}
                        onChange={handleShippingChange}
                        className="text-blue-500 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">
                        Free shipping (10-15 days)
                      </span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="shipping"
                        value="Standard"
                        checked={selectedShipping === "Standard"}
                        onChange={handleShippingChange}
                        className="text-blue-500 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">
                        Standard shipping (5-7 days) +10$
                      </span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="shipping"
                        value="Express"
                        checked={selectedShipping === "Express"}
                        onChange={handleShippingChange}
                        className="text-blue-500 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">
                        Express shipping (3-2 days) +25$
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-500 flex justify-between items-center gap-4 py-2">
                <h3 className="text-xl font-medium text-gray-700">Total :</h3>
                <p className="text-xl text-gray-700">{store.totalPrice}$</p>
              </div>
              <Link
                className="bg-gray-900 text-xl py-3 rounded text-white text-center"
                href="/checkout"
              >
                Ckeckout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
