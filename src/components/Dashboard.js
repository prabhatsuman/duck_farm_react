import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Widget from './Widget';

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen">
            <Sidebar isOpen={isSidebarOpen} />
            <div className="flex-1 flex flex-col md:ml-64">
                <Navbar toggleSidebar={toggleSidebar} />
                <main className="flex-1 p-6 overflow-y-auto">

                </main>
            </div>
        </div>
    );
}
