import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosMenu, IoIosHome, IoIosSettings, IoIosNotifications } from 'react-icons/io';

interface DropdownMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, setIsOpen }) => {
    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuClose = () => {
        setIsOpen(false);
    }

  return (
    <div className="relative">
      <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-40" onClick={handleMenuToggle}>
        <IoIosMenu className="h-6 w-6" />
      </button>
      {isOpen && (
        <ul className="absolute top-full left-0 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <li>
            <Link to="/" onClick={() => handleMenuClose()} className="group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <IoIosHome className="mr-2"/>
              Home
            </Link>
          </li>
          <li>
            <Link to="/settings" onClick={() => handleMenuClose()} className="group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <IoIosSettings className="mr-2" />
              Settings
            </Link>
          </li>
          <li>
            <Link to="/notifications" onClick={() => handleMenuClose()} className="group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <IoIosNotifications className="mr-2" />
              Notifications
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
