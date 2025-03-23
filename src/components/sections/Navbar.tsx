"use client";

import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/util";
import AuthButton from "../navbar/NavbarButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const { ready, authenticated, login, user, logout } = usePrivy();

  return (
    <header className="fixed top-0 z-50 w-full">
      <div
        style={{
          backdropFilter: "blur(15px)",
          backgroundColor: "#fffc",
          borderBottom: "1px solid #0000001f",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          position: "sticky",
          top: 0,
        }}
        className={cn(
          "flex h-16 max-w-full items-center justify-between transition-all duration-300",
          scrolled ? "h-14 bg-[#ddd] px-3 lg:px-6 shadow-sm" : "px-6"
        )}
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/logo.png"}
            alt="logo"
            height={1000}
            width={1000}
            className="w-52 lg:w-64"
          ></Image>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-slate-900 transition-colors hover:text-slate-900/70 hover:underline"
          >
            Home
          </Link>
          <Link
            href="/team"
            className="text-sm font-medium text-slate-900 transition-colors hover:text-slate-900/70 hover:underline"
          >
            Team
          </Link>
          <Link
            href="/community"
            className="text-sm font-medium text-slate-900 transition-colors hover:text-slate-900/70 hover:underline"
          >
            Community
          </Link>
          <Link
            href="/partners"
            className="text-sm font-medium text-slate-900 transition-colors hover:text-slate-900/70 hover:underline"
          >
            Partners
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {
           <div className="md:flex hidden">

            <AuthButton
            authenticated={authenticated}
            login={login}
            logout={logout}
            user={user}
            />
            </div>
          }

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            className="md:hidden flex items-center"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-white fixed top-12 left-0 right-0  shadow-lg z-40 overflow-hidden transition-all duration-300"
          style={{
            maxHeight: isMenuOpen ? "100vh" : "0",
            opacity: isMenuOpen ? 1 : 0,
          }}
        >
          <nav className="flex flex-col p-4">
            <Link
              href="/"
              className="py-3 px-2 text-base font-medium text-slate-900 hover:bg-slate-100 rounded"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/team"
              className="py-3 px-2 text-base font-medium text-slate-900 hover:bg-slate-100 rounded"
              onClick={closeMenu}
            >
              Team
            </Link>
            <Link
              href="/community"
              className="py-3 px-2 text-base font-medium text-slate-900 hover:bg-slate-100 rounded"
              onClick={closeMenu}
            >
              Community
            </Link>
            <Link
              href="/partners"
              className="py-3 px-2 text-base font-medium text-slate-900 hover:bg-slate-100 rounded"
              onClick={closeMenu}
            >
              Partners
            </Link>
            <div className="flex items-center gap-4 lg:mt-0 mt-2">
              <AuthButton
                authenticated={authenticated}
                login={login}
                logout={logout}
                user={user}
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
