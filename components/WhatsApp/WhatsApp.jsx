"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

const WhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumber = "918347112150";
  const message = encodeURIComponent(
    "Hello Manasvi Cab! I would like to book a taxi.\n\nYour Name:\nPickup Location:\nDrop Location:\nDate & Time:\nCab Type:\n\nPlease share availability and fare details.",
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
        {showTooltip && (
          <div className="absolute bottom-16 right-0 mb-2 bg-gray-900 text-white text-sm rounded-lg px-3 py-2 whitespace-nowrap shadow-lg border border-white/10">
            Chat with us on WhatsApp
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-gray-900 rotate-45 border-r border-b border-white/10" />
          </div>
        )}

        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle
            className="w-6 h-6 md:w-7 md:h-7 text-white"
            strokeWidth={1.5}
          />

          <span className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping group-hover:animate-none" />
        </Link>
      </div>
    </>
  );
};

export default WhatsApp;
