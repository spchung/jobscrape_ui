import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosHome, IoIosSettings, IoIosNotifications } from 'react-icons/io';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside className={`flex flex-col bg-background2 text-primary min-h-screen top-0 left-0 z-10 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-4">
        <h2 className="text-2xl font-bold">Sidebar</h2>
      </div>
      <nav className='flex-grow'>
        <ul>
          <li className="flex items-center py-2 px-4 hover:bg-ring cursor-pointer">
            <IoIosHome className="mr-2" />
            <Link to="/">
              <span className="inline">Home</span>
            </Link>
          </li>
          <li className="flex items-center py-2 px-4 hover:bg-gray-800 cursor-pointer">
            <IoIosSettings className="mr-2" />
            <Link to="/settings">
              <span className="inline">Settings</span>
            </Link>
          </li>
          <li className="flex items-center py-2 px-4 hover:bg-gray-800 cursor-pointer">
            <IoIosNotifications className="mr-2" />
            <Link to="/notifications">
              <span className="inline">Notifications</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex-end bottom-0 p-4 h-16 text-center">
        <p>Footer</p>
      </div>
    </aside>
  );
};

export default Sidebar;
