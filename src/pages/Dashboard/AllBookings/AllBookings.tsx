import EmptyComponent from "@/component/Loader/EmptyComponent";
import Loader from "@/component/Loader/Loader";
import { useGetBookingsQuery } from "@/redux/feature/booking/bookingApi";
import { TCar } from "@/types/userTypes";

type TUser = {
    _id: string;
    name: string;
    email: string;
};

type TBooking = {
  _id: string;
  idType: 'nid' | 'passport';
  idNumber: string;
  drivingLicense: string;
  paymentMethod: string;
  car: TCar;
  date: string;
  startTime: string;
  isCancel: boolean;
  isConfirm: boolean;
  isDelete: boolean;
  user: TUser;
};

const AllBookings: React.FC = () => {

    const { data, isLoading, isError } = useGetBookingsQuery(undefined);
    const bookings = data?.data as TBooking[] || [];

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
                            <th className="py-3 px-4 border">Name</th>
                            <th className="py-3 px-4 border">Email</th>
                            <th className="py-3 px-4 border">Car Brand</th>
                            {/* <th className="py-3 px-4 border">Car Name</th> */}
                            <th className="py-3 px-4 border">Id Type</th>
                            <th className="py-3 px-4 border">Id Number</th>
                            <th className="py-3 px-4 border">Driving Licence</th>
                            <th className="py-3 px-4 border">Status</th>
                            <th className="py-3 px-4 border">Booking Date</th>
                            <th className="py-3 px-4 border">Booking Time</th>
                            <th className="py-3 px-4 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr 
                                key={booking._id} 
                                className="text-center hover:bg-gray-50 transition duration-150 ease-in-out"
                            >
                                <td className="py-3 px-4 border font-semibold text-gray-600 uppercase">{booking?.user?.name}</td>
                                <td className="py-3 px-4 border font-semibold text-gray-600 uppercase">{booking?.user?.email}</td>
                                <td className="py-3 px-4 border font-semibold text-gray-600 uppercase">{booking?.car?.brand}</td>
                                {/* <td className="py-3 px-4 border font-semibold text-gray-600 uppercase">{booking?.car?.name}</td> */}
                                <td className="py-3 px-4 border font-semibold text-gray-600 uppercase">{booking.idType}</td>
                                <td className="py-3 px-4 border font-semibold text-gray-600">{booking.idNumber}</td>
                                <td className="py-3 px-4 border font-semibold text-gray-600">{booking.drivingLicense}</td>
                                <td className={`py-3 px-4 border font-semibold ${booking.isConfirm ? 'text-green-400' : 'text-red-400'} `}>{booking.isConfirm === true ? 'Confirm' : 'Not Confirm'}</td>
                                <td className="py-3 px-4 border font-semibold text-gray-700">
                                    {new Date(booking.date).toLocaleDateString()}
                                </td>
                                <td className="py-3 px-4 border font-semibold text-gray-700">
                                    {booking.startTime}
                                </td>
                               <div className="flex flex-row">
                                    <td className="py-3 px-4">
                                    <button className="text-white bg-green-500 px-4 py-2"> Confirm</button>
                                    </td>
                                    <td className="py-3 px-4">
                                    <button className="text-white bg-red-500 px-4 py-2"> Delete</button>
                                    </td>
                               </div>
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

export default AllBookings;
