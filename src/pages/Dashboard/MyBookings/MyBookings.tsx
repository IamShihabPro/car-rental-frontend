import EmptyComponent from "@/component/Loader/EmptyComponent";
import Loader from "@/component/Loader/Loader";
import { useCancelBookingsMutation, useGetMyBookingsQuery } from "@/redux/feature/booking/bookingApi";
import { useCurrentToken } from "@/redux/feature/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import React from "react";
import { toast } from "sonner";

type TBooking = {
  _id: string;
  idType: 'nid' | 'passport';
  idNumber: string;
  drivingLicense: string;
  paymentMethod: string;
  carId: string;
  date: string;
  startTime: string;
  isCancel: boolean;
  isConfirm: boolean;
  isDelete: boolean;
};

const MyBookings: React.FC = () => {
    const [cancelBookings] = useCancelBookingsMutation()
    const token = useAppSelector(useCurrentToken);
    let user;
    if (token) {
        user = verifyToken(token);
    }
    
    const { data, isLoading, isError } = useGetMyBookingsQuery(user?.email as string);
    const bookings = data?.data as TBooking[] || [];

    const handleCancel = async (id: string) => {
        try {
          const res = await cancelBookings(id).unwrap();
          if (res?.success) {
            toast.success(res?.data?.message || "Booking canceled successfully.");
          }
        } catch (error: any) {
            toast.error(error?.data?.message);
        }
      };

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <EmptyComponent/>
    }

    return (
        <div className="max-w-screen-2xl mx-auto mt-10 p-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-600 mt-10">My Bookings</h1>
           {
            bookings.length === 0 ? <>
                <EmptyComponent/>
            </> : 
            <>
             <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full bg-white border rounded-lg overflow-hidden">
                    <thead className="bg-gray-800 text-white">
                        <tr className="text-center">
                            <th className="py-3 px-4 border">ID Type</th>
                            <th className="py-3 px-4 border">ID Number</th>
                            <th className="py-3 px-4 border">Driving License</th>
                            <th className="py-3 px-4 border">Status</th>
                            <th className="py-3 px-4 border">Payment Method</th>
                            <th className="py-3 px-4 border">Date</th>
                            <th className="py-3 px-4 border">Start Time</th>
                            <th className="py-3 px-4 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr 
                                key={booking.carId} 
                                className="text-center hover:bg-gray-50 transition duration-150 ease-in-out"
                            >
                                <td className="py-3 px-4 border font-semibold text-gray-600 uppercase">{booking.idType}</td>
                                <td className="py-3 px-4 border font-semibold text-gray-600">{booking.idNumber}</td>
                                <td className="py-3 px-4 border font-semibold text-gray-600">{booking.drivingLicense}</td>
                                <td className={`py-3 px-4 border font-semibold ${booking.isConfirm ? 'text-green-400' : 'text-red-400'} `}>{booking.isConfirm === true ? 'Yes' : 'No'}</td>
                                <td className="py-3 px-4 border font-semibold text-gray-700">{booking.paymentMethod}</td>
                                <td className="py-3 px-4 border font-semibold text-gray-700">
                                    {new Date(booking.date).toLocaleDateString()}
                                </td>
                                <td className="py-3 px-4 border font-semibold text-gray-700">
                                    {booking.startTime}
                                </td>
                                <td className="py-3 px-4 border">
                                   <button onClick={() => handleCancel(booking?._id)} className="text-white bg-gray-800 px-4 py-2"> Cancel</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </>
           }
        </div>
    );
};

export default MyBookings;
