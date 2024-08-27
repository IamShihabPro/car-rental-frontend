import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Card from './Card';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex flex-col md:flex-row">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <div className="flex-1 flex flex-col">
                <Header onSidebarToggle={toggleSidebar} />
                <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
                    <Card title="Card 1" content="Some content for card 1." />
                    <Card title="Card 2" content="Some content for card 2." />
                    <Card title="Card 3" content="Some content for card 3." />
                    <Card title="Card 4" content="Some content for card 4." />
                    <Card title="Card 5" content="Some content for card 5." />
                    <Card title="Card 6" content="Some content for card 6." />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
