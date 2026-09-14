import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-[#08090a] text-white">
      <header className="px-6 pt-6 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between border-b border-white/10 pb-5">
          <Link
            href="/"
            className="text-[11px] font-medium tracking-[0.5em]"
          >
            PORSCHE
          </Link>

          <span className="text-[7px] uppercase tracking-[0.35em] text-white/30">
            The Porsche Universe
          </span>
        </div>
      </header>

      <section className="flex flex-1 items-center px-6 py-20 sm:px-10 lg:px-14">
        <div className="mx-auto w-full max-w-[1280px]">
          <p className="mb-6 text-[8px] uppercase tracking-[0.4em] text-white/30">
            Error 404
          </p>

          <h1 className="text-[clamp(6rem,18vw,15rem)] font-light leading-[0.72] tracking-[-0.09em]">
            404
          </h1>

          <div className="mt-10 max-w-[480px]">
            <h2 className="text-2xl font-light tracking-[-0.03em]">
              This road does not exist.
            </h2>

            <p className="mt-4 text-[11px] leading-6 text-white/40">
              The page you are looking for may have moved, disappeared, or
              never existed in this universe.
            </p>

            <Link
              href="/"
              className="group mt-8 inline-flex items-center gap-3 border-b border-white/25 pb-3 text-[8px] uppercase tracking-[0.3em] text-white/60 transition-colors hover:border-white hover:text-white"
            >
              <ArrowLeft
                size={12}
                strokeWidth={1.2}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />

              Return to the universe
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-6 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1280px] justify-between">
          <span className="text-[7px] uppercase tracking-[0.3em] text-white/25">
            Porsche Universe
          </span>

          <span className="text-[7px] uppercase tracking-[0.3em] text-white/25">
            Stuttgart
          </span>
        </div>
      </footer>
    </main>
  );
}