import React from "react";
import ProductCard from "./ProductCard";
import product from "../public/product.png";
function Recommendations() {
  return (
    <>
      <div className="my-20 md:mx-10 mx-5">
        <div className="mb-4">
          <p className="text-3xl text-gray-900 font-medium">
            Recommendations.
            <span className="text-gray-500">
              Best matching products for you
            </span>
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

export default Recommendations;
