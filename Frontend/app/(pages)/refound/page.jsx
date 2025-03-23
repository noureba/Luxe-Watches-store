import React from 'react';

function Page() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Refund Policy</h1>
        
        <p className="text-lg text-gray-700 mb-4">
          At Luxe Watches, we want you to be completely satisfied with your purchase. If you are not happy with your order, we're here to help.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Returns</h2>
        <p className="text-lg text-gray-700 mb-4">
          We accept returns within 30 days of purchase. To be eligible for a return, the item must be unused, in its original packaging, and with all original tags attached.
        </p>
        <ul className="list-disc pl-5 mb-4 text-lg text-gray-700">
          <li>Items must be returned in their original condition.</li>
          <li>Returns must be processed within 30 days from the date of purchase.</li>
          <li>Items purchased on sale are not eligible for returns or exchanges.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Refunds</h2>
        <p className="text-lg text-gray-700 mb-4">
          Once we receive your returned item, we will inspect it and notify you of the approval or rejection of your refund. If your return is approved, we will process the refund to your original method of payment.
        </p>
        <ul className="list-disc pl-5 mb-4 text-lg text-gray-700">
          <li>Refunds are issued to the original payment method.</li>
          <li>It may take up to 10 business days for the refund to appear in your account depending on your bank or payment provider.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Exchanges</h2>
        <p className="text-lg text-gray-700 mb-4">
          If you need to exchange an item, please contact our support team to initiate the process. We will exchange the product if it is defective or damaged upon arrival.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">How to Return Your Item</h2>
        <p className="text-lg text-gray-700 mb-4">
          To return an item, please follow the steps below:
        </p>
        <ul className="list-disc pl-5 mb-4 text-lg text-gray-700">
          <li>Contact us at support@luxewatches.com to request a return authorization.</li>
          <li>Pack the item securely in the original packaging (if possible), along with the original receipt or proof of purchase.</li>
          <li>Send the item to the provided return address.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Non-returnable Items</h2>
        <p className="text-lg text-gray-700 mb-4">
          The following items are not eligible for returns or exchanges:
        </p>
        <ul className="list-disc pl-5 mb-4 text-lg text-gray-700">
          <li>Gift cards</li>
          <li>Sale items (unless defective)</li>
          <li>Personalized or custom items</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          If you have any questions or need further assistance regarding your return or refund, please don't hesitate to reach out to us.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Email: <a href="mailto:support@luxewatches.com" className="text-blue-500">support@luxewatches.com</a>
        </p>
      </div>
    </div>
  );
}

export default Page;
