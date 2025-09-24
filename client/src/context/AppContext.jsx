import React, { createContext, useState } from "react";

// Context create
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  // Global state (sample data)
  const [events, setEvents] = useState([
    { id: 1, title: "Wayamba Expo 2026", status: "upcoming" },
    { id: 2, title: "Live Music Fest", status: "ongoing" },
    { id: 3, title: "Tech Summit", status: "upcoming" },
  ]);

  const [tickets, setTickets] = useState([
    { id: 1, event: "Wayamba Expo 2026", price: 2500, currency: "LKR" },
  ]);

  // Function to book a ticket
  const bookTicket = (eventId) => {
    const event = events.find((e) => e.id === eventId);
    if (event) {
      setTickets([...tickets, { id: tickets.length + 1, event: event.title, price: 2500, currency: "LKR" }]);
    }
  };

  return (
    <AppContext.Provider value={{ events, setEvents, tickets, bookTicket }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;