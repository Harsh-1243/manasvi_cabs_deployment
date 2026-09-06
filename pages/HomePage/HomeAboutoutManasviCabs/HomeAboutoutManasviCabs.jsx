"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Phone, ArrowRight, Car } from "lucide-react";
import Link from "next/link";

const PROGRESS_STATS = [
  { label: "On-Time Pickup", percentage: 98 },
  { label: "Customer Satisfaction", percentage: 99 },
];

const ACHIEVEMENTS = [
  {
    value: "50+",
    label: "Vehicles Available",
  },
  {
    value: "500K+",
    label: "Kilometers Covered",
  },
  {
    value: "2000+",
    label: "Trips Completed",
  },
  {
    value: "8+",
    label: "Cities Covered",
  },
];

const HomeAboutoutManasviCabs = () => {
  const router = useRouter();

  return (
    <section className="relative bg-(--color-brand-yellow)/15 pt-16 sm:pt-24 pb-20 sm:pb-28 overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-10 sm:h-14 z-10 rotate-180"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,30 C50,60 100,0 150,30 C200,60 250,0 300,30 C350,60 400,0 450,30 C500,60 550,0 600,30 C650,60 700,0 750,30 C800,60 850,0 900,30 C950,60 1000,0 1050,30 C1100,60 1150,0 1200,30 L1200,60 L0,60 Z"
          fill="var(--color-white)"
        />
      </svg>

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-4/3 sm:aspect-square">
              <div className="absolute top-0 right-0 w-[78%] h-[65%] bg-gray-100 rounded-3xl border-2 border-(--color-brand-black)/10 shadow-xl overflow-hidden z-10">
                <img
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
                  alt="Manasvi Cabs Vehicle Fleet in Gujarat"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-[68%] h-[55%] bg-gray-50 rounded-3xl border-2 border-(--color-brand-black)/10 shadow-2xl overflow-hidden z-20">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
                  alt="Luxury Outstation Taxi by Manasvi Cabs"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="absolute top-[12%] left-[2%] z-30 bg-(--color-dark-yellow) text-(--color-brand-black) p-5 sm:p-6 rounded-2xl border-[3px] border-(--color-brand-black) shadow-[6px_6px_0px_var(--color-brand-black)] flex flex-col items-center justify-center text-center max-w-35 sm:max-w-40">
                <span className="text-3xl sm:text-4xl font-extrabold leading-none mb-1">
                  5+
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider leading-tight">
                  Years of Service
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-(--color-brand-yellow)/30 border border-(--color-brand-black)/15 text-xs font-bold uppercase tracking-wider text-(--color-brand-black) mb-4">
              <Car className="w-4 h-4 text-(--color-brand-black)" />
              <span>About Manasvi Cabs</span>
            </div>

            <h2 className="text-3xl font-(family-name:--font-accent) sm:text-4xl lg:text-5xl font-extrabold text-(--color-brand-black) leading-[1.15] mb-4">
              Reliable Taxi Service Across Gujarat
            </h2>

            <p className="text-(--color-gray-dark)/80 text-base leading-relaxed mb-8">
              Your trusted partner for safe, comfortable, and on-time travel.
              Manasvi Cabs provides dependable taxi services across Ahmedabad,
              Surat, Vadodara, Rajkot, Hirasar Airport, Bhavnagar, Palitana, and
              Talaja. We specialize in local Taxi bookings, outstation trips,
              one-way taxi services, round-trip Taxi, and airport transfers with
              professional drivers and well-maintained vehicles.
            </p>

            <div className="space-y-5 mb-10">
              {PROGRESS_STATS.map(({ label, percentage }) => (
                <div key={label}>
                  <div className="flex justify-between items-center mb-2 font-bold text-sm text-(--color-brand-black)">
                    <span>{label}</span>
                    <span>{percentage}%</span>
                  </div>
                  <div className="w-full h-3 bg-white rounded-full overflow-hidden border border-(--color-brand-black)/15 p-0.5">
                    <div
                      className="h-full bg-(--color-dark-yellow) rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={() => router.push("/about")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-(--color-dark-yellow) text-(--color-brand-black) font-extrabold text-sm uppercase tracking-wider rounded-xl border-2 border-(--color-brand-black) shadow-[4px_4px_0px_var(--color-brand-black)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_var(--color-brand-black)] transition-all cursor-pointer"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 stroke-3" />
              </button>

              <Link
                href="tel:+918347112150"
                className="flex items-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-(--color-brand-yellow)/40 border border-(--color-brand-black)/20 flex items-center justify-center text-(--color-brand-black) group-hover:bg-(--color-dark-yellow) transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-(--color-gray-dark)/60 uppercase tracking-wide">
                    Call Anytime
                  </p>
                  <p className="text-base font-extrabold text-(--color-brand-black)">
                    +91 83471 12150
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* ================= ACHIEVEMENTS 4 BOXES ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20">
          {ACHIEVEMENTS.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-xs p-5 sm:p-6 rounded-2xl border-2 border-(--color-brand-black)/10 shadow-[4px_4px_0px_var(--color-brand-black)] flex flex-col items-center justify-center text-center transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_var(--color-brand-black)]"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-(--color-brand-black) mb-1.5 tracking-tight">
                {item.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-(--color-gray-dark)/75 uppercase tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-10 sm:h-14 z-10"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,30 C50,60 100,0 150,30 C200,60 250,0 300,30 C350,60 400,0 450,30 C500,60 550,0 600,30 C650,60 700,0 750,30 C800,60 850,0 900,30 C950,60 1000,0 1050,30 C1100,60 1150,0 1200,30 L1200,60 L0,60 Z"
          fill="var(--color-white)"
        />
      </svg>
    </section>
  );
};

export default HomeAboutoutManasviCabs;
