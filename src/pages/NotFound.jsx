import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowBack } from 'react-icons/md';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-wrapper">
      <div className="notfound-container">
        {/* Not Found Headers */}
        <h2 className="notfound-title">Oops, something went wrong</h2>
        <p className="notfound-text">
          Error 404 Page not found. Sorry the page you looking for doesn't exist or has been moved
        </p>

        {/* Action Navigation Button */}
        <button 
          onClick={() => navigate('/')} 
          className="notfound-btn"
          id="back-to-dashboard-btn"
        >
          <MdOutlineArrowBack size={18} />
          Back to Dashboard
        </button>

      </div>
    </div>
  );
};

export default NotFound;
