import React, { useState, useEffect } from "react";
import Loader from "@/component/Loader/Loader";
import { useGetSingleUserByEmailQuery, useUpdateUserMutation } from "@/redux/feature/user/userApi";
import { useCurrentToken } from "@/redux/feature/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import UpdateProfileModal from "@/component/UpdateProfileModal/UpdateProfileModal";
import { toast } from "sonner";

export type TProfile = {
    name: string;
    email: string;
    role: string;
    phone: string;
    address: string;
    image: string;
};

// Subset type for the form data
export type TProfileUpdate = Pick<TProfile, 'name' | 'phone' | 'address' | 'image'>;

const Profile: React.FC = () => {
    const [updateUser] = useUpdateUserMutation()
    const token = useAppSelector(useCurrentToken);
    let user;

    if (token) {
        user = verifyToken(token);
    }

    const { data, isLoading } = useGetSingleUserByEmailQuery(user?.email);
    const userInfo = data?.data as TProfile;

    // console.log(data)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<TProfileUpdate>({
        name: "",
        phone: "",
        address: "",
        image: "",
    });

    // Set default values when userInfo is available
    useEffect(() => {
        if (userInfo) {
            setFormData({
                name: userInfo.name || "",
                phone: userInfo.phone || "",
                address: userInfo.address || "",
                image: userInfo.image || "",
            });
        }
    }, [userInfo]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Updated Profile Data:", formData);
        try {
            const res = await updateUser({id: data.data._id, ...formData}).unwrap();
            if (res?.success) {
                console.log(res)
              toast.success(res?.message);
            }
          } catch (error: any) {
            console.log(error)
            console.error(error?.data?.message);
          }
        setIsModalOpen(false); 
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex items-center p-6 bg-gradient-to-r from-gray-500 to-indigo-500">
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
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                        >
                            Edit Profile
                        </button>
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

            {/* Modal for updating profile */}
            <UpdateProfileModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default Profile;
