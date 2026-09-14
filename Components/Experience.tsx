"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

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

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#08090a] px-5 py-32 text-white sm:px-8 sm:py-40 lg:px-12 lg:py-48"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end lg:gap-24"
        >
          <div>
            <p className="mb-6 text-[8px] uppercase tracking-[0.4em] text-white/30">
              The Porsche Experience
            </p>

            <h2 className="max-w-[1000px] text-[clamp(4rem,9vw,9rem)] font-light leading-[0.8] tracking-[-0.08em]">
              FEEL THE
              <br />
              <span className="text-white/25">DIFFERENCE.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-[300px] text-[10px] leading-[1.9] text-white/40 sm:text-[11px]">
              Porsche is not simply something you drive. It is a relationship
              between precision, performance and emotion.
            </p>
          </div>
        </motion.div>

        {/* =========================================================
            LARGE EDITORIAL STATEMENT
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.9,
            delay: 0.1,
          }}
          className="mt-24 border-t border-white/[0.08] pt-10 sm:mt-32 sm:pt-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
            <p className="max-w-[850px] text-[clamp(1.8rem,4vw,4.2rem)] font-light leading-[1.05] tracking-[-0.055em] text-white/85">
              The moment the engine responds.
              <br />
              The road opens.
              <br />
              <span className="text-white/25">
                Everything else disappears.
              </span>
            </p>

            <span className="text-[7px] uppercase tracking-[0.35em] text-white/20 lg:pt-2">
              The drive
            </span>
          </div>
        </motion.div>

        {/* =========================================================
            EXPERIENCE PRINCIPLES
        ========================================================= */}

        <div className="mt-24 border-t border-white/[0.08] sm:mt-32">
          <div className="grid lg:grid-cols-3">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group border-b border-white/[0.08] py-9 lg:border-b-0 lg:border-r lg:px-8 lg:py-10 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                {/* NUMBER */}
                <div className="flex items-center justify-between">
                  <span className="text-[8px] tracking-[0.3em] text-white/25">
                    {experience.number}
                  </span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1}
                    className="text-white/20 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white/60"
                  />
                </div>

                {/* TITLE */}
                <h3 className="mt-14 text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-none tracking-[-0.065em]">
                  {experience.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-6 max-w-[310px] text-[10px] leading-[1.9] text-white/35">
                  {experience.description}
                </p>

                {/* SMALL LINE */}
                <div className="mt-10 h-px w-8 bg-white/20 transition-all duration-500 group-hover:w-16 group-hover:bg-white/50" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================================
            FINAL STATEMENT
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-28 border-t border-white/[0.08] pt-10 sm:mt-40 sm:pt-12"
        >
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 text-[7px] uppercase tracking-[0.4em] text-white/20">
                More than performance
              </p>

              <h3 className="max-w-[900px] text-[clamp(2.8rem,6vw,6rem)] font-light leading-[0.88] tracking-[-0.07em]">
                You don't just
                <br />
                <span className="text-white/25">drive a Porsche.</span>
              </h3>
            </div>

            <div className="lg:pb-1">
              <p className="max-w-[260px] text-[10px] leading-[1.8] text-white/30">
                You become part of a philosophy that has been evolving since
                1948.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            BACK TO TOP
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex justify-end sm:mt-28"
        >
          <a
            href="#top"
            className="group flex items-center gap-3 text-[7px] uppercase tracking-[0.32em] text-white/25 transition-colors duration-300 hover:text-white"
          >
            Back to beginning

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-white/35 group-hover:bg-white group-hover:text-black">
              <ArrowDown
                size={12}
                strokeWidth={1}
                className="rotate-180 transition-transform duration-500"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}