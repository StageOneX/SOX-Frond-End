import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Events.css";


const Events = () => {
  // Event data (you can later fetch from backend / API)
  const events = [
    {
      id: 1,
      title: "Wayamba Expo 2027",
      date: "15th - 11th AUG 2026",
      price: "500 LKR",
      status: "Ongoing",
      image: "/images/myphoto.jpg",
    },
    {
      id: 1,
      title: "Wayamba Expo 2027",
      date: "15th - 11th AUG 2026",
      price: "500 LKR",
      status: "Ongoing",
      image: "/images/myphoto.jpg",
    },
    {
      id: 2,
      title: "MedEx Expo 2025",
      date: "18th - 21st SEP 2025",
      price: "800 LKR",
      status: "Ongoing",
      image: "/images/medex.jpg",
    },
    {
      id: 3,
      title: "Kings & Queens Wedding Expo",
      date: "15th - 11th AUG 2026",
      price: "600 LKR",
      status: "Upcoming",
      image: "/images/queen.jpg",
    },
    {
      id: 4,
      title: "BuildFirst Expo 2025",
      date: "15th - 11th DEC 2025",
      price: "800 LKR",
      status: "Upcoming",
      image: "/images/build.jpg",
    },
    {
      id: 5,
      title: "BuildFirst Expo 2025",
      date: "15th - 11th DEC 2025",
      price: "800 LKR",
      status: "Upcoming",
      image: "/images/build.jpg",
    },
    
  ];

  return (
    <div className="events-page">
      <Navbar />

      <section className="events-section">
        <h1>All Events</h1>
        <p>Browse and discover our full list of events happening soon.</p>

        {/* Ongoing Events */}
        <h2>Ongoing Events</h2>
        <div className="events-grid">
          {events
            .filter((event) => event.status === "Ongoing")
            .map((event) => (
              <div key={event.id} className="event-card">
                <img src={event.image} alt={event.title} />
                <h3>{event.title}</h3>
                <p>{event.date}</p>
                <span>{event.price}</span> 
              </div>
            ))}
        </div>

        {/* Upcoming Events */}
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          {events
            .filter((event) => event.status === "Upcoming")
            .map((event) => (
              <div key={event.id} className="event-card">
                <img src={event.image} alt={event.title} />
                <h3>{event.title}</h3>
                <p>{event.date}</p>
                <span>{event.price}</span>
              </div>
            ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
