"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative  bg-[#000000]  ">
      <div
        style={{
          zIndex: 40,
        }}
        className="  mx-auto max-w-7xl z-30 text-white px-6 py-12 md:flex md:items-start md:justify-between lg:px-8"
      >
        <div className="md:flex-shrink-0">
          <Link
            href="/"
            className="text-2xl  text-whi font-medium tracking-tight"
          >
            Numbers DAO
          </Link>
        </div>

        <div className="mt-10 md:mt-0">
          <div className="grid grid-cols-3 gap-8 sm:gap-16">
            <div>
              <h3 className="= text-sm font-medium text-whi">Company</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link
                    href="#"
                    className="hover:underline  text-sm text-slate-400 hover:text-white"
                  >
                    Dev Docs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline  text-sm text-slate-400 hover:text-white"
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
                    href="#"
                    className="hover:underline  text-sm text-slate-400 hover:text-white"
                  >
                    X (Twitter)
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline  text-sm text-slate-400 hover:text-white"
                  >
                    Discord
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline  text-sm text-slate-400 hover:text-white"
                  >
                    Luma
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline  text-sm text-slate-400 hover:text-white"
                  >
                    YouTube
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
      <div className="w-full z-50 md:px-[3rem] sm:px-[1.5rem] lg:px-[9.5rem] py-5 flex flex-col gap-5">
        <div className="w-full border border-zinc-800"></div>
        <div className="w-full text-white flex justify-between lg:flex-row md:flex-row sm:flex-col">
          <p className="text-sm text-zinc-600 hidden lg:block">© Copyright NumbersDAO 2025</p>
          <div className="flex gap-12 lg:w-fit w-full justify-between">
            <p>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </p>
            <p>
              <Link href="/terms-of-service">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
