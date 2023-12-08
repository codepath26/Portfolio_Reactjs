import React from "react";

function ShowExperience() {
  return (
    <div className="p-8 flex pl-20" id="showExperience">
      <ul>
        <li className="my-2">
          <span>
            <strong>Game Development Experience</strong>
          </span>
          <br />
          <span className="dscTitle">Game Title:</span> RunFree
          <br />
          <span className="dscTitle">Genre:</span> Endless Runner, Obstacle
          Course, Avoidance, Skill-Based
          <br />
          <span className="dscTitle">Game Link:</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://play.google.com/store/apps/details?id=com.ADGames.RuNFreee&pcampaignid=web_share"
          >
            {" "}
            Play Store
          </a>
          <br />
        </li>
        <li className="my-2">
          <span>
            <strong>Jun 2022 To Dec 2022</strong>
          </span>
          <br />
          <span className="dscTitle">Company:</span> Harsha Engineers
          International Limited <br />
          <span className="dscTitle">Role:</span> GET
          <br />
        </li>
        <li className="my-2">
          <span>
            <strong>May 2023 To Present</strong>
          </span>
          <br />
          <span className="dscTitle">Company:</span> Sharpener
          <br />
          <span className="dscTitle">Role:</span> Intern(Student)
          <br />
        </li>
      </ul>
    </div>
  );
}

export default ShowExperience;
