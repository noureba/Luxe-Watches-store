import React from "react";
import Link from "next/link";

function page() {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="text-lg text-blue-500 hover:text-blue-700 transition duration-300"
          >
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
