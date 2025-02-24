"use client"

import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import { useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Can Kisagun",
    role: "CEO",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Can was the co-founder and Chief Product Officer of Enigma MPC and Secret Network, the first privacy preserving smart contracting L1 powered by TEEs. Before Secret Network, Can was at MIT and McKinsey & Co.",
  },
  {
    name: "Orest Tarasiuk",
    role: "CTO",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Orest worked as engineer at Scroll, an Ethereum zkRollup L2. He also started zkWarsaw, a tech community running ZKP events. Before that, he co-founded and served as CTO at Kivi, a video calling app, and Care Care, a mobile health platform.",
  },
  {
    name: "Krzysztof Spisak-Spisacki",
    role: "Founding Engineer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Krzysztof is an analytical, agile and versatile Java native who fell in love with the blockchain domain because of its complexity and constant innovation. Krzysztof has 11 years of professional experience.",
  },
  {
    name: "Wojciech Nawrot",
    role: "Founding Engineer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Wojciech is a software engineer with deep experience in blockchain and distributed systems.",
  },
]

export default function TeamSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const cardWidth = container.querySelector(".team-card")?.clientWidth || 400
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth
    
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    })
    
    setActiveIndex(prev => {
      const newIndex = direction === "left" 
        ? Math.max(0, prev - 1) 
        : Math.min(teamMembers.length - 1, prev + 1)
      return newIndex
    })
  }

  return (
    <section className="relative bg-gradient-to-b from-white to-slate-50 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Decorative elements */}
        <div className="absolute -top-10 left-0 h-40 w-40 rounded-full bg-blue-100/40 blur-3xl"></div>
        <div className="absolute right-0 top-40 h-60 w-60 rounded-full bg-purple-100/30 blur-3xl"></div>
        
        <div className="relative mb-16">
          <div className="flex items-center justify-between mb-6">
            <span className="inline-flex items-center rounded-full bg-[#FFF5EB] px-4 py-1.5 text-sm font-medium text-[#FF8A00]">
              TEAM
            </span>
            <div className="flex items-center gap-3">
              <Button
                size="lg"
                variant="outline"
                onClick={() => scroll("left")}
                className="h-10 w-10 rounded-full border-slate-200 bg-white/90 shadow-lg backdrop-blur transition-all hover:border-blue-200 hover:bg-blue-50 disabled:opacity-50"
                disabled={activeIndex === 0}
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scroll("right")}
                className="h-10 w-10 rounded-full border-slate-200 bg-white/90 shadow-lg backdrop-blur transition-all hover:border-blue-200 hover:bg-blue-50 disabled:opacity-50"
                disabled={activeIndex === teamMembers.length - 1}
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next</span>
                  </Button>
            </div>
          </div>
          <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Web3 experts with deep
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              decentralized network
            </span>
            <br />
            experience:
          </h2>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="hide-scrollbar flex items-stretch gap-8 overflow-x-auto pb-20 pl-1 pt-4"
          >
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className={`team-card group relative flex-none w-[300px] h-[500px] md:w-[350px] md:h-[520px] rounded-2xl border-0 bg-white transition-all duration-300 ${
                  index === activeIndex ? "scale-100 shadow-xl" : "scale-95 shadow-md opacity-70"
                }`}
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative h-full rounded-2xl bg-white p-1 flex flex-col">
                  <div className="relative h-48 md:h-52 w-full overflow-hidden rounded-xl flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-3 top-3 z-10 h-8 w-8 rounded-full bg-white/80 p-1 shadow-md transition-all hover:bg-white"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </div>
                  <div className="p-5 md:p-6 flex-grow flex flex-col">
                    <div className="mb-3">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900">{member.name}</h3>
                      <p className="text-sm font-medium text-blue-600">{member.role}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600 line-clamp-6">{member.bio}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

