import React, { useState } from 'react';

const CarsFilter: React.FC = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [brand, setBrand] = useState('');
  const [search, setSearch] = useState('');

  // Handler for price range changes
  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
    setPriceRange(prevRange => ({
      ...prevRange,
      [type]: Number(e.target.value)
    }));
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-xl font-semibold text-white mb-4">Filter Cars</h3>
      <div className="mb-4">
        <label className="block text-white mb-2">Search</label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 rounded-md bg-gray-700 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2">Brand</label>
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full p-2 rounded-md bg-gray-700 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2">Price Range</label>
        <div className="flex items-center justify-between gap-4">
          <input
            type="number"
            min="0"
            max="100"
            value={priceRange.min}
            onChange={(e) => handlePriceRangeChange(e, 'min')}
            className="w-1/2 p-2 rounded-md bg-gray-700 text-white"
          />
          <input
            type="number"
            min="0"
            max="100"
            value={priceRange.max}
            onChange={(e) => handlePriceRangeChange(e, 'max')}
            className="w-1/2 p-2 rounded-md bg-gray-700 text-white"
          />
        </div>
        <p className="text-white mt-2">Price Range: ${priceRange.min} - ${priceRange.max}</p>
      </div>
    </div>
  );
};

export default CarsFilter;
