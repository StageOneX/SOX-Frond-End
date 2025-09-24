import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Join the Virtual <span className="highlight">StageoneX</span> Experience
        </h1>
        <p>
          A powerful virtual stage where extraordinary events, unforgettable
          experiences, and limitless opportunities come alive.
        </p>
        <div className="hero-actions">
          <input type="email" placeholder="Type Your Email..." />
          <button className="subscribe">Subscribe</button>
          <button className="contact">Contact Us</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/wayamba-expo.jpg" alt="Wayamba Expo" />
      </div>
    </section>
  );
};

export default Hero;
