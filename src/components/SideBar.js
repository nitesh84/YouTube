import React from 'react'

const SideBar = () => {
  return (
    <div className='w-48 p-5 col-span-1 border border-gray-400 shadow-blue-950 shadow'>
      <ul className=''>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1>YOu</h1>
      <ul className=''>
        <li>Your Channel</li>
        <li>History</li>
        <li>YourVideos</li>
        <li>WatchLater</li>
      </ul>
      <div className=''>
        <h1 className='font-bold'>Subscritions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar