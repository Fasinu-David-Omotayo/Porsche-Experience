"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { label: "Models", href: "#models" },
  { label: "Heritage", href: "#heritage" },
  { label: "Technology", href: "#technology" },
  { label: "Experience", href: "#experience" },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);

  const [showStickyNav, setShowStickyNav] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  /*
   * ---------------------------------------------------------
   * SCROLL STATE
   * ---------------------------------------------------------
   */

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        const shouldShow = scrollY > window.innerHeight * 0.92;

        setShowStickyNav((previous) =>
          previous === shouldShow ? previous : shouldShow,
        );

        const sections = navigation
          .map((item) => document.querySelector(item.href))
          .filter((section): section is Element => Boolean(section));

        let currentSection = "";

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();

          if (
            rect.top <= window.innerHeight * 0.38 &&
            rect.bottom >= window.innerHeight * 0.38
          ) {
            currentSection = `#${section.id}`;
          }
        });

        setActiveSection((previous) =>
          previous === currentSection ? previous : currentSection,
        );

        ticking = false;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * MENU / BODY LOCK
   * ---------------------------------------------------------
   */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /*
   * ---------------------------------------------------------
   * ESCAPE KEY
   * ---------------------------------------------------------
   */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * HERO PARALLAX
   * ---------------------------------------------------------
   */

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "10%"],
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.015, 1.06],
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-10%"],
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.72],
    [1, 0],
  );

  const navigationOpacity = useTransform(
    scrollYProgress,
    [0, 0.45],
    [1, 0],
  );

  /*
   * ---------------------------------------------------------
   * NAVIGATION
   * ---------------------------------------------------------
   */

  const handleNavigation = (href: string) => {
    setMenuOpen(false);

    window.setTimeout(() => {
      const element = document.querySelector(href);

      if (!element) return;

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);
  };

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-[#090909] text-white"
    >
      {/* =====================================================
          HERO IMAGE
      ===================================================== */}

      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
        }}
        className="absolute inset-[-5%] transform-gpu will-change-transform"
      >
        <Image
          src="/images/optimized/hero-porsche.webp"
          alt="Porsche sports car"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-center"
        />
      </motion.div>

      {/* =====================================================
          CINEMATIC IMAGE TREATMENT
      ===================================================== */}

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.40)_30%,rgba(0,0,0,0.10)_65%,rgba(0,0,0,0.20)_100%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0.03)_25%,rgba(0,0,0,0.04)_58%,rgba(0,0,0,0.82)_100%)]" />

      {/* Very subtle grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-overlay [background-image:url('/images/optimized/1.webp')] [background-position:center] [background-size:cover]" />

      {/* =====================================================
          DESKTOP HERO NAVIGATION
      ===================================================== */}

      <motion.header
        style={{ opacity: navigationOpacity }}
        className="absolute inset-x-0 top-0 z-50 px-5 pt-5 sm:px-7 lg:px-10"
      >
        <nav className="mx-auto flex h-12 max-w-[1500px] items-center justify-between">
          {/* BRAND */}

          <a
            href="#top"
            aria-label="Porsche Universe home"
            className="group flex items-center"
          >
            <Image
              src="/images/porsche-crest.svg"
              alt="Porsche"
              width={48}
              height={48}
              className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-[1.04] sm:h-11 sm:w-11"
            />

            <span className="ml-3 hidden text-[9px] font-medium tracking-[0.42em] text-white/85 sm:block">
              PORSCHE
            </span>
          </a>

          {/* DESKTOP LINKS */}

          <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
            <div className="flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`group relative px-4 py-2 text-[10px] uppercase tracking-[0.17em] transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-white/55 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">
                      {item.label}
                    </span>

                    <span
                      className={`absolute bottom-0 left-4 right-4 h-px origin-left bg-white transition-transform duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* MENU */}

          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((previous) => !previous)}
            className="flex h-10 w-10 items-center justify-center border border-white/20 bg-black/10 text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={16} strokeWidth={1.25} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={16} strokeWidth={1.25} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* =====================================================
          FULL SCREEN MENU
      ===================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-[#0b0b0b]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,255,255,0.055),transparent_35%)]" />

            <div className="relative flex min-h-[100svh] flex-col px-6 py-6 sm:px-10 lg:px-14">
              {/* MENU TOP */}

              <div className="flex items-center justify-between">
                <a
                  href="#top"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center"
                >
                  <Image
                    src="/images/porsche-crest.svg"
                    alt="Porsche"
                    width={44}
                    height={44}
                    className="h-10 w-10 object-contain"
                  />

                  <span className="ml-3 text-[9px] tracking-[0.42em] text-white/75">
                    PORSCHE
                  </span>
                </a>

                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-white/35 hover:text-white"
                >
                  <X size={17} strokeWidth={1.25} />
                </button>
              </div>

              {/* MENU CONTENT */}

              <div className="flex flex-1 items-center">
                <div className="w-full">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 text-[8px] uppercase tracking-[0.42em] text-white/30"
                  >
                    Explore the universe
                  </motion.p>

                  <nav>
                    {navigation.map((item, index) => {
                      const isActive =
                        activeSection === item.href;

                      return (
                        <motion.button
                          key={item.label}
                          type="button"
                          initial={{
                            opacity: 0,
                            x: -25,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            duration: 0.55,
                            delay: 0.08 * index,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          onClick={() =>
                            handleNavigation(item.href)
                          }
                          className="group flex w-full items-center justify-between border-b border-white/[0.10] py-5 text-left sm:py-6"
                        >
                          <div className="flex items-center gap-5 sm:gap-8">
                            <span className="text-[8px] tracking-[0.25em] text-white/20">
                              0{index + 1}
                            </span>

                            <span
                              className={`text-[clamp(2rem,7vw,5.5rem)] font-light leading-none tracking-[-0.055em] transition-colors duration-300 ${
                                isActive
                                  ? "text-white"
                                  : "text-white/45 group-hover:text-white"
                              }`}
                            >
                              {item.label}
                            </span>
                          </div>

                          <ArrowUpRight
                            size={20}
                            strokeWidth={1}
                            className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                          />
                        </motion.button>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* MENU FOOTER */}

              <div className="flex items-center justify-between border-t border-white/[0.10] pt-5">
                <span className="text-[7px] uppercase tracking-[0.35em] text-white/25">
                  Stuttgart
                </span>

                <span className="text-[7px] uppercase tracking-[0.35em] text-white/25">
                  Since 1948
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          STICKY NAVIGATION
      ===================================================== */}

      <motion.div
        initial={false}
        animate={showStickyNav ? "visible" : "hidden"}
        className={`fixed inset-x-0 top-4 z-[100] ${
          showStickyNav
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
          },
          hidden: {
            opacity: 0,
            y: -18,
          },
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <div className="mx-auto flex max-w-[1500px] justify-center px-4">
          <div className="flex items-center border border-white/15 bg-black/65 px-2 py-2 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <a
              href="#top"
              aria-label="Porsche Universe home"
              className="mr-2 flex h-8 w-8 items-center justify-center"
            >
              <Image
                src="/images/porsche-crest.svg"
                alt="Porsche"
                width={28}
                height={28}
                className="h-7 w-7 object-contain opacity-90"
              />
            </a>

            <div className="hidden items-center sm:flex">
              {navigation.map((item) => {
                const isActive =
                  activeSection === item.href;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`relative px-4 py-2 text-[9px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    {item.label}

                    <span
                      className={`absolute bottom-0 left-4 right-4 h-px bg-white transition-transform duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            <button
              type="button"
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              onClick={() =>
                setMenuOpen((previous) => !previous)
              }
              className="ml-1 flex h-8 w-8 items-center justify-center border border-white/15 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              {menuOpen ? (
                <X size={14} strokeWidth={1.2} />
              ) : (
                <Menu size={14} strokeWidth={1.2} />
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="relative z-20 flex min-h-[100svh] items-end"
      >
        <div className="mx-auto w-full max-w-[1500px] px-5 pb-7 sm:px-8 sm:pb-9 lg:px-10 lg:pb-11">
          <div className="max-w-[760px]">
            {/* EYEBROW */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="mb-5 flex items-center gap-3 sm:mb-6"
            >
              <span className="h-px w-7 bg-[#c41230]" />

              <span className="text-[8px] font-medium uppercase tracking-[0.35em] text-white/65">
                The Porsche Universe
              </span>
            </motion.div>

            {/* MAIN TITLE */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[17vw] font-light leading-[0.82] tracking-[-0.075em] text-white sm:text-[13vw] md:text-[10vw] lg:text-[8.2vw]"
            >
              PORSCHE
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-6 flex max-w-[560px] items-start justify-between gap-8 sm:mt-7"
            >
              <p className="max-w-[390px] text-[10px] leading-[1.85] text-white/58 sm:text-[11px]">
                A universe shaped by performance, design and
                engineering. Discover the machines, stories and
                experiences that define Porsche.
              </p>

              <span className="hidden pt-1 text-[8px] uppercase tracking-[0.3em] text-white/30 sm:block">
                1948 — 2026
              </span>
            </motion.div>
          </div>

          {/* =================================================
              HERO FOOTER
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.9,
            }}
            className="mt-10 flex items-end justify-between border-t border-white/[0.16] pt-4 sm:mt-12 sm:pt-5"
          >
            <div className="flex items-center gap-4 sm:gap-5">
              <span className="text-[7px] uppercase tracking-[0.3em] text-white/42 sm:text-[8px]">
                Stuttgart
              </span>

              <span className="h-px w-6 bg-white/20 sm:w-8" />

              <span className="text-[7px] uppercase tracking-[0.3em] text-white/42 sm:text-[8px]">
                Since 1948
              </span>
            </div>

            <button
              type="button"
              onClick={() => handleNavigation("#models")}
              className="group flex items-center gap-3 text-[7px] uppercase tracking-[0.3em] text-white/50 transition-colors duration-300 hover:text-white sm:text-[8px]"
            >
              <span>Explore</span>

              <span className="flex h-7 w-7 items-center justify-center border border-white/20 transition-all duration-300 group-hover:border-white/50">
                <ArrowDown
                  size={11}
                  strokeWidth={1}
                  className="transition-transform duration-500 group-hover:translate-y-1"
                />
              </span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* =====================================================
          BOTTOM FADE
      ===================================================== */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/35 to-transparent" />
    </section>
  );
}