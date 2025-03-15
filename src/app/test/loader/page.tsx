import LogoLoader from "@/components/ui/LogoLoader";
import React from "react";

const page = () => {
  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <LogoLoader black={false} />
    </div>
  );
};

export default page;
