import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OngoingEvents from "../components/OngoingEvents";
import UpcomingEvents from "../components/Upcomingevents";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  const events = [
    { id: 1, title: "Wayamba Expo 2027", date: "15th - 11th AUG 2026", price: "500 LKR", status: "Ongoing", image: "/images/myphoto.jpg" },
    { id: 2, title: "MedEx Expo 2025", date: "18th - 21st SEP 2025", price: "800 LKR", status: "Ongoing", image: "/images/medex.jpg" },
    { id: 3, title: "Kings & Queens Wedding Expo", date: "15th - 11th AUG 2026", price: "600 LKR", status: "Upcoming", image: "/images/queen.jpg" },
    { id: 4, title: "BuildFirst Expo 2025", date: "15th - 11th DEC 2025", price: "800 LKR", status: "Upcoming", image: "/images/build.jpg" },
    { id: 5, title: "EduFirst Expo 2025", date: "15th - 11th DEC 2025", price: "800 LKR", status: "Upcoming", image: "/images/edu.jpg" },
    { id: 6, title: "EduFirst Expo 2026", date: "15th - 11th DEC 2026", price: "500 LKR", status: "Upcoming", image: "/images/edu.jpg" },
  ];

  return (
    <div className="home">
      <Navbar />
      <Hero />

      <section className="section">
        <h2 className="section-title">ONGOING</h2>
        <OngoingEvents />
      </section>

      <section className="section">
        <h2 className="section-title">UPCOMING EVENTS</h2>
        <UpcomingEvents />
      </section>

      <section className="section">
        <h2 className="section-title">All Events</h2>
        <p className="section-subtitle">Browse and discover our full list of events happening soon.</p>
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <span>{event.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section"><Stats /></section>
      <section className="section">
        <h2 className="section-title">What people say about us..</h2>
        <Testimonials />
      </section>
      <section className="section">
        <h2 className="section-title">Our Partners</h2>
        <Partners />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
