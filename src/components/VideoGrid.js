import React from "react";
import videos from "../data/Videos.json";
import VideoCard from "./VideoCard";
import "../Styles/VideoGrid.css";


const VideoGrid = () => {
  return (
    <div className="video-grid">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;
