import React from "react";

function ShowSkills() {
  return (
    <>
      <div
        className=" p-8 flex pl-20"
        id="showSkills"
      >
        <ul>
          <li className="my-2">
            <span>
              <strong>Front-End Development</strong>
            </span>
            <br />
            HTML, CSS, JavaScript, TypeScript, Bootstrap, React
          </li>
          <li className="my-2">
            <span>
              <strong>Back-End Development</strong>
            </span>
            <br />
            Node.js, Express.js, SQL, MySQL, Sequelize, MongoDB, Mongoose
          </li>
          <li className="my-2">
            <span>
              <strong>Version Control</strong>
            </span>
            <br />
            Git, GitHub
          </li>
          <li className="my-2">
            <span>
              <strong>Video Editing & Content Creation</strong>
            </span>
            <br />
            Adobe Premiere Pro
          </li>
          <li className="my-2">
            <span>
              <strong>Game Development</strong>
            </span>
            <br />
            Unity Engine
          </li>
        </ul>
      </div>
    </>
  );
}

export default ShowSkills;
