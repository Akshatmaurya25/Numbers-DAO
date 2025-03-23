"use client";

import { useEffect, useRef, useState } from "react";
import { Diamond, ExternalLink } from "lucide-react";
import Link from "next/link";

interface Milestone {
  title: string;
  description: string;
  reference: string;
}

interface MilestoneCardProps {
  milestones: Milestone[];
}

export default function MilestoneCard({ milestones }: MilestoneCardProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [displayedMilestones, setDisplayedMilestones] = useState<Milestone[]>(
    []
  );

  // Clone milestones for infinite scroll effect
  useEffect(() => {
    if (milestones.length > 0) {
      setDisplayedMilestones([...milestones, ...milestones, ...milestones]);
    }
  }, [milestones]);

  // Auto-scroll animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let startTime: number | null = null;
    const totalDuration = 30000; // 30 seconds for one complete scroll
    const scrollWidth = scrollContainer.scrollWidth / 3;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      if (isHovering) {
        startTime = timestamp - (timestamp % totalDuration);
        animationId = requestAnimationFrame(step);
        return;
      }

      const elapsed = timestamp - startTime;
      const progress = (elapsed % totalDuration) / totalDuration;

      // Reset scroll position when we've scrolled through the first set of items
      if (scrollContainer.scrollLeft >= scrollWidth) {
        scrollContainer.scrollLeft = 0;
        startTime = timestamp;
      }

      scrollContainer.scrollLeft = progress * scrollWidth;
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovering]);

  return (
    <div className="mx-auto">
      <div className=" xl:w-96 lg:w-10 rounded-xl overflow-hidden  shadow-xl h-[20rem] flex flex-col">
        {/* Header with gradient */}
        <div className="p-6 pb-2">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 text-2xl font-bold mb-1">
            Personal Milestones
          </h2>
          <p className="text-gray-400 text-sm text-wrap">
            Celebrating growth and achievements: A look back at moments that
            defined my 2024
          </p>
        </div>

        {/* Horizontally scrollable milestone list */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-x-hidden hover:overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="flex p-4 gap-6">
            {displayedMilestones.map((milestone, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 bg-gray-800/30 rounded-lg p-4 transition-all duration-300 hover:bg-gray-700/50"
              >
                {/* Diamond icon */}
                <div className="flex items-center mb-3">
                  <Diamond className="h-5 w-5 text-purple-500 mr-2" />
                  <h3 className="text-white font-medium text-lg truncate">
                    {milestone.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-left text-sm mb-3 line-clamp-3">
                  {milestone.description}
                </p>

                <Link
                  href={milestone.reference}
                  className="text-xs ml-auto flex gap-1 items-center text-purple-400"
                >
                  Checkout <ExternalLink size={12} />{" "}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
