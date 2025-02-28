"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import AirDAO from "@/assests/AirDAO.svg";
import PushChain from "@/assests/pushChain.png";
import ETH from "@/assests/ETH.png";
import push from "@/assests/Push.svg";
import scroll from "@/assests/scroll.svg";
import base from "@/assests/Base.svg";
import bera from "@/assests/Bera.png";
export default function InfiniteCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      setStart(true);
    }
  }

  return (
    <div className="flex absolute bottom-[-5rem] text-white justify-center mb-24">
      <section className="flex w-full max-w-[1080px] flex-col gap-0 self-center ">
        <p className="self-center  my-7 ">Trusted by leading ecosystems</p>

        <div
          ref={containerRef}
          className="relative z-20 w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
          }}
        >
          <div
            ref={scrollerRef}
            className={`flex items-center gap-16 w-max flex-nowrap ${
              start ? "animate-[scroll_15s_linear_infinite] hover:pause" : ""
            }`}
          >
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center items-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={parseInt(logo.width || "140")}
                  height={parseInt(logo.height || "50")}
                  className={`my-auto grayscale object-cover ${
                    logo.brightness ? "brightness-30" : ""
                  }`}
                  style={{
                    maxWidth: logo.width || "140px",
                    minWidth: logo.width || "140px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const logos: {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  brightness?: boolean;
}[] = [
  {
    src: AirDAO,
    alt: "Air DAO",
  },

  {
    src: push,
    alt: "Push Protocol",
  },
  {
    src: ETH,
    alt: "Ethereum",
  },
  {
    src: base,
    alt: "Base Protocol",
  },
  {
    src: bera,
    alt: "Bera Chain",
    // width: "160",
    // height: "60",
  },
  {
    src: scroll,
    alt: "Scroll",
  height: "45",
  },
];
