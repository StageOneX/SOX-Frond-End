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
          <button className="secondary-btn">Register</button>
          <button className="signin-btn">Sign In</button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
