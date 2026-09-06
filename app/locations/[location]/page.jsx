import React from "react";
import { notFound } from "next/navigation";
import LocationsPage from "../../../pages/LocationsPage/LocationsPage";

const VALID_LOCATIONS = [
  "ahmedabad",
  "surat",
  "vadodara",
  "rajkot",
  "hirasar-airport-rajkot",
  "bhavnagar",
  "palitana",
  "talaja",
];

const LOCATION_NAMES = {
  ahmedabad: "Ahmedabad",
  surat: "Surat",
  vadodara: "Vadodara",
  rajkot: "Rajkot",
  "hirasar-airport-rajkot": "Hirasar Airport (Rajkot)",
  bhavnagar: "Bhavnagar",
  palitana: "Palitana",
  talaja: "Talaja",
};

const LOCATION_DESCRIPTIONS = {
  ahmedabad:
    "Book reliable taxi service in Ahmedabad with Manasvi Cabs. Local taxi, airport transfers to Sardar Vallabhbhai Patel Airport, outstation trips, and one-way taxi services available 24/7.",
  surat:
    "Book reliable taxi service in Surat with Manasvi Cabs. Local taxi, airport transfers to Surat Airport, outstation trips, and one-way taxi services available 24/7.",
  vadodara:
    "Book reliable taxi service in Vadodara with Manasvi Cabs. Local taxi, airport transfers, outstation trips, and one-way taxi services available 24/7.",
  rajkot:
    "Book reliable taxi service in Rajkot with Manasvi Cabs. Local taxi, airport transfers to Hirasar Airport, outstation trips, and one-way taxi services available 24/7.",
  "hirasar-airport-rajkot":
    "Book reliable airport taxi service at Hirasar Airport (Rajkot) with Manasvi Cabs. 24/7 airport pickup and drop, local cabs, and outstation taxi services.",
  bhavnagar:
    "Book reliable taxi service in Bhavnagar with Manasvi Cabs. Local taxi, airport transfers, outstation trips, and one-way taxi services available 24/7.",
  palitana:
    "Book reliable taxi service in Palitana with Manasvi Cabs. Local taxi, pilgrimage trips to Shatrunjaya Hills, outstation trips, and one-way taxi services available 24/7.",
  talaja:
    "Book reliable taxi service in Talaja with Manasvi Cabs. Local taxi, outstation trips, and one-way taxi services available 24/7.",
};

const LOCATION_KEYWORDS = {
  ahmedabad: [
    "Taxi Service Ahmedabad",
    "Local Taxi Ahmedabad",
    "Airport Taxi Ahmedabad",
    "Outstation Taxi Ahmedabad",
    "One Way Taxi Ahmedabad",
    "Round Trip Taxi Ahmedabad",
    "Book Taxi Ahmedabad",
    "Hire Taxi Ahmedabad",
    "Ahmedabad Airport Transfer",
    "Ahmedabad City Taxi",
    "24x7 Taxi Ahmedabad",
    "Taxi Service in Ahmedabad",
    "Ahmedabad to Surat Taxi",
    "Ahmedabad to Vadodara Taxi",
    "Ahmedabad to Rajkot Taxi",
    "Ahmedabad to Bhavnagar Taxi",
    "Ahmedabad to Palitana Taxi",
    "Ahmedabad to Talaja Taxi",
    "Cheap Taxi Ahmedabad",
  ],
  surat: [
    "Taxi Service Surat",
    "Local Taxi Surat",
    "Airport Taxi Surat",
    "Outstation Taxi Surat",
    "One Way Taxi Surat",
    "Round Trip Taxi Surat",
    "Book Taxi Surat",
    "Hire Taxi Surat",
    "Surat Airport Transfer",
    "Surat City Taxi",
    "24x7 Taxi Surat",
    "Taxi Service in Surat",
    "Surat to Ahmedabad Taxi",
    "Surat to Vadodara Taxi",
    "Surat to Rajkot Taxi",
    "Surat to Bhavnagar Taxi",
    "Cheap Taxi Surat",
  ],
  vadodara: [
    "Taxi Service Vadodara",
    "Local Taxi Vadodara",
    "Airport Taxi Vadodara",
    "Outstation Taxi Vadodara",
    "One Way Taxi Vadodara",
    "Round Trip Taxi Vadodara",
    "Book Taxi Vadodara",
    "Hire Taxi Vadodara",
    "Vadodara City Taxi",
    "24x7 Taxi Vadodara",
    "Taxi Service in Vadodara",
    "Vadodara to Ahmedabad Taxi",
    "Vadodara to Surat Taxi",
    "Vadodara to Rajkot Taxi",
    "Cheap Taxi Vadodara",
  ],
  rajkot: [
    "Taxi Service Rajkot",
    "Local Taxi Rajkot",
    "Airport Taxi Rajkot",
    "Outstation Taxi Rajkot",
    "One Way Taxi Rajkot",
    "Round Trip Taxi Rajkot",
    "Book Taxi Rajkot",
    "Hire Taxi Rajkot",
    "Rajkot City Taxi",
    "24x7 Taxi Rajkot",
    "Taxi Service in Rajkot",
    "Rajkot to Ahmedabad Taxi",
    "Rajkot to Surat Taxi",
    "Rajkot to Bhavnagar Taxi",
    "Hirasar Airport Taxi",
    "Cheap Taxi Rajkot",
  ],
  "hirasar-airport-rajkot": [
    "Hirasar Airport Taxi",
    "Rajkot Airport Taxi",
    "Airport Pickup Rajkot",
    "Airport Drop Rajkot",
    "Hirasar Airport Transfer",
    "Taxi Service Hirasar Airport",
    "Airport Taxi Booking",
    "24x7 Airport Taxi",
    "Rajkot Airport Transfer",
    "Hirasar to Rajkot Taxi",
    "Hirasar to Ahmedabad Taxi",
    "Hirasar to Bhavnagar Taxi",
    "Airport Shuttle Service",
    "Airport Pickup Service",
  ],
  bhavnagar: [
    "Taxi Service Bhavnagar",
    "Local Taxi Bhavnagar",
    "Airport Taxi Bhavnagar",
    "Outstation Taxi Bhavnagar",
    "One Way Taxi Bhavnagar",
    "Round Trip Taxi Bhavnagar",
    "Book Taxi Bhavnagar",
    "Hire Taxi Bhavnagar",
    "Bhavnagar City Taxi",
    "24x7 Taxi Bhavnagar",
    "Taxi Service in Bhavnagar",
    "Bhavnagar to Ahmedabad Taxi",
    "Bhavnagar to Surat Taxi",
    "Bhavnagar to Palitana Taxi",
    "Bhavnagar to Talaja Taxi",
    "Cheap Taxi Bhavnagar",
  ],
  palitana: [
    "Taxi Service Palitana",
    "Local Taxi Palitana",
    "Outstation Taxi Palitana",
    "One Way Taxi Palitana",
    "Round Trip Taxi Palitana",
    "Book Taxi Palitana",
    "Hire Taxi Palitana",
    "Pilgrimage Taxi Palitana",
    "Shatrunjaya Taxi Service",
    "24x7 Taxi Palitana",
    "Taxi Service in Palitana",
    "Palitana to Bhavnagar Taxi",
    "Palitana to Ahmedabad Taxi",
    "Palitana Temple Taxi",
    "Cheap Taxi Palitana",
  ],
  talaja: [
    "Taxi Service Talaja",
    "Local Taxi Talaja",
    "Outstation Taxi Talaja",
    "One Way Taxi Talaja",
    "Round Trip Taxi Talaja",
    "Book Taxi Talaja",
    "Hire Taxi Talaja",
    "Talaja City Taxi",
    "24x7 Taxi Talaja",
    "Taxi Service in Talaja",
    "Talaja to Bhavnagar Taxi",
    "Talaja to Palitana Taxi",
    "Talaja to Ahmedabad Taxi",
    "Cheap Taxi Talaja",
  ],
};

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const { location } = await params;
  const locationSlug = location?.toLowerCase();

  if (!VALID_LOCATIONS.includes(locationSlug)) {
    return {
      title: "Page Not Found | Manasvi Cabs",
      description: "The page you are looking for does not exist.",
    };
  }

  const locationName = LOCATION_NAMES[locationSlug];
  const locationDescription = LOCATION_DESCRIPTIONS[locationSlug];
  const locationKeywords = LOCATION_KEYWORDS[locationSlug] || [];

  return {
    title: `Taxi Service in ${locationName} | Book taxi 24/7 | Manasvi Cabs`,
    description: locationDescription,
    keywords: locationKeywords,
    alternates: {
      canonical: `https://manasvicabs.com/locations/${locationSlug}`,
    },
    openGraph: {
      title: `Taxi Service in ${locationName} | Book taxi 24/7 | Manasvi Cabs`,
      description: locationDescription,
      url: `https://manasvicabs.com/locations/${locationSlug}`,
      type: "website",
      siteName: "Manasvi Cabs",
      locale: "en_IN",
    },
  };
}

export default async function Page({ params }) {
  const { location } = await params;
  const locationSlug = location?.toLowerCase();

  if (!VALID_LOCATIONS.includes(locationSlug)) {
    notFound();
  }

  return <LocationsPage locationSlug={locationSlug} />;
}
