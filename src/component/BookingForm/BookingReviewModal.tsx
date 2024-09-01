import React from 'react';

type BookingReviewModalProps = {
  isOpen: boolean;
  carDetails: any;  // Replace with your TCar type
  bookingData: any; // Replace with your BookingFormInputs or TBooking type
  onClose: () => void;
  onConfirm: () => void;
};

const BookingReviewModal: React.FC<BookingReviewModalProps> = ({
  isOpen,
  carDetails,
  bookingData,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-white mb-6">Review Your Booking</h2>

        <div className="text-white mb-4">
          <h3 className="text-xl font-semibold mb-2">Car Details</h3>
          <p><strong>Brand:</strong> {carDetails.brand}</p>
          <p><strong>Name:</strong> {carDetails.name}</p>
          <p><strong>Color:</strong> {carDetails.color}</p>
          <p><strong>Price Per Hour:</strong> ${carDetails.pricePerHour.toFixed(2)}</p>
          {/* Add more car details as needed */}
        </div>

        <div className="text-white mb-4">
          <h3 className="text-xl font-semibold mb-2">Booking Details</h3>
          <p><strong>ID Type:</strong> {bookingData.idType}</p>
          <p><strong>ID Number:</strong> {bookingData.idNumber}</p>
          <p><strong>Driving License:</strong> {bookingData.drivingLicense}</p>
          <p><strong>GPS:</strong> {bookingData.gps ? 'Yes' : 'No'}</p>
          <p><strong>Child Seat:</strong> {bookingData.childSeat ? 'Yes' : 'No'}</p>
          <p><strong>Date:</strong> {bookingData.date}</p>
          <p><strong>Start Time:</strong> {bookingData.startTime}</p>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="py-2 px-6 bg-red-600 hover:bg-red-500 text-white rounded-sm transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="py-2 px-6 bg-blue-600 text-white rounded-sm hover:bg-blue-500 transition"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingReviewModal;
