import Image from "next/image";
import React from "react";
type BrandCardProps = {
  bgLogo: string;
  Logo: string;
};
const BrandCard = ({ bgLogo, Logo }: BrandCardProps) => {
  return (
    <div className="relative bg-black flex items-center justify-center h-[400px] w-[400px] overflow-hidden">
      <div className="absolute z-0 opacity-30 left-[-100px]">
        <Image alt="bgLogo " className="grayscale-[10]" src={bgLogo} height={400} width={400} />
      </div>
      <div className="z-30">
        <Image alt="logo" src={Logo} height={400} width={400} />
      </div>
    </div>
  );
};

export default BrandCard;
