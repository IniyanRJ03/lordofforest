"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "United Kingdom",
    date: "April 2025",
    rating: 5.0,
    text: "Our stay at LORD Resort exceeded all expectations. The serene lagoon setting created the perfect backdrop for relaxation. The infinity pool merging with the lagoon view was breathtaking! Staff were attentive to every detail, and the food at the restaurant was exceptional. Will definitely be returning!",
    category: "Luxury Experience"
  },
  {
    id: 2,
    name: "Raj Patel",
    country: "India",
    date: "March 2025",
    rating: 5.0,
    text: "A truly unforgettable experience at this hidden gem in Trincomalee. Our lagoon view room was spacious and beautifully designed. The guided lagoon tour was informative and gave us a deeper appreciation of the natural ecosystem. The traditional Sri Lankan dishes at the restaurant were authentic and delicious.",
    category: "Cultural Experience"
  },
  {
    id: 3,
    name: "Emily & David Chen",
    country: "Singapore",
    date: "February 2025",
    rating: 5.0,
    text: "We celebrated our anniversary at LORD and couldn't have chosen a better place. The staff arranged a special private dinner by the lagoon that was magical. The spa treatments were rejuvenating, and the infinity pool was perfect for unwinding. A perfect balance of luxury and natural beauty.",
    category: "Romantic Getaway"
  },
  {
    id: 4,
    name: "Carlos Mendez",
    country: "Spain",
    date: "January 2025",
    rating: 4.9,
    text: "Lord of the Beach is a true paradise. The staff were friendly, the food was delicious, and the views were stunning. The lagoon activities were incredible and the sunset views were absolutely breathtaking. Highly recommended for a relaxing getaway!",
    category: "Adventure & Activities"
  },
  {
    id: 5,
    name: "Aisha Al-Farsi",
    country: "Oman",
    date: "December 2024",
    rating: 5.0,
    text: "We loved every moment at Lord of the Beach. The wellness facilities were top-notch and the lagoon activities were so much fun for the kids! The staff went above and beyond to make our family vacation memorable.",
    category: "Family Vacation"
  },
  {
    id: 6,
    name: "Tom & Lisa Nguyen",
    country: "Australia",
    date: "November 2024",
    rating: 5.0,
    text: "From the moment we arrived, we felt welcomed and pampered. The rooms were spotless and the private dinner by the lagoon was unforgettable. The attention to detail in every aspect of our stay was remarkable.",
    category: "Exceptional Service"
  },
];

export default function Stories() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextReview = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 lg:py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="uppercase text-xs tracking-widest text-gray-500 font-semibold mb-3 block">Guest Stories</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Real Experiences<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              From Our Guests
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Hear from our valued guests about their unforgettable experiences and moments of pure bliss at LORD Resort.
          </p>
        </motion.div>

        {/* Review Display */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <FaArrowLeft className="text-gray-600 text-sm sm:text-base" />
          </button>
          
          <button
            onClick={nextReview}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <FaArrowRight className="text-gray-600 text-sm sm:text-base" />
          </button>

          {/* Review Content */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-xl sm:shadow-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="p-8 sm:p-12 lg:p-16 text-center"
              >
                {/* Category Badge */}
                <div className="mb-6 sm:mb-8">
                  <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {reviews[current].category}
                  </span>
                </div>

                {/* Quote Icon */}
                <div className="mb-6 sm:mb-8">
                  <FaQuoteLeft className="w-8 h-8 sm:w-12 sm:h-12 text-blue-500 mx-auto" />
                </div>

                {/* Review Text */}
                <div className="mb-8 sm:mb-10">
                  <p className="text-gray-700 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto">
                    "{reviews[current].text}"
                  </p>
                </div>

                {/* Guest Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <div className="text-center sm:text-left">
                    <h3 className="font-semibold text-gray-900 text-lg sm:text-xl lg:text-2xl">{reviews[current].name}</h3>
                    <p className="text-gray-500 text-sm sm:text-base">{reviews[current].country}</p>
                    <p className="text-xs sm:text-sm text-gray-400">{reviews[current].date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 font-bold text-lg sm:text-xl">{reviews[current].rating}</span>
                    <FaStar className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === current ? "bg-blue-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center"
        >
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">4.9</div>
            <div className="text-gray-600 text-sm sm:text-base">Average Rating</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600 text-sm sm:text-base">Happy Guests</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600 text-sm sm:text-base">Would Recommend</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
} 