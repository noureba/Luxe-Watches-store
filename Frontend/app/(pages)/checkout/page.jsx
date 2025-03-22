"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function page() {
  const store = useSelector((store) => store.cart);
  const [storeData, setStoreData] = useState(null);
  useEffect(() => {
    setStoreData(store);
  }, []);
  return (
    <div className="my-20 mx-10">
      <div className="flex flex-wrap gap-10 justify-between">
        <div className="grow-1">
          <form className="space-y-6">
            {/* Customer Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700">
                Customer Information
              </h3>
              <div>
                <label htmlFor="name" className="block text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-2 mt-2 border rounded-md text-gray-700"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-2 mt-2 border rounded-md text-gray-700"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-gray-600">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  className="w-full p-2 mt-2 border rounded-md text-gray-700"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-gray-600">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className="w-full p-2 mt-2 border rounded-md text-gray-700"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="grow-1 border border-gray-700 rounded p-8">
          <h3 className="text-2xl text-gray-700 font-bold border-b border-gray-500 py-4">
            Order Summary
          </h3>
          {storeData ? (
            <div>
              {storeData.items.map((item, index) => (
                <div className="flex justify-between mt-4" key={index}>
                  <p className="text-gray-700 font-medium">{item.title}</p>

                  <p className="text-gray-600">
                    {item.quantity} ×
                    <span className="text-green-500">{item.salePrice}$</span>
                  </p>
                </div>
              ))}
            </div>
          ) : null}
          <div className="flex justify-between mt-4">
            <div>
              <p className="text-gray-700 font-medium">Shipping:</p>
            </div>
            <div>
              <p className="text-gray-600">
                {storeData ? storeData.Shipping : 0}
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-4 border-t border-b border-gray-500 py-4">
            <div>
              <p className=" text-2xl text-gray-700 font-bold">Total:</p>
            </div>
            <div>
              <p className="text-green-500">
                {storeData ? storeData.totalPrice : 0}$
              </p>
            </div>
          </div>
          <div>
            {/* Payment Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700 font-medium">
                Payment Method
              </h3>

              {/* Radio Buttons for Payment Method */}
              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  value="creditCard"
                  className="h-5 w-5 text-blue-500 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="creditCard" className="text-gray-700">
                  Credit / Debit Card
                </label>
              </div>

              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  className="h-5 w-5 text-blue-500 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="paypal" className="text-gray-700">
                  PayPal
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center my-5">
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-600 focus:outline-none"
              >
                Complete Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
