import React from "react";
import Homeleft from "./Homeleft";
import HomeRight from "./HomeRight";

function Home() {
  return (
    <div id='home' className="w-full md:h-screen md:border-b md:border-opacity-40 dark:bg-gray-800 flex flex-wrap  md:flex-row flex-col-reverse dark:border-none"  >
      <Homeleft />
      <HomeRight />
    </div>
  );
}

export default Home;
