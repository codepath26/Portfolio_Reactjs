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
      <div className="md:w-1/2 w-100% p-20 flex justify-center items-center">
        <div className="text-black  dark:text-white">
          <h1 className='mb-2 text-4xl font-bold'>Hi, I'm <span className='text-indigo-600'>Parth</span></h1>
          <TypedComponent greeting={HomeGreeting}/>
          <p className='mt-4'>
            Passionate about seizing every opportunity to create and design
            websites that make a lasting impact, leaving a digital footprint
            that tells a compelling story.
          </p>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Homeleft