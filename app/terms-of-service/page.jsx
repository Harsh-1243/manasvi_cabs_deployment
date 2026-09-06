import React from "react";
import TermsOfService from "../../pages/TermsOfService/TermsOfService";

export const metadata = {
  title: "Terms of Service – Manasvi Cabs | Taxi Booking Terms",
  description:
    "Read the Terms of Service for Manasvi Cabs. Understand our booking policies, payment terms, cancellation policy, and service area for taxi services in Gujarat.",
  keywords: [
    "Terms of Service",
    "Taxi Booking Terms",
    "Taxi Service Policy",
    "Booking Terms and Conditions",
    "Cancellation Policy",
    "Payment Terms",
    "Taxi Service Rules",
    "Gujarat Taxi Terms",
    "Taxi Booking Conditions",
    "Travel Service Terms",
    "Taxi Booking Policy",
  ],
  alternates: {
    canonical: "https://manasvicabs.com/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service – Manasvi Cabs | Taxi Booking Terms",
    description:
      "Understand the terms and conditions for booking taxi services with Manasvi Cabs in Gujarat.",
    url: "https://manasvicabs.com/terms-of-service",
    type: "website",
  },
};

const page = () => {
  return <TermsOfService />;
};

export default page;
