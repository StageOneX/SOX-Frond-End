import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";




const Hero = () => {

  useEffect(() => {
        // Initialize AOS animations
        AOS.init({ duration: 1000, once: true });
    
        // Handle mouse light movement
        const handleMouseMove = (e) => {
          const x = (e.clientX / window.innerWidth) * 100;
          const y = (e.clientY / window.innerHeight) * 100;
          document.documentElement.style.setProperty("--x", `${x}%`);
          document.documentElement.style.setProperty("--y", `${y}%`);
        };
    
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      }, []);
  
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Join the Virtual <span className="highlight">Stage oneX</span> Experience
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
        <img src="/images/myphoto.jpg" alt="My Photo" width="400" /> 
      </div>
    </section>
  );
};
// Hero section mouse move spotlight effect
document.addEventListener("mousemove", (e) => {
  const hero = document.querySelector(".hero");
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  hero.style.setProperty("--x", `${x}%`);
  hero.style.setProperty("--y", `${y}%`);
});
export default Hero;
