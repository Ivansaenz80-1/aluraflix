import React from "react";

function Card({ video }) {
  return (
    <div className="card">
      <img src={video.image} alt={video.title} />
      <h3>{video.title}</h3>
      <p>{video.category}</p>
      <a href={video.video} target="_blank" rel="noopener noreferrer">
        Ver video
      </a>
      <p>{video.description}</p>
    </div>
  );
}

export default Card;
