import ContactHero from "../../components/contact/ContactHero";
import SendMessage from "@/components/contact/SendMessage";
import FindUs from "@/components/contact/FindUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Lord Of Beach Resort in Batticaloa, Sri Lanka. Contact us for bookings, inquiries about our yoga & meditation centre, accommodations, and peaceful retreat experiences. We're here to help plan your perfect getaway.",
  keywords: "contact Lord Of Beach Resort, Batticaloa resort contact, Sri Lanka accommodation booking, yoga retreat contact, meditation center contact, resort inquiries, booking information",
  openGraph: {
    title: "Contact Lord Of Beach Resort - Get In Touch",
    description: "Contact Lord Of Beach Resort for bookings and inquiries. Located in Batticaloa, Sri Lanka, we're here to help you plan your perfect peaceful retreat with yoga & meditation facilities.",
    images: ['/images/outdoor/643429493.jpg'],
  },
};

export default function ContactPage() {
  return (
  <>
  <ContactHero />
  <SendMessage/>
  <FindUs/>
  </>
  )
}
