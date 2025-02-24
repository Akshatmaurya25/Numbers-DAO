"use client"

import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

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

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const cardWidth = container.offsetWidth * 0.85 // Assuming each card takes ~85% of container width
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-[#FFF5EB] px-3 py-1 text-sm font-medium text-[#FF8A00]">
              TEAM
            </span>
          </div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Web3 experts with deep
            <br />
            decentralized network
            <br />
            experience:
          </h2>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 scrollbar-hide -mx-4 px-4"
          >
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="relative flex-none w-[85vw] max-w-xl snap-center rounded-xl bg-white shadow-lg md:w-[600px]"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-3 top-3 h-6 w-6 rounded-full bg-white/80 p-1 z-10"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Remove</span>
                </Button>
                <div className="aspect-[4/3] relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                  <p className="mb-4 text-sm text-slate-500">{member.role}</p>
                  <p className="text-sm leading-relaxed text-slate-600">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="absolute right-4 top-0 flex gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => scroll("left")}
              className="h-8 w-8 rounded-full border-slate-200 bg-white"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => scroll("right")}
              className="h-8 w-8 rounded-full border-slate-200 bg-white"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

