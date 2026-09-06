import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";
import BookNow from "../../../components/Buttons/BookNow/BookNow";
import CallNow from "../../../components/Buttons/CallNow/CallNow";
import BookingForm from "../../../components/BookingForm/BookingForm";

const STATS = [
  { value: "15k+", label: "Trips Completed" },
  { value: "4.9", label: "Avg. Google Rating" },
  { value: "24/7", label: "Live Dispatch" },
];

const MARQUEE_ITEMS = [
  "Professional Drivers",
  "24/7 Premium Taxi Service",
  "Top Rated in Gujarat",
  "Transparent Pricing",
  "Safe & Secure Journeys",
  "Hirasar Airport Transfer",
];

const CITY_NAMES = [
  "Ahmedabad",
  "Surat",
  "Vadodara",
  "Rajkot",
  "Bhavnagar",
  "Palitana",
  "Talaja",
  "Hirasar Airport",
];

const TYPE_SPEED = 90;
const DELETE_SPEED = 45;
const HOLD_MS = 1400;

const useTypewriter = (words) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const current = words[wordIndex];

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), HOLD_MS);
      return () => clearTimeout(t);
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return undefined;
    }
    const t = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? DELETE_SPEED : TYPE_SPEED,
    );
    return () => clearTimeout(t);
  }, [subIndex, deleting, wordIndex, words, reducedMotion]);

  useEffect(() => {
    const t = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(t);
  }, []);

  if (reducedMotion) return { text: words[0], blink: false };
  return { text: words[wordIndex].slice(0, subIndex), blink };
};

const HomeHeroSection = () => {
  const { text: cityText, blink } = useTypewriter(CITY_NAMES);

  return (
    <section
      className="relative bg-(--color-brand-yellow) overflow-hidden"
      aria-label="Manasvi Cabs - Taxi Service in Gujarat"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-14 pb-16 grid lg:grid-cols-2 gap-14 items-center">
        {/* ================= LEFT: COPY ================= */}
        <div>
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-(--color-brand-black)/60 mb-4">
            Gujarat &middot; India
          </span>

          <h1 className="font-(family-name:--font-accent) text-5xl sm:text-6xl leading-[0.95] text-(--color-brand-black) mb-6 min-h-[2.1em] sm:min-h-[1.9em]">
            Book Reliable
            <br />
            Taxi in{" "}
            <span className="relative inline-block">
              {cityText}
              <span
                aria-hidden="true"
                className={`inline-block w-0.75 sm:w-1 h-[0.85em] bg-(--color-brand-black) ml-1 align-middle transition-opacity duration-100 ${
                  blink ? "opacity-100" : "opacity-0"
                }`}
              />
            </span>
          </h1>

          <p className="text-(--color-brand-black)/70 text-base sm:text-lg leading-relaxed mb-8">
            Manasvi Cabs provides comfortable and timely taxi services in
            Ahmedabad, Surat, Vadodara, Rajkot, Hirasar Airport, Bhavnagar,
            Palitana, and Talaja. Book local Taxi, outstation trips, airport
            transfers, and customized Gujarat tours with professional drivers
            and well-maintained vehicles.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <BookNow />
            <CallNow />
          </div>

          <div className="border-t-2 border-dashed border-(--color-brand-black)/25 mb-8" />

          <div className="flex flex-wrap gap-x-10 gap-y-6">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-extrabold text-(--color-brand-black) leading-none mb-1">
                  {value}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wide text-(--color-brand-black)/60">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT: BOOKING FORM ================= */}
        <div className="lg:justify-self-end w-full lg:max-w-md">
          <BookingForm />
        </div>
      </div>

      {/* ================= MARQUEE STRIP ================= */}
      <div className="relative z-10 border-t-2 border-(--color-brand-black)/15 pt-4 pb-16 sm:pb-20 overflow-hidden">
        <div className="flex w-max animate-[marquee_28s_linear_infinite]">
          {[0, 1].map((rep) => (
            <div key={rep} className="flex items-center shrink-0">
              {MARQUEE_ITEMS.map((item, i) => (
                <div key={`${rep}-${i}`} className="flex items-center">
                  <span className="font-(family-name:--font-accent) text-2xl sm:text-3xl text-(--color-brand-black) whitespace-nowrap px-6">
                    {item}
                  </span>
                  <Sparkle
                    className="w-5 h-5 text-(--color-brand-black)/50 shrink-0"
                    fill="currentColor"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ================= WAVY BOTTOM EDGE ================= */}
      <svg
        className="absolute bottom-0 left-0 w-full h-10 sm:h-14 z-0"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,30 C50,60 100,0 150,30 C200,60 250,0 300,30 C350,60 400,0 450,30
             C500,60 550,0 600,30 C650,60 700,0 750,30 C800,60 850,0 900,30
             C950,60 1000,0 1050,30 C1100,60 1150,0 1200,30 L1200,60 L0,60 Z"
          fill="var(--color-white)"
        />
      </svg>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_28s_linear_infinite\\] {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeHeroSection;
