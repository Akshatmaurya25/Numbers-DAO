import React from "react";
import DynamicLogoCard from "./_components/dynamic-logo-card";

const partners = [
  {
    logo: "/Aarambh-labs.png",
    backgroundLogo: "/Aarambh.png",
    text: "Aarambh Labs",
    hoverText: "Learn more about our partnership",
    href: "#"
  },
  {
    logo: "/wizz.png",
    backgroundLogo: "/wizz.png",
    text: "WizzHQ",
    hoverText: "Learn more about our opportunities",
    href: "#"
  },
  {
    logo: "/gsq.png",
    backgroundLogo: "/gsq.png",
    text: "GrowthSquare",
    hoverText: "Learn more about our opportunities",
    href: "#"
  },
  // Add more partners here as needed
];

const PartnersPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 place-items-center -mx-2">
          {partners.map((partner, index) => (
            <DynamicLogoCard
              key={index}
              logo={partner.logo}
              backgroundLogo={partner.backgroundLogo}
              text={partner.text}
              hoverText={partner.hoverText}
              href={partner.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
