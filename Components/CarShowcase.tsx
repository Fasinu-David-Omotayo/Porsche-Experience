"use client";

import Link from "next/link";
import { cars } from "@/data/cars";

export default function CarShowcase() {
  return (
    <section className="bg-black px-10 py-32">
      <div className="mb-16">
        <h2 className="text-6xl text-white">
          Porsche Collection
        </h2>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {cars.map((car) => (
          <Link
            key={car.id}
            href={`/cars/${car.id}`}
            className="group"
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src={car.image}
                alt={car.name}
                className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="mt-6">
              <h3 className="text-3xl text-white">
                {car.name}
              </h3>

              <p className="text-white/60">
                {car.power}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}