import React from 'react';

function Page() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Return Policy</h1>
        
        <p className="text-lg text-gray-700 mb-4">
          At Luxe Watches, we want to ensure you're completely satisfied with your purchase. If you’re not happy with your order, we’ll gladly accept returns according to our Return Policy.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Eligibility for Returns</h2>
        <p className="text-lg text-gray-700 mb-4">
          To be eligible for a return, your item must meet the following criteria:
        </p>
        <ul className="list-disc pl-5 mb-4 text-lg text-gray-700">
          <li>The item must be unused, in the same condition that you received it.</li>
          <li>It must be in the original packaging with all tags attached.</li>
          <li>Returns must be requested within 30 days of purchase.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Non-Returnable Items</h2>
        <p className="text-lg text-gray-700 mb-4">
          Unfortunately, we cannot accept returns on the following items:
        </p>
        <ul className="list-disc pl-5 mb-4 text-lg text-gray-700">
          <li>Gift cards</li>
          <li>Items marked as "final sale" or purchased at a discounted price</li>
          <li>Personalized or customized products</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">How to Return an Item</h2>
        <p className="text-lg text-gray-700 mb-4">
          To initiate a return, please follow these steps:
        </p>
        <ul className="list-disc pl-5 mb-4 text-lg text-gray-700">
          <li>Contact us at <a href="mailto:support@luxewatches.com" className="text-blue-500">support@luxewatches.com</a> to request a return authorization.</li>
          <li>We will provide you with the return shipping instructions and address.</li>
          <li>Pack the item securely, including your order confirmation or receipt.</li>
          <li>Ship the item to the provided return address.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Refunds</h2>
        <p className="text-lg text-gray-700 mb-4">
          Once we receive and inspect your returned item, we will notify you about the approval or rejection of your refund.
        </p>
        <ul className="list-disc pl-5 mb-4 text-lg text-gray-700">
          <li>If your return is approved, we will issue a refund to your original payment method.</li>
          <li>The refund will typically be processed within 7-10 business days, depending on your payment provider.</li>
          <li>If your return is rejected (e.g., item is damaged, missing parts), we will notify you via email.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Exchanges</h2>
        <p className="text-lg text-gray-700 mb-4">
          We do not offer direct exchanges. If you wish to exchange an item, you will need to return the original item and place a new order for the item you'd like to exchange for.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Shipping Costs for Returns</h2>
        <p className="text-lg text-gray-700 mb-4">
          Customers are responsible for the return shipping costs. However, if the item is defective or damaged upon arrival, we will cover the return shipping cost.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Return Address</h2>
        <p className="text-lg text-gray-700 mb-4">
          Please return your items to the following address:
        </p>
        <address className="text-lg text-gray-700 mb-4">
          Luxe Watches<br />
          123 Luxury Avenue, Fashion City, State, Country<br />
          Zip Code: 12345
        </address>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          If you have any questions or need assistance with your return, please don't hesitate to contact us.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Email: <a href="mailto:support@luxewatches.com" className="text-blue-500">support@luxewatches.com</a>
        </p>
      </div>
    </div>
  );
}

export default Page;
