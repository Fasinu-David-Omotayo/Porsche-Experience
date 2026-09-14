"use client";

import Link from "next/link";

export default function CarCard({ car }: any) {
  return (
    <Link href={`/cars/${car.slug}`}>
      <div className="group overflow-hidden rounded-3xl bg-[#101010]">

        <div className="overflow-hidden">
          <img
            src={car.image}
            alt={car.name}
            className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110"
          />
        </div>

        <div className="p-6">
          <h3 className="text-2xl text-white">
            {car.name}
          </h3>

          <p className="text-white/60 mt-2">
            {car.power}
          </p>
        </div>

      </div>
    </Link>
  );
}