import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";


const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

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
    <div className="about-page">
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero" data-aos="fade-down">
        <h1>About Us</h1>
        <p className="tagline">
          Connecting People, Creating Experiences <br />
          StageOneX is a next-generation platform built to host, manage,
          and promote extraordinary events across Sri Lanka and around the
          globe. We are passionate about creating unforgettable experiences by
          connecting people with the events they love.
        </p>
        <p data-aos="fade-up">
          From live concerts and music festivals to sports tournaments,
          exhibitions, cultural celebrations, and comedy shows, StageOneX brings
          them all together under one virtual stage.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="about-section">
        <div data-aos="zoom-in">
          <h2>Our Vision</h2>
          <p>
            To become the leading virtual event hub that redefines how people come
            together to connect, celebrate, and experience the moments that matter.
            Breaking geographical barriers where events are not limited by location,
            distance, or scale.
          </p>
        </div>

        <div data-aos="zoom-in">
          <h2>Our Mission</h2>
          <p>
            To create unforgettable experiences that leave lasting memories for
            every audience. We empower event organizers with tools, visibility, and
            support to succeed while making events accessible to everyone.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="stat-card" data-aos="flip-left">
          <h3>50+</h3>
          <p>Live Sessions every month</p>
        </div>
        <div className="stat-card" data-aos="flip-up">
          <h3>100+</h3>
          <p>Exhibitors worldwide</p>
        </div>
        <div className="stat-card" data-aos="flip-right">
          <h3>20+</h3>
          <p>Countries Connected</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2 data-aos="fade-up">Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card" data-aos="fade-up" data-aos-delay="100">
            <img src="/images/user1.jpeg" alt="Kalana" />
            <h3>Kalana Champika Deshapriya</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card" data-aos="fade-up" data-aos-delay="200">
            <img src="/images/amitha.jpeg" alt="Amitha" />
            <h3>Amitha Herath</h3>
            <p>Operations Manager</p>
          </div>
          <div className="team-card" data-aos="fade-up" data-aos-delay="300">
            <img src="/images/anushka.jpeg" alt="Anushka" />
            <h3>Anuska Ishara</h3>
            <p>Technical Lead</p>
          </div>
          <div className="team-card" data-aos="fade-up" data-aos-delay="400">
            <img src="/images/mithila.jpeg" alt="Mithila" />
            <h3>Mithila Dhanundara</h3>
            <p>Technical Lead</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
