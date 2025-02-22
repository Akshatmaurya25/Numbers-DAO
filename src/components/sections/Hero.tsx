"use client";
import React, { useEffect, useState } from "react";
import { Vortex } from "../ui/vortex";

export const Hero = () => {
  return (
    <div className=" relative p-4 lg:p-8">
      <div className="h-[75vh] overflow-hidden w-full justify-center items-center flex flex-col  bg-black p-4 rounded-2xl">
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={500}
          baseHue={120}
          className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
        >
          <div className="montserrat">
            <h1>It all comes down to</h1>
          </div>
          <AnimatedNumberText />
        </Vortex>
      </div>
    </div>
  );
};

const AnimatedNumberText = () => {
  const finalText = "NUMBERS";
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(true);

  const getRandomChar = () => {
    // Array of possible characters: numbers 0-9 and uppercase letters A-Z
    const characters = [..."0123456789", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    return characters[Math.floor(Math.random() * characters.length)];
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const startAnimation = () => {
      setIsAnimating(true);
      let iterationCount = 0;
      const maxIterations = 25; // Number of times the characters will change

      const interval = setInterval(() => {
        iterationCount++;

        if (iterationCount < maxIterations) {
          // Generate random characters (numbers or letters) for each position
          const randomChars = Array(finalText.length)
            .fill(0)
            .map(() => getRandomChar())
            .join("");
          setDisplayText(randomChars);
        } else {
          // Show final text
          clearInterval(interval);
          setDisplayText(finalText);
          setIsAnimating(false);

          // Restart animation after 3 seconds
          timeoutId = setTimeout(() => {
            startAnimation();
          }, 4000);
        }
      }, 70); // Speed of character changes

      return () => {
        clearInterval(interval);
        clearTimeout(timeoutId);
      };
    };

    startAnimation();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="">
      <div className=" text-[70px] lg:text-[100px] montserrat leading-none  font-bold text-whi font-mono">
        {displayText || (isAnimating ? "0".repeat(finalText.length) : "")}
      </div>
    </div>
  );
};
