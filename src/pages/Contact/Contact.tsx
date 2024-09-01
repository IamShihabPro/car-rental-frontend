import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Bg from '../../assets/images/cars/original.jpg';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add your form submission logic here (e.g., API call)
        console.log('Form submitted:', formData);
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${Bg})` }}
        >
            <div className="bg-white/20 p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-10">
                <h2 className="text-3xl font-bold text-center text-white mb-6">Contact Us</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-4">
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleInputChange} 
                            placeholder="Your Name"
                            className="w-full px-4 py-3 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            placeholder="Your Email"
                            className="w-full px-4 py-3 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <textarea 
                            name="message" 
                            value={formData.message} 
                            onChange={handleInputChange} 
                            placeholder="Your Message"
                            className="w-full px-4 py-3 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            rows={4}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-transparent border border-white text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Message</button>
                </form>

                <div className="mt-8 text-center">
                    <h3 className="text-xl font-semibold mb-2">Our Contact Information</h3>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center mb-2">
                            <FaMapMarkerAlt className="text-blue-500 w-6 h-6 mr-2" />
                            <p>Chattogram, Bangladesh</p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FaPhoneAlt className="text-blue-500 w-6 h-6 mr-2" />
                            <p>(+88) 01850411622</p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FaEnvelope className="text-blue-500 w-6 h-6 mr-2" />
                            <p>mshihab.pro@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
