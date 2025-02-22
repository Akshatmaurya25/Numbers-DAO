import ApostrophyQuote from "@/components/sections/apostrophyquote";
import CardHero from "@/components/sections/cardsHero";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import InfiniteCarousel from "@/components/sections/infiniteCarousel";
import { Navbar } from "@/components/sections/Navbar";
import PixelatedPoster from "@/components/sections/pixelatedposter";

// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfiniteCarousel />
      <CardHero/>
      <ApostrophyQuote />
      <PixelatedPoster/>
      <Footer />
    </>
  );
}
