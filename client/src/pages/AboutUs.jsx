import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-page">
      <Navbar />

      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          StageOneX is a platform built to host, manage, and promote
          extraordinary events across Sri Lanka and worldwide. We bring
          together concerts, sports, exhibitions, comedy shows, and more
          under one virtual stage.
        </p>
        <p>
          Our mission is to provide unforgettable experiences, help
          organizers grow, and make events accessible for everyone.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          To be the leading virtual event hub that transforms the way people
          connect, celebrate, and experience events without boundaries.
        </p>

        <h2>Our Mission</h2>
        <p>
          We strive to empower event organizers and audiences by delivering
          seamless technology, creative solutions, and a global platform that
          makes every event accessible to everyone.
        </p>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="stat-card">
          <h3>50+</h3>
          <p>Live Sessions every month</p>
        </div>
        <div className="stat-card">
          <h3>100+</h3>
          <p>Exhibitors worldwide</p>
        </div>
        <div className="stat-card">
          <h3>20+</h3>
          <p>Countries Connected</p>
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="/images/team1.jpg" alt="Team Member 1" />
            <h3>Kalana Sadaruwan</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img src="/images/team2.jpg" alt="Team Member 2" />
            <h3>Akila Rajakaruna</h3>
            <p>Operations Manager</p>
          </div>
          <div className="team-card">
            <img src="/images/team3.jpg" alt="Team Member 3" />
            <h3>Janith Edirimanna</h3>
            <p>Technical Lead</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;

