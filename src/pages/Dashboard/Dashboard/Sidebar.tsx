import { FaHome, FaUser, FaCarSide, FaUsers } from 'react-icons/fa';
import { LiaCarSolid } from "react-icons/lia";
import { FaChartColumn } from "react-icons/fa6";
import { TbCarSuv } from "react-icons/tb";
import { IoCloseSharp } from 'react-icons/io5';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppSelector } from '@/redux/hooks';
import { useCurrentToken } from '@/redux/feature/user/userSlice';
import { verifyToken } from '@/utils/verifyToken';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const location = useLocation();

    const token = useAppSelector(useCurrentToken);
    let user;

    if (token) {
        user = verifyToken(token);
    }

    const userNavItems = [
        { id: 'profile', icon: <FaUser className="mr-3 text-xl" />, label: 'Profile', link: '/dashboard/profile' },
        { id: 'mybookings', icon: <LiaCarSolid className="mr-3 text-xl" />, label: 'My Bookings', link: '/dashboard/mybookings' },
        { id: 'home', icon: <FaHome className="mr-3 text-xl" />, label: 'Home', link: '/' },
    ];

    const adminNavItems = [
        { id: 'profile', icon: <FaUser className="mr-3 text-xl" />, label: 'Profile', link: '/dashboard/profile' },
        { id: 'chart', icon: <FaChartColumn className="mr-3 text-xl" />, label: 'Chart', link: '/dashboard/chart' },
        { id: 'addcars', icon: <TbCarSuv className="mr-3 text-xl" />, label: 'Add Cars', link: '/dashboard/addcars' },
        { id: 'allcars', icon: <FaCarSide className="mr-3 text-xl" />, label: 'All Cars', link: '/dashboard/allcars' },
        { id: 'allbookings', icon: <LiaCarSolid className="mr-3 text-xl" />, label: 'All Bookings', link: '/dashboard/allbookings' },
        { id: 'allusers', icon: <FaUsers className="mr-3 text-xl" />, label: 'All Users', link: '/dashboard/allusers' },
        { id: 'home', icon: <FaHome className="mr-3 text-xl" />, label: 'Home', link: '/' }
    ];

    const navItems = user?.role === 'admin' ? adminNavItems : userNavItems;

    return (
        <aside
            className={`fixed top-0 left-0 bg-gray-800 text-white transition-transform transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0 md:relative md:w-64 w-4/6 md:flex md:flex-col min-h-screen z-40`}
        >
            {/* Header with Close Button for Mobile */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <button
                    className="md:hidden p-2 text-2xl text-white"
                    onClick={onClose}
                    aria-label="Close Sidebar"
                >
                    <IoCloseSharp className="w-8 h-8" />
                </button>
            </div>
            {/* Navigation */}
            <nav className="flex-grow overflow-y-auto">
                <ul className="space-y-1">
                    {navItems.map(({ id, icon, label, link }) => (
                        <NavLink
                            to={link}
                            key={id}
                            className={`flex items-center p-4 hover:bg-gray-700 transition duration-150 ease-in-out ${
                                location.pathname === link ? 'bg-gray-700' : ''
                            }`}
                            aria-label={label}
                        >
                            {icon}
                            <span className="ml-3">{label}</span>
                        </NavLink>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
