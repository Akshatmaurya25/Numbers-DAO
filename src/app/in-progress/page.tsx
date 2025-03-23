"use client";
import { Button } from "@/components/ui/button"; // Ensure this exists
import { Loader2 } from "lucide-react"; // Ensure correct import
import { motion } from "framer-motion"; // Ensure correct import
import Image from "next/image";

export default function page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative max-w-lg rounded-2xl  p-8 shadow-lg backdrop-blur-md"
      >
        <div className="flex flex-col bg-black/90 items-center text-center">
          <Image alt="logo" height={90} width={90} src={"/favicon.png"} className="mb-8"/> 
          <h1 className="text-2xl font-bold text-white ">
            🚧 Page Under Development 🚧
          </h1>
          <p className="mt-2 text-gray-300">
            We are working hard to bring this page to life. Stay tuned!
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
