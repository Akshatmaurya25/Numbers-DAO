import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex  flex-col items-center justify-center bg-black text-white">
      <Link href={"/"} className="relative bottom-[130px]">
        <Image height={300} width={300} src={"/logo-2.png"} alt="Logo" />
      </Link>
      <div className="flex flex-col justify-center  items-center">
        <h2 className="text-[70px] text-bold ">404</h2>
        <h3>Not found</h3>
      </div>
    </div>
  );
};

export default NotFound;
