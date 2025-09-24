import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./WhatsOn.css";

const WhatsOn = () => {
  return (
    <div className="WhatsOn-page">
      <Navbar />
      <section className="WhatsOn-section">
        <h1>What's On</h1>
        <p>Check out all the ongoing and upcoming events happening now.</p>
        <div className="WhatsOn-list">
          <div className="WhatsOn-item">Ongoing Event 1</div>
          <div className="WhatsOn-item">Upcoming Event 2</div>
          <div className="WhatsOn-item">Upcoming Event 3</div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WhatsOn;
