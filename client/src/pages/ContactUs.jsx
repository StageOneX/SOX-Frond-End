import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ContactUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Mouse follow light bubble effect
  useEffect(() => {
    const page = document.querySelector(".contact-page");
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      page.style.setProperty("--x", `${clientX}px`);
      page.style.setProperty("--y", `${clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="light-overlay"></div>

        <div className="contact-container" data-aos="zoom-in">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">
            We’d love to hear from you. Fill out the form below!
          </p>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="Type your message"></textarea>
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
