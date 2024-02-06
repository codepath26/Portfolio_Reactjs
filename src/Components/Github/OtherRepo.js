import React, { useEffect, useState } from 'react'
import DateMaker from '../DateMaker';
import { Link } from 'react-router-dom';
import axios from 'axios';

function OtherRepo() {
  const [repos, setRepos] = useState([]);
  
  useEffect(() => {
    const getUserDetails = async () => {
      let repoDetails = await axios.get(
        "https://api.github.com/users/codepath26/repos"
      );
      setRepos(repoDetails.data);
    };
    getUserDetails();
  }, []);
  return (
    <>
       <div className=''>
        <div className="">
          <h1 className="text-center w-full font-bold text-[30px] py-2 text-[#4338ca]  dark:text-white">Repositories</h1>
          <div className='flex flex-wrap w-full '>
          {repos.map((repo, index) => {
            return (
              <ul
                className="  dark:text-white w-full  sm:w-1/2 md:w-1/3  p-2"
                key={repo.id}
              >
                <h1 className="text-bold mb-2 bg-yellow-400 text-[20px] dark:bg-gray-900 text-center">
                  {index + 1}
                </h1>
                <li className="mb-1">Name: {repo.name}</li>
                <li className="mb-1">Full_name: {repo.full_name}</li>
                <li className="mb-1">
                  Created_at: <DateMaker createdAtString={repo.created_at} />
                </li>
                <li className="mb-1">Description: {repo.description}</li>
                <li className="mb-1">Language: {repo.language}</li>
                <li className="mb-1">Size: {repo.size}</li>
                <li className="mb-1">Updated_at: <DateMaker createdAtString={repo.updated_at}/></li>
                <li className="mb-1">Visibility: {repo.visibility}</li>
                <Link to={repo.html_url} target='_blank' className='bg-[#4338ca] px-2 text-white hover:border-b hover:bg-white hover:text-[#4338ca] hover:border-black '>Goto Repo</Link>
              </ul>
            );
          })}
        </div>
        </div>
      </div>

    </>
  )
}

export default OtherRepo