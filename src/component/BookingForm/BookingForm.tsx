import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useAddBookingsMutation } from '@/redux/feature/booking/bookingApi';
import { useGetSingleCarQuery } from '@/redux/feature/cars/carsApi';
import Loader from '../Loader/Loader';
import { toast } from 'sonner';
import BookingReviewModal from './BookingReviewModal';

type BookingFormInputs = {
  idType: 'nid' | 'passport';
  idNumber: string;
  drivingLicense: string;
  gps: boolean;
  childSeat: boolean;
};

const BookingForm: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleCarQuery(id as string);
  const [addBookings] = useAddBookingsMutation();

  const car = data?.data;

  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormInputs>();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState<BookingFormInputs | null>(null);

  const onSubmit: SubmitHandler<BookingFormInputs> = (data) => {
    setBookingData(data);
    setIsModalOpen(true);
  };

  const handleConfirmBooking = async () => {
    if (!bookingData || !car) return;

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    const formattedTime = currentDate.toTimeString().slice(0, 5);

    const finalBookingData = {
      ...bookingData,
      carId: car._id,
      date: formattedDate,
      startTime: formattedTime,
    };

    try {
      const res = await addBookings(finalBookingData).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
    } finally {
      setIsModalOpen(false);
    }
  };

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
    <section className="bg-gray-900 min-h-screen py-16 flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center my-12">Book Your Ride</h2>
        <form
          className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-lg shadow-2xl max-w-2xl mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Form fields */}
            {/* ID Type and ID Number */}
            <div className="flex flex-col">
              <label className="text-white text-lg font-semibold mb-2">ID Type</label>
              <select
                {...register('idType', { required: 'ID Type is required' })}
                className="p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-600 transition-all"
              >
                <option value="nid">NID</option>
                <option value="passport">Passport</option>
              </select>
              {errors.idType && <span className="text-red-500 text-sm mt-2">{errors.idType.message}</span>}
            </div>

            <div className="flex flex-col">
              <label className="text-white text-lg font-semibold mb-2">ID Number</label>
              <input
                type="text"
                {...register('idNumber', { required: 'ID Number is required' })}
                className="p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-600 transition-all"
              />
              {errors.idNumber && <span className="text-red-500 text-sm mt-2">{errors.idNumber.message}</span>}
            </div>

            {/* Driving License */}
            <div className="flex flex-col">
              <label className="text-white text-lg font-semibold mb-2">Driving License</label>
              <input
                type="text"
                {...register('drivingLicense', { required: 'Driving License is required' })}
                className="p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-600 transition-all"
              />
              {errors.drivingLicense && <span className="text-red-500 text-sm mt-2">{errors.drivingLicense.message}</span>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Review Booking
          </button>
        </form>

        {/* Booking Review Modal */}
        <BookingReviewModal
          isOpen={isModalOpen}
          carDetails={car}
          bookingData={bookingData!}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleConfirmBooking}
        />
      </div>
    </section>
  );
};

export default BookingForm;
