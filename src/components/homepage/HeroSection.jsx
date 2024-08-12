// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';
import Navbar from '../navbar/Navbar';

const HeroSection = () => {
  return (
    <>
    
        < Navbar/>
    <div className="hero-container">
      <div className="hero-content">
        <h1>APKE DEVELOPMENT KA SATHI HIREMI</h1>
        <p>
          HIREMI: where we connect talent with opportunities,<br />
          empowering India’s youth to become tomorrow’s leaders.
        </p>
        <div className="hero-buttons">
          <button className="hero-button download-app">Download the App</button>
          <button className="hero-button for-businesses">For Businesses</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroSection;
