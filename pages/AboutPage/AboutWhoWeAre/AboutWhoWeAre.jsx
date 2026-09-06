"use client";

import React from "react";
import Link from "next/link";
import {
  Users,
  Car,
  Headset,
  Award,
  ArrowRight,
  ShieldCheck,
  Clock,
  Heart,
  MapPinned,
  IndianRupee,
  Sparkles,
} from "lucide-react";

const STATS = [
  { icon: Users, value: "25K+", label: "Happy Riders" },
  { icon: Car, value: "50+", label: "Fleet Vehicles" },
  { icon: Headset, value: "24/7", label: "Support" },
  { icon: Award, value: "8+", label: "Cities Covered" },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "All drivers verified, vehicles insured, and 24/7 GPS tracking for every ride.",
  },
  {
    icon: Clock,
    title: "Punctuality",
    description:
      "We value your time — on-time pickup, every single ride across Gujarat.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Your comfort and satisfaction are our top priorities in every journey.",
  },
  {
    icon: MapPinned,
    title: "Local Expertise",
    description:
      "Our drivers know Gujarat routes perfectly — no wrong turns, no delays.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description:
      "No hidden charges — fixed taxi fares, zero surprises, complete clarity.",
  },
  {
    icon: Sparkles,
    title: "Quality Fleet",
    description:
      "Well-maintained, air-conditioned cars for local and outstation travel.",
  },
];

const ROTATIONS = [
  "-rotate-2",
  "rotate-1",
  "-rotate-1",
  "rotate-2",
  "-rotate-1",
  "rotate-1",
];

const AboutWhoWeAre = () => {
  return (
    <section
      className="relative bg-white overflow-hidden py-16 md:py-24"
      aria-label="Who We Are - Manasvi Cabs"
    >
      <svg
        className="absolute top-0 left-0 w-full h-10 sm:h-14 z-10 rotate-180"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,30 C50,60 100,0 150,30 C200,60 250,0 300,30 C350,60 400,0 450,30 C500,60 550,0 600,30 C650,60 700,0 750,30 C800,60 850,0 900,30 C950,60 1000,0 1050,30 C1100,60 1150,0 1200,30 L1200,60 L0,60 Z"
          fill="color-mix(in srgb, var(--color-brand-yellow) 15%, transparent)"
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
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start mb-24">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-(--color-brand-black) bg-(--color-dark-yellow) text-xs font-bold tracking-widest uppercase text-(--color-brand-black) mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-(--color-brand-black)" />
              Who We Are
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-(family-name:--font-accent) text-(--color-brand-black) leading-[1.15] mb-4">
              More Than a Taxi Service — Your Reliable Travel Partner
            </h2>

            <div className="flex flex-col gap-4 text-(--color-gray-dark)/75 leading-relaxed max-w-xl mb-8">
              <p>
                Manasvi Cabs delivers professional taxi and travel services
                across Ahmedabad, Surat, Vadodara, Rajkot, Hirasar Airport,
                Bhavnagar, Palitana, and Talaja. We focus on comfort, safety,
                punctuality, and customer satisfaction for every journey.
              </p>
              <p>
                Founded in 2016, Manasvi Cabs started with a vision to provide
                trustworthy and affordable taxi services in Gujarat. What began
                with a small fleet has grown into a preferred transportation
                partner for thousands of customers.
              </p>
              <p>
                We proudly serve local passengers, tourists, families, and
                corporate clients with a commitment to punctual service,
                transparent pricing, and customer-first support. Every vehicle
                in our fleet is regularly maintained to ensure comfort and
                safety on every trip.
              </p>
              <p>
                Our experienced drivers understand Gujarat's roads, traffic
                routes, and travel requirements, helping passengers enjoy
                stress-free rides whether it's a local pickup, airport transfer,
                business meeting, wedding event, or outstation journey.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-(--color-dark-yellow) text-(--color-brand-black) font-extrabold text-sm uppercase tracking-wider rounded-full border-2 border-(--color-brand-black) shadow-[4px_4px_0px_var(--color-brand-black)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_var(--color-brand-black)] transition-all cursor-pointer"
            >
              Book Your Ride
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:pt-4">
            {STATS.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                className={`${
                  i % 2 === 1 ? "translate-y-6" : ""
                } bg-(--color-brand-yellow)/15 border-2 border-(--color-brand-black)/10 rounded-2xl p-5 sm:p-6`}
              >
                <div className="w-11 h-11 rounded-xl bg-(--color-dark-yellow) border-[3px] border-(--color-brand-black) flex items-center justify-center mb-4">
                  <Icon
                    className="w-5 h-5 text-(--color-brand-black)"
                    strokeWidth={2.5}
                  />
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-(--color-brand-black) leading-none mb-1">
                  {value}
                </p>
                <p className="text-xs font-semibold text-(--color-gray-dark)/60 uppercase tracking-wide">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="font-(family-name:--font-accent) text-4xl sm:text-5xl text-(--color-brand-black)">
            Why Riders Choose Us
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {VALUES.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`relative bg-white border-2 border-(--color-brand-black)/10 rounded-2xl p-6 pt-8 ${ROTATIONS[i]} hover:rotate-0 hover:shadow-lg transition-all duration-200`}
            >
              {/* pin */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-(--color-dark-yellow) border-2 border-(--color-brand-black)" />

              <div className="w-12 h-12 rounded-xl bg-(--color-dark-yellow) border-[3px] border-(--color-brand-black) flex items-center justify-center mb-4">
                <Icon
                  className="w-5 h-5 text-(--color-brand-black)"
                  strokeWidth={2.5}
                />
              </div>

              <h3 className="text-lg font-extrabold text-(--color-brand-black) mb-2">
                {title}
              </h3>
              <p className="text-sm text-(--color-gray-dark)/70 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
