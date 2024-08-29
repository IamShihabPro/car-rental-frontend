import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type BookingFormInputs = {
  idType: 'nid' | 'passport';
  idNumber: string;
  drivingLicense: string;
  paymentMethod: string;
  gps: boolean;
  childSeat: boolean;
};

const BookingForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormInputs>();

  const onSubmit: SubmitHandler<BookingFormInputs> = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <section className="bg-gray-900 h-[100vh] py-16 flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center my-12">Book Your Ride</h2>
        <form
          className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-lg shadow-2xl max-w-2xl mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

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

            {/* Payment Method */}
            <div className="flex flex-col">
              <label className="text-white text-lg font-semibold mb-2">Payment Method</label>
              <select
                {...register('paymentMethod', { required: 'Payment Method is required' })}
                className="p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-600 transition-all"
              >
                <option value="creditCard">Credit Card</option>
                <option value="debitCard">Debit Card</option>
                <option value="paypal">PayPal</option>
              </select>
              {errors.paymentMethod && <span className="text-red-500 text-sm mt-2">{errors.paymentMethod.message}</span>}
            </div>

            {/* Additional Options */}
            <div className="flex flex-col">
              <label className="text-white text-lg font-semibold mb-2">Additional Options</label>
              <div className="flex items-center space-x-4 mt-2">
                <label className="flex items-center text-white">
                  <input
                    type="checkbox"
                    {...register('gps')}
                    className="mr-2 bg-gray-700 text-blue-500 focus:ring-2 focus:ring-blue-500 rounded-md"
                  />
                  GPS
                </label>
                <label className="flex items-center text-white">
                  <input
                    type="checkbox"
                    {...register('childSeat')}
                    className="mr-2 bg-gray-700 text-blue-500 focus:ring-2 focus:ring-blue-500 rounded-md"
                  />
                  Child Seat
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
