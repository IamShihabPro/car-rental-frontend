import Bg from '../../assets/images/cars/tesla-8.avif';
// import Bg from '../../assets/images/cars/bmw-5.webp';

const HeroSection = () => {
    return (
        <section 
            className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${Bg})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay for better text visibility */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Find Your Perfect Car</h1>
                <p className="text-xl md:text-2xl mb-8">Discover and book the best cars for your next adventure</p>

                <div className="w-full max-w-2xl mx-auto bg-transparent rounded-md shadow-lg p-4 flex flex-col md:flex-row justify-center">
                    <input 
                        type="text" 
                        placeholder="Location" 
                        className="w-full md:w-1/3 px-4 py-2 border text-white bg-white/20 border-gray-300 rounded-md mb-4 md:mb-0 md:mr-2"
                    />
                    <input 
                        type="date" 
                        placeholder="Pick-up Date" 
                        className="w-full md:w-1/3 px-4 py-2 border bg-white/20 text-white border-gray-300 rounded-md mb-4 md:mb-0 md:mr-2"
                    />
                </div>
                
                <button className="mt-8 border text-white bg-transparent px-6 py-3 rounded-md text-lg font-semibold">
                    Book Now
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
