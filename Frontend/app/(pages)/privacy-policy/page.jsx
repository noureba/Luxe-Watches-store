import React from "react";
import Image from "next/image";  
import Logo from "../../../public/logo.png";

function Page() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="text-center">
        <Image
          src={Logo}
          alt="Store Logo"
          width={100}
          height={100}
          className="mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy - Watch Store
        </h1>
      </header>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
          <p className="text-gray-700 text-lg">
            Welcome to the Watch Store. Your privacy is very important to us. This
            Privacy Policy outlines how we collect, use, and protect your personal
            information when you use our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
          <p className="text-gray-700 text-lg">
            We collect various types of information to provide and improve our
            services, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 text-lg">
            <li>Personal Information (name, email, shipping address)</li>
            <li>Payment Information (credit card, PayPal details)</li>
            <li>Device and Usage Data (browser type, IP address, etc.)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 text-lg">
            We use the collected information for various purposes, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 text-lg">
            <li>Processing your orders and delivering products</li>
            <li>Improving our website and services</li>
            <li>Providing customer support</li>
            <li>Sending promotional emails, if opted in</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Protection</h2>
          <p className="text-gray-700 text-lg">
            We implement various security measures to protect your personal
            information. These measures include encryption and secure data storage.
            However, no method of transmission over the Internet is 100% secure, and
            we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies</h2>
          <p className="text-gray-700 text-lg">
            Our website uses cookies to enhance your user experience. By continuing to
            browse the site, you agree to our use of cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to the Privacy Policy</h2>
          <p className="text-gray-700 text-lg">
            We may update this Privacy Policy from time to time. Any changes will be
            posted on this page with an updated "Last Updated" date. We encourage you to
            review this page periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 text-lg">
            If you have any questions about this Privacy Policy or how we handle your
            personal information, feel free to contact us at:
          </p>
          <p className="text-gray-700 text-lg">
            Email: support@exemple.com
          </p>
        </section>
      </div>
    </div>
  );
}

export default Page;
