import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY } from '../Utils/constant';
import VideoCard, { HocVideoCard } from './VideoCard';
import _map from "lodash/map"
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openMenu } from '../Utils/appslice';
import _filter from "lodash/filter"
import _includes from "lodash/includes"

const VideoContainer = ({ videoapi }) => {

  const [videoData, setVideoData] = useState([]);
  const dispatch = useDispatch();
  const searchdata = useSelector(state => state.search);
  console.log("searchdata", searchdata);

  useEffect(() => {
    dispatch(openMenu())
    getVideos();
  }, [])

  useEffect(() => {
    filteredResult(videoData);
    if(searchdata.length===0) getVideos();
  }, [searchdata])

  const getVideos = async () => {
    const data = await fetch(videoapi);
    const json = await data.json();
    setVideoData(json.items);
  }

  const filteredResult = (videos) => {
    console.log("filtered Data called:", videos);
    const filteredData = _filter(videos, (item) => {
      console.log(item.snippet.title, searchdata)
      if(_includes(item.snippet.title,searchdata)) return item
    })
    console.log("filtered data:", filteredData);
    if(filteredData.length>0)setVideoData(filteredData
      )
  }
  const [params] = useSearchParams();

  console.log("videodata", videoData, "params:", params.get('v'));

  if (params.get('v'))
    return (
      <div className='flex flex-col'>
        {videoData.length > 0 && <Link className='m-4 w-4/5 shadow shadow-lg transform transition-transform hover:scale-110' to={"/watch?v=" + videoData[0].id}>  <HocVideoCard info={videoData[0]} /></Link>}
        {videoData.length > 0 ? _map(videoData, (videos, index) => {
          if (index === 0) return
          return <Link key={videos.id} className='m-4 w-4/5 shadow shadow-lg transform transition-transform hover:scale-110' to={"/watch?v=" + videos.id}><VideoCard info={videos} /></Link>
        }) : null}

      </div>
    )
  else {
    return (
      <div className='flex flex-wrap justify-center'>
        {videoData.length > 0 && <Link className='m-4 w-1/5 shadow shadow-lg transform transition-transform hover:scale-110' to={"/watch?v=" + videoData[0].id}>  <HocVideoCard info={videoData[0]} /></Link>}
        {videoData.length > 0 ? _map(videoData, (videos, index) => {
          if (index === 0) return
          return <Link key={videos.id} className='m-4 w-1/5 shadow shadow-lg transform transition-transform hover:scale-110' to={"/watch?v=" + videos.id}><VideoCard info={videos} /></Link>
        }) : null}

      </div>
    )
  }
}

export default VideoContainer