import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface TFilter {
  brands: string[];
  brand: string;
  setBrand: (brand: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  priceRange: { min: number; max: number };
  setPriceRange: (range: { min: number; max: number }) => void;
  sortOrder: string;
  setSortOrder: (order: string) => void;
  clearFilters: () => void;
}

const CarsFilter: React.FC<TFilter> = ({
  brands,
  brand,
  setBrand,
  searchTerm,
  setSearchTerm,
  priceRange,
  setPriceRange,
  sortOrder,
  setSortOrder,
  clearFilters
}) => {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <div className={`${theme?.isDarkMode === true ? 'bg-gray-800' : 'bg-white shadow-lg border'}  p-6 rounded-sm`}>
      <h3 className={`text-2xl font-semibold mb-6 ${theme?.isDarkMode === true ? 'bg-gray-800' : 'bg-white'}`}>Filter Cars</h3>
      <button
          onClick={clearFilters}
          className={`w-full p-3 rounded-sm focus:outline-none focus:ring-2 transition-colors duration-300 mb-4 ${
            theme?.isDarkMode ? 'text-white bg-gray-700 focus:ring-red-500' : 'text-gray-800 bg-gray-200 focus:ring-blue-500'
          }`}
        >
          Clear All
        </button>

      <div className="mb-6">
        <label className={`block mb-2 ${theme?.isDarkMode === true ? "text-white": "text-gray-800"}`}>Search</label>
        <input
          type="search"
          value={searchTerm}
          placeholder="Search by name"
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full p-3 rounded-sm ${theme?.isDarkMode === true ? "bg-gray-700 text-white ": "bg-gray-200 text-gray-800"}`}
          />
      </div>

      <div className="mb-6">
        <label className={`block mb-2 ${theme?.isDarkMode === true ? "text-white": "text-gray-800"}`}>Brand</label>
        <select
          className={`w-full p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${theme?.isDarkMode === true ? "bg-gray-700 text-white ": "bg-gray-200 text-gray-800"}`}
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
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
        <label className={`block mb-2 ${theme?.isDarkMode === true ? "text-white": "text-gray-800"}`}>Price Range</label>
        <div className="flex items-center justify-between gap-4">
          <input
            type="number"
            min="0"
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange({ ...priceRange, min: Number(e.target.value) })
            }
            className={`w-1/2 p-3 rounded-sm ${theme?.isDarkMode === true ? "bg-gray-700 text-white ": "bg-gray-200 text-gray-800"}`}
          />
          <input
            type="number"
            min="0"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange({ ...priceRange, max: Number(e.target.value) })
            }
            className={`w-1/2 p-3 rounded-sm ${theme?.isDarkMode === true ? "bg-gray-700 text-white ": "bg-gray-200 text-gray-800"}`}
          />
        </div>
        <p className={`mt-2 ${theme?.isDarkMode === true ? " text-white ": " text-gray-800"}`}>
          Price Range: ${priceRange.min} - ${priceRange.max}
        </p>
      </div>

      <div>
        <label className={`block mb-2 ${theme?.isDarkMode === true ? "text-white": "text-gray-800"}`}>Sort By</label>
        <select
          className={`w-full p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${theme?.isDarkMode === true ? "bg-gray-700 text-white ": "bg-gray-200 text-gray-800"}`}
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
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
