"use client";
import React from "react";
import Image from "next/image";
import SlideOne from "../public/slideOne.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

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
          <div className="relative">
            <Image src={SlideOne} width="100%" height="100%" alt="slider one" />
            <div className="absolute md:top-[40%] top-5 md:left-20 left-10 z-10 text-gray-900">
              <h3 className="font-bold md:text-4xl text-2xl">
                Experience the Art of Watchmaking
              </h3>
              <p className="text-gray-700 my-5">
                Browse our curated collection of iconic timepieces from Rolex,
                <br /> Audemars Piguet, Patek Philippe, and more.
              </p>
              <button className="bg-gray-700 text-white py-2 px-4 rounded">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image src={SlideOne} width="100%" height="100%" alt="slider one" />
            <div className="absolute md:top-[40%] top-5 md:left-20 left-10 z-10 text-gray-900">
              <h3 className="font-bold md:text-4xl text-2xl">
                Experience the Art of Watchmaking
              </h3>
              <p className="text-gray-700 my-5">
                Browse our curated collection of iconic timepieces from Rolex,
                <br /> Audemars Piguet, Patek Philippe, and more.
              </p>
              <button className="bg-gray-700 text-white py-2 px-4 rounded">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
