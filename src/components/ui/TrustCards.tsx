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
    <div className="rounded-2xl w-72 p-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(36,0,36,0.8)_0%,_rgba(0,0,0,1)_80%)]" />
      <div className="relative z-10">
        <Image
          src={logo}
          alt={logo}
          height={500}
          width={500}
          className="w-20 mb-5"
        />
        <p className="mb-5 text-zinc-400 font-medium">{des}</p>
        <p className="font-medium text-base">{name}</p>
        <p className="text-xs text-zinc-500">{role}</p>
      </div>
    </div>
  );
};

export default TrustCards;
