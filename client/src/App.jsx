
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
//import WhatsOn from './pages/WhatsOn';
//import Events from './pages/Events';
//import Tickets from './pages/Tickets';
//import AboutUs from './pages/AboutUs';
import './App.css';

//import SignIn from './pages/SignIn';


function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/WhatsOn" element={<WhatsOn />} />
        <Route path="/events" element={<Events />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App
