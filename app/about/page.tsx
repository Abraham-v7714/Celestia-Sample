import { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import OurStory from "@/components/OurStory";
import TheArtisans from "@/components/TheArtisans";
import EventStats from "@/components/EventStats";

export const metadata: Metadata = {
  title: "About Us | Celestia Events",
  description: "Architects of unforgettable moments. Discover the story, artisans, and legacy behind Celestia Events.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-dark flex flex-col">
      <AboutHero />
      <OurStory />
      <EventStats />
      <TheArtisans />
    </main>
  );
}
