import React, { useState } from "react";
import ThemeContext from "./ThemeContext.js";
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [themeText, setThemeText] = useState("Dark");

  const themeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider
      value={{ theme, themeText, setThemeText, themeHandler }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
