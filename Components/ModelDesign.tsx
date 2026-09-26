"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Flyline",
    description:
      "The unmistakable roofline flows seamlessly into the rear, preserving the silhouette that has defined the 911 for generations.",
  },
  {
    number: "02",
    title: "Wide Stance",
    description:
      "A broad track and muscular rear shoulders communicate performance before the engine is ever started.",
  },
  {
    number: "03",
    title: "Active Aerodynamics",
    description:
      "Every surface is shaped not only for beauty but for airflow, stability and efficiency at speed.",
  },
];

export default function ModelDesign() {
  return (
    <section className="relative bg-[#050505] text-white">
      {/* HERO IMAGE */}

      <div className="relative h-[90vh] overflow-hidden">
        <Image
          src="/images/optimized/cars/911.webp"
          alt="Porsche 911"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full px-6 pb-16 md:px-10 lg:px-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-white/50">
              Design Philosophy
            </p>

            <h2 className="text-[clamp(4rem,10vw,9rem)] font-light leading-[0.8] tracking-[-0.08em]">
              FORM
              <br />
              FOLLOWS
              <br />
              FUNCTION.
            </h2>
          </motion.div>
        </div>
      </div>

      {/* DESIGN FEATURES */}

      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
              Design DNA
            </p>

            <h3 className="mt-6 text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
              Every line has a reason.
            </h3>
          </div>

          <div className="mt-16 lg:mt-0">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="border-t border-white/10 py-10"
              >
                <div className="flex items-start justify-between gap-10">
                  <span className="text-[9px] tracking-[0.3em] text-white/25">
                    {feature.number}
                  </span>

                  <div className="max-w-xl">
                    <h4 className="text-3xl font-light tracking-[-0.04em]">
                      {feature.title}
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-white/50 md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LARGE STATEMENT */}

      <div className="border-t border-white/10 px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-[clamp(2.5rem,6vw,7rem)] font-light leading-[0.88] tracking-[-0.07em]">
            Seventy years of evolution.
            <span className="text-white/25">
              {" "}
              Instantly recognizable.
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
}