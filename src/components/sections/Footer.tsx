"use client";
import Link from "next/link";

export default function Footer() {
  return (
    
    <footer className=" relative bg-[#000000]  ">
      <div className="footer absolute "></div>
      <div className="mx-auto max-w-7xl text-white px-6 py-12 md:flex md:items-start md:justify-between lg:px-8">
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
                    className="hover:underline  text-sm text-slate-400 hover:text-whi"
                  >
                    Dev Docs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline  text-sm text-slate-400 hover:text-whi"
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
                    className="hover:underline  text-sm text-slate-400 hover:text-whi"
                  >
                    X (Twitter)
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline  text-sm text-slate-400 hover:text-whi"
                  >
                    Discord
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline  text-sm text-slate-400 hover:text-whi"
                  >
                    Luma
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline  text-sm text-slate-400 hover:text-whi"
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
                    className="hover:underline  text-sm text-slate-400 hover:text-whi"
                  >
                    Service Status
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline  text-sm text-slate-400 hover:text-whi"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline  text-sm text-slate-400 hover:text-whi"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:underline  text-sm text-slate-400 hover:text-whi"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
