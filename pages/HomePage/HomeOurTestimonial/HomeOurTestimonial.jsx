import React from "react";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Ravi Mehta",
    location: "Ahmedabad",
    rating: 5,
    review:
      "Booked an airport pickup at 4 AM from Ahmedabad Airport and the driver was already waiting before I'd even landed. Smooth ride to Bhavnagar, on time, and the fare matched exactly what was quoted.",
  },
  {
    name: "Priya Shah",
    location: "Rajkot",
    rating: 5,
    review:
      "Took an outstation trip from Rajkot to Dwarka with the whole family. Comfortable SUV, careful driver, and no random stops at commission shops like other taxi services try.",
  },
  {
    name: "Kiran Joshi",
    location: "Surat",
    rating: 4,
    review:
      "Used Manasvi Cabs for a local rental in Surat during a wedding weekend — extended the hours twice over a phone call and they handled it without any fuss at all.",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const HomeOurTestimonial = () => {
  return (
    <section className="relative bg-(--color-gray-light) overflow-hidden">
      {/* top torn edge — bleeds from the white section above */}
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

      {/* dotted texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-24 pb-24 sm:pt-28 sm:pb-28">
        {/* eyebrow badge */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-(--color-brand-black) bg-(--color-dark-yellow) text-xs font-bold tracking-widest uppercase text-(--color-brand-black) mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-(--color-brand-black)" />
            Testimonials
          </span>

          <h2 className="font-(family-name:--font-accent) text-5xl sm:text-6xl leading-[1.05] text-(--color-brand-black) mb-4">
            What Our Riders Say
          </h2>

          <p className="text-(--color-gray-dark)/70 text-base sm:text-lg max-w-xl">
            Real experiences from real passengers across Gujarat who trust
            Manasvi Cabs for their taxi needs.
          </p>
        </div>

        {/* testimonial cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ name, location, rating, review }) => (
            <div
              key={name}
              className="relative bg-white border-2 border-(--color-brand-black)/10 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <Quote
                className="absolute top-5 right-5 w-10 h-10 text-(--color-brand-yellow) opacity-60"
                fill="var(--color-brand-yellow)"
                strokeWidth={0}
              />

              {/* stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    fill={i < rating ? "var(--color-dark-yellow)" : "none"}
                    stroke={
                      i < rating
                        ? "var(--color-dark-yellow)"
                        : "var(--color-brand-black)"
                    }
                    strokeOpacity={i < rating ? 1 : 0.25}
                  />
                ))}
              </div>

              <p className="text-(--color-gray-dark)/80 text-sm leading-relaxed mb-6 relative z-10">
                &ldquo;{review}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-dashed border-(--color-brand-black)/15">
                <div className="w-11 h-11 shrink-0 rounded-full bg-(--color-dark-yellow) border-[3px] border-(--color-brand-black) flex items-center justify-center">
                  <span className="text-xs font-extrabold text-(--color-brand-black)">
                    {initials(name)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-(--color-brand-black) text-sm leading-none mb-1">
                    {name}
                  </p>
                  <p className="text-xs text-(--color-gray-dark)/60 leading-none">
                    {location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* bottom torn edge — hands off to the section below */}
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

export default HomeOurTestimonial;
