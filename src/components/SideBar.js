import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const displaySideBar=useSelector(state=>state.app.isMenuOpen);
  if(!displaySideBar) return null;
  return(
    <div className='w-48 p-5 col-span-1 h-screen '>
      <ul>
        <li className='hover:bg-gray-300 cursor-pointer'>Home</li>
        <li className='hover:bg-gray-300 cursor-pointer'>Shorts</li>
        <li className='hover:bg-gray-300 cursor-pointer'>Subscriptions</li>
      </ul>
      <h1 className='font-bold'>You </h1>
      <ul className=''>
        <li className='hover:bg-gray-300 cursor-pointer'>Your Channel</li>
        <li className='hover:bg-gray-300 cursor-pointer'>History</li>
        <li className='hover:bg-gray-300 cursor-pointer'>YourVideos</li>
        <li className='hover:bg-gray-300 cursor-pointer'>WatchLater</li>
      </ul>
      <div className=''>
        <h1 className='font-bold'>Subscritions</h1>
        <ul>
          <li className='hover:bg-gray-300 cursor-pointer'>Music</li>
          <li className='hover:bg-gray-300 cursor-pointer'>Sports</li>
          <li className='hover:bg-gray-300 cursor-pointer'>Gaming</li>
          <li className='hover:bg-gray-300 cursor-pointer'>Movies</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar