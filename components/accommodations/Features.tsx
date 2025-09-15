"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "Panoramic Views",
    desc: "Floor-to-ceiling windows offering breathtaking lagoon and garden views from every room.",
    image: "/home/2.jpg",
  },
  {
    title: "Private Balconies",
    desc: "Spacious private balconies or terraces perfect for outdoor relaxation and dining.",
    image: "/home/4.jpg",
  },
  {
    title: "Premium Bedding",
    desc: "Luxurious king-sized beds with premium linens and pillow menu for perfect comfort.",
    image: "/home/1.jpg",
  },
];

const THOUGHTFUL_LIST = [
  "Custom-designed furniture",
  "Premium entertainment systems",
  "Luxury bathroom fixtures",
  "Ambient lighting control",
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
      <div className="mb-8 sm:mb-10 text-center">
        <span className="uppercase text-xs tracking-widest text-blue-600 font-semibold mb-2 block">Special Features</span>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 leading-tight">Exceptional Details</h2>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-blue-700 mb-3 sm:mb-4">Beyond the Ordinary</h3>
      </div>
      
      {/* Top features row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-16">
        {FEATURES.map((f, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-stretch"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
            whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(0,0,0,0.13)" }}
          >
            <div className="relative w-full h-24 sm:h-32 md:h-40 lg:h-48">
              <Image src={f.image} alt={f.title} fill className="object-cover w-full h-full" />
            </div>
            <div className="p-3 sm:p-4 lg:p-5 flex-1 flex flex-col">
              <div className="font-semibold text-sm sm:text-base lg:text-lg text-gray-900 mb-1">{f.title}</div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">{f.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Thoughtfully Designed section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
        <div>
          <div className="font-semibold text-base sm:text-lg lg:text-xl text-gray-900 mb-1">Thoughtfully Designed</div>
          <div className="text-blue-700 font-light text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">For Your Comfort</div>
          <div className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base leading-relaxed">
            Every room is meticulously designed to provide the perfect balance of luxury, comfort, and functionality. From the carefully selected furnishings to the state-of-the-art amenities, we've considered every detail to enhance your stay.
          </div>
          <ul className="list-disc pl-5 space-y-1 text-gray-800 text-xs sm:text-sm lg:text-base">
            {THOUGHTFUL_LIST.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <motion.div
          className="rounded-xl overflow-hidden shadow-lg w-full aspect-[16/9] relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <Image src="/home/3.jpg" alt="Pigeon Island and resort aerial view" fill className="object-cover w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
} 