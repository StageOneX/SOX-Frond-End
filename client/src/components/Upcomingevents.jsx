import React from "react";
import "./UpcomingEvents.css";

const UpcomingEvents = () => {
  const events = [
    { title: "MedEx Expo 2026", date: "15th - 11th AUG 2026", price: "800 LKR", img: "/images/medex.jpg" },
    { title: "Kings & Queens Wedding Expo", date: "15th - 11th AUG 2026", price: "600 LKR", img: "/images/wedding.jpg" },
    { title: "BuildFirst Expo 2025", date: "15th - 11th DEC 2025", price: "800 LKR", img: "/images/build.jpg" }
  ];

  return (
    <div className="upcoming-events">
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

export default UpcomingEvents;
