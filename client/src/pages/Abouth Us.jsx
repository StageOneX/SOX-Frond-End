import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

const AboutUs = () => {
  return (
    <div className="about">
      <Navbar />
      <section className="about-section">
        <h1>About StageOneX</h1>
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
