import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OngoingEvents from "../components/OngoingEvents";
import UpcomingEvents from "../components/UpcomingEvents";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <section className="section"><h2 className="section-title">ONGOING</h2><OngoingEvents /></section>
      <section className="section"><h2 className="section-title">UPCOMING</h2><UpcomingEvents /></section>
      <section className="section"><Stats /></section>
      <section className="section"><h2 className="section-title">What people say about us..</h2><Testimonials /></section>
      <section className="section"><h2 className="section-title">Our Partners</h2><Partners /></section>
      <Footer />
    </div>
  );
};

export default Home;
