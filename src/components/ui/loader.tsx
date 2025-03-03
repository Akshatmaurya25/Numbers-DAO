import { LoaderCircle } from "lucide-react";
import React from "react";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <LoaderCircle className="w-8 h-8 animate-spin text-white" />
    </div>
  );
};
