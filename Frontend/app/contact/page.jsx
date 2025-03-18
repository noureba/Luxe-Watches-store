import React from "react";
import ContactForm from "../../components/ContactForm";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function page() {
  return (
    <div className="my-20 md:mx-20 mx-10">
      <div className="flex flex-wrap justify-around items-center">
        <div className="flex flex-col justify-start gap-4 items-start my-10">
        <h3 className='text-2xl my-10 text-gray-700 font-bold'>Get in touch with us</h3>

          <div className="flex justify-center gap-4 items-center border border-gray-700 rounded p-4 min-w-[300px]">
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
          <div className="flex justify-center gap-4 items-center border border-gray-700 rounded p-4 min-w-[300px]">
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
          <div className="flex justify-center gap-4 items-center border border-gray-700 rounded p-4 min-w-[300px]">
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
        <div>
        <ContactForm />
      </div>
      </div>
      
    </div>
  );
}

export default page;
