"use client";

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference first, then fallback to saved theme
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (systemPrefersDark) {
      setDarkMode(true);
      localStorage.setItem("theme", "dark"); // Optional: save to localStorage to remember preference
    } else {
      const savedTheme = localStorage.getItem("theme");
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-16 h-8 flex items-center dark:bg-[#FCA311] bg-[#14213D] cursor-pointer rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className="text-white" size={18} />
      <div
        className="absolute bg-white w-6 h-6 rounded-full shadow-md "
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
      <BsSunFill className="text-yellow-100 ml-auto" size={18} />
    </div>
  );
};

export default DarkMode;
