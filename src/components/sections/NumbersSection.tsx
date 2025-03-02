"use client";

import NumCard from "../ui/NumCard";

const NumbersSection = () => {
  return (
    <div className="bg-black h-screen min-h-fit w-full pb-6 px-8  sm:px-12 md:px-16 lg:px-20 xl:px-32 2xl:px-60">

      <h2 className="text-2xl pb-6 text-center md:text-7xl lg:text-[50px] leading-tight lg:leading-[58px] font-semibold bg-gradient-to-r from-white to-white/90 text-transparent bg-clip-text">
        The Numbers Priciples
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 ">
        <NumCard
          img={"1"}
          num={"20K+"}
          labal={"On Chain Builders and Creators"}
        />
        <NumCard img={"2"} num={"10+"} labal={"Connected Ecosystem Partners"} />
        <NumCard img={"3"} num={"50+"} labal={"Onchain Events & Initiatives"} />
        <NumCard img={"4"} num={"100K+"} labal={"Monthly Impressions"} />
      </div>
    </div>
  );
};

export default NumbersSection;
