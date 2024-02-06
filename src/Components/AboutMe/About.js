import React from "react";
import AboutMeRight from "./AboutMeRight";
import AboutMeLeft from "./AboutMeLeft";



function About() {

  return (
    <div id="about" className="">
    <div  className=" dark:bg-gray-800 shadow dark:text-white pt-10  flex md:flex-row flex-col ">
      <AboutMeLeft/>
      <AboutMeRight/>
    </div>
    </div>
  );
}

export default About;
