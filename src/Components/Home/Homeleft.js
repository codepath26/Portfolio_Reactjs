import React from 'react'
import TypedComponent from '../TypedJS/Typejs'

function Homeleft() {
  const HomeGreeting = [
    'Youtuber',
    'Video Editor',
    'Content Creator',
    'Fullstack Developer',
  ]
  return (
   
    <>
      <div className="md:w-1/2  md:p-20 p-10 flex justify-center items-center">
        <div className="text-black  dark:text-white">
          <h1 className='mb-2 text-4xl font-bold'>Hi, I'm <span className='text-indigo-600'>Parth</span></h1>
          <TypedComponent greeting={HomeGreeting}/>
          <p className='mt-4 md:w-auto w-full text-[18px] text-gray-500 dark:text-gray-200  font-light'>
            Passionate about seizing every opportunity to create and design
            websites that make a lasting impact, leaving a digital footprint
            that tells a compelling story.
          </p>
          <div className="mt-10  md:text-start text-center ">
          <a
            className="px-4   py-2 bg-indigo-700 border rounded text-white "
            href={process.env.PUBLIC_URL + "/resume/Parth_Thakor.pdf"}
            download='Parth_Thakor.pdf'
          >
            Download CV
          </a>
        </div>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Homeleft