import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Accommodations from "@/components/home/Accommodations";
import Stories from "@/components/home/Stories";
import Amenities from "@/components/accommodations/Amenities";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Lord Of Beach Resort in Batticaloa, Sri Lanka. Experience perfect serenity with comfortable accommodations, yoga & meditation facilities, relaxing garden with basketball, and free cycle rides. Book your peaceful retreat today.",
  keywords: "Lord Of Beach Resort, Batticaloa resort, Sri Lanka accommodation, yoga meditation centre, peaceful retreat, Batticaloa hotel",
  openGraph: {
    title: "Lord Of Beach Resort - Your Peaceful Retreat in Batticaloa",
    description: "Experience perfect serenity at Lord Of Beach Resort. A peaceful retreat offering comfortable accommodations, yoga & meditation facilities, and relaxing garden activities in Batticaloa, Sri Lanka.",
    images: ['/images/outdoor/643429493.jpg'],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Accommodations />
      <Amenities />
      <Stories />
      {/* Add your own sections/components here */}
    </>
  );
}
