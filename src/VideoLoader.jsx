// src/Components/VideoLoader.js
import React from 'react';
import video from "./assets/preloader.mp4";

const VideoLoader = () => {
  return (
    <div className="video-loader-container">
      <video autoPlay muted playsInline className="video-loader">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoLoader;
