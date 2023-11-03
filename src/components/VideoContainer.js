import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY } from '../Utils/constant';
import VideoCard, { HocVideoCard } from './VideoCard';
import _map from "lodash/map"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openMenu } from '../Utils/appslice';

const VideoContainer = () => {

  const [videoData,setVideoData]=useState([]);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(openMenu())
    getVideos();
    console.log("called")
  },[])

  const getVideos=async ()=>{
    const data=await fetch(YOUTUBE_API_KEY);
    const json=await data.json();
    setVideoData(json.items);
  }

  

  console.log("videodata",videoData);
  return (
    <div className='flex flex-wrap justify-center'>
     { videoData.length>0 && <HocVideoCard info={videoData[0]} />}
      {videoData.length>0? _map(videoData,(videos,index)=>{
        if(index===0) return 
        return <Link key={videos.id} className='m-4 w-1/5 shadow shadow-lg transform transition-transform hover:scale-110' to={"/watch?v="+videos.id}><VideoCard  info={videos} /></Link> 
      }):null}
      
    </div>
  )
}

export default VideoContainer