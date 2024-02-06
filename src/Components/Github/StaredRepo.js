import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DateMaker from '../DateMaker';
import { Link } from 'react-router-dom';

function StaredRepo() {
  const [staredRepo , setStaredRepo] = useState([]);

  useEffect(()=>{
    const getStaredRepo = async()=>{
      let repos = await axios.get("https://api.github.com/users/codepath26/starred");
      console.log(repos , "this is the stared repo")
      setStaredRepo(repos.data);

    };
    getStaredRepo();
  } ,[]);
  return ( 
    <>
      <div>
        <div className="">
          <h1 className="text-center w-full font-bold text-[30px] py-2 text-[#4338ca]  dark:text-white">Stared Repositories</h1>
          <div className='flex flex-wrap w-full'>
          {staredRepo.map((repo, index) => {
            return (
              <ul
                className="  dark:text-white w-full  sm:w-1/2 md:w-1/3  p-2"
                key={repo.id}
              >
                <h1 className="text-bold mb-2 bg-green-400 text-[20px] dark:bg-green-900 text-center">
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

export default StaredRepo