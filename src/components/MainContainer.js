import React, { useEffect } from 'react'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'


const MainContainer = () => {
  
  return (
    <div className='col-span-11'>
      <div>Main</div>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer