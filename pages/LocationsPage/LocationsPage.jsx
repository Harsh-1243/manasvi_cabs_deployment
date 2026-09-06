"use client";

import React, { useState } from "react";
import {
  Plus,
  Minus,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Phone,
} from "lucide-react";

import HeaderBanner from "../../components/HeaderBanner/HeaderBanner";
import Marquee from "react-fast-marquee";

import Link from "next/link";

// ================= LOCATION DATA =================

const LOCATION_DATA = {
  ahmedabad: {
    name: "Ahmedabad",
    displayName: "Ahmedabad",
    services: [
      "Airport Taxi Ahmedabad",
      "Corporate Travel",
      "City Taxi Service",
      "Outstation Taxi",
    ],
    marqueeItems: [
      "Professional Drivers",
      "24/7 Premium Taxi Service",
      "Top Rated in Ahmedabad",
      "Transparent Pricing",
      "Safe & Secure Journeys",
    ],
    faqs: [
      {
        question: "How can I book a taxi in Ahmedabad?",
        answer:
          "You can book via WhatsApp, phone call, or through our website booking form. Our team will confirm your ride instantly with driver details and estimated arrival time.",
      },
      {
        question: "What is the cost of taxi service from Ahmedabad Airport?",
        answer:
          "Airport transfers have fixed transparent pricing. The cost depends on your destination. Contact us for instant quotes or use our online booking form for immediate fare calculation.",
      },
      {
        question: "Do you provide corporate taxi service in Ahmedabad?",
        answer:
          "Yes, we offer dedicated corporate travel solutions including monthly subscriptions, employee commute, and business travel with professional drivers and premium vehicles.",
      },
      {
        question: "Are there outstation taxis available from Ahmedabad?",
        answer:
          "Absolutely! We provide outstation services to nearby cities like Vadodara, Gandhinagar, Palitana, Dwarka, and across Gujarat with experienced highway drivers.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept cash, online transfers, and UPI payments. Transparent pricing with no hidden charges — fare matches quote exactly.",
      },
    ],
  },

  surat: {
    name: "Surat",
    displayName: "Surat",
    services: [
      "Airport Taxi Surat",
      "Local City Taxi",
      "Corporate Transport",
      "Outstation Booking",
    ],
    marqueeItems: [
      "Expert Drivers",
      "24/7 Taxi Service in Surat",
      "Verified & Insured",
      "Fixed Fares",
      "Comfortable Rides",
    ],
    faqs: [
      {
        question: "How do I book a taxi in Surat?",
        answer:
          "Book instantly via WhatsApp, phone, or website. Our team confirms within minutes with driver details and pickup timing.",
      },
      {
        question: "Do you serve Surat Airport?",
        answer:
          "Yes, we provide timely airport pickups and drops with flight tracking and meet-and-greet services.",
      },
      {
        question: "What's the tariff for local taxi in Surat?",
        answer:
          "Transparent per-kilometer charges. Get instant quote through our website or call for exact pricing.",
      },
      {
        question: "Do you offer outstation from Surat?",
        answer:
          "Yes, outstation trips to Vadodara, Rajkot, Ahmedabad, and across Gujarat with experienced drivers.",
      },
      {
        question: "Can I book a taxi in advance?",
        answer:
          "Absolutely! Book days or weeks in advance. Confirm details via WhatsApp or phone, and we'll have your driver ready.",
      },
    ],
  },

  vadodara: {
    name: "Vadodara",
    displayName: "Vadodara",
    services: [
      "Airport Taxi Vadodara",
      "City Taxi Service",
      "Corporate Commute",
      "Highway Taxi",
    ],
    marqueeItems: [
      "Premium Taxi Service",
      "24/7 Availability in Vadodara",
      "Professional Drivers",
      "Best Rates",
      "Trusted & Reliable",
    ],
    faqs: [
      {
        question: "How to book a taxi in Vadodara?",
        answer:
          "Book through WhatsApp, phone call, or our website form. Instant confirmation with driver assignment.",
      },
      {
        question: "Do you service Vadodara Airport?",
        answer:
          "Yes, we provide airport pickups and drops with flight tracking and on-time guarantee.",
      },
      {
        question: "What taxi types are available?",
        answer:
          "Compact cars for local travel, SUVs for comfort, and Innova for family trips and group bookings.",
      },
      {
        question: "Outstation options from Vadodara?",
        answer:
          "We cover Ahmedabad, Surat, Bharuch, and all Gujarat routes with highway-experienced drivers.",
      },
      {
        question: "Is the pricing transparent?",
        answer:
          "100% transparent — no hidden charges. Quote matches final fare exactly.",
      },
    ],
  },

  rajkot: {
    name: "Rajkot",
    displayName: "Rajkot",
    services: [
      "Local Taxi Service",
      "Airport Pickup & Drop",
      "Outstation Trips",
      "Corporate Travel",
    ],
    marqueeItems: [
      "Reliable Taxi Service",
      "24/7 Booking in Rajkot",
      "Verified Drivers",
      "Affordable Rates",
      "Safe Journeys",
    ],
    faqs: [
      {
        question: "How do I book a taxi in Rajkot?",
        answer:
          "Simple booking via WhatsApp, phone, or website. Confirmation happens within minutes.",
      },
      {
        question: "Do you have airport taxi service?",
        answer:
          "Yes, airport transfers available with on-time pickup guarantee and flight tracking.",
      },
      {
        question: "What vehicles are available?",
        answer:
          "Sedans, SUVs, and Innova depending on group size and travel type.",
      },
      {
        question: "Can I book outstation from Rajkot?",
        answer:
          "Yes, available to Surat, Ahmedabad, Vadodara, and all neighboring cities.",
      },
      {
        question: "What's your cancellation policy?",
        answer:
          "Free cancellation up to 2 hours before booking. After that, minimal charges apply.",
      },
    ],
  },

  bhavnagar: {
    name: "Bhavnagar",
    displayName: "Bhavnagar",
    services: [
      "City Taxi Service",
      "Temple Circuit Taxi",
      "Outstation Booking",
      "Tempo Traveller",
    ],
    marqueeItems: [
      "Local Taxi Experts",
      "24/7 Service in Bhavnagar",
      "Best Drivers",
      "Competitive Pricing",
      "Quality Service",
    ],
    faqs: [
      {
        question: "How to book taxi in Bhavnagar?",
        answer:
          "Book via WhatsApp, phone, or online form. Instant confirmation and driver details.",
      },
      {
        question: "Do you offer temple tour taxis?",
        answer:
          "Yes, customized tour packages for Palitana, Talaja, Dwarka, and other temple circuits.",
      },
      {
        question: "What's available for group travel?",
        answer:
          "Tempo Travellers and large SUVs for family groups and corporate outings.",
      },
      {
        question: "Outstation coverage from Bhavnagar?",
        answer:
          "We serve Surat, Ahmedabad, Vadodara, and all major Gujarat cities.",
      },
      {
        question: "Is booking advance possible?",
        answer:
          "Absolutely! Book weeks in advance. Payment can be done on ride or advance transfer.",
      },
    ],
  },

  palitana: {
    name: "Palitana",
    displayName: "Palitana",
    services: [
      "Temple Taxi Service",
      "Local Commute",
      "Tour Package Taxi",
      "Outstation Service",
    ],
    marqueeItems: [
      "Temple Tour Experts",
      "24/7 Taxi in Palitana",
      "Experienced Drivers",
      "Fair Pricing",
      "Comfortable Travel",
    ],
    faqs: [
      {
        question: "Do you offer Palitana temple tour taxis?",
        answer:
          "Yes, dedicated temple tour services with knowledgeable drivers familiar with all circuits and timings.",
      },
      {
        question: "How to book from Palitana?",
        answer:
          "Contact via WhatsApp, phone, or website booking form for instant quotes and confirmation.",
      },
      {
        question: "Can I hire for a full day?",
        answer:
          "Yes, we offer hourly and full-day rental options perfect for tours and sightseeing.",
      },
      {
        question: "Do you travel to nearby cities?",
        answer:
          "Absolutely! Available for Bhavnagar, Talaja, Dwarka, Surat, and across Gujarat.",
      },
      {
        question: "What about large group bookings?",
        answer:
          "We have Innova and Tempo Travellers for groups. Book early for best availability.",
      },
    ],
  },

  talaja: {
    name: "Talaja",
    displayName: "Talaja",
    services: [
      "Local Taxi Service",
      "Heritage Tour Taxi",
      "Outstation Trips",
      "Group Transport",
    ],
    marqueeItems: [
      "Local Experts",
      "24/7 Taxi Service",
      "Reliable Drivers",
      "Best Rates in Talaja",
      "Safe & Comfortable",
    ],
    faqs: [
      {
        question: "How do I book a taxi in Talaja?",
        answer:
          "Simple booking via WhatsApp, call, or online form. Confirmation within minutes.",
      },
      {
        question: "Do you offer heritage tour services?",
        answer:
          "Yes, guided tours for Talaja temples and nearby heritage sites with experienced drivers.",
      },
      {
        question: "What taxi options are available?",
        answer:
          "Sedan for couples and families, SUV for small groups, and Innova for larger groups.",
      },
      {
        question: "Can I go to other cities from Talaja?",
        answer:
          "Yes, outstation service to Palitana, Bhavnagar, Dwarka, Ahmedabad, and more.",
      },
      {
        question: "What's the best way to book in advance?",
        answer:
          "WhatsApp or phone call with trip details. Payment on ride or advance transfer available.",
      },
    ],
  },
  "hirasar-airport-rajkot": {
    name: "Hirasar Airport (Rajkot)",
    displayName: "Hirasar Airport (Rajkot)",
    services: [
      "Hirasar Airport Transfers",
      "Rajkot City Taxi",
      "Outstation from Rajkot",
      "Corporate Airport Pickup",
    ],
    marqueeItems: [
      "Official Airport Transfers",
      "Flight Tracking & Meet & Greet",
      "Professional Drivers",
      "Fixed Airport Fares",
      "24/7 Availability",
    ],
    faqs: [
      {
        question: "Do you serve Hirasar Airport?",
        answer:
          "Yes — we provide meet-and-greet pickups and drops at Hirasar Airport with flight monitoring to ensure on-time service.",
      },
      {
        question: "How do I book a taxi from Hirasar Airport?",
        answer:
          "Book via WhatsApp, phone, or our website booking form. Provide your flight number and arrival time for faster pickup confirmation.",
      },
      {
        question: "Are airport fares fixed?",
        answer:
          "Yes — airport transfer fares are transparent and fixed based on destination. Contact us for an instant quote.",
      },
      {
        question: "Can I prebook for my arrival?",
        answer:
          "Absolutely. Prebook using WhatsApp or a phone call and we'll schedule your driver with flight tracking.",
      },
      {
        question: "Do you provide larger vehicles for groups/luggage?",
        answer:
          "Yes — Innova and Tempo Travellers are available for groups and heavy luggage. Specify vehicle type when booking.",
      },
    ],
  },
};

// ================= HOW TO BOOK DATA =================

const HOW_TO_BOOK_STEPS = [
  {
    number: "01",
    title: "Submit Travel Request",
    description:
      "Share your trip details including pickup location, destination, and preferred schedule.",
  },
  {
    number: "02",
    title: "Get Driver Assignment",
    description:
      "We assign a professional driver with complete ride details and confirmation.",
  },
  {
    number: "03",
    title: "Timely Pickup Service",
    description:
      "Driver arrives on time at your location whether it's office, hotel, or airport.",
  },
  {
    number: "04",
    title: "Professional Ride Experience",
    description:
      "Travel comfortably across the city with safe, courteous, and punctual service.",
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

// ================= COMPONENT =================

const LocationsPage = ({ locationSlug }) => {
  const locationKey = locationSlug?.toLowerCase();

  const location = LOCATION_DATA[locationKey] || LOCATION_DATA.ahmedabad;

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((previousIndex) => (previousIndex === index ? -1 : index));
  };

  return (
    <>
      {/* ================= HEADER BANNER ================= */}

      <HeaderBanner
        title={`Taxi in ${location.displayName}`}
        subtitle="Professional Taxi Available 24/7"
      />

      {/* ================= HOW TO BOOK SECTION ================= */}

      <section className="relative bg-white overflow-hidden py-15">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-(--color-brand-black) bg-(--color-dark-yellow) text-xs font-bold tracking-widest uppercase text-(--color-brand-black) mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-(--color-brand-black)" />
              Simple Booking
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-(family-name:--font-accent) text-(--color-brand-black) leading-[1.15] mb-4">
              How to Book Taxi in {location.name}
            </h2>

            <p className="text-(--color-gray-dark)/70 text-base sm:text-lg max-w-2xl mx-auto">
              Simple 4-step process to get your trusted taxi service in{" "}
              {location.name}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {HOW_TO_BOOK_STEPS.map(({ number, title, description }, index) => (
              <div
                key={number}
                className={`relative shadow-md border-2 border-(--color-brand-black)/10 rounded-2xl p-6 pt-8 ${ROTATIONS[index]} hover:rotate-0 hover:shadow-lg transition-all duration-200`}
              >
                {/* pin */}
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-(--color-dark-yellow) border-2 border-(--color-brand-black)" />

                <div className="w-14 h-14 rounded-full bg-(--color-dark-yellow) border-[3px] border-(--color-brand-black) flex items-center justify-center mb-5 shadow-[4px_4px_0px_var(--color-brand-black)]">
                  <span className="text-xl font-extrabold text-(--color-brand-black)">
                    {number}
                  </span>
                </div>

                {index < HOW_TO_BOOK_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2">
                    <ArrowRight
                      className="w-6 h-6 text-(--color-dark-yellow)"
                      strokeWidth={2.5}
                    />
                  </div>
                )}

                <h3 className="text-lg font-extrabold text-(--color-brand-black) mb-3">
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

      {/* ================= SERVICES MARQUEE ================= */}

      <div className="relative z-10 border-t-2 border-(--color-brand-black)/15 py-10 overflow-hidden bg-(--color-dark-yellow)">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          gap={0}
          autoFill={true}
        >
          {location.services.map((item) => (
            <div
              key={item}
              className="flex items-center whitespace-nowrap px-8"
            >
              <span className="font-bold font-(family-name:--font-accent) text-(--color-brand-black) text-2xl">
                {item}
              </span>

              <Sparkles className="w-5 h-5 ml-8 text-(--color-brand-black)/60 shrink-0" />
            </div>
          ))}
        </Marquee>
      </div>
      {/* ================= FAQS SECTION ================= */}

      <section className="relative bg-white overflow-hidden py-15">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-(--color-brand-black) bg-(--color-dark-yellow) text-xs font-bold tracking-widest uppercase text-(--color-brand-black) mb-5">
              <HelpCircle className="w-3.5 h-3.5" strokeWidth={2.5} />
              FAQs
            </span>

            <h2 className="font-(family-name:--font-accent) text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-(--color-brand-black) mb-4">
              Questions About {location.name} Taxis?
            </h2>

            <p className="text-(--color-gray-dark)/70 text-base sm:text-lg max-w-xl">
              Everything you need to know before booking your next ride in{" "}
              {location.name}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {location.faqs.map(({ question, answer }, index) => {
              const isOpen = openFaqIndex === index;

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
                    onClick={() => toggleFaq(index)}
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
      {/* ================= CTA SECTION ================= */}

      <section className="relative bg-(--color-dark-yellow) overflow-hidden py-10">
        <div className="relative z-10 max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-(--color-brand-black)/70 mb-2">
              Book Taxi in {location.name} Instantly
            </p>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-(family-name:--font-accent) text-(--color-brand-black) leading-tight">
              Need a Taxi in {location.name}?
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href={`https://wa.me/918347112150?text=${encodeURIComponent(
                `I want to book a taxi in ${location.name}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-(--color-dark-yellow) text-(--color-brand-black) font-extrabold text-sm uppercase tracking-wider rounded-full border-2 border-(--color-brand-black) shadow-[4px_4px_0px_var(--color-brand-black)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_var(--color-brand-black)] transition-all cursor-pointer"
            >
              Book on WhatsApp
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>

            <Link
              href="tel:+918347112150"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-(--color-brand-black) font-extrabold text-sm uppercase tracking-wider rounded-full border-2 border-(--color-brand-black) shadow-[4px_4px_0px_var(--color-brand-black)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_var(--color-brand-black)] transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              Call Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationsPage;
