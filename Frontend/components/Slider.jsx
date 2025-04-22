"use client";
import React from "react";
import Image from "next/image";
import SlideOne from "../public/slideOne.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Link from "next/link";

export default function App() {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="slider"
      >
        <SwiperSlide>
          <div className="relative overflow-hidden">
            <Image
              className=" min-h-80 object-cover"
              src={SlideOne}
              width="100%"
              height="100%"
              alt="slider one"
            />
            <div className="absolute lg:top-[30%] top-10 md:left-20 left-10 z-10 text-gray-900 ">
              <h3 className="font-bold lg:text-6xl text-3xl md:max-w-[60%]">
                Experience the Art of Watchmaking
              </h3>
              <p className="text-gray-900 lg:my-10 my-5 text-wrap">
                Browse our curated collection of iconic timepieces from Rolex,
                <br /> Audemars Piguet, Patek Philippe, and more.
              </p>
              <Link
                href="/shop"
                className="bg-gray-700 font-medium text-xl text-white py-2 px-6 rounded"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative ">
            <Image
              className=" min-h-72 object-cover"
              src={SlideOne}
              width="100%"
              height="100%"
              alt="slider one"
            />
            <div className="absolute lg:top-[30%] top-10 md:left-20 left-10 z-10 text-gray-900">
              <h3 className="font-bold 2xl:text-6xl text-3xl lg:max-w-[60%]">
                Experience the Art of Watchmaking
              </h3>
              <p className="text-gray-900 md:my-10 my-5 text-wrap">
                Browse our curated collection of iconic timepieces from Rolex,
                <br /> Audemars Piguet, Patek Philippe, and more.
              </p>
              <Link
                href="/shop"
                className="bg-gray-700 lg:font-medium text-xl text-white py-2 px-6 rounded"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
