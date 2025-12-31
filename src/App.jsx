import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
