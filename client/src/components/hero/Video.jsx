import React from 'react'
import productVideo from "../../assets/video/Front - Customer Operations Platform.mp4"
const Video = () => {
  return (
    <div className='  px-12 flex justify-center items-center my-10 '>
      <video src={productVideo}  autoPlay loop muted className=' w-[70vw] aspect-video rounded-xl shadow-[0px_0px_10px_0px_#252B42]'>
        <source src={productVideo} type="video/mp4" />
      </video>
    </div>
  )
}

export default Video