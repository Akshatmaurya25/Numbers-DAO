"use client"
import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface DynamicLogoCardProps {
  logo: string
  backgroundLogo: string
  text: string
  hoverText: string
  href?: string
}

const DynamicLogoCard = ({ logo, backgroundLogo, text, hoverText, href = "#" }: DynamicLogoCardProps) => {
  return (
    <Link href={href} className="block w-full sm:w-auto">
      <div className="group relative bg-zinc-900 rounded-xl p-6 sm:p-8 hover:bg-zinc-800 transition-all duration-300 min-w-[250px] sm:min-w-[280px]">
        <div className="relative h-24 sm:h-32 flex items-center justify-center">
          <Image
            src={logo}
            alt={text}
            width={160}
            height={160}
            className="object-contain max-h-full w-auto transition-opacity duration-300 group-hover:opacity-0"
          />
          <Image
            src={backgroundLogo}
            alt={`${text} background`}
            width={160}
            height={160}
            className="object-contain max-h-full w-auto absolute inset-0 m-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-white font-medium text-lg sm:text-xl">{text}</h3>
          <p className="text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {hoverText}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DynamicLogoCard;