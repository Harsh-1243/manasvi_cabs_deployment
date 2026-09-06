"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

const HIGHLIGHTS = [
  "Professional & Verified Drivers",
  "24/7 Taxi Booking Support",
  "Well-Maintained Fleet",
  "Transparent Pricing",
];

const TaxiIllustration = () => (
  <svg viewBox="0 0 420 280" className="w-full h-auto">
    <g
      stroke="var(--color-brand-black)"
      strokeWidth="5"
      strokeLinecap="round"
      opacity="0.25"
    >
      <line x1="10" y1="120" x2="55" y2="120" />
      <line x1="10" y1="150" x2="40" y2="150" />
      <line x1="10" y1="180" x2="50" y2="180" />
    </g>

    <ellipse
      cx="230"
      cy="238"
      rx="150"
      ry="14"
      fill="var(--color-brand-black)"
      opacity="0.12"
    />

    {/* car body */}
    <path
      d="M80,190
         C80,150 105,140 140,138
         L165,100
         C172,88 185,82 200,82
         L275,82
         C292,82 306,90 314,104
         L336,138
         C368,140 392,155 392,190
         L392,196
         C392,204 386,210 378,210
         L358,210
         C358,196 347,185 333,185
         C319,185 308,196 308,210
         L172,210
         C172,196 161,185 147,185
         C133,185 122,196 122,210
         L94,210
         C86,210 80,204 80,196
         Z"
      fill="var(--color-dark-yellow)"
      stroke="var(--color-brand-black)"
      strokeWidth="6"
      strokeLinejoin="round"
    />

    <path
      d="M178,133 L188,105 C191,98 197,94 204,94 L232,94 L232,133 Z"
      fill="white"
      stroke="var(--color-brand-black)"
      strokeWidth="5"
      strokeLinejoin="round"
    />
    <path
      d="M240,94 L269,94 C276,94 282,98 285,105 L294,133 L240,133 Z"
      fill="white"
      stroke="var(--color-brand-black)"
      strokeWidth="5"
      strokeLinejoin="round"
    />

    <rect
      x="212"
      y="70"
      width="56"
      height="20"
      rx="6"
      fill="var(--color-brand-black)"
    />
    <text
      x="240"
      y="85"
      textAnchor="middle"
      fontSize="13"
      fontWeight="800"
      fill="var(--color-dark-yellow)"
      fontFamily="var(--font-primary), sans-serif"
    >
      TAXI
    </text>

    <line
      x1="236"
      y1="138"
      x2="236"
      y2="209"
      stroke="var(--color-brand-black)"
      strokeWidth="4"
    />
    <rect
      x="252"
      y="155"
      width="18"
      height="6"
      rx="3"
      fill="var(--color-brand-black)"
    />
    <rect
      x="196"
      y="155"
      width="18"
      height="6"
      rx="3"
      fill="var(--color-brand-black)"
    />

    <circle
      cx="378"
      cy="165"
      r="9"
      fill="white"
      stroke="var(--color-brand-black)"
      strokeWidth="4"
    />
    <rect
      x="90"
      y="158"
      width="14"
      height="16"
      rx="4"
      fill="var(--color-brand-black)"
    />

    <circle cx="147" cy="210" r="30" fill="var(--color-brand-black)" />
    <circle cx="147" cy="210" r="13" fill="var(--color-dark-yellow)" />
    <circle cx="333" cy="210" r="30" fill="var(--color-brand-black)" />
    <circle cx="333" cy="210" r="13" fill="var(--color-dark-yellow)" />
  </svg>
);

const AboutUsHeroSection = () => {
  return (
    <section
      className="relative bg-white overflow-hidden py-16 sm:py-20"
      aria-label="About Manasvi Cabs - Taxi Service in Gujarat"
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative flex items-center justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-md aspect-square rounded-[40px] bg-(--color-brand-yellow)/15 border-2 border-dashed border-(--color-brand-black)/15 flex items-center justify-center p-10">
            <TaxiIllustration />

            <div className="absolute -top-5 -left-3 sm:-left-6 flex flex-col items-center justify-center w-24 h-24 rounded-2xl bg-(--color-dark-yellow) border-[3px] border-(--color-brand-black) shadow-[5px_5px_0px_var(--color-brand-black)] text-center px-1">
              <span className="text-xl font-extrabold text-(--color-brand-black) leading-none">
                5+
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wide text-(--color-brand-black) leading-tight mt-1">
                Yrs Experience
              </span>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-(--color-brand-black) bg-(--color-dark-yellow) text-xs font-bold tracking-widest uppercase text-(--color-brand-black) mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-(--color-brand-black)" />
            About Manasvi Cabs
          </span>

          <h1 className="font-(family-name:--font-accent) text-5xl sm:text-6xl leading-[1.1] text-(--color-brand-black) mb-6">
            Trusted Taxi Service In Gujarat
          </h1>

          <p className="text-lg sm:text-xl text-(--color-gray-dark)/80 leading-relaxed mb-2">
            Your trusted Taxi booking partner in Gujarat since 2016
          </p>

          <p className="text-base text-(--color-gray-dark)/60 leading-relaxed mb-8 max-w-lg">
            Manasvi Cabs provides reliable taxi services in Ahmedabad, Surat,
            Vadodara, Rajkot, Hirasar Airport, Bhavnagar, Palitana, and Talaja.
            We offer local Taxi bookings, outstation trips, one-way taxi
            services, airport transfers, and tour packages with verified drivers
            and well-maintained vehicles.
          </p>

          <div className="flex flex-col gap-3 mb-10">
            {HIGHLIGHTS.map((highlight) => (
              <div key={highlight} className="flex items-center gap-3">
                <div className="w-6 h-6 shrink-0 rounded-full bg-(--color-dark-yellow) border-2 border-(--color-brand-black) flex items-center justify-center">
                  <CheckCircle2
                    className="w-3.5 h-3.5 text-(--color-brand-black)"
                    strokeWidth={2.5}
                  />
                </div>
                <span className="text-sm font-semibold text-(--color-brand-black)">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-(--color-dark-yellow) text-(--color-brand-black) font-extrabold text-sm uppercase tracking-wider rounded-full border-2 border-(--color-brand-black) shadow-[4px_4px_0px_var(--color-brand-black)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_var(--color-brand-black)] transition-all cursor-pointer"
            >
              Book a Taxi
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>

            <Link
              href="tel:+918347112150"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-(--color-brand-black) font-extrabold text-sm uppercase tracking-wider rounded-full border-2 border-(--color-brand-black) shadow-[4px_4px_0px_var(--color-brand-black)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_var(--color-brand-black)] transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              +91 83471 12150
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
