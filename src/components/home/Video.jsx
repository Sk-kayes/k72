import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
    <video autoPlay muted loop src='./video/video-1.mp4' className='w-full h-full object-cover' />
  </div>
  )
}

export default Video
