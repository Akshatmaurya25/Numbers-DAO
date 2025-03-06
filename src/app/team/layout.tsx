import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import { ReactNode } from "react";

const TeamLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default TeamLayout;
