import {
    LineChart,
    Line,
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

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6347', '#FF4500', '#FFD700', '#ADFF2F'];

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
    totalCost: number; // Assuming this property exists
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

    return (
        <div className="p-8 bg-gradient-to-r from-green-400 to-blue-500 min-h-screen">
            <h1 className="text-4xl font-extrabold mb-10 text-indigo-800">Car and Booking Overview</h1>

            <div className="mb-10 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-4 text-pink-600">Total Car Brands</h2>
                <p className="text-xl font-medium text-purple-700">Total Unique Brands: <span className="font-bold">{brandCount}</span></p>
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
                        <Tooltip contentStyle={{ backgroundColor: '#f0f4f7', borderRadius: '10px', color: '#333' }} />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="mb-10 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-4 text-pink-600">Car Type Distribution</h2>
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
                        <Tooltip contentStyle={{ backgroundColor: '#f0f4f7', borderRadius: '10px', color: '#333' }} />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-4 text-pink-600">Revenue Overview</h2>
                <p className="text-xl font-medium text-green-700 mb-4">Total Revenue: <span className="font-bold">${totalRevenue.toFixed(2)}</span></p>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip contentStyle={{ backgroundColor: '#f0f4f7', borderRadius: '10px', color: '#333' }} />
                        <Legend />
                        <Bar dataKey="revenue" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Chart;
