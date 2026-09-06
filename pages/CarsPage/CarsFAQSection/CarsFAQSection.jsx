import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

const faqs = [
  {
    question: "What types of taxi cars are available for booking in Gujarat?",
    answer:
      "We offer a wide range of vehicles including sedans, SUVs, Innova, and tempo travellers, so you can choose the right car for local rides, outstation trips, or group travel across Gujarat.",
  },
  {
    question: "Are your taxi cars air-conditioned and well maintained?",
    answer:
      "Yes, every vehicle in our fleet is air-conditioned, regularly serviced, and inspected before each trip to make sure you travel in comfort and safety.",
  },
  {
    question: "Can I book a bigger vehicle for a family or group trip?",
    answer:
      "Absolutely — SUVs and tempo travellers are available for larger groups, family trips, and events, with enough space for passengers and luggage.",
  },
  {
    question:
      "Do you provide cars for outstation and long-distance taxi trips?",
    answer:
      "Yes, our sedans and SUVs are well suited for outstation and long-distance travel across Gujarat, with experienced highway drivers behind the wheel.",
  },
  {
    question: "Is luggage space available in your taxi cars?",
    answer:
      "Every car in our fleet has ample luggage space, and if you're travelling with extra baggage, our team can recommend a larger vehicle for the trip.",
  },
  {
    question: "How do I choose the right taxi car for my trip?",
    answer:
      "Just let us know your passenger count, luggage, and route when you call or book — our team will recommend the best vehicle, whether it's a sedan, SUV, Innova, or tempo traveller.",
  },
];

const highlightedWords = [
  "sedans, SUVs, Innova, and tempo travellers",
  "air-conditioned, regularly serviced, and inspected",
  "SUVs and tempo travellers",
  "sedans and SUVs",
  "ample luggage space",
  "sedan, SUV, Innova, or tempo traveller",
];

const renderAnswer = (answer) => {
  const match = highlightedWords.find((word) => answer.includes(word));

  if (!match) return answer;

  const [before, after] = answer.split(match);

  return (
    <>
      {before}
      <span className="font-semibold text-(--color-dark-yellow)">{match}</span>
      {after}
    </>
  );
};

const CarsFAQSection = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      className="relative bg-(--color-gray-light) overflow-hidden px-5 py-14 lg:py-20"
      aria-labelledby="cars-faq-heading"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-(--color-brand-black) bg-(--color-dark-yellow) text-xs font-bold tracking-widest uppercase text-(--color-brand-black) mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-(--color-brand-black)" />
              Cars FAQs
            </span>

            <h2
              id="cars-faq-heading"
              className="font-(family-name:--font-accent) text-5xl sm:text-6xl leading-[1.05] text-(--color-brand-black) mb-5"
            >
              Frequently Asked Questions
            </h2>

            <p className="text-(--color-gray-dark)/70 text-base leading-relaxed mb-8 max-w-xl">
              Find answers about our taxi fleet, vehicle types, luggage space,
              and which car fits your trip — local, outstation, or group travel
              across Gujarat.
            </p>

            <div className="rounded-2xl border-[3px] border-(--color-brand-black) bg-(--color-brand-yellow)/15 p-5 md:p-6 shadow-[6px_6px_0px_var(--color-brand-black)]">
              <p className="text-xl font-extrabold text-(--color-brand-black) mb-2">
                Still have a question?
              </p>
              <p className="text-sm leading-relaxed text-(--color-gray-dark)/70 mb-5">
                Call Manasvi Cabs and get quick help choosing the right taxi
                vehicle for your trip in Gujarat.
              </p>
              <Link
                href="tel:+918347112150"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-(--color-dark-yellow) text-(--color-brand-black) border-2 border-(--color-brand-black) rounded-full font-bold text-sm uppercase tracking-wide shadow-[4px_4px_0px_var(--color-brand-black)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_var(--color-brand-black)] transition-all cursor-pointer"
                aria-label="Call Manasvi Cabs for vehicle questions"
              >
                <Phone size={16} strokeWidth={2.5} />
                Call Now
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border-2 border-(--color-brand-black)/10 bg-white p-5 md:p-6"
              >
                <h3 className="text-lg md:text-xl font-extrabold text-(--color-brand-black) leading-snug mb-3">
                  {faq.question}
                </h3>

                <p className="text-sm md:text-base leading-relaxed text-(--color-gray-dark)/70">
                  {renderAnswer(faq.answer)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarsFAQSection;
