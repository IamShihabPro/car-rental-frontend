import { useParams } from 'react-router-dom';
import { useGetSingleCarQuery } from '@/redux/feature/cars/carsApi';
import Loader from '@/component/Loader/Loader';

const CarDetails: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleCarQuery(id as string);

  const car = data?.data;

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !car) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
        <p>Failed to load car details. Please try again later.</p>
      </div>
    );
  }

  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 mt-20">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Car Image */}
          <div className="md:w-1/2">
            <img
              src={car.image}
              alt={car.name}
              className="rounded-sm shadow-2xl w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Car Details */}
          <div className="md:w-1/2 text-white">
            <h2 className="text-4xl font-extrabold mb-6 border-b-4 border-blue-500 inline-block pb-2">{car.name}</h2>
            <p className="text-lg text-gray-300 mb-4">{car.description}</p>

            <div className="mb-4">
              <h3 className="text-2xl font-semibold">Brand</h3>
              <p className="text-gray-400">{car.brand}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-2xl font-semibold">Color</h3>
              <p className="text-gray-400">{car.color}</p>
              {/* <div className="w-8 h-8 rounded-full" style={{ backgroundColor: car.color }} /> */}
            </div>

            <div className="mb-4">
              <h3 className="text-2xl font-semibold">Features</h3>
              <ul className="list-disc list-inside text-gray-400">
                {car?.features?.map((feature: any, index: any) => (
                  <li key={index} className="py-1">{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-2xl font-semibold">Status</h3>
              <p className={car.status === 'available' ? 'text-green-400' : 'text-red-400'}>
                {car.status.charAt(0).toUpperCase() + car.status.slice(1)}
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-2xl font-semibold">Price Per Hour</h3>
              <p className="text-3xl font-bold text-blue-400">${car.pricePerHour.toFixed(2)}</p>
            </div>

            <button className="mt-8 bg-blue-500 text-white font-bold py-3 px-8 rounded-sm shadow-lg hover:bg-blue-600 transition-transform duration-300 hover:scale-105">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
