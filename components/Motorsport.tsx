"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Motorsport() {
  return (
    <section
      id="motorsport"
      className="relative overflow-hidden bg-[#070809] text-white"
    >
      {/* =========================================================
          MOTORSPORT IMAGE
      ========================================================= */}

      <div className="relative min-h-[80svh] overflow-hidden">
        <Image
          src="/images/optimized/1.webp"
          alt="Porsche motorsport"
          fill
          loading="lazy"
          sizes="100vw"
          quality={75}
          className="object-cover object-center"
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.42)_45%,rgba(0,0,0,0.18)_100%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.05)_42%,rgba(0,0,0,0.9)_100%)]" />

        {/* =====================================================
            TOP INFORMATION
        ===================================================== */}

        <div className="absolute inset-x-0 top-0 z-10">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-7 sm:px-8 lg:px-12">
            <p className="text-[8px] uppercase tracking-[0.38em] text-white/45">
              Motorsport
            </p>

            <p className="text-[8px] uppercase tracking-[0.3em] text-white/30">
              Porsche Racing
            </p>
          </div>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="relative z-10 flex min-h-[80svh] items-end">
          <div className="mx-auto w-full max-w-[1400px] px-5 pb-8 sm:px-8 sm:pb-10 lg:px-12 lg:pb-14">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-[1000px]"
            >
              <p className="mb-5 text-[8px] uppercase tracking-[0.4em] text-white/50 sm:mb-6">
                Born on the racetrack
              </p>

              <h2 className="font-light leading-[0.84] tracking-[-0.075em] text-white text-[17vw] sm:text-[13vw] md:text-[10vw] lg:text-[8vw]">
                MOTORSPORT
              </h2>

              <p className="mt-6 max-w-[430px] text-[10px] leading-[1.8] text-white/55 sm:text-[11px]">
                Where performance becomes instinct. Racing has always been
                part of the Porsche DNA — pushing engineering, precision and
                performance beyond every limit.
              </p>
            </motion.div>

            {/* =================================================
                BOTTOM INFORMATION
            ================================================= */}

            <div className="mt-10 flex items-center justify-between border-t border-white/15 pt-4 sm:mt-14 sm:pt-5">
              <div className="flex items-center gap-4 sm:gap-5">
                <span className="text-[7px] uppercase tracking-[0.28em] text-white/35 sm:text-[8px]">
                  Stuttgart
                </span>

                <span className="h-px w-7 bg-white/20 sm:w-10" />

                <span className="text-[7px] uppercase tracking-[0.28em] text-white/35 sm:text-[8px]">
                  Since 1948
                </span>
              </div>

              <a
                href="#heritage"
                className="group flex items-center gap-2 text-[7px] uppercase tracking-[0.28em] text-white/45 transition-colors duration-300 hover:text-white sm:text-[8px]"
              >
                Heritage

                <ArrowDown
                  size={11}
                  strokeWidth={1}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          MOTORSPORT STATEMENT
      ========================================================= */}

      <div className="px-5 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-24">
            {/* Main statement */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="mb-6 text-[8px] uppercase tracking-[0.4em] text-white/25">
                The racing philosophy
              </p>

              <h3 className="max-w-[1050px] text-[clamp(3rem,6vw,7rem)] font-light leading-[0.87] tracking-[-0.075em]">
                Competition doesn't just test a Porsche.
                <span className="text-white/25">
                  {" "}
                  It defines what comes next.
                </span>
              </h3>
            </motion.div>

            {/* Description */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="lg:pt-14"
            >
              <p className="max-w-[290px] text-[10px] leading-[1.9] text-white/40 sm:text-[11px]">
                Racing is where Porsche pushes ideas beyond their limits.
                Technology proven on the circuit becomes the foundation for
                the cars driven on the road.
              </p>

              <a
                href="/motorsport"
                className="group mt-8 inline-flex items-center gap-3 text-[8px] uppercase tracking-[0.3em] text-white/55 transition-colors duration-300 hover:text-white"
              >
                Explore Motorsport

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-white/40 group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight size={12} strokeWidth={1.2} />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM LINE
      ========================================================= */}

      <div className="border-t border-white/[0.08] px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <span className="text-[7px] uppercase tracking-[0.3em] text-white/20">
            Porsche Motorsport
          </span>

          <span className="text-[7px] uppercase tracking-[0.3em] text-white/20">
            1948 — Present
          </span>
        </div>
      </div>
    </section>
  );
}