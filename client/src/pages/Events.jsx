import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Events.css";

const Events = () => {
  return (
    <div className="events-page">
      <Navbar />
      <section className="events-section">
        <h1>All Events</h1>
        <p>Browse and discover our full list of events happening soon.</p>
        <div className="events-grid">
          <div className="event-card">Event 1</div>
          <div className="event-card">Event 2</div>
          <div className="event-card">Event 3</div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Events;
