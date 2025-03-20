import React from "react";
import SingleProductImage from "../../../../components/SingleProductImage";
import image from "../../../../public/product.png";
import Link from "next/Link";
import { FaHome } from "react-icons/fa";
import Reviews from "../../../../components/Reviews";
import ProductDesc from "../../../../components/ProductDesc";
import AddToCartCard from "../../../../components/AddToCartCard";
import AddReview from "../../../../components/AddReview";

function page() {
  return (
    <div className="my-20 md:mx-20 mx-10">
      <div>
        <div className="flex gap-1 justify-start items-center mb-4">
          <Link href="/">
            <i className="text-xl">
              <FaHome />
            </i>
          </Link>
          /
          <Link className="underline text-xl text-blue-500" href="/shop">
            shop
          </Link>
          /
          <Link className="underline text-xl text-blue-500" href="/shop">
            product titile
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-10">
        <div className="">
          <SingleProductImage image={image} />
        </div>
        <AddToCartCard />
      </div>
      <div className="border-t border-gray-300 mt-10">
        <ProductDesc />
        <Reviews />
        <AddReview/>
      </div>
    </div>
  );
}

export default page;
