import React from 'react';
import errorCar from '../../assets/images/cars/cyber-truck.png'
import './ErrorComponent.css';

const EmptyComponent: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-gray-900 p-4">
      <div className="flex flex-row items-center space-x-2 gap-4">
        <div className='flex justify-center items-center flex-row'>
          <p className="text-7xl font-thin text-white animate-pulse">N</p>
          <div className="w-12 h-12 border-8 border-dashed rounded-full animate-spin border-gray-400 ms-2"></div>
          </div>
        <p className="text-7xl font-thin text-white animate-pulse"> Data</p>
        <span className="text-7xl font-thin text-gray-500 animate-bounce">...</span>
      </div>
      <p className="mt-5 text-xl text-gray-400 animate-pulse">
        It looks like there’s nothing here. Please reserve a car.
      </p>
      <div className="w-full flex justify-center overflow-hidden mt-8">
        <img
          src={errorCar}
          alt="Empty State"
          className="animate-carIdle"
          style={{ width: '340px', height: '150px' }}
        />
      </div>
    </div>
  );
};

export default EmptyComponent;
