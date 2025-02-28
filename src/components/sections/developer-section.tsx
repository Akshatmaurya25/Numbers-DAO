import { ArrowRight, LinkIcon, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DeveloperSection() {
  return (
    <section className="relative  overflow-hidden px-4 py-24 bg-whi">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div className="gap-4 flex flex-col w-full  items-center lg:items-start  ">
            <div className="space-y-4">
              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl ">
                Built for
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                  Builders and Creators
                </span>
              </h2>
            </div>
            <Image
              alt="dev image"
              src="/dev.png"
              className="rounded-lg w-[19rem] h-[19rem] lg:w-[22rem] lg:h-[22rem] hover:rotate-3 hover:translate-x-2  duration-150 hover:scale-[1.05]"
              height={100}
              width={100}
            />
          </div>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-slate-600">
              Lead by example in helping builders maximize their potential,
              building the next global content economy w/- practical innovation
              and driving tangible, real-world impact across crypto
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-black hover:text-white text-slate-600  hover:shadow-lg hover:-translate-y-1">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E5F6F6]">
                  <LinkIcon className="h-3.5 w-3.5 text-[#00A2A2]" />
                </div>
                <span className="text-base ">
                  Cross-chain synchronous composability today
                </span>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-black hover:text-white text-slate-600 hover:shadow-lg hover:-translate-y-1">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F5F3FF]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#7C3AED]"
                  >
                    <path
                      d="M5.25 1.75H1.75V5.25H5.25V1.75Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.25 1.75H8.75V5.25H12.25V1.75Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.25 8.75H1.75V12.25H5.25V8.75Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.25 8.75H8.75V12.25H12.25V8.75Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-base ">
                  Scalable native applications with access to Ethereum liquidity
                </span>
              </div>

              <div className="flex text-slate-600 items-start gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:-translate-y-1">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF7ED]">
                  <Sparkles className="h-3.5 w-3.5 text-[#FB923C]  " />
                </div>
                <span className="text-base ">Reduced ecosystem dependency</span>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-slate-900 px-8 py-4 text-sm font-medium text-slate-900 transition-all duration-300 hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:scale-105"
              >
                Join Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
