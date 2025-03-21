import React from "react";
import ProductCard from "./ProductCard";
import product from "../public/product.png";

function BestSellers() {
  return (
    <>
      <div className="my-20 mx-10">
        <div className="mb-4">
          <p className="text-3xl text-gray-900 font-medium">
            Best Sellers.{" "}
            <span className="text-gray-500">Best selling of the month</span>
          </p>
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

export default BestSellers;
