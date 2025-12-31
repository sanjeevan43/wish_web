import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-animation">
          <div className="magic-symbol rotating">✨</div>
          <div className="magic-symbol floating">🎭</div>
          <div className="magic-symbol pulsing">🔮</div>
        </div>
        
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          Looks like this magical page has vanished into thin air! 
          The mathematical spirits couldn't locate what you're looking for.
        </p>
        
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            ✨ Return Home
          </Link>
          <Link to="/create" className="btn btn-secondary">
            🎁 Create a Wish
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;