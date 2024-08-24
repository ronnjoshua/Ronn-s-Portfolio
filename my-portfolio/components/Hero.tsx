"use client";
import React, { useState, useEffect } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TextGenerateEffect2 } from "./ui/text-generate-effect2";
import { Boxes } from "./ui/BackgroundBoxes";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const words = `Ideas to Life, `;
const introduction = `Hi, I'm Ronn a Website Developer.`;

// `Bringing Your Ideas to Life, One Line of Code at a Time.`

const Hero = () => {
  // const [showButton, setShowButton] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowButton(true);
  //   }, 2300);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="mt-4 px-48 h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <Boxes />
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <TextGenerateEffect
        visibleText="Bringing Your"
        animatedText={words}
        postAnimatedText="One Line of Code at a Time."
        className="text-center text-[40] md:text-5xl lg:text-6xl z-20"
      />
      <TextGenerateEffect2
        visibleText=""
        animatedText={introduction}
        postAnimatedText=""
        className="z-20"
      />
      <a className="mt-4" href="#about">
        <MagicButton title="Show my work" icon={<FaLocationArrow/>} 
        position="right"/>
      </a>
    </div>
  );
};

export default Hero;
