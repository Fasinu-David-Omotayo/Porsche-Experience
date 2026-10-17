"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Zap, Cpu, Gauge } from "lucide-react";
import { useRef } from "react";

const technologyItems = [
  {
    number: "01",
    icon: Zap,
    title: "Electric Performance",
    description:
      "Instant response meets unmistakable Porsche performance. Electric power without sacrificing the feeling of driving.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Intelligent Engineering",
    description:
      "Advanced systems work quietly behind the scenes, giving every Porsche precision, control and confidence.",
  },
  {
    number: "03",
    icon: Gauge,
    title: "Performance DNA",
    description:
      "Decades of motorsport development translated into road-going technology designed around the driver.",
  },
];

function TechnologyImage() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.055, 1.02, 1.055],
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
        margin: "-80px",
      }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative mt-20 overflow-hidden bg-[#111] sm:mt-24 lg:mt-32"
    >
      <div className="relative aspect-[16/9] min-h-[420px] sm:min-h-[500px] lg:min-h-0">
        <motion.div
          style={{
            y: imageY,
            scale: imageScale,
          }}
          className="absolute -inset-y-[5%] inset-x-0"
        >
          <Image
            src="/images/optimized/hero-porsche1.webp"
            alt="Porsche technology and performance"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 1400px"
            quality={78}
            className="object-cover object-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
          />
        </motion.div>

        {/* Cinematic treatment */}
        <div className="absolute inset-0 bg-black/25 transition-colors duration-1000 group-hover:bg-black/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />

        {/* Technical marker */}
        <div className="absolute right-5 top-5 flex items-center gap-3 sm:right-7 sm:top-7 lg:right-10 lg:top-10">
          <span className="h-px w-8 bg-white/20" />

          <span className="text-[7px] uppercase tracking-[0.35em] text-white/35">
            Engineering / 01
          </span>
        </div>

        {/* Image title */}
        <div className="absolute bottom-6 left-6 sm:bottom-9 sm:left-9 lg:bottom-12 lg:left-12">
          <p className="mb-3 text-[7px] uppercase tracking-[0.38em] text-white/45">
            Porsche Engineering
          </p>

          <h3 className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-light leading-[0.86] tracking-[-0.07em] text-white">
            Precision
            <br />
            <span className="text-white/35">in motion.</span>
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

function TechnologyItem({
  item,
  index,
}: {
  item: (typeof technologyItems)[number];
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.article
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
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group border-b border-white/[0.08] py-9 lg:border-b-0 lg:border-r lg:px-8 lg:py-10 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
    >
      <div className="flex items-center justify-between">
        <span className="text-[8px] uppercase tracking-[0.32em] text-white/25 transition-colors duration-500 group-hover:text-white/55">
          {item.number}
        </span>

        <Icon
          size={16}
          strokeWidth={1}
          className="text-white/25 transition-all duration-500 group-hover:rotate-6 group-hover:text-white/60"
        />
      </div>

      <h3 className="mt-11 max-w-[340px] text-[clamp(1.8rem,3vw,3rem)] font-light leading-[0.9] tracking-[-0.06em]">
        {item.title}
      </h3>

      <p className="mt-5 max-w-[320px] text-[10px] leading-[1.85] text-white/35 sm:text-[11px]">
        {item.description}
      </p>

      <div className="mt-8 flex items-center gap-3">
        <span className="h-px w-5 bg-white/10 transition-all duration-500 group-hover:w-8 group-hover:bg-white/35" />

        <span className="text-[7px] uppercase tracking-[0.3em] text-white/15 transition-colors duration-500 group-hover:text-white/40">
          Porsche technology
        </span>
      </div>
    </motion.article>
  );
}

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-[#0b0c0d] px-5 py-32 text-white sm:px-8 sm:py-40 lg:px-12 lg:py-48"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 28,
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
          className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_350px] lg:items-end lg:gap-24"
        >
          <div>
            <p className="mb-5 text-[8px] uppercase tracking-[0.4em] text-white/30">
              Technology
            </p>

            <h2 className="max-w-[950px] text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.8] tracking-[-0.08em]">
              Engineering
              <br />
              <span className="text-white/25">the future.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-[315px] text-[10px] leading-[1.9] text-white/40 sm:text-[11px]">
              Technology is not simply added to a Porsche. It is engineered
              around the driving experience, turning complexity into control.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-[7px] uppercase tracking-[0.34em] text-white/25">
                Innovation
              </span>

              <span className="h-px w-8 bg-white/15" />

              <span className="text-[7px] uppercase tracking-[0.34em] text-white/25">
                Performance
              </span>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            FEATURE IMAGE
        ========================================================= */}

        <TechnologyImage />

        {/* =========================================================
            TECHNOLOGY FEATURES
        ========================================================= */}

        <div className="mt-20 border-t border-white/[0.08] sm:mt-28 lg:mt-32">
          <div className="grid lg:grid-cols-3">
            {technologyItems.map((item, index) => (
              <TechnologyItem
                key={item.number}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* =========================================================
            TECHNICAL STATEMENT
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 28,
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
          className="mt-32 border-t border-white/[0.08] pt-10 sm:mt-44 sm:pt-14"
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-20">
            <div>
              <p className="mb-6 text-[7px] uppercase tracking-[0.42em] text-white/25">
                The philosophy
              </p>

              <h3 className="max-w-[1000px] text-[clamp(2.7rem,5.5vw,6rem)] font-light leading-[0.87] tracking-[-0.075em]">
                Technology should disappear.
                <span className="text-white/25">
                  {" "}
                  Performance should remain.
                </span>
              </h3>
            </div>

            <a
              href="#experience"
              className="group flex w-fit items-center gap-3 text-[8px] uppercase tracking-[0.3em] text-white/35 transition-colors duration-300 hover:text-white"
            >
              Explore the experience

              <span className="flex h-10 w-10 items-center justify-center border border-white/15 transition-all duration-500 group-hover:border-white/50 group-hover:bg-white group-hover:text-black">
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.2}
                  className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}