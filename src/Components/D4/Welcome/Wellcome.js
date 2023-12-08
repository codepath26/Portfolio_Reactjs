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
    <div className="pt-10 flex justify-center items-end">
      <div className="mt-8 text-xl dark:text-white text-black">
        <TypedComponent  greeting={WellcomeGreeting}/>
      </div>
    </div>
  );
}

export default Wellcome;
