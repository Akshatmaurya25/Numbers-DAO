import React from "react";
import "./Waitlist.css";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Waitlist = () => {
  return (
    <div className="wailtist-container  text-white h-screen items-center justify-center flex ">
      <div>
        <Image width={250} height={50} alt="logo" src={"/logo-2.png"} className="mx-auto relative bottom-[35px]" />
        <div className="bg-[#1b1a1ae0]  p-10 min-w-[550px] rounded-[15px] flex flex-col items-center max-w-5xl ">
          {/* <BadgeCheck size={65} className="text-green-500 mb-2" /> */}
          <Image width={250} height={50} alt="logo" src={"https://media.tenor.com/fWD5SZjcqHwAAAAi/cooking-nasogg.gif"} className="" />
          <h3 className="text-xl mb-1 max-w-[470px] text-center  text-wrap">
            {" "}
            Thanks for registering! You are already in waitlist. We can't wait
            to show you what's cooking.
          </h3>
          <Link href={"/community"}>
       <button className="bg-white cursor-pointer rounded-md text-black px-5 py-2 mt-3">
        Join Now
       </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
