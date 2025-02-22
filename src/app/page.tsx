import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import Image from "next/image";
import NumbersSection from "@/components/sections/NumbersSection";
import Trust from "@/components/sections/TrustSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <NumbersSection />
      <Trust />
      <Footer />
    </>
  );
}
