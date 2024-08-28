import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type BookingFormInputs = {
  fullName: string;
  email: string;
  phone: string;
  idType: 'nid' | 'passport';
  idNumber: string;
  drivingLicense: string;
  paymentMethod: string;
  gps: boolean;
  childSeat: boolean;
};

const BookingForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormInputs>();
  // const {data} =

  const onSubmit: SubmitHandler<BookingFormInputs> = (data) => {
    console.log('Form submitted:', data);
    // Handle form submission here
  };

  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-white text-center my-10">Booking Form</h2>
        <form className="bg-gray-800 p-8 rounded-lg shadow-lg" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-white mb-2">Full Name</label>
              <input
                type="text"
                {...register('fullName', { required: 'Full Name is required' })}
                className="p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
            </div>

            {/* Email Address */}
            <div className="flex flex-col">
              <label className="text-white mb-2">Email Address</label>
              <input
                type="email"
                {...register('email', { 
                  required: 'Email is required', 
                  pattern: { 
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
                    message: 'Invalid email address'
                  } 
                })}
                className="p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <label className="text-white mb-2">Phone Number</label>
              <input
                type="text"
                {...register('phone', { required: 'Phone Number is required' })}
                className="p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
            </div>

            {/* ID Type and ID Number */}
            <div className="flex flex-col">
              <label className="text-white mb-2">ID Type</label>
              <select
                {...register('idType', { required: 'ID Type is required' })}
                className="p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="nid">NID</option>
                <option value="passport">Passport</option>
              </select>
              {errors.idType && <span className="text-red-500 text-sm">{errors.idType.message}</span>}
              
              <label className="text-white mt-4 mb-2">ID Number</label>
              <input
                type="text"
                {...register('idNumber', { required: 'ID Number is required' })}
                className="p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.idNumber && <span className="text-red-500 text-sm">{errors.idNumber.message}</span>}
            </div>

            {/* Driving License */}
            <div className="flex flex-col">
              <label className="text-white mb-2">Driving License</label>
              <input
                type="text"
                {...register('drivingLicense', { required: 'Driving License is required' })}
                className="p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.drivingLicense && <span className="text-red-500 text-sm">{errors.drivingLicense.message}</span>}
            </div>

            {/* Payment Method */}
            <div className="flex flex-col">
              <label className="text-white mb-2">Payment Method</label>
              <select
                {...register('paymentMethod', { required: 'Payment Method is required' })}
                className="p-3 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="creditCard">Credit Card</option>
                <option value="debitCard">Debit Card</option>
                <option value="paypal">PayPal</option>
              </select>
              {errors.paymentMethod && <span className="text-red-500 text-sm">{errors.paymentMethod.message}</span>}
            </div>

            {/* Additional Options */}
            <div className="flex flex-col">
              <label className="text-white mb-2">Additional Options</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center text-white">
                  <input
                    type="checkbox"
                    {...register('gps')}
                    className="mr-2 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
                  />
                  GPS
                </label>
                <label className="flex items-center text-white">
                  <input
                    type="checkbox"
                    {...register('childSeat')}
                    className="mr-2 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
                  />
                  Child Seat
                </label>
              </div>
            </div>
          </div>

          <button type="submit" className="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-colors duration-300">
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
