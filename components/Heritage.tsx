"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const timeline = [
  {
    year: "1948",
    title: "The first Porsche",
    description:
      "The Porsche name enters automotive history with a philosophy centered on lightweight construction, intelligent engineering and driving pleasure.",
    label: "Origin",
  },
  {
    year: "1963",
    title: "The 911",
    description:
      "An icon is born. The 911 establishes a design language and engineering philosophy that continues to define Porsche.",
    label: "Icon",
  },
  {
    year: "Today",
    title: "Evolution continues",
    description:
      "From combustion to electric performance, Porsche continues to push the boundaries while preserving the unmistakable DNA of the marque.",
    label: "Future",
  },
];

function HeritageImage() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.06, 1.02, 1.06],
  );

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative h-[64svh] min-h-[500px] overflow-hidden bg-[#111]"
    >
      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
        }}
        className="absolute -inset-y-[5%] inset-x-0"
      >
        <Image
          src="/images/optimized/918.webp"
          alt="Porsche heritage"
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 90vw"
          quality={78}
          className="object-cover object-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
        />
      </motion.div>

      {/* Cinematic image treatment */}
      <div className="absolute inset-0 bg-black/15 transition-colors duration-1000 group-hover:bg-black/5" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/10" />

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9 lg:p-12">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="mb-3 text-[7px] uppercase tracking-[0.4em] text-white/45">
              The beginning
            </p>

            <h3 className="text-[clamp(2.7rem,5.5vw,5.5rem)] font-light leading-[0.88] tracking-[-0.07em] text-white">
              Built to endure.
            </h3>
          </div>

          <span className="hidden h-12 w-12 shrink-0 items-center justify-center border border-white/25 text-white/70 transition-all duration-500 group-hover:border-white/60 group-hover:bg-white group-hover:text-black sm:flex">
            <ArrowDownRight
              size={16}
              strokeWidth={1}
            />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function TimelineItem({
  year,
  title,
  description,
  label,
  index,
}: {
  year: string;
  title: string;
  description: string;
  label: string;
  index: number;
}) {
  return (
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
        margin: "-60px",
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group grid gap-7 border-b border-white/[0.08] py-9 md:grid-cols-[150px_minmax(0,1fr)_100px] md:items-center md:gap-12 lg:py-11"
    >
      <div className="flex items-center gap-5">
        <span className="text-[9px] uppercase tracking-[0.32em] text-white/30 transition-colors duration-500 group-hover:text-white/65">
          {year}
        </span>

        <span className="h-px w-7 bg-white/10 transition-all duration-500 group-hover:w-10 group-hover:bg-white/30 md:hidden" />
      </div>

      <div>
        <h3 className="text-[clamp(1.25rem,2vw,1.65rem)] font-light tracking-[-0.035em] text-white">
          {title}
        </h3>

        <p className="mt-3 max-w-[600px] text-[10px] leading-[1.85] text-white/35 sm:text-[11px]">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between md:justify-end">
        <span className="text-[7px] uppercase tracking-[0.32em] text-white/20 transition-colors duration-500 group-hover:text-white/50">
          {label}
        </span>

        <ArrowUpRight
          size={13}
          strokeWidth={1}
          className="text-white/15 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/55"
        />
      </div>
    </motion.div>
  );
}

export default function Heritage() {
  return (
    <section
      id="heritage"
      className="relative overflow-hidden bg-[#08090a] text-white"
    >
      {/* =========================================================
          INTRO
      ========================================================= */}

      <div className="mx-auto max-w-[1440px] px-5 py-32 sm:px-8 sm:py-40 lg:px-12 lg:py-48">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_350px] lg:items-end lg:gap-24">
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
              margin: "-100px",
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="mb-5 text-[8px] uppercase tracking-[0.4em] text-white/30">
              Heritage
            </p>

            <h2 className="max-w-[950px] text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.8] tracking-[-0.08em]">
              Decades of
              <br />
              <span className="text-white/25">evolution.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="max-w-[315px] text-[10px] leading-[1.9] text-white/40 sm:text-[11px]">
              Since 1948, Porsche has evolved without losing sight of the
              principles that created the marque. Form follows function.
              Performance remains the purpose.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-[7px] uppercase tracking-[0.34em] text-white/25">
                1948
              </span>

              <span className="h-px w-10 bg-white/15" />

              <span className="text-[7px] uppercase tracking-[0.34em] text-white/25">
                Present
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          HERO HERITAGE IMAGE
      ========================================================= */}

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <HeritageImage />
      </div>

      {/* =========================================================
          TIMELINE
      ========================================================= */}

      <div className="mx-auto max-w-[1440px] px-5 py-32 sm:px-8 sm:py-40 lg:px-12 lg:py-48">
        <div className="border-t border-white/[0.08]">
          {timeline.map((item, index) => (
            <TimelineItem
              key={item.year}
              year={item.year}
              title={item.title}
              description={item.description}
              label={item.label}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* =========================================================
          CLOSING STATEMENT
      ========================================================= */}

      <div className="mx-auto max-w-[1440px] px-5 pb-32 sm:px-8 sm:pb-40 lg:px-12 lg:pb-48">
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
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="border-t border-white/[0.08] pt-10 sm:pt-14"
        >
          <p className="mb-6 text-[7px] uppercase tracking-[0.42em] text-white/25">
            Porsche DNA
          </p>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <h3 className="max-w-[1050px] text-[clamp(2.8rem,6vw,6.5rem)] font-light leading-[0.87] tracking-[-0.075em]">
              The future changes.
              <br />
              <span className="text-white/25">
                The spirit remains.
              </span>
            </h3>

            <span className="shrink-0 text-[7px] uppercase tracking-[0.32em] text-white/20">
              1948 — Present
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}