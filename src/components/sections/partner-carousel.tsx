"use client";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const partners = [
  {
    name: "Divyanshu Urmaliya",
    imageId: "1aXxrxMD2qYVDcFlWJO0doqUrPua7PDyz",

    role: "Co-Founder",
    description:
      "Visionary leader with a strong background in entrepreneurship and innovation.",
  },
  {
    name: "Nikhil Sondhiya",
    imageId: "",
    role: "Co-Founder",
    description:
      "Entrepreneur with expertise in scaling startups and business strategy.",
  },
  {
    name: "Lakshya Borasi",
    imageId: "10mdEI_p7UVgu3dxTau36uIObaeMjWzV7",
    role: "Head of Operations",
    description:
      "Expert in optimizing workflows and ensuring seamless business operations.",
  },
  {
    name: "Akhileswar Munshi",
    imageId: "1h6J_8Pul02LkJHVizjXtvywq65slTcmD",
    role: "Head of Community",
    description:
      "Dedicated to building and engaging a thriving community around our vision.",
  },
  {
    name: "Atharv Shrivastava",
    imageId: "1rCCKk-HB4s-_OML0E8Mj52XRPHuJ42xA",
    role: "Community Manager",
    description:
      "Passionate about fostering relationships and growing an active user base.",
  },
  {
    name: "Satyam Mishra",
    imageId: "13_rehrOHy02gI7uXfayV_VasQcDPybvu",
    role: "Design Lead",
    description:
      "Creative thinker specializing in UI/UX design and brand identity.",
  },
  {
    name: "Akshat Maurya",
    imageId: "1zXjOTEdEq9wr5cc0wpwYEupwkNqeR_9N",
    role: "Lead Developer",
    description:
      "Full-stack developer with a passion for building scalable and efficient systems.",
  },
  {
    name: "Pranesh Joshi",
    role: "Developer",
    imageId: "1uCbHv2ha2SN3naqVzDGVct-Jkt-fOJUi",
    description:
      "Skilled in frontend and backend development, contributing to innovative solutions.",
  },
  {
    name: "Tushar Patidar",
    role: "SMM Lead",
    imageId: "1UvcDAeNmNwZepP8BnqiCkX7lB6fRyGjK",
    description:
      "Expert in social media marketing, crafting strategies to enhance brand presence.",
  },
  {
    name: "Adwait Kesari",
    role: "Technical Content Writer",
    description:
      "Writes in-depth technical content to educate and inform the audience.",
  },
  {
    name: "Tanushka Sahu",
    role: "Technical Content Writer",
    description:
      "Passionate about creating engaging technical articles and documentation.",
  },
];

export default function PartnersGrid() {
  return (
    <section className="min-h-screen bg-[#000000] flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full text-center mb-16">
        <h2 className="text-white font-semibold text-3xl md:text-4xl lg:text-5xl font-space-grotesk mb-2">
          Meet the Hands Behind
        </h2>
        <p className="text-[#4169E1] font-normal text-lg md:text-xl lg:text-2xl font-ibm-plex-mono">
          Our Performance
        </p>
      </div>

      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="relative group">
              <Card className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#1a1f47] to-[#0a0d24] border-0 h-full">
                <div className="aspect-[3/4] relative grayscale transition duration-300 group-hover:grayscale-0">
                  <Image
                    src={`https://drive.google.com/uc?export=view&id=${partner.imageId}`}
                    alt={partner.name}
                    fill
                    className="object-cover "
                  />
                  {/* Static info for mobile, visible by default */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f47]/90 to-transparent flex items-end p-6 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300">
                    <div className="text-white md:transform md:translate-y-4 md:group-hover:translate-y-0 md:transition-transform md:duration-300">
                      <h3 className="text-xl font-semibold mb-2">
                        {partner.name}
                      </h3>
                      <p className="text-sm text-blue-300 mb-3">
                        {partner.role}
                      </p>
                      <p className="text-sm text-gray-300">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
