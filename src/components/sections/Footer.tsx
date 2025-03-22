"use client";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative  bg-[#000000]  ">
      <div
        style={{
          zIndex: 40,
        }}
        className="  mx-auto max-w-7xl z-30 text-white px-6 py-12 md:flex md:items-start md:justify-between"
      >
        <div className="md:flex-shrink-0">
          <Link href="/">
            <Image
              src={"/logo-2.png"}
              alt="logo"
              height={1000}
              width={1000}
              className="w-64"
            ></Image>
          </Link>
        </div>

        <div className="mt-10 md:mt-0">
          <div className="grid grid-cols-3 gap-8 sm:gap-16">
            <div>
              <h3 className="= text-sm font-medium text-whi">Company</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link
                    href="https://bhopaldao.notion.site/"
                    className="hover:underline  text-sm text-slate-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dev Docs
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/Bhopal-DAO"
                    className="hover:underline  text-sm text-slate-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="  text-sm font-medium text-whi">Socials</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link
                    href="https://x.com/Bhopal_DAO"
                    className="hover:underline  text-sm text-slate-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    X (Twitter)
                  </Link>
                </li>
                <li>
                    <Link
                    href="https://github.com/Bhopal-DAO"
                    className="hover:underline  text-sm text-slate-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    GitHub
                    </Link>
                </li>
                <li>
                  <Link
                    href="https://lu.ma/bhopaldao"
                    className="hover:underline  text-sm text-slate-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Luma
                  </Link>
                </li>
                <li>
                  <Link
<<<<<<< HEAD
                    href="https://www.linkedin.com/company/bhopal-dao/?viewAsMember=true"
=======
                    href="https://www.linkedin.com/company/bhopal-dao"
>>>>>>> f91aaed91eab7111db87905dd8502a70a70d3f4a
                    className="hover:underline  text-sm text-slate-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
<<<<<<< HEAD
                    Linkedin
=======
                    LinkedIn
>>>>>>> f91aaed91eab7111db87905dd8502a70a70d3f4a
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="= text-sm font-medium text-whi">Support</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link
                    href="#"
                    className="hover:underline  text-sm text-slate-400 hover:text-white"

                  >
                    Service Status
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline  text-sm text-slate-400 hover:text-white"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline  text-sm text-slate-400 hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline  text-sm text-slate-400 hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full z-50 py-5 flex flex-col gap-5">
        <div className="w-full border border-zinc-800"></div>
        <div className="w-full md:px-[3rem] sm:px-[1.5rem] lg:px-[9.5rem] text-white flex justify-between lg:flex-row md:flex-row sm:flex-col">
          <div className="flex gap-2 items-center ml-5 lg:ml-0">
            <Link href={"https://t.me/BhopalDAO"} className="text-black bg-white rounded-sm p-1">
              <BiLogoTelegram />
            </Link>
            <Link
              href={"https://x.com/Bhopal_DAO"}
              className="text-black bg-white rounded-sm p-1 mr-3 "
            >
              <FaXTwitter />
            </Link>
            <p className="text-sm text-zinc-600 hidden lg:block">
              © Copyright NumbersDAO 2025
            </p>
          </div>
          <div className="flex gap-12 lg:w-fit w-auto pr-5 lg:pr-0 justify-between">
            <p>
              <Link href="#">Privacy Policy</Link>
            </p>
            <p>
              <Link href="#">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
