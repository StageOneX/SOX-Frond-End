import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side */}
        <div className="footer-about">
          <h2>StageOneX</h2>
          <p>
            Events and ticket marketplace in Sri Lanka for concerts, sports,
            theatre, exhibitions, stand-up comedy, and everything that’s live.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/past">Past Events</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>No.10, Spring Field, Kurunegala, 20200</p>
          <p>+94 764456329</p>
          <p>stageonex@gmail.com</p>
          <p>Mon-Fri 9:00 - 17:00</p>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Copyright by Miracle Stage X. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
