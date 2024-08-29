import React from 'react';
import errorCar from '../../assets/images/cars/cyber-truck.png'
import './ErrorComponent.css';

const ErrorComponent: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-gray-900">
      <div className="flex items-center space-x-2">
        <p className="text-7xl font-thin text-white animate-pulse">Err</p>
        <div className="w-12 h-12 border-8 border-dashed rounded-full animate-spin border-red-500"></div>
        <p className="text-7xl font-thin text-white animate-pulse">or</p>
        <span className="text-7xl font-thin text-red-500 animate-bounce">!</span>
      </div>
      <p className="mt-5 text-xl text-gray-400 animate-pulse">
        Oops! Something went wrong. Please try again later.
      </p>
      <div className="w-full flex justify-center overflow-hidden mt-8">
        <img
          src={errorCar}
          alt="Error Car"
          className="animate-carShake"
          style={{ width: '340px', height: '150px' }}
        />
      </div>
    </div>
  );
};

export default ErrorComponent;
