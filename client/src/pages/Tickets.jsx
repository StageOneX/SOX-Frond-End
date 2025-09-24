import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//import { useAppContext } from "../context/AppContext";
import "./Tickets.css";

const Tickets = () => {
  const { tickets, bookTicket } = useAppContext();

  return (
    <div className="tickets-page">
      <Navbar />
      <section className="tickets-section">
        <h1>Tickets</h1>
        <p>Book your tickets for upcoming events now.</p>

        <div className="ticket-box">
          {tickets.map((t) => (
            <div key={t.id} className="ticket-item">
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
