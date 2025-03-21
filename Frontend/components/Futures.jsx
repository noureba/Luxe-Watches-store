"use client";
import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import { BiDollar } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
function Futures() {
  return (
    <>
      <div className="lg:flex hidden flex-wrap justify-center gap-4 items-center my-10">
        <div className="flex justify-center gap-4 items-center border border-gray-700 rounded p-4 min-w-[300px]">
          <div>
            <i className="text-gray-700 text-4xl">
              <FaShippingFast />
            </i>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="font-bold text-2xl text-gray-700">Free shipping</h3>
            <p className="text-gray-500">On orders over $50.00</p>
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center border border-gray-700 rounded p-4 min-w-[300px]">
          <div>
            <i className="text-gray-700 text-4xl">
              <GiReturnArrow />
            </i>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="font-bold text-2xl text-gray-700">
              Very easy to return
            </h3>
            <p className="text-gray-500">Just phone number</p>
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center border border-gray-700 rounded p-4 min-w-[300px]">
          <div>
            <i className="text-gray-700 text-4xl">
              <BiWorld />
            </i>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="font-bold text-2xl text-gray-700">
              Worldwide delivery
            </h3>
            <p className="text-gray-500">Fast delivery worldwide</p>
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center border border-gray-700 rounded p-4 min-w-[300px]">
          <div>
            <i className="text-gray-700 text-4xl">
              <BiDollar />
            </i>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="font-bold text-2xl text-gray-700">Refunds policy</h3>
            <p className="text-gray-500">60 days return for any reason</p>
          </div>
        </div>
      </div>
      <div className="lg:hidden my-10 ml-4">
        <Swiper
          slidesPerView={1.5}
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
            <div className="flex justify-center gap-4 items-center border border-gray-700 rounded p-4 min-w-[300px]">
              <div>
                <i className="text-gray-700 text-4xl">
                  <FaShippingFast />
                </i>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3 className="font-bold text-xl text-gray-700">
                  Free shipping
                </h3>
                <p className="text-gray-500">On orders over $50.00</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center gap-4 items-center border border-gray-700 rounded p-4 min-w-[300px]">
              <div>
                <i className="text-gray-700 text-4xl">
                  <GiReturnArrow />
                </i>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3 className="font-bold text-xl text-gray-700">
                  Very easy to return
                </h3>
                <p className="text-gray-500">Just phone number</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center gap-4 items-center border border-gray-700 rounded p-4 min-w-[300px]">
              <div>
                <i className="text-gray-700 text-4xl">
                  <BiWorld />
                </i>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3 className="font-bold text-xl text-gray-700">
                  Worldwide delivery
                </h3>
                <p className="text-gray-500">Fast delivery worldwide</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center gap-4 items-center border border-gray-700 rounded p-4 min-w-[300px]">
              <div>
                <i className="text-gray-700 text-4xl">
                  <BiDollar />
                </i>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h3 className="font-bold text-xl text-gray-700">
                  Refunds policy
                </h3>
                <p className="text-gray-500">60 days return for any reason</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Futures;
