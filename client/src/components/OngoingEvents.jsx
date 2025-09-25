import React from 'react';
import { Link } from 'react-router-dom';
import "./OngoingEvents.css";

const OngoingEvents = () => {
  const events = [
    { title: "Wayamba Expo 2026", date: "15th - 11th AUG 2026", price: "", img :"/images/myphoto.jpg"},
    { title: "MedEx Expo 2025", date: "18th - 21st SEP 2025", price: "", img: "/images/medex.jpg" }
  ];

  return (
    <div className="ongoing-events">
      {events.map((event, index) => (
        <div className="event-card" key={index}>
          <img src={event.img} alt={event.title} />
          <div className="event-info">
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <span>{event.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OngoingEvents;
