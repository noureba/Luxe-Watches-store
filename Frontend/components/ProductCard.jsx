import React from "react";
import Image from "next/image";
import { IoBagOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import Link from "next/Link";

function ProductCard(Props) {
  return (
    <Link href={`/shop/${Props.title}`}>
      <div className="border border-gray-200 rounded-lg p-4 cursor-pointer">
        <div className="relative">
          <Image
            src={Props.productImage}
            width={300}
            height={300}
            alt="product image"
          />
          <i className="absolute top-0 right-0 bg-gray-900 text-white p-2 rounded-bl-lg">
            <IoBagOutline />
          </i>
        </div>
        <div>
          <div className="flex justify-between gap-2">
            <h3 className="text-gray-900 font-medium text-lg">{Props.title}</h3>
            <div className="flex flex-col items-center">
              <p className="text-green-500 font-medium text-lg">
                ${Props.price}
              </p>
              <p className="text-gray-500 line-through">${Props.salePrice}</p>
            </div>
          </div>
          <p className="text-gray-500">{Props.category}</p>
          <div className="flex items-center gap-2">
            <i className="text-yellow-500">
              <IoStar />
            </i>
            <p className="text-gray-500">{Props.reviews}</p>
            <p className="text-gray-500">({Props.reviewsCount})</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
