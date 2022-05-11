import { useState, useEffect } from "react";
import { BiSun, BiMoon } from "react-icons/bi";

const ThemeSwitch = () => {
  const DARK = "dark";
  const LIGHT = "light";
  const [theme, setTheme] = useState(null);

  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    else if (matchMedia("(prefers-color-scheme: dark)")?.matches) return DARK;
    else return LIGHT;
  };

  const toggleTheme = () => {
    const targetTheme = theme === DARK ? LIGHT : DARK;
    setTheme(targetTheme);
  };

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={toggleTheme}>
      {theme === DARK ? (
        <BiSun className="text-[2.5rem] text-primary" />
      ) : (
        <BiMoon className="text-[2.5rem] text-primary" />
      )}
    </button>
  );
};

export default ThemeSwitch;
