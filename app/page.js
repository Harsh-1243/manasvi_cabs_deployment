import React from "react";
import HomePage from "../pages/HomePage/HomePage";

export const metadata = {
  title: "Manasvi Cabs – Taxi Service in Gujarat | Book Taxi Online",
  description:
    "Book reliable taxi service in Ahmedabad, Surat, Vadodara, Rajkot, Hirasar Airport, Bhavnagar, Palitana, and Talaja. Manasvi Cabs offers local cabs, outstation trips, airport transfers, and one-way taxi at affordable rates.",
  keywords: [
    "Taxi Service Gujarat",
    "Book Taxi Online",
    "Taxi Service Ahmedabad",
    "Taxi Service Surat",
    "Taxi Service Vadodara",
    "Taxi Service Rajkot",
    "Taxi Service Bhavnagar",
    "Taxi Service Palitana",
    "Taxi Service Talaja",
    "Airport Taxi Gujarat",
    "Outstation Taxi Gujarat",
    "One Way Taxi Gujarat",
    "Round Trip Taxi",
    "Local Taxi Service",
    "24x7 Taxi Booking",
    "Hire Taxi Gujarat",
    "Best Taxi Service",
    "Affordable Taxi Service",
    "Professional Taxi Drivers",
  ],
  alternates: {
    canonical: "https://manasvicabs.com/",
  },
  openGraph: {
    title: "Manasvi Cabs – Taxi Service in Gujarat | Book Taxi Online",
    description:
      "Book reliable taxi service in Gujarat. Local Taxi, outstation trips, airport transfers, and one-way taxi at affordable rates.",
    url: "https://manasvicabs.com/",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <main>
        <HomePage />
      </main>
    </div>
  );
};

export default page;
