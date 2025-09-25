import React from "react";
import { Link } from 'react-router-dom';
import "./Upcomingevents.css";

const UpcomingEvents = () => {
  const events = [
    { title: "Wayamba Expo 2026", date: "15th - 11th AUG 2026", price: "900 LKR", img :"/images/myphoto.jpg"},
    { title: "MedEx Expo 2025", date: "18th - 21st SEP 2025", price: "800 LKR", img: "/images/medex.jpg" },
    //{ title: "Wayamba Expo 2026", date: "15th - 11th AUG 2026", price: "900 LKR", img :"/images/myphoto.jpg"}

  ];

  return (
    <div className="Upcoming-events">
      {events.map((Event, index) => (
        <div className="Event-card" key={index}>
          <img src={Event.img} alt={Event.title} />
          <div className="Event-info">
            <h3>{Event.title}</h3>
            <p>{Event.date}</p>
            <span>{Event.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;



