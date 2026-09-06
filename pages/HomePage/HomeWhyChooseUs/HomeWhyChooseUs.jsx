import React from "react";
import {
  MessageSquareText,
  SunMedium,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const FEATURES = [
  {
    icon: MessageSquareText,
    title: "24/7 Human Dispatch",
    description:
      "No frustrating chatbot loops. Speak directly to real operations managers in Gujarat who solve problems instantly.",
  },
  {
    icon: SunMedium,
    title: "High-Performance Summer AC",
    description:
      "Our vehicles undergo strict routine AC compressor diagnostics to keep you comfortable in 45°C Gujarat summers.",
  },
  {
    icon: CheckCircle2,
    title: "Guaranteed Taxi Arrival",
    description:
      "When you receive a confirmed booking confirmation, we back it up with our zero-cancellation promise. Your Taxi is guaranteed.",
  },
  {
    icon: ShieldCheck,
    title: "Spotless Commercially Licensed Fleet",
    description:
      "All cars are vacuum-cleaned and sanitized prior to pickup. Operating with clean yellow-plate commercial permits.",
  },
];

const HomeWhyChooseUs = () => {
  return (
    <section className="relative bg-white py-10 md:py-12 overflow-hidden">
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
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-(family-name:--font-accent) sm:text-4xl lg:text-5xl font-semibold text-(--color-brand-black) leading-tight mb-4">
            Why Choose Manasvi Cabs Taxi Service?
          </h2>

          <p className="text-(--color-gray-dark)/80 text-base sm:text-lg max-w-4xl leading-relaxed">
            Trusted by thousands of travelers for reliable taxi services in
            Ahmedabad, Surat, Vadodara, Rajkot, Hirasar Airport, Bhavnagar,
            Palitana, and Talaja. We offer local Taxi bookings, airport
            transfers, outstation round-trips, and one-way taxi services with
            transparent pricing and experienced professional drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 border-2 border-(--color-brand-black) shadow-[6px_6px_0px_var(--color-brand-black)] flex flex-col justify-start transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0px_var(--color-brand-black)]"
              >
                <div className="w-14 h-14 rounded-2xl bg-(--color-brand-yellow)/30 border border-(--color-brand-black)/15 flex items-center justify-center text-(--color-brand-black) mb-6">
                  <Icon className="w-7 h-7 stroke-[2.2]" />
                </div>

                <h3 className="text-xl font-extrabold text-(--color-brand-black) mb-3 leading-snug">
                  {feature.title}
                </h3>

                <p className="text-(--color-gray-dark)/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
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

export default HomeWhyChooseUs;
