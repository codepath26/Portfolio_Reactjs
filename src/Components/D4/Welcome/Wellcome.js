import React from "react";
import TypedComponent from "../../TypedJS/Typejs";

function Wellcome() {
  const WellcomeGreeting = [
    'Wellcom To The Wrold OF',
    ' D4Experiments',
    'Ab Aye Ho To Video ko Like',
    'Channel Ko Subscribe Karke Jana Yaar.',
  ]
  return (
    <div className="flex  p-4 justify-center items-center">
      <div className="dark:text-white  text-black">
        <TypedComponent  greeting={WellcomeGreeting}/>
      </div>
    </div>
  );
}

export default Wellcome;
