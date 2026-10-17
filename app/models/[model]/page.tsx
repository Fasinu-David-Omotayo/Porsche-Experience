import type { Metadata } from "next";
import Link from "next/link";
import Car3D from "@/components/Car3D";
import ModelDesign from "@/components/ModelDesign";
import { modelThemes } from "@/lib/modelThemes";

type ModelData = {
  name: string;
  family: string;
  number: string;
  description: string;
  performance: string;
  power: string;
  topSpeed: string;
  category: string;
  image?: string;
  modelPath: string;
  scale: number;
};

const models: Record<string, ModelData> = {
  "911": {
    name: "911 Turbo S",
    family: "911",
    number: "01",
    category: "Ultimate sports car",
    description:
      "A definitive expression of Porsche performance. The 911 Turbo S combines everyday usability with extraordinary acceleration, precision and unmistakable character.",
    performance: "2.5 s",
    power: "711 PS",
    topSpeed: "322 km/h",
    modelPath: "/models/porsche_911_gt3-optimized.glb",
    scale: 75,
  },

  "718": {
    name: "718 Cayman",
    family: "718",
    number: "02",
    category: "Mid-engine sports car",
    description:
      "A mid-engine sports car engineered around balance, agility and pure driving involvement.",
    performance: "4.5 s",
    power: "300 PS",
    topSpeed: "275 km/h",
    modelPath: "/models/718-optimized.glb",
  scale: 75,
  },

  taycan: {
    name: "Taycan",
    family: "Taycan",
    number: "03",
    category: "Electric performance",
    description:
      "Pure electric performance with the unmistakable soul of a Porsche sports car.",
    performance: "3.2 s",
    power: "435 PS",
    topSpeed: "230 km/h",
      modelPath: "/models/taycan-optimized.glb",
  scale: 75,
  },

  panamera: {
    name: "Panamera",
    family: "Panamera",
    number: "04",
    category: "Performance luxury",
    description:
      "A performance luxury sedan combining long-distance comfort with the dynamic character of a sports car.",
    performance: "3.2 s",
    power: "550 PS",
    topSpeed: "315 km/h",
      modelPath: "/models/panamera-optimized.glb",
  scale: 75,
  },

  macan: {
    name: "Macan",
    family: "Macan",
    number: "05",
    category: "Performance SUV",
    description:
      "A performance SUV with the driving dynamics, technology and unmistakable design language of Porsche.",
    performance: "3.3 s",
    power: "639 PS",
    topSpeed: "260 km/h",
      modelPath: "/models/macan-optimized.glb",
  scale: 75,
  },

  cayenne: {
    name: "Cayenne",
    family: "Cayenne",
    number: "06",
    category: "Luxury performance SUV",
    description:
      "A luxury performance SUV engineered to deliver Porsche dynamics without sacrificing versatility.",
    performance: "3.3 s",
    power: "659 PS",
    topSpeed: "305 km/h",
      modelPath: "/models/cayenne-optimized.glb",
  scale: 75,
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
    title: car ? `${car.name} — Porsche Universe` : "Model — Porsche Universe",
    description: car?.description,
  };
}

function ModelStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-l border-white/10 pl-4 min-w-0">
      <p className="text-[7px] uppercase tracking-[0.28em] text-white/30">
        {label}
      </p>

      <p className="mt-2 text-xl font-light tracking-[-0.03em] text-white sm:text-2xl">
        {value}
      </p>
    </div>
  );
}

function EditorialSection({
  number,
  eyebrow,
  title,
  children,
}: {
  number: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/[0.08] px-6 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44">
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.35fr_1fr] lg:gap-24">
        <div className="flex items-start gap-4">
          <span className="text-[8px] tracking-[0.3em] text-white/20">
            {number}
          </span>

          <span className="mt-[3px] h-px w-8 bg-white/10" />

          <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
            {eyebrow}
          </span>
        </div>

        <div>
          <h2 className="max-w-[950px] text-[clamp(3rem,6.5vw,7rem)] font-light leading-[0.86] tracking-[-0.075em] text-white">
            {title}
          </h2>

          <div className="mt-12 max-w-2xl text-[11px] leading-[2] text-white/35 sm:text-xs sm:leading-[2.05]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function ModelPage({
  params,
}: PageProps) {
  const { model } = await params;

  const modelKey = model.toLowerCase();
  const car = models[modelKey];

  const theme =
  modelThemes[
    modelKey as keyof typeof modelThemes
  ];

  if (!car) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
        <div className="text-center">
          <p className="mb-6 text-[8px] uppercase tracking-[0.4em] text-white/30">
            Porsche Universe
          </p>

          <h1 className="text-4xl font-light tracking-[-0.04em]">
            Model not found
          </h1>

          <Link
            href="/#models"
            className="mt-8 inline-flex items-center gap-4 border border-white/15 px-6 py-3 text-[8px] uppercase tracking-[0.28em] text-white/55 transition-all duration-500 hover:border-white/50 hover:bg-white hover:text-black"
          >
            <span className="h-px w-5 bg-current" />
            Back to Collection
          </Link>
        </div>
      </main>
    );
  }

  const is911 = modelKey === "911";

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <header className="fixed inset-x-0 top-0 z-[70] px-5 pt-5 sm:px-7 lg:px-10">
        <nav className="mx-auto flex h-12 max-w-[1500px] items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Return to Porsche Universe"
          >
            <span className="flex h-9 w-9 items-center justify-center ">
              <img src="/images/porsche-crest.svg" alt="" />
            </span>

            <span className="hidden text-[8px] tracking-[0.42em] text-white/60 sm:block">
              PORSCHE
            </span>
          </Link>
          <Link
            href="/#models"
            className="group flex items-center gap-3 text-[7px] uppercase tracking-[0.32em] text-white/35 transition-colors duration-300 hover:text-white"
          >
            <span className="h-px w-5 bg-white/20 transition-all duration-500 group-hover:w-9 group-hover:bg-white" />

            Collection
          </Link>
        </nav>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-screen overflow-hidden bg-[#050505]">
        {/* Ambient light */}

       <div
  className="pointer-events-none absolute left-1/2 top-[42%] z-0 h-[90vw] w-[90vw] max-h-[800px] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
  style={{
    background: theme.glow,
  }}
/>
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.55)_100%)]" />

        {/* Model identifier */}

        <div className="absolute left-0 top-0 z-30 w-full px-5 pt-24 sm:px-8 sm:pt-28 lg:px-12">
          <div className="flex items-center gap-4">
            <span className="text-[8px] tracking-[0.3em] text-white/25">
              {car.number}
            </span>

            <span className="h-px w-8 bg-white/10" />

            <span className="text-[8px] uppercase tracking-[0.3em] text-white/35">
              {car.family}
            </span>

            <span className="text-[8px] uppercase tracking-[0.3em] text-white/15">
              / {car.category}
            </span>
          </div>
        </div>

        {/* =======================================================
                3D CAR
            ======================================================= */}

                  <div
  className="
    absolute
    inset-x-0
    z-10
    top-[14%]
    h-[38vh]

    xs:h-[42vh]

    sm:top-[12%]
    sm:h-[48vh]

    md:top-[10%]
    md:h-[54vh]

    lg:top-[6%]
    lg:h-[62vh]

    xl:h-[70vh]

    2xl:h-[76vh]
  "
>
                    <Car3D model={modelKey as any} />
                  </div>

        {/* =======================================================
            CAR TITLE
        ======================================================= */}

        <div
  className="
    absolute
    left-0
    z-30
    w-full

    bottom-[18%]

    sm:bottom-[20%]

    md:bottom-[22%]

    lg:bottom-[23%]

    px-5
    sm:px-8
    lg:px-12
  "
>
          <div className="mx-auto max-w-[1500px]">
            <p className="mb-4 text-[8px] uppercase tracking-[0.42em] text-white/30">
              Porsche
            </p>

            <h1
  className="
    max-w-[1200px]
    text-[clamp(2.6rem,10vw,10.5rem)]
    font-light
    leading-[0.82]
    tracking-[-0.08em]
    text-white
  "
>
              {car.name}
            </h1>

            <p
  className="mt-5 text-[10px] uppercase tracking-[0.4em]"
  style={{
    color: theme.accent,
  }}
>
  {theme.headline}
</p>

<p className="mt-4 max-w-[580px] text-[11px] leading-[1.9] text-white/40 sm:text-xs">
  {theme.subheadline}
</p>
          </div>
        </div>

        {/* =======================================================
            PERFORMANCE BAR
        ======================================================= */}

        <div className="absolute bottom-0 left-0 z-40 w-full border-t border-white/[0.08] bg-[#050505]/95 px-5 py-5 backdrop-blur-md sm:px-8 sm:py-6 lg:px-12">
          <div className="mx-auto flex max-w-[1500px] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <p className="max-w-[570px] text-[10px] leading-[1.9] text-white/35 sm:text-[11px]">
              {car.description}
            </p>

            <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-10 lg:w-auto">
              <ModelStat label="0–100 km/h" value={car.performance} />

              <ModelStat label="Power" value={car.power} />

              <ModelStat label="Top speed" value={car.topSpeed} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}

        <div className="absolute bottom-[14%] left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
          <span className="text-[7px] uppercase tracking-[0.4em] text-white/20">
            Explore
          </span>

          <span className="h-10 w-px bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* =========================================================
          911 DESIGN
      ========================================================= */}

      {is911 && <ModelDesign />}

      {/* =========================================================
          PHILOSOPHY
      ========================================================= */}

      <EditorialSection
        number="02"
        eyebrow="Philosophy"
        title={
          <>
            Form follows
            <br />
            <span className="text-white/25">function.</span>
          </>
        }
      >
        <p>
          Porsche design is not decoration. Every surface, proportion and
          opening has a purpose. The silhouette is shaped by performance,
          airflow and the relationship between the driver and the road.
        </p>

        <p className="mt-8">
          The result is a design language that can evolve without losing its
          identity. Different generations, different technologies, one
          unmistakable character.
        </p>
      </EditorialSection>

      {/* =========================================================
          PERFORMANCE
      ========================================================= */}

      <section className="border-t border-white/[0.08] bg-[#08090a] px-6 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[0.45fr_1fr] lg:gap-24">
            <div>
              <p className="text-[8px] uppercase tracking-[0.4em] text-white/25">
                Performance
              </p>

              <p className="mt-6 text-[clamp(3rem,6vw,6rem)] font-light leading-[0.82] tracking-[-0.07em]">
                Numbers
                <br />
                <span className="text-white/22">become feeling.</span>
              </p>
            </div>

            <div className="grid border-t border-white/[0.08] sm:grid-cols-3">
              <div className="border-b border-white/[0.08] py-8 sm:border-b-0 sm:border-r sm:pr-8">
                <p className="text-[7px] uppercase tracking-[0.3em] text-white/25">
                  Acceleration
                </p>

                <p className="mt-6 text-[clamp(2.5rem,5vw,5rem)] font-light leading-none tracking-[-0.07em]">
                  {car.performance}
                </p>

                <p className="mt-4 text-[9px] text-white/25">
                  0–100 km/h
                </p>
              </div>

              <div className="border-b border-white/[0.08] py-8 sm:border-b-0 sm:border-r sm:px-8">
                <p className="text-[7px] uppercase tracking-[0.3em] text-white/25">
                  Power
                </p>

                <p className="mt-6 text-[clamp(2.5rem,5vw,5rem)] font-light leading-none tracking-[-0.07em]">
                  {car.power}
                </p>

                <p className="mt-4 text-[9px] text-white/25">
                  Maximum output
                </p>
              </div>

              <div className="py-8 sm:pl-8">
                <p className="text-[7px] uppercase tracking-[0.3em] text-white/25">
                  Velocity
                </p>

                <p className="mt-6 text-[clamp(2.5rem,5vw,5rem)] font-light leading-none tracking-[-0.07em]">
                  {car.topSpeed}
                </p>

                <p className="mt-4 text-[9px] text-white/25">
                  Maximum speed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERIENCE
      ========================================================= */}

      <EditorialSection
        number="03"
        eyebrow="The experience"
        title={
          <>
            Designed around
            <br />
            <span className="text-white/25">the driver.</span>
          </>
        }
      >
        <p>
          Every Porsche is shaped around a simple idea: performance should not
          exist separately from the person experiencing it.
        </p>

        <p className="mt-8">
          Steering, braking, acceleration, balance and sound all become part of
          one continuous interaction between machine and driver.
        </p>

        <div className="mt-12 grid border-t border-white/[0.08] sm:grid-cols-2">
          <div className="border-b border-white/[0.08] py-7 sm:border-b-0 sm:border-r sm:pr-8">
            <p className="text-[7px] uppercase tracking-[0.3em] text-white/25">
              Architecture
            </p>

            <p className="mt-3 text-[10px] text-white/55">
              Performance engineering
            </p>
          </div>

          <div className="py-7 sm:pl-8">
            <p className="text-[7px] uppercase tracking-[0.3em] text-white/25">
              Philosophy
            </p>

            <p className="mt-3 text-[10px] text-white/55">
              Form follows function
            </p>
          </div>
        </div>
      </EditorialSection>

      {/* =========================================================
          FINAL STATEMENT
      ========================================================= */}

      <section className="relative overflow-hidden border-t border-white/[0.08] px-6 py-32 sm:px-8 sm:py-40 lg:px-12 lg:py-52">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.025),transparent_45%)]" />

        <div className="relative mx-auto max-w-[1440px]">
          <p className="text-[8px] uppercase tracking-[0.4em] text-white/20">
            Porsche Universe
          </p>

          <h2 className="mt-10 max-w-[1150px] text-[clamp(3.5rem,8vw,9rem)] font-light leading-[0.8] tracking-[-0.085em]">
            Different worlds.
            <br />
            <span className="text-white/22">One DNA.</span>
          </h2>

          <div className="mt-14 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-[400px] text-[10px] leading-[1.9] text-white/30">
              Discover the wider Porsche collection and find the machine that
              speaks to you.
            </p>

            <Link
              href="/#models"
              className="group flex w-fit items-center gap-4 text-[8px] uppercase tracking-[0.32em] text-white/45 transition-colors duration-300 hover:text-white"
            >
              <span className="h-px w-7 bg-white/20 transition-all duration-500 group-hover:w-12 group-hover:bg-white" />

              View collection
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-white/[0.08] bg-[#030404] px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[7px] uppercase tracking-[0.35em] text-white/15">
            Porsche Universe
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[7px] uppercase tracking-[0.3em] text-white/15">
              {car.family}
            </span>

            <span className="h-px w-5 bg-white/10" />

            <span className="text-[7px] uppercase tracking-[0.3em] text-white/15">
              Stuttgart
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}