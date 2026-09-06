import React from "react";
import AboutPage from "../../pages/AboutPage/AboutPage";

export const metadata = {
  title: "About Manasvi Cabs – Trusted Taxi Service in Gujarat",
  description:
    "Learn about Manasvi Cabs – a trusted taxi service provider in Gujarat since 2016. We offer reliable cab services in Ahmedabad, Surat, Vadodara, Rajkot, Bhavnagar, Palitana, and Talaja with professional drivers.",
  keywords: [
    "About Taxi Service",
    "Taxi Service Company Gujarat",
    "Trusted Taxi Service",
    "Reliable Taxi Gujarat",
    "Taxi Service Provider",
    "Professional Taxi Drivers",
    "Taxi Service Ahmedabad",
    "Taxi Service Surat",
    "Taxi Service Vadodara",
    "Taxi Service Rajkot",
    "Taxi Service Bhavnagar",
    "Taxi Service Palitana",
    "Taxi Service Talaja",
    "Best Taxi Company Gujarat",
    "Taxi Fleet Gujarat",
    "Gujarat Travel Service",
    "Local Taxi Service",
    "Outstation Taxi Service",
    "Airport Taxi Service",
    "24x7 Taxi Service",
  ],
  alternates: {
    canonical: "https://manasvicabs.com/about",
  },
  openGraph: {
    title: "About Manasvi Cabs – Trusted Taxi Service in Gujarat",
    description:
      "Trusted taxi service provider in Gujarat since 2016. Reliable Taxi services with professional drivers.",
    url: "https://manasvicabs.com/about",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <AboutPage />
    </div>
  );
};

export default page;
