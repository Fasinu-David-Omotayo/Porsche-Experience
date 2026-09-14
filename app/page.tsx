import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import Motorsport from "@/components/Motorsport";
import Heritage from "@/components/Heritage";
import Technology from "@/components/Technology";
import Experience from "@/components/Experience";


export const metadata: Metadata = {
  title: "Porsche Universe — Performance Without Boundaries",
  description:
    "Explore the Porsche Universe. Discover iconic sports cars, electric performance, luxury touring, SUVs, motorsport heritage and the technology shaping the future of Porsche.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090a] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}

      <Hero />

      {/* =========================================================
          COLLECTION
      ========================================================= */}

      <Collection />

      {/* =========================================================
          MOTORSPORT
      ========================================================= */}
<Motorsport />

      {/* =========================================================
          HERITAGE
      ========================================================= */}
<Heritage />
      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}

<Technology />
      {/* =========================================================
          EXPERIENCE
      ========================================================= */}

 <Experience />

{/* =========================================================
    FOOTER
========================================================= */}

<footer className="border-t border-white/[0.08] bg-[#050607] px-6 py-20 text-white sm:px-10 sm:py-24 lg:px-14 lg:py-28">
  <div className="mx-auto max-w-[1400px]">

    {/* TOP */}
    <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr_0.6fr] lg:gap-24">

      {/* BRAND */}
      <div>
        <p className="text-[12px] font-medium tracking-[0.5em]">
          PORSCHE
        </p>

        <p className="mt-6 max-w-[420px] text-[10px] leading-[1.9] text-white/30 sm:text-[11px]">
          The Porsche Universe — an exploration of performance,
          design, heritage and engineering. Discover the machines
          that continue to shape an unmistakable legacy.
        </p>

        <a
          href="#top"
          className="group mt-10 inline-flex items-center gap-3 text-[7px] uppercase tracking-[0.32em] text-white/30 transition-colors duration-300 hover:text-white"
        >
          Back to top

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-white/40 group-hover:bg-white group-hover:text-black">
            ↑
          </span>
        </a>
      </div>

      {/* EXPLORE */}
      <div>
        <p className="mb-6 text-[7px] uppercase tracking-[0.35em] text-white/20">
          Explore
        </p>

        <nav className="flex flex-col gap-4">
          <a
            href="#models"
            className="w-fit text-[9px] text-white/50 transition-colors duration-300 hover:text-white"
          >
            Models
          </a>

          <a
            href="#motorsport"
            className="w-fit text-[9px] text-white/50 transition-colors duration-300 hover:text-white"
          >
            Motorsport
          </a>

          <a
            href="#heritage"
            className="w-fit text-[9px] text-white/50 transition-colors duration-300 hover:text-white"
          >
            Heritage
          </a>

          <a
            href="#technology"
            className="w-fit text-[9px] text-white/50 transition-colors duration-300 hover:text-white"
          >
            Technology
          </a>

          <a
            href="#experience"
            className="w-fit text-[9px] text-white/50 transition-colors duration-300 hover:text-white"
          >
            Experience
          </a>
        </nav>
      </div>

      {/* UNIVERSE */}
      <div>
        <p className="mb-6 text-[7px] uppercase tracking-[0.35em] text-white/20">
          Universe
        </p>

        <nav className="flex flex-col gap-4">
          <a
            href="/models"
            className="w-fit text-[9px] text-white/50 transition-colors duration-300 hover:text-white"
          >
            All Models
          </a>

          <a
            href="/experience"
            className="w-fit text-[9px] text-white/50 transition-colors duration-300 hover:text-white"
          >
            Experience
          </a>

          <a
            href="/about"
            className="w-fit text-[9px] text-white/50 transition-colors duration-300 hover:text-white"
          >
            About Porsche
          </a>
        </nav>
      </div>
    </div>

    {/* LARGE BRAND STATEMENT */}
    <div className="mt-24 overflow-hidden border-t border-white/[0.08] pt-12 sm:mt-32 sm:pt-16">
      <p className="text-[clamp(4rem,12vw,12rem)] font-light leading-[0.75] tracking-[-0.09em] text-white/[0.06]">
        PORSCHE
      </p>
    </div>

    {/* BOTTOM BAR */}
    <div className="mt-12 flex flex-col gap-5 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">

      <p className="text-[7px] uppercase tracking-[0.3em] text-white/20">
        © {new Date().getFullYear()} Porsche Universe
      </p>

      <div className="flex items-center gap-5">
        <span className="text-[7px] uppercase tracking-[0.3em] text-white/20">
          Stuttgart
        </span>

        <span className="h-px w-5 bg-white/10" />

        <span className="text-[7px] uppercase tracking-[0.3em] text-white/20">
          Germany
        </span>
      </div>

    </div>
  </div>
</footer>
    </main>
  );
}