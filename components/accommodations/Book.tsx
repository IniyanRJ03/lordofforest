"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaBed, FaLock, FaPhone } from "react-icons/fa";

const STEPS = [
  {
    icon: <FaCalendarAlt className="text-blue-600 text-xl sm:text-2xl" />,
    title: "Choose Your Dates",
    desc: "Select your preferred check-in and check-out dates",
  },
  {
    icon: <FaBed className="text-blue-600 text-xl sm:text-2xl" />,
    title: "Select Room Type",
    desc: "Pick the perfect accommodation for your needs",
  },
  {
    icon: <FaLock className="text-blue-600 text-xl sm:text-2xl" />,
    title: "Secure Booking",
    desc: "Complete your reservation with secure payment",
  },
  {
    icon: <FaPhone className="text-blue-600 text-xl sm:text-2xl" />,
    title: "Confirmation",
    desc: "Receive instant confirmation and support",
  },
];

export default function Book() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
      <div className="mb-8 sm:mb-10 text-center">
        <span className="uppercase text-xs tracking-widest text-blue-600 font-semibold mb-2 block">Book Your Stay</span>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 leading-tight">Simple Booking</h2>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-blue-700 mb-3 sm:mb-4">Seamless Experience</h3>
        <p className="text-gray-700 max-w-xs sm:max-w-md lg:max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
          Book your perfect stay with our easy-to-use reservation system. Just follow these simple steps to secure your paradise getaway.
        </p>
      </div>
      
      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
        {STEPS.map((step, i) => (
          <motion.div
            key={i}
            className="bg-white/90 backdrop-blur rounded-xl shadow p-4 sm:p-5 lg:p-6 flex flex-col items-center text-center relative border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
            whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(0,0,0,0.13)" }}
          >
            <div className="mb-2 sm:mb-3">{step.icon}</div>
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-xl sm:text-2xl lg:text-3xl font-bold text-gray-200 select-none pointer-events-none">{i + 1}</div>
            <div className="font-semibold text-gray-900 mb-1 mt-2 text-sm sm:text-base lg:text-lg">{step.title}</div>
            <div className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">{step.desc}</div>
          </motion.div>
        ))}
      </div>
      
      {/* Call to action banner */}
      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg mb-6 h-[160px] sm:h-[200px] md:h-[240px] lg:h-[320px]">
        <Image src="/images/outdoor/615134288.jpg" alt="Poolside luxury" fill className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 p-4 sm:p-6 lg:p-10 xl:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 h-full">
          <div>
            <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-1 sm:mb-2 leading-tight">
              Ready to Experience<br />Luxury by the Lagoon?
            </h3>
            <p className="text-gray-100 text-xs sm:text-sm lg:text-base mb-2 sm:mb-4 max-w-xl leading-relaxed">
              Book your stay now and enjoy exclusive rates and special packages. Our reservation team is ready to assist you with any special requests.
            </p>
            <div className="flex gap-2 sm:gap-4 flex-wrap">
              <a href="#" className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-3 sm:px-4 lg:px-6 py-2 rounded-lg font-semibold shadow hover:from-blue-700 hover:to-emerald-700 transition text-xs sm:text-sm lg:text-base">
                Book Now
              </a>
              <a href="#" className="bg-white/90 backdrop-blur text-gray-900 px-3 sm:px-4 lg:px-6 py-2 rounded-lg font-semibold shadow hover:bg-white transition text-xs sm:text-sm lg:text-base border border-gray-100">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-500 text-xs sm:text-sm lg:text-base mt-4">
        Need assistance? Call us at <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567 890</a>
      </div>
    </section>
  );
} 