"use client"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

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
]

export default function PartnerCarousel() {
  return (
    <section className="min-h-screen bg-[#010314] flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full text-center mb-16">
        <h2 className="text-white font-semibold text-3xl md:text-4xl lg:text-5xl font-space-grotesk mb-2">
          Meet the Hands Behind
        </h2>
        <p className="text-[#4169E1] font-normal text-lg md:text-xl lg:text-2xl font-ibm-plex-mono">
          Our Performance
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-6xl"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {partners.map((partner, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="relative group">
                <Card className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#1a1f47] to-[#0a0d24] border-0">
                  <div className="aspect-[3/4] relative">
                    <Image src={partner.image || "/placeholder.svg"} alt={partner.name} fill className="object-cover" />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f47]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                        <p className="text-sm text-blue-300 mb-3">{partner.role}</p>
                        <p className="text-sm text-gray-300">{partner.description}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12 bg-transparent border-white/20 hover:bg-white/10 text-white" />
        <CarouselNext className="hidden md:flex -right-12 bg-transparent border-white/20 hover:bg-white/10 text-white" />
      </Carousel>
    </section>
  )
}