import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Darkmode from "../Darkmode/Darkmode";

import { Link as RouterLink } from "react-router-dom";

function Navlinks({isNavOpen ,home ,about , services,portfolio ,contact}) {
  console.log(isNavOpen)
  return (
    <>
      <ul
        id="navbar"
        className={`${isNavOpen ? "top-16 bg-gray-600 left-0 " : "top-[-490px] "} w-full md:w-auto md:flex-row transition-all md:z-auto z-[1] ease-in  duration-500 md:bg-white list-none md:flex-wrap text-center dark:bg-gray-800 absolute left-0 md:static  md:flex  justify-between`}
      >
        <li className="list-item md:my-auto  md:border-b md:border-indigo-500 hover:border-none  relative  me-6 list-none  dark:text-white  text-white md:text-black  p-2 md:p-0 mb-4 md:mb-0  w-full md:w-auto  ">
          <RouterLink className="font-medium" to="/D4Experiments">
            D4 Experiments{" "}
            <i className="fa-solid fa-star text-orange-500 transform rotate-12"></i>
          </RouterLink>
        </li>
        <li className="list-item md:my-auto    relative  me-6 list-none  dark:text-white  text-white md:text-black  p-2 md:p-0 mb-4 md:mb-0  w-full md:w-auto  ">
          <RouterLink to="/github/codepath26">GitHub</RouterLink>
        </li>
        <li className="list-item md:my-auto  relative  me-6  dark:text-white  text-white md:text-black  p-2 md:p-0 mb-4 md:mb-0  w-full md:w-auto  ">
          <ScrollLink
            className="cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            to={home}
          >
            Home
          </ScrollLink>
        </li>
        <li className="list-item md:my-auto    relative  me-6  dark:text-white  text-white md:text-black  p-2 md:p-0 mb-4 md:mb-0  w-full md:w-auto  ">
          <ScrollLink
            className="cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            to={about}
          >
            About
          </ScrollLink>
        </li>
        <li className="list-item  md:my-auto   relative   me-6  dark:text-white  text-white md:text-black  p-2 md:p-0 mb-4 md:mb-0  w-full md:w-auto  ">
          <ScrollLink
            className="cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            to={services}
          >
            Services
          </ScrollLink>
        </li>
        <li className="list-item md:my-auto    relative  me-6 list-none dark:text-white  text-white md:text-black  p-2 md:p-0 mb-4 md:mb-0  w-full md:w-auto  ">
          <ScrollLink
            className="cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            to={portfolio}
          >
            Mywork
          </ScrollLink>
        </li>
        <li className="list-item md:my-auto    relative  me-6  dark:text-white  text-white md:text-black  p-2 md:p-0 mb-4 md:mb-0  w-full md:w-auto  ">
          <ScrollLink
            className="cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            to={contact}
          >
            Contact Me
          </ScrollLink>
        </li>
        <Darkmode />
      </ul>
    </>
  );
}

export default Navlinks;
