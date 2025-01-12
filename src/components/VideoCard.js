import React from "react";
import "./../Styles/VideoCard.css";
const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <img src={video.image} alt={video.title} />
      <h3>{video.title}</h3>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoCard;
