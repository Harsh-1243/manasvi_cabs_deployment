import React from "react";
import CarsPage from "../../pages/CarsPage/CarsPage";

export const metadata = {
  title: "Our Taxi Fleet – Sedan, SUV, Innova Cars in Gujarat | Manasvi Cabs",
  description:
    "Choose from our taxi fleet in Gujarat – Swift Dzire, Hyundai Aura, Ertiga, Innova, Innova Crysta, and Tata Tigor. Book sedan, SUV, and premium cars for local and outstation trips.",
  keywords: [
    "Taxi Fleet Gujarat",
    "Taxi Cars Gujarat",
    "Sedan Taxi Service",
    "SUV Taxi Service",
    "Innova Taxi Booking",
    "Swift Dzire Taxi",
    "Hyundai Aura Taxi",
    "Ertiga Taxi Service",
    "Toyota Innova Taxi",
    "Innova Crysta Taxi",
    "Tata Tigor Taxi",
    "Luxury Taxi Service",
    "Budget Taxi Service",
    "Family Taxi Service",
    "Outstation Car Rental",
    "Airport Car Service",
    "Local Car Rental",
    "AC Taxi Service",
    "Comfortable Taxi Service",
    "Premium Car Rental",
    "Group Travel Taxi",
    "Corporate Taxi Service",
  ],
  alternates: {
    canonical: "https://manasvicabs.com/cars",
  },
  openGraph: {
    title: "Our Taxi Fleet – Sedan, SUV, Innova Cars in Gujarat | Manasvi Cabs",
    description:
      "Book sedan, SUV, and premium taxi cars in Gujarat. Swift Dzire, Ertiga, Innova, and more.",
    url: "https://manasvicabs.com/cars",
    type: "website",
  },
};

const page = () => {
  return <CarsPage />;
};

export default page;
