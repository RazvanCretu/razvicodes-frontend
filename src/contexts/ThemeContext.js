import React, { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const Theme = ({ children }) => {
  const [theme, setTheme] = useState(getDefaultTheme());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    setMounted(true);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const isDark = theme === "dark";

  if (!mounted) return <div style={{ visibility: "hidden" }} />;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

const isDefaultDark = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const getDefaultTheme = () => {
  const localTheme = localStorage.getItem("theme");
  const browserTheme = isDefaultDark() ? "dark" : "light";
  return localTheme || browserTheme;
};
