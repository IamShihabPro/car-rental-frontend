import React, { useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetSingleCarQuery } from '@/redux/feature/cars/carsApi';
import Loader from '@/component/Loader/Loader';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

export type TBooking = {
  carId: string;
  date: string;
  startTime: string;
};

const CarDetails: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleCarQuery(id as string);
  const [zoomed, setZoomed] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const lensRef = useRef<HTMLDivElement | null>(null);
  const theme = useSelector((state: RootState) => state.theme);

  const car = data?.data;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imgRef.current || !lensRef.current) return;

    const img = imgRef.current;
    const lens = lensRef.current;
    const rect = img.getBoundingClientRect();

    const x = e.clientX - rect.left - lens.offsetWidth / 2;
    const y = e.clientY - rect.top - lens.offsetHeight / 2;

    const maxX = img.width - lens.offsetWidth;
    const maxY = img.height - lens.offsetHeight;

    lens.style.left = `${Math.max(0, Math.min(x, maxX))}px`;
    lens.style.top = `${Math.max(0, Math.min(y, maxY))}px`;

    lens.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
  };

  const handleMouseEnter = () => setZoomed(true);
  const handleMouseLeave = () => setZoomed(false);

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
    <section className={`min-h-screen py-16 ${theme?.isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4 mt-20">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Car Image with Magnifier */}
          <div
            className="md:w-1/2 relative"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              ref={imgRef}
              src={car.image}
              alt={car.name}
              className="rounded-lg shadow-2xl w-full object-cover"
            />
            {zoomed && (
              <div
                ref={lensRef}
                className="absolute rounded-full border border-gray-300 bg-no-repeat pointer-events-none"
                style={{
                  width: '150px',
                  height: '150px',
                  backgroundImage: `url(${car.image})`,
                  backgroundSize: `${imgRef.current?.width! * 2}px ${imgRef.current?.height! * 2}px`,
                }}
              ></div>
            )}
          </div>

          {/* Car Details */}
          <div className={`md:w-1/2 ${theme?.isDarkMode ? 'text-white' : 'text-gray-700'} `}>
            <h2 className="text-3xl font-extrabold mb-6 border-b-4 border-blue-500 inline-block pb-2">
              {car.name}
            </h2>
            <p className="text-xl text-gray-400 mb-6 leading-relaxed">
              {car.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold">Brand</h3>
                <p className="text-lg text-gray-400">{car.brand}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Color</h3>
                <p className="text-lg text-gray-400">{car.color}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Features</h3>
                <ul className="list-disc list-inside text-lg text-gray-400">
                  {car?.features?.map((feature: string, index: number) => (
                    <li key={index} className="py-1">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Status</h3>
                <p
                  className={`text-lg ${
                    car.status === 'available'
                      ? 'text-green-400'
                      : 'text-red-400'
                  }`}
                >
                  {car.status.charAt(0).toUpperCase() + car.status.slice(1)}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p
                  className={`text-lg ${
                    car.location ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {car.location}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Electric Car</h3>
                <p
                  className={`text-lg ${
                    car.isElectric ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {car.isElectric ? 'Yes' : 'No'}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">GPS Tracker</h3>
                <p
                  className={`text-lg ${
                    car.gps ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {car.gps ? 'Yes' : 'No'}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Children Seat</h3>
                <p
                  className={`text-lg ${
                    car.childSeat ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {car.childSeat ? 'Yes' : 'No'}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold">Price Per Hour</h3>
              <p className="text-4xl font-bold text-blue-400">
                ৳{car.pricePerHour.toFixed(2)}
              </p>
            </div>

            <Link
              to={`/cars/${car?._id}/booking`}
              className="mt-8 bg-blue-500 text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-blue-600 transition-transform duration-300 hover:scale-105"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
