import React from 'react';
import CarsFilter from './CarsFilter';
import { cars } from './CarsData';
import CarsCard from './CarsCard';

const Cars: React.FC = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-white mt-10 mb-12">Available Cars</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <CarsFilter />
          </div>
          <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <CarsCard key={index} car={car} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cars;
