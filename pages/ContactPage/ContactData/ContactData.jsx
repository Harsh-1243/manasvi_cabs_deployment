// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   Phone,
//   X,
//   CheckCircle2,
//   MapPin,
//   User,
//   CalendarDays,
//   Car,
//   ArrowRight,
//   RefreshCw,
// } from "lucide-react";
// import Link from "next/link";

// const HIGHLIGHTS = [
//   "24/7 Taxi Booking Support",
//   "Verified Drivers & Safe Travel",
//   "Taxi Service Across All Gujarat Cities",
// ];

// const SERVICE_AREAS = [
//   "Ahmedabad",
//   "Surat",
//   "Vadodara",
//   "Rajkot",
//   "Hirasar Airport",
//   "Bhavnagar",
//   "Palitana",
//   "Talaja",
// ];

// const TRIP_TYPES = [
//   { label: "One Way", value: "One Way", icon: ArrowRight },
//   { label: "Round Trip", value: "Round trip", icon: RefreshCw },
//   { label: "Local", value: "Local", icon: MapPin },
// ];

// const FIELD_BASE =
//   "w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-(--color-brand-black) placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-(--color-dark-yellow) focus:border-transparent focus:bg-white transition-all duration-200";

// const BookingForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     pickupCity: "",
//     dropCity: "",
//     date: "",
//     mobile: "",
//     tripType: "One Way",
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleTripType = (value) => {
//     setFormData((prevData) => ({ ...prevData, tripType: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);
//   };

//   const handleReset = () => {
//     setIsSubmitted(false);
//     setFormData({
//       name: "",
//       pickupCity: "",
//       dropCity: "",
//       date: "",
//       mobile: "",
//       tripType: "One Way",
//     });
//   };

//   if (isSubmitted) {
//     return (
//       <div className="w-full p-8 bg-white rounded-[28px] border-[3px] border-(--color-brand-black) shadow-[8px_8px_0px_var(--color-brand-black)] text-center">
//         <div className="w-16 h-16 mx-auto bg-(--color-dark-yellow) rounded-full flex items-center justify-center mb-4 border-[3px] border-(--color-brand-black)">
//           <CheckCircle2
//             className="w-8 h-8 text-(--color-brand-black)"
//             strokeWidth={2.5}
//           />
//         </div>
//         <h3 className="text-2xl font-bold text-(--color-brand-black) mb-1">
//           Booking Confirmed!
//         </h3>
//         <span className="font-(family-name:--font-accent) text-xl text-(--color-brand-black)/60 block mb-5">
//           Your ride is on its way
//         </span>

//         <div className="text-left bg-gray-50 rounded-2xl border border-gray-200 p-4 mb-6 flex flex-col gap-3">
//           <div className="flex items-start gap-3">
//             <div className="w-2.5 h-2.5 rounded-full bg-(--color-dark-yellow) ring-4 ring-yellow-100 mt-1.5 shrink-0" />
//             <div>
//               <p className="text-[11px] uppercase tracking-wide text-gray-400 font-semibold">
//                 Pickup
//               </p>
//               <p className="text-(--color-brand-black) font-semibold text-sm">
//                 {formData.pickupCity || "—"}
//               </p>
//             </div>
//           </div>
//           <div className="w-px h-3 border-l-2 border-dashed border-gray-300 ml-1.25" />
//           <div className="flex items-start gap-3">
//             <div className="w-2.5 h-2.5 rounded-full bg-(--color-brand-black) mt-1.5 shrink-0" />
//             <div>
//               <p className="text-[11px] uppercase tracking-wide text-gray-400 font-semibold">
//                 Drop
//               </p>
//               <p className="text-(--color-brand-black) font-semibold text-sm">
//                 {formData.dropCity || "—"}
//               </p>
//             </div>
//           </div>
//         </div>

//         <p className="text-sm text-(--color-gray-dark) mb-6 leading-relaxed">
//           Thanks, <span className="font-bold">{formData.name}</span>. We'll call
//           you at <span className="font-bold">{formData.mobile}</span> shortly to
//           confirm your driver.
//         </p>

//         <button
//           onClick={handleReset}
//           className="px-8 py-3 rounded-full border-[3px] border-(--color-brand-black) bg-white text-(--color-brand-black) font-bold text-base shadow-[5px_5px_0px_var(--color-brand-black)] w-full cursor-pointer"
//         >
//           Book Another Ride
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full p-6 bg-white rounded-[28px] border-[3px] border-(--color-brand-black) shadow-[8px_8px_0px_var(--color-brand-black)]">
//       <div className="mb-4">
//         <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-(--color-dark-yellow)">
//           Instant Quote
//         </span>
//         <h3 className="text-xl font-extrabold text-(--color-brand-black) mt-0.5">
//           Book Your Ride
//         </h3>
//         <p className="text-xs text-(--color-gray-dark)/70 mt-1">
//           Fares confirmed within minutes. No hidden toll surprises.
//         </p>
//       </div>

//       <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//         <div className="flex flex-col">
//           <label className="font-semibold mb-1 text-(--color-gray-dark) text-xs">
//             Full Name
//           </label>
//           <div className="relative">
//             <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               placeholder="e.g. Ramesh Patel"
//               className={FIELD_BASE}
//             />
//           </div>
//         </div>

//         <div className="flex flex-col">
//           <label className="font-semibold mb-1 text-(--color-gray-dark) text-xs">
//             Mobile Number
//           </label>
//           <div className="relative">
//             <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
//             <input
//               type="tel"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               required
//               placeholder="10-digit mobile number"
//               className={FIELD_BASE}
//             />
//           </div>
//         </div>

//         <div className="flex flex-col">
//           <label className="font-semibold mb-1 text-(--color-gray-dark) text-xs">
//             Trip Type
//           </label>
//           <div className="grid grid-cols-3 gap-1.5">
//             {TRIP_TYPES.map(({ label, value, icon: Icon }) => {
//               const active = formData.tripType === value;
//               return (
//                 <button
//                   key={value}
//                   type="button"
//                   onClick={() => handleTripType(value)}
//                   className={`flex flex-col items-center justify-center gap-0.5 py-2 rounded-xl border text-xs font-semibold transition-all duration-200 cursor-pointer ${
//                     active
//                       ? "bg-(--color-dark-yellow) border-(--color-dark-yellow) text-(--color-brand-black) shadow-md shadow-yellow-500/20"
//                       : "bg-gray-50 border-gray-200 text-(--color-gray-dark) hover:border-gray-300"
//                   }`}
//                 >
//                   <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
//                   {label}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         <div className="flex flex-col">
//           <label className="font-semibold mb-1 text-(--color-gray-dark) text-xs">
//             Route
//           </label>
//           <div className="flex gap-2.5">
//             <div className="flex flex-col items-center pt-2.5 pb-2.5">
//               <div className="w-2.5 h-2.5 rounded-full bg-(--color-dark-yellow) ring-4 ring-yellow-100 shrink-0" />
//               <div className="relative flex-1 w-px border-l-2 border-dashed border-gray-300 my-1">
//                 <Car className="w-3.5 h-3.5 text-(--color-brand-black) absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 bg-white" />
//               </div>
//               <div className="w-2.5 h-2.5 rounded-full bg-(--color-brand-black) shrink-0" />
//             </div>

//             <div className="flex-1 flex flex-col gap-2.5">
//               <div className="relative">
//                 <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
//                 <input
//                   type="text"
//                   name="pickupCity"
//                   value={formData.pickupCity}
//                   onChange={handleChange}
//                   required
//                   placeholder="Pickup city"
//                   className={FIELD_BASE}
//                 />
//               </div>
//               <div className="relative">
//                 <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
//                 <input
//                   type="text"
//                   name="dropCity"
//                   value={formData.dropCity}
//                   onChange={handleChange}
//                   required
//                   placeholder="Drop city"
//                   className={FIELD_BASE}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col">
//           <label className="font-semibold mb-1 text-(--color-gray-dark) text-xs">
//             Pickup Date
//           </label>
//           <div className="relative">
//             <CalendarDays className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               required
//               className={`${FIELD_BASE} cursor-pointer`}
//             />
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="mt-1.5 w-full py-3 rounded-full border-[3px] border-(--color-brand-black) bg-(--color-dark-yellow) text-(--color-brand-black) font-bold text-base shadow-[5px_5px_0px_var(--color-brand-black)] cursor-pointer flex items-center justify-center gap-2"
//         >
//           <Car className="w-4 h-4" strokeWidth={2.5} />
//           Confirm Booking
//         </button>
//       </form>
//     </div>
//   );
// };

// const ContactData = () => {
//   const [isBookingOpen, setIsBookingOpen] = useState(false);

//   useEffect(() => {
//     if (!isBookingOpen) return undefined;

//     document.body.style.overflow = "hidden";
//     const onKeyDown = (e) => {
//       if (e.key === "Escape") setIsBookingOpen(false);
//     };
//     window.addEventListener("keydown", onKeyDown);

//     return () => {
//       document.body.style.overflow = "";
//       window.removeEventListener("keydown", onKeyDown);
//     };
//   }, [isBookingOpen]);

//   return (
//     <section
//       className="relative bg-white overflow-hidden py-15"
//       aria-label="Contact Manasvi Cabs for Taxi Booking"
//     >
//       {/* dotted texture */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage:
//             "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
//           backgroundSize: "22px 22px",
//         }}
//         aria-hidden="true"
//       />

//       <div className="relative z-10 max-w-7xl mx-auto px-5 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
//         {/* ================= LEFT: INTRO ================= */}
//         <div>
//           <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-(--color-brand-black) bg-(--color-dark-yellow) text-xs font-bold tracking-widest uppercase text-(--color-brand-black) mb-6">
//             <span className="w-1.5 h-1.5 rounded-full bg-(--color-brand-black)" />
//             Contact Manasvi Cabs
//           </span>

//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-(family-name:--font-accent) text-(--color-brand-black) leading-[1.15] mb-4">
//             Book Trusted Taxi Service in Gujarat with Manasvi Cabs
//           </h1>

//           <p className="text-(--color-gray-dark)/75 leading-relaxed max-w-xl mb-8">
//             Looking for fast and reliable taxi booking in Ahmedabad, Surat,
//             Vadodara, Rajkot, Bhavnagar, Palitana, or Talaja? Manasvi Cabs
//             provides local Taxi service, airport pickup and drop, outstation taxi
//             booking, corporate travel, and tempo traveller rental across
//             Gujarat. Our team is available 24/7 to help you book the right
//             vehicle with transparent pricing, verified drivers, and on-time
//             service.
//           </p>

//           <div className="flex flex-wrap items-center gap-4">
//             <Link
//               href="tel:+918347112150"
//               className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-(--color-white) text-(--color-brand-black) border-2 border-(--color-brand-black) rounded-full font-bold text-sm uppercase tracking-wide shadow-[4px_4px_0px_var(--color-brand-black)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_var(--color-brand-black)] transition-all cursor-pointer"
//             >
//               <Phone className="w-4 h-4" strokeWidth={2.5} />
//               Call Now
//             </Link>

//             <button
//               type="button"
//               onClick={() => setIsBookingOpen(true)}
//               className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--color-dark-yellow) text-(--color-brand-black) border-2 border-(--color-brand-black) rounded-full font-bold text-sm uppercase tracking-wide shadow-[4px_4px_0px_var(--color-brand-black)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_var(--color-brand-black)] transition-all cursor-pointer"
//             >
//               Book Now
//             </button>
//           </div>
//         </div>

//         <div className="bg-(--color-brand-yellow)/15 border-2 border-(--color-brand-black)/10 rounded-[28px] p-7 sm:p-8">
//           <span className="text-xs font-bold tracking-widest uppercase text-(--color-brand-black)/50">
//             Quick Taxi Booking
//           </span>
//           <h2 className="text-xl sm:text-2xl font-extrabold text-(--color-brand-black) mt-1 mb-3">
//             Need a taxi in Gujarat today?
//           </h2>
//           <p className="text-sm text-(--color-gray-dark)/70 leading-relaxed mb-6">
//             Call Manasvi Cabs and get fast booking support for airport taxi,
//             local Taxi, outstation Taxi, sedan, SUV, Innova, and tempo traveller
//             service across Gujarat.
//           </p>

//           <div className="flex flex-col gap-3 mb-7">
//             {HIGHLIGHTS.map((item) => (
//               <div key={item} className="flex items-center gap-3">
//                 <div className="w-6 h-6 shrink-0 rounded-full bg-(--color-dark-yellow) border-2 border-(--color-brand-black) flex items-center justify-center">
//                   <CheckCircle2
//                     className="w-3.5 h-3.5 text-(--color-brand-black)"
//                     strokeWidth={2.5}
//                   />
//                 </div>
//                 <span className="text-sm font-semibold text-(--color-brand-black)">
//                   {item}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <div className="pt-6 border-t border-dashed border-(--color-brand-black)/20">
//             <div className="flex items-center gap-2 mb-3">
//               <MapPin
//                 className="w-4 h-4 text-(--color-brand-black)/60"
//                 strokeWidth={2.5}
//               />
//               <span className="text-xs font-bold tracking-widest uppercase text-(--color-brand-black)/50">
//                 Service Area
//               </span>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {SERVICE_AREAS.map((area) => (
//                 <span
//                   key={area}
//                   className="px-3 py-1.5 rounded-full bg-white border border-(--color-brand-black)/15 text-xs font-semibold text-(--color-brand-black)"
//                 >
//                   {area}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {isBookingOpen && (
//         <div
//           className="fixed inset-0 z-50 bg-(--color-brand-black)/60 overflow-y-auto"
//           onClick={() => setIsBookingOpen(false)}
//         >
//           <div className="min-h-full flex items-center justify-center p-4 sm:p-6">
//             <div
//               className="relative w-full max-w-md my-8"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 type="button"
//                 onClick={() => setIsBookingOpen(false)}
//                 aria-label="Close booking form"
//                 className="absolute -top-3 -right-3 z-20 w-9 h-9 rounded-full bg-(--color-dark-yellow) border-[3px] border-(--color-brand-black) shadow-[4px_4px_0px_var(--color-brand-black)] flex items-center justify-center cursor-pointer"
//               >
//                 <X
//                   className="w-4 h-4 text-(--color-brand-black)"
//                   strokeWidth={2.5}
//                 />
//               </button>

//               <BookingForm />
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ContactData;

"use client";

import React, { useEffect, useState } from "react";
import { Phone, X, CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";
import BookingForm from "../../../components/BookingForm/BookingForm";

const HIGHLIGHTS = [
  "24/7 Taxi Booking Support",
  "Verified Drivers & Safe Travel",
  "Taxi Service Across All Gujarat Cities",
];

const SERVICE_AREAS = [
  "Ahmedabad",
  "Surat",
  "Vadodara",
  "Rajkot",
  "Hirasar Airport",
  "Bhavnagar",
  "Palitana",
  "Talaja",
];

const ContactData = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    if (!isBookingOpen) return undefined;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsBookingOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isBookingOpen]);

  return (
    <section
      className="relative bg-white overflow-hidden py-15"
      aria-label="Contact Manasvi Cabs for Taxi Booking"
    >
      {/* ================= DOTTED TEXTURE ================= */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
        {/* ================= LEFT: INTRO ================= */}
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-(--color-brand-black) bg-(--color-dark-yellow) text-xs font-bold tracking-widest uppercase text-(--color-brand-black) mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-(--color-brand-black)" />
            Contact Manasvi Cabs
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-(family-name:--font-accent) text-(--color-brand-black) leading-[1.15] mb-4">
            Book Trusted Taxi Service in Gujarat with Manasvi Cabs
          </h1>

          <p className="text-(--color-gray-dark)/75 leading-relaxed max-w-xl mb-8">
            Looking for fast and reliable taxi booking in Ahmedabad, Surat,
            Vadodara, Rajkot, Bhavnagar, Palitana, or Talaja? Manasvi Cabs
            provides local Taxi service, airport pickup and drop, outstation
            taxi booking, corporate travel, and tempo traveller rental across
            Gujarat. Our team is available 24/7 to help you book the right
            vehicle with transparent pricing, verified drivers, and on-time
            service.
          </p>

          {/* ================= BUTTONS ================= */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="tel:+918347112150"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-(--color-white) text-(--color-brand-black) border-2 border-(--color-brand-black) rounded-full font-bold text-sm uppercase tracking-wide shadow-[4px_4px_0px_var(--color-brand-black)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_var(--color-brand-black)] transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              Call Now
            </Link>

            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--color-dark-yellow) text-(--color-brand-black) border-2 border-(--color-brand-black) rounded-full font-bold text-sm uppercase tracking-wide shadow-[4px_4px_0px_var(--color-brand-black)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_var(--color-brand-black)] transition-all cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* ================= RIGHT: QUICK BOOKING INFO ================= */}
        <div className="bg-(--color-brand-yellow)/15 border-2 border-(--color-brand-black)/10 rounded-[28px] p-7 sm:p-8">
          <span className="text-xs font-bold tracking-widest uppercase text-(--color-brand-black)/50">
            Quick Taxi Booking
          </span>

          <h2 className="text-xl sm:text-2xl font-extrabold text-(--color-brand-black) mt-1 mb-3">
            Need a taxi in Gujarat today?
          </h2>

          <p className="text-sm text-(--color-gray-dark)/70 leading-relaxed mb-6">
            Call Manasvi Cabs and get fast booking support for airport taxi,
            local Taxi, outstation Taxi, sedan, SUV, Innova, and tempo traveller
            service across Gujarat.
          </p>

          {/* ================= HIGHLIGHTS ================= */}
          <div className="flex flex-col gap-3 mb-7">
            {HIGHLIGHTS.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 shrink-0 rounded-full bg-(--color-dark-yellow) border-2 border-(--color-brand-black) flex items-center justify-center">
                  <CheckCircle2
                    className="w-3.5 h-3.5 text-(--color-brand-black)"
                    strokeWidth={2.5}
                  />
                </div>

                <span className="text-sm font-semibold text-(--color-brand-black)">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* ================= SERVICE AREAS ================= */}
          <div className="pt-6 border-t border-dashed border-(--color-brand-black)/20">
            <div className="flex items-center gap-2 mb-3">
              <MapPin
                className="w-4 h-4 text-(--color-brand-black)/60"
                strokeWidth={2.5}
              />

              <span className="text-xs font-bold tracking-widest uppercase text-(--color-brand-black)/50">
                Service Area
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {SERVICE_AREAS.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 rounded-full bg-white border border-(--color-brand-black)/15 text-xs font-semibold text-(--color-brand-black)"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOOKING FORM MODAL ================= */}
      {isBookingOpen && (
        <div
          className="fixed inset-0 z-50 bg-(--color-brand-black)/60 overflow-y-auto"
          onClick={() => setIsBookingOpen(false)}
        >
          <div className="min-h-full flex items-center justify-center p-4 sm:p-6">
            <div
              className="relative w-full max-w-md my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ================= CLOSE BUTTON ================= */}
              <button
                type="button"
                onClick={() => setIsBookingOpen(false)}
                aria-label="Close booking form"
                className="absolute -top-3 -right-3 z-20 w-9 h-9 rounded-full bg-(--color-dark-yellow) border-[3px] border-(--color-brand-black) shadow-[4px_4px_0px_var(--color-brand-black)] flex items-center justify-center cursor-pointer"
              >
                <X
                  className="w-4 h-4 text-(--color-brand-black)"
                  strokeWidth={2.5}
                />
              </button>

              {/* ================= REUSABLE BOOKING FORM ================= */}
              <BookingForm />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactData;
