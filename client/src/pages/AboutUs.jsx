import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="About">
      <Navbar />
      <section className="About-section">
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
      <Footer />
    </div>
  );
};

export default AboutUs;
