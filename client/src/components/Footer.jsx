import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-about">
          <h2><Link to="/Home"><img src="/images/logo.png" /></Link></h2>
          <p>
            Events and ticket marketplace in Sri Lanka for concerts, sports,
            theatre, exhibitions, stand-up comedy, and everything that’s live.
          </p>
        </div>

        
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/PastEvents">Past Events</a></li>
          </ul>
        </div>

        
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>No.10, Spring Field, Kurunegala, 20200</p>
          <p>+94 764456329</p>
          <p>stageonex.info@gmail.com</p>
          <p>Mon-Fri 9:00 - 17:00</p>
        </div>

        
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i><img className="fb" src="images/fb.png"/></a>
            <a href="https://www.instagram.com/accounts/login/?hl=en"><i className="fab fa-instagram"></i><img className="fb" src="images/insta.webp"/></a>
            <a href="https://www.linkedin.com/company/109035139/admin/dashboard/"><i className="fab fa-linkedin"></i><img className="fb" src="images/linkedin.webp"/></a><br/>
            <a href="https://web.whatsapp.com/"><i className="fab fa-youtube"></i><img className="wp" src="images/whatsapp.png"/></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom"> 
        <p>© 2025 Copyright by Stage OneX. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
