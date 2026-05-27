import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  MdMenu, 
  MdNotificationsNone, 
  MdOutlineShoppingCart, 
  MdOutlinePeople, 
  MdOutlineDashboard, 
  MdOutlineCategory,
  MdOutlinePersonOutline,
  MdOutlineSettings,
  MdOutlineLogout
} from 'react-icons/md';

const Header = ({ isCollapsed, setIsCollapsed, setMobileShow }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New order received #1203', time: '5 min ago', type: 'primary', icon: MdOutlineShoppingCart },
    { id: 2, text: 'Customer Support ticket #99 resolved', time: '1 hour ago', type: 'success', icon: MdOutlinePeople },
    { id: 3, text: 'System backup completed successfully', time: '3 hours ago', type: 'success', icon: MdOutlineDashboard },
    { id: 4, text: 'Inventory alert for Category: Cosmetics', time: '5 hours ago', type: 'danger', icon: MdOutlineCategory }
   ]);

  // Determine current page title based on active path
  const getPageTitle = (path) => {
    switch (path) {
      case '/': return 'Dashboard';
      case '/orders': return 'Order Management';
      case '/customers': return 'Customers';
      case '/coupons': return 'Coupon Code';
      case '/categories': return 'Categories';
      case '/transactions': return 'Transaction';
      case '/brands': return 'Brand';
      case '/products/add': return 'Add Products';
      case '/products/list': return 'Product List';
      case '/admins/manage': return 'Manage Admins';
      case '/admins/roles': return 'Admin Roles';
      case '/admins/profile': return 'Admin Profile';
      default: return 'Dashboard';
    }
  };

  const handleToggleSidebar = () => {
    // On mobile screens (<= 676px), toggle drawer visibility
    if (window.innerWidth <= 676) {
      setMobileShow(prev => !prev);
    } else {
      // On desktop, toggle collapsed state
      setIsCollapsed(prev => !prev);
    }
  };

  const toggleNotifications = () => {
    setShowNotifications(prev => !prev);
    setShowProfile(false);
  };

  const toggleProfile = () => {
    setShowProfile(prev => !prev);
    setShowNotifications(false);
  };

  const handleMarkAllRead = (e) => {
    e.stopPropagation();
    setNotifications([]);
  };

  return (
    <header className="header-container">
      <div className="header-left">
        {/* Desktop Sidebar Toggle Button - only shown when sidebar is collapsed */}
        {isCollapsed && (
          <button 
            className="sidebar-toggle-btn desktop-toggle-btn" 
            onClick={handleToggleSidebar}
            aria-label="Toggle Sidebar"
            id="sidebar-toggle-btn"
          >
            <MdMenu size={22} />
          </button>
        )}

        {/* Mobile Header Logo - displayed below 676px */}
        <div className="mobile-logo-wrapper">
          <div className="evaly-logo-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M8 4c-3.3 0-6 2.7-6 6v4c0 3.3 2.7 6 6 6h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H8z" />
              <rect x="15" y="4" width="5" height="5" rx="1.5" />
              <rect x="15" y="15" width="5" height="5" rx="1.5" />
            </svg>
          </div>
          <span className="mobile-logo-text">evaly</span>
        </div>

        <h1 className="page-title">{getPageTitle(location.pathname)}</h1>
      </div>

      <div className="header-right position-relative d-flex align-items-center gap-3">
        {/* Decorative Notification Icon */}
        <div className="notification-wrapper" id="notifications-trigger" onClick={toggleNotifications}>
          <MdNotificationsNone size={24} />
          {notifications.length > 0 && (
            <span className="notification-badge">{notifications.length}</span>
          )}
        </div>

        {/* Floating Notifications Dropdown */}
        {showNotifications && (
          <div className="header-dropdown-menu dropdown-notifications text-start">
            <div className="dropdown-header-custom">
              <h6 className="dropdown-title">Notifications</h6>
              {notifications.length > 0 && (
                <button className="dropdown-action-btn" onClick={handleMarkAllRead}>
                  Mark all as read
                </button>
              )}
            </div>
            <div className="dropdown-list-group">
              {notifications.length === 0 ? (
                <div className="text-secondary text-center small py-4">No new notifications</div>
              ) : (
                notifications.map(n => {
                  const IconComponent = n.icon;
                  return (
                    <div key={n.id} className="dropdown-item-custom">
                      <div className={`item-icon-wrapper bg-${n.type}-light`}>
                        <IconComponent size={16} />
                      </div>
                      <div className="item-details">
                        <span className="item-text">{n.text}</span>
                        <span className="item-time">{n.time}</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* User profile section */}
        <div className="user-profile-badge" id="profile-dropdown-trigger" onClick={toggleProfile}>
          <img 
            className="user-avatar" 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256" 
            alt="User profile avatar" 
          />
          <span className="online-indicator" />
        </div>
        {/* Floating Profile Dropdown */}
        {showProfile && (
          <div className="header-dropdown-menu dropdown-profile text-start">
            <div className="dropdown-header-custom pb-2 mb-2">
              <div className="d-flex flex-column text-start px-2">
                <span className="fw-bold small text-dark">Sumit Baghel</span>
                <span className="text-secondary extra-small">Super Admin</span>
              </div>
            </div>
            <div className="d-flex flex-column gap-1">
              <div 
                className="profile-menu-link" 
                onClick={() => {
                  navigate('/admins/profile');
                  setShowProfile(false);
                }}
              >
                <MdOutlinePersonOutline size={18} />
                <span>My Profile</span>
              </div>
              <div className="profile-menu-link">
                <MdOutlineSettings size={18} />
                <span>Settings</span>
              </div>
              <div 
                className="profile-menu-link text-danger border-top pt-2 mt-1"
                onClick={() => {
                  localStorage.removeItem('user');
                  navigate('/login');
                }}
                style={{ cursor: 'pointer' }}
              >
                <MdOutlineLogout size={18} />
                <span>Sign Out</span>
              </div>
            </div>
          </div>
        )}
        {/* Mobile Sidebar Toggle Button - on the right */}
        <button 
          className="sidebar-toggle-btn mobile-toggle-btn" 
          onClick={handleToggleSidebar}
          aria-label="Toggle Sidebar"
          id="mobile-sidebar-toggle-btn"
        >
          <MdMenu size={22} />
        </button>
      </div>
    </header>
  );
};

export default Header;
