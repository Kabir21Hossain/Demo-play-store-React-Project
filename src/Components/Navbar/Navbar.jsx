import { useState } from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/images/logo.png';
import { FaGithub, FaBars, FaXmark } from "react-icons/fa6";
import Navlink from './Navlink';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const routes = [
        {
            path: '/',
            text: 'Home'
        },
        {
            path: '/Apps',
            text: 'Apps'
        },
        {
            path: '/installedApps',
            text: 'Installed'
        },
        {
            path: '/dashboard',
            text: 'Dashboard'
        }
    ];

    return (
        <div className="bg-base-100 shadow-sm sticky top-0 z-50">
            <nav className='flex items-center justify-between container mx-auto px-4 md:px-6 py-2'>
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
                </div>

                {/* Desktop Menu */}
                <ul className='hidden md:flex list-none space-x-6 items-center'>
                    {
                        routes.map((route, index) => (
                            <Navlink key={index} link={route.path} >{route.text}</Navlink>
                        ))
                    }
                </ul>

                {/* Contribute Button (Desktop) */}
                <div className="hidden md:block">
                    <button className='btn text-white bg-purple-500 hover:bg-purple-600 border-none cursor-pointer flex items-center gap-2'>
                        <FaGithub /> Contribute
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="md:hidden p-2 text-slate-750 focus:outline-none cursor-pointer"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
                </button>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-base-100 border-t border-slate-100 absolute top-full left-0 w-full shadow-lg z-40">
                    <ul className="flex flex-col p-4 space-y-4">
                        {
                            routes.map((route, index) => (
                                <li key={index}>
                                    <NavLink 
                                        to={route.path} 
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) => 
                                            `block py-2 px-3 rounded-lg text-base font-semibold ${
                                                isActive 
                                                    ? 'bg-purple-50 text-purple-600' 
                                                    : 'text-slate-650 hover:bg-slate-50'
                                            }`
                                        }
                                    >
                                        {route.text}
                                    </NavLink>
                                </li>
                            ))
                        }
                        <li className="pt-2 border-t border-slate-100">
                            <button className="btn text-white bg-purple-500 hover:bg-purple-600 border-none w-full flex items-center justify-center gap-2 cursor-pointer">
                                <FaGithub /> Contribute
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;