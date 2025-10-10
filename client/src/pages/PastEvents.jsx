import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./PastEvents.css";
import AOS from "aos";
import "aos/dist/aos.css";

const PastEvents = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Mouse light bubble follow effect
  useEffect(() => {
    const page = document.querySelector(".past-events-page");
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      page.style.setProperty("--x", `${clientX}px`);
      page.style.setProperty("--y", `${clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const pastEvents = [
    {
      id: 1,
      title: "Tech Innovators Summit 2024",
      date: "12th - 14th NOV 2024",
      image: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
    },
    {
      id: 2,
      title: "Creative Arts Fest 2023",
      date: "05th - 07th DEC 2023",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    },
    {
      id: 3,
      title: "Global Business Expo 2023",
      date: "20th - 23rd OCT 2023",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
    {
      id: 4,
      title: "Wayamba Cultural Night 2022",
      date: "02nd SEP 2022",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      id: 5,
      title: "Startup Launchpad 2021",
      date: "10th DEC 2021",
      image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="past-events-page">
        <div className="light-overlay"></div>

        <h2 className="past-title" data-aos="fade-down">
          PAST EVENTS
        </h2>

        <div className="past-events-container">
          {pastEvents.map((event) => (
            <div className="past-card" key={event.id} data-aos="zoom-in">
              <img src={event.image} alt={event.title} />
              <div className="past-info">
                <h3>{event.title}</h3>
                <p>{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PastEvents;
