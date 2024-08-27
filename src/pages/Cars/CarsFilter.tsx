import React from 'react';

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
  return (
    <div className="bg-gray-800 p-6 rounded-sm">
      <h3 className="text-2xl font-semibold text-white mb-6">Filter Cars</h3>
      <button
        onClick={clearFilters}
        className="w-full bg-gray-700 text-white p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300 mb-4"
      >
        Clear All
      </button>
      <div className="mb-6">
        <label className="block text-white mb-2">Search</label>
        <input
          type="search"
          value={searchTerm}
          placeholder="Search by name"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-sm bg-gray-700 text-white"
        />
      </div>

      <div className="mb-6">
        <label className="block text-white mb-2">Brand</label>
        <select
          className="w-full p-3 bg-gray-700 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
        <label className="block text-white mb-2">Price Range</label>
        <div className="flex items-center justify-between gap-4">
          <input
            type="number"
            min="0"
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange({ ...priceRange, min: Number(e.target.value) })
            }
            className="w-1/2 p-3 rounded-sm bg-gray-700 text-white"
          />
          <input
            type="number"
            min="0"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange({ ...priceRange, max: Number(e.target.value) })
            }
            className="w-1/2 p-3 rounded-sm bg-gray-700 text-white"
          />
        </div>
        <p className="text-white mt-2">
          Price Range: ${priceRange.min} - ${priceRange.max}
        </p>
      </div>

      <div>
        <label className="block text-white mb-2">Sort By</label>
        <select
          className="w-full p-3 bg-gray-700 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
