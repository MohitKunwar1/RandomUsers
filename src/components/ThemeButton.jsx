import React, { useContext, useEffect } from "react";
import ThemeContext from "../contexts/themeContext/ThemeContext";
const ThemeButton = () => {
  const { themeText, theme, setThemeText, themeHandler } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setThemeText("Light");
    } else {
      document.documentElement.classList.remove("dark");
      setThemeText("Dark");
    }
  }, [theme, themeText]);
  return (
    <>
      <button
        onClick={themeHandler}
        className={`px-3 py-1  font-semibold text-sm bg-slate-900 border-2 border-sky-500 rounded-lg shadow-lg  ${themeText === "Dark" ? "text-white bg-slate-900": "bg-white text-black "}`}
      >
        {themeText}
      </button>
    </>
  );
};

export default ThemeButton;
