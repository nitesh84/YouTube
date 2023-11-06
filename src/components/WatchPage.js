import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/appslice';
import { useParams, useSearchParams } from 'react-router-dom';
import VideoContainer from './VideoContainer';
import { YOUTUBE_API_KEY_WATCH_PAGE } from '../Utils/constant';

const WatchPage = () => {

  const [data]=useSearchParams();
  console.log("data:",data.get('v'));
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(closeMenu());
  },[]);
  return (
    <>
    <iframe className='my-10 mx-24' width="1024" height="450" src={`https://www.youtube.com/embed/${data.get("v")}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <VideoContainer videoapi={YOUTUBE_API_KEY_WATCH_PAGE}/>
    </>
  )
}

export default WatchPage