import React, { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';

type TCarStatus = 'available' | 'unavailable';

interface IUpdateCarModalProps {
    car: {
        brand: string;
        name: string;
        description: string;
        pricePerHour: number;
        features: string[];
        status: TCarStatus; 
        color: string;
        image: string;
    };
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: any) => void;
}

const UpdateCarModal: React.FC<IUpdateCarModalProps> = ({ car, isOpen, onClose, onSubmit }) => {
    const [formValues, setFormValues] = useState({
        brand: '',
        name: '',
        description: '',
        pricePerHour: '',
        features: [] as string[],
        status: 'available' as TCarStatus,
        color: '',
        image: '',
    });

    const [newFeature, setNewFeature] = useState('');

    useEffect(() => {
        if (car) {
            setFormValues({
                brand: car.brand,
                name: car.name,
                description: car.description,
                pricePerHour: car.pricePerHour.toFixed(2),
                features: car.features,
                status: car.status,
                color: car.color,
                image: car.image,
            });
        }
    }, [car]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormValues(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddFeature = () => {
        if (newFeature && !formValues.features.includes(newFeature)) {
            setFormValues(prev => ({
                ...prev,
                features: [...prev.features, newFeature],
            }));
            setNewFeature('');
        }
    };

    const handleRemoveFeature = (featureToRemove: string) => {
        setFormValues(prev => ({
            ...prev,
            features: prev.features.filter(feature => feature !== featureToRemove),
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const submitData = {
            ...formValues,
            pricePerHour: parseFloat(formValues.pricePerHour),
        };
        onSubmit(submitData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg overflow-auto max-h-[80vh]">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold mb-4">Update Car</h2>
                    <button onClick={onClose} className="top-2 right-2 text-gray-600">
                        <ImCross />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Brand */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Brand</label>
                        <input
                            name="brand"
                            value={formValues.brand}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-sm"
                            required
                        />
                    </div>

                    {/* Name */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                        <input
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-sm"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            value={formValues.description}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-sm resize-none"
                            rows={4}
                            required
                        />
                    </div>

                    {/* Price Per Hour */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Price Per Hour</label>
                        <input
                            name="pricePerHour"
                            type="number"
                            value={formValues.pricePerHour}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-sm"
                            required
                        />
                    </div>

                    {/* Features */}
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
                            {formValues.features.map((feature) => (
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

                    {/* Status */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Status</label>
                        <select
                            name="status"
                            value={formValues.status}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-sm"
                            required
                        >
                            <option value="available">Available</option>
                            <option value="unavailable">Unavailable</option>
                        </select>
                    </div>

                    {/* Color */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Color</label>
                        <input
                            name="color"
                            value={formValues.color}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-sm"
                            required
                        />
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            name="image"
                            value={formValues.image}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-sm"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-sm shadow-md hover:bg-indigo-700 w-full"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCarModal;
