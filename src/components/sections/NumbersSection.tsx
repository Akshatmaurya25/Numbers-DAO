"use client";

import NumCard from "../ui/NumCard";

const NumbersSection = () => {
  return (
    <div className="bg-black w-full py-10 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-32 2xl:px-60">
      <h1 className="font-medium mb-6 text-lg md:text-xl lg:text-2xl">The Numbers</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        <NumCard num={"$1B+"} labal={"TVL access colder chain"} />
        <NumCard num={"100+"} labal={"Leading integration partners"} />
        <NumCard num={"99.99%"} labal={"uptime SLAs"} />
        <NumCard num={"75+"} labal={"Teams building with Calders"} />
      </div>
    </div>
  );
};

export default NumbersSection;
