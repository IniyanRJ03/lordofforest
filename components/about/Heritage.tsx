"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2018",
    desc: "Initial construction began with a vision to create a peaceful, nature-inspired resort.",
  },
  {
    year: "2020",
    desc: "Development was delayed due to the COVID-19 pandemic and economic challenges.",
  },
  {
    year: "2022",
    desc: "Construction resumed with renewed focus and momentum.",
  },
  {
    year: "2025",
    desc: "Lord Of Beach Resort proudly opened its doors in 2022, offering guests a peaceful escape with authentic wellness experiences.",
  },
];

export default function Heritage() {
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
          <span className="uppercase text-xs tracking-widest text-gray-500 font-semibold mb-3 block">Our Heritage</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            A Legacy of Luxury<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Since 2018
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 leading-relaxed">
            Founded in 2020, Lord Of Beach Resort emerged from a vision to create a peaceful sanctuary that harmoniously blends with the forest surroundings while offering authentic wellness experiences.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-4 sm:space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 sm:gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-8 sm:h-12 bg-gradient-to-b from-blue-500 to-purple-500 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pt-1 sm:pt-2">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
              <Image 
                src="/images/outdoor/643429493.jpg" 
                alt="Main heritage" 
                width={600}
                height={400}
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Our Journey</h3>
                <p className="text-xs sm:text-sm opacity-90">From vision to reality</p>
              </div>
            </div>
            
            {/* Mobile: Single Floating Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-16 sm:w-32 sm:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-lg border-2 sm:border-4 border-white block lg:hidden"
            >
              <Image 
                src="/images/outdoor/615134288.jpg" 
                alt="Heritage detail 1" 
                fill 
                className="object-cover" 
              />
            </motion.div>
            
            {/* Desktop: Both Floating Images */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-16 sm:w-32 sm:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-lg border-2 sm:border-4 border-white hidden lg:block"
            >
              <Image 
                src="/images/outdoor/615134288.jpg" 
                alt="Heritage detail 1" 
                fill 
                className="object-cover" 
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 h-12 sm:w-28 sm:h-20 rounded-lg sm:rounded-xl overflow-hidden shadow-lg border-2 sm:border-4 border-white hidden lg:block"
            >
              <Image 
                src="/images/meditation room/615134269.jpg" 
                alt="Heritage detail 2" 
                fill 
                className="object-cover" 
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 sm:mt-16"
        >
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
            Learn More About Our Story
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
} 