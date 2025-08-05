import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; 


const Layout = () => {
  return (
    <div className="layoutStyle">
    <main>
      <Navbar />
      <Outlet />
    </main>
  </div>
    );
  };
  

export default Layout;