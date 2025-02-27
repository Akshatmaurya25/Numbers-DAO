"use client";

import NumCard from "../ui/NumCard";

const NumbersSection = () => {
  return (
    <div className="bg-black w-full py-20 px-8 mt-20 sm:px-12 md:px-16 lg:px-20 xl:px-32 2xl:px-60">
      <h1 className="font-medium mb-6 text-lg md:text-xl lg:text-2xl">The Numbers</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <NumCard img={"1"} num={"$1B+"} labal={"TVL access colder chain"} />
        <NumCard img={"2"} num={"100+"} labal={"Leading integration partners"} />
        <NumCard img={"3"} num={"99.99%"} labal={"uptime SLAs"} />
        <NumCard img={"4"} num={"75+"} labal={"Teams building with Calders"} />
      </div>
    </div>
  );
};

export default NumbersSection;
