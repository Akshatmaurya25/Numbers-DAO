'use client'
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
import { PrivyProvider } from "@privy-io/react-auth";
import DeveloperSection from "@/components/sections/developer-section";
import TeamSection from "@/components/sections/team-section";
import PartnerCarousel from "@/components/sections/partner-carousel";

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
      <DeveloperSection />
      <PartnerCarousel></PartnerCarousel>
      
    
      <TrustSection />
      <Footer />
      <PrivyProvider
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID ?? ""}
        config={{
          // Customize Privy's appearance in your app
          appearance: {
            theme: "light",
            accentColor: "#676FFF",
            logo: "https://your-logo-url",
          },
          // Create embedded wallets for users who don't have a wallet
          embeddedWallets: {
            createOnLogin: "users-without-wallets",
          },
        }}
      >
        {/* Add your children components here */}
        <div>Your content here</div>
      </PrivyProvider>
    </>
  );
}
