import React, { useEffect, useState } from "react";
export default function Darkmode() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
    <span className="mx-6">
      <i className="fa-regular rotate-180 fa-lightbulb dark:hidden  text-2xl" onClick={toggleDarkMode}></i>
      <i className="fa-solid fa-lightbulb  text-yellow-400 hidden dark:block text-2xl rotate-180" onClick={toggleDarkMode}></i>
    </span>  
    </>
  );
}
