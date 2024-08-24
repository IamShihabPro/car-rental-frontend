import { Link, NavLink, useLocation } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Hamburger from "hamburger-react";
import { useState, useEffect } from "react";

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [navBg, setNavBg] = useState("bg-transparent");

    const navItems = [
        { id: 1, link: '/', title: 'Home' },
        { id: 2, link: '/cars', title: 'Cars' },
        { id: 3, link: '/about', title: 'About Us' },
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
                                {/* <img src={logo} className='w-28' alt="" /> */}
                            </Link>
                        </NavLink>
                    </div>

                    <div className="hidden md:block lg:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map(({ id, link, title }) => (
                                <NavLink
                                    key={id}
                                    to={link}
                                    className={`hover:scale-105 px-3 py-2 font-medium hover:border-b border-white translate-x-2 duration-150 rounded-none inline-block ${
                                        location.pathname === link ? 'text-white' : 'text-white'}`}>
                                    {title}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div className='hidden md:block lg:block'>
                        <div className='flex items-center gap-4'>
                            <Link to='/login' className='border border-white px-6 py-2 text-white font-medium'> Account</Link>
                            <Link to="/cart" className="flex items-center text-white font-medium gap-2 border border-white px-6 py-2">
                                <span>Cart</span>
                                <HiOutlineShoppingBag className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden shadow-md text-white">
                        <Hamburger toggled={isOpen} toggle={setIsOpen} />
                    </div>

                    <div className='block md:hidden lg:hidden'>
                        <NavLink to="/" className="flex items-center gap-2 text-white">
                            {/* <Link to='/' className="font-bold text-2xl"><img src={logo} className='w-20' alt="" /></Link> */}
                        </NavLink>
                    </div>

                    <div className='block md:hidden lg:hidden'>
                        <div className='flex items-center gap-4'>
                            <Link to="/cart" className="flex items-center px-4 text-white font-bold">
                                <HiOutlineShoppingBag className="w-8 h-8" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={`md:hidden lg:hidden py-2 px-2 shadow-sm fixed left-0 top-0 h-full w-2/3 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-gray-800`}>
                    <div className="-mr-2 md:hidden shadow-md inline-block text-white p-3">
                        <Hamburger toggled={isOpen} toggle={setIsOpen} />
                    </div>

                    <div className="flex flex-col justify-start items-start h-full mt-16">
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
                            <Link to='/login' className='border border-white ms-8 px-6 py-2 text-white font-bold'> Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
