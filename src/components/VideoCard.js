import React from 'react'

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;
  return (
    <div className=' '>
      <img className='rounded rounded-2xl' src={`${thumbnails.medium.url}`} />
      <h3 className='font-bold max-w-xs'>{title}</h3>
      <p>{channelTitle}</p>
      <p>{statistics.viewCount}Views</p>
    </div>
  )
}

export const HocVideoCard = ({info}) => {
  console.log(info)
  return (<div className='m-4 w-1/5 border border-red-600 shadow shadow-lg transform transition-transform hover:scale-110'>
      <VideoCard info={info}/>
      
  </div>)
}

export default VideoCard