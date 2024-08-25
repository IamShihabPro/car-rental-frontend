import React from 'react';
import { FaMapMarkerAlt, FaCar, FaSearch } from 'react-icons/fa';

const CarsSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Explore BMW</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex flex-col items-center p-8 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300">
            <FaMapMarkerAlt className="text-5xl text-white mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">BMW in Your Country</h3>
            <p className="text-gray-400">Discover the BMW experience in your region with local offers and events.</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300">
            <FaCar className="text-5xl text-white mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">All BMW Models</h3>
            <p className="text-gray-400">Browse through all available BMW models and find your perfect match.</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300">
            <FaSearch className="text-5xl text-white mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Find Your BMW</h3>
            <p className="text-gray-400">Use our search tool to locate the BMW that best suits your needs.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CarsSection;
