"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  Share2,
  Cookie,
  MessageCircle,
  RefreshCw,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

import HeaderBanner from "../../components/HeaderBanner/HeaderBanner";

const PRIVACY_SECTIONS = [
  {
    number: "1",
    title: "Information We Collect",
    icon: Database,
    content:
      "We may collect personal information such as your name, phone number, email address, pickup and drop details, and any other information you provide while booking a taxi or using our services.",
  },
  {
    number: "2",
    title: "How We Use Your Information",
    icon: Eye,
    content:
      "Your information is used to provide taxi services, respond to inquiries, confirm bookings, and improve our services. We may also use your details to contact you regarding your booking or support requests.",
  },
  {
    number: "3",
    title: "Data Protection",
    icon: Lock,
    content:
      "We take appropriate measures to protect your personal data from unauthorized access, misuse, or disclosure. However, no method of transmission over the internet is 100% secure.",
  },
  {
    number: "4",
    title: "Sharing of Information",
    icon: Share2,
    content:
      "We do not sell or rent your personal information. Your data may only be shared with drivers or service providers directly involved in fulfilling your booking and service requests.",
  },
  {
    number: "5",
    title: "Cookies & Tracking",
    icon: Cookie,
    content:
      "Our website may use cookies to enhance user experience and analyze website performance. You can disable cookies through your browser settings.",
  },
  {
    number: "6",
    title: "Third-Party Services",
    icon: MessageCircle,
    content:
      "We may use third-party services such as WhatsApp or email services for communication. These platforms have their own privacy policies, which we recommend reviewing.",
  },
  {
    number: "7",
    title: "Updates to This Policy",
    icon: RefreshCw,
    content:
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page.",
  },
];

const PrivacyPolicyPage = () => {
  return (
    <>
      <HeaderBanner title="Privacy Policy" />

      <section
        className="relative overflow-hidden bg-white py-15"
        aria-label="Privacy Policy - Manasvi Cabs"
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden="true"
        />

        {/* Decorative Background Elements */}
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-(--color-dark-yellow)/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-(--color-dark-yellow)/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-3">
          {/* Page Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-(--color-brand-black) bg-(--color-dark-yellow) text-xs font-bold tracking-widest uppercase text-(--color-brand-black) mb-6">
              <ShieldCheck className="w-4 h-4" strokeWidth={2.5} />
              Your Privacy Matters
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-(family-name:--font-accent) text-(--color-brand-black) leading-[1.15] mb-4">
              Privacy Policy
            </h1>

            <p className="max-w-5xl mx-auto text-(--color-gray-dark)/70 text-base sm:text-lg leading-relaxed">
              At Manasvi Cabs, we value your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, and safeguard your information while using
              our taxi services.
            </p>
          </div>

          {/* Main Privacy Card */}
          <div className="relative bg-white border-2 border-(--color-brand-black) rounded-3xl shadow-[8px_8px_0px_var(--color-brand-black)] overflow-hidden">
            {/* Yellow Top Strip */}
            <div className="h-3 bg-(--color-dark-yellow)" />

            <div className="p-5 sm:p-8 lg:p-10">
              {/* Intro Section */}
              <div className="pb-8 mb-8 border-b-2 border-(--color-brand-black)/10">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-(--color-dark-yellow) border-2 border-(--color-brand-black) flex items-center justify-center shadow-[3px_3px_0px_var(--color-brand-black)]">
                    <ShieldCheck
                      className="w-6 h-6 text-(--color-brand-black)"
                      strokeWidth={2.5}
                    />
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-(--color-brand-black) mb-2">
                      Protecting Your Information
                    </h2>

                    <p className="text-(--color-gray-dark)/70 text-sm sm:text-base leading-relaxed">
                      Your trust is important to us. We are committed to
                      handling your information responsibly and protecting your
                      privacy when you use Manasvi Cabs services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Privacy Sections */}
              <div className="space-y-4">
                {PRIVACY_SECTIONS.map((section) => {
                  const Icon = section.icon;

                  return (
                    <div
                      key={section.number}
                      className="group rounded-2xl border-2 border-(--color-brand-black)/10 p-5 sm:p-6 transition-all duration-200 hover:border-(--color-brand-black) hover:shadow-[4px_4px_0px_var(--color-dark-yellow)]"
                    >
                      <div className="flex items-start gap-4">
                        {/* Number */}
                        <div className="shrink-0 w-10 h-10 rounded-full bg-(--color-dark-yellow) border-2 border-(--color-brand-black) flex items-center justify-center font-extrabold text-(--color-brand-black)">
                          {section.number}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-extrabold text-(--color-brand-black) text-lg sm:text-xl">
                              {section.title}
                            </h3>
                          </div>

                          <p className="text-(--color-gray-dark)/70 text-sm sm:text-base leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Contact Section */}
              <div className="mt-8 sm:mt-10 pt-8 border-t-2 border-(--color-brand-black)/10">
                <div className="rounded-2xl bg-(--color-dark-yellow) border-2 border-(--color-brand-black) p-6 sm:p-8">
                  <h2 className="text-3xl sm:text-5xl font-semibold font-(family-name:--font-accent) text-(--color-brand-black) mb-3">
                    Contact Us
                  </h2>

                  <p className="text-(--color-brand-black)/70 text-sm sm:text-base mb-6">
                    If you have any questions regarding this Privacy Policy, you
                    can contact us.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="tel:+918347112150"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--color-brand-black) text-(--color-dark-yellow) font-bold rounded-xl border-2 border-(--color-brand-black) transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      <Phone className="w-4 h-4" strokeWidth={2.5} />
                      +91 83471 12150
                    </Link>

                    <Link
                      href="mailto:info.manasvicabs@gmail.com"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-(--color-brand-black) font-bold rounded-xl border-2 border-(--color-brand-black) transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      <Mail className="w-4 h-4" strokeWidth={2.5} />
                      info.manasvicabs@gmail.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back Home */}
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

export default PrivacyPolicyPage;
