import React from 'react';
import car1 from '../../assets/images/cars/rr-6.1.webp';
import car2 from '../../assets/images/cars/rr-7.1.webp';
import car3 from '../../assets/images/cars/rr-8.1.webp';

interface Car {
  id: number;
  name: string;
  image: string;
  price: number;
}

const carsData: Car[] = [
  {
    id: 1,
    name: 'Luxury Sedan',
    image: car1,
    price: 79.99,
  },
  {
    id: 2,
    name: 'Sporty Coupe',
    image: car2,
    price: 89.99,
  },
  {
    id: 3,
    name: 'Convertible',
    image: car3,
    price: 99.99,
  },
];

const FeaturedCars: React.FC = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Featured Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {carsData.map((car) => (
            <div
              key={car.id}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
                <h3 className="text-white text-xl font-semibold mb-2">{car.name}</h3>
                <p className="text-white text-lg">${car.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
