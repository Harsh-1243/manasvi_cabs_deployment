// "use client";

// import React, { useState } from "react";
// import {
//   User,
//   Phone,
//   MapPin,
//   CalendarDays,
//   Car,
//   ArrowRight,
//   RefreshCw,
//   CheckCircle2,
// } from "lucide-react";
// import emailjs from "@emailjs/browser";

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
//   const [isLoading, setIsLoading] = useState(false);

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

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (isLoading) return;
//     setIsLoading(true);

//     const templateParams = {
//       from_name: formData.name,
//       from_mobile: formData.mobile,
//       pickup: formData.pickupCity,
//       drop: formData.dropCity,
//       trip_date: formData.date,
//       trip_type: formData.tripType,
//     };

//     try {
//       const serviceID = "service_v6bk9sc";
//       const templateID = "template_28xzs9e";
//       const publicKey = "SdWf-Wvm4v5N1C6bL";

//       const response = await emailjs.send(
//         serviceID,
//         templateID,
//         templateParams,
//         publicKey,
//       );

//       console.log("✅ Email sent successfully!", response.text);

//       setIsSubmitted(true);

//       if (typeof window !== "undefined" && window.gtag) {
//         window.gtag("event", "conversion", {
//           send_to: "AW-18295653975/ry8RCLz6le8cENeMhpRE",
//           value: 0.0,
//           currency: "INR",
//         });
//         console.log("✅ Google Ads conversion fired!");
//       } else {
//         console.warn("⚠️ Google Ads gtag not loaded yet");
//       }
//     } catch (error) {
//       console.error("❌ EmailJS error:", error.text || error);
//       alert(
//         "There was an issue submitting your booking. Please try again or call us directly.",
//       );
//     } finally {
//       setIsLoading(false);
//     }
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
//       <div className="max-w-lg mx-auto p-8 bg-white rounded-[28px] border-[3px] border-(--color-brand-black) shadow-[8px_8px_0px_var(--color-brand-black)] text-center">
//         <div className="w-16 h-16 mx-auto bg-(--color-dark-yellow) rounded-full flex items-center justify-center mb-4 border-[3px] border-(--color-brand-black)">
//           <CheckCircle2
//             className="w-8 h-8 text-(--color-brand-black)"
//             strokeWidth={2.5}
//           />
//         </div>
//         <h2 className="text-2xl font-bold text-(--color-brand-black) mb-1">
//           Booking Confirmed!
//         </h2>
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
//     <div className="max-w-lg mx-auto p-6 bg-white rounded-[28px] border-[3px] border-(--color-brand-black) shadow-[3px_3px_0px_var(--color-brand-black)]">
//       {/* Header */}
//       <div className="mb-4">
//         <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-(--color-dark-yellow)">
//           Instant Quote
//         </span>
//         <h2 className="text-xl font-extrabold text-(--color-brand-black) mt-0.5">
//           Book Your Ride
//         </h2>
//         <p className="text-xs text-(--color-gray-dark)/70 mt-1">
//           Fares confirmed within minutes. No hidden toll surprises.
//         </p>
//       </div>

//       <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//         {/* Name */}
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

//         {/* Mobile */}
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

//         {/* Trip Type */}
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

//         {/* Route */}
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

//         {/* Date */}
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

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={isLoading}
//           className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-(--color-dark-yellow) text-(--color-brand-black) font-extrabold text-sm uppercase tracking-wider rounded-full border-2 border-(--color-brand-black) shadow-[4px_4px_0px_var(--color-brand-black)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_var(--color-brand-black)] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           <Car className="w-4 h-4" strokeWidth={2.5} />
//           {isLoading ? "Sending..." : "Confirm Booking"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BookingForm;

//

"use client";

import React, { useState } from "react";
import {
  User,
  Phone,
  MapPin,
  CalendarDays,
  Car,
  ArrowRight,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const TRIP_TYPES = [
  { label: "One Way", value: "One Way", icon: ArrowRight },
  { label: "Round Trip", value: "Round trip", icon: RefreshCw },
  { label: "Local", value: "Local", icon: MapPin },
];

// Your company WhatsApp number (with country code, no + or spaces)
const COMPANY_WHATSAPP_NUMBER = "918487991243";

const FIELD_BASE =
  "w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-(--color-brand-black) placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-(--color-dark-yellow) focus:border-transparent focus:bg-white transition-all duration-200";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    pickupCity: "",
    dropCity: "",
    date: "",
    mobile: "",
    tripType: "One Way",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTripType = (value) => {
    setFormData((prevData) => ({ ...prevData, tripType: value }));
  };

  const sendToWhatsApp = () => {
    const message = `*New Booking Request*%0A%0A*Name:* ${formData.name}%0A*Mobile:* ${formData.mobile}%0A*Trip Type:* ${formData.tripType}%0A*Pickup:* ${formData.pickupCity}%0A*Drop:* ${formData.dropCity}%0A*Date:* ${formData.date}`;

    const whatsappUrl = `https://wa.me/${COMPANY_WHATSAPP_NUMBER}?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) return;
    setIsLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_mobile: formData.mobile,
      pickup: formData.pickupCity,
      drop: formData.dropCity,
      trip_date: formData.date,
      trip_type: formData.tripType,
    };

    try {
      const serviceID = "service_v6bk9sc";
      const templateID = "template_28xzs9e";
      const publicKey = "SdWf-Wvm4v5N1C6bL";

      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey,
      );

      console.log("✅ Email sent successfully!", response.text);

      setIsSubmitted(true);

      // Open WhatsApp with pre-filled booking details for the company number
      sendToWhatsApp();

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-18295653975/ry8RCLz6le8cENeMhpRE",
          value: 0.0,
          currency: "INR",
        });
        console.log("✅ Google Ads conversion fired!");
      } else {
        console.warn("⚠️ Google Ads gtag not loaded yet");
      }
    } catch (error) {
      console.error("❌ EmailJS error:", error.text || error);
      alert(
        "There was an issue submitting your booking. Please try again or call us directly.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      pickupCity: "",
      dropCity: "",
      date: "",
      mobile: "",
      tripType: "One Way",
    });
  };

  if (isSubmitted) {
    return (
      <div className="max-w-lg mx-auto p-8 bg-white rounded-[28px] border-[3px] border-(--color-brand-black) shadow-[8px_8px_0px_var(--color-brand-black)] text-center">
        <div className="w-16 h-16 mx-auto bg-(--color-dark-yellow) rounded-full flex items-center justify-center mb-4 border-[3px] border-(--color-brand-black)">
          <CheckCircle2
            className="w-8 h-8 text-(--color-brand-black)"
            strokeWidth={2.5}
          />
        </div>
        <h2 className="text-2xl font-bold text-(--color-brand-black) mb-1">
          Booking Confirmed!
        </h2>
        <span className="font-(family-name:--font-accent) text-xl text-(--color-brand-black)/60 block mb-5">
          Your ride is on its way
        </span>

        <div className="text-left bg-gray-50 rounded-2xl border border-gray-200 p-4 mb-6 flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-(--color-dark-yellow) ring-4 ring-yellow-100 mt-1.5 shrink-0" />
            <div>
              <p className="text-[11px] uppercase tracking-wide text-gray-400 font-semibold">
                Pickup
              </p>
              <p className="text-(--color-brand-black) font-semibold text-sm">
                {formData.pickupCity || "—"}
              </p>
            </div>
          </div>
          <div className="w-px h-3 border-l-2 border-dashed border-gray-300 ml-1.25" />
          <div className="flex items-start gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-(--color-brand-black) mt-1.5 shrink-0" />
            <div>
              <p className="text-[11px] uppercase tracking-wide text-gray-400 font-semibold">
                Drop
              </p>
              <p className="text-(--color-brand-black) font-semibold text-sm">
                {formData.dropCity || "—"}
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm text-(--color-gray-dark) mb-6 leading-relaxed">
          Thanks, <span className="font-bold">{formData.name}</span>. We'll call
          you at <span className="font-bold">{formData.mobile}</span> shortly to
          confirm your driver.
        </p>

        <button
          onClick={handleReset}
          className="px-8 py-3 rounded-full border-[3px] border-(--color-brand-black) bg-white text-(--color-brand-black) font-bold text-base shadow-[5px_5px_0px_var(--color-brand-black)] w-full cursor-pointer"
        >
          Book Another Ride
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-[28px] border-[3px] border-(--color-brand-black) shadow-[3px_3px_0px_var(--color-brand-black)]">
      {/* Header */}
      <div className="mb-4">
        <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-(--color-dark-yellow)">
          Instant Quote
        </span>
        <h2 className="text-xl font-extrabold text-(--color-brand-black) mt-0.5">
          Book Your Ride
        </h2>
        <p className="text-xs text-(--color-gray-dark)/70 mt-1">
          Fares confirmed within minutes. No hidden toll surprises.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Name */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-(--color-gray-dark) text-xs">
            Full Name
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="e.g. Ramesh Patel"
              className={FIELD_BASE}
            />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-(--color-gray-dark) text-xs">
            Mobile Number
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              placeholder="10-digit mobile number"
              className={FIELD_BASE}
            />
          </div>
        </div>

        {/* Trip Type */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-(--color-gray-dark) text-xs">
            Trip Type
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {TRIP_TYPES.map(({ label, value, icon: Icon }) => {
              const active = formData.tripType === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleTripType(value)}
                  className={`flex flex-col items-center justify-center gap-0.5 py-2 rounded-xl border text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-(--color-dark-yellow) border-(--color-dark-yellow) text-(--color-brand-black) shadow-md shadow-yellow-500/20"
                      : "bg-gray-50 border-gray-200 text-(--color-gray-dark) hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Route */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-(--color-gray-dark) text-xs">
            Route
          </label>
          <div className="flex gap-2.5">
            <div className="flex flex-col items-center pt-2.5 pb-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-(--color-dark-yellow) ring-4 ring-yellow-100 shrink-0" />
              <div className="relative flex-1 w-px border-l-2 border-dashed border-gray-300 my-1">
                <Car className="w-3.5 h-3.5 text-(--color-brand-black) absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 bg-white" />
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-(--color-brand-black) shrink-0" />
            </div>

            <div className="flex-1 flex flex-col gap-2.5">
              <div className="relative">
                <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  name="pickupCity"
                  value={formData.pickupCity}
                  onChange={handleChange}
                  required
                  placeholder="Pickup city"
                  className={FIELD_BASE}
                />
              </div>
              <div className="relative">
                <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  name="dropCity"
                  value={formData.dropCity}
                  onChange={handleChange}
                  required
                  placeholder="Drop city"
                  className={FIELD_BASE}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1 text-(--color-gray-dark) text-xs">
            Pickup Date
          </label>
          <div className="relative">
            <CalendarDays className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className={`${FIELD_BASE} cursor-pointer`}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-(--color-dark-yellow) text-(--color-brand-black) font-extrabold text-sm uppercase tracking-wider rounded-full border-2 border-(--color-brand-black) shadow-[4px_4px_0px_var(--color-brand-black)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_var(--color-brand-black)] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Car className="w-4 h-4" strokeWidth={2.5} />
          {isLoading ? "Sending..." : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
