import React from 'react';
import { FaBars, FaBell, FaUser } from 'react-icons/fa';

const Header = ({ onSidebarToggle }: { onSidebarToggle: () => void }) => {
    return (
        <header className="bg-gray-800 text-white p-4 flex items-center justify-between w-full fixed top-0 left-0 z-30 shadow-md">
            {/* Sidebar Toggle Button */}
            <button
                className="md:hidden text-2xl focus:outline-none"
                onClick={onSidebarToggle}
                aria-label="Toggle Sidebar"
            >
                <FaBars />
            </button>

            {/* Title */}
            <h1 className="text-2xl font-bold flex-1 text-center md:text-left">
                My Dashboard
            </h1>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
                <button className="text-gray-300 hover:text-white focus:outline-none">
                    <FaBell className="text-xl" />
                </button>
                <button className="flex items-center space-x-2 border border-gray-600 rounded-full px-4 py-2 hover:bg-gray-700 transition">
                    <FaUser className="text-xl" />
                    <span className="hidden md:inline">Profile</span>
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded focus:outline-none transition">
                    Logout
                </button>
            </div>
        </header>
    );
};

export default Header;
