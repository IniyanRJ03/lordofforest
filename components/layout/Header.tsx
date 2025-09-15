"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Accommodations", href: "/accommodations" },
  { name: "Experiences", href: "/experiences" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo and tagline */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Image 
            src="/logo.png" 
            alt="LORD Resort Logo" 
            width={60} 
            height={40} 
            className="w-12 h-8 sm:w-16 sm:h-11"
          />
                      <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg sm:text-xl md:text-2xl tracking-wide text-gray-900">Lord Of Beach Resort</span>
              <span className="text-xs sm:text-sm text-gray-700 hidden sm:block">Yoga & Meditation Centre</span>
            </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 xl:gap-10 items-center text-base">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-300 relative group ${
                  isActive 
                    ? "text-[#0072bc]" 
                    : "text-gray-900 hover:text-[#0072bc]"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#0072bc] transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </a>
            );
          })}
        </nav>
        
        {/* Book Now Button (Desktop) */}
        <a
          href="https://www.booking.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-block ml-4 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-lg transition-all duration-300 text-sm sm:text-base border bg-[#0072bc] text-white border-[#0072bc] hover:bg-[#005fa3] hover:shadow-xl hover:scale-105"
        >
          Book Now
        </a>
        
        {/* Mobile Menu Trigger */}
        <button
          className="lg:hidden ml-auto z-50 p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-gray-900 block transition-all duration-300"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-gray-900 block mt-1 transition-all duration-300"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-gray-900 block mt-1 transition-all duration-300"
            />
          </div>
        </button>
      </div>
      
      {/* Mobile Menu - Simple Pop-up */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 z-40 lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-20 left-4 right-4 bg-white rounded-xl shadow-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation Links */}
              <div className="py-4">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className={`block px-6 py-3 transition-colors duration-200 text-base font-medium ${
                        isActive 
                          ? "text-[#0072bc] bg-blue-50 border-r-2 border-[#0072bc]" 
                          : "text-gray-900 hover:bg-gray-50 hover:text-[#0072bc]"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </motion.a>
                  );
                })}
                
                {/* Book Now Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="px-6 py-4 border-t border-gray-100"
                >
                  <a
                    href="https://www.booking.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#0072bc] text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-[#005fa3] transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Book Now
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 