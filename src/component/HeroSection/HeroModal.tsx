import React from 'react';
import { TCar } from '@/types/userTypes';
import { IoCloseSharp } from "react-icons/io5";
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

interface HeroModalProps {
    isOpen: boolean;
    onClose: () => void;
    cars: TCar[];
    isLoading: boolean;
}

const HeroModal: React.FC<HeroModalProps> = ({ isOpen, onClose, cars, isLoading }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 ease-in-out">
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-3xl w-full relative animate-slideUp mx-2">
                <div className="p-6 max-h-[80vh] overflow-y-auto"> {/* Set a max height and make content scrollable */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-3xl font-extrabold text-gray-900">Available Cars</h2>
                        <button
                            className="text-gray-500 hover:text-red-600 transition-colors duration-200 p-4"
                            onClick={onClose}
                        >
                            <IoCloseSharp className='text-red-500 h-6 w-6'/>
                        </button>
                    </div>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <>
                            {cars.length > 0 ? (
                                <ul className="space-y-4">
                                    {cars.map(car => (
                                        <div key={car._id} className='flex flex-row justify-between items-center bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow duration-300'>
                                            <li className="flex items-center">
                                                <img src={car.image} alt={car.name} className="w-28 h-28 object-cover rounded-lg mr-6" />
                                                <div className="flex flex-col">
                                                    <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
                                                    <p className="text-sm text-gray-500">{car.brand}</p>
                                                    <p className="mt-2 text-lg font-medium text-gray-700">৳ {car.pricePerHour}/hour</p>
                                                    <p className="text-sm text-gray-500">{car.location}</p>
                                                </div>
                                            </li>
                                            <Link to={`/cars/${car._id}`} className="bg-blue-500 px-6 py-3 text-white font-semibold transition-colors duration-300 rounded-sm shadow-md">
                                                Details
                                            </Link>
                                        </div>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-center text-gray-600 text-lg">No cars available for the selected location.</p>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeroModal;
