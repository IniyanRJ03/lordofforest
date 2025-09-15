"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TABS = [
  {
    label: "Wellness",
    content: {
      title: "Yoga and meditation",
      desc: "Immerse yourself in tranquility with our dedicated meditation room designed to rejuvenate your body and mind.",
      features: [
        {
          title: "Meditation Room",
          desc: "Our dedicated meditation room provides the perfect peaceful environment for yoga and meditation sessions.",
        },
        {
          title: "Yoga Classes",
          desc: "Join our regular yoga classes in the serene meditation room.",
        },
      ],
      image: "/images/meditation room/615134269.jpg",
    },
  },
  {
    label: "Activities",
    content: {
      title: "Outdoor Activities",
      desc: "Enjoy various outdoor activities including basketball and free cycle rides in our beautiful forest surroundings.",
      features: [
        {
          title: "Relaxing Garden",
          desc: "Enjoy our peaceful garden area with a basketball hoop for recreation and relaxation.",
        },
        {
          title: "Free Cycle Rides",
          desc: "3 cycles available for free. Book and explore the beautiful surroundings.",
        },
      ],
      image: "/images/outdoor/bbring.jpg",
    },
  },

  {
    label: "Services",
    content: {
      title: "Premium Services",
      desc: "Enjoy thoughtful amenities and attentive service throughout your stay, ensuring a seamless and memorable experience.",
      features: [
        {
          title: "24-Hour Reception",
          desc: "Our team is available around the clock to assist you.",
        },
        {
          title: "Room Service",
          desc: "Dine in the comfort of your room with our prompt service.",
        },
      ],
      image: "/images/outdoor/615134288.jpg",
    },
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20"
    >
      <span className="uppercase text-xs tracking-widest text-gray-500 font-semibold mb-2 sm:mb-3 block">Amenities & Services</span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
        Every detail.<br />Thoughtfully considered.
      </h2>
      
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 lg:mb-10">
        {TABS.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActive(i)}
            className={`px-3 sm:px-4 lg:px-6 py-2 rounded-full text-xs sm:text-sm font-medium border transition-all duration-300 ${
              active === i 
                ? "bg-gray-100 text-gray-900 border-gray-300 shadow-md" 
                : "bg-white text-gray-500 border-transparent hover:bg-gray-50 hover:text-gray-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      
      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
        {/* Left: Text */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">
            {tab.content.title}
          </h3>
          <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
            {tab.content.desc}
          </p>
          <div className="space-y-3 sm:space-y-4">
            {tab.content.features.map((f) => (
              <div key={f.title} className="mb-3 sm:mb-4">
                <div className="font-medium text-gray-900 text-sm sm:text-base lg:text-lg mb-1">
                  {f.title}
                </div>
                <div className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {f.desc}
                </div>
              </div>
            ))}
          </div>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-gray-900 font-medium mt-4 sm:mt-6 hover:underline group text-sm sm:text-base lg:text-lg transition-all duration-300"
          >
            Learn more
            <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
        
        {/* Right: Image */}
        <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0">
          <Image
            src={tab.content.image}
            alt={tab.content.title}
            width={500}
            height={340}
            className="object-cover w-full h-[200px] sm:h-[250px] lg:h-[320px]"
          />
        </div>
      </div>
    </motion.section>
  );
} 