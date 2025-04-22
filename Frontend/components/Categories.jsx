"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
function Categories() {
  return (
    <>
      <div className=" my-20 md:ml-10 ml-5">
        <div className="mb-4">
          <p className="text-3xl text-gray-900 font-medium">
            Start exploring.{" "}
            <span className="text-gray-500">
              Good things are waiting for you
            </span>
          </p>
        </div>
        <Swiper
          slidesPerView={1.5}
          breakpoints={{
            320: { slidesPerView: 1.5 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1200: { slidesPerView: 3.5 },
            1400: { slidesPerView: 4.5 },
          }}
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
            <div className="flex justify-center gap-1 items-center border border-gray-700 rounded p-2  min-h-[140px] min-w-[150x]">
              <div className="flex flex-col items-start  gap-2">
                <h3 className="font-bold text-xl text-gray-700 ">For Men's </h3>
                <p className="text-gray-500">Starting at $24</p>
              </div>
              <Link
                className="flex  justify-center items-center gap-2 text-gray-700 px-4 py-2"
                href="/shop"
              >
                Shop now
                <i className="text-gray-700 text-4xl hidden md:block">
                  <FaArrowRightLong />
                </i>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center gap-1 items-center border border-gray-700 rounded min-h-[140px] p-2 min-w-[200px]">
              <div className="flex flex-col items-start  gap-2">
                <h3 className="font-bold text-xl text-gray-700 ">For Women's</h3>
                <p className="text-gray-500">Starting at $19</p>
              </div>
              <Link
                className="flex  justify-center items-center gap-2 text-gray-700 px-4 py-2"
                href="/shop"
              >
                Shop now
                <i className="text-gray-700 text-4xl hidden md:block">
                  <FaArrowRightLong />
                </i>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center gap-1 items-center border border-gray-700 rounded min-h-[140px] p-2 min-w-[200px]">
              <div className="flex flex-col items-start  gap-2">
                <h3 className="font-bold text-xl text-gray-700 ">Accessories</h3>
                <p className="text-gray-500">Explore accessories</p>
              </div>
              <Link
                className="flex  justify-center items-center gap-2 text-gray-700 px-4 py-2"
                href="/shop"
              >
                Shop now
                <i className="text-gray-700 text-4xl hidden md:block">
                  <FaArrowRightLong />
                </i>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center gap-1 items-center border border-gray-700 rounded min-h-[140px] p-2 min-w-[200px]">
              <div className="flex flex-col items-start  gap-2">
                <h3 className="font-bold text-xl text-gray-700 ">Accessories</h3>
                <p className="text-gray-500">Explore accessories</p>
              </div>
              <Link
                className="flex  justify-center items-center gap-2 text-gray-700 px-4 py-2"
                href="/shop"
              >
                Shop now
                <i className="text-gray-700 text-4xl hidden md:block">
                  <FaArrowRightLong />
                </i>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center gap-1 items-center border border-gray-700 rounded min-h-[140px] p-2 min-w-[200px]">
              <div className="flex flex-col items-start  gap-2">
                <h3 className="font-bold text-xl text-gray-700 ">Accessories</h3>
                <p className="text-gray-500">Explore accessories</p>
              </div>
              <Link
                className="flex  justify-center items-center gap-2 text-gray-700 px-4 py-2"
                href="/shop"
              >
                Shop now
                <i className="text-gray-700 text-4xl hidden md:block">
                  <FaArrowRightLong />
                </i>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center gap-4 items-center border border-gray-700 rounded min-h-[140px] p-2 min-w-[200px]">
              <div className="flex flex-col items-start  gap-2">
                <h3 className="font-bold text-xl text-gray-700 ">Accessories</h3>
                <p className="text-gray-500">Explore accessories</p>
              </div>
              <Link
                className="flex justify-center items-center gap-2 text-gray-700 px-4 py-2"
                href="/shop"
              >
                Shop now
                <i className="text-gray-700 text-4xl hidden md:block">
                  <FaArrowRightLong />
                </i>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Categories;
