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
        <p className="tagline">Connecting People, Creating Experiences
          StageOneX is a next-generation platform built to host, manage, 
          and promote extraordinary events across Sri Lanka and around the 
          globe. We are passionate about creating unforgettable experiences by 
          connecting people with the events they love.
          From live concerts and music festivals to sports tournaments, exhibitions, cultural celebrations, and comedy shows, StageOneX brings them all together under one virtual stage.
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
          Our vision is to become the leading virtual event hub that 
          redefines how people come together to connect, celebrate, and 
          experience the moments that matter. We strive to break geographical 
          barriers by creating a platform where events are not limited by 
          location, distance, or scale.
        </p><br/><br/>
      <h2>Our Mission</h2>
        <p>
          Our mission is to create unforgettable experiences 
          that leave lasting memories for every audience. 
          We aim to empower event organizers by giving them the 
          tools, visibility, and support they need to grow and succeed.
          At the same time, we are dedicated to making events more 
          accessible for everyone, ensuring that people from all walks 
          of life can discover, attend, and enjoy world-class entertainment without limitations.
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
            <img src="/images/user1.jpeg" alt="Team Member 1" />
            <h3>Kalana Champika Deshapriya </h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img src="/images/amitha.jpeg" alt="Team Member 2" />
            <h3>Amitha Herath</h3>
            <p>Operations Manager</p>
          </div>
          <div className="team-card">
            <img src="/images/anushka.jpeg" alt="Team Member 3" />
            <h3>Anuska Ishara</h3>
            <p>Technical Lead</p>
          </div>
          <div className="team-card">
            <img src="/images/mithila.jpeg" alt="Team Member 3" />
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

