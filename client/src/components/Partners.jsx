import React from "react";
import { Link } from 'react-router-dom';
import "./Partners.css";

const Partners = () => {
  const partners = [
    "/images/partner1.jpg",
    "/images/partner2.jpeg",
    "/images/partner3.jpg",
    "/images/partner4.webp"
  ];

  return (
    <div className="partners">
      {partners.map((logo, index) => (
        <div className="partner-logo" key={index}>
          <img src={logo} alt={`Partner ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Partners;
