import React from "react";
import DynamicLogoCard from "./_components/dynamic-logo-card";
import ProfileCard from "./_components/profile-card";

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

const profiles = [
  // First row profiles
  {
    name: "Akshat Maurya",
    title: "Founder & CEO",
    imageUrl: "/profiles/john.jpg"
  },
  {
    name: "Pranesh Joshi",
    title: "Head of Partnerships",
    imageUrl: "/profiles/jane.jpg"
  },
  {
    name: "Yatharth Urmaliya",
    title: "Lead Developer",
    imageUrl: "/profiles/alex.jpg"
  }
];

const secondRowProfiles = [
  {
    name: "SK Kartik",
    title: "Marketing Director",
    imageUrl: "/profiles/sarah.jpg"
  },
  {
    name: "Sumitsemcool",
    title: "Technical Lead",
    imageUrl: ""
  },
  {
    name: "Nakul",
    title: "Designer",
    imageUrl: "/profiles/emily.jpg"
  }
];

const PartnersPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-20">
      <div className="container mx-auto space-y-24">
        {/* Partners Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {partners.map((partner, index) => (
            <DynamicLogoCard
              key={`partner-${index}`}
              {...partner}
            />
          ))}
        </div>

        {/* Team Profiles Section */}
        <div className="flex justify-center">
          <div className="w-full max-w-[1000px] space-y-8">
            {/* First Row */}
            <div className="grid grid-cols-3 gap-8">
              {profiles.map((profile, index) => (
                <div key={`profile-1-${index}`} className="flex justify-center">
                  <ProfileCard {...profile} />
                </div>
              ))}
            </div>
            
            {/* Second Row */}
            <div className="grid grid-cols-3 gap-8">
              {secondRowProfiles.map((profile, index) => (
                <div key={`profile-2-${index}`} className="flex justify-center">
                  <ProfileCard {...profile} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
