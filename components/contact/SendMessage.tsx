"use client";
import { useState } from "react";

export default function SendMessage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
      <div className="mb-8 sm:mb-10 text-center">
        <span className="uppercase text-xs tracking-widest text-blue-600 font-semibold mb-2 block">Send a Message</span>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 leading-tight">Let's Start a</h2>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-700 mb-3 sm:mb-4">Conversation</h3>
        <p className="text-gray-600 max-w-xs sm:max-w-md lg:max-w-xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
          Have a question or special request? Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </div>
      <form className="space-y-4 sm:space-y-5 lg:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base" 
              required 
            />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email Address *</label>
            <input 
              type="email" 
              placeholder="john@example.com" 
              className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base" 
              required 
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input 
              type="tel" 
              placeholder="+1 (555) 000-0000" 
              className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base" 
            />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input 
              type="text" 
              placeholder="Booking Inquiry" 
              className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base" 
            />
          </div>
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Your Message *</label>
          <textarea 
            placeholder="Please write your message here..." 
            rows={5} 
            className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base resize-none" 
            required 
          />
        </div>
        <div className="text-center pt-2">
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-6 sm:px-8 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition text-sm sm:text-base"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
} 