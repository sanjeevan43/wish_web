import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import WishForm from './components/WishForm';
import MagicSquareAnimation from './components/MagicSquareAnimation';
import './App.css';

// Utility to encode wish data to URL-safe base64
function encodeWishData(data) {
  const json = JSON.stringify(data);
  return btoa(encodeURIComponent(json));
}

// Utility to decode wish data from URL-safe base64
function decodeWishData(encoded) {
  try {
    const json = decodeURIComponent(atob(encoded));
    return JSON.parse(json);
  } catch (e) {
    console.error('Failed to decode wish data:', e);
    return null;
  }
}

function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [wishData, setWishData] = useState(null);
  const [isSharedView, setIsSharedView] = useState(false);

  // Check URL for shared wish data on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sharedData = params.get('wish');

    if (sharedData) {
      const decoded = decodeWishData(sharedData);
      if (decoded) {
        setWishData(decoded);
        setCurrentView('animation');
        setIsSharedView(true);
      }
    }
  }, []);

  const handleCreateWish = () => {
    // Clear URL params when creating new
    window.history.replaceState({}, '', window.location.pathname);
    setIsSharedView(false);
    setCurrentView('form');
  };

  const handleFormSubmit = (formData) => {
    setWishData(formData);
    setCurrentView('animation');
    setIsSharedView(false);
  };

  const handleBackToLanding = () => {
    window.history.replaceState({}, '', window.location.pathname);
    setCurrentView('landing');
    setWishData(null);
    setIsSharedView(false);
  };

  const handleBackToForm = () => {
    window.history.replaceState({}, '', window.location.pathname);
    setCurrentView('form');
    setIsSharedView(false);
  };

  const handleCreateAnother = () => {
    window.history.replaceState({}, '', window.location.pathname);
    setWishData(null);
    setCurrentView('form');
    setIsSharedView(false);
  };

  // Generate shareable link
  const generateShareableLink = () => {
    if (!wishData) return window.location.origin;
    const encoded = encodeWishData(wishData);
    return `${window.location.origin}${window.location.pathname}?wish=${encoded}`;
  };

  return (
    <div className="App">
      {currentView === 'landing' && (
        <LandingPage onCreateWish={handleCreateWish} />
      )}

      {currentView === 'form' && (
        <WishForm
          onSubmit={handleFormSubmit}
          onBack={handleBackToLanding}
          initialData={wishData}
        />
      )}

      {currentView === 'animation' && wishData && (
        <MagicSquareAnimation
          wishData={wishData}
          onBack={isSharedView ? handleBackToLanding : handleBackToForm}
          onCreateAnother={handleCreateAnother}
          shareableLink={generateShareableLink()}
          isSharedView={isSharedView}
        />
      )}
    </div>
  );
}

export default App;
