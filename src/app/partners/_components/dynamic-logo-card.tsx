"use client"
import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface DynamicLogoCardProps {
  logo: string
  backgroundLogo: string
  text: string
  hoverText: string
  href?: string
}

export default function DynamicLogoCard({ 
  logo, 
  backgroundLogo, 
  text, 
  hoverText, 
  href = "#" 
}: DynamicLogoCardProps) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <a
      href={href}
      className="block w-full max-w-[320px] aspect-[4/5] relative group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div 
        className={`
          absolute inset-0 bg-[#0f0d0d] rounded-[20px] 
          transition-all duration-300 ease-in-out 
          ${isHovering 
            ? 'border-[3px] border-white/20 shadow-[0_0_0_3px_rgba(255,255,255,0.1)]' 
            : ''
          }
          grayscale hover:grayscale-0 
          hover:shadow-xl overflow-hidden 
          group-hover:scale-[1.02]
        `}
      >
        {/* Background Logo */}
        <div 
          className={`
            absolute left-[-6rem] top-1/2 -translate-y-1/2 w-3/4 aspect-square grayscale 
            opacity-[3%] transition-all duration-300 ease-in-out
            ${isHovering ? 'opacity-[8%] scale-[1.05]' : ''}
          `}
        >
          <div className="absolute inset-0 bg-[#0f0d0d]"></div>
          <Image
            src={backgroundLogo || "/placeholder.svg"}
            alt="Background Logo"
            layout="fill"
            objectFit="contain"
            objectPosition="left center"
          />
        </div>

        {/* Centered Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-1/2 aspect-[3/1]">
            <Image 
              src={logo || "/placeholder.svg"} 
              alt="Logo" 
              layout="fill" 
              objectFit="contain" 
            />
          </div>
        </div>

        {/* Text */}
        <div className="absolute bottom-16 left-0 right-0 text-center">
          <p 
            className={`
              text-white text-lg font-medium px-6 transition-all duration-300 ease-in-out
              ${isHovering ? 'text-2xl text-white/90' : ''}
            `}
          >
            {text}
          </p>
        </div>

        {/* Hover Text */}
        <div
          className={`
            absolute bottom-8 left-0 right-0 flex items-center justify-center
            transition-all duration-300 ease-in-out
            ${isHovering ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
          `}
        >
          <span className="text-white/80 text-sm flex items-center gap-2">
            {hoverText} <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </a>
  )
}