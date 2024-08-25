import { Link } from 'react-router-dom';
import cars from '../../assets/images/cars/tesla-6.avif';

const UniqueSection = () => {
  return (
    <section className="relative bg-gray-900 py-16">
      <div className="absolute inset-0">
        <img
          src={cars}
          alt="Best Cars"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-70" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Our Best Cars
        </h1>
        <div className="flex flex-col lg:flex-row items-stretch gap-4">
          {/* Left side: Text details */}
          <div className="w-full lg:w-1/2 backdrop-blur-lg bg-white/20 text-white flex flex-col justify-center p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Best Deals at Our <span className="text-orange-500">Cars Shop</span>
            </h2>
            <p className="text-md text-justify mb-6">
                Discover our exceptional range of cars, crafted for those who seek the perfect blend of luxury, performance, and innovation. Each vehicle is designed to deliver an unmatched driving experience, combining cutting-edge technology with elegant design. From sleek sports cars to rugged SUVs, our collection is tailored to meet your every need. Experience the thrill of the road with our expertly engineered cars, each offering unparalleled comfort and advanced features. Embrace the journey and drive with confidence, knowing you’re behind the wheel of a true masterpiece.
            </p>

            <Link to="/cars">
              <button className="bg-slate-200 text-black py-2 px-6 mt-4 hover:bg-gray-300 transition duration-300">
                Proceed To Order Now
              </button>
            </Link>
          </div>

          {/* Right side: Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              src={cars}
              alt="Best Cars"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
