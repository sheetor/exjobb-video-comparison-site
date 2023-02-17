import React from 'react';
import VideoForm from './Video-Form';
import {server} from '../config'

const VideoPage = () => {
  const [videos, setVideos] = React.useState([]);

  const fetchVideos = async () => {
    const res = await fetch(`${server}/public/videos`);
    const data = await res.json();
    setVideos(data);
  };
  React.useEffect(() => {
    const getVids = async () =>{
      await fetchVideos()
    }
    //fetchVideos();
  }, []);

  return <VideoForm videos={videos} />;
};

export default VideoPage;
