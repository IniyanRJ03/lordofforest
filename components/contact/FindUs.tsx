"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function FindUs() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="mb-8 sm:mb-10 text-center">
        <span className="uppercase text-xs tracking-widest text-blue-600 font-semibold mb-2 block">Find Us</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight">Visit Our Resort</h2>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-gray-700 mb-3 sm:mb-4">Location & Directions</h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-start">
        {/* Map */}
        <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg w-full lg:w-2/3 h-48 sm:h-60 md:h-80 lg:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.45925797286!2d81.70241537448835!3d7.7410125078198755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afad3bd621ced69%3A0xb972724fedc6ef24!2sLord%20of%20beach%20resort.%20Yoga%20meditation%20Centre!5e0!3m2!1sen!2slk!4v1752214520427!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="JKAB Lagoon Resort Map"
          />
        </div>
        {/* Info Card */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow p-4 sm:p-6 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-600 text-lg sm:text-xl mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">Our Location</div>
                <div className="text-gray-700 text-xs sm:text-sm leading-relaxed">Lord Of Beach Resort<br />Yoga & Meditation Centre<br />Batticaloa, Sri Lanka</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-blue-600 text-lg sm:text-xl mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">Phone Numbers</div>
                <div className="text-gray-700 text-xs sm:text-sm">1234567890</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-blue-600 text-lg sm:text-xl mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">Email Address</div>
                <div className="text-gray-700 text-xs sm:text-sm">neemforest@gmail.com</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaClock className="text-blue-600 text-lg sm:text-xl mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">Opening Hours</div>
                <div className="text-gray-700 text-xs sm:text-sm leading-relaxed">Reception: 24/7<br />Restaurant: 6:30 AM - 10:30 PM</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl shadow p-4 sm:p-6 mt-2">
            <div className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Getting Here</div>
            <div className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              We're located in Batticaloa. From the Kovil in Navalady, head north for about 500 meters. Look for our distinctive entrance on the right side, marked by our resort sign. Free parking is available for all guests.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 