import React, { useState } from 'react'

function HomeRight() {
  const [isLoaded , setIsLoaded] = useState(false);
  return (
    <div className= "md:w-1/2 w-100% ">
       <img className={`object-cover blur w-full h-full ${isLoaded ? "blur-none" : "blur"}`} src="/Myphoto/p7.png" alt="imagest" onLoad={()=>setIsLoaded(true)} />
    </div>
  )
}

export default HomeRight;