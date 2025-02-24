"use client";
import React, { useEffect } from "react";

const CalendlyEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head?.appendChild(script);

    // Clean up function to remove the script when component unmounts
    return () => {
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

return (
    <div
        className="calendly-inline-widget h-[400px] md:h-[570px] overflow-hidden  max-w-[900px] relative"
        data-url={url}
    />
);
};

export default CalendlyEmbed;