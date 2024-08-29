import EmptyComponent from "@/component/Loader/EmptyComponent";
import Loader from "@/component/Loader/Loader";
import { useGetMyBookingsQuery } from "@/redux/feature/booking/bookingApi";
import { useCurrentToken } from "@/redux/feature/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import React from "react";

type TBooking = {
  idType: 'nid' | 'passport';
  idNumber: string;
  drivingLicense: string;
  paymentMethod: string;
  gps: boolean;
  childSeat: boolean;
  carId: string;
  date: string;
  startTime: string;
};

const MyBookings: React.FC = () => {
    const token = useAppSelector(useCurrentToken);
    let user;
    if (token) {
        user = verifyToken(token);
    }
    
    const { data, isLoading, isError } = useGetMyBookingsQuery(user?.email as string);
    const bookings = data?.data as TBooking[] || [];

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <EmptyComponent/>
    }

    return (
        <div className="max-w-screen-2xl mx-auto mt-10 p-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-800">My Bookings</h1>
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
                            <th className="py-3 px-4 border">Payment Method</th>
                            <th className="py-3 px-4 border">GPS</th>
                            <th className="py-3 px-4 border">Child Seat</th>
                            <th className="py-3 px-4 border">Date</th>
                            <th className="py-3 px-4 border">Start Time</th>
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
                                <td className="py-3 px-4 border font-semibold text-gray-700">{booking.paymentMethod}</td>
                                <td className="py-3 px-4 border">
                                    {booking.gps ? 'Yes' : 'No'}
                                </td>
                                <td className="py-3 px-4 border">
                                    {booking.childSeat ? 'Yes' : 'No'}
                                </td>
                                <td className="py-3 px-4 border font-semibold text-gray-700">
                                    {new Date(booking.date).toLocaleDateString()}
                                </td>
                                <td className="py-3 px-4 border font-semibold text-gray-700">
                                    {booking.startTime}
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
