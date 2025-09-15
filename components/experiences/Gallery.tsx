"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EXPERIENCES = [
  {
    title: "Kayaking",
    desc: "Explore the lagoon at your own pace",
    image: "/images/outdoor/643429493.jpg",
    category: "Water Activities",
  },
  {
    title: "Paddling Boats",
    desc: "Relaxing paddle adventure on calm lagoon waters.",
    image: "/images/outdoor/615134288.jpg",
    category: "Water Activities",
  },
  {
    title: "Nature Trail",
    desc: "Guided wilderness walks",
    image: "/images/meditation room/615134269.jpg",
    category: "Nature",
  },
  {
    title: "Boat Tours",
    desc: "Guided lagoon exploration",
    image: "/images/outdoor/bbring.jpg",
    category: "Water Activities",
  },
  {
    title: "Bird Watching",
    desc: "Spot exotic species",
    image: "/images/outdoor/643429493.jpg",
    category: "Nature",
  },
  {
    title: "Fishing",
    desc: "Traditional fishing experience",
    image: "/images/outdoor/615134288.jpg",
    category: "Water Activities",
  },
  {
    title: "Sunset Cruise",
    desc: "Magical evening lagoon cruise",
    image: "/images/meditation room/615134269.jpg",
    category: "Water Activities",
  },
  {
    title: "Wildlife Safari",
    desc: "Discover local wildlife",
    image: "/images/outdoor/bbring.jpg",
    category: "Nature",
  },
  {
    title: "Photography Tour",
    desc: "Capture stunning lagoon views",
    image: "/images/outdoor/643429493.jpg",
    category: "Nature",
  },
];

const FILTERS = [
  { label: "All Experiences", value: "all" },
  { label: "Water Activities", value: "Water Activities" },
  { label: "Nature", value: "Nature" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? EXPERIENCES : EXPERIENCES.filter(e => e.category === filter);

  return (
    <section className="bg-gradient-to-b from-white via-blue-50/40 to-emerald-50/40 py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="uppercase text-xs tracking-widest text-gray-500 font-semibold mb-3 block">Experience Gallery</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Capture the Moment<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Share the Experience
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our diverse range of activities and experiences that await you at LORD Resort.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {FILTERS.map(f => (
            <motion.button
              key={f.value}
              onClick={() => setFilter(f.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium border transition-all focus:outline-none ${
                filter === f.value 
                  ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white border-transparent shadow-lg" 
                  : "bg-white/80 backdrop-blur text-gray-700 border-gray-200 hover:bg-white"
              }`}
            >
              {f.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid - 3x3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="wait">
            {filtered.map((exp, i) => (
              <motion.div
                key={exp.title + i}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.9 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full h-40 sm:h-48">
                  <Image 
                    src={exp.image} 
                    alt={exp.title} 
                    fill 
                    className="object-cover w-full h-full" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                      exp.category === "Water Activities" 
                        ? "bg-blue-100 text-blue-700" 
                        : "bg-green-100 text-green-700"
                    }`}>
                      {exp.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8 sm:mt-12"
        >
          <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
            Explore All Experiences
          </button>
        </motion.div>
      </div>
    </section>
  );
} 