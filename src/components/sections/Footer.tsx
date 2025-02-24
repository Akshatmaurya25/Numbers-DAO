"use client"
import Link from "next/link"


export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-start md:justify-between lg:px-8">
        <div className="md:flex-shrink-0">
          <Link href="/" className="text-2xl font-medium tracking-tight">
            Numbers DAO
          </Link>
        </div>

        <div className="mt-10 md:mt-0">
          <div className="grid grid-cols-3 gap-8 sm:gap-16">
            <div>
              <h3 className="text-sm font-normal text-slate-500">Company</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link href="#" className="text-sm text-slate-900 hover:text-slate-600">
                    Dev Docs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-900 hover:text-slate-600">
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-normal text-slate-500">Socials</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link href="#" className="text-sm text-slate-900 hover:text-slate-600">
                    X (Twitter)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-900 hover:text-slate-600">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-900 hover:text-slate-600">
                    Luma
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-900 hover:text-slate-600">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-normal text-slate-500">Support</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <Link href="#" className="text-sm text-slate-900 hover:text-slate-600">
                    Service Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-900 hover:text-slate-600">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-900 hover:text-slate-600">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-slate-900 hover:text-slate-600">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

