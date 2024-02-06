import React from "react";
import { Link } from "react-router-dom";

function Service() {
  return (
    <>
      <div id="services" className="pb-20  dark:bg-gray-800">
        <div className=" p-4 md:p-0">
          <div className="flex flex-wrap justify-around  mt-10">
            <div className="mt-5 max-w-md bg-gray-900 p-5 text-sm font-medium border-r-8 border-indigo-500 hover:border-gray-900 rounded-r text-white  transition-all duration-300 ease-in hover:bg-indigo-500 hover:shwdow hover:-translate-y-1">
              <i className="text-2xl mb-5 fa-solid fa-code"></i>
              <h2 className="text-lg font-bold mb-3 text-indigo-500">Web Design</h2>
              <p className="mb-4">
                Create attractive and user-friendly websites that look great,
                work well, and leave a strong impression on your visitors
              </p>
              <Link className="text-white text-sm hover:bg-gray-900 p-2 rounded-md " to="https://github.com/codepath26">Learn more</Link>
            </div>
            <div className="mt-5 max-w-md bg-gray-900 p-5 text-sm font-medium border-r-8 border-indigo-500 hover:border-gray-900 rounded-r text-white  transition-all duration-300 ease-in hover:bg-indigo-500 hover:shwdow hover:-translate-y-1">
              <i className="text-2xl mb-5 fa-sharp fa-solid fa-crop-simple"></i>
              <h2 className="text-lg font-bold mb-3 text-indigo-500">Web Development</h2>
              <p className="mb-4">
                Build websites that work smoothly and look good, so your online
                presence shines and your audience is impressed.
              </p>
              <Link className="text-white text-sm hover:bg-gray-900 p-2 rounded-md " to="https://github.com/codepath26" target="_blank">Learn more</Link>
            </div>
            <div className="mt-5 max-w-md bg-gray-900 p-5 text-sm font-medium border-r-8 border-indigo-500 hover:border-gray-900 rounded-r text-white  transition-all duration-300 ease-in hover:bg-indigo-500 hover:shwdow hover:-translate-y-1">
              <i className="text-2xl mb-5 fa-brands fa-app-store"></i>
              <h2 className="text-lg font-bold mb-3 text-indigo-500">Video Editing</h2>
              <p className="mb-4">
                Edit videos to make them look professional and captivating,
                leaving a strong impact on your audience.
              </p>
              <Link className="text-white text-sm hover:bg-gray-900 p-2 rounded-md " to="https://www.youtube.com/channel/UC6xWqrenRcG7UBxQFqT3vXA">Watch A Demo</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
