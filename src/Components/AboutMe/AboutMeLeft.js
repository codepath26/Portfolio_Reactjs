import React, { useState } from "react";
import ShowEducation from "./RightBottom/ShowEducation";
import ShowExperience from "./RightBottom/ShowExperience";
import ShowSkills from "./RightBottom/ShowSkills";
function AboutMeLeft() {
  const [skills ,setSkills] = useState(true);
  const [education,setEducation] = useState(false);
  const [experience,setExperience] = useState(false);

  const onExperience = ()=>{
    setExperience(true)
    setEducation(false)
    setSkills(false)
  }
  const onSkills = ()=>{
    setExperience(false)
    setEducation(false)
    setSkills(true)
  }
  const onEducation = ()=>{
    setExperience(false)
    setEducation(true)
    setSkills(false)
  }
  return (
    
    <>
    <div className="md:w-1/2 w-full pt-10 ">

      <div className="text-2xl mb-5 font-semibold  flex flex-wrap gap-5 md:gap-10 justify-center">
          <p onClick={onSkills} className="border-b border-black hover:bg-indigo-600 p-1 rounded hover:text-white">Skills</p>
          <p onClick={onEducation} className="border-b border-black hover:bg-indigo-600 p-1 rounded hover:text-white">Education</p>
          <p onClick={onExperience} className="border-b border-black hover:bg-indigo-600 px-2 py-1 hover:text-white rounded">Experience</p>
        </div>

      { skills && <ShowSkills/>}
      { education && <ShowEducation/>}
      {experience && <ShowExperience/>}
    
    
    </div>
    </>

  );
}

export default AboutMeLeft;
