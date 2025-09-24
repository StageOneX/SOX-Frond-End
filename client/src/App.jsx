import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
//import Home from "./pages/Home";
//import AboutUs from "./pages/AboutUs";
//import Events from "./pages/Events";
//import Tickets from "./pages/Tickets";
//import WhatsOn from "./pages/WhatsOn";


const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/WhatsOn" element={<WhatsOn />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
