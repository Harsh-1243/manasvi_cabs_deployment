"use client";

import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { MapPin, Phone, Mail } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Cars", href: "/cars" },
  { label: "Contact Us", href: "/contact" },
];

const LOCATIONS = [
  { name: "Ahmedabad", href: "/locations/ahmedabad" },
  { name: "Surat", href: "/locations/surat" },
  { name: "Vadodara", href: "/locations/vadodara" },
  { name: "Rajkot", href: "/locations/rajkot" },
  { name: "Bhavnagar", href: "/locations/bhavnagar" },
  { name: "Palitana", href: "/locations/palitana" },
  { name: "Talaja", href: "/locations/talaja" },
];

const CONTACT_INFO = [
  {
    icon: MapPin,
    text: "Shop No 207, Shubh Laxmi Arch Kaliyabid, Bhavnagar, Gujarat 364001",
    href: null,
  },
  {
    icon: Phone,
    text: "+91 83471 12150",
    href: "tel:+918347112150",
  },
  {
    icon: Mail,
    text: "info.manasvicabs@gmail.com",
    href: "mailto:info.manasvicabs@gmail.com",
  },
];

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (href) => {
    if (!href) return;
    router.push(href);
  };

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <footer className="relative bg-(--color-brand-black) text-white overflow-hidden">
      <div className="h-1 bg-linear-to-r from-transparent via-(--color-brand-yellow) to-transparent" />

      <div className="px-6 lg:px-16 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="flex flex-col">
              <button
                type="button"
                onClick={() => handleNavigate("/")}
                className="inline-block mb-6 w-fit"
                aria-label="Go to Manasvi Cabs home page"
              >
                <div className="bg-white p-3 rounded-2xl hover:shadow-lg transition-shadow">
                  <Image
                    src="/images/logo.png"
                    alt="Manasvi Cabs Logo"
                    width={160}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              </button>

              <p className="text-sm leading-relaxed text-white/75">
                Manasvi Cabs offers reliable taxi services across Gujarat
                including Palitana, Bhavnagar, Talaja, Ahmedabad, Rajkot, Surat
                and Vadodara with professional drivers and comfortable rides.
              </p>
            </div>

            <div>
              <h3 className="font-extrabold font-(family-name:--font-accent) text-base mb-6 text-(--color-brand-yellow) uppercase tracking-widest">
                Quick Links
              </h3>

              <ul className="space-y-3">
                {QUICK_LINKS.map(({ label, href }) => {
                  const active = isActive(href);
                  return (
                    <li key={label}>
                      <button
                        type="button"
                        onClick={() => handleNavigate(href)}
                        aria-current={active ? "page" : undefined}
                        className={`text-sm cursor-pointer transition-colors font-medium flex items-center gap-2 ${
                          active
                            ? "text-(--color-brand-yellow)"
                            : "text-white/75 hover:text-(--color-brand-yellow)"
                        }`}
                      >
                        {label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="font-extrabold text-base mb-6 text-(--color-brand-yellow) font-(family-name:--font-accent) uppercase tracking-widest">
                Our Locations
              </h3>

              <ul className="space-y-2">
                {LOCATIONS.map(({ name, href }) => {
                  const active = isActive(href);
                  return (
                    <li key={name}>
                      <button
                        type="button"
                        onClick={() => handleNavigate(href)}
                        aria-current={active ? "page" : undefined}
                        className={`text-sm cursor-pointer transition-colors flex items-center gap-2 font-medium ${
                          active
                            ? "text-(--color-brand-yellow)"
                            : "text-white/75 hover:text-(--color-brand-yellow)"
                        }`}
                      >
                        <MapPin
                          className={`w-3.5 h-3.5 shrink-0 ${
                            active
                              ? "text-(--color-brand-yellow)"
                              : "text-(--color-brand-yellow)"
                          }`}
                        />
                        {name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="font-extrabold text-base mb-6 text-(--color-brand-yellow) font-(family-name:--font-accent) uppercase tracking-widest">
                Get In Touch
              </h3>

              <ul className="space-y-4">
                {CONTACT_INFO.map(({ icon: Icon, text, href }, index) => (
                  <li key={index} className="flex gap-3">
                    <Icon className="w-4 h-4 text-(--color-brand-yellow) mt-0.5 shrink-0" />

                    <div className="flex-1">
                      {href ? (
                        <button
                          type="button"
                          onClick={() => {
                            window.location.href = href;
                          }}
                          className="text-sm text-white/75 hover:text-(--color-brand-yellow) transition-colors wrap-break-word font-medium text-left"
                        >
                          {text}
                        </button>
                      ) : (
                        <span className="text-sm text-white/75 wrap-break-word">
                          {text}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6 text-center sm:text-left">
            <p className="text-xs text-white/60">
              All Rights Reserved © 2026 Manasvi Cabs{" "}
              <span className="hidden sm:inline"> | </span>
              Designed & Developed by{" "}
              <button
                type="button"
                onClick={() =>
                  window.open(
                    "https://codeharnix.vercel.app",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                className="text-(--color-brand-yellow) hover:underline font-semibold"
              >
                CodeHarnix
              </button>
            </p>

            <div className="flex items-center gap-4 text-xs text-white/60">
              <button
                type="button"
                onClick={() => handleNavigate("/terms-of-service")}
                className={`transition-colors ${
                  isActive("/terms-of-service")
                    ? "text-(--color-brand-yellow)"
                    : "hover:text-(--color-brand-yellow)"
                }`}
              >
                Term of Service
              </button>

              <span className="hidden sm:inline">|</span>

              <button
                type="button"
                onClick={() => handleNavigate("/privacy-policy")}
                className={`transition-colors ${
                  isActive("/privacy-policy")
                    ? "text-(--color-brand-yellow)"
                    : "hover:text-(--color-brand-yellow)"
                }`}
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
