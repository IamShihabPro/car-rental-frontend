import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleBookingQuery } from '@/redux/feature/booking/bookingApi';
import { useCretePaymentMutation } from '@/redux/feature/Payment/paymentApi';
import { toast } from 'sonner';

export type PaymentMethod = 'AamarPay' | 'SSLCommerz';

export interface PaymentDetails {
  paymentMethod: PaymentMethod;
  payInfo: any;
}

const Payment: React.FC = () => {
  const [cretePayment, { isLoading: isPaymentLoading, error: paymentError }] = useCretePaymentMutation();

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('AamarPay');
  const [payInfo, setPayInfo] = useState<any>(null);

  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetSingleBookingQuery(id);

  useEffect(() => {
    if (data?.data) {
      setPayInfo(data.data);
    }
  }, [data]);

  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value as PaymentMethod);
  };

  const handleSubmit = async () => {
    if (!payInfo) return;

    const paymentDetails: PaymentDetails = {
      paymentMethod,
      payInfo,
    };

    try {
      if (paymentMethod === 'AamarPay') {
        await aamarPayPayment(paymentDetails);
      } else if (paymentMethod === 'SSLCommerz') {
        await sslCommerzPayment(paymentDetails);
      }

      // Handle successful payment (e.g., redirect to a success page or show a message)
    } catch (error) {
      // Handle payment errors (e.g., show a notification or log the error)
      console.error('Payment failed:', error);
    }
  };

  const aamarPayPayment = async (details: PaymentDetails) => {
    console.log(details.payInfo);
    const res = await cretePayment(details.payInfo); // Sending the full payInfo object
    console.log('AamarPay response:', res);
    window.location.href = res.data.data.payment_url

  };

  const sslCommerzPayment = async (details: PaymentDetails) => {
    console.log('Processing with SSLCommerz:', details);
    
    try {
      const res = await cretePayment(details.payInfo.unwrap());
      if (res?.data?.success) {
        toast.success(res?.data?.message);
      }
    } catch (error: any) {
      console.error(error?.data?.message);
    }
    
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching booking data</div>;
  }

  return (
    <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg mt-20">
      <h2 className="text-2xl font-bold text-white mb-4">Choose Payment Method</h2>

      <div className="mb-4">
        <label className="block text-white font-semibold mb-2">Amount:</label>
        <input
          type="number"
          className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white"
          value={payInfo?.totalCost || ''}
          readOnly
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
            SSL Commerz (optional)
          </label>
        </div>
      </div>

      {paymentMethod === 'AamarPay' && (
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Choose AamarPay</h3>
          {/* Add AamarPay specific fields here */}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            disabled={isPaymentLoading}
          >
            {isPaymentLoading ? 'Processing...' : 'Proceed To Payment'}
          </button>
        </div>
      )}

      {paymentMethod === 'SSLCommerz' && (
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Choose SSLCommerz</h3>
          {/* Add SSLCommerz specific fields here */}
          <button
            onClick={handleSubmit}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
            disabled={isPaymentLoading}
          >
            {isPaymentLoading ? 'Processing...' : 'Proceed To Payment'}
          </button>
        </div>
      )}

      {paymentError && (
        <div className="text-red-500 mt-4">Error processing payment. Please try again.</div>
      )}
    </div>
  );
};

export default Payment;
