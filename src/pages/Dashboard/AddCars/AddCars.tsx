import { useAddCarsMutation } from '@/redux/feature/cars/carsApi';
import { TCar } from '@/types/userTypes';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';

const AddCars: React.FC = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<TCar>();
    const [features, setFeatures] = useState<string[]>([]);
    const [newFeature, setNewFeature] = useState<string>('');
    const [addCars] = useAddCarsMutation()

    const handleAddFeature = () => {
        const trimmedFeature = newFeature.trim();
        if (trimmedFeature && !features.includes(trimmedFeature)) {
            setFeatures((prevFeatures) => [...prevFeatures, trimmedFeature]);
            setNewFeature(''); // Clear the input field after adding
        }
    };

    const handleRemoveFeature = (featureToRemove: string) => {
        setFeatures((prevFeatures) => prevFeatures.filter((feature) => feature !== featureToRemove));
    };

    const onSubmit: SubmitHandler<TCar> = async (data) => {
        // Parse the pricePerHour to a float with two decimal places
        const pricePerHour = parseFloat(parseFloat(data.pricePerHour.toString()).toFixed(2));

        // Add features to the data before submitting
        const carData = { ...data, pricePerHour, features };
        console.log(carData);

        try {
            const res = await addCars(carData).unwrap();
            if (res?.success) {
                toast.success(res?.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='mx-6'>
            <h1 className='text-4xl font-extrabold text-center mt-10 mb-12'>Add Cars</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 my-10">

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Brand</label>
                        <input
                            {...register('brand', { required: 'Brand is required' })}
                            className="w-full p-3 border border-gray-300 rounded-sm shadow-sm"
                        />
                        {errors.brand && <span className="text-red-500 text-sm">{errors.brand.message}</span>}
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                        <input
                            {...register('name', { required: 'Name is required' })}
                            className="w-full p-3 border border-gray-300 rounded-sm shadow-sm"
                        />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex flex-col">
                        <label className="mb-2 text-sm font-medium text-gray-700">Color</label>
                        <input
                            {...register('color', { required: 'Color is required' })}
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.color && <span className="mt-1 text-red-500 text-sm">{errors.color.message}</span>}
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-2 text-sm font-medium text-gray-700">Price per Hour</label>
                        <input
                            type="text"
                            {...register('pricePerHour', {
                                required: 'Price per hour is required',
                            })}
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.pricePerHour && <span className="mt-1 text-red-500 text-sm">{errors.pricePerHour.message}</span>}
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            {...register('image', { required: 'Image URL is required' })}
                            className="w-full p-3 border border-gray-300 rounded-sm shadow-sm"
                        />
                        {errors.image && <span className="text-red-500 text-sm">{errors.image.message}</span>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Location</label>
                        <input
                            {...register('location', { required: 'Location URL is required' })}
                            className="w-full p-3 border border-gray-300 rounded-sm shadow-sm"
                        />
                        {errors.location && <span className="text-red-500 text-sm">{errors.location.message}</span>}
                    </div>
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        {...register('description', { required: 'Description is required' })}
                        className="w-full p-3 border border-gray-300 rounded-sm shadow-sm"
                    />
                    {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
                </div>

                <div className='flex flex-row justify-around items-center'>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Electric</label>
                        <input
                            type="checkbox"
                            {...register('isElectric')}
                            className="mr-2 leading-tight"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">GPS</label>
                        <input
                            type="checkbox"
                            {...register('gps')}
                            className="mr-2 leading-tight"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Child Seat</label>
                        <input
                            type="checkbox"
                            {...register('childSeat')}
                            className="mr-2 leading-tight"
                        />
                    </div>
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Status</label>
                    <select
                        {...register('status', { required: 'Status is required' })}
                        className="w-full p-3 border border-gray-300 rounded-sm shadow-sm"
                    >
                        <option value="">Select Status</option>
                        <option value="available">Available</option>
                        <option value="unavailable">Unavailable</option>
                    </select>
                    {errors.status && <span className="text-red-500 text-sm">{errors.status.message}</span>}
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Features</label>
                    <div className="flex space-x-2">
                        <input
                            value={newFeature}
                            onChange={(e) => setNewFeature(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-sm shadow-sm"
                            placeholder="e.g., Air Conditioning"
                        />
                        <button
                            type="button"
                            onClick={handleAddFeature}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-sm shadow-md hover:bg-indigo-700"
                        >
                            Add
                        </button>
                    </div>
                    <ul className="mt-2 space-y-1">
                        {features.map((feature) => (
                            <li key={feature} className="flex justify-between items-center">
                                <span>{feature}</span>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveFeature(feature)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-sm shadow-md hover:bg-indigo-700 w-full"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddCars;
