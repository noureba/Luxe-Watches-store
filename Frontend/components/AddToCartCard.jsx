"use client";
import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/actions";
import productImage from "../public/product.png";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

function AddToCartCard() {
  const dispach = useDispatch();
  const cart = useSelector((state) => state.cartItems);
  const [quantity, setQuantity] = useState(1);
  const product = {
    id: "45678",
    title: "product name",
    price: 34,
    salePrice: 19,
    quantity: quantity,
    image: productImage,
    category: "Mens watch",
    brand: "Boos",
    rating: 4.5,
    reviews: 33,
    stock: 100,
    size: ["S", "M", "L", "XL"],
  };

  const handelrAddToCart = (pro) => {
    ;
  };

  console.log("form cart", cart);

  return (
    <>
      <div className="flex flex-col grow-1 gap-5 border rounded border-gray-300  shadow-md md:px-20 p-8">
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <i className="text-yellow-500">
              <IoStar />
            </i>
            <p className="text-gray-500">{product.rating}</p>
            <p className="text-gray-500">({product.reviews}) Reviews</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-green-500 font-medium text-lg">
              {product.salePrice} $
            </p>
            <p className="text-gray-500 line-through">{product.price} $</p>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
        </div>
        <div>
          <ul>
            <li className="text-gray-500">Brand: {product.brand}</li>
            <li className="text-gray-500">Category: {product.category}</li>
            <li className="text-gray-500">
              Availability:{" "}
              {product.stock ? (
                <span className="text-green-500">In Stock</span>
              ) : (
                <span className="text-red-500">out Stock</span>
              )}
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p>Size:</p>
          <div className="flex gap-2">
            {product.size.map((item, index) => (
              <button
                className="border border-gray-500 py-2 px-4 rounded"
                key={index}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex gap-1  rounded">
            <button
              className="border p-2 bg-gray-100 rounded-full cursor-pointer"
              onClick={() => setQuantity(quantity - 1)}
            >
              -
            </button>
            <input
              type="number"
              className="border  border-gray-500 p-2 bg-gray-100 rounded w-20 text-center focus:outline-none"
              value={quantity}
              readOnly
            />
            <button
              className="border p-2 bg-gray-100 rounded-full cursor-pointer"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <button
            className="bg-gray-900 text-xl rounded text-white py-3 px-6 cursor-pointer"
            onClick={() => dispach(addToCart(product))}
          >
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
  );
}

export default AddToCartCard;
