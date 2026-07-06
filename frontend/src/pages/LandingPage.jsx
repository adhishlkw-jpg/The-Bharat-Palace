import React from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { FloatingActions } from "@/components/site/FloatingActions";
import { About } from "@/components/site/About";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { EventCategories } from "@/components/site/EventCategories";
import { Stats } from "@/components/site/Stats";
import { Gallery } from "@/components/site/Gallery";
import { VirtualExperience } from "@/components/site/VirtualExperience";
import { Testimonials } from "@/components/site/Testimonials";
import { BookingCTA } from "@/components/site/BookingCTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export default function LandingPage() {
  return (
    <div data-testid="landing-page">
      <Nav />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <EventCategories />
        <Stats />
        <Gallery />
        <VirtualExperience />
        <Testimonials />
        <BookingCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
