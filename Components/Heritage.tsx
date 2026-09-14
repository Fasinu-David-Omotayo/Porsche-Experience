"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function Heritage() {
  return (
    <section
      id="heritage"
      className="relative overflow-hidden bg-[#08090a] text-white"
    >
      {/* =========================================================
          INTRO
      ========================================================= */}

      <div className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="mb-5 text-[8px] uppercase tracking-[0.4em] text-white/30">
              Heritage
            </p>

            <h2 className="max-w-[900px] text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.82] tracking-[-0.07em]">
              Decades of
              <br />
              <span className="text-white/30">evolution.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.12,
            }}
          >
            <p className="max-w-[320px] text-[10px] leading-[1.9] text-white/40 sm:text-[11px]">
              Since 1948, Porsche has evolved without losing sight of the
              principles that created the marque. Form follows function.
              Performance remains the purpose.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="text-[7px] uppercase tracking-[0.32em] text-white/25">
                1948
              </span>

              <span className="h-px w-10 bg-white/15" />

              <span className="text-[7px] uppercase tracking-[0.32em] text-white/25">
                Present
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          HERITAGE IMAGE
      ========================================================= */}

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative h-[60svh] min-h-[480px] overflow-hidden rounded-[18px] bg-[#111]"
        >
          <Image
            src="/images/optimized/918.webp"
            alt="Porsche heritage"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 90vw"
            quality={75}
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-8 p-6 sm:p-9 lg:p-12">
            <div>
              <p className="mb-3 text-[7px] uppercase tracking-[0.38em] text-white/45">
                The beginning
              </p>

              <h3 className="text-[clamp(2.5rem,5vw,5rem)] font-light leading-none tracking-[-0.065em]">
                Built to endure.
              </h3>
            </div>

            <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/65 sm:flex">
              <ArrowDownRight
                size={15}
                strokeWidth={1}
              />
            </span>
          </div>
        </motion.div>
      </div>

      {/* =========================================================
          TIMELINE
      ========================================================= */}

      <div className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44">
        <div className="border-t border-white/[0.08]">
          {/* 1948 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-6 border-b border-white/[0.08] py-8 md:grid-cols-[140px_1fr_auto] md:items-center md:gap-12"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
              1948
            </span>

            <div>
              <h3 className="text-xl font-light tracking-[-0.03em] sm:text-2xl">
                The first Porsche
              </h3>

              <p className="mt-2 max-w-[550px] text-[10px] leading-[1.8] text-white/35">
                The Porsche name enters automotive history with a philosophy
                centered on lightweight construction, intelligent engineering
                and driving pleasure.
              </p>
            </div>

            <span className="hidden text-[7px] uppercase tracking-[0.3em] text-white/20 md:block">
              Origin
            </span>
          </motion.div>

          {/* 1963 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="grid gap-6 border-b border-white/[0.08] py-8 md:grid-cols-[140px_1fr_auto] md:items-center md:gap-12"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
              1963
            </span>

            <div>
              <h3 className="text-xl font-light tracking-[-0.03em] sm:text-2xl">
                The 911
              </h3>

              <p className="mt-2 max-w-[550px] text-[10px] leading-[1.8] text-white/35">
                An icon is born. The 911 establishes a design language and
                engineering philosophy that continues to define Porsche.
              </p>
            </div>

            <span className="hidden text-[7px] uppercase tracking-[0.3em] text-white/20 md:block">
              Icon
            </span>
          </motion.div>

          {/* Today */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid gap-6 border-b border-white/[0.08] py-8 md:grid-cols-[140px_1fr_auto] md:items-center md:gap-12"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
              Today
            </span>

            <div>
              <h3 className="text-xl font-light tracking-[-0.03em] sm:text-2xl">
                Evolution continues
              </h3>

              <p className="mt-2 max-w-[550px] text-[10px] leading-[1.8] text-white/35">
                From combustion to electric performance, Porsche continues to
                push the boundaries while preserving the unmistakable DNA of
                the marque.
              </p>
            </div>

            <span className="hidden text-[7px] uppercase tracking-[0.3em] text-white/20 md:block">
              Future
            </span>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          CLOSING STATEMENT
      ========================================================= */}

      <div className="mx-auto max-w-[1400px] px-5 pb-28 sm:px-8 sm:pb-36 lg:px-12 lg:pb-44">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="border-t border-white/[0.08] pt-10 sm:pt-12"
        >
          <p className="mb-5 text-[7px] uppercase tracking-[0.4em] text-white/25">
            Porsche DNA
          </p>

          <h3 className="max-w-[1000px] text-[clamp(2.8rem,6vw,6.5rem)] font-light leading-[0.88] tracking-[-0.07em]">
            The future changes.
            <br />
            <span className="text-white/25">
              The spirit remains.
            </span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
}