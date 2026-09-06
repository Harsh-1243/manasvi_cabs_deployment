"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const CARS = [
  {
    id: 1,
    image: "/images/dzire.png",
    brand: "Maruti Suzuki",
    model: "Swift Dzire",
    features: [
      "AC",
      "Comfort Ride",
      "4 Seater",
      "City Ride",
      "Diesel/Petrol",
      "Family Ride",
    ],
    description: "Perfect for Daily & Local Travel in Gujarat",
    url: "https://wa.me/918347112150?text=I%20want%20to%20book%20Swift%20Dzire",
  },
  {
    id: 2,
    image: "/images/aura.png",
    brand: "Hyundai",
    model: "Aura",
    features: [
      "AC",
      "Smooth Drive",
      "4 Seater",
      "City Ride",
      "Petrol/CNG",
      "Comfort",
    ],
    description: "Ideal for Comfortable City Trips",
    url: "https://wa.me/918347112150?text=I%20want%20to%20book%20Hyundai%20Aura",
  },
  {
    id: 3,
    image: "/images/ertica.png",
    brand: "Maruti Suzuki",
    model: "Ertiga",
    features: [
      "AC",
      "Spacious",
      "6 Seater",
      "Family Trip",
      "Diesel",
      "Outstation",
    ],
    description: "Best for Family & Group Travel",
    url: "https://wa.me/918347112150?text=I%20want%20to%20book%20Maruti%20Ertiga",
  },
  {
    id: 4,
    image: "/images/innova.png",
    brand: "Toyota",
    model: "Innova",
    features: ["AC", "Premium", "8 Seater", "Diesel", "Long Trips", "Luxury"],
    description: "Perfect for Long Distance Travel",
    url: "https://wa.me/918347112150?text=I%20want%20to%20book%20Toyota%20Innova",
  },
  {
    id: 5,
    image: "/images/innova_crysta.png",
    brand: "Toyota",
    model: "Innova Crysta",
    features: [
      "AC",
      "Luxury",
      "8 Seater",
      "Diesel",
      "Premium Ride",
      "Outstation",
    ],
    description: "Luxury & Premium Travel Experience",
    url: "https://wa.me/918347112150?text=I%20want%20to%20book%20Toyota%20Innova%20Crysta",
  },
  {
    id: 6,
    image: "/images/tigor.png",
    brand: "Tata",
    model: "Tigor",
    features: [
      "AC",
      "Budget Ride",
      "4 Seater",
      "Petrol/CNG",
      "Daily Use",
      "Affordable",
    ],
    description: "Best for Budget Friendly Travel",
    url: "https://wa.me/918347112150?text=I%20want%20to%20book%20Tata%20Tigor",
  },
];

const CarsCards = () => {
  return (
    <section
      className="relative bg-white overflow-hidden py-16 md:py-12"
      aria-label="Manasvi Cabs Taxi Fleet"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-(--color-brand-black) bg-(--color-dark-yellow) text-xs font-bold tracking-widest uppercase text-(--color-brand-black) mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-(--color-brand-black)" />
            Our Fleet
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-(family-name:--font-accent) leading-[1.1] text-(--color-brand-black) mb-4">
            Choose Your Perfect Taxi in Gujarat
          </h1>

          <p className="text-(--color-gray-dark)/70 text-base sm:text-lg max-w-5xl mx-auto">
            From budget-friendly city rides to premium outstation travel —
            Manasvi Cabs offers the perfect vehicle for every journey across
            Ahmedabad, Surat, Vadodara, Rajkot, Bhavnagar, Palitana, and Talaja.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARS.map((car) => (
            <div
              key={car.id}
              className="bg-white border-2 border-(--color-brand-black)/10 rounded-2xl overflow-hidden"
            >
              <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model} - Taxi Service in Gujarat`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />

                <div className="absolute top-3 left-3 bg-(--color-dark-yellow) text-(--color-brand-black) px-3.5 py-1.5 rounded-lg font-bold text-xs uppercase tracking-wide">
                  {car.brand}
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-extrabold text-(--color-brand-black) mb-3">
                  {car.model}
                </h2>

                <div className="flex flex-wrap gap-2 mb-4">
                  {car.features.slice(0, 6).map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2.5 py-1 bg-gray-100 rounded-lg text-xs font-semibold text-(--color-gray-dark)"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-(--color-gray-dark)/70 font-semibold mb-5 py-3 border-t border-b border-dashed border-(--color-brand-black)/15">
                  {car.description}
                </p>

                <Link
                  href={car.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-(--color-dark-yellow) text-(--color-brand-black) border-2 border-(--color-brand-black) rounded-xl font-bold text-sm uppercase tracking-wide shadow-[4px_4px_0px_var(--color-brand-black)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_var(--color-brand-black)] transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
                  Book on WhatsApp
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarsCards;
