import React from "react";
import ContactForm from "../../../components/ContactForm";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function page() {
  return (
    <div className="my-10  md:mx-10 mx-5">
      <div className="flex flex-wrap justify-between items-center gap-20">
        <div className="flex flex-col justify-start gap-4 items-start">
          <div className="flex justify-start bg-blue-100 gap-4 items-center border border-gray-700 rounded p-4 min-w-[350px]">
            <div>
              <i className="text-gray-700 text-4xl">
                <MdOutlineMail />
              </i>
            </div>
            <div className="flex flex-col items-start gap-2">
              <h3 className="font-bold text-2xl text-gray-700">Email</h3>
              <p className="text-gray-500">contact@domain.com</p>
            </div>
          </div>
          <div className="flex justify-start bg-blue-100 gap-4 items-center border border-gray-700 rounded p-4 min-w-[350px]">
            <div>
              <i className="text-gray-700 text-4xl">
                <FaPhoneAlt />
              </i>
            </div>
            <div className="flex flex-col items-start gap-2">
              <h3 className="font-bold text-2xl text-gray-700">Phone</h3>
              <p className="text-gray-500">+1 765 354 863</p>
            </div>
          </div>
          <div className="flex justify-start bg-blue-100 gap-4 items-center border border-gray-700 rounded p-4 min-w-[350px]">
            <div>
              <i className="text-gray-700 text-4xl">
                <FaLocationDot />
              </i>
            </div>
            <div className="flex flex-col items-start gap-2">
              <h3 className="font-bold text-2xl text-gray-700">Adress</h3>
              <p className="text-gray-500">1234 Maple Street, Apt 56</p>
            </div>
          </div>
        </div>
        <div className=" grow">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default page;
