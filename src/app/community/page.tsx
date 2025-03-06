import Navbar from "@/components/sections/Navbar";
import CommunityImageGallery from "./communityimagegallary";
import CommunityLinks from "./communitylinks";
import CommunityPageHero from "./communitypagehero";
import Footer from "@/components/sections/Footer";

export default function Community() {
  return (
    <>
      <Navbar />
      <CommunityPageHero />
      <CommunityLinks />
      <CommunityImageGallery />
      <Footer />
    </>
  );
}
