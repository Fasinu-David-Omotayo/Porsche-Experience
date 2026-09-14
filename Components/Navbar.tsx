"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-8 py-6 flex items-center justify-between">

        <h1 className="text-white text-2xl font-bold tracking-[0.3em]">
          PORSCHE
        </h1>

        <nav className="hidden md:flex gap-10 text-white/70 uppercase text-sm tracking-widest">
          <a href="#">Home</a>
          <a href="#cars">Cars</a>
          <a href="#">Experience</a>
        </nav>

      </div>
    </header>
  );
}