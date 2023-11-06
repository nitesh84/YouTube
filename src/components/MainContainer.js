import React, { useEffect } from 'react'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'
import { YOUTUBE_API_KEY } from '../Utils/constant'


const MainContainer = () => {
  
  return (
    <div className='col-span-11'>
      <ButtonList />
      <VideoContainer videoapi={YOUTUBE_API_KEY} />
    </div>
  )
}

export default MainContainer