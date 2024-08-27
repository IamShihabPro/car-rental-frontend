import React from 'react';
import { FaHome, FaUser, FaChartBar, FaCog } from 'react-icons/fa';

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    return (
        <aside className={`fixed inset-0 top-0 left-0 bg-gray-800 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} h-[100vh] z-40 md:translate-x-0 md:relative md:w-64 md:flex md:flex-col`}>
            <button
                className="md:hidden p-4 text-2xl absolute top-0 right-0 mt-4 mr-4 text-white"
                onClick={onClose}
            >
                ×
            </button>
            <h2 className="text-2xl font-bold p-4">Dashboard</h2>
            <nav>
                <ul>
                    <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                        <FaHome className="mr-3" />
                        Home
                    </li>
                    <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                        <FaUser className="mr-3" />
                        Profile
                    </li>
                    <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                        <FaChartBar className="mr-3" />
                        Analytics
                    </li>
                    <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                        <FaCog className="mr-3" />
                        Settings
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
