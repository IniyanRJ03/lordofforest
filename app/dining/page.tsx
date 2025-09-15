import DiningHero from "../../components/dining/DiningHero";
import Venues from "@/components/dining/Venues";
import Reservation from "@/components/dining/Reservation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lord Of Beach Resort - Dining",
  description: "Experience authentic Sri Lankan cuisine and international dishes at Lord Of Beach Resort in Batticaloa, Sri Lanka. Enjoy delicious meals in our peaceful dining venues with fresh, local ingredients and traditional flavors.",
  keywords: "Batticaloa dining, Sri Lanka cuisine, authentic Sri Lankan food, resort restaurant, local dishes, traditional food, dining experience, fresh ingredients",
  openGraph: {
    title: "Dining at Lord Of Beach Resort - Authentic Sri Lankan Cuisine",
    description: "Savor authentic Sri Lankan cuisine and international dishes at Lord Of Beach Resort. Experience traditional flavors with fresh, local ingredients in our peaceful dining venues in Batticaloa, Sri Lanka.",
    images: ['/images/outdoor/643429493.jpg'],
  },
};

export default function DiningPage() {
  return (
    <>
    <DiningHero />
    <Venues/>
    <Reservation/>
    </>
    )
}
