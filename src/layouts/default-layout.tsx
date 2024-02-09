import React, { ReactNode, useState } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import DropdownMenu from '../components/menu/dropdown-menu';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className='hidden lg:block w-[5%] lg:w-[12%] h-screen'>
        <Sidebar isOpen={true}/>
      </div>
      
      <div className="flex flex-col flex-grow">
        {/* Header */}
        <div className='lg:hidden'>
          <DropdownMenu isOpen={openMobileMenu} setIsOpen={setOpenMobileMenu}/>
        </div>

        <main className="flex-grow overflow-y-auto">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-background text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Job Search App. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DefaultLayout;
