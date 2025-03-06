"use client"
import Image from "next/image"

interface ProfileCardProps {
  name: string
  title: string
  imageUrl: string
}

export default function ProfileCard({ name, title, imageUrl }: ProfileCardProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-black rounded-lg">
      <div className="relative w-12 h-12 overflow-hidden rounded-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-white font-bold text-lg">{name}</h3>
        <p className="text-gray-400 text-sm">{title}</p>
      </div>
    </div>
  )
}