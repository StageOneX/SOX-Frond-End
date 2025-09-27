import React from "react";
import { Link } from 'react-router-dom';
import "./Testimonials.css";

const Testimonials = () => {
  const feedback = [
    { name: "Kalana Champika Deshapriya", text: "Amazing experience to join events easily.", img: "/images/user1.jpeg" },
    { name: "Amitha Herath", text: "Easy to book tickets and attend events.", img: "/images/amitha.jpeg" },
    { name: "Anuska Ishara", text: "Super organized and smooth experience.", img: "/images/anushka.jpeg" },
    { name: "Mithila Dhanundara", text: "Super organized and smooth experience.", img: "/images/mithila.jpeg" },
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
