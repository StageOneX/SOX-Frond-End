import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <h2><Link to="/Home">StageOneX</Link></h2>
        </div>

        {/* Menu Links */}
        <ul className="navbar-links">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/WhatsOn">WhatsOn</Link></li>
          <li><Link to="/Events">Events</Link></li>
          <li><Link to="/Tickets">Tickets</Link></li>
          <li><Link to="/About">About Us</Link></li>
          

          {/* Sign in Button */}
          <li>
            <div className="navbar-actions">
              <button className="signin-btn"><li><Link to="/Login">Sign in</Link></li></button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
