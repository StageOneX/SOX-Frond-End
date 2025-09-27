
import React, { createContext, useState, useContext } from "react";

// Create Context
const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

// Provider component
export const AppProvider = ({ children }) => {
  const [tickets, _setTickets] = useState([
    { id: 1, event: "Wayamba Expo 2026", date: "15th AUG 2026", price: 700, currency: "LKR", image: "/images/myphoto.jpg" },
    { id: 2, event: "MedEx Expo 2025", date: "21st SEP 2025", price: 800, currency: "LKR" , image: "/images/medex.jpg"},
    { id: 3, event: "Edu Expo 2025", date: "10th OCT 2025", price: 1200, currency: "LKR", image: "/images/edu.jpg" },
    { id: 4, event: "Edu Expo 2026", date: "10th OCT 2026", price: 1800, currency: "LKR", image: "/images/ex.png" },

  ]);

  const bookTicket = (id) => {
    const ticket = tickets.find((t) => t.id === id);
    if (ticket) {
      alert(`Ticket booked for ${ticket.event} (${ticket.price} ${ticket.currency})`);
    }
  };

  return (
    <AppContext.Provider value={{ tickets, bookTicket }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
