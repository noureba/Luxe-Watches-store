import React from "react";
import Image from "next/image";
import stroreWatchesOne from "../../../public/storeWatches1.png";
import stroreWatchesTwo from "../../../public/storeWatches2.png";

function page() {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center md:mx-20 mx-10 my-20">
        <div className="flex flex-col gap-5 md:max-w-[45%] my-10">
          <h3 className="text-4xl font-bold text-gray-700">About us</h3>
          <h4 className="font-medium text-xl text-gray-500">
            Welcome to Luxe watches – Where Time Meets Luxury
          </h4>
          <p className="text-gray-500">
            we believe that a watch is not just a timepiece—it is an expression
            of your unique style, a symbol of craftsmanship, and a legacy that
            transcends generations. As a premier destination for luxury watches,
            we curate only the finest, most prestigious brands, bringing you
            exclusive timepieces that represent unparalleled quality, elegance,
            and sophistication.
          </p>
        </div>
        <div>
          <Image
            className="rounded shadow-md"
            src={stroreWatchesOne}
            width={600}
            height={600}
            alt="store watches"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center md:mx-20 mx-10 my-20">
        <div>
          <Image
            className="rounded shadow-md"
            src={stroreWatchesTwo}
            width={600}
            height={600}
            alt="store watches"
          />
        </div>
        <div className="flex flex-col gap-5 md:max-w-[45%] my-10">
          <h4 className="font-medium text-xl text-gray-500">Our Story</h4>
          <p className="text-gray-500">
            We are more than just a store; we are a family of watch lovers
            dedicated to providing an unforgettable shopping experience. Our
            expert team combines extensive knowledge of the industry with a deep
            appreciation for the art of watchmaking. Whether you're looking for
            a classic dress watch, a durable sports model, or a one-of-a-kind
            limited edition, ou store is here to help you find the perfect piece
            to add to your collection.
          </p>
        </div>
      </div>
    </>
  );
}

export default page;
