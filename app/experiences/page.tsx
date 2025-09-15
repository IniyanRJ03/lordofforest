import ExperiencesHero from "@/components/experiences/ExperiencesHero"
import Services from "@/components/home/Services"
import FeaturedExperiences from "@/components/experiences/FeaturedExperiences"
import Gallery from "@/components/experiences/Gallery"
import BookExperiences from "@/components/experiences/BookExperiences"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lord Of Beach Resort - Experiences",
  description: "Discover amazing experiences at Lord Of Beach Resort in Batticaloa, Sri Lanka. Enjoy yoga & meditation sessions, relaxing garden with basketball, free cycle rides, and wellness activities. Book your peaceful retreat today.",
  keywords: "Batticaloa experiences, Sri Lanka yoga retreat, meditation sessions, basketball court, free cycle rides, wellness activities, relaxing garden, peaceful retreat activities",
  openGraph: {
    title: "Amazing Experiences at Lord Of Beach Resort",
    description: "Immerse yourself in wellness and relaxation at Lord Of Beach Resort. Enjoy yoga & meditation sessions, basketball in our relaxing garden, free cycle rides, and authentic wellness experiences in Batticaloa, Sri Lanka.",
    images: ['/images/meditation room/615134269.jpg'],
  },
};

export default function ExperiencePage(){
    return(
        <>
            <ExperiencesHero/>
            <Services/>
            <FeaturedExperiences/>
            <Gallery/>
            <BookExperiences/>
        </>
    )
}