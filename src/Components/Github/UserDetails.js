import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserDetails() {
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    const getUserDetails = async () => {
      let details = await axios.get("https://api.github.com/users/codepath26");
      // console.log(repoDetails.data, "repo");
      // console.log(typeof details);
      setUserDetails(details.data);
    };
    getUserDetails();
  }, []);
  return (
    <>
      <div className="pt-[100px] flex ">
        <div className="w-[40%] h-[400px]  flex flex-col items-center">
          <div className="rounded-full w-1/2 border border-gray-100  dark:border-white dark:shadow-orange-100 ms-2  shadow-lg shadow-gray-600 overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-full"
              src={userDetails.avatar_url}
              alt="Avatar_Image"
            />
          </div>
          <Link to={userDetails.html_url} target="_blank">
            <h1 className="mt-4 text-[30px] text-[#4338ca] dark:text-white">
              {userDetails.login}
            </h1>
          </Link>
        </div>
        <div className="w-[60%] flex flex-col dark:text-white">
          <div className="border p-2 dark:border-gray-700  text-lg">
            Name: {userDetails.name}{" "}
          </div>
          <div className="border p-2 dark:border-gray-700  text-lg">
            Bio: {userDetails.bio}{" "}
          </div>
          <div className="border p-2  dark:border-gray-700 text-lg">
            Email: {userDetails.email || "Not Provided"}{" "}
          </div>
          <div className="border p-2 dark:border-gray-700  text-lg">
            Twitter_Username: {userDetails.twitter_username || "Not Provided"}{" "}
          </div>
          <div className="border p-2 dark:border-gray-700 text-lg">
            Followers: {userDetails.followers}{" "}
          </div>
          <div className="border p-2 dark:border-gray-700 text-lg">
            Following: {userDetails.following}{" "}
          </div>
          <div className="border p-2 dark:border-gray-700 text-lg">
            Created_at: {userDetails.created_at}{" "}
          </div>
          <div className="border p-2 dark:border-gray-700 text-lg">
            Updated_at: {userDetails.updated_at}{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetails;