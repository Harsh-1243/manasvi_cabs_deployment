import React from "react";
import PrivacyPolicyPage from "../../pages/PrivacyPolicyPage/PrivacyPolicyPage";

export const metadata = {
  title: "Privacy Policy – Manasvi Cabs | Taxi Service in Gujarat",
  description:
    "Read the Privacy Policy of Manasvi Cabs. Learn how we collect, use, and protect your personal information when you book taxi services in Ahmedabad, Surat, Vadodara, Rajkot, Bhavnagar, Palitana, and Talaja.",
  keywords: [
    "Privacy Policy",
    "Taxi Service Privacy",
    "Data Protection",
    "Personal Information Security",
    "Taxi Booking Privacy",
    "Customer Data Protection",
    "Gujarat Taxi Service Policy",
    "Taxi Service Terms",
    "Booking Privacy Policy",
    "Travel Service Privacy",
  ],
  alternates: {
    canonical: "https://manasvicabs.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy – Manasvi Cabs | Taxi Service in Gujarat",
    description:
      "Learn how Manasvi Cabs protects your personal information when booking taxi services in Gujarat.",
    url: "https://manasvicabs.com/privacy-policy",
    type: "website",
  },
};

const page = () => {
  return <PrivacyPolicyPage />;
};

export default page;
