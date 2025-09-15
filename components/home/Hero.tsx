"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/outdoor/643429493.jpg",
  "/images/outdoor/615134288.jpg",
  "/images/meditation room/615134269.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background images with fade transition */}
      {images.map((image, index) => (
        <motion.div
          key={image}
          initial={{ opacity: 0 }}
          animate={{ opacity: current === index ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt={`Hero background ${index + 1}`}
            fill
            className="object-cover object-center w-full h-full"
            priority={index === 0}
          />
        </motion.div>
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {/* Centered content with animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-lg mb-4 sm:mb-5 lg:mb-7 px-2">
          A peaceful retreat<br />in the forest.
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-6 sm:mb-7 lg:mb-9 drop-shadow max-w-xs sm:max-w-md lg:max-w-xl mx-auto px-2 leading-relaxed">
          Experience perfect serenity at <span className="font-bold">Lord Of Beach Resort</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center w-full max-w-xs sm:max-w-md lg:max-w-none mx-auto px-4">
          <a
            href="#"
            className="bg-white text-gray-900 rounded-full px-8 sm:px-10 py-3 sm:py-4 font-medium text-sm sm:text-base lg:text-lg shadow-lg hover:bg-gray-100 transition-all duration-300 text-center w-full sm:w-auto hover:shadow-xl hover:scale-105"
          >
            Book Your Stay
          </a>
          <a
            href="#"
            className="border-2 border-white text-white rounded-full px-8 sm:px-10 py-3 sm:py-4 font-medium text-sm sm:text-base lg:text-lg shadow-lg hover:bg-white/10 transition-all duration-300 text-center w-full sm:w-auto hover:shadow-xl hover:scale-105"
          >
            Explore Experiences
          </a>
        </div>
      </motion.div>
    </section>
  );
} 