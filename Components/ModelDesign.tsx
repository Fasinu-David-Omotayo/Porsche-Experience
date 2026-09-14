"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ModelDesign() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#050505]">
      <Image
        src="/images/optimized/cars/911.webp"
        alt="Porsche 911"
        fill
        sizes="100vw"
        loading="lazy"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

      <div className="relative z-10 flex min-h-[90vh] items-end px-6 pb-16 md:px-10 md:pb-20 lg:px-16 lg:pb-24">
        <motion.div
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-white/50">
            Design Philosophy
          </p>

          <h2 className="text-[clamp(4rem,10vw,9rem)] font-light leading-[0.82] tracking-[-0.07em]">
            DESIGN.
          </h2>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/70 md:text-base md:leading-8">
            Every contour is shaped by performance.
            Every surface has a purpose. Every detail
            contributes to the unmistakable character
            of the Porsche 911.
          </p>
        </motion.div>
      </div>
    </section>
  );
}