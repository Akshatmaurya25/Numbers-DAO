"use client"; // Ensures this runs only on the client

import dynamic from "next/dynamic";

// Dynamically import the Lottie component with SSR disabled
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

import animationData from "@/assests/Loader_black.json"; // Replace with your Lottie file path
import animationData2 from "@/assests/Loader_white.json"; // Replace with your Lottie file path

const LogoLoader = ({ black }: { black: boolean }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: black ? animationData : animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={200} width={200} />;
};

export default LogoLoader;
