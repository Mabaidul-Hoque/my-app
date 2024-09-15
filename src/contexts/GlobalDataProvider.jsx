"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const GlobalDataContext = createContext();

export const GlobalDataProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, []);

  const value = {
    screenSize,
    setScreenSize,
  };

  return (
    <GlobalDataContext.Provider value={value}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export const useGlobalData = () => {
  const context = useContext(GlobalDataContext);
  if (!context) {
    throw new Error("useGlobalData must be used within a GlobalDataProvider");
  }
  return context;
};

export default GlobalDataProvider;
