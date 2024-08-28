import { useState } from 'react';
import Loader from "@/component/Loader/Loader";
import { useDeleteCarMutation, useGetCarsQuery, useUpdateCarMutation } from '@/redux/feature/cars/carsApi';
import { TCar } from '@/types/userTypes';
import { toast } from 'sonner';

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
                        toast.success(res?.message);
                    }
                } catch (error) {
                    toast.error("Failed to delete the car. Please try again.");
                    console.error(error);
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
        } catch (error) {
            toast.error("Failed to update the car. Please try again.");
            console.error(error);
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="max-w-screen-2xl mx-auto mt-10">
            {cars.length > 0 ? (
                <>
                    <h1 className="text-2xl text-center font-bold mb-4">All Cars</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border">
                            <thead>
                                <tr className="text-center">
                                    <th className="py-2 px-4 border">Image</th>
                                    <th className="py-2 px-4 border">Name</th>
                                    <th className="py-2 px-4 border">Brand</th>
                                    <th className="py-2 px-4 border">Color</th>
                                    <th className="py-2 px-4 border">Price Per Hour</th>
                                    <th className="py-2 px-4 border">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cars.map((car) => (
                                    <tr key={car?._id} className="text-center">
                                        <td className="py-2 px-4 border">
                                            <img src={car?.image} alt={car?.name} className="w-16 h-16 object-cover mx-auto"/>
                                        </td>
                                        <td className="py-2 px-4 border">{car?.name}</td>
                                        <td className="py-2 px-4 border">{car?.brand}</td>
                                        <td className="py-2 px-4 border">{car?.color}</td>
                                        <td className="py-2 px-4 border">${car?.pricePerHour.toFixed(2)}</td>
                                        <td className="py-2 px-4 border">
                                            <button
                                                onClick={() => handleEdit(car)}
                                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition m-1"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(car?._id)}
                                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition m-1"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <div className="flex flex-col justify-center items-center mt-20 space-y-6 p-4">
                    <h1 className="text-4xl font-bold text-gray-700 text-center">No Cars Available</h1>
                    <p className="text-lg text-gray-500 text-center">Please add some cars to display</p>
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
