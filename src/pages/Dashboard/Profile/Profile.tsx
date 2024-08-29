import Loader from "@/component/Loader/Loader";
import { useGetSingleUserByEmailQuery } from "@/redux/feature/user/userApi";
import { useCurrentToken } from "@/redux/feature/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import React from "react";

export type TSignup = {
    name: string;
    email: string;
    role: string;
    phone: string;
    address: string;
    image: string;
};

const Profile: React.FC = () => {
    const token = useAppSelector(useCurrentToken);
    let user;

    if (token) {
        user = verifyToken(token);
    }

    const { data, isLoading } = useGetSingleUserByEmailQuery(user?.email);
    const userInfo = data?.data as TSignup;

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex items-center p-6 bg-gradient-to-r from-blue-500 to-indigo-600">
                    <img
                        src={userInfo?.image || "/default-avatar.png"}
                        alt={userInfo?.name}
                        className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                    <div className="ml-6 text-white">
                        <h2 className="text-3xl font-bold">{userInfo?.name}</h2>
                        <p className="mt-2 text-lg">{userInfo?.email}</p>
                        <p className="mt-1 text-sm font-semibold">
                            Role: <span className="capitalize">{userInfo?.role}</span>
                        </p>
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Personal Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-600">Phone</h4>
                            <p className="mt-2 text-gray-700">{userInfo?.phone || "N/A"}</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-600">Address</h4>
                            <p className="mt-2 text-gray-700">{userInfo?.address || "N/A"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
