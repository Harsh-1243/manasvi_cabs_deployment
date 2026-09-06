"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Menu, X, ChevronDown } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const LOCATIONS = [
  "Ahmedabad",
  "Surat",
  "Vadodara",
  "Rajkot",
  "Hirasar Airport (Rajkot)",
  "Bhavnagar",
  "Palitana",
  "Talaja",
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Cars", href: "/cars" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { Icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { Icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
];

const slugify = (str) =>
  String(str)
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const isLocationsActive = pathname?.startsWith("/locations");
  const isLocationLinkActive = (href) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-(--color-brand-yellow) px-3 sm:px-5 lg:px-8 pt-3 sm:pt-4 pb-3 sm:pb-4">
      {/* ================= FLOATING PILL NAV BAR ================= */}
      <div className="max-w-7xl mx-auto bg-white border-[3px] border-(--color-brand-black) rounded-full shadow-[6px_6px_0px_var(--color-brand-black)] pl-4 pr-2.5 sm:pl-6 sm:pr-3 py-2 sm:py-2.5 flex items-center justify-between gap-3">
        {/* logo */}
        <Link
          href="/"
          className="shrink-0 flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Image
            src="/images/logo.png"
            alt="Manasvi Cabs Logo"
            width={140}
            height={52}
            className="h-9 sm:h-10 w-auto object-contain"
          />
        </Link>

        {/* nav pill */}
        <nav className="hidden lg:flex items-center gap-1 bg-gray-50 rounded-full p-1.5 border border-(--color-brand-black)/10">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${
                isActive(href)
                  ? "bg-white text-(--color-brand-black) shadow-sm border border-(--color-brand-black)/10"
                  : "text-(--color-gray-dark)/60 hover:text-(--color-brand-black)"
              }`}
            >
              {label}
            </Link>
          ))}

          <div className="relative group">
            <button
              className={`flex cursor-pointer items-center gap-1.5 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${
                isLocationsActive
                  ? "bg-white text-(--color-brand-black) shadow-sm border border-(--color-brand-black)/10"
                  : "text-(--color-gray-dark)/60 hover:text-(--color-brand-black)"
              }`}
            >
              Locations
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
            </button>

            <div className="absolute left-0 top-full mt-2 w-56 bg-white border-2 border-(--color-brand-black) rounded-2xl shadow-[4px_4px_0px_var(--color-brand-black)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-3">
                {LOCATIONS.map((location, idx) => {
                  const slug = slugify(location);
                  const href = `/locations/${slug}`;
                  const active = isLocationLinkActive(href);
                  return (
                    <Link
                      key={slug}
                      href={href}
                      className={`block px-6 py-2.5 text-sm font-semibold transition-all ${
                        active
                          ? "bg-(--color-dark-yellow) text-(--color-brand-black)"
                          : "text-(--color-brand-black) hover:bg-(--color-dark-yellow)/40"
                      } ${
                        idx !== LOCATIONS.length - 1
                          ? "border-b border-(--color-brand-black)/10"
                          : ""
                      }`}
                    >
                      {location}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>

        {/* right actions */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="tel:+918347112150"
            className="hidden sm:inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 bg-(--color-dark-yellow) text-(--color-brand-black) font-extrabold text-xs uppercase tracking-wide rounded-full border-[3px] border-(--color-brand-black) shadow-[3px_3px_0px_var(--color-brand-black)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_var(--color-brand-black)] transition-all"
          >
            <Phone className="w-4 h-4" strokeWidth={2.5} />
            Book Now
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-(--color-brand-black) bg-gray-50 rounded-full border-2 border-(--color-brand-black)/15 transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" strokeWidth={2.5} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2.5 bg-white border-[3px] border-(--color-brand-black) rounded-3xl shadow-[6px_6px_0px_var(--color-brand-black)] overflow-hidden">
          <div className="px-5 py-5 space-y-2.5">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`block px-4 py-2.5 text-sm font-bold uppercase tracking-wide rounded-xl transition-all border-2 ${
                  isActive(href)
                    ? "bg-(--color-dark-yellow) border-(--color-brand-black) text-(--color-brand-black) shadow-[3px_3px_0px_var(--color-brand-black)]"
                    : "text-(--color-brand-black) border-transparent hover:bg-(--color-dark-yellow)/20"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}

            <div>
              <button
                onClick={() => setLocationsDropdownOpen(!locationsDropdownOpen)}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-bold uppercase tracking-wide rounded-xl transition-all border-2 ${
                  isLocationsActive
                    ? "bg-(--color-dark-yellow) border-(--color-brand-black) text-(--color-brand-black) shadow-[3px_3px_0px_var(--color-brand-black)]"
                    : "text-(--color-brand-black) border-transparent hover:bg-(--color-dark-yellow)/20"
                }`}
              >
                Locations
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    locationsDropdownOpen ? "rotate-180" : ""
                  }`}
                  strokeWidth={2.5}
                />
              </button>

              {locationsDropdownOpen && (
                <div className="pl-4 space-y-1.5 mt-2 bg-gray-50 rounded-xl p-2 border border-(--color-brand-black)/10">
                  {LOCATIONS.map((location) => {
                    const slug = slugify(location);
                    const href = `/locations/${slug}`;
                    const active = isLocationLinkActive(href);
                    return (
                      <Link
                        key={slug}
                        href={href}
                        className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-all ${
                          active
                            ? "bg-(--color-dark-yellow) text-(--color-brand-black)"
                            : "text-(--color-brand-black) hover:bg-(--color-dark-yellow)/40"
                        }`}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setLocationsDropdownOpen(false);
                        }}
                      >
                        {location}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="tel:+918347112150"
              className="block mt-3 px-4 py-3 bg-(--color-dark-yellow) text-(--color-brand-black) font-extrabold text-sm uppercase tracking-wide rounded-xl border-2 border-(--color-brand-black) shadow-[3px_3px_0px_var(--color-brand-black)] text-center transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_var(--color-brand-black)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>

            {/* ========== CONTACT INFO — mobile only ========== */}
            <div className="pt-4 mt-4 border-t-2 border-dashed border-(--color-brand-black)/15 space-y-3">
              <Link
                href="tel:+918347112150"
                className="flex items-center gap-3 text-sm font-semibold text-(--color-brand-black)"
              >
                <div className="w-8 h-8 rounded-full bg-(--color-dark-yellow) border-2 border-(--color-brand-black) flex items-center justify-center shrink-0">
                  <Phone
                    className="w-3.5 h-3.5 text-(--color-brand-black)"
                    strokeWidth={2.5}
                  />
                </div>
                +91 83471 12150
              </Link>

              <Link
                href="mailto:info.manasvicabs@gmail.com"
                className="flex items-center gap-3 text-sm font-semibold text-(--color-brand-black)"
              >
                <div className="w-8 h-8 rounded-full bg-(--color-dark-yellow) border-2 border-(--color-brand-black) flex items-center justify-center shrink-0">
                  <Mail
                    className="w-3.5 h-3.5 text-(--color-brand-black)"
                    strokeWidth={2.5}
                  />
                </div>
                info.manasvicabs@gmail.com
              </Link>

              <div className="flex items-start gap-3 text-sm text-(--color-gray-dark)/70">
                <div className="w-8 h-8 rounded-full bg-(--color-dark-yellow) border-2 border-(--color-brand-black) flex items-center justify-center shrink-0">
                  <MapPin
                    className="w-3.5 h-3.5 text-(--color-brand-black)"
                    strokeWidth={2.5}
                  />
                </div>
                <span className="leading-relaxed pt-1">
                  Talaja, Palitana, Bhavnagar, Ahmedabad, Rajkot, Hirasar
                  Airport (Rajkot), Vadodara and Surat
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                {SOCIALS.map(({ Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-gray-50 border-2 border-(--color-brand-black)/15 flex items-center justify-center text-(--color-brand-black) hover:bg-(--color-dark-yellow) hover:border-(--color-brand-black) transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
