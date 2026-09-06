"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const HeaderBanner = ({
  title,
  badgeLabel = "Manasvi Cabs",
  description,
  breadcrumbs = [],
}) => {
  const displayTitle = title || "Page";
  const formattedBreadcrumbs =
    breadcrumbs.length > 0 ? breadcrumbs : ["Home", displayTitle];

  return (
    <div className="relative w-full bg-(--color-brand-yellow) overflow-hidden pt-8 pb-16 sm:pt-16 sm:pb-24 md:pt-20 md:pb-28">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.15) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />

      {/* Car Image - Visible on all screens but positioned differently */}
      <Image
        src="/images/banner_car.png"
        alt="Manasvi Cabs Car"
        width={500}
        height={300}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-32 sm:w-70 md:w-95 lg:w-125 h-auto object-contain opacity-40 sm:opacity-100"
      />

      <div className="relative z-10 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border-2 border-(--color-brand-black) bg-white text-[10px] sm:text-xs font-bold tracking-widest uppercase text-(--color-brand-black) mb-3 sm:mb-5">
          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-(--color-brand-black)" />
          {badgeLabel}
        </span>

        <p className="font-(family-name:--font-accent) text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] sm:leading-[1.05] text-(--color-brand-black) mb-2 sm:mb-3 max-w-[75%] xs:max-w-[70%] sm:max-w-3xl wrap-break-word">
          {displayTitle}
        </p>

        {description && (
          <p className="text-(--color-brand-black)/75 text-[10px] xs:text-xs sm:text-sm md:text-base max-w-[80%] xs:max-w-[75%] sm:max-w-2xl mb-4 sm:mb-6 leading-relaxed">
            {description}
          </p>
        )}

        <div className="flex items-center gap-1 sm:gap-2 flex-wrap max-w-[80%] xs:max-w-[75%] sm:max-w-full">
          {formattedBreadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {index === 0 ? (
                <Link
                  href="/"
                  className="text-(--color-brand-black)/70 hover:text-(--color-brand-black) transition-colors uppercase text-[10px] sm:text-xs md:text-sm font-bold tracking-wide"
                >
                  {crumb}
                </Link>
              ) : index === formattedBreadcrumbs.length - 1 ? (
                <span className="text-(--color-brand-black) uppercase text-[10px] sm:text-xs md:text-sm font-bold tracking-wide">
                  {crumb}
                </span>
              ) : (
                <Link
                  href={`/${crumb.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-(--color-brand-black)/70 hover:text-(--color-brand-black) transition-colors uppercase text-[10px] sm:text-xs md:text-sm font-bold tracking-wide"
                >
                  {crumb}
                </Link>
              )}

              {index < formattedBreadcrumbs.length - 1 && (
                <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-(--color-brand-black)/50" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-6 sm:h-8 md:h-10 z-10"
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,40 L0,10 L60,24 L120,6 L180,26 L240,4 L300,22 L360,8 L420,25
             L480,5 L540,20 L600,3 L660,24 L720,7 L780,26 L840,5 L900,22
             L960,4 L1020,25 L1080,8 L1140,20 L1200,6 L1200,40 Z"
          fill="var(--color-white)"
        />
      </svg>
    </div>
  );
};

export default HeaderBanner;
