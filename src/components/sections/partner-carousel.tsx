"use client";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Rlogo from "@/assests/icon2.webp";
import React from "react";

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
    imageLink: "/team/nikhil.jpg",
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
    name: "Shivam Singh",
    imageLink: "/team/shivam.jpg",
    imageId: "10mdEI_p7UVgu3dxTau36uIObaeMjWzV7",
    role: "Lead Designer",
    description:
      "Creative thinker specializing in UI/UX design and brand identity.",
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
    imageLink: "/team/adwait.jpg",
    description:
      "Writes in-depth technical content to educate and inform the audience.",
  },
  {
    name: "Tanushka Sahu",
    role: "Technical Content Writer",
    imageLink: "/team/arc/tanushka.jpg",
    description:
      "Passionate about creating engaging technical articles and documentation.",
  },
];

export default function PartnersGrid() {
  const [shineTransform, setShineTransform] = React.useState("");

  return (
    <section className="min-h-screen bg-[#000000] flex flex-col items-center justify-center px-4 py-20">
      <div className="mb-12 hidden md:block h-[70vh] pt-16 mx-auto w-full max-w-5xl px-6 md:max-w-7xl">
        <div
          className="flex w-full items-center justify-center bg-black relative"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const x2 = e.clientX - rect.right;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const isLeft = x < centerX - rect.width / 4;
            const newShineCode = isLeft
              ? "translateX(calc(var(--pointer-x) - 180px))  translateY(calc(var(--pointer-y) - 150px))"
              : " translateX(calc(var(--pointer-x2) + 150px)) translateY(calc(var(--pointer-y) - 150px))";
            setShineTransform(newShineCode);

            const shine = e.currentTarget.querySelector(
              ".shine-effect"
            ) as HTMLElement;
            if (shine) {
              shine.style.setProperty("--pointer-x", `${x}px`);
              shine.style.setProperty("--pointer-x2", `${x2}px`);
              shine.style.setProperty("--pointer-y", `${y}px`);
            }

            const bg = e.currentTarget.querySelector(".dots-bg") as HTMLElement;
            if (bg) {
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const shiftX = (centerX - x) * 0.12;
              const shiftY = (centerY - y) * 0.12;
              bg.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
            }
          }}
        >
          <div className="pointer-events-none h-[450px] w-full">
            <div
              className="dots-bg absolute h-full w-full transition-transform duration-300 ease-out"
              style={{
                backgroundSize: "40px 40px",
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgb(103, 103, 103) 1px, transparent 0px)",
                backgroundPosition: "center center",
              }}
            ></div>

            <div className="relative z-10 h-full w-full flex items-center justify-center">
              <div
                className="group relative overflow-hidden"
                style={{ filter: "grayscale(1)" }}
              >
                <div className="relative">
                  <Image
                    alt="Resend"
                    width={270}
                    height={270}
                    className="mx-auto bg-black transition-transform duration-300 ease-out hover:scale-105"
                    src={Rlogo}
                    style={{ color: "transparent" }}
                    quality={75}
                  />

                  <div
                    className="shine-effect pointer-events-none absolute inset-0 opacity-100 transition-transform duration-300 ease-out will-change-transform group-hover:opacity-100"
                    style={{
                      transform: shineTransform,
                      mixBlendMode: "soft-light",
                      backgroundImage:
                        "radial-gradient(100px, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[80px] h-screen w-full"></div>
        </div>
        {/* Hero text section */}
        {/* <h1 className="font-display mt-28 effect-font-styling text-[4rem] md:text-7xl leading-[4.35rem] md:leading-[5rem] tracking-tight effect-font-gradient effect-font-hero relative -mt-16 text-center text-white">
          Building the modern <br />
          email sending platform
        </h1> */}
        {/* <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal text-balance relative text-center text-white">
          The web has come a long way in the last ten years, but why is email
          stuck in the past?
          <br />
          It doesn&apos;t have to be that way. We want to change that. We want
          to reimagine email.
        </p> */}
      </div>
      <div className="max-w-7xl mx-auto mt-24 w-full text-center mb-16">
        <h2 className="text-white pb-6 font-semibold text-4xl md:text-4xl lg:text-[4rem] font-space-grotesk mb-2">
          Meet the Hands Behind
        </h2>
      </div>

      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[15px]">
          {partners.map((partner, index) => (
            <div key={index} className="relative group">
              <Card className="relative max-w-[22rem] overflow-hidden rounded-2xl bg-gradient-to-b from-[#000000] to-[#0a0d24] border-0 h-full">
                <div className="aspect-[3/4] relative grayscale transition duration-300 group-hover:grayscale-0">
                  <Image
                    src={
                      partner.imageLink
                        ? partner.imageLink
                        : `https://drive.google.com/uc?export=view&id=${partner.imageId}`
                    }
                    alt={partner.name}
                    fill
                    className="object-cover "
                  />
                  {/* Static info for mobile, visible by default */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 to-transparent flex items-end p-6 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300">
                    <div className="text-white md:transform md:translate-y-4 md:group-hover:translate-y-0 md:transition-transform md:duration-300 flex flex-col">
                      <h3 className="text- font-semibold">{partner.name}</h3>
                      <p className="text-sm text-blue-300 mb-2">
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
