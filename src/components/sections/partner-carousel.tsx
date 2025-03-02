"use client"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const partners = [
  {
    name: "Akshat Mauya",
    role: "Product Manager",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-25%20at%208.45.47%20PM-0HstJjLG365LQHy0uLOc5HwYwrYqCC.jpeg",
    description: "Expert in digital transformation and e-commerce solutions with over 10 years of experience.",
  },
  {
    name: "Pranesh Joshi",
    role: "Frontend Developer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-25%20at%208.45.47%20PM-0HstJjLG365LQHy0uLOc5HwYwrYqCC.jpeg",
    description: "Specializing in real estate investments and portfolio management across Europe.",
  },
  {
    name: "Yatharth Urmaliya",
    role: "Blockchain Developer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-25%20at%208.45.47%20PM-0HstJjLG365LQHy0uLOc5HwYwrYqCC.jpeg",
    description: "Focused on scaling businesses through innovative growth strategies and market expansion.",
  },
  {
    name: "Sumitsemcool",
    role: "All Stack Developer",
    image:
      "",
    description: "Leading expert in mergers & acquisitions and corporate finance advisory.",
  },
  {
    name: "Sumitsemcool",
    role: "All Stack Developer",
    image:
      "",
    description: "Leading expert in mergers & acquisitions and corporate finance advisory.",
  },
  {
    name: "Sumitsemcool",
    role: "All Stack Developer",
    image:
      "",
    description: "Leading expert in mergers & acquisitions and corporate finance advisory.",
  },
]

export default function PartnersGrid() {
  return (
    <section className="min-h-screen bg-[#000000] flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full text-center mb-16">
        <h2 className="text-white font-semibold text-3xl md:text-4xl lg:text-5xl font-space-grotesk mb-2">
          Meet the Hands Behind
        </h2>
        <p className="text-[#4169E1] font-normal text-lg md:text-xl lg:text-2xl font-ibm-plex-mono">
          Our Performance
        </p>
      </div>

      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="relative group">
              <Card className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#1a1f47] to-[#0a0d24] border-0 h-full">
                <div className="aspect-[3/4] relative">
                  <Image 
                    src={partner.image || "/placeholder.svg"} 
                    alt={partner.name} 
                    fill 
                    className="object-cover" 
                  />
                  {/* Static info for mobile, visible by default */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f47]/90 to-transparent flex items-end p-6 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300">
                    <div className="text-white md:transform md:translate-y-4 md:group-hover:translate-y-0 md:transition-transform md:duration-300">
                      <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                      <p className="text-sm text-blue-300 mb-3">{partner.role}</p>
                      <p className="text-sm text-gray-300">{partner.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}