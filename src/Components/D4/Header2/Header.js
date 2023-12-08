// Header.js

import React, { useState } from "react";
import Darkmode from "../../Darkmode/Darkmode";

import "./Header.css";
import { Link } from "react-router-dom";

const Header2 = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const openNav = () => {
    setIsNavOpen(true);
    const navbar = document.getElementById("navbar");
    navbar.classList.remove("right-[-250%]");
    navbar.classList.add("left-0");
  };
  const closeNav = () => {
    setIsNavOpen(false);
    const navbar = document.getElementById("navbar");
    navbar.classList.add("right-[-250%]");
    navbar.classList.remove("left-0");
  };
  return (
    <header
      className={`dark:bg-gray-800  z-30  bg-white p-4 fixed top-0 left-0 w-screen text-black flex justify-between   ${
        isNavOpen ? "flex-col" : "flex-wrap"
      } `}
    >
      <span className="text-2xl ml-36 font-bold text-indigo-600 dark:text-indigo-400 ">
        <span className="ml-1">&lt;CodePath/&gt;</span>
      </span>
      {isNavOpen && (
        <button
          className="lg:hidden md:hidden text-xl absolute top-0 right-0 mt-2 mr-2 z-50 focus:outline-none"
          onClick={closeNav}
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
      )}
      <div
        id="navbar"
        className="flex  flex-wrap md:flex-row lg:flex-row absolute right-[-250%] md:static flex-col  w-screen md:w-auto text-center transition-all duration-300 ease-in-out md:h-auto h-screen md:bg-transparent bg-indigo-600 md:gap-0 gap-11 md:mt-auto mt-10 "
      >
        <button  className="px-2 py-1 text-white bg-indigo-700 border-none cursor-pointer rounded-md">
        <Link to='/'>Back To Home</Link>
        </button>
        <Darkmode />
      </div>
      <button
        className="lg:hidden md:hidden text-3xl focus:outline-none"
        onClick={openNav}
      >
        {isNavOpen ? "" : "☰"}
      </button>
    </header>
  );
};

export default Header2;
