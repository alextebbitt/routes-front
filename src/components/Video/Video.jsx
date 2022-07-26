import React from 'react'
import videoBg from './assets/video.mp4'
const Video = () => {
  return (
    <div className="bgVideo">
        <video autoPlay muted loop>
<source src={videoBg}/>

        </video>
    </div>
  )
}

export default Video