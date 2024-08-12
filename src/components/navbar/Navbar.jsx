// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
// import logo from '';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1 style={{backgroundColor:"white",borderRadius:"10px",padding:"4px"}}>Hiremi</h1>
      {/* <img src={logo} alt="Hiremi Logo" /> */}

      </div>
      <ul className="navbar-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#careers">Careers</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <button className="navbar-button">Our App</button>
    </nav>
  );
};

export default Navbar;
