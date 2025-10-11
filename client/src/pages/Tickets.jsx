import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAppContext } from "../context/AppContext";
import "./Tickets.css";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";


const Tickets = () => {
  const { tickets, bookTicket } = useAppContext();

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
    <div className="tickets-page">
      <Navbar />
      <section className="tickets-section">
        <h1>Tickets</h1>
        <p>Book your tickets for upcoming events now.</p>

        <div className="ticket-box">
          {tickets.map((t) => (
            
            <div key={t.id} className="ticket-item">
              <img src={t.image} alt={t.event} className="ticket-image" />
              <h3>{t.event}</h3>
              <p>{t.date}</p>
              <p>
                <strong>{t.price} {t.currency}</strong>
              </p>
              <button className="btn-buy" onClick={() => bookTicket(t.id)}>
                Buy Ticket
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Tickets;
