import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./WhatsOn.css";

const WhatsOn = () => {
  const events = [
    {
      id: 1,
      title: "Wayamba Expo 2026",
      status: "Ongoing",
      date: "15th AUG 2026",
      venue: "Kurunegala Exhibition Center",
      price: 500,
      currency: "LKR",
      img: "/images/myphoto.jpg",
    },
    {
      id: 2,
      title: "MedEx Expo 2025",
      status: "Upcoming",
      date: "21st SEP 2025",
      venue: "Colombo BMICH",
      price: 800,
      currency: "LKR",
      img: "/images/medex.jpg",
    },
    {
      id: 3,
      title: "Kings & Queens Wedding Expo",
      status: "Upcoming",
      date: "11th AUG 2026",
      venue: "Kandy City Center",
      price: 600,
      currency: "LKR",
      img: "/images/queen.jpg",
    },
  ];

  return (
    <div className="WhatsOn-page">
      <Navbar />
      <section className="WhatsOn-section">
        <h1>What's On</h1>
        <p>Check out all the ongoing and upcoming events happening now.</p>

        <div className="WhatsOn-list">
          {events.map((e) => (
            <div key={e.id} className="WhatsOn-item">
              <img src={e.img} alt={e.title} />
              <h3>{e.title}</h3>
              <p><strong>Status:</strong> {e.status}</p> 
              <p><strong>Date:</strong> {e.date}</p>
              <p><strong>Venue:</strong> {e.venue}</p>
              <p>
                <strong>Price:</strong> {e.price} {e.currency}
              </p>
              <button className="btn-details">View Details</button>
              
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WhatsOn;
