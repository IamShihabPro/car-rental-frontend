import React from 'react';
import { FaDollarSign, FaCarSide, FaHeadset } from 'react-icons/fa';

const WhyChooseUs: React.FC = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-14">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col shadow-lg items-center p-8 bg-gray-800 rounded-lg transform hover:scale-105 transition-transform duration-300">
            <FaDollarSign className="text-6xl text-green-400 mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">Best Prices</h3>
            <p className="text-gray-300">
              We offer the best prices in the market with no hidden fees, ensuring you get the best deal.
            </p>
          </div>
          <div className="flex flex-col shadow-lg items-center p-8 bg-gray-800 rounded-lg transform hover:scale-105 transition-transform duration-300">
            <FaCarSide className="text-6xl text-blue-400 mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">Wide Selection</h3>
            <p className="text-gray-300">
              Choose from a wide range of vehicles, from luxury cars to budget-friendly options, for every occasion.
            </p>
          </div>
          <div className="flex flex-col shadow-lg items-center p-8 bg-gray-800 rounded-lg transform hover:scale-105 transition-transform duration-300">
            <FaHeadset className="text-6xl text-red-400 mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Our dedicated support team is available 24/7 to assist you with any inquiries or issues you may have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
