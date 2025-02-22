"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

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
        <div className="flex justify-center mb-24">
            <section className="flex w-full max-w-[1080px] flex-col gap-4 self-center ">
                <p className="self-center text-sm my-7 text-zinc-900/80">
                    Powering thousands of engineers building reliable agents
                </p>
                
                <div 
                    ref={containerRef}
                    className="relative z-20 w-full overflow-hidden"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)'
                    }}
                >
                    <div
                        ref={scrollerRef}
                        className={`flex items-center gap-16 py-4 w-max flex-nowrap ${
                            start ? 'animate-[scroll_15s_linear_infinite] hover:pause' : ''
                        }`}
                    >
                        {logos.map((logo, index) => (
                            <div key={index} className="flex justify-center items-center">
                                <Image 
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={parseInt(logo.width || '140')}
                                    height={50}
                                    className={`my-auto grayscale ${logo.brightness ? 'brightness-30' : ''}`}
                                    style={{ 
                                        maxWidth: logo.width || '140px',
                                        minWidth: logo.width || '140px'
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

const logos: { src: string; alt: string; width?: string; brightness?: boolean }[] = [
    { src: "https://www.paymanai.com/assets/images/logo.svg?v=0ddbad40b3", alt: "CrewAI" },
    { src: "https://www.paymanai.com/assets/images/logo.svg?v=0ddbad40b3", alt: "Amadeus" },
    { src: "https://www.paymanai.com/assets/images/logo.svg?v=0ddbad40b3", alt: "Amadeus" },
    // ... rest of the logos array
];
