import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();
  
  // Don't show navigation on shared wish pages
  if (location.pathname.startsWith('/share/')) {
    return null;
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="nav-icon">✨</span>
          <span className="nav-title">Ramanujan Wishes</span>
        </Link>
        
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/create" 
            className={`nav-link ${location.pathname === '/create' ? 'active' : ''}`}
          >
            Create Wish
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;