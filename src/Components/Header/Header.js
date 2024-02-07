  // Header.js

  import React, { useState } from "react";


  import "./Header.css";

  import { Link as RouterLink } from "react-router-dom";
  import Navlinks from "./Navlinks";

  const Header = ({home ,about , services,portfolio ,contact}) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

   const HamHandler = ()=>{
      setIsNavOpen(prev => !prev);
    }

    return (
      <header className="w-full z-10 sticky top-0  bg-white  overflow-x-hidden shadow-md dark:bg-gray-800 dark:border-black "
      >
        <div className="flex justify-between w-full md:flex-col md:gap-3 md:items-center lg:flex-row flex-wrap mt-0 px-3  py-3">
        <span className="text-2xl  font-bold text-indigo-600 dark:text-indigo-400 ">
          <span className="ml-1"><RouterLink className="cursor-pointer" to='/'> &lt;CodePath/&gt;</RouterLink></span>
        </span>
        <Navlinks isNavOpen={isNavOpen}  home={home} about={about} services={services} portfolio={portfolio} contact={contact} />
      
        <button
          className="md:hidden absolute text-black text-3xl right-8 top-3 cursor-pointer  z-50 focus:outline-none"
          onClick={HamHandler}
        >
          <i className={`fa-solid ${isNavOpen ? "fa-xmark" : " fa-bars" }`}></i>
        </button>
        </div>
      </header>
    );
  };

  export default Header;



  // className="flex  flex-wrap md:flex-row lg:flex-row absolute right-[-250%] md:static flex-col  w-screen md:w-auto text-center transition-all duration-800 ease-in-out md:h-auto h-screen md:bg-transparent bg-indigo-600 md:gap-0 gap-11 md:mt-auto mt-10 "

  // className={`dark:bg-gray-800 border border-orange-900  bg-white px-6  fixed top-0 left-0 w-[100%] text-black  flex justify-between  md:justify-between  items-center ${
  //   isNavOpen ? "flex-col" : "flex-wrap"
  // } `}