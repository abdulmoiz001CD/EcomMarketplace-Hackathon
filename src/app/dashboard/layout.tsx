import React from 'react';

import Sidebar from "../Components/dashboard/sidebar/sidebar"; // include the file name

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex min-h-[100rem]'>
      <div>
        <Sidebar />
      </div>
      {children}
    </div>
  );
};

export default Layout;
