import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    BarChart,
    Bar,
} from 'recharts';
import EmptyComponent from "@/component/Loader/EmptyComponent";
import Loader from "@/component/Loader/Loader";
import { useGetBookingsQuery } from "@/redux/feature/booking/bookingApi";
import { TCar } from '@/types/userTypes';
import { useGetCarsQuery } from '@/redux/feature/cars/carsApi';

const COLORS = ['#6D28D9', '#EC4899', '#10B981', '#F59E0B', '#3B82F6', '#F43F5E', '#6366F1', '#14B8A6'];

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
    car: TCar;
    date: string;
    startTime: string;
    isCancel: boolean;
    isConfirm: boolean;
    isCarReturn: boolean;
    isPaid: boolean;
    isDelete: boolean;
    totalCost: number;
    user: TUser;
};

const Chart = () => {
    const { data: bookingsData, isLoading: bookingsLoading, isError: bookingsError } = useGetBookingsQuery(undefined);
    const { data: carsData, isLoading: carsLoading, isError: carsError } = useGetCarsQuery(undefined);

    if (bookingsLoading || carsLoading) {
        return <Loader />;
    }

    if (bookingsError || carsError) {
        return <EmptyComponent />;
    }

    const cars = carsData.data as TCar[] || [];
    const bookings = bookingsData.data as TBooking[] || [];

    // Calculate the total revenue from paid bookings
    const totalRevenue = bookings
        .filter(booking => booking.isPaid)
        .reduce((sum, booking) => sum + booking.totalCost, 0);

    // Group bookings by date and calculate revenue per date
    const revenueData = bookings
        .filter(booking => booking.isPaid)
        .reduce((acc, booking) => {
            const date = new Date(booking.date).toLocaleDateString();
            const existingEntry = acc.find(entry => entry.date === date);
            if (existingEntry) {
                existingEntry.revenue += booking.totalCost;
            } else {
                acc.push({ date, revenue: booking.totalCost });
            }
            return acc;
        }, [] as { date: string; revenue: number }[]);

    // Create a set of unique brands
    const uniqueBrands = Array.from(new Set(cars.map(car => car.brand)));
    const brandCount = uniqueBrands.length;

    // Data for the brand distribution pie chart
    const brandData = uniqueBrands.map(brand => ({
        name: brand,
        value: cars.filter(car => car.brand === brand).length,
    }));

    // Data for car type distribution
    const carTypeData = [
        { name: 'Electric', value: cars.filter(car => car.isElectric).length },
        { name: 'Non-Electric', value: cars.filter(car => !car.isElectric).length },
    ];
    const carGPSData = [
        { name: 'GPS', value: cars.filter(car => car.gps).length },
        { name: 'Non-GPS', value: cars.filter(car => !car.gps).length },
    ];
    const carChildSeatData = [
        { name: 'Child Seat', value: cars.filter(car => car.childSeat).length },
        { name: 'Non-Child Seat', value: cars.filter(car => !car.childSeat).length },
    ];

    return (
        <div className="p-8 bg-gray-900 min-h-screen">
            <h1 className="text-4xl font-extrabold mb-10 text-blue-500 drop-shadow-lg">Car and Booking Overview</h1>

            <div className="p-6 mb-10 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-3xl font-semibold mb-4 text-indigo-600">Revenue Overview</h2>
                <p className="text-xl font-medium text-green-700 mb-4">Total Revenue: <span className="font-bold">৳{totalRevenue.toFixed(2)}</span></p>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '10px', color: '#333', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }} />
                        <Legend />
                        <Bar dataKey="revenue" fill="#82ca9d" barSize={50} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="mb-10 p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-3xl font-semibold mb-4 text-indigo-600">Car Brands</h2>
                <p className="text-xl font-medium text-indigo-700 mb-6">Total Car Brands: <span className="font-bold">{brandCount}</span></p>
                <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                        <Pie
                            data={brandData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, value }) => `${name}: ${value}`}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {brandData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '10px', color: '#333', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }} />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="mb-10 p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-3xl font-semibold mb-4 text-indigo-600">Car Type Distribution</h2>
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart>
                            <Pie
                                data={carTypeData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                outerRadius={150}
                                fill="#82ca9d"
                                dataKey="value"
                            >
                                {carTypeData.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '10px', color: '#333', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div>
                    <h2 className="text-3xl font-semibold mb-4 text-indigo-600">GPS Distribution</h2>
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart>
                            <Pie
                                data={carGPSData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                outerRadius={150}
                                fill="#82ca9d"
                                dataKey="value"
                            >
                                {carGPSData.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '10px', color: '#333', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div>
                    <h2 className="text-3xl font-semibold mb-4 text-indigo-600">Child Seat Distribution</h2>
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart>
                            <Pie
                                data={carChildSeatData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                outerRadius={150}
                                fill="#82ca9d"
                                dataKey="value"
                            >
                                {carChildSeatData.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '10px', color: '#333', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Chart;
