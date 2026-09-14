"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type PorscheModel = {
  number: string;
  name: string;
  family: string;
  description: string;
  image: string;
};

const models: PorscheModel[] = [
  {
    number: "01",
    name: "911",
    family: "Sports Car",
    description:
      "The enduring icon. Evolving through generations while remaining unmistakably Porsche.",
    image: "/images/optimized/cars/911.webp",
  },
  {
    number: "02",
    name: "718",
    family: "Mid-Engine Sports Car",
    description:
      "Lightweight, balanced and built around the purest connection between driver and road.",
    image: "/images/optimized/cars/718.webp",
  },
  {
    number: "03",
    name: "Taycan",
    family: "Electric Sports Car",
    description:
      "Electric performance with the character and precision of a Porsche.",
    image: "/images/optimized/cars/taycan.webp",
  },
  {
    number: "04",
    name: "Panamera",
    family: "Luxury Performance",
    description:
      "Long-distance comfort, unmistakable design and sports-car performance.",
    image: "/images/optimized/cars/panamera.webp",
  },
  {
    number: "05",
    name: "Macan",
    family: "Performance SUV",
    description:
      "Versatility shaped by the dynamic spirit of Porsche.",
    image: "/images/optimized/cars/macan.webp",
  },
  {
    number: "06",
    name: "Cayenne",
    family: "Luxury SUV",
    description:
      "Performance and capability brought together in a distinctive SUV.",
    image: "/images/optimized/cars/cayenne.webp",
  },
];

function ModelCard({
  model,
  large = false,
}: {
  model: PorscheModel;
  large?: boolean;
}) {
  const slug = model.name.toLowerCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        href={`/models/${slug}`}
        className="group relative block"
        aria-label={`Explore Porsche ${model.name}`}
      >
        <div
          className={`relative overflow-hidden rounded-[18px] bg-[#111] ${
            large
              ? "aspect-[1.45/1] md:aspect-[1.55/1]"
              : "aspect-[1.35/1]"
          }`}
        >
          <Image
            src={model.image}
            alt={`Porsche ${model.name}`}
            fill
            loading="lazy"
            sizes={
              large
                ? "(max-width: 768px) 100vw, 65vw"
                : "(max-width: 768px) 100vw, 35vw"
            }
            quality={75}
            className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
          />

          {/* Subtle cinematic depth */}
          <div className="absolute inset-0 bg-black/[0.06] transition-colors duration-700 group-hover:bg-black/[0.02]" />

          {/* Bottom contrast */}
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

          {/* Top information */}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-6">
            <span className="text-[8px] tracking-[0.28em] text-white/60">
              {model.number}
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white/70 backdrop-blur-md transition-all duration-500 group-hover:border-white/50 group-hover:bg-white group-hover:text-black">
              <ArrowUpRight size={13} strokeWidth={1.2} />
            </span>
          </div>

          {/* Model information */}
          <div className="absolute bottom-0 left-0 p-5 sm:p-7">
            <p className="mb-2 text-[7px] uppercase tracking-[0.34em] text-white/55">
              {model.family}
            </p>

            <h3
              className={`font-light leading-none tracking-[-0.06em] text-white ${
                large
                  ? "text-[clamp(3rem,5vw,5.5rem)]"
                  : "text-[clamp(2.5rem,4vw,4rem)]"
              }`}
            >
              {model.name}
            </h3>
          </div>
        </div>

        {/* Information underneath */}
        <div className="flex items-start justify-between gap-6 px-1 pt-4">
          <p className="max-w-[360px] text-[9px] leading-[1.7] text-white/35 sm:text-[10px]">
            {model.description}
          </p>

          <span className="hidden pt-0.5 text-[7px] uppercase tracking-[0.28em] text-white/20 transition-colors duration-500 group-hover:text-white/55 sm:block">
            Discover
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Collection() {
  return (
    <section
      id="models"
      className="relative overflow-hidden bg-[#08090a] px-5 py-32 text-white sm:px-8 sm:py-40 lg:px-12 lg:py-48"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* SECTION INTRO */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end lg:gap-24">
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
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="mb-4 text-[8px] uppercase tracking-[0.38em] text-white/35">
              The Porsche Universe
            </p>

            <h2 className="text-[clamp(3rem,6.5vw,6.5rem)] font-light leading-[0.82] tracking-[-0.075em]">
              THE
              <br />
              UNIVERSE.
            </h2>
          </motion.div>

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
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="pb-1"
          >
            <p className="max-w-[290px] text-[10px] leading-[1.8] text-white/40 sm:text-[11px]">
              Six expressions of one philosophy. Explore the Porsche world
              through sports cars, electric performance, luxury touring and
              SUVs.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="text-[7px] uppercase tracking-[0.32em] text-white/25">
                06 families
              </span>

              <span className="h-px w-8 bg-white/15" />

              <span className="text-[7px] uppercase tracking-[0.32em] text-white/25">
                Stuttgart
              </span>
            </div>
          </motion.div>
        </div>

        {/* UNIVERSE GRID */}
        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-24 lg:mt-24 lg:space-y-28">
          {/* Row 01 */}
          <div className="grid gap-14 md:grid-cols-[1.45fr_0.85fr] md:items-end md:gap-10 lg:gap-20">
            <ModelCard model={models[0]} large />

            <div className="md:pb-8">
              <ModelCard model={models[1]} />
            </div>
          </div>

          {/* Row 02 */}
          <div className="grid gap-14 md:grid-cols-2 md:gap-10 lg:gap-20">
            <div className="md:pt-20">
              <ModelCard model={models[2]} />
            </div>

            <ModelCard model={models[3]} />
          </div>

          {/* Row 03 */}
          <div className="grid gap-14 md:grid-cols-[0.85fr_1.45fr] md:items-start md:gap-10 lg:gap-20">
            <div className="md:pt-10">
              <ModelCard model={models[4]} />
            </div>

            <ModelCard model={models[5]} large />
          </div>
        </div>

        {/* CLOSING STATEMENT */}
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
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-32 border-t border-white/[0.08] pt-10 sm:mt-44 sm:pt-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 text-[7px] uppercase tracking-[0.4em] text-white/25">
                One marque
              </p>

              <h3 className="max-w-[850px] text-[clamp(2.5rem,5vw,5.5rem)] font-light leading-[0.9] tracking-[-0.065em]">
                Different worlds.
                <span className="text-white/25">
                  {" "}
                  One unmistakable Porsche DNA.
                </span>
              </h3>
            </div>

            <div className="text-right">
              <span className="text-[7px] uppercase tracking-[0.3em] text-white/25">
                1948 — Present
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}