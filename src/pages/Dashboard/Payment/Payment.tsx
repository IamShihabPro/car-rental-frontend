import React, { useState } from 'react';

export type PaymentMethod = 'AamarPay' | 'SSLCommerz';

export interface PaymentDetails {
  amount: number;
  paymentMethod: PaymentMethod;
}

const Payment: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('AamarPay');
  const [amount, setAmount] = useState<number>(0);

  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value as PaymentMethod);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(event.target.value));
  };

  const handleSubmit = () => {
    const paymentDetails: PaymentDetails = {
      amount,
      paymentMethod,
    };

    if (paymentMethod === 'AamarPay') {
      aamarPayPayment?.(paymentDetails);
    } else if (paymentMethod === 'SSLCommerz') {
      sslCommerzPayment?.(paymentDetails);
    }

    // Handle the response accordingly
  };

  // Mock functions to represent payment integrations (replace with actual implementations)
  const aamarPayPayment = (details: PaymentDetails) => {
    console.log('Processing with AamarPay:', details);
    // Implement AamarPay payment processing here
  };

  const sslCommerzPayment = (details: PaymentDetails) => {
    console.log('Processing with SSLCommerz:', details);
    // Implement SSLCommerz payment processing here
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg mt-20">
      <h2 className="text-2xl font-bold text-white mb-4">Choose Payment Method</h2>

      <div className="mb-4">
        <label className="block text-white font-semibold mb-2">Amount:</label>
        <input
          type="number"
          className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-white font-semibold mb-2">Payment Method:</label>
        <div className="flex space-x-4">
          <label className="text-white">
            <input
              type="radio"
              value="AamarPay"
              checked={paymentMethod === 'AamarPay'}
              onChange={handlePaymentMethodChange}
              className="mr-2"
            />
            Aamar Pay
          </label>
          <label className="text-white">
            <input
              type="radio"
              value="SSLCommerz"
              checked={paymentMethod === 'SSLCommerz'}
              onChange={handlePaymentMethodChange}
              className="mr-2"
            />
            SSLCommerz
          </label>
        </div>
      </div>

      {/* Conditional Layout Rendering */}
      {paymentMethod === 'AamarPay' && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white mb-2">Aamar Pay Details</h3>
          <p className="text-white mb-2">You will be redirected to the Aamar Pay gateway for payment.</p>
          <div className="mb-2">
            <label className="block text-white font-semibold mb-2">Additional Aamar Pay Info:</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white"
              placeholder="Enter any additional info for Aamar Pay"
            />
          </div>
        </div>
      )}

      {paymentMethod === 'SSLCommerz' && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white mb-2">SSLCommerz Details</h3>
          <p className="text-white mb-2">You will be redirected to the SSLCommerz gateway for payment.</p>
          <div className="mb-2">
            <label className="block text-white font-semibold mb-2">Mobile Number:</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white"
              placeholder="Enter your mobile number"
            />
          </div>
          <div className="mb-2">
            <label className="block text-white font-semibold mb-2">Email Address:</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white"
              placeholder="Enter your email address"
            />
          </div>
        </div>
      )}

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Proceed to Pay
      </button>
    </div>
  );
};

export default Payment;
