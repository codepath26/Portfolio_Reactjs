import React from "react";
import Homeleft from "./Homeleft";
import HomeRight from "./HomeRight";

function Home() {
  return (
    <div id='home' className="h-screen dark:bg-gray-800 flex flex-wrap  md:flex-row flex-col"  >
      <Homeleft />
      <HomeRight />
    </div>
  );
}

export default Home;
