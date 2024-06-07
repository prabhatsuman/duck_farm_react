import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen }) {
    return (
        <div className={`fixed inset-y-0 left-0 w-64 bg-white text-black p-12 rounded-xl border shadow-md transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 rounded-r-lg`}>
            <div className="flex justify-between items-center pb-4">
                <h2 className="text-2xl font-bold">Dashboard</h2>
            </div>
            <nav className="mt-6">
                <Link to="/dashboard" className="block py-2.5 px-4 rounded hover:bg-gray-100">Home</Link>
                <Link to="/dashboard/section1" className="block py-2.5 px-4 rounded hover:bg-gray-100">Section 1</Link>
                <Link to="/dashboard/section2" className="block py-2.5 px-4 rounded hover:bg-gray-100">Section 2</Link>
            </nav>
        </div>
    );
}
