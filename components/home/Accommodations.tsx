"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaUsers, FaWifi, FaBath, FaBed, FaStar, FaCheck, FaBasketballBall, FaBicycle, FaPrayingHands } from "react-icons/fa";

const ROOM_TYPES = [
  {
    id: "room-1",
    title: "Family Room with Garden View 1",
    subtitle: "Comfortable guest room with peaceful surroundings",
    icon: FaUsers,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    description: "Comfortable guest room with peaceful surroundings, featuring essential amenities and comfortable accommodations. Perfect for individuals or couples seeking tranquility.",
    features: [
      { icon: FaBath, text: "Private bathroom" },
      { icon: FaWifi, text: "Free Wifi" },
      { icon: FaBed, text: "Comfortable beds" },
      { icon: FaCheck, text: "Free toiletries" },
      { icon: FaCheck, text: "Shower & Toilet" },
      { icon: FaCheck, text: "Towels & Slippers" },
      { icon: FaCheck, text: "Sitting area" },
      { icon: FaCheck, text: "Fan" }
    ],
    image: "/images/room 1/615134276.jpg",
    stats: { size: "15 m²", rating: "4.8", guests: "2", price: "From $45" }
  },
  {
    id: "room-2",
    title: "Family Room with Garden View 2",
    subtitle: "Spacious guest room with peaceful surroundings",
    icon: FaUsers,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
    description: "Spacious guest room with peaceful surroundings, featuring essential amenities and comfortable accommodations. Perfect for individuals or couples seeking tranquility.",
    features: [
      { icon: FaBath, text: "Private bathroom" },
      { icon: FaWifi, text: "Free Wifi" },
      { icon: FaBed, text: "Comfortable beds" },
      { icon: FaCheck, text: "Free toiletries" },
      { icon: FaCheck, text: "Shower & Toilet" },
      { icon: FaCheck, text: "Towels & Slippers" },
      { icon: FaCheck, text: "Sitting area" },
      { icon: FaCheck, text: "Fan" }
    ],
    image: "/images/room 2/615134289.jpg",
    stats: { size: "15 m²", rating: "4.8", guests: "2", price: "From $45" }
  },
];

export default function Accommodations() {
  const [active, setActive] = useState("room-1");
  const selectedRoom = ROOM_TYPES.find(r => r.id === active);

  if (!selectedRoom) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20 lg:py-24 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Our Accommodations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Peaceful
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              Forest Retreat
            </span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Experience peaceful comfort in our thoughtfully designed guest rooms, 
            offering the perfect blend of simplicity and tranquility for your stay.
          </p>
        </motion.div>

        {/* Room Selection Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto"
        >
          {ROOM_TYPES.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onClick={() => setActive(room.id)}
              className={`relative cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                active === room.id ? 'ring-4 ring-blue-500 scale-105' : 'hover:scale-102'
              }`}
            >
              <div className="relative h-48">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{room.title}</h3>
                  <p className="text-sm opacity-90">{room.subtitle}</p>
                </div>
                {active === room.id && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Selected
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Room Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mb-12"
          >
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={selectedRoom.image}
                  alt={selectedRoom.title}
                  width={800}
                  height={500}
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                  <span className="text-green-600 font-bold text-xl">{selectedRoom.stats.price}</span>
                </div>
                
                {/* Room Title Overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">{selectedRoom.title}</h3>
                  <p className="text-white/90 text-lg sm:text-xl">{selectedRoom.subtitle}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Room Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
          >
            {Object.entries(selectedRoom.stats).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">{key}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Room Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Room Overview</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{selectedRoom.description}</p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Room Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedRoom.features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${selectedRoom.color} flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="text-white text-lg" />
                    </div>
                    <span className="text-gray-700 font-medium text-base">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Activities Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="mt-12 bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Available Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Relaxing Garden with Basketball */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBasketballBall className="text-white text-2xl" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Relaxing Garden</h4>
                <p className="text-gray-600 text-sm">Enjoy our peaceful garden area with a basketball hoop for recreation and relaxation.</p>
              </motion.div>

              {/* Yoga & Meditation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPrayingHands className="text-white text-2xl" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Yoga & Meditation</h4>
                <p className="text-gray-600 text-sm">Dedicated meditation room for yoga sessions and peaceful meditation practices.</p>
              </motion.div>

              {/* Free Cycles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBicycle className="text-white text-2xl" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Free Cycle Rides</h4>
                <p className="text-gray-600 text-sm">3 cycles available for free. Book and explore the beautiful surroundings.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Booking Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 sm:p-12 text-white shadow-xl"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Ready to Book?</h3>
              <p className="text-blue-100 text-lg mb-8">Secure your peaceful forest retreat today with our easy booking process.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                  Book Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 