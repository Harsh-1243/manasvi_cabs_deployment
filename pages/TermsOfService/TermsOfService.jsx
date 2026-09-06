"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, FileText, Phone, Mail, ArrowRight } from "lucide-react";
import HeaderBanner from "../../components/HeaderBanner/HeaderBanner";

const TERMS_SECTIONS = [
  {
    number: "1",
    title: "Booking & Confirmation",
    content:
      "All taxi bookings are subject to availability. Confirmation will be provided via phone, WhatsApp, or email. Please ensure that all details provided during booking are accurate.",
  },
  {
    number: "2",
    title: "Payment",
    content:
      "Payment terms will be communicated at the time of booking. Customers are required to pay the agreed amount as per the taxi service. Any additional charges such as tolls, parking, waiting time, or other applicable charges may apply.",
  },
  {
    number: "3",
    title: "Cancellation Policy",
    content:
      "Cancellation should be made in advance. Late cancellations may attract cancellation charges depending on the timing and taxi service booked.",
  },
  {
    number: "4",
    title: "Customer Responsibilities",
    content:
      "Customers are expected to behave respectfully with drivers and maintain cleanliness inside the vehicle. Any damage caused to the vehicle may result in additional charges.",
  },
  {
    number: "5",
    title: "Driver & Vehicle",
    content:
      "We provide clean and well-maintained vehicles. However, delays due to traffic, weather, road conditions, or unforeseen circumstances are not under our control.",
  },
  {
    number: "6",
    title: "Liability",
    content:
      "Manasvi Cabs is not responsible for any loss, damage, or delay caused during the journey due to external factors. Customers are responsible for their personal belongings.",
  },
  {
    number: "7",
    title: "Service Area",
    content:
      "Our taxi services are available across Gujarat including Ahmedabad, Surat, Vadodara, Rajkot, Hirasar Airport, Bhavnagar, Palitana, and Talaja.",
  },
  {
    number: "8",
    title: "Changes to Terms",
    content:
      "We reserve the right to update or modify these terms at any time without prior notice. Continued use of our taxi services means you accept the updated terms.",
  },
];

const TermsOfServicePage = () => {
  return (
    <>
      <HeaderBanner title="Terms Of Services" />

      <section
        className="relative overflow-hidden bg-white py-15"
        aria-label="Terms of Service - Manasvi Cabs"
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden="true"
        />

        {/* Decorative yellow circle */}
        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-full bg-(--color-dark-yellow)/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-3">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-(--color-brand-black) bg-(--color-dark-yellow) text-xs font-bold tracking-widest uppercase text-(--color-brand-black) mb-6">
              <FileText className="w-4 h-4" strokeWidth={2.5} />
              Legal Information
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-(family-name:--font-accent) text-(--color-brand-black) leading-[1.15] mb-4">
              Terms & Condition
            </h1>

            <p className="max-w-5xl mx-auto text-(--color-gray-dark)/70 text-base sm:text-lg leading-relaxed">
              Welcome to Manasvi Cabs. By using our taxi services, you agree to
              the following terms and conditions. Please read them carefully
              before booking a ride.
            </p>
          </div>

          {/* Terms card */}
          <div className="relative bg-white border-2 border-(--color-brand-black) rounded-3xl shadow-[8px_8px_0px_var(--color-brand-black)] overflow-hidden">
            {/* Top accent */}
            <div className="h-3 bg-(--color-dark-yellow)" />

            <div className="p-5 sm:p-8 lg:p-10">
              {/* Introduction */}
              <div className="pb-8 mb-8 border-b-2 border-(--color-brand-black)/10">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-(--color-dark-yellow) border-2 border-(--color-brand-black) flex items-center justify-center shadow-[3px_3px_0px_var(--color-brand-black)]">
                    <CheckCircle2
                      className="w-6 h-6 text-(--color-brand-black)"
                      strokeWidth={2.5}
                    />
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-(--color-brand-black) mb-2">
                      Welcome to Manasvi Cabs
                    </h2>

                    <p className="text-(--color-gray-dark)/70 text-sm sm:text-base leading-relaxed">
                      By booking or using our taxi services, you agree to comply
                      with the following terms and conditions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="space-y-4">
                {TERMS_SECTIONS.map((section) => (
                  <div
                    key={section.number}
                    className="group rounded-2xl border-2 border-(--color-brand-black)/10 p-5 sm:p-6 transition-all duration-200 hover:border-(--color-brand-black) hover:shadow-[4px_4px_0px_var(--color-dark-yellow)]"
                  >
                    <div className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-(--color-dark-yellow) border-2 border-(--color-brand-black) flex items-center justify-center font-extrabold text-(--color-brand-black)">
                        {section.number}
                      </div>

                      <div>
                        <h3 className="font-extrabold text-(--color-brand-black) text-lg sm:text-xl mb-2">
                          {section.title}
                        </h3>

                        <p className="text-(--color-gray-dark)/70 text-sm sm:text-base leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact section */}
              <div className="mt-8 sm:mt-10 pt-8 border-t-2 border-(--color-brand-black)/10">
                <div className="rounded-2xl bg-(--color-dark-yellow) border-2 border-(--color-brand-black) p-6 sm:p-8">
                  <h2 className="text-3xl sm:text-5xl font-semibold font-(family-name:--font-accent) text-(--color-brand-black) mb-3">
                    Contact Us
                  </h2>

                  <p className="text-(--color-brand-black)/70 text-sm sm:text-base mb-6">
                    For any questions regarding these Terms & Conditions, please
                    contact us.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="tel:+918347112150"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--color-brand-black) text-(--color-dark-yellow) font-bold rounded-xl border-2 border-(--color-brand-black) transition-transform hover:-translate-y-0.5"
                    >
                      <Phone className="w-4 h-4" strokeWidth={2.5} />
                      +91 83471 12150
                    </Link>

                    <Link
                      href="mailto:info.manasvicabs@gmail.com"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-(--color-brand-black) font-bold rounded-xl border-2 border-(--color-brand-black) transition-transform hover:-translate-y-0.5"
                    >
                      <Mail className="w-4 h-4" strokeWidth={2.5} />
                      Email Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-14">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-(--color-dark-yellow) border-2 border-(--color-brand-black) text-(--color-brand-black) font-bold shadow-[4px_4px_0px_var(--color-brand-black)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_var(--color-brand-black)] transition-all"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfServicePage;
