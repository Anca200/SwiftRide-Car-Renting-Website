import React from 'react';
import video from "../assets/video.mp4"

const Video = () => {

  
  return (
    <>

<video   className='w-full h-[300px] object-cover mt-[150px] lg:mt-0'   loop  autoPlay muted>
 <source src={video}
type="video/mp4"/>
</video>

    </>
  )
}

export default Video