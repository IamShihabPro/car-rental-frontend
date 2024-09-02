import { useState } from 'react';
import { useGetCarsQuery } from '@/redux/feature/cars/carsApi';
import Bg from '../../assets/images/cars/tesla-8.avif';
import { TCar } from '@/types/userTypes';
import HeroModal from './HeroModal';
import Loader from '../Loader/Loader';

const HeroSection = () => {
    const { data, isLoading } = useGetCarsQuery(undefined);
    const cars = (data?.data as TCar[]) || [];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [location, setLocation] = useState('');
    const [filteredCars, setFilteredCars] = useState<TCar[]>([]);

    const handleSearchClick = () => {
        const filtered = cars.filter(car => car.location.toLowerCase().includes(location.toLowerCase()) && car.status === 'available');
        setFilteredCars(filtered);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <section 
            className="relative h-screen bg-gray-800 bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${Bg})` }}
        >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">Find Your Perfect Car</h1>
                <p className="text-xl md:text-2xl mb-8 animate-fadeIn delay-200">Discover and book the best cars for your next adventure</p>

                <div className="w-full max-w-2xl mx-auto bg-transparent rounded-md shadow-lg p-4 flex flex-col md:flex-row justify-center">
                    <input 
                        type="text" 
                        name='location'
                        placeholder="Location" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full md:w-1/3 px-4 py-2 border text-white bg-white/20 border-gray-300 rounded-md mb-4 md:mb-0 md:mr-2"
                    />
                    <input 
                        type="date" 
                        placeholder="Pick-up Date" 
                        className="w-full md:w-1/3 px-4 py-2 border bg-white/20 text-white border-gray-300 rounded-md mb-4 md:mb-0 md:mr-2"
                    />
                </div>
                
                <button 
                    className="mt-8 border border-white text-white bg-transparent px-6 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors duration-300"
                    onClick={handleSearchClick}
                >
                    Search
                </button>
            </div>

            <HeroModal isOpen={isModalOpen} onClose={closeModal} cars={filteredCars} isLoading={isLoading} />
        </section>
    );
};

export default HeroSection;
