import { Link, NavLink, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState, useEffect } from "react";
import logo from '../../assets/images/cars/car-logo.png'
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentUser } from "@/redux/feature/user/userSlice";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
 

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [navBg, setNavBg] = useState("bg-transparent");
    const dispatch = useAppDispatch()
    const theme = useSelector((state: RootState) => state.theme);

    const handleLogout = () =>{
        dispatch(logout())
    }

    const user = useAppSelector(selectCurrentUser)

    const navItems = [
        { id: 1, link: '/', title: 'Home' },
        { id: 2, link: '/cars', title: 'Cars' },
        { id: 3, link: '/about', title: 'About Us' },
        { id: 4, link: '/contact', title: 'Contact' },
    ];

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
        setNavBg(currentScrollPos > 10 ? "bg-gray-800" : "bg-transparent");
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    return (
        <nav className={`fixed top-0 inset-x-0 z-50 shadow-sm transition-transform duration-300 ${navBg} ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className='hidden md:block lg:block'>
                        <NavLink to="/" className="flex items-center gap-2 text-white">
                            <Link to='/' className="font-bold text-xl">
                                <img src={logo} className='w-20' alt="" />
                            </Link>
                        </NavLink>
                    </div>

                    <div className="hidden md:block lg:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map(({ id, link, title }) => (
                                <NavLink
                                    key={id}
                                    to={link}
                                    className={`hover:scale-105 px-3 py-2 hover:border-b border-white translate-x-2 duration-150 font-semibold rounded-none inline-block ${
                                        location.pathname === link ? `${theme?.isDarkMode === true ? 'text-white' : 'text-blue-500'}` : 'text-slate-400'}`}>
                                    {title}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div className='hidden md:block lg:block'>
                        <div className='flex items-center gap-4'>
                            {
                                user ? <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button className={` px-6 py-2 font-medium ${theme?.isDarkMode === true ? 'text-white border border-white bg-transparent hover:bg-transparent' : 'text-blue-600 border border-blue-500 bg-transparent hover:bg-transparent'}`}>Dashboard</Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        {/* <DropdownMenuLabel>Appearance</DropdownMenuLabel> */}
                                        <DropdownMenuCheckboxItem
                                       
                                        >
                                        <Link to='/dashboard/profile'>Profile</Link>
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuCheckboxItem
                                        onClick={handleLogout}
                                        >
                                        Logout
                                        </DropdownMenuCheckboxItem>
                                    </DropdownMenuContent>
                                    </DropdownMenu>
    
                                </div> : <Link to='/login' className={` px-6 py-2 font-medium ${theme?.isDarkMode === true ? 'text-white border border-white' : 'text-blue-600 border border-blue-500'}`}> Account</Link>
                            }
                            
                            
                            <ThemeToggle/>
                        </div>
                    </div>

                    <div className={`-mr-2 flex md:hidden shadow-md ${theme?.isDarkMode === true ? 'text-white' : 'text-blue-500'}`}>
                        <Hamburger toggled={isOpen} toggle={setIsOpen} />
                    </div>

                    <div className='block md:hidden lg:hidden'>
                        <NavLink to="/" className="flex items-center gap-2 text-white">
                            <Link to='/' className="font-bold text-2xl"><img src={logo} className='w-20' alt="" /></Link>
                        </NavLink>
                    </div>

                    <div className='block md:hidden lg:hidden'>
                        <div className='flex items-center gap-4'>
                            <ThemeToggle/>
                        </div>
                    </div>
                </div>

                <div className={`md:hidden bg-gray-800 lg:hidden py-2 px-2 shadow-sm fixed left-0 top-0 h-[100vh] w-2/3 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className={`-mr-2 bg-gray-800 md:hidden shadow-md inline-block text-white p-3`}>
                        <Hamburger toggled={isOpen} toggle={setIsOpen} />
                    </div>

                    <div className="flex flex-col bg-gray-800 justify-start items-start h-full mt-16">
                        {navItems.map(({ id, link, title }) => (
                            <NavLink
                                key={id}
                                to={link}
                                className={`block px-3 py-2 ms-6 rounded-md font-medium text-lg mb-2 ${
                                    location.pathname === link ? 'text-white' : 'text-white'
                                }`}>
                                {title}
                            </NavLink>
                        ))}

                        <div className='mt-4'>
                            {
                                user ? <div className="">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button className='border border-white ms-8 px-6 py-2 text-white font-bold bg-transparent hover:bg-transparent'>Dashboard</Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        {/* <DropdownMenuLabel>Appearance</DropdownMenuLabel> */}
                                        <DropdownMenuCheckboxItem
                                       
                                        >
                                        <Link to='/dashboard/profile'>Profile</Link>
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuCheckboxItem
                                        onClick={handleLogout}
                                        >
                                        Logout
                                        </DropdownMenuCheckboxItem>
                                    </DropdownMenuContent>
                                    </DropdownMenu>
    
                                </div> : <Link to='/login' className='border border-white ms-8 px-6 py-2 text-white font-bold'> Account</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;