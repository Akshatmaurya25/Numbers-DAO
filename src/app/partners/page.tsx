import React from "react";
import DynamicLogoCard from "./_components/dynamic-logo-card";

import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    logo: "/Aarambh-labs.png",
    backgroundLogo: "/Aarambh.png",
    text: "Aarambh Labs",
    hoverText: "Learn more about our partnership",
    href: "https://x.com/AarambhLabs",
  },
  {
    logo: "/wizz.png",
    backgroundLogo: "/wizz.png",
    text: "WizzHQ",
    hoverText: "Learn more about our opportunities",
    href: "https://x.com/WizzHQ",
  },
  {
    logo: "/gsq.png",
    backgroundLogo: "/gsq.png",
    text: "GrowthSquare",
    hoverText: "Learn more about our opportunities",
    href: "https://x.com/thegrowthsquare",
  },
  // Add more partners here as needed
];

const profiles = [
  // First row profiles
  {
    name: "Akshat Maurya",
    title: "Founder & CEO",
    imageUrl: "/profiles/john.jpg",
  },
  {
    name: "Pranesh Joshi",
    title: "Head of Partnerships",
    imageUrl: "/profiles/jane.jpg",
  },
  {
    name: "Yatharth Urmaliya",
    title: "Lead Developer",
    imageUrl: "/profiles/alex.jpg",
  },
];

const secondRowProfiles = [
  {
    name: "SK Kartik",
    title: "Marketing Director",
    imageUrl: "/profiles/sarah.jpg",
  },
  {
    name: "Sumitsemcool",
    title: "Technical Lead",
    imageUrl: "",
  },
  {
    name: "Nakul",
    title: "Designer",
    imageUrl: "/profiles/emily.jpg",
  },
];

const BrandLogos: {
  name?: string;
  src: string;
  height?: number;
  width?: number;
  link: string;
}[] = [
  {
    link: "https://devcon.org/en/",
    src: "https://drive.google.com/uc?export=view&id=1mnHcsMrzx_0yFfIIVEylrRyEWCXh64AK",
  },
  {
    link: "https://twitter.com/Central_DAO",
    name: "Central Dao",
    src: "https://drive.google.com/uc?export=view&id=1pS50HASlVH702ImgZppGMl-d9bBTlvqa",
  },
  {
    link: "https://securedapp.io/",
    src: "partners/secure.svg",
  },
  {
    link: "https://www.vyugmetaverse.com/",
    src: "/partners/vyug.png",
  },

  {
    link: "https://www.thecheesecake.xyz/",
    src: "partners/cheescake.svg",
    height: 100,
    width: 100,
  },
  {
    link: "",
    src: "partners/easydapp.svg",
  },
  {
    link: "https://zo.xyz/",
    src: "partners/zo.svg",
    // src: "partners/zo.svg",
    height: 80,
    width: 80,
  },
  {
    link: "",
    src: "https://drive.google.com/uc?export=view&id=1tERDPfQhjzuWdtRACQC4N3IWyn2yTCbY",
  },
  {
    link: "https://www.hackquest.io/",
    src: "https://drive.google.com/uc?export=view&id=1TpB_6lGfvDCPCSv4xalJ5GhMhVZTKDFC",
  },
  {
    link: "https://devdock.ai/",
    src: "https://drive.google.com/uc?export=view&id=1-tZLUT4Ao4E6EBbcVP40VXBKQVCgJZS5",
  },
  {
    link: "https://cubane.space/",
    src: "https://drive.google.com/uc?export=view&id=1rppTuqe3X_E6aTSIYeQrOp7YOFQHElYU",
  },
  {
    link: "https://orbitxpay.com/",
    src: "/partners/OrbitX.png",
  },
];

const PartnersPage = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-28 bg-black flex flex-col items-center justify-center py-10 sm:py-20">
      <h2 className="text-white text-center py-8 sm:py-16 font-semibold text-3xl sm:text-4xl lg:text-[4rem] font-space-grotesk mb-2">
        Meet Our Partners
      </h2>

      <div className="w-full px-4 sm:px-8 md:px-16 space-y-12 sm:space-y-24">
        {/* Partners Section */}
<<<<<<< HEAD
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center">
=======
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center ">
>>>>>>> 8026fadbe38cf2f4ce14b567eb629ed7539bbfda
          {partners.map((partner, index) => (
            <DynamicLogoCard key={`partner-${index}`} {...partner} />
          ))}
        </div>

<<<<<<< HEAD
        {/* Brand Logos Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-10 md:gap-16 place-items-center px-4 sm:px-8 md:px-16">
=======
        {/* Team Profiles Section */}

        {/* Third Section */}
        <div className="grid md:grid-cols-4 grid-cols-2 gap-20 md:gap-28 place-items-center md:px-24">
>>>>>>> 8026fadbe38cf2f4ce14b567eb629ed7539bbfda
          {BrandLogos.map((val, index) => (
            <Link key={index} href={val.link} className="w-full flex justify-center items-center hover:opacity-80 transition-opacity">
              <div className="w-full flex justify-center items-center p-2">
                <Image
                  src={val.src} 
                  width={val?.width || 150}
                  height={val?.height || 50}
                  draggable={false}
                  alt={val.name || "Brand Logo"}
                  className="grayscale object-contain w-auto h-auto max-h-[50px] sm:max-h-[60px]"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
