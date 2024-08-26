import { TCar } from '@/types/userTypes';
import React from 'react';

interface CarsCardProps {
  car: TCar;
}

const CarsCard: React.FC<CarsCardProps> = ({ car }) => {
  return (
    <div className="relative shadow-xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center p-4 transition-opacity duration-500 opacity-0 hover:opacity-100">
        <h3 className="text-white text-xl font-semibold mb-2">{car.name}</h3>
        <p className="text-white text-lg font-bold">${car.pricePerHour.toFixed(2)} / hour</p>
        <p className="text-white mt-2 text-center">{car.description}</p>
        <div className='mt-4 flex justify-center items-center gap-4'>
          <button className='bg-transparent border border-white px-4 py-2 text-white hover:bg-white hover:text-gray-900 transition-colors duration-300'>
            Details
          </button>
          <button className='bg-transparent border border-white px-4 py-2 text-white hover:bg-white hover:text-gray-900 transition-colors duration-300'>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarsCard;
