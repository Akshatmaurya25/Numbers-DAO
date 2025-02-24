"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/util"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full bg-white transition-all duration-300",
        scrolled ? "border-b border-slate-100 shadow-sm" : "",
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WwlNjNmcez5OaaqPLTxnP1T2EpMU9j.png"
            alt="Payman Logo"
            width={120}
            height={32}
            priority
          />
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-slate-900 transition-colors hover:text-slate-900/70">
            Home
          </Link>
          <Link
            href="/developers"
            className="text-sm font-medium text-slate-900 transition-colors hover:text-slate-900/70"
          >
            Developers
          </Link>
          <Link href="/blog" className="text-sm font-medium text-slate-900 transition-colors hover:text-slate-900/70">
            Blog
          </Link>
        </nav>
        <Button className="hidden rounded-full bg-black px-6 text-white hover:bg-black/90 md:inline-flex">
          Start Building
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    </header>
  )
}

