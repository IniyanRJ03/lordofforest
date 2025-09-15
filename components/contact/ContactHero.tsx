"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[50vh] min-h-[300px] sm:h-[60vh] sm:min-h-[400px] md:h-[70vh] md:min-h-[500px] lg:h-[80vh] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/home/4.jpg"
        alt="Contact background"
        fill
        className="object-cover object-center w-full h-full z-0"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full pt-16 sm:pt-20 lg:pt-24 overflow-hidden">
        <motion.span 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="uppercase text-xs sm:text-sm tracking-widest text-blue-200 font-semibold mb-2 sm:mb-3 block"
        >
          Get in Touch
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-2 sm:mb-3 drop-shadow-lg"
        >
          Connect With Us<br />
          <span className="text-gray-200 font-light">We're Here to Help</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-gray-100 text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-6 sm:mb-7 lg:mb-9 drop-shadow max-w-xs sm:max-w-md lg:max-w-2xl leading-relaxed"
        >
          Whether you have questions about your stay, special requests, or would like to learn more about our resort, our dedicated team is ready to assist you.
        </motion.p>
      </div>
    </section>
  );
} 