"use client";
import React, { useEffect, useState } from "react";
import { Vortex } from "../ui/vortex";
import { usePrivy } from "@privy-io/react-auth";

export const Hero = () => {
  const { ready, authenticated, login, user, logout } = usePrivy();
  if (authenticated) {
    console.log(user);
  }
  // Disable login when Privy is not ready or the user is already authenticated
  const disableLogin = !ready || (ready && authenticated);
  return (
    <div className=" relative p-4 lg:p-8 mt-16">
      {/* <div className="h-[75vh] overflow-hidden w-full justify-center items-center flex flex-col  bg-black p-4 rounded-2xl">
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
      </div> */}
      <div className="relative w-full h-full">
        <video
          width="1920"
          height="1080"
          controls={false}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="Air.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="absolute gap-4 inset-0 flex flex-col items-center justify-center text-white montserrat">
          <h1 className="text-4xl font-bold ">We bring the Numbers</h1>
          <AnimatedNumberText />
          {/* <h1 className="text-[7rem] ">DAO</h1> */}
        </div>
      </div>
    </div>
  );
};

const AnimatedNumberText = () => {
  const finalText = "NUMBERS DAO";
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
      <div className=" text-[70px] lg:text-[100px] grotesk leading-none  font-bold text-whi font-mono">
        {displayText || (isAnimating ? "0".repeat(finalText.length) : "")}
      </div>
    </div>
  );
};
