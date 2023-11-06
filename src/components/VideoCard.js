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

export const HocVideoCard = ({ info }) => {
  console.log(info)
  return (<>
    <VideoCard info={info} />
  </>)
}

export default VideoCard