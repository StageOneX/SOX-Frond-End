import React from "react";
import { Link } from 'react-router-dom';
import "./Testimonials.css";

const Testimonials = () => {
  const feedback = [
    { name: "Kalana Sadaruwan", text: "Amazing experience to join events easily.", img: "/images/user1.png" },
    { name: "Akila Rajakaruna", text: "Easy to book tickets and attend events.", img: "/images/user2.webp" },
    { name: "Janith Edirimanna", text: "Super organized and smooth experience.", img: "/images/user3.webp" },
  ];

  return (
    <div className="testimonials">
      {feedback.map((f, index) => (
        <div className="testimonial-card" key={index}>
          <img src={f.img} alt={f.name} />
          <h4>{f.name}</h4>
          <p>{f.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
