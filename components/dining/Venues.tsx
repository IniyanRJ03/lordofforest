"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const VENUES = [
  {
    title: "The Lagoon Restaurant",
    image: "/home/1.jpg",
    desc: "Our signature restaurant offering panoramic lagoon views and international cuisine with a local twist.",
    details: [
      "Cuisine: International with a local twist",
      "Ambience: Panoramic lagoon and garden views",
      "Breakfast: 7:30 AM - 9:30 AM",
      "Lunch: 12:30 PM - 2:30 PM",
      "Dinner: 7:30 PM - 9:30 PM",
    ],
  },
  {
    title: "Lagoonside Grill",
    image: "/home/3.jpg",
    desc: "Fresh seafood and grilled specialties served in a casual atmosphere by the lagoon.",
    details: [
      "Lunch: 12:00 PM - 4:00 PM",
      "Dinner: 6:00 PM - 9:30 PM",
      "Casual Attire Welcome",
    ],
  },
  {
    title: "Sunset Lounge",
    image: "/home/2.jpg",
    desc: "An elegant setting for cocktails, light bites, and breathtaking sunset views.",
    details: [
      "Cuisine: Cocktails and light bites",
      "Ambience: Elegant setting with breathtaking sunset views",
      "Hours: 4:00 PM - 11:00 PM",
    ],
  },
];

export default function Venues() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="mb-8 sm:mb-10 text-center">
        <span className="uppercase text-xs tracking-widest text-blue-600 font-semibold mb-2 block">Dining Venues</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight">Exceptional Settings</h2>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-blue-700 mb-3 sm:mb-4">Memorable Experiences</h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
          Experience a culinary journey where local ingredients meet international flavors, all set against the backdrop of the serene lagoon.
        </p>
      </div>
      <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16">
        {VENUES.map((venue, i) => (
          <motion.div
            key={venue.title}
            className={`flex flex-col lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''} gap-6 sm:gap-8 items-center`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg w-full lg:w-1/2 h-48 sm:h-56 md:h-64 relative">
              <Image src={venue.image} alt={venue.title} fill className="object-cover w-full h-full" />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="font-semibold text-base sm:text-lg lg:text-xl text-gray-900 mb-1">{venue.title}</div>
              <div className="text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg leading-relaxed">{venue.desc}</div>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 text-xs sm:text-sm lg:text-base">
                {venue.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 