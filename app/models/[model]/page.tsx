import type { Metadata } from "next";
import Link from "next/link";
import Porsche3D from "@/components/Porsche3D";
import ModelDesign from "@/components/ModelDesign";

type ModelData = {
  name: string;
  family: string;
  number: string;
  description: string;
  performance: string;
  power: string;
  topSpeed: string;
};

const models: Record<string, ModelData> = {
  "911": {
    name: "911 Turbo S",
    family: "911",
    number: "01",
    description:
      "A definitive expression of Porsche performance. The 911 Turbo S combines everyday usability with extraordinary acceleration, precision and unmistakable character.",
    performance: "2.5 s",
    power: "711 PS",
    topSpeed: "322 km/h",
  },

  "718": {
    name: "718 Cayman",
    family: "718",
    number: "02",
    description:
      "A mid-engine sports car engineered around balance, agility and pure driving involvement.",
    performance: "4.5 s",
    power: "300 PS",
    topSpeed: "275 km/h",
  },

  taycan: {
    name: "Taycan",
    family: "Taycan",
    number: "03",
    description:
      "Pure electric performance with the unmistakable soul of a Porsche sports car.",
    performance: "3.2 s",
    power: "435 PS",
    topSpeed: "230 km/h",
  },

  panamera: {
    name: "Panamera",
    family: "Panamera",
    number: "04",
    description:
      "A performance luxury sedan combining long-distance comfort with the dynamic character of a sports car.",
    performance: "3.2 s",
    power: "550 PS",
    topSpeed: "315 km/h",
  },

  macan: {
    name: "Macan",
    family: "Macan",
    number: "05",
    description:
      "A performance SUV with the driving dynamics, technology and unmistakable design language of Porsche.",
    performance: "3.3 s",
    power: "639 PS",
    topSpeed: "260 km/h",
  },

  cayenne: {
    name: "Cayenne",
    family: "Cayenne",
    number: "06",
    description:
      "A luxury performance SUV engineered to deliver Porsche dynamics without sacrificing versatility.",
    performance: "3.3 s",
    power: "659 PS",
    topSpeed: "305 km/h",
  },
};

type PageProps = {
  params: Promise<{
    model: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { model } = await params;

  const car = models[model.toLowerCase()];

  return {
    title: car
      ? `${car.name} — Porsche`
      : "Model — Porsche",

    description: car?.description,
  };
}

export default async function ModelPage({
  params,
}: PageProps) {
  const { model } = await params;

  const modelKey = model.toLowerCase();

  const car = models[modelKey];

  /*
   * INVALID MODEL
   */
  if (!car) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
        <div className="text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-white/40">
            Porsche
          </p>

          <h1 className="text-4xl font-light">
            Model not found
          </h1>

          <Link
            href="/#models"
            className="mt-8 inline-block border border-white/20 px-6 py-3 text-[10px] uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
          >
            Back to Collection
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="fixed left-0 top-0 z-50 w-full">
        <nav className="flex h-20 items-center justify-between px-6 md:px-10 lg:px-16">

          <Link
            href="/"
            className="text-lg font-semibold tracking-[0.28em]"
          >
            PORSCHE
          </Link>

          <Link
            href="/#models"
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/60 transition hover:text-white"
          >
            <span className="h-px w-6 bg-white/30 transition-all group-hover:w-10 group-hover:bg-white" />

            Collection
          </Link>

        </nav>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-screen overflow-hidden bg-[#050505]">

        {/* Background glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[40%]
            h-[45vh]
            w-[45vw]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/[0.025]
            blur-[100px]
          "
        />

        {/* -------------------------------------------------
            MODEL IDENTIFICATION
        ------------------------------------------------- */}

        <div className="absolute left-0 top-0 z-40 w-full px-6 pt-28 md:px-10 lg:px-16">
          <div className="flex items-center gap-4">

            <span className="text-[10px] tracking-[0.3em] text-white/35">
              {car.number}
            </span>

            <span className="h-px w-12 bg-white/15" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-white/45">
              {car.family}
            </span>

          </div>
        </div>

        {/* =================================================
            3D MODEL ZONE
        ================================================= */}

        {modelKey === "911" && (
          <div
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              top-[14%]
              z-10
              h-[55vh]
              md:top-[11%]
              md:h-[62vh]
            "
          >
            <Porsche3D />
          </div>
        )}

        {/* =================================================
            CAR NAME
        ================================================= */}

        <div
          className="
            absolute
            bottom-[22%]
            left-0
            z-30
            w-full
            px-6
            md:bottom-[21%]
            md:px-10
            lg:px-16
          "
        >

          <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-white/35">
            Porsche
          </p>

          <h1
            className="
              max-w-5xl
              text-[clamp(3.5rem,9vw,9rem)]
              font-light
              leading-[0.82]
              tracking-[-0.065em]
            "
          >
            {car.name}
          </h1>

        </div>

        {/* =================================================
            PERFORMANCE BAR
        ================================================= */}

        <div
          className="
            absolute
            bottom-0
            left-0
            z-40
            w-full
            border-t
            border-white/10
            bg-[#050505]
            px-6
            py-6
            md:px-10
            lg:px-16
          "
        >

          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">

            <p className="max-w-xl text-xs leading-6 text-white/40 md:text-sm md:leading-7">
              {car.description}
            </p>

            <div className="grid grid-cols-3 gap-6 md:gap-12">

              <div>
                <p className="text-[8px] uppercase tracking-[0.22em] text-white/25">
                  0–100 km/h
                </p>

                <p className="mt-2 text-lg font-light md:text-xl">
                  {car.performance}
                </p>
              </div>

              <div>
                <p className="text-[8px] uppercase tracking-[0.22em] text-white/25">
                  Power
                </p>

                <p className="mt-2 text-lg font-light md:text-xl">
                  {car.power}
                </p>
              </div>

              <div>
                <p className="text-[8px] uppercase tracking-[0.22em] text-white/25">
                  Top speed
                </p>

                <p className="mt-2 text-lg font-light md:text-xl">
                  {car.topSpeed}
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Scroll indicator */}

        <div className="absolute bottom-32 left-1/2 z-40 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">

          <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
            Scroll
          </span>

          <div className="h-8 w-px bg-white/20" />

        </div>

      </section>

      {/* =====================================================
          DESIGN PHILOSOPHY
      ===================================================== */}

      {modelKey === "911" && <ModelDesign />}

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section className="border-t border-white/10 px-6 py-32 md:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                The experience
              </p>

              <h2 className="mt-6 max-w-md text-4xl font-light leading-tight tracking-[-0.03em] md:text-6xl">
                Designed around
                the driver.
              </h2>

            </div>

            <div className="max-w-2xl">

              <p className="text-base leading-8 text-white/50 md:text-lg">
                Every Porsche is shaped by the relationship between
                performance, engineering and the person behind the
                wheel. This experience brings those details closer,
                from the proportions of the body to the technology
                beneath it.
              </p>

              <div className="mt-16 grid grid-cols-2 border-t border-white/10">

                <div className="border-r border-white/10 py-8 pr-8">

                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                    Architecture
                  </p>

                  <p className="mt-3 text-sm text-white/60">
                    Performance engineering
                  </p>

                </div>

                <div className="py-8 pl-8">

                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                    Philosophy
                  </p>

                  <p className="mt-3 text-sm text-white/60">
                    Form follows function
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          COLLECTION CTA
      ===================================================== */}

      <section className="border-t border-white/10 px-6 py-24 md:px-10 lg:px-16">

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div>

            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              Porsche Collection
            </p>

            <h2 className="mt-4 text-3xl font-light md:text-5xl">
              Discover another model.
            </h2>

          </div>

          <Link
            href="/#models"
            className="group flex w-fit items-center gap-5 text-[10px] uppercase tracking-[0.25em] text-white/60 transition hover:text-white"
          >

            <span className="h-px w-8 bg-white/30 transition-all group-hover:w-14 group-hover:bg-white" />

            View collection

          </Link>

        </div>

      </section>

    </main>
  );
}