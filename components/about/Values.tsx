const values = [
  {
    title: "Exceptional Service",
    desc: "Personalized attention and memorable experiences.",
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
    ),
    image: "/images/outdoor/643429493.jpg",
  },
  {
    title: "Environmental Stewardship",
    desc: "Eco-friendly practices to protect the lagoon.",
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 00-7.07 17.07A10 10 0 1012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-7h2v2h-2zm0-4h2v2h-2z" /></svg>
    ),
    image: "/images/outdoor/615134288.jpg",
  },
  {
    title: "Cultural Connection",
    desc: "Celebrating local traditions and diversity.",
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a10 10 0 000 20M12 2a10 10 0 010 20" /></svg>
    ),
    image: "/images/meditation room/615134269.jpg",
  },
  {
    title: "Quality Excellence",
    desc: "Highest standards of luxury and comfort.",
    icon: (
      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="4" /><path d="M9 9h6v6H9z" /></svg>
    ),
    image: "/images/outdoor/643429493.jpg",
  },
];

import Image from "next/image";

export default function Values() {
  return (
    <section className="bg-gray-50 py-8 sm:py-12 lg:py-20 flex justify-center items-center">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 mb-2">
            <span className="h-0.5 w-4 sm:w-6 lg:w-8 bg-blue-600 rounded" />
            <span className="uppercase text-xs font-semibold tracking-widest text-blue-700">Our Values</span>
            <span className="h-0.5 w-4 sm:w-6 lg:w-8 bg-blue-600 rounded" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 leading-tight">The Principles That</h2>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-700 mb-3 sm:mb-4 lg:mb-6">Guide Our Journey</h3>
          <p className="text-gray-600 max-w-xs sm:max-w-md lg:max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            At Lord Of Beach Resort, our values form the foundation of everything we do, from how we serve our guests to how we protect our forest environment.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-8 mb-8 sm:mb-12">
          {values.map((v) => (
            <div
              key={v.title}
              className="group bg-white rounded-xl sm:rounded-2xl shadow p-4 sm:p-5 lg:p-8 flex flex-col items-center text-center relative overflow-hidden cursor-pointer"
            >
              {/* Hover image */}
              <div className="absolute inset-0 w-full h-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Image src={v.image} alt={v.title} fill className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-white/80" />
              </div>
              <div className="mb-2 sm:mb-3 lg:mb-4 z-10 relative">{v.icon}</div>
              <div className="font-semibold text-sm sm:text-base lg:text-lg text-gray-900 mb-1 sm:mb-2 z-10 relative">{v.title}</div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base z-10 relative leading-relaxed">{v.desc}</div>
              {/* Decorative background shape */}
              <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-blue-50 rounded-full opacity-40 -z-10" />
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto text-center text-gray-500 italic text-xs sm:text-sm lg:text-base">
          "These values have guided us since our founding and continue to shape our future as we strive to create an exceptional resort experience that respects both our guests and our environment."
        </div>
      </div>
    </section>
  );
} 