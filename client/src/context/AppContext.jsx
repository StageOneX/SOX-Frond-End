// src/context/AppContext.jsx
import React, { createContext, useState } from "react";

// Context create
const AppContext = createContext();

// (Removed hook export to fix fast refresh error)

// Provider component
export const AppProvider = ({ children }) => {
  const [tickets, _setTickets] = useState([
    { id: 1, event: "Wayamba Expo 2026", date: "15th AUG 2026", price: 700, currency: "LKR" },
    { id: 2, event: "MedEx Expo 2025", date: "21st SEP 2025", price: 800, currency: "LKR" },
    
  ]);

  const bookTicket = (id) => {
    const ticket = tickets.find((t) => t.id === id);
    if (ticket) {
      alert(`🎟️ Ticket booked for ${ticket.event} (${ticket.price} ${ticket.currency})`);
    }
  };

  return (
    <AppContext.Provider value={{ tickets, bookTicket }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;