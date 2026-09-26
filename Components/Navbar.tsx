"use client";

import Image from "next/image";
import { Menu } from "lucide-react";

type NavbarProps = {
  dark?: boolean;
};

export default function Navbar({
  dark = false,
}: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-[80] px-5 pt-5 sm:px-7 lg:px-10">
      <div className="mx-auto flex h-12 max-w-[1500px] items-center justify-between">
        {/* BRAND */}

        <a
          href="/"
          aria-label="Porsche Universe home"
          className="group flex items-center"
        >
          <Image
            src="/images/porsche-crest.svg"
            alt="Porsche"
            width={46}
            height={46}
            className={`h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-[1.04] sm:h-11 sm:w-11 ${
              dark ? "brightness-0" : ""
            }`}
          />

          <span
            className={`ml-3 hidden text-[9px] font-medium tracking-[0.42em] sm:block ${
              dark ? "text-black/75" : "text-white/85"
            }`}
          >
            PORSCHE
          </span>
        </a>

        {/* CENTER NAVIGATION */}

        <nav
          className={`absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex ${
            dark
              ? "text-black/55"
              : "text-white/55"
          }`}
        >
          <a
            href="/#models"
            className="px-4 py-2 text-[10px] uppercase tracking-[0.17em] transition-colors hover:text-current"
          >
            Models
          </a>

          <a
            href="/#heritage"
            className="px-4 py-2 text-[10px] uppercase tracking-[0.17em] transition-colors hover:text-current"
          >
            Heritage
          </a>

          <a
            href="/#technology"
            className="px-4 py-2 text-[10px] uppercase tracking-[0.17em] transition-colors hover:text-current"
          >
            Technology
          </a>

          <a
            href="/#experience"
            className="px-4 py-2 text-[10px] uppercase tracking-[0.17em] transition-colors hover:text-current"
          >
            Experience
          </a>
        </nav>

        {/* MENU BUTTON */}

        <button
          type="button"
          aria-label="Open navigation menu"
          className={`flex h-10 w-10 items-center justify-center border transition-all duration-300 ${
            dark
              ? "border-black/15 bg-black/[0.03] text-black/70 hover:border-black/30 hover:bg-black/[0.06]"
              : "border-white/20 bg-black/10 text-white/80 backdrop-blur-md hover:border-white/40 hover:bg-white/10 hover:text-white"
          }`}
        >
          <Menu size={16} strokeWidth={1.25} />
        </button>
      </div>
    </header>
  );
}