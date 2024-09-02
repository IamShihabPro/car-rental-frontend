import { useState } from 'react';
import Loader from "@/component/Loader/Loader";
import { useDeleteCarMutation, useGetCarsQuery, useUpdateCarMutation } from '@/redux/feature/cars/carsApi';
import { toast } from 'sonner';
import UpdateCarModal from './UpdateCarModal';

type TCarStatus = 'available' | 'unavailable';
interface TCar {
    _id: string;
    brand: string;
    name: string;
    description: string;
    color: string;
    image: string;
    location: string;
    isElectric: boolean;
    status: TCarStatus; 
    features: string[];
    pricePerHour: number;
}

const AllCars = () => {
    const { data, isLoading } = useGetCarsQuery(undefined);
    const [deleteCar] = useDeleteCarMutation();
    const [updateCar] = useUpdateCarMutation();

    const [selectedCar, setSelectedCar] = useState<TCar | null>(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const cars = data?.data as TCar[] || [];

    const handleEdit = (car: TCar) => {
        setSelectedCar(car);
        setModalOpen(true);
    };

    const handleDelete = async (carId: string) => {
        if (carId) {
            const confirmDelete = window.confirm("Are you sure you want to delete this car?");
            if (confirmDelete) {
                try {
                    const res = await deleteCar(carId).unwrap();
                    if (res?.success) {
                        toast.success(res?.data?.message);
                    }
                } catch (error: any) {
                    toast.error(error?.data?.message);
                }
            }
        }
    };

    const handleUpdateCar = async (updatedCar: TCar) => {
        try {
            const res = await updateCar({ id: selectedCar!?._id, ...updatedCar }).unwrap();
            if (res?.success) {
                toast.success("Car updated successfully!");
                setModalOpen(false);
            }
        } catch (error: any) {
            toast.error(error?.data?.message);
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="max-w-screen-2xl mx-auto mt-10 p-4">
            {cars.length > 0 ? (
                <>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-800">All Cars</h1>
                    <div className="overflow-x-auto shadow-md sm:rounded-lg mx-4">
                        <table className="min-w-full bg-white border rounded-lg overflow-hidden">
                            <thead className="bg-gray-800 text-white">
                                <tr className="text-center">
                                    <th className="py-3 px-4 border">Image</th>
                                    <th className="py-3 px-4 border">Name</th>
                                    <th className="py-3 px-4 border">Brand</th>
                                    <th className="py-3 px-4 border">Color</th>
                                    <th className="py-3 px-4 border">Status</th>
                                    <th className="py-3 px-4 border">Price Per Hour</th>
                                    <th className="py-3 px-4 border">Location</th>
                                    <th className="py-3 px-4 border">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cars.map((car) => (
                                    <tr 
                                        key={car?._id} 
                                        className="text-center hover:bg-gray-50 transition duration-150 ease-in-out"
                                    >
                                        <td className="py-3 px-4 border">
                                            <img 
                                                src={car?.image} 
                                                alt={car?.name} 
                                                className="w-20 h-20 object-cover rounded-md mx-auto shadow-lg"
                                            />
                                        </td>
                                        <td className="py-3 px-4 border font-semibold text-gray-700">{car?.name}</td>
                                        <td className="py-3 px-4 border font-semibold text-gray-600">{car?.brand}</td>
                                        <td className="py-3 px-4 border font-semibold text-gray-600">{car?.color}</td>
                                        <td className="py-3 px-4 border">
                                            <span 
                                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                    car?.status === 'available' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'
                                                }`}
                                            >
                                                {car?.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 border font-semibold text-gray-700">${car?.pricePerHour.toFixed(2)}</td>
                                        <td className="py-3 px-4 border font-semibold text-gray-600">{car?.location}</td>
                                        <td className="py-3 px-4 border">
                                           <div className='flex justify-center space-x-2'>
                                            <button
                                                    onClick={() => handleEdit(car)}
                                                    className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 transition transform hover:scale-105 shadow-sm"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(car?._id)}
                                                    className="bg-red-500 text-white px-4 py-2 rounded-sm hover:bg-red-600 transition transform hover:scale-105 shadow-sm"
                                                >
                                                    Delete
                                                </button>
                                           </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <div className="flex flex-col justify-center items-center mt-20 space-y-6 p-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-700">No Cars Available</h1>
                    <p className="text-lg text-gray-500">Please add some cars to display.</p>
                </div>
            )}

            {selectedCar && (
                <UpdateCarModal
                    car={selectedCar}
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleUpdateCar}
                />
            )}
        </div>
    );
};

export default AllCars;
