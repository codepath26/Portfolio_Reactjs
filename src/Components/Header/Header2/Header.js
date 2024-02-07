  // Header.js

  // import React, { useState } from "react";


  import "./Header.css";

  import { Link, Link as RouterLink } from "react-router-dom";


  const Header2 = ({home ,about , services,portfolio ,contact}) => {
    return (
      <header className="w-full z-10 sticky top-0  bg-white  overflow-x-hidden shadow-md dark:bg-gray-800 dark:border-black "
      >
        <div className="flex justify-between w-full md:flex-col md:gap-3 md:items-center lg:flex-row flex-wrap mt-0 px-3  py-3">
        <span className="text-2xl  font-bold text-indigo-600 dark:text-indigo-400 ">
          <span className="ml-1"><RouterLink className="cursor-pointer" to='/'> &lt;CodePath/&gt;</RouterLink></span>
        </span>
      
        <button  className="px-2 py-1 text-white bg-indigo-700 border-none cursor-pointer rounded-md">
        <Link to='/'>Back To Home</Link>
        </button>
        </div>
      </header>
    );
  };

  export default Header2;



