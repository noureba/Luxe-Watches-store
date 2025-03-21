import React from "react";
import ProductCard from "../../../components/productCard";
import product from "../../../public/product.png";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

async function page() {
  return (
    <>
      <div className="my-20 mx-10">
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
        </div>
        <div className="flex flex-wrap gap-4">
            <ProductCard
              title="Boos luxe whatch"
              productImage={product}
              category="Mens"
              price="200"
              salePrice="149"
              reviews="4.5"
              reviewsCount="45"
            />
          <ProductCard
            title="Boos luxe whatch"
            productImage={product}
            category="Mens"
            price="200"
            salePrice="149"
            reviews="4.5"
            reviewsCount="45"
          />
          <ProductCard
            title="Boos luxe whatch"
            productImage={product}
            category="Mens"
            price="200"
            salePrice="149"
            reviews="4.5"
            reviewsCount="45"
          />
          <ProductCard
            title="Boos luxe whatch"
            productImage={product}
            category="Mens"
            price="200"
            salePrice="149"
            reviews="4.5"
            reviewsCount="45"
          />
        </div>
      </div>
    </>
  );
}

export default page;
