"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "Water Activities",
    desc: "We offer a variety of water sports and activities to make your stay even more exciting. Guests can arrange kayaking, paddling boat excursions, and other water-based adventures through our concierge. Whether you're seeking relaxation or adventure, our team is here to customize your perfect lagoon experience.",
    bullets: [
      "Kayaking and Paddling Boat",
      "Boat Rides and Tours",
      "Professional Equipment Provided",
      "Guided Activities Available",
    ],
    image: "/images/outdoor/643429493.jpg",
  },
  {
    title: "Cultural Immersion",
    desc: "Experience the rich local heritage through traditional performances, cooking classes, and village visits. Immerse yourself in authentic Sri Lankan culture and create lasting memories.",
    bullets: [
      "Traditional dance shows",
      "Local cooking workshops",
      "Village tours",
      "Craft demonstrations",
    ],
    image: "/images/outdoor/615134288.jpg",
  },
  {
    title: "Nature Exploration",
    desc: "Embark on guided nature walks, bird watching tours, and eco-friendly adventures in our pristine surroundings. Discover the natural beauty and biodiversity of the lagoon and its environs.",
    bullets: [
      "Expert naturalist guides",
      "Bird watching tours",
      "Nature photography",
      "Mangrove exploration",
    ],
    image: "/images/meditation room/615134269.jpg",
  },
];

export default function FeaturedExperiences() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="mb-8 sm:mb-10 text-center">
        <span className="uppercase text-xs tracking-widest text-blue-600 font-semibold mb-2 block">Featured Experiences</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight">Adventure Awaits</h2>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-blue-700 mb-3 sm:mb-4">At Every Turn</h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
          Discover a world of unique experiences designed to create unforgettable memories during your stay at JK Ablagoon Resort.
        </p>
      </div>
      <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16">
        {FEATURES.map((feature, i) => (
          <motion.div
            key={feature.title}
            className={`flex flex-col lg:flex-row ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''} gap-6 sm:gap-8 lg:gap-10 items-center`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg w-full lg:w-1/2 h-48 sm:h-56 md:h-64 lg:aspect-square relative">
              <Image src={feature.image} alt={feature.title} fill className="object-cover w-full h-full" />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-900 mb-1 sm:mb-2">{feature.title}</div>
              <div className="text-gray-700 mb-2 sm:mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">{feature.desc}</div>
              <ul className="list-disc pl-5 space-y-1 text-blue-700 text-xs sm:text-sm lg:text-base">
                {feature.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 