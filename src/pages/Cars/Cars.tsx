import React, { useMemo, useState } from 'react';
import CarsFilter from './CarsFilter';
import { useGetCarsQuery } from '@/redux/feature/cars/carsApi';
import { TCar } from '@/types/userTypes';
import CarsCard from './CarsCard';
import Loader from '@/component/Loader/Loader';

const Cars: React.FC = () => {
  const {data, isLoading} = useGetCarsQuery(undefined);


  const cars = data?.data as TCar[] || [];
  console.log(cars);

  const [brand, setBrand] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [sortOrder, setSortOrder] = useState<string>('default');

  const clearFilters = () => {
    setBrand('');
    setSearchTerm('');
    setPriceRange({ min: 0, max: 100 });
    setSortOrder('default');
  };

  const filteredCars = useMemo(() => {
    let sortedCars = [...cars].sort((a, b) => {
      if (sortOrder === 'lowToHigh') return a.pricePerHour - b.pricePerHour;
      if (sortOrder === 'highToLow') return b.pricePerHour - a.pricePerHour;
      return 0;
    });

    return sortedCars.filter((car) => {
      const matchesBrand = brand === '' || car.brand === brand;
      const matchesSearchTerm = searchTerm === '' || car.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPriceRange = car.pricePerHour >= priceRange.min && car.pricePerHour <= priceRange.max;
      return matchesBrand && matchesSearchTerm && matchesPriceRange;
    });
  }, [cars, brand, searchTerm, priceRange, sortOrder]);

  
  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-white mt-10 mb-12">
          Available Cars
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <CarsFilter
              brands={Array.from(new Set(cars.map((car) => car.brand)))}
              brand={brand}
              setBrand={setBrand}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              clearFilters={clearFilters}
            />
          </div>
          <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.length === 0 ? (
              <div className="text-white text-center">No cars available.</div>
            ) : (
              filteredCars.map((car, index) => (
                <CarsCard key={index} car={car} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cars;
