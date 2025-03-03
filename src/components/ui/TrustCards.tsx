import React from "react";
import Image from "next/image";

const TrustCards = ({
  logo,
  des,
  name,
  role,
}: {
  logo: string;
  des: string;
  name: string;
  role: string;
}) => {
  return (
    <div
      // style={{ border: "1px solid #e5e5e561" }}
      className="rounded-2xl w-72 p-6 h-full bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(36,0,36,0.8)_0%,_rgba(0,0,0,1)_80%)]" />
      <div className="relative flex flex-col h-full z-10">
        <p className="mb-5 text-zinc-400 font-medium">{des}</p>
        <div className="flex gap-2 mt-auto">
          <Image
            src={logo}
            alt={logo}
            height={500}
            width={500}
            className="w-12 aspect-square rounded-full object-cover mb-5"
          />
          <div className="">
            <p className="font-medium text-zinc-200 text-base">{name}</p>
            <p className="text-xs text-zinc-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustCards;
