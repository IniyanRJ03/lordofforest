import AboutHero from "../../components/about/AboutHero";
import Heritage from "../../components/about/Heritage";
import Values from "../../components/about/Values";
import Location from "../../components/about/Location";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Lord Of Beach Resort's story, values, and heritage. Discover our commitment to providing peaceful retreats with yoga & meditation facilities in Batticaloa, Sri Lanka. Founded in 2020 with a vision for authentic wellness experiences.",
  keywords: "about Lord Of Beach Resort, Batticaloa resort history, Sri Lanka wellness retreat, resort values, peaceful sanctuary, meditation center story",
  openGraph: {
    title: "About Lord Of Beach Resort - Our Story & Values",
    description: "Discover the story behind Lord Of Beach Resort. Learn about our heritage, values, and commitment to providing peaceful retreats with authentic wellness experiences in Batticaloa, Sri Lanka.",
    images: ['/images/outdoor/643429493.jpg'],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero/>
      <Heritage />
      <Values />
      <Location />
      {/* Add more about page content here */}
    </>
  );
}
