import { Link } from 'react-router-dom';
import cars from '../../assets/images/cars/tesla-7.avif';

const Discover = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={cars}
          alt="Tesla Cars"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-60" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-12">
          Discover Your Next Car
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="bg-white bg-opacity-90 shadow-lg p-8 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Best Deals on <span className="text-blue-600">Luxury Cars</span>
            </h2>
            <p className="text-gray-700 mb-6 text-center">
              Experience the ultimate driving pleasure with our curated selection of luxury cars. We offer exclusive deals and a premium range of vehicles designed to meet your every need. Discover the freedom of driving with top-tier technology and unmatched comfort. Whether you’re seeking a high-performance sports car or a sophisticated sedan, our collection is crafted to make your journey extraordinary.
            </p>
            <Link to="/products">
              <button className="bg-black text-white py-3 px-6 hover:bg-gray-800 transition duration-300">
                Explore Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
