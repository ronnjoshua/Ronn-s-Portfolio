"use client";
import React, { useState, useEffect } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TextGenerateEffect2 } from "./ui/text-generate-effect2";
import { cn } from "@/lib/utils";
import { Boxes } from "./ui/background-boxes";
import MagicButton from "./ui/MagicButton";

const words = `Bringing Your Ideas to Life, One Line of Code at a Time.`;
const introduction = "Hi, Im Ronn a Website Developer.";

const Hero = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2300);

    return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
  }, []);

  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <Boxes />
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <TextGenerateEffect
        words={words}
        className="text-center text-[40] md:text-5xl lg:text-6xl z-20"
      />
      <TextGenerateEffect2 words={introduction} className="z-20" />
      <a href="#about">{showButton && <MagicButton />}</a>
    </div>
  );
};

export default Hero;
