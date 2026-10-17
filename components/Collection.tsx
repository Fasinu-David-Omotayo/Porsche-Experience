"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

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
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [18, -18]);

  const slug = model.name.toLowerCase();

  return (
    <motion.article
      ref={ref}
      initial={{
        opacity: 0,
        y: 36,
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
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        href={`/models/${slug}`}
        className="group block"
        aria-label={`Explore Porsche ${model.name}`}
      >
        <div
          className={`relative overflow-hidden bg-[#121212] ${
            large
              ? "aspect-[1.5/1] md:aspect-[1.58/1]"
              : "aspect-[1.35/1]"
          }`}
        >
          <motion.div
            style={{
              y: imageY,
              scale: 1.08,
            }}
            className="absolute -inset-x-0 -inset-y-5"
          >
            <Image
              src={model.image}
              alt={`Porsche ${model.name}`}
              fill
              loading="lazy"
              sizes={
                large
                  ? "(max-width: 768px) 100vw, 66vw"
                  : "(max-width: 768px) 100vw, 38vw"
              }
              quality={78}
              className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
            />
          </motion.div>

          {/* Cinematic image treatment */}
          <div className="absolute inset-0 bg-black/[0.08] transition-opacity duration-700 group-hover:opacity-40" />

          <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Top metadata */}
          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-6">
            <span className="text-[8px] tracking-[0.3em] text-white/60">
              {model.number}
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/10 text-white/75 backdrop-blur-sm transition-all duration-500 group-hover:border-white/70 group-hover:bg-white group-hover:text-black">
              <ArrowUpRight
                size={14}
                strokeWidth={1.15}
                className="transition-transform duration-500 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
              />
            </span>
          </div>

          {/* Model title */}
          <div className="absolute bottom-0 left-0 p-5 sm:p-7 lg:p-8">
            <p className="mb-2 text-[7px] uppercase tracking-[0.35em] text-white/55">
              {model.family}
            </p>

            <h3
              className={`font-light leading-[0.85] tracking-[-0.065em] text-white ${
                large
                  ? "text-[clamp(3.5rem,6vw,6.5rem)]"
                  : "text-[clamp(2.8rem,4.5vw,4.5rem)]"
              }`}
            >
              {model.name}
            </h3>
          </div>
        </div>

        {/* Editorial information */}
        <div className="flex items-start justify-between gap-8 border-t border-white/[0.09] px-0.5 pt-4">
          <p className="max-w-[370px] text-[9px] leading-[1.75] text-white/38 sm:text-[10px]">
            {model.description}
          </p>

          <span className="hidden shrink-0 pt-0.5 text-[7px] uppercase tracking-[0.3em] text-white/20 transition-colors duration-500 group-hover:text-white/65 sm:block">
            Discover
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

export default function Collection() {
  return (
    <section
      id="models"
      className="relative overflow-hidden bg-[#08090a] px-5 py-32 text-white sm:px-8 sm:py-40 lg:px-12 lg:py-48"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* INTRODUCTION */}
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_350px] lg:items-end lg:gap-24">
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
          >
            <p className="mb-5 text-[8px] uppercase tracking-[0.4em] text-white/35">
              The Porsche Universe
            </p>

            <h2 className="max-w-[900px] text-[clamp(3.4rem,7.5vw,8rem)] font-light leading-[0.78] tracking-[-0.085em]">
              THE
              <br />
              UNIVERSE.
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
              margin: "-80px",
            }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="max-w-[300px] text-[10px] leading-[1.85] text-white/42 sm:text-[11px]">
              Six expressions of one philosophy. Explore the Porsche world
              through sports cars, electric performance, luxury touring and
              SUVs.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-[7px] uppercase tracking-[0.34em] text-white/25">
                06 families
              </span>

              <span className="h-px w-8 bg-white/15" />

              <span className="text-[7px] uppercase tracking-[0.34em] text-white/25">
                Stuttgart
              </span>
            </div>
          </motion.div>
        </div>

        {/* MODEL COLLECTION */}
        <div className="mt-20 space-y-24 sm:mt-24 sm:space-y-32 lg:mt-32 lg:space-y-40">
          {/* 911 / 718 */}
          <div className="grid gap-16 md:grid-cols-[1.5fr_0.82fr] md:items-end md:gap-10 lg:gap-24">
            <ModelCard model={models[0]} large />

            <div className="md:pb-12">
              <ModelCard model={models[1]} />
            </div>
          </div>

          {/* Taycan / Panamera */}
          <div className="grid gap-16 md:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="md:pt-24">
              <ModelCard model={models[2]} />
            </div>

            <ModelCard model={models[3]} />
          </div>

          {/* Macan / Cayenne */}
          <div className="grid gap-16 md:grid-cols-[0.82fr_1.5fr] md:items-start md:gap-10 lg:gap-24">
            <div className="md:pt-12">
              <ModelCard model={models[4]} />
            </div>

            <ModelCard model={models[5]} large />
          </div>
        </div>

        {/* CLOSING STATEMENT */}
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
          className="mt-36 border-t border-white/[0.09] pt-10 sm:mt-48 sm:pt-14"
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-6 text-[7px] uppercase tracking-[0.42em] text-white/25">
                One marque
              </p>

              <h3 className="max-w-[950px] text-[clamp(2.8rem,5.8vw,6rem)] font-light leading-[0.88] tracking-[-0.075em]">
                Different worlds.
                <span className="text-white/24">
                  {" "}
                  One unmistakable Porsche DNA.
                </span>
              </h3>
            </div>

            <div className="lg:pb-1">
              <span className="text-[7px] uppercase tracking-[0.32em] text-white/25">
                1948 — Present
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}