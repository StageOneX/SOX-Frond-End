import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <h2>StageOneX</h2>
        </div>

        {/* Menu Links */}
        <ul className="navbar-links">
          <li><a href="/Home">Home</a></li>
          <li><a href="/WhatsOn">WhatsOn</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/tickets">Tickets</a></li>
          <li><a href="/about">About Us</a></li>
        

        {/* Sign in Button */}
        <li><div className="navbar-actions">
          <button className="signin-btn">Sign in</button>
        </div></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;