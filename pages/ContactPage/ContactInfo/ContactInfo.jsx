"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import BookingForm from "../../../components/BookingForm/BookingForm";

const CONTACT_CARDS = [
  {
    icon: Phone,
    title: "Contact Us",
    content: "+91 83471 12150",
    href: "tel:+918347112150",
    type: "phone",
  },
  {
    icon: Mail,
    title: "Mail Us",
    content: "info.manasvicabs@gmail.com",
    href: "mailto:info.manasvicabs@gmail.com",
    type: "email",
  },
  {
    icon: MapPin,
    title: "Our Office Location",
    content: "Shop No 207, Shubh Laxmi Arch, Kaliyabid, Bhavnagar, 364001",
    href: "https://maps.google.com/?q=Shop+No+207+Shubh+Laxmi+Arch+Kaliyabid+Bhavnagar",
    type: "location",
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

const ContactInfo = () => {
  return (
    <>
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
          <div className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-(--color-brand-black) bg-(--color-dark-yellow) text-xs font-bold tracking-widest uppercase text-(--color-brand-black) mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-(--color-brand-black)" />
              Get in Touch
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-(family-name:--font-accent) leading-[1.1] text-(--color-brand-black) mb-4">
              Contact Manasvi Cabs
            </h2>

            <p className="text-(--color-gray-dark)/70 text-base sm:text-lg max-w-5xl mx-auto">
              Have questions about taxi booking, rates, or our services? We're
              here to help 24/7 across Ahmedabad, Surat, Vadodara, Rajkot,
              Bhavnagar, Palitana, and Talaja.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-white overflow-hidden py-5">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONTACT_CARDS.map(
              ({ icon: Icon, title, content, href, type }, i) => (
                <Link
                  key={type}
                  href={href}
                  target={type === "location" ? "_blank" : undefined}
                  rel={type === "location" ? "noopener noreferrer" : undefined}
                  className={`relative shadow-md border-2 border-(--color-brand-black)/10 rounded-2xl p-6 pt-8 ${ROTATIONS[i]} hover:rotate-0 hover:shadow-lg transition-all duration-200`}
                >
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-(--color-dark-yellow) border-2 border-(--color-brand-black)" />

                  <div className="w-16 h-16 mx-auto rounded-full bg-(--color-dark-yellow) border-[3px] border-(--color-brand-black) flex items-center justify-center mb-6 shadow-[4px_4px_0px_var(--color-brand-black)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-[2px_2px_0px_var(--color-brand-black)] transition-all">
                    <Icon
                      className="w-7 h-7 text-(--color-brand-black)"
                      strokeWidth={2.5}
                    />
                  </div>

                  <h3 className="text-sm font-bold tracking-widest uppercase text-(--color-gray-dark)/60 mb-2">
                    {title}
                  </h3>

                  <p className="text-lg sm:text-xl font-extrabold text-(--color-brand-black) leading-snug wrap-break-word">
                    {content}
                  </p>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="relative bg-(--color-brand-yellow)/15 overflow-hidden py-15">
        <svg
          className="absolute top-0 left-0 w-full h-10 sm:h-14 z-10 rotate-180"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,30 C50,60 100,0 150,30 C200,60 250,0 300,30 C350,60 400,0 450,30 C500,60 550,0 600,30 C650,60 700,0 750,30 C800,60 850,0 900,30 C950,60 1000,0 1050,30 C1100,60 1150,0 1200,30 L1200,60 L0,60 Z"
            fill="white"
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

        <div className="relative z-10 max-w-7xl mx-auto px-5 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-(--color-brand-black) bg-(--color-dark-yellow) text-xs font-bold tracking-widest uppercase text-(--color-brand-black) mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-(--color-brand-black)" />
              Book Your Ride
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-(family-name:--font-accent) leading-[1.2] text-(--color-brand-black) mb-6 max-w-xl">
              Ready to Book Your Perfect Ride?
            </h2>

            <p className="text-(--color-gray-dark)/75 leading-relaxed max-w-2xl mb-8">
              Get instant quote for your taxi service in Ahmedabad, Surat,
              Vadodara, Rajkot, Bhavnagar, Palitana, or Talaja. Our team will
              confirm your booking within minutes with transparent pricing and
              professional drivers.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-(--color-dark-yellow) border-2 border-(--color-brand-black) flex items-center justify-center mt-1 shrink-0">
                  <span className="w-2 h-2 bg-(--color-brand-black) rounded-full" />
                </div>
                <div>
                  <h3 className="font-bold text-(--color-brand-black) mb-1">
                    Instant Booking Confirmation
                  </h3>
                  <p className="text-sm text-(--color-gray-dark)/70">
                    Get confirmed within minutes with driver details
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-(--color-dark-yellow) border-2 border-(--color-brand-black) flex items-center justify-center mt-1 shrink-0">
                  <span className="w-2 h-2 bg-(--color-brand-black) rounded-full" />
                </div>
                <div>
                  <h3 className="font-bold text-(--color-brand-black) mb-1">
                    No Hidden Charges
                  </h3>
                  <p className="text-sm text-(--color-gray-dark)/70">
                    Fixed rates with transparent pricing
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-(--color-dark-yellow) border-2 border-(--color-brand-black) flex items-center justify-center mt-1 shrink-0">
                  <span className="w-2 h-2 bg-(--color-brand-black) rounded-full" />
                </div>
                <div>
                  <h3 className="font-bold text-(--color-brand-black) mb-1">
                    Professional & Verified Drivers
                  </h3>
                  <p className="text-sm text-(--color-gray-dark)/70">
                    All drivers background checked and trained
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="tel:+918347112150"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-(--color-brand-black) font-extrabold text-sm uppercase tracking-wider rounded-full border-2 border-(--color-brand-black) shadow-[4px_4px_0px_var(--color-brand-black)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_var(--color-brand-black)] transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              Call Now
            </Link>
          </div>

          <div className="bg-(--color-brand-yellow)/15 border-2 border-(--color-brand-black)/10 rounded-[28px] p-5">
            <BookingForm />
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
            fill="white"
          />
        </svg>
      </section>

      <section className="relative bg-white overflow-hidden py-10 md:py-12">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-(family-name:--font-accent) text-(--color-brand-black) leading-[1.15] mb-4">
              Need More Information
            </h2>
            <p className="text-(--color-gray-dark)/70 text-base sm:text-lg">
              We're available 24/7 to assist you with any queries about our taxi
              services, rates, or bookings across Gujarat.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-(--color-brand-yellow)/15 border-2 border-(--color-brand-black)/10 rounded-2xl p-7">
              <div className="w-12 h-12 rounded-xl bg-(--color-dark-yellow) border-[3px] border-(--color-brand-black) flex items-center justify-center mb-4">
                <MessageCircle
                  className="w-5 h-5 text-(--color-brand-black)"
                  strokeWidth={2.5}
                />
              </div>
              <h3 className="text-lg font-bold text-(--color-brand-black) mb-2">
                WhatsApp Support
              </h3>
              <p className="text-sm text-(--color-gray-dark)/70 mb-4">
                Chat with us directly for instant taxi booking and support
              </p>
              <Link
                href="https://wa.me/918347112150"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-(--color-brand-black) font-bold text-sm hover:gap-3 transition-all"
              >
                Message on WhatsApp
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </Link>
            </div>

            <div className="bg-(--color-brand-yellow)/15 border-2 border-(--color-brand-black)/10 rounded-2xl p-7">
              <div className="w-12 h-12 rounded-xl bg-(--color-dark-yellow) border-[3px] border-(--color-brand-black) flex items-center justify-center mb-4">
                <Phone
                  className="w-5 h-5 text-(--color-brand-black)"
                  strokeWidth={2.5}
                />
              </div>
              <h3 className="text-lg font-bold text-(--color-brand-black) mb-2">
                Phone Support
              </h3>
              <p className="text-sm text-(--color-gray-dark)/70 mb-4">
                Call us anytime for immediate assistance and Taxi booking
                confirmation
              </p>
              <Link
                href="tel:+918347112150"
                className="inline-flex items-center gap-2 text-(--color-brand-black) font-bold text-sm hover:gap-3 transition-all"
              >
                Call Now
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
