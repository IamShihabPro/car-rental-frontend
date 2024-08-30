import React, { useMemo, useState } from 'react';
import CarsFilter from './CarsFilter';
import { useGetCarsQuery } from '@/redux/feature/cars/carsApi';
import { TCar } from '@/types/userTypes';
import CarsCard from './CarsCard';
import Loader from '@/component/Loader/Loader';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const Cars: React.FC = () => {
  const { data, isLoading } = useGetCarsQuery(undefined);
  const cars = (data?.data as TCar[]) || [];

  const theme = useSelector((state: RootState) => state.theme);

  const [brand, setBrand] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [sortOrder, setSortOrder] = useState<string>('default');
  const [isElectric, setIsElectric] = useState<boolean>(false);
  const [gps, setGps] = useState<boolean>(false);
  const [childSeat, setChildSeat] = useState<boolean>(false);

  const clearFilters = () => {
    setBrand('');
    setSearchTerm('');
    setPriceRange({ min: 0, max: 100 });
    setSortOrder('default');
    setIsElectric(false);
    setGps(false);
    setChildSeat(false);
  };

  const filteredCars = useMemo(() => {
    let sortedCars = [...cars].sort((a, b) => {
      if (sortOrder === 'lowToHigh') return a.pricePerHour - b.pricePerHour;
      if (sortOrder === 'highToLow') return b.pricePerHour - a.pricePerHour;
      return 0;
    });

    return sortedCars.filter((car) => {
      const matchesBrand = !brand || car.brand === brand;
      const matchesSearchTerm = !searchTerm || car.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPriceRange = car.pricePerHour >= priceRange.min && car.pricePerHour <= priceRange.max;
      const matchesElectric = !isElectric || car.isElectric;
      const matchesGPS = !gps || car.gps;
      const matchesChildSeat = !childSeat || car.childSeat;

      return matchesBrand && matchesSearchTerm && matchesPriceRange && matchesElectric && matchesGPS && matchesChildSeat;
    });
  }, [cars, brand, searchTerm, priceRange, sortOrder, isElectric, gps, childSeat]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className={`${theme?.isDarkMode ? 'bg-gray-900' : 'bg-white'} py-16`}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-extrabold text-center mt-10 mb-12 ${
            theme?.isDarkMode ? 'text-white' : 'text-gray-800'
          }`}
        >
          Available Cars
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Section */}
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
              isElectric={isElectric}
              setIsElectric={setIsElectric}
              gps={gps}
              setGps={setGps}
              childSeat={childSeat}
              setChildSeat={setChildSeat}
            />
          </div>
          {/* Cars Listing Section */}
          <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.length > 0 ? (
              filteredCars.map((car, index) => (
                <CarsCard key={index} car={car} />
              ))
            ) : (
              <div className="text-white text-2xl mt-8 text-center col-span-full">
                No Cars Available.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cars;
