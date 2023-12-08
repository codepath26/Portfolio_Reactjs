import React from "react";
import AboutMeRight from "./AboutMeRight";
import AboutMeLeft from "./AboutMeLeft";



function About() {

  return (
    <div id="about" className="">
    <div  className="h-screen dark:bg-gray-800 shadow dark:text-white pt-20  flex ">
      <AboutMeLeft/>
      <AboutMeRight/>
    </div>
    </div>
  );
}

export default About;
