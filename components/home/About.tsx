"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaLeaf, FaWater, FaMountain, FaHeart, FaStar } from "react-icons/fa";
import { useState } from "react";

const FEATURES = [
  {
    id: "nature",
    title: "Forest Sanctuary",
    icon: FaLeaf,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    description: "Immerse yourself in the pristine beauty of our forest sanctuary surrounded by neem trees.",
    features: [
      "Neem Forest Surroundings",
      "Pristine Natural Setting",
      "Abundant Bird Life",
      "Tranquil Environment",
      "Peaceful Surroundings",
      "Nature Trails"
    ],
    image: "/images/outdoor/643429493.jpg",
    stats: { guests: "500+", rating: "4.8", years: "3+" }
  },

  {
    id: "wellness",
    title: "Yoga & Meditation",
    icon: FaHeart,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
    borderColor: "border-pink-200",
    description: "Rejuvenate your body and mind with our dedicated yoga and meditation facilities.",
    features: [
      "Daily Yoga Classes",
      "Meditation Sessions",
      "Yoga Studio",
      "Meditation Garden",
      "Wellness Programs",
      "Peaceful Environment"
    ],
    image: "/images/meditation room/615134269.jpg",
    stats: { sessions: "200+", rating: "4.8", wellness: "10+" }
  },

];

export default function About() {
  const [active, setActive] = useState("nature");
  const selectedFeature = FEATURES.find(f => f.id === active) || FEATURES[0];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-gradient-to-b from-white via-blue-50/40 to-emerald-50/40 py-12 sm:py-16 lg:py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="uppercase text-xs tracking-widest text-gray-500 font-semibold mb-3 block">About Lord Of Beach Resort</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Serenity by Design<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Connection by Nature
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Discover the perfect blend of tranquility and wellness at Lord Of Beach Resort, where every moment is crafted for your ultimate peace and meditation.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActive(feature.id)}
              className={`relative cursor-pointer rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 transition-all duration-300 ${
                active === feature.id 
                  ? `${feature.bgColor} ${feature.borderColor} shadow-lg` 
                  : 'bg-white/90 backdrop-blur border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3 sm:mb-4`}>
                <feature.icon className="text-white text-lg sm:text-xl" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              
              {/* Active indicator */}
              {active === feature.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Detailed Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
          >
            {/* Left: Image and Stats */}
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl"
              >
                <Image
                  src={selectedFeature.image}
                  alt={selectedFeature.title}
                  width={600}
                  height={400}
                  className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{selectedFeature.title}</h3>
                  <p className="text-xs sm:text-sm opacity-90 leading-relaxed">{selectedFeature.description}</p>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-3 gap-3 sm:gap-4"
              >
                {Object.entries(selectedFeature.stats).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl"
                  >
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{key}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right: Features */}
            <div className="space-y-4 sm:space-y-6">
              <motion.h3
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl sm:text-2xl font-bold text-gray-900"
              >
                What Makes Us Special
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
              >
                {selectedFeature.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-center space-x-3 p-3 bg-white/90 backdrop-blur rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${selectedFeature.color}`} />
                    <span className="text-gray-700 font-medium text-sm sm:text-base">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-2 sm:pt-4"
              >
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                  Discover {selectedFeature.title}
                </button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
} 