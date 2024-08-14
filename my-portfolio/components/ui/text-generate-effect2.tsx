"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect2 = ({
  visibleText,
  animatedText,
  postAnimatedText,
  className,
  filter = true,
  duration = 0.5,
}: {
  visibleText: string;
  animatedText: string;
  postAnimatedText?: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = animatedText.split(" ");

  useEffect(() => {
    const loopAnimation = async () => {
      for (let i = 0; i < 1; i++) {
        await animate(
          "span",
          {
            opacity: [0, 1],
            filter: filter ? ["blur(10px)", "blur(0px)"] : "none",
          },
          {
            duration: duration,
            delay: stagger(0.35),
          }
        );

      }
    };

  // Delay the start of the animation by 5 seconds
  const timeoutId = setTimeout(() => {
    loopAnimation();
  }, 4500);

  // Clear the timeout if the component unmounts to prevent memory leaks
  return () => clearTimeout(timeoutId);
}, [animate, duration, filter]);

  const renderAnimatedWords = () => {
    return (
      <motion.span ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={`${
              idx >= 2 && idx <= 2
                ? "text-purple-500"
                : "dark:text-gray-100 text-black"
            } opacity-0`}
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.span>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4 dark:text-white text-black text-2xl leading-snug tracking-wide">
        {/* Render the visible text, animated words, and post-animated text in a single line */}
        <span>{visibleText} </span>
        {renderAnimatedWords()}
        {postAnimatedText && <span> {postAnimatedText}</span>}
      </div>
    </div>
  );
};
