"use client";

import React from "react";
import { Target, Eye } from "lucide-react";

const MISSION_DATA = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide safe, reliable, and affordable taxi services across Ahmedabad, Surat, Vadodara, Rajkot, Bhavnagar, Palitana, Talaja, and Hirasar Airport with professional drivers and timely service.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become the most trusted and preferred Taxi service provider in Gujarat by delivering consistent, high-quality travel experiences for local and outstation journeys.",
  },
];

const AboutMissionSection = () => {
  return (
    <section
      className="relative bg-(--color-brand-yellow)/15 overflow-hidden py-16 md:py-24"
      aria-label="Mission and Vision of Manasvi Cabs"
    >
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-(--color-brand-black) bg-(--color-dark-yellow) text-xs font-bold tracking-widest uppercase text-(--color-brand-black) mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-(--color-brand-black)" />
            Our Goals
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-(family-name:--font-accent) text-(--color-brand-black) leading-[1.15] mb-4">
            Our Mission & Vision
          </h2>

          <p className="text-base sm:text-lg text-(--color-gray-dark)/70 max-w-2xl mx-auto">
            Driving excellence in taxi service across Gujarat with commitment to
            customer satisfaction and safe travel.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {MISSION_DATA.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white border border-(--color-brand-black)/10 rounded-2xl p-8 sm:p-10 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-16 h-16 rounded-2xl bg-(--color-dark-yellow) border-[3px] border-(--color-brand-black) shadow-[5px_5px_0px_var(--color-brand-black)] flex items-center justify-center mb-6">
                <Icon
                  className="w-7 h-7 text-(--color-brand-black)"
                  strokeWidth={2.5}
                />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-(--color-brand-black) mb-3">
                {title}
              </h3>

              <p className="text-base text-(--color-gray-dark)/70 leading-relaxed">
                {description}
              </p>
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

export default AboutMissionSection;
