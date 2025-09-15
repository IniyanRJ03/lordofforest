import AccommodationsHero from "../../components/accommodations/AccommodationsHero";
import Accommodations from "@/components/home/Accommodations";
import Amenities from "@/components/accommodations/Amenities";
import Features from "@/components/accommodations/Features";
import Book from "@/components/accommodations/Book";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lord Of Beach Resort - Accommodations",
  description: "Discover comfortable guest rooms at Lord Of Beach Resort in Batticaloa, Sri Lanka. Two peaceful rooms with private bathrooms, free WiFi, and essential amenities. From $45 per night. Book your tranquil stay today.",
  keywords: "Batticaloa accommodation, Sri Lanka guest rooms, comfortable rooms Batticaloa, affordable accommodation, private bathroom, free WiFi, peaceful rooms, Lord Of Beach Resort rooms",
  openGraph: {
    title: "Comfortable Accommodations at Lord Of Beach Resort",
    description: "Experience peaceful comfort in our thoughtfully designed guest rooms. Two comfortable rooms with essential amenities, private bathrooms, and free WiFi. Perfect for individuals or couples seeking tranquility in Batticaloa, Sri Lanka.",
    images: ['/images/room 1/615134276.jpg'],
  },
};

export default function AccommodationsPage() {
  return (
    <>
      <AccommodationsHero />
      <Accommodations/>
      <Amenities/>
      <Features/>
      <Book/>
      {/* Add accommodations sections and content here */}
    </>
  );
} 