"use client"
import Image from "next/image"

interface ProfileCardProps {
  name: string
  title: string
  imageUrl: string
}

export default function ProfileCard({ name, title, imageUrl }: ProfileCardProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-black rounded-lg hover:bg-gray-900 transition-colors">
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 overflow-hidden rounded-full shrink-0">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="flex flex-col min-w-0">
        <h3 className="text-white font-bold text-base sm:text-lg truncate">{name}</h3>
        <p className="text-gray-400 text-sm truncate">{title}</p>
      </div>
    </div>
  )
}