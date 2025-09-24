import React from "react";
import { Link } from 'react-router-dom';
import "./Partners.css";

const Partners = () => {
  const partners = [
    "/images/partner1.png",
    "/images/partner2.png",
    "/images/partner3.png",
    "/images/partner4.png"
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
