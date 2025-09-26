import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Tickets from "./pages/Tickets";
import WhatsOn from "./pages/WhatsOn";
import Login from "./pages/Login";

const App = () => {
  return (
    <AppProvider>
      <Router>
        
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Tickets" element={<Tickets />} />
          <Route path="/WhatsOn" element={<WhatsOn />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
