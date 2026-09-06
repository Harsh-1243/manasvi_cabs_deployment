import React from "react";
import { ArrowLeftRight, Map, Plane, Compass } from "lucide-react";

const SERVICES = [
  {
    icon: ArrowLeftRight,
    title: "One Way / Round Trip Taxi",
    description:
      "Book one-way or round-trip taxi services across Gujarat. Ideal for intercity travel between Ahmedabad, Surat, Vadodara, Rajkot, Bhavnagar, Palitana, and Talaja.",
  },
  {
    icon: Map,
    title: "Outstation & Intercity Taxi",
    description:
      "Comfortable long-distance taxi services across Gujarat with experienced drivers. Perfect for business trips, family vacations, and religious tours.",
  },
  {
    icon: Plane,
    title: "Airport Pickup & Drop",
    description:
      "Timely airport transfers to and from Hirasar Airport (Rajkot), Ahmedabad Airport, and Surat Airport. Hassle-free pickup and drop with flight tracking.",
  },
  {
    icon: Compass,
    title: "Tour & Travel Packages",
    description:
      "Explore Gujarat with customized travel packages including Somnath, Dwarka, Gir National Park, Statue of Unity, and more with Manasvi Cabs.",
  },
];

const HomeOurServices = () => {
  return (
    <section
      className="relative bg-white overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.10) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-10 md:py-12">
        <h2
          id="services-heading"
          className="text-4xl font-(family-name:--font-accent) sm:text-5xl font-extrabold leading-[1.1] text-(--color-brand-black) text-center mb-4"
        >
          Taxi Services Across Gujarat For Every Travel Need
        </h2>

        <p className="text-(--color-gray-dark)/70 text-center text-base sm:text-lg mb-12 max-w-3xl mx-auto">
          From airport transfers to outstation trips and customized Gujarat
          tours — Manasvi Cabs offers reliable taxi services in Ahmedabad,
          Surat, Vadodara, Rajkot, Bhavnagar, Palitana, and Talaja.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-(--color-brand-yellow)/15 border border-(--color-brand-black)/10 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-14 h-14 rounded-2xl bg-(--color-dark-yellow) border-[3px] border-(--color-brand-black) shadow-[4px_4px_0px_var(--color-brand-black)] flex items-center justify-center mb-5">
                <Icon
                  className="w-6 h-6 text-(--color-brand-black)"
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

export default HomeOurServices;
