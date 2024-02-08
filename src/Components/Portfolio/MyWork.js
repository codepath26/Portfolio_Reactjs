import React from "react";
import StaredProject from "./StaredProject";
import SimpleProjects from "./SimpleProjects";


function MyWork() {
  return (
    <>
      <div id="portfolio" className="dark:bg-gray-800  pt-10 dark:text-white">
          <StaredProject/>
          <SimpleProjects/>
     
      </div>
    </>
  );
}

export default MyWork;
