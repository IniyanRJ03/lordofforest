"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const VENUES = [
  {
    title: "Main Restaurant",
    image: "/images/outdoor/643429493.jpg",
  },
  {
    title: "Lagoon Bar",
    image: "/images/outdoor/615134288.jpg",
  },
  {
    title: "Lagoonside Grill",
    image: "/images/meditation room/615134269.jpg",
  },
  {
    title: "Private Dining",
    image: "/images/outdoor/bbring.jpg",
  },
];

export default function DiningHero() {
  return (
    <section className="relative w-full h-[50vh] min-h-[300px] sm:h-[60vh] sm:min-h-[400px] md:h-[70vh] md:min-h-[500px] lg:h-[80vh] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/outdoor/643429493.jpg"
        alt="Dining background"
        fill
        className="object-cover object-center w-full h-full z-0"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full pt-16 sm:pt-20 lg:pt-24">
        <motion.span 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="uppercase text-xs sm:text-sm tracking-widest text-blue-200 font-semibold mb-2 sm:mb-3 block"
        >
          Culinary Excellence
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-2 sm:mb-3 drop-shadow-lg"
        >
          A Journey of<br />
          <span className="text-green-200 font-light">Flavors & Delights</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-gray-100 text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-6 sm:mb-7 lg:mb-9 drop-shadow max-w-xs sm:max-w-md lg:max-w-2xl leading-relaxed"
        >
          Discover exceptional dining experiences where local ingredients meet international culinary expertise in stunning settings.
        </motion.p>
        {/* Venues row - Hidden on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="hidden sm:flex gap-3 sm:gap-5 lg:gap-7 overflow-x-auto overflow-y-hidden pb-2 scrollbar-thin scrollbar-thumb-gray-300"
        >
          {VENUES.map((venue, i) => (
            <motion.div
              key={venue.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + (i * 0.1), ease: "easeOut" }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm w-48 min-w-[180px] sm:w-56 sm:min-w-[200px] md:w-64 md:min-w-[240px] lg:w-72 lg:min-w-[260px] cursor-pointer group flex-shrink-0"
            >
              <div className="relative w-full h-24 sm:h-32 md:h-36 lg:h-44">
                <Image src={venue.image} alt={venue.title} fill className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-3 sm:p-4 md:p-5 text-white text-sm sm:text-base md:text-lg font-medium bg-black/40 text-center min-h-[48px] sm:min-h-[56px] md:min-h-[64px] flex items-center justify-center">
                {venue.title}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 