import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Bg from '../../assets/images/cars/bmw-5.webp';
import { TSignup } from "@/types/userTypes";
import { useSignupMutation } from "@/redux/feature/user/userApi";
import { toast } from "sonner";

const Signup: React.FC = () => {
    const [passwordVerify, setPasswordVerify] = useState('')
    const [signup] = useSignupMutation()
    const navigate = useNavigate()

    const [formData, setFormData] = useState<TSignup>({
        name: '',
        email: '',
        role: '',
        password: '',
        confirmPassword: '',
        phone: '',
        address: '',
        image: '',
        termsAccepted: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
    
        if (type === 'checkbox') {
            const { checked } = e.target as HTMLInputElement
            setFormData((prev) => ({
                ...prev,
                [name]: checked
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if( formData.password === formData.confirmPassword){
            
            const {name, email, password, role, address, phone, image} = formData
            const datas = {name, email, password, role, address, phone, image}
                       
            
            try {
                const res = await signup(datas).unwrap();
                if (res?.success) {
                  toast.success(res?.message);
                  navigate('/login')
                }
              } catch (error: any) {
                console.log(error)
                toast.error(error?.data?.message)
              }
        }else{
            setPasswordVerify("Password do not match")
        }
    };

    return (
        <div 
            className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${Bg})` }}
        >
            <div className="w-full max-w-2xl mx-auto p-8 bg-gray-900/80 rounded-lg shadow-2xl backdrop-blur-lg mt-20">
                <h3 className="text-4xl font-bold text-center mb-8 text-white tracking-wider">
                    Create an Account
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-1">
                            <label className="text-white" htmlFor="">Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleInputChange} 
                                placeholder="Enter Your Name"
                                className="w-full px-4 py-3 border border-transparent rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="text-white" htmlFor="">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleInputChange} 
                                placeholder="Enter Your Email"
                                className="w-full px-4 py-3 border border-transparent rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="text-white" htmlFor="">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                value={formData.password} 
                                onChange={handleInputChange} 
                                placeholder="Enter Your Password"
                                className="w-full px-4 py-3 border border-transparent rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                        <label className="text-white" htmlFor="">Confirm Password</label>
                            <input 
                                type="password" 
                                name="confirmPassword" 
                                value={formData.confirmPassword} 
                                onChange={handleInputChange} 
                                placeholder="Confirm Your Password"
                                className="w-full px-4 py-3 border border-transparent rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105"
                                required
                            />
                            <p className="text-red-500 mt-1">{passwordVerify}</p>
                        </div>
                        <div className="col-span-1">
                        <label className="text-white" htmlFor="">Profile Image</label>
                            <input 
                                type="text" 
                                name="image" 
                                value={formData.image} 
                                onChange={handleInputChange} 
                                placeholder="Enter Your Image"
                                className="w-full px-4 py-3 border border-transparent rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                        <label className="text-white" htmlFor="">Role</label>
                            <select 
                                name="role" 
                                value={formData.role} 
                                onChange={handleInputChange} 
                                className="w-full px-4 py-3 border border-transparent rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105"
                                required
                            >
                                <option value="" disabled>Select Role</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div className="col-span-1">
                        <label className="text-white" htmlFor="">Phone Number</label>
                            <input 
                                type="tel" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleInputChange} 
                                placeholder="Enter Your Phone Number"
                                className="w-full px-4 py-3 border border-transparent rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                        <label className="text-white" htmlFor="">Address</label>
                            <input 
                                type="text" 
                                name="address" 
                                value={formData.address} 
                                onChange={handleInputChange} 
                                placeholder="Enter Your Address"
                                className="w-full px-4 py-3 border border-transparent rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <input 
                            type="checkbox" 
                            name="termsAccepted" 
                            checked={formData.termsAccepted} 
                            onChange={handleInputChange} 
                            className="h-5 w-5 text-blue-600 focus:ring-blue-500 focus:ring-2 rounded"
                            required
                        />
                        <label className="text-white">
                            I agree to the 
                            <Link 
                                to="/terms" 
                                className="text-blue-500 underline ml-1" 
                            >
                                Terms & Conditions
                            </Link>
                        </label>
                    </div>

                    <div className="mt-6">
                        <button 
                            type="submit" 
                            className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg text-white font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Sign Up
                        </button>
                    </div>

                    <p className="text-gray-400 text-center mt-6">
                        Already have an account? 
                        <Link className="ml-1 text-blue-500 font-bold" to='/login'> Login </Link>
                    </p> 
                </form>
            </div>    
        </div>
    );
};

export default Signup;
