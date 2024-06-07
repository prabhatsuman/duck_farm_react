import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiHome, FiUser, FiLogOut } from 'react-icons/fi';

export default function Navbar({ toggleSidebar }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        navigate('/login');
    };

    return (
        <nav className="bg-transparent fixed inset-x-0 top-0 z-50 px-4 py-3 flex justify-between items-center md:justify-end md:ml-64">
            {/* Hamburger Button */}
            <button
                className="md:hidden p-4 focus:outline-none"
                onClick={toggleSidebar}
            >
                <FiMenu className="w-6 h-6 text-gray-800 hover:text-gray-600 transition-colors duration-300" />
            </button>

            {/* Home, Profile, and Logout Buttons */}
            <div className="flex justify-end items-center space-x-4">
                <Link to="/dashboard" className="flex items-center text-black text-lg hover:text-gray-600 transition-colors duration-300">
                    <FiHome className="w-5 h-5 mr-1" />
                    Home
                </Link>
                <Link to="/dashboard/profile" className="flex items-center text-black text-lg hover:text-gray-600 transition-colors duration-300">
                    <FiUser className="w-5 h-5 mr-1" />
                    Profile
                </Link>
                <button
                    className="flex items-center text-black text-lg hover:text-gray-600 transition-colors duration-300"
                    onClick={handleLogout}
                >
                    <FiLogOut className="w-5 h-5 mr-1" />
                    Logout
                </button>
            </div>
        </nav>
    );
}
