import React from "react";
import "./Waitlist.css";
import { ArrowRight, BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Waitlist = () => {
  return (
    <div className="wailtist-container  text-white h-screen items-center justify-center flex ">
      <div className="">
        <Link href={"/"} className="w-fit relative bottom-[35px]">
          <Image
            width={250}
            height={50}
            alt="logo"
            src={"/logo-2.png"}
            className="text-center mx-auto"
          />
        </Link>
        <div className="glass-card mx-2 lg:mx-0 p-10 lg:min-w-[550px] min-w-[350px] rounded-[15px] flex flex-col items-center max-w-5xl ">
          {/* <BadgeCheck size={65} className="text-green-500 mb-2" /> */}
          <Image
            width={250}
            height={50}
            alt="logo"
            src={"https://media.tenor.com/fWD5SZjcqHwAAAAi/cooking-nasogg.gif"}
            className="lg:w-[230px] w-[180px]"
          />
          <h3 className="lg:text-[40px] text-[30px] my-1 mt-4 font-bold  text-center  ">
            {" "}
            Thanks for registering!
          </h3>
          <p className="lg:max-w-[470px] max-w-[330px] text-center  text-wrap">
            You are already in waitlist. We are so excited to show what we've been
            cooking. Stay tuned!
          </p>
          <Link href={"/community"}>
            <button className="text-white flex gap-2 items-center justify-center duration-200 transition-all hover:bg-white hover:text-black cursor-pointer rounded-md border lg:px-5 px-3 py-1.5 text-[14px] lg:text-[16px] lg:py-2 mt-3">
              Know More <ArrowRight size={15} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
