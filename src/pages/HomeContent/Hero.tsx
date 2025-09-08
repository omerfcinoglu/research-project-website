import React from "react";
import { Spacer } from "@heroui/react";
import Video from "../Home/Video";

interface HeroProps {
  title: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <div className="relative m-0 p-0 flex flex-col mb-10 overflow-hidden">
      <div className="relative w-full px-4 text-center text-white max-w-full">
        <h1 className="w-full dark:text-white text-black font-bold leading-tight text-center break-words
          text-2xl 
          sm:text-3xl  
          md:text-4xl 
          lg:text-4xl 
          xl:text-4xl
          mb-4"
        >
          {title}
        </h1>
        <Spacer y={0.5} />
      </div>
      <Video />
    </div>
  );
};

export default Hero;