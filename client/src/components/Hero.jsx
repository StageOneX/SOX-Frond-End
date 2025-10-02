import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* 🔹 Video Background */}
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Overlay */}
      <div className="hero-overlay"></div>

      {/* 🔹 Content */}
      <div className="hero-content">
        <h1 data-aos="fade-down">Welcome to StageOneX</h1>
        <p data-aos="fade-up">
          Your next-generation platform for unforgettable events.
          Discover concerts, expos, festivals, and more all in one place.
        </p>
        <div className="hero-buttons" data-aos="zoom-in">
          <button className="btn-primary">Explore Events</button>
          <button className="btn-secondary">Join Us</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
