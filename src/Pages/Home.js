import React from "react";
import VideoGrid from "../components/VideoGrid";
import "./../Styles/Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Bienvenido a AluraFlix</h1>
      <p>Explora y organiza tus videos favoritos.</p>
      <VideoGrid />
    </div>
  );
}

export default Home;

