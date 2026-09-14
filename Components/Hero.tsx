"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowDown,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";


const navigation = [
  { label: "Models", href: "#models" },
  { label: "Heritage", href: "#heritage" },
  { label: "Technology", href: "#technology" },
  { label: "Experience", href: "#experience" },
];

export default function Hero() {
  const heroRef = useRef(null);

  const [showStickyNav, setShowStickyNav] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  /* =========================================================
     SCROLL + ACTIVE SECTION
  ========================================================= */

useEffect(() => {
  let ticking = false;

  const handleScroll = () => {
    if (ticking) return;

    ticking = true;

    requestAnimationFrame(() => {
      const scrollY = window.scrollY;

      const shouldShow =
        scrollY > window.innerHeight * 0.95;

      setShowStickyNav((prev) =>
        prev === shouldShow ? prev : shouldShow
      );

      const sections = navigation
        .map((item) =>
          document.querySelector(item.href)
        )
        .filter(Boolean);

      let currentSection = "";

      sections.forEach((section) => {
        const rect =
          section.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight * 0.35 &&
          rect.bottom >=
            window.innerHeight * 0.35
        ) {
          currentSection = `#${section.id}`;
        }
      });

      setActiveSection((prev) =>
        prev === currentSection
          ? prev
          : currentSection
      );

      ticking = false;
    });
  };

  handleScroll();

  window.addEventListener(
    "scroll",
    handleScroll,
    { passive: true }
  );

  return () =>
    window.removeEventListener(
      "scroll",
      handleScroll
    );
}, []);


      

  /* =========================================================
     LOCK BODY SCROLL WHEN MENU IS OPEN
  ========================================================= */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =========================================================
     CLOSE MENU WITH ESCAPE
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* =========================================================
     HERO PARALLAX
  ========================================================= */

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "12%"]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.02]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-8%"]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.75],
    [1, 0]
  );

  /* =========================================================
     MENU NAVIGATION
  ========================================================= */

  const handleNavigation = (href) => {
    setMenuOpen(false);

    setTimeout(() => {
      const element = document.querySelector(href);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-[#050505] text-white"
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
        }}
        className="absolute inset-[-7%] will-change-transform transform-gpu"
      >
        <Image
          src="/images/optimized/hero-porsche.webp"
          alt="Porsche"
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover object-center"
        />
      </motion.div>

      {/* =====================================================
          CINEMATIC OVERLAYS
      ===================================================== */}

      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.54)_30%,rgba(0,0,0,0.28)_62%,rgba(0,0,0,0.38)_100%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.08)_28%,rgba(0,0,0,0.05)_55%,rgba(0,0,0,0.86)_100%)]" />

      {/* =====================================================
          3D PORSCHE MODEL

          IMPORTANT:
          The 3D model sits behind the text but above the
          background image.
      ===================================================== */}

      

      {/* =====================================================
          FULL SCREEN MENU
      ===================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.08),transparent_45%)]" />

            <div className="relative flex min-h-screen flex-col px-6 py-6 sm:px-10">

              {/* MENU HEADER */}

              <div className="flex items-center justify-between">
                <a
                  href="#top"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center"
                >
                  <Image
                    src="/images/porsche-crest.svg"
                    alt="Porsche"
                    width={42}
                    height={42}
                    className="h-10 w-10 object-contain"
                  />

                  <span className="ml-3 text-[9px] tracking-[0.4em] text-white/80">
                    PORSCHE
                  </span>
                </a>

                <button
                  type="button"
                  aria-label="Close navigation menu"
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen(false)}
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-full
                    border border-white/[0.16]
                    bg-white/[0.06]
                    text-white/80
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:bg-white/[0.12]
                    hover:text-white
                  "
                >
                  <X size={18} strokeWidth={1.2} />
                </button>
              </div>

              {/* MENU CONTENT */}

              <div className="flex flex-1 items-center">
                <div className="w-full">
                  <p className="mb-8 text-[8px] uppercase tracking-[0.4em] text-white/30">
                    Explore the universe
                  </p>

                  <nav className="flex flex-col">
                    {navigation.map((item, index) => {
                      const isActive =
                        activeSection === item.href;

                      return (
                        <motion.button
                          key={item.label}
                          type="button"
                          initial={{
                            opacity: 0,
                            x: -30,
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
                          className="group flex items-center justify-between border-b border-white/[0.08] py-5 text-left"
                        >
                          <div className="flex items-center gap-5">
                            <span className="text-[8px] tracking-[0.25em] text-white/20">
                              0{index + 1}
                            </span>

                            <span
                              className={`
                                text-[clamp(2rem,8vw,4rem)]
                                font-light
                                tracking-[-0.05em]
                                transition-colors
                                duration-300
                                ${
                                  isActive
                                    ? "text-white"
                                    : "text-white/55 group-hover:text-white"
                                }
                              `}
                            >
                              {item.label}
                            </span>
                          </div>

                          <ArrowUpRight
                            size={20}
                            strokeWidth={1}
                            className="
                              text-white/20
                              transition-all
                              duration-300
                              group-hover:translate-x-1
                              group-hover:-translate-y-1
                              group-hover:text-white
                            "
                          />
                        </motion.button>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* MENU FOOTER */}

              <div className="flex items-center justify-between border-t border-white/[0.08] pt-5">
                <span className="text-[7px] uppercase tracking-[0.3em] text-white/25">
                  Stuttgart
                </span>

                <span className="text-[7px] uppercase tracking-[0.3em] text-white/25">
                  Since 1948
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          STICKY GLASS NAV
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
      y: -20,
    },
  }}
  transition={{
    duration: 0.3,
  }}
>
        <div className="mx-auto flex max-w-[1480px] justify-center px-4">
          <div
            className="
              flex items-center gap-1
              rounded-full
              border border-white/[0.12]
              bg-black/[0.42]
              px-2 py-2
              shadow-[0_12px_50px_rgba(0,0,0,0.45)]
              backdrop-blur-2xl
              backdrop-saturate-150
            "
          >
            <a
              href="#top"
              aria-label="Porsche Universe home"
              className="
                mr-2
                flex h-8 w-8
                items-center justify-center
                rounded-full
                transition-opacity
                hover:opacity-80
              "
            >
              <Image
                src="/images/porsche-crest.svg"
                alt="Porsche"
                width={28}
                height={28}
                className="h-7 w-7 object-contain opacity-90"
              />
            </a>

            {navigation.map((item) => {
              const isActive =
                activeSection === item.href;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`
                    relative
                    rounded-full
                    px-4 py-2
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "text-white"
                        : "text-white/55 hover:text-white"
                    }
                  `}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="
                        absolute
                        inset-0
                        -z-10
                        rounded-full
                        border
                        border-white/[0.16]
                        bg-white/[0.07]
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_4px_18px_rgba(0,0,0,0.18)]
                        backdrop-blur-md
                      "
                    />
                  )}

                  <span className="relative z-10">
                    {item.label}
                  </span>
                </a>
              );
            })}

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
              className="
                ml-1
                flex h-8 w-8
                items-center justify-center
                rounded-full
                border border-white/[0.14]
                bg-white/[0.055]
                text-white/70
                transition-all
                duration-300
                hover:border-white/30
                hover:bg-white/[0.12]
                hover:text-white
              "
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
          MAIN NAVIGATION
      ===================================================== */}

      <header className="absolute inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8">
        <nav className="mx-auto flex h-[58px] max-w-[1480px] items-center justify-between">

          <a
            href="#top"
            aria-label="Porsche Universe home"
            className="group flex shrink-0 items-center"
          >
            <Image
              src="/images/porsche-crest.svg"
              alt="Porsche"
              width={44}
              height={44}
              className="h-10 w-10 object-contain opacity-95 transition-transform duration-500 group-hover:scale-105 sm:h-11 sm:w-11"
            />

            <span className="ml-3 hidden text-[10px] font-medium tracking-[0.38em] text-white sm:block">
              PORSCHE
            </span>
          </a>

          <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
            <div
              className="
                flex items-center gap-0.5
                rounded-full
                border border-white/[0.14]
                bg-black/[0.20]
                px-1 py-1
                shadow-[0_8px_30px_rgba(0,0,0,0.18)]
                backdrop-blur-xl
              "
            >
              {navigation.map((item) => {
                const isActive =
                  activeSection === item.href;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`
                      relative
                      rounded-full
                      px-3 py-1.5
                      text-[12px]
                      font-normal
                      uppercase
                      leading-none
                      tracking-[0.14em]
                      transition-all
                      duration-300
                      xl:px-4
                      ${
                        isActive
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                      }
                    `}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="heroActiveNav"
                        className="
                          absolute
                          inset-0
                          -z-10
                          rounded-full
                          border
                          border-white/[0.14]
                          bg-white/[0.075]
                          shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                          backdrop-blur-md
                        "
                      />
                    )}

                    <span className="relative z-10">
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="ml-auto flex items-center">
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
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                border border-white/[0.18]
                bg-white/[0.055]
                text-white/80
                shadow-[0_6px_24px_rgba(0,0,0,0.16)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-white/30
                hover:bg-white/[0.12]
                hover:text-white
                sm:h-10 sm:w-10
              "
            >
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{
                      rotate: -90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: 90,
                      opacity: 0,
                    }}
                  >
                    <X
                      size={15}
                      strokeWidth={1.2}
                    />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      rotate: 90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: -90,
                      opacity: 0,
                    }}
                  >
                    <Menu
                      size={15}
                      strokeWidth={1.2}
                    />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

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
        <div className="mx-auto w-full max-w-[1480px] px-5 pb-7 sm:px-8 sm:pb-9 lg:px-10 lg:pb-11">
          <div className="max-w-[720px]">

            <motion.p
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
              className="mb-5 text-[8px] font-medium uppercase tracking-[0.32em] text-white/55 sm:mb-6"
            >
              The Porsche Universe
            </motion.p>

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
              className="font-light leading-[0.88] tracking-[-0.065em] text-white text-[18vw] sm:text-[13vw] md:text-[11vw] lg:text-[8.5vw]"
            >
              PORSCHE
            </motion.h1>

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
              className="mt-6 sm:mt-7"
            >
              <p className="max-w-[360px] text-[10px] leading-[1.8] text-white/60 sm:text-[11px]">
                A universe shaped by performance, design and
                engineering. Discover the machines, stories and
                experiences that define Porsche.
              </p>
            </motion.div>
          </div>

          {/* BOTTOM INFORMATION */}

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
            className="mt-10 flex items-center justify-between border-t border-white/[0.14] pt-4 sm:mt-12 sm:pt-5"
          >
            <div className="flex items-center gap-4 sm:gap-5">
              <span className="text-[7px] uppercase tracking-[0.28em] text-white/40 sm:text-[8px]">
                Stuttgart
              </span>

              <span className="h-px w-6 bg-white/20 sm:w-8" />

              <span className="text-[7px] uppercase tracking-[0.28em] text-white/40 sm:text-[8px]">
                Since 1948
              </span>
            </div>

            <button
              type="button"
              onClick={() => handleNavigation("#models")}
              className="group flex items-center gap-2 text-[7px] uppercase tracking-[0.28em] text-white/45 transition-colors duration-300 hover:text-white sm:text-[8px]"
            >
              Scroll

              <ArrowDown
                size={11}
                strokeWidth={1}
                className="transition-transform duration-500 group-hover:translate-y-1"
              />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* =====================================================
          BOTTOM ATMOSPHERE
      ===================================================== */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
}