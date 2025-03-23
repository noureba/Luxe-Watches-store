import React from "react";
import banner from "../public/banner.png";
import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <>
      <div className="my-20 flex justify-center">
        <div className="relative">
          <Image src={banner} width={1000} height="100%" alt="banner" />
          <div className="absolute md:top-[30%] top-5 md:left-20 left-10 z-10 text-white">
            <h3 className="font-bold md:text-4xl text-2xl">
            100% Original Products
            </h3>
            <p className="text-gray-100 my-5">
              Browse our curated collection of iconic timepieces from Rolex,
              <br /> Audemars Piguet, Patek Philippe, and more.
            </p>
            <Link href="/shop" className="bg-white text-gray-700 py-2 px-4 rounded">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
