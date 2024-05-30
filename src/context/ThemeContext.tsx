"use client";

import { ThemeContectType } from "@/types/type";
import React, { createContext, useState } from "react";

export const ThemeContext = createContext<ThemeContectType>({
  mode: "dark",
  toggleThemeMode: () => {},
});

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, toggleMode] = useState("dark");

  const toggleThemeMode = () => {
    toggleMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleThemeMode }}>
      <div className={`theme ${mode}`}>{children} </div>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
