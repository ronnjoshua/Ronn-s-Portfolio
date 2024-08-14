import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { cn } from "@/lib/utils";
import { Boxes } from "./ui/background-boxes";

const words = `Hi! I'm Ronn, a passionate Web Developer dedicated to creating dynamic and engaging online experiences.`;

const Hero = () => {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <TextGenerateEffect
        words={words}
        className={cn(
          "md:text-4xl text-xl text-white relative z-20 text-center"
        )}
      />
      <Boxes />
    </div>
  );
};

export default Hero;
