import { useState } from "react";
import { Link } from "react-router-dom";
import Bg from '../../assets/images/cars/bmw-5.webp';

interface IFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
    address: string;
    termsAccepted: boolean;
}

const Signup: React.FC = () => {
    const [formData, setFormData] = useState<IFormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        address: '',
        termsAccepted: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div 
            className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${Bg})` }}
        >
            <div className="w-full max-w-2xl mx-auto p-8 bg-gray-900/70 rounded-lg shadow-2xl backdrop-blur-md">
                <h3 className="text-3xl font-bold text-center mb-8 text-white tracking-wider">
                    Create an Account <span className="text-blue-500">Sign Up</span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-1">
                            <input 
                                type="text" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleInputChange} 
                                placeholder="Enter Your Name"
                                className="w-full px-4 py-3 border border-transparent rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white bg-gray-800 transition duration-200"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleInputChange} 
                                placeholder="Enter Your Email"
                                className="w-full px-4 py-3 border border-transparent rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white bg-gray-800 transition duration-200"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <input 
                                type="password" 
                                name="password" 
                                value={formData.password} 
                                onChange={handleInputChange} 
                                placeholder="Enter Your Password"
                                className="w-full px-4 py-3 border border-transparent rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white bg-gray-800 transition duration-200"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <input 
                                type="password" 
                                name="confirmPassword" 
                                value={formData.confirmPassword} 
                                onChange={handleInputChange} 
                                placeholder="Confirm Your Password"
                                className="w-full px-4 py-3 border border-transparent rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white bg-gray-800 transition duration-200"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <input 
                                type="tel" 
                                name="phoneNumber" 
                                value={formData.phoneNumber} 
                                onChange={handleInputChange} 
                                placeholder="Enter Your Phone Number"
                                className="w-full px-4 py-3 border border-transparent rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white bg-gray-800 transition duration-200"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <input 
                                type="text" 
                                name="address" 
                                value={formData.address} 
                                onChange={handleInputChange} 
                                placeholder="Enter Your Address"
                                className="w-full px-4 py-3 border border-transparent rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white bg-gray-800 transition duration-200"
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
                                target="_blank"
                            >
                                Terms & Conditions
                            </Link>
                        </label>
                    </div>

                    <div className="mt-6">
                        <button 
                            type="submit" 
                            className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-md text-white font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Sign Up
                        </button>
                    </div>

                    <p className="text-gray-400 text-center mt-4">
                        Already have an account? 
                        <Link className="ml-1 text-blue-500 font-bold underline" to='/login'> Login </Link>
                    </p> 
                </form>
            </div>    
        </div>
    );
};

export default Signup;
