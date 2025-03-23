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
          Terms and Conditions - Watch Store
        </h1>
      </header>

      {/* Terms and Conditions Content */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
          <p className="text-gray-700 text-lg">
            Welcome to the Watch Store. By accessing or using our website, you agree to
            comply with and be bound by these Terms and Conditions. Please read them carefully
            before making any purchases.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">General Terms</h2>
          <p className="text-gray-700 text-lg">
            These Terms apply to all users of the website, including but not limited to
            customers, vendors, and visitors. By accessing or using our site, you acknowledge
            and agree to these Terms and Conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Information</h2>
          <p className="text-gray-700 text-lg">
            We aim to provide accurate and up-to-date product information. However, we do not
            guarantee that the descriptions, pricing, or availability of products on our website
            are error-free.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ordering and Payment</h2>
          <p className="text-gray-700 text-lg">
            When you place an order on our website, you agree to pay the full amount, including
            taxes and shipping fees. We accept payment through various methods, including
            credit cards and PayPal.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping and Delivery</h2>
          <p className="text-gray-700 text-lg">
            We will process and ship your order as soon as possible. Delivery times may vary
            depending on your location and the shipping method chosen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Returns and Refunds</h2>
          <p className="text-gray-700 text-lg">
            Our return policy allows you to return products within a certain time frame. For
            more details, please visit our Return Policy page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Privacy Policy</h2>
          <p className="text-gray-700 text-lg">
            We respect your privacy. Please read our Privacy Policy to understand how we
            collect, use, and protect your personal information when you shop on our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700 text-lg">
            To the maximum extent permitted by law, we will not be liable for any indirect,
            incidental, or consequential damages that may result from using our website or
            purchasing products.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to the Terms</h2>
          <p className="text-gray-700 text-lg">
            We reserve the right to update or modify these Terms and Conditions at any time.
            Changes will be posted on this page with an updated "Last Updated" date. Please
            check this page periodically for any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 text-lg">
            If you have any questions about these Terms and Conditions, feel free to contact us:
          </p>
          <p className="text-gray-700 text-lg">
            Email: support@watchstore.com
          </p>
        </section>
      </div>
    </div>
  );
}

export default Page;
