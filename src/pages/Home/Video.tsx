import { videos } from "@/constants/images";
import React from "react";

const Video: React.FC = () => {
  return (
    <div className="relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        src={videos.demoVideo}
        poster="./hero_poster.png"
        className="relative"
      ></video>
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>
  );
};

export default Video;