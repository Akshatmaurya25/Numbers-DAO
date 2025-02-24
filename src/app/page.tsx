import ApostrophyQuote from "@/components/sections/apostrophyquote";
import CardHero from "@/components/sections/cardsHero";
import Footer from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import InfiniteCarousel from "@/components/sections/infiniteCarousel";
import Navbar from "@/components/sections/Navbar";
import PixelatedPoster from "@/components/sections/pixelatedposter";

// import Image from "next/image";
// import Image from "next/image";
import NumbersSection from "@/components/sections/NumbersSection";
import TrustSection from "@/components/sections/TrustSection";
import DeveloperSection from "@/components/sections/developer-section";
import TeamSection from "@/components/sections/team-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfiniteCarousel />
      <CardHero/>
      <ApostrophyQuote />
      <PixelatedPoster/>
      <NumbersSection />

      <TeamSection></TeamSection>
      <TrustSection />
      <Footer />
    </>
  );
}
