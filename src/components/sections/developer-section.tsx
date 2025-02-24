import { ArrowRight, LinkIcon, Sparkles } from "lucide-react"
import Link from "next/link"

export default function DeveloperSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl transition-all duration-300 hover:scale-105">
              Built for
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                Developers
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-slate-600">
              A new paradigm in cross-chain applications and scaling enabled by real-time proofs and instant settlement.
              Get seamless interoperability with the Ethereum ecosystem and provide an application-first UX.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E5F6F6]">
                  <LinkIcon className="h-3.5 w-3.5 text-[#00A2A2]" />
                </div>
                <span className="text-base text-slate-600">Cross-chain synchronous composability today</span>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1">
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
                <span className="text-base text-slate-600">
                  Scalable native applications with access to Ethereum liquidity
                </span>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF7ED]">
                  <Sparkles className="h-3.5 w-3.5 text-[#FB923C]" />
                </div>
                <span className="text-base text-slate-600">Reduced ecosystem dependency</span>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-8 py-4 text-sm font-medium text-slate-900 transition-all duration-300 hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:scale-105"
              >
                Work with us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

