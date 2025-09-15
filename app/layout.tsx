import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lord Of Beach Resort - Yoga & Meditation Centre | Batticaloa Sri Lanka",
    template: "%s | Lord Of Beach Resort"
  },
  description: "Experience perfect serenity at Lord Of Beach Resort in Batticaloa, Sri Lanka. A peaceful retreat offering comfortable accommodations, yoga & meditation facilities, relaxing garden with basketball, and free cycle rides. Book your tranquil getaway today.",
  keywords: [
    "Lord Of Beach Resort",
    "Batticaloa resort",
    "Sri Lanka accommodation",
    "yoga meditation centre",
    "peaceful retreat",
    "Batticaloa hotel",
    "Sri Lanka yoga retreat",
    "meditation center Sri Lanka",
    "basketball court resort",
    "free cycle rides",
    "relaxing garden",
    "Batticaloa guesthouse",
    "Sri Lanka wellness retreat",
    "affordable accommodation Batticaloa"
  ],
  authors: [{ name: "Lord Of Beach Resort" }],
  creator: "Lord Of Beach Resort",
  publisher: "Lord Of Beach Resort",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lordofbeachresort.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Lord Of Beach Resort - Yoga & Meditation Centre",
    description: "Experience perfect serenity at Lord Of Beach Resort in Batticaloa, Sri Lanka. A peaceful retreat offering comfortable accommodations, yoga & meditation facilities, and relaxing garden activities.",
    url: 'https://lordofbeachresort.com',
    siteName: 'Lord Of Beach Resort',
    images: [
      {
        url: '/images/outdoor/643429493.jpg',
        width: 1200,
        height: 630,
        alt: 'Lord Of Beach Resort - Peaceful Retreat in Batticaloa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lord Of Beach Resort - Yoga & Meditation Centre",
    description: "Experience perfect serenity at Lord Of Beach Resort in Batticaloa, Sri Lanka. A peaceful retreat offering comfortable accommodations and wellness facilities.",
    images: ['/images/outdoor/643429493.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Lord Of Beach Resort",
    "description": "A peaceful retreat offering comfortable accommodations, yoga & meditation facilities, and relaxing garden activities in Batticaloa, Sri Lanka.",
    "url": "https://lordofbeachresort.com",
    "logo": "https://lordofbeachresort.com/logo.png",
    "image": "https://lordofbeachresort.com/images/outdoor/643429493.jpg",
    "telephone": "+94-XX-XXXXXXX",
    "email": "neemforest@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Batticaloa",
      "addressLocality": "Batticaloa",
      "addressCountry": "Sri Lanka"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "7.7102",
      "longitude": "81.6924"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Yoga & Meditation Centre",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "Basketball Court",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free WiFi",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free Cycle Rides",
        "value": true
      }
    ],
    "priceRange": "$45-$45",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4.8",
      "bestRating": "5"
    }
  };

  return (
    <html lang="en" className="overflow-y-scroll">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-16">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
