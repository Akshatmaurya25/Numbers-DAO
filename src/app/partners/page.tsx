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
    href: "#",
  },
  {
    logo: "/wizz.png",
    backgroundLogo: "/wizz.png",
    text: "WizzHQ",
    hoverText: "Learn more about our opportunities",
    href: "#",
  },
  {
    logo: "/gsq.png",
    backgroundLogo: "/gsq.png",
    text: "GrowthSquare",
    hoverText: "Learn more about our opportunities",
    href: "#",
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
    <div className="min-h-screen pt-28 bg-black flex flex-col items-center justify-center py-20">
      <h2 className="text-white text-center py-16 font-semibold text-4xl md:text-4xl lg:text-[4rem] font-space-grotesk mb-2">
        Meet Our Partners
      </h2>

      <div className=" md:mx-16 space-y-24  ">
        {/* Partners Section */}
        <div className="flex gap-8 items-center justify-center ">
          {partners.map((partner, index) => (
            <DynamicLogoCard key={`partner-${index}`} {...partner} />
          ))}
        </div>

        {/* Team Profiles Section */}

        {/* Third Section */}
        <div className="grid md:grid-cols-4 grid-cols-2 gap-10 md:gap-28 place-items-center md:px-24">
          {BrandLogos.map((val, index) => (
            <Link href={val.link}>
              <div key={index} className="flex justify-center items-center">
                <Image
                  src={val.src}
                  width={val?.width || 150}
                  height={val?.height || 50}
                  draggable={false}
                  alt={val.name || "Brand Logo"}
                  className="grayscale  object-contain"
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
