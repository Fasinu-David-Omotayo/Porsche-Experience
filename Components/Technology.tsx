"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Cpu, Gauge } from "lucide-react";

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

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-[#0b0c0d] px-5 py-28 text-white sm:px-8 sm:py-36 lg:px-12 lg:py-44"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end lg:gap-24"
        >
          <div>
            <p className="mb-5 text-[8px] uppercase tracking-[0.4em] text-white/30">
              Technology
            </p>

            <h2 className="max-w-[900px] text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.82] tracking-[-0.075em]">
              Engineering
              <br />
              <span className="text-white/30">the future.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-[310px] text-[10px] leading-[1.9] text-white/40 sm:text-[11px]">
              Technology is not simply added to a Porsche. It is engineered
              around the driving experience, turning complexity into control.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="text-[7px] uppercase tracking-[0.32em] text-white/25">
                Innovation
              </span>

              <span className="h-px w-8 bg-white/15" />

              <span className="text-[7px] uppercase tracking-[0.32em] text-white/25">
                Performance
              </span>
            </div>
          </div>
        </motion.div>

        {/* FEATURE IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="group relative mt-16 overflow-hidden rounded-[20px] sm:mt-20 lg:mt-24"
        >
          <div className="relative aspect-[16/9] bg-[#111]">
            <Image
              src="/images/optimized/hero-porsche1.webp"
              alt="Porsche technology and performance"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 1400px"
              quality={72}
              className="object-cover object-center transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-10">
              <p className="mb-3 text-[7px] uppercase tracking-[0.35em] text-white/45">
                Porsche Engineering
              </p>

              <h3 className="text-[clamp(2rem,5vw,5rem)] font-light leading-[0.9] tracking-[-0.065em]">
                Precision
                <br />
                <span className="text-white/40">in motion.</span>
              </h3>
            </div>
          </div>
        </motion.div>

        {/* TECHNOLOGY FEATURES */}
        <div className="mt-20 grid gap-0 border-t border-white/[0.08] sm:mt-28 lg:grid-cols-3">
          {technologyItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="border-b border-white/[0.08] py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-10 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                    {item.number}
                  </span>

                  <Icon
                    size={16}
                    strokeWidth={1}
                    className="text-white/30"
                  />
                </div>

                <h3 className="mt-10 text-[clamp(1.8rem,3vw,3rem)] font-light leading-none tracking-[-0.06em]">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-[320px] text-[10px] leading-[1.8] text-white/35">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* TECHNICAL STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-24 border-t border-white/[0.08] pt-10 sm:mt-32 sm:pt-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 text-[7px] uppercase tracking-[0.4em] text-white/25">
                The philosophy
              </p>

              <h3 className="max-w-[900px] text-[clamp(2.5rem,5vw,5.5rem)] font-light leading-[0.9] tracking-[-0.065em]">
                Technology should disappear.
                <span className="text-white/25">
                  {" "}
                  Performance should remain.
                </span>
              </h3>
            </div>

            <a
              href="#experience"
              className="group flex items-center gap-3 text-[8px] uppercase tracking-[0.3em] text-white/35 transition-colors duration-300 hover:text-white"
            >
              Explore the experience

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:border-white/40 group-hover:bg-white group-hover:text-black">
                <ArrowUpRight size={13} strokeWidth={1.2} />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}