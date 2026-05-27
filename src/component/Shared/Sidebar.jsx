import React from 'react';
import { NavLink } from 'react-router-dom';
import { sidebarData } from '../../data/sidebarData';
import { MdOutlineStorefront, MdClose } from 'react-icons/md';
import { Image } from 'react-bootstrap';

const Sidebar = ({ isCollapsed, setIsCollapsed, mobileShow, setMobileShow }) => {
  return (
    <>
      {/* Mobile Sidebar Overlay */}
      <div 
        className={`sidebar-overlay ${mobileShow ? 'mobile-show' : ''}`}
        onClick={() => setMobileShow(false)}
      />

      <aside className={`sidebar-container ${isCollapsed ? 'collapsed' : ''} ${mobileShow ? 'mobile-show' : ''}`}>
        {/* Sidebar Logo */}
        <div className="sidebar-logo justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <div className="evaly-logo-box">
              <Image src='/favicon.svg'></Image>
            </div>
            <span className="sidebar-logo-text">evaly</span>
          </div>
          {!isCollapsed && !mobileShow && (
            <button 
              className="sidebar-collapse-btn d-none d-lg-flex"
              onClick={() => setIsCollapsed(true)}
              aria-label="Collapse Sidebar"
            >
              <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m11 17-5-5 5-5" />
                <path d="M15 6h6" />
                <path d="M15 12h6" />
                <path d="M15 18h6" />
              </svg>
            </button>
          )}
          {mobileShow && (
            <button 
              className="btn btn-link p-0 text-secondary d-lg-none"
              onClick={() => setMobileShow(false)}
            >
              <MdClose size={24} />
            </button>
          )}
        </div>

        {/* Navigation Items */}
        <div className="sidebar-nav">
          {sidebarData.map((section, idx) => (
            <div key={idx} className="sidebar-section">
              <h6 className="sidebar-section-title">{section.section}</h6>
              {section.items.map((item, itemIdx) => {
                const IconComponent = item.icon;
                return (
                  <NavLink
                    key={itemIdx}
                    to={item.path}
                    className={({ isActive }) => 
                      `sidebar-menu-item ${isActive ? 'active' : ''}`
                    }
                    onClick={() => setMobileShow(false)}
                  >
                    <IconComponent className="sidebar-item-icon" />
                    <span className="sidebar-item-text">{item.title}</span>
                  </NavLink>
                );
              })}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
