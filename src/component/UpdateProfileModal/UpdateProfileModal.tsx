import React from "react";
import { TProfileUpdate } from "@/pages/Dashboard/Profile/Profile";

interface UpdateProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    formData: TProfileUpdate;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const UpdateProfileModal: React.FC<UpdateProfileModalProps> = ({ isOpen, onClose, formData, handleInputChange, handleSubmit }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-800 p-6 rounded-sm w-11/12 md:w-2/3 lg:w-1/2">
                <h2 className="text-2xl font-bold mb-6 text-white">Update Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <label className="text-white">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-transparent rounded-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white bg-gray-700"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-white">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-transparent rounded-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white bg-gray-700"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-white">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-transparent rounded-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white bg-gray-700"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-white">Image URL</label>
                            <input
                                type="text"
                                name="image"
                                value={formData.image}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-transparent rounded-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white bg-gray-700"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-4 py-2 px-4 bg-red-600 text-white rounded-sm shadow-md hover:bg-red-500 transition duration-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="py-2 px-4 bg-blue-600 text-white rounded-sm shadow-md hover:bg-blue-500 transition duration-300"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfileModal;
