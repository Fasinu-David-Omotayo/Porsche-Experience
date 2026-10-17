"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    number: "01",
    title: "Precision",
    description:
      "Every movement is deliberate. Every response is engineered to create an immediate connection between driver and machine.",
  },
  {
    number: "02",
    title: "Performance",
    description:
      "Power becomes meaningful when control is effortless. Porsche turns engineering into an experience you can feel.",
  },
  {
    number: "03",
    title: "Connection",
    description:
      "The road, the machine and the driver become one. That feeling is what makes every Porsche unmistakable.",
  },
];

function DrivingStatement() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-18, 18]);

  return (
    <motion.div
      ref={ref}
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
      className="mt-24 overflow-hidden border-t border-white/[0.08] pt-10 sm:mt-32 sm:pt-14"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-20">
        <motion.p
          style={{ x }}
          className="max-w-[1050px] text-[clamp(2rem,4.2vw,4.5rem)] font-light leading-[1.02] tracking-[-0.06em] text-white/85"
        >
          The moment the engine responds.
          <br />
          The road opens.
          <br />
          <span className="text-white/22">
            Everything else disappears.
          </span>
        </motion.p>

        <span className="text-[7px] uppercase tracking-[0.35em] text-white/20 lg:pt-3">
          The drive
        </span>
      </div>
    </motion.div>
  );
}

function ExperiencePrinciple({
  number,
  title,
  description,
  index,
}: {
  number: string;
  title: string;
  description: string;
  index: number;
}) {
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
        margin: "-70px",
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group border-b border-white/[0.08] py-9 lg:border-b-0 lg:border-r lg:px-8 lg:py-10 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
    >
      <div className="flex items-center justify-between">
        <span className="text-[8px] uppercase tracking-[0.32em] text-white/25 transition-colors duration-500 group-hover:text-white/60">
          {number}
        </span>

        <ArrowUpRight
          size={14}
          strokeWidth={1}
          className="text-white/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/65"
        />
      </div>

      <h3 className="mt-14 text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[0.9] tracking-[-0.065em]">
        {title}
      </h3>

      <p className="mt-6 max-w-[320px] text-[10px] leading-[1.9] text-white/35 sm:text-[11px]">
        {description}
      </p>

      <div className="mt-10 flex items-center gap-3">
        <span className="h-px w-7 bg-white/15 transition-all duration-500 group-hover:w-14 group-hover:bg-white/50" />

        <span className="text-[7px] uppercase tracking-[0.3em] text-white/15 transition-colors duration-500 group-hover:text-white/40">
          The Porsche experience
        </span>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#08090a] px-5 py-32 text-white sm:px-8 sm:py-40 lg:px-12 lg:py-48"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

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
          className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-end lg:gap-24"
        >
          <div>
            <p className="mb-6 text-[8px] uppercase tracking-[0.4em] text-white/30">
              The Porsche Experience
            </p>

            <h2 className="max-w-[1050px] text-[clamp(4rem,9vw,9rem)] font-light leading-[0.78] tracking-[-0.085em]">
              FEEL THE
              <br />
              <span className="text-white/22">DIFFERENCE.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-[305px] text-[10px] leading-[1.9] text-white/40 sm:text-[11px]">
              Porsche is not simply something you drive. It is a relationship
              between precision, performance and emotion.
            </p>
          </div>
        </motion.div>

        {/* =========================================================
            LARGE EDITORIAL STATEMENT
        ========================================================= */}

        <DrivingStatement />

        {/* =========================================================
            EXPERIENCE PRINCIPLES
        ========================================================= */}

        <div className="mt-24 border-t border-white/[0.08] sm:mt-32">
          <div className="grid lg:grid-cols-3">
            {experiences.map((experience, index) => (
              <ExperiencePrinciple
                key={experience.number}
                number={experience.number}
                title={experience.title}
                description={experience.description}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* =========================================================
            FINAL STATEMENT
        ========================================================= */}

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
          className="mt-32 border-t border-white/[0.08] pt-10 sm:mt-44 sm:pt-14"
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end lg:gap-20">
            <div>
              <p className="mb-6 text-[7px] uppercase tracking-[0.42em] text-white/20">
                More than performance
              </p>

              <h3 className="max-w-[1000px] text-[clamp(2.8rem,6vw,6.5rem)] font-light leading-[0.86] tracking-[-0.075em]">
                You don&apos;t just
                <br />
                <span className="text-white/23">drive a Porsche.</span>
              </h3>
            </div>

            <div className="lg:pb-1">
              <p className="max-w-[260px] text-[10px] leading-[1.85] text-white/30 sm:text-[11px]">
                You become part of a philosophy that has been evolving since
                1948.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            FINAL NAVIGATION
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-20 border-t border-white/[0.08] pt-8 sm:mt-28 sm:pt-10"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[7px] uppercase tracking-[0.35em] text-white/15">
              Porsche Universe
            </span>

            <a
              href="#top"
              className="group flex w-fit items-center gap-3 text-[7px] uppercase tracking-[0.32em] text-white/25 transition-colors duration-300 hover:text-white"
            >
              Back to beginning

              <span className="flex h-9 w-9 items-center justify-center border border-white/10 transition-all duration-500 group-hover:border-white/40 group-hover:bg-white group-hover:text-black">
                <ArrowDown
                  size={12}
                  strokeWidth={1}
                  className="rotate-180 transition-transform duration-500 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}