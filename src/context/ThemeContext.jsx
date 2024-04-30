"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light"; // Fallback value if localStorage is not available
};


export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const initialTheme = getFromLocalStorage();
    console.log("Initial Theme:", initialTheme); // Log initial theme value
    return initialTheme;
  });

  useEffect(() => {
    console.log("Current Theme:", theme); // Log current theme value
  }, [theme]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
