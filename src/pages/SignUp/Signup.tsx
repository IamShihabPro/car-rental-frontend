import { useState } from "react";
import { Link } from "react-router-dom";
import Bg from '../../assets/images/cars/tesla.avif';

interface IFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
    termsAccepted: boolean;
}

const Signup: React.FC = () => {
    const [formData, setFormData] = useState<IFormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
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
        // Add your signup logic here (e.g., API call)
        console.log('Form submitted:', formData);
    };

    return (
        <div 
            className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${Bg})` }}
        >
            <div className="w-full max-w-xl mx-auto shadow-lg p-10 backdrop-blur-lg bg-white/20 rounded-lg my-20">
                <h3 className="text-xl font-bold text-center mb-10 text-white">
                    Create an Account <span className="text-blue-600">Sign Up</span>
                </h3>

                <form onSubmit={handleSubmit} className="py-4 px-3">
                    <div className="mb-5">
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleInputChange} 
                            placeholder="Enter Your Name"
                            className="w-full px-4 py-3 border-b border-solid border-gray-600 focus:outline-none focus:border-b-blue-500 text-md leading-7 text-blue-500 bg-transparent"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            placeholder="Enter Your Email"
                            className="w-full px-4 py-3 border-b border-solid border-gray-600 focus:outline-none focus:border-b-blue-500 text-md leading-7 text-blue-500 bg-transparent"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <input 
                            type="password" 
                            name="password" 
                            value={formData.password} 
                            onChange={handleInputChange} 
                            placeholder="Enter Your Password"
                            className="w-full px-4 py-3 border-b border-solid border-gray-600 focus:outline-none focus:border-b-blue-500 text-md leading-7 text-blue-500 bg-transparent"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            value={formData.confirmPassword} 
                            onChange={handleInputChange} 
                            placeholder="Confirm Your Password"
                            className="w-full px-4 py-3 border-b border-solid border-gray-600 focus:outline-none focus:border-b-blue-500 text-md leading-7 text-blue-500 bg-transparent"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <input 
                            type="tel" 
                            name="phoneNumber" 
                            value={formData.phoneNumber} 
                            onChange={handleInputChange} 
                            placeholder="Enter Your Phone Number"
                            className="w-full px-4 py-3 border-b border-solid border-gray-600 focus:outline-none focus:border-b-blue-500 text-md leading-7 text-blue-500 bg-transparent"
                            required
                        />
                    </div>
                    <div className="mb-5 flex items-center">
                        <input 
                            type="checkbox" 
                            name="termsAccepted" 
                            checked={formData.termsAccepted} 
                            onChange={handleInputChange} 
                            className="mr-2"
                            required
                        />
                        <label className="text-white">
                            I agree to the 
                            <Link 
                                to="/terms" 
                                className="text-blue-500 ml-1" 
                                target="_blank"
                            >
                                Terms & Conditions
                            </Link>
                        </label>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-blue-600 px-4 py-2 text-white rounded-sm">Sign Up</button>
                    </div>

                    <p className="text-gray-800 text-center mt-4">
                        Already have an account? 
                        <Link className="ml-1 text-blue-600 font-bold" to='/login'> Login </Link>
                    </p> 
                </form>
            </div>    
        </div>
    );
};

export default Signup;
