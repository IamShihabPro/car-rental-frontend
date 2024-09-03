import React, { useState } from 'react';
import { useDeleteUserMutation, useGetAllUsersQuery, useUpdateUserMutation } from "@/redux/feature/user/userApi";
import { toast } from 'sonner';
import Loader from '@/component/Loader/Loader';
import ErrorComponent from '@/component/Loader/ErrorComponent';

export type TUser = {
    _id: string;
    name: string;
    email: string;
    role: string;
    phone: string;
    address: string;
    image: string;
}

export type TUserRole = 'admin' | 'user';

const AllUsers = () => {
    const [updateUser] = useUpdateUserMutation();
    const [deleteUser] = useDeleteUserMutation();

    const { data, isLoading, isError } = useGetAllUsersQuery(undefined);
    const users: TUser[] | undefined = data?.data;

    const [roleModalIsOpen, setRoleModalIsOpen] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<TUser | null>(null);
    const [selectedRole, setSelectedRole] = useState<TUserRole>('user');

    const openRoleModal = (user: TUser) => {
        setSelectedUser(user);
        setSelectedRole(user.role as TUserRole);
        setRoleModalIsOpen(true);
    };

    const closeRoleModal = () => {
        setRoleModalIsOpen(false);
        setSelectedUser(null);
    };

    const openDeleteModal = (user: TUser) => {
        setSelectedUser(user);
        setDeleteModalIsOpen(true);
    };

    const closeDeleteModal = () => {
        setDeleteModalIsOpen(false);
        setSelectedUser(null);
    };

    const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRole(event.target.value as TUserRole);
    };

    const handleSaveRole = async () => {
        if (selectedUser) {
            const userData = {
                role: selectedRole,
            };

            try {
                const res = await updateUser({ id: selectedUser._id, ...userData }).unwrap();
                if (res?.success) {
                    toast.success(res?.message);
                }
            } catch (error: any) {
                console.error(error?.data?.message);
                toast.error(error?.data?.message || "An error occurred.");
            }
            closeRoleModal();
        }
    };

    const handleDeleteUser = async () => {
        if (selectedUser) {
            try {
                const res = await deleteUser(selectedUser._id).unwrap();
                if (res?.success) {
                    toast.success(res?.data?.message);
                }
            } catch (error: any) {
                console.error(error?.data?.message);
                toast.error(error?.data?.message || "An error occurred.");
            }
            closeDeleteModal();
        }
    };

    if (isLoading) {
        return <Loader />
    }

    if (isError) {
        return <ErrorComponent />
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">All Users</h1>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Image</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Role</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Phone</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users?.map((user) => (
                            <tr key={user._id} className="hover:bg-gray-100">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <img
                                        src={user.image}
                                        alt={`${user.name}'s profile`}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {user.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.email}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.role}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.phone}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex justify-center items-center gap-4">
                                    <button
                                        className="text-white bg-green-500 px-4 py-2 rounded"
                                        onClick={() => openRoleModal(user)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="text-white bg-red-500 px-4 py-2 rounded"
                                        onClick={() => openDeleteModal(user)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Role Modal */}
            {roleModalIsOpen && selectedUser && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
                        <h2 className="text-xl font-bold mb-4">Edit User Role</h2>
                        <p className="mb-4">Change role for {selectedUser.name}</p>
                        <select
                            value={selectedRole}
                            onChange={handleRoleChange}
                            className="block w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                        <div className="mt-6 flex justify-end space-x-4">
                            <button
                                onClick={closeRoleModal}
                                className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-sm"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveRole}
                                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-sm"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Modal */}
            {deleteModalIsOpen && selectedUser && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
                        <h2 className="text-xl font-bold mb-4">Delete User</h2>
                        <p className="mb-4">Are you sure you want to delete {selectedUser.name}?</p>
                        <div className="mt-6 flex justify-end space-x-4">
                            <button
                                onClick={closeDeleteModal}
                                className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-sm"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteUser}
                                className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-sm"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllUsers;
