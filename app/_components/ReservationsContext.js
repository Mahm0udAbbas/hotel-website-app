"use client";
import React, { createContext, useContext, useState } from "react";

const initialState = {
  from: undefined,
  to: undefined,
};

const ReserVationContext = createContext(initialState);

function ReservationProvider({ children }) {
  const [range, setRange] = useState();
  const resetRange = () => setRange(initialState);
  return (
    <ReserVationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReserVationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReserVationContext);
  if (!context) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
}

export { useReservation, ReservationProvider };
