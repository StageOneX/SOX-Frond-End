import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
        {/* Logo */}
        <div className="navbar-logo">
          <h2>
            <Link to="/Home">StageOneX</Link>
          </h2>
        </div>

        {/* Menu Links */}
        <ul className="navbar-links">
          <Link to="/Home">Home</Link>
          <Link to="/WhatsOn">WhatsOn</Link>
          <Link to="/Events">Events</Link>
          <Link to="/Tickets">Tickets</Link>
          <Link to="/About">About Us</Link>

          {/* Sign in Button */}
          
            <div className="navbar-actions">
              <button className="signin-btn">
                <Link to="/Login">Sign In</Link>
              </button>
            </div>
          
        </ul>
      </div>
    </nav>
  );
};
document.addEventListener("mousemove", (e) => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.style.setProperty("--x", e.clientX + "px");
    navbar.style.setProperty("--y", e.clientY + "px");
  }
});


export default Navbar;
