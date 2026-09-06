// import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
// import "./globals.css";
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";
// // import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

// // ================= FONT CONFIGURATION =================

// // 1. Configure Primary Font (Plus Jakarta Sans)
// const plusJakartaSans = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   variable: "--font-primary", // This links to your CSS variable
//   display: "swap",
// });

// // 2. Configure Accent Font (Caveat)
// const caveat = Caveat({
//   subsets: ["latin"],
//   variable: "--font-accent", // This links to your CSS variable
//   display: "swap",
// });

// // ================= METADATA (SEO) =================

// export const metadata = {
//   title: "Manasvi Cabs – Reliable Taxi Service",
//   description:
//     "Book affordable and reliable taxi services with Manasvi Cabs. We provide safe one-way, round-trip, and local cab rides.",
//   keywords: [
//     "Manasvi Cabs",
//     "Taxi Service",
//     "Cab Booking",
//     "One Way Taxi",
//     "Round Trip Cab",
//     "Local Cab Service",
//   ],
// };

// // ================= ROOT LAYOUT =================

// export default function RootLayout({ children }) {
//   return (
//     <html
//       lang="en"
//       /* Inject the font variables into the root HTML tag */
//       className={`${plusJakartaSans.variable} ${caveat.variable} h-full antialiased`}
//     >
//       <body className="min-h-full flex flex-col bg-white text-(--color-gray-dark)">
//         {/* <ScrollToTop /> */}
//         <Header />

//         {/* main wrapper ensures the footer pushes to the bottom if content is short */}
//         <main className="grow">{children}</main>

//         <Footer />
//       </body>
//     </html>
//   );
// }



import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Script from "next/script"; // <-- IMPORTANT: Add this import
// import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import WhatsApp from "../components/WhatsApp/WhatsApp";

// ================= FONT CONFIGURATION =================

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
});

// ================= METADATA (SEO) =================

export const metadata = {
  metadataBase: new URL("https://manasvicabs.com"),
  title: {
    default: "Manasvi Cabs – Taxi Service in Gujarat | Taxi Booking",
    template: "%s | Manasvi Cabs",
  },
  description:
    "Manasvi Cabs provides comfortable and timely taxi services in Ahmedabad, Surat, Vadodara, Rajkot, Hirasar Airport (Rajkot), Bhavnagar, Palitana, and Talaja. Book local, outstation, one-way, and round-trip cabs with professional drivers at affordable prices.",
  keywords: [
    "Taxi Service Gujarat",
    "Taxi Service Bhavnagar",
    "Taxi Palitana",
    "Outstation Taxi Gujarat",
    "One Way Taxi Ahmedabad",
    "Local Taxi Bhavnagar",
    "Best Taxi Service Gujarat",
    "Airport Taxi Gujarat",
    "Hirasar Airport Taxi",
    "Rajkot Airport Taxi",
    "Taxi Service Ahmedabad",
    "Taxi Service Vadodara",
    "Taxi Service Rajkot",
    "Taxi Service Talaja",
    "24x7 Taxi Service",
    "Online Taxi Booking",
  ],
  verification: {
    google: "aM6_RqGCElmNRNUTHqAdXXvOqrbs5zFFUbnTE3XGoAY",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Manasvi Cabs – Trusted Taxi Service in Gujarat",
    description:
      "Book affordable taxi services for local rides, airport transfers, and outstation trips across Gujarat. Serving Ahmedabad, Surat, Vadodara, Rajkot, Hirasar Airport, Bhavnagar, Palitana, and Talaja with comfortable cars and professional drivers.",
    url: "https://manasvicabs.com",
    siteName: "Manasvi Cabs",
    images: [
      {
        url: "/images/manasvi-cabs-og.jpg",
        width: 1200,
        height: 630,
        alt: "Manasvi Cabs Taxi Service in Gujarat",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manasvi Cabs – Best Taxi Service in Gujarat",
    description:
      "Affordable Taxi booking for Ahmedabad, Surat, Vadodara, Rajkot, Hirasar Airport, Bhavnagar, Palitana, Talaja and nearby areas.",
    images: ["/images/manasvi-cabs-og.jpg"],
  },
};

// ================= ROOT LAYOUT =================

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${caveat.variable} h-full antialiased`}
    >
      <head>
        {/* JSON-LD Structured Data for Local Business / Taxi Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TaxiService",
              name: "Manasvi Cabs",
              description:
                "Comfortable and timely taxi services in Ahmedabad, Surat, Vadodara, Rajkot, Hirasar Airport (Rajkot), Bhavnagar, Palitana, and Talaja. Professional drivers and well-maintained vehicles for local and outstation journeys.",
              url: "https://manasvicabs.com",
              telephone: "+918347112150",
              email: "info.manasvicabs@gmail.com",
              image:
                "https://manasvicabs.com/images/manasvi-cabs-og.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Talaja, Palitana, Bhavnagar",
                addressLocality: "Bhavnagar",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              areaServed: [
                "Ahmedabad",
                "Surat",
                "Vadodara",
                "Rajkot",
                "Hirasar Airport (Rajkot)",
                "Bhavnagar",
                "Palitana",
                "Talaja",
                "Gujarat",
              ],
              serviceType: [
                "Local Taxi",
                "Outstation Taxi",
                "One Way Taxi",
                "Round Trip Taxi",
                "Airport Transfer",
                "Corporate Travel",
              ],
              priceRange: "₹₹",
              openingHours: "Mo-Su 00:00-23:59",
            }),
          }}
        />
      </head>

      <body className="min-h-full flex flex-col bg-white text-(--color-gray-dark)">
        
        {/* ========== GOOGLE ADS GLOBAL TAG ========== */}
        {/* Async script to load Google Ads */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18295653975"
          strategy="afterInteractive"
        />
         <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18295653975');
          `}
        </Script>
        {/* ========== END GOOGLE ADS GLOBAL TAG ========== */}

        {/* <ScrollToTop /> */}
        <ScrollToTop />
        <Header />
        <main className="grow">{children}</main>
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}