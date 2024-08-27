import React from 'react';
import { TCar } from '@/types/userTypes';

interface CarsCardProps {
  car: TCar;
}

const CarsCard: React.FC<CarsCardProps> = ({ car }) => {
  console.log(car)
  return (
    <div className="relative shadow-lg overflow-hidden rounded-sm transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
      <img
        src={car?.image}
        alt={car?.name}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-end p-6 opacity-0 hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-white text-2xl font-bold mb-2">{car?.name}</h3>
        <p className="text-white text-lg font-semibold mb-4">
          ${car?.pricePerHour.toFixed(2)} / hour
        </p>
        <p className="text-white text-sm mb-6 line-clamp-3">{car?.description}</p>
        <div className="flex justify-center items-center gap-4">
          <button className="bg-white bg-opacity-20 border border-white px-6 py-3 text-white font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300 rounded-sm shadow-md">
            Details
          </button>
          <button className="bg-white bg-opacity-20 border border-white px-6 py-3 text-white font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300 rounded-sm shadow-md">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarsCard;
