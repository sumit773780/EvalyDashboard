import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../component/Shared/Sidebar';
import Header from '../component/Shared/Header';

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileShow, setMobileShow] = useState(false);

  return (
    <div className="dashboard-wrapper">
      {/* Responsive Left Sidebar */}
      <Sidebar 
        isCollapsed={isCollapsed} 
        setIsCollapsed={setIsCollapsed} 
        mobileShow={mobileShow} 
        setMobileShow={setMobileShow} 
      />

      {/* Main Panel Content Area */}
      <div className={`main-panel ${isCollapsed ? 'expanded' : ''}`}>
        <Header 
          isCollapsed={isCollapsed} 
          setIsCollapsed={setIsCollapsed} 
          setMobileShow={setMobileShow} 
        />
        {/* Child Router Outlet */}
        <main className="content-body">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
