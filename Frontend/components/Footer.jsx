import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <div className="flex flex-wrap justify-between gap-4 p-4 border-t border-t-gray-500 px-10 py-20">
          <div>
            <Image src={logo} width={100} alt="logo" />
            <ul className="flex flex-col gap-4">
              <li className="flex  items-center gap-2 ">
                <i className="text-2xl text-gray-700">
                  <FaFacebook />
                </i>
                <Link className=" text-gray-700" href="#">
                  Facebook
                </Link>
              </li>
              <li className="flex  items-center gap-2 ">
                <i className="text-2xl text-gray-700">
                  <FaInstagramSquare />
                </i>
                <Link className=" text-gray-700" href="#">
                  Instagram
                </Link>
              </li>
              <li className="flex  items-center gap-2 ">
                <i className="text-2xl text-gray-700">
                  <FaFacebook />
                </i>
                <Link className=" text-gray-700" href="#">
                  Youtube
                </Link>
              </li>
              <li className="flex  items-center gap-2 ">
                <i className="text-2xl text-gray-700">
                  <IoLogoYoutube />
                </i>
                <Link className=" text-gray-700" href="#">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-medium my-5">Our Store</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-medium my-5">Our Store</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-medium my-5">Our Store</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap md:justify-between justify-center items-center border-t border-t-gray-500 px-10">
          <p className="text-center text-gray-700 py-5">
            &copy; 2025 All rights reserved, By noureddine bachikh
          </p>
          <ul className="flex gap-2 justify-center items-center p-5">
            <li>
              <i className="text-3xl">
                <FaCcVisa />
              </i>
            </li>
            <li>
              <i className="text-3xl">
                <FaCcMastercard />
              </i>
            </li>
            <li>
              <i className="text-3xl">
                <FaCcStripe />
              </i>
            </li>
            <li>
              <i className="text-3xl">
                <FaCcPaypal />
              </i>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
