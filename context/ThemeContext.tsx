"use client";

import { createContext, useState } from "react";

interface CurrentUserContextType {
  toggle?: () => void;
  mode?: string;
}

export const ThemeContext = createContext<CurrentUserContextType>({});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev: string) => (prev == "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
