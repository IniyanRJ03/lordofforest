import Image from "next/image";
import { FaFacebookF, FaInstagram, FaXTwitter, FaGoogle } from "react-icons/fa6";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

const exploreLinks = [
  { name: "About", href: "#" },
  { name: "Rooms", href: "#" },
  { name: "Experiences", href: "#" },
];
const legalLinks = [
  { name: "Privacy", href: "#" },
  { name: "Terms of Use", href: "#" },
  { name: "Sitemap", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Contact", href: "#" },
];
const hotelAreas = [
  { name: "Batticaloa", href: "#" },
  { name: "Kalkudah", href: "#" },
  { name: "Pasikudah", href: "#" },
];

const socialLinks = [
  { name: "Facebook", href: "#", icon: <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { name: "Instagram", href: "#", icon: <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { name: "X", href: "#", icon: <FaXTwitter className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { name: "Google", href: "#", icon: <FaGoogle className="w-4 h-4 sm:w-5 sm:h-5" /> },
];

const paymentIcons = [
  { name: "Visa", icon: <FaCcVisa className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#1a1f71]" /> },
  { name: "Mastercard", icon: <FaCcMastercard className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#eb001b]" /> },
  { name: "Paypal", icon: <FaCcPaypal className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#003087]" /> },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f6f8] text-gray-700 pt-8 sm:pt-12 pb-4 sm:pb-6 px-4 border-t border-gray-200 mt-16 sm:mt-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between gap-8 sm:gap-12">
        {/* Left: Logo, description, social */}
        <div className="flex-1 min-w-0 flex flex-col gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image 
              src="/logo.png" 
              alt="LORD Resort Logo" 
              width={50} 
              height={33} 
              className="w-10 h-7 sm:w-12 sm:h-8 lg:w-15 lg:h-10"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-base sm:text-lg lg:text-xl tracking-wide text-gray-900">Lord Of Beach Resort</span>
              <span className="text-xs text-gray-700">Yoga & Meditation Centre</span>
            </div>
          </div>
          <p className="text-xs sm:text-sm max-w-xs mt-2 leading-relaxed">
            A serene retreat nestled alongside a pristine lagoon in Trincomalee, offering the perfect balance of relaxation and adventure.
          </p>
          <div className="flex gap-3 mt-2">
            {socialLinks.map((icon) => (
              <a 
                key={icon.name} 
                href={icon.href} 
                aria-label={icon.name} 
                className="text-gray-500 hover:text-blue-600 transition-colors duration-300 p-2 hover:bg-white rounded-full"
              >
                {icon.icon}
              </a>
            ))}
          </div>
        </div>
        
        {/* Center: Navigation columns */}
        <div className="flex-[2] grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-gray-900 text-sm sm:text-base">EXPLORE</h4>
            <ul className="space-y-2 sm:space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="hover:underline text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-gray-900 text-sm sm:text-base">LEGAL</h4>
            <ul className="space-y-2 sm:space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="hover:underline text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-gray-900 text-sm sm:text-base">HOTEL AREAS</h4>
            <ul className="space-y-2 sm:space-y-3">
              {hotelAreas.map((area) => (
                <li key={area.name}>
                  <a 
                    href={area.href} 
                    className="hover:underline text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    {area.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-gray-900 text-sm sm:text-base">CONTACT</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
              <li className="leading-relaxed">
                Lord Of Beach Resort<br />
                Yoga & Meditation Centre<br />
                Batticaloa, Sri Lanka
              </li>
              <li className="leading-relaxed">
                1234567890<br />
                lordresort@gmail.com
              </li>
              <li>Reception: 24 Hours</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-gray-200 text-xs text-gray-500 gap-4">
        <span className="text-center sm:text-left">© 2025 Lord Of Beach Resort. All rights reserved.</span>
        <div className="flex gap-2 items-center">
          <span className="hidden sm:inline">We accept:</span>
          <span className="sm:hidden">Payment:</span>
          {paymentIcons.map((icon) => (
            <span key={icon.name} title={icon.name} className="flex items-center">
              {icon.icon}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
} 