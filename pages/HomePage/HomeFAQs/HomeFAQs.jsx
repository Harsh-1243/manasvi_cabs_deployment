import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQS = [
  {
    question: "How can I book a taxi with Manasvi Cabs?",
    answer:
      "You can easily book a taxi via WhatsApp, phone call, or through our website booking form. Our team will confirm your ride instantly for any location in Ahmedabad, Surat, Vadodara, Rajkot, Bhavnagar, Palitana, Talaja, or Hirasar Airport.",
  },
  {
    question: "Do you provide outstation taxi service in Gujarat?",
    answer:
      "Yes — we run outstation trips across Gujarat and neighbouring states, including temple circuits like Dwarka and Somnath, family holidays, and business road trips. Our experienced highway drivers ensure safe and comfortable long-distance travel.",
  },
  {
    question: "What types of cars are available for booking?",
    answer:
      "We offer everything from compact hatchbacks and sedans for local and one-way trips to spacious SUVs and tempo travellers for family or group outstation travel. You can pick the Taxi type right at booking based on your needs.",
  },
  {
    question: "Are your drivers verified and experienced?",
    answer:
      "All our drivers are background-verified, licensed, and experienced on Gujarat's highways and city routes. They provide professional taxi service across Bhavnagar, Surat, Ahmedabad, Rajkot, and other cities with complete safety.",
  },
  {
    question: "Do you provide airport pickup and drop service?",
    answer:
      "Yes — we offer timely airport pickup and drop service for Hirasar Airport (Rajkot), Ahmedabad Airport, and Surat Airport with flight tracking and a meet-and-greet service, so you're covered even if your flight is delayed.",
  },
  {
    question: "What areas do you serve in Gujarat?",
    answer:
      "Manasvi Cabs provides taxi services in Ahmedabad, Surat, Vadodara, Rajkot, Hirasar Airport (Rajkot), Bhavnagar, Palitana, and Talaja. We also cover nearby areas and offer outstation trips across Gujarat.",
  },
];

const HomeFAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section className="relative bg-white overflow-hidden">
      {/* dotted texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.10) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* eyebrow + heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-(--color-brand-black) bg-(--color-dark-yellow) text-xs font-bold tracking-widest uppercase text-(--color-brand-black) mb-5">
            <HelpCircle className="w-3.5 h-3.5" strokeWidth={2.5} />
            FAQs
          </span>

          <h2 className="font-(family-name:--font-accent) text-5xl sm:text-6xl leading-[1.05] text-(--color-brand-black) mb-4">
            Got Questions? We've Got Answers
          </h2>

          <p className="text-(--color-gray-dark)/70 text-base sm:text-lg max-w-xl">
            Everything you need to know about booking a taxi with Manasvi Cabs
            in Gujarat.
          </p>
        </div>

        {/* accordion */}
        <div className="flex flex-col gap-4">
          {FAQS.map(({ question, answer }, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={question}
                className={`bg-white rounded-2xl border-2 transition-colors duration-200 ${
                  isOpen
                    ? "border-(--color-brand-black)"
                    : "border-(--color-brand-black)/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 cursor-pointer"
                >
                  <span className="font-bold text-(--color-brand-black) text-base sm:text-lg">
                    {question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-lg border-2 border-(--color-brand-black) flex items-center justify-center transition-colors duration-200 ${
                      isOpen ? "bg-(--color-dark-yellow)" : "bg-white"
                    }`}
                  >
                    {isOpen ? (
                      <Minus
                        className="w-4 h-4 text-(--color-brand-black)"
                        strokeWidth={2.5}
                      />
                    ) : (
                      <Plus
                        className="w-4 h-4 text-(--color-brand-black)"
                        strokeWidth={2.5}
                      />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-(--color-gray-dark)/75 text-sm sm:text-base leading-relaxed px-5 sm:px-6 pb-5 sm:pb-6">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQs;
