import React from "react";

function ShowEducation() {
  return (
    <div className="sm:p-8 flex px-5 md:pl-5 lg:pl-20 sm:pl-20" id="showEducation">
      <ul>
        <li className="my-2  text-gray-500 dark:text-gray-400">
        <strong className="text-black dark:text-white" > <span>College Name : </span>
         L.D College of Engineering</strong>
          <br />
          <span>Degree : </span>Mechanical Engineer
          <br />
          <span>Graduation Year:</span>2022
          <br />
          <span>CGPA :</span>
          <strong> 8.09</strong>
          <br />
        </li>
        <li className="my-2  text-gray-500 dark:text-gray-400">
          <strong className="text-black dark:text-white"  ><span>School :</span> Sanskar Vidhyalaya Laxmipura</strong> <br />
          <span>HSC: </span>Science
          <br />
          <span>Passing Year:</span> 2018
          <br />
          <span>Percentage :</span> 75.33%
          <br />
        </li>
        <li className="my-2  text-gray-500 dark:text-gray-400 ">
        <strong className="text-black dark:text-white"  ><span>School :</span> Sanskar Vidhyalaya Laxmipura</strong><br />
          <span>SSC :</span> 10<sup>th</sup> <br />
          <span>Passing Year:</span> 2016
          <br />
          <span>Percentage :</span> 84.33%
          <br />
        </li>
      </ul>
    </div>
  );
}

export default ShowEducation;
