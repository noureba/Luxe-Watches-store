"use client"
import React, { useState } from "react";
import Image from "next/image";

export default function SingleProductImage(Props) {
    const [mainImage, setMainImage]=useState(Props.image)
  return (
    <>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <div>
            <Image
              className="rounded"
              src={Props.image}
              width={100}
              height={100}
              alt="product image"
            />
          </div>
          <div>
            <Image
              className="rounded"
              src={Props.image}
              width={100}
              height={100}
              alt="product image"
            />
          </div>
          <div>
            <Image
              className="rounded"
              src={Props.image}
              width={100}
              height={100}
              alt="product image"
            />
          </div>
          <div>
            <Image
              className="rounded"
              src={Props.image}
              width={100}
              height={100}
              alt="product image"
            />
          </div>
        </div>
        <div>
          <Image
            className="rounded shadow-md"
            src={mainImage}
            width={500}
            height={500}
            alt="product image"
          />
        </div>
      </div>
    </>
  );
}
