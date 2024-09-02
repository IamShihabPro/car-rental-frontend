import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface TFilter {
  brands: string[];
  brand: string;
  setBrand: (brand: string) => void;
  locations: string[];
  location: string;
  setLocation: (location: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  priceRange: { min: number; max: number };
  setPriceRange: (range: { min: number; max: number }) => void;
  sortOrder: string;
  setSortOrder: (order: string) => void;
  clearFilters: () => void;
  isElectric: boolean;
  setIsElectric: (isElectric: boolean) => void;
  gps: boolean;
  setGps: (gps: boolean) => void;
  childSeat: boolean;
  setChildSeat: (gps: boolean) => void;
}

const CarsFilter: React.FC<TFilter> = ({
  brands,
  brand,
  setBrand,
  locations,
  location,
  setLocation,
  searchTerm,
  setSearchTerm,
  priceRange,
  setPriceRange,
  sortOrder,
  setSortOrder,
  clearFilters,
  isElectric,
  setIsElectric,
  gps,
  setGps,
  childSeat,
  setChildSeat
}) => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <div className={`${theme?.isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg border'} p-6 rounded-sm`}>
      <h3
        className={`text-2xl font-semibold mb-6 ${
          theme?.isDarkMode ? 'text-white' : 'text-gray-800'
        }`}
      >
        Filter Cars
      </h3>
      <button
        onClick={clearFilters}
        className={`w-full p-3 rounded-sm focus:outline-none focus:ring-2 transition-colors duration-300 mb-4 ${
          theme?.isDarkMode ? 'text-white bg-gray-700 focus:ring-red-500' : 'text-gray-800 bg-gray-200 focus:ring-blue-500'
        }`}
      >
        Clear All
      </button>

      <div className="mb-6">
        <label className={`block mb-2 ${theme?.isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          Search
        </label>
        <input
          type="search"
          value={searchTerm}
          placeholder="Search by name"
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full p-3 rounded-sm ${theme?.isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}
        />
      </div>

      <div className="mb-6">
        <label className={`block mb-2 ${theme?.isDarkMode ? 'text-white' : 'text-gray-800'}`}>Brands</label>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className={`w-full p-3 rounded-sm focus:outline-none focus:ring-2 ${
            theme?.isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          <option value="">All Brands</option>
          {brands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className={`block mb-2 ${theme?.isDarkMode ? 'text-white' : 'text-gray-800'}`}>Locations</label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={`w-full p-3 rounded-sm focus:outline-none focus:ring-2 ${
            theme?.isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          <option value="">All Locations</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6 flex justify-between items-center">
        <label className={`block mb-2 ${theme?.isDarkMode ? 'text-white' : 'text-gray-800'}`}>Electric Car</label>
        <input
          type="checkbox"
          checked={isElectric}
          onChange={(e) => setIsElectric(e.target.checked)}
          className={`rounded-sm focus:outline-none ${theme?.isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}
        />
      </div>

      <div className="mb-6 flex justify-between items-center">
        <label className={`block mb-2 ${theme?.isDarkMode ? 'text-white' : 'text-gray-800'}`}>GPS Tracker</label>
        <input
          type="checkbox"
          checked={gps}
          onChange={(e) => setGps(e.target.checked)}
          className={`rounded-sm focus:outline-none ${theme?.isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}
        />
      </div>

      <div className="mb-6 flex justify-between items-center">
        <label className={`block mb-2 ${theme?.isDarkMode ? 'text-white' : 'text-gray-800'}`}>Children Seat</label>
        <input
          type="checkbox"
          checked={childSeat}
          onChange={(e) => setChildSeat(e.target.checked)}
          className={`rounded-sm focus:outline-none ${theme?.isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}
        />
      </div>

      <div className="mb-6">
        <label className={`block mb-2 ${theme?.isDarkMode ? 'text-white' : 'text-gray-800'}`}>Price Range</label>
        <div className="flex items-center justify-between gap-4">
          <input
            type="number"
            min="0"
            value={priceRange.min}
            onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
            className={`w-1/2 p-3 rounded-sm ${theme?.isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}
          />
          <input
            type="number"
            min="0"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
            className={`w-1/2 p-3 rounded-sm ${theme?.isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}
          />
        </div>
      </div>
      <p className="mb-6">Price Range: {priceRange.min} - {priceRange.max} </p>

      <div className="mb-6">
        <label className={`block mb-2 ${theme?.isDarkMode ? 'text-white' : 'text-gray-800'}`}>Sort By</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className={`w-full p-3 rounded-sm focus:outline-none focus:ring-2 ${
            theme?.isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          <option value="default">Default</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default CarsFilter;
