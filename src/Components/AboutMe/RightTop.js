import React from "react";
import { Link } from "react-router-dom";
function RightTop() {
  return (
    <>
      <div className="font-light">
        <h1 className="text-center text-3xl p-2 my-3 ">
          <span className="border-b border-indigo-600 font-medium"> So, Who I AM?</span>
         
        </h1>
        <p className="text-lg  p-3  border border-indigo-500 rounded-[10px]">
          I'm a passionate developer with a love for creating impactful websites
          that leave a lasting mark. <br /> My journey in web development has
          spanned both front-end and back-end expertise, which you can explore
          on this website. <br /> I'm proficient in HTML, CSS, JavaScript,
          TypeScript, Bootstrap, and React for front-end tasks. On the back end,
          I've honed my skills in Node.js, Express.js, and databases like SQL,
          MySQL, Sequelize, MongoDB, and Mongoose. Git and GitHub are my go-to
          tools for version control. <br />
          Beyond coding, I've ventured into video editing and content creation
          through my YouTube channel{" "}
          <span>
            <Link
              className="text-indigo-600"
              to="https://www.youtube.com/channel/UC6xWqrenRcG7UBxQFqT3vXA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>D4Experiments.</strong>
            </Link>
          </span>
          <br /> During my free time, I even developed a game for the Play Store{" "}
          <Link
            className="text-indigo-600"
            to="https://play.google.com/store/apps/details?id=com.ADGames.RuNFreee&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>RunFree</strong>
          </Link>{" "}
          using C#.
          <br /> My creative toolkit extends to Adobe Photoshop, Adobe Premiere
          Pro, Canva, Figma, and Postman.
          <br />
          I'm committed to staying at the forefront of technological
          advancements.
        </p>
      </div>
    </>
  );
}

export default RightTop;
