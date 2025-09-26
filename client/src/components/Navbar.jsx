import React, { useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const hero = document.querySelector(".navbar");
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      hero.style.setProperty("--x", `${x}%`);
      hero.style.setProperty("--y", `${y}%`);
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
<<<<<<< HEAD
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
=======

        {/* Left - Logo */}
        <div className="navbar-left">
          <div className="navbar-logo">
            <h2>StageOneX</h2>
          </div>
        </div>

        {/* Center - Links */}
        <div className="navbar-center">
          <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#WhatsOn">WhatsOn</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#tickets">Tickets</a></li>
            <li><a href="#About Us">About Us</a></li>
          </ul>
        </div>

        {/* Right - Buttons */}
        <div className="navbar-right">
          <button className="signin-btn">Sign In</button>
        </div>

>>>>>>> 7a3397c08e5ac09623339bc2c77bb00a14505ec5
      </div>
    </nav>
  );
};

export default Navbar;
