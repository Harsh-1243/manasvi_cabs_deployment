import React from "react";
import LocationsPage from "../../pages/LocationsPage/LocationsPage";

export const metadata = {
  title: "Taxi Service Locations in Gujarat | Manasvi Cabs",
  description:
    "Book reliable taxi services in Ahmedabad, Surat, Vadodara, Rajkot, Hirasar Airport, Bhavnagar, Palitana, and Talaja. Manasvi Cabs offers local cabs, outstation trips, airport transfers, and one-way taxi services across Gujarat.",
  keywords: [
    "Taxi Service Gujarat",
    "Taxi Service Locations",
    "Local Taxi Gujarat",
    "Outstation Taxi Gujarat",
    "Airport Taxi Gujarat",
    "One Way Taxi Gujarat",
    "Round Trip Taxi Gujarat",
    "Taxi Service Ahmedabad",
    "Taxi Service Surat",
    "Taxi Service Vadodara",
    "Taxi Service Rajkot",
    "Taxi Service Bhavnagar",
    "Taxi Service Palitana",
    "Taxi Service Talaja",
    "Hirasar Airport Taxi",
    "Gujarat Taxi Routes",
    "Intercity Taxi Service",
    "City Taxi Service",
    "Gujarat Travel Guide",
    "Taxi Destinations Gujarat",
    "24x7 Taxi Service",
    "Book Taxi Online",
    "Hire Taxi Gujarat",
    "Affordable Taxi Service",
  ],
  alternates: {
    canonical: "https://manasvicabs.com/locations",
  },
  openGraph: {
    title: "Taxi Service Locations in Gujarat | Manasvi Cabs",
    description:
      "Book reliable taxi services across Gujarat. Find taxi service in Ahmedabad, Surat, Vadodara, Rajkot, Bhavnagar, Palitana, and Talaja.",
    url: "https://manasvicabs.com/locations",
    type: "website",
  },
};

const page = () => {
  return <LocationsPage />;
};

export default page;
