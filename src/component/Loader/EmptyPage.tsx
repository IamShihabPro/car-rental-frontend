import React from 'react';
import errorCar from '../../assets/images/cars/cyber-truck.png'
import './ErrorComponent.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const EmptyPage: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme);
  // ${theme?.isDarkMode === true ? 'text-white' : 'text-blue-500'}` : 'text-slate-400'}

  return (
    <div className={`flex flex-col justify-center items-center h-[100vh]  p-4 ${theme?.isDarkMode === true ? 'bg-gray-900' : 'bg-white'} `}>
      <div className="flex flex-row items-center space-x-2 gap-4">
        <div className='flex justify-center items-center flex-row'>
          <p className={`text-7xl font-thin animate-pulse ${theme?.isDarkMode === true ? 'text-gray-500' : 'text-blue-500'}`}>N</p>
          <div className={`w-12 h-12 border-8 border-dashed rounded-full animate-spin ms-2 ${theme?.isDarkMode === true ? 'border-gray-400' : 'border-blue-400'} `}></div>
          </div>
        <p className={`text-7xl font-thin animate-pulse ${theme?.isDarkMode === true ? 'text-gray-500' : 'text-blue-500'}`}> Cars</p>
        <span className={`text-7xl font-thin animate-bounce ${theme?.isDarkMode === true ? 'text-gray-500' : 'text-blue-500'}`}>...</span>
      </div>
      <p className={`mt-5 text-xl animate-pulse ${theme?.isDarkMode === true ? 'text-gray-500' : 'text-blue-500'}`}>
        It looks like there’s nothing here. Please add a car.
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

export default EmptyPage;
