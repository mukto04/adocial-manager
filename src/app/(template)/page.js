"use client";

import { useBooking } from "@/app/(template)/layout";
import Banner from "@/components/pages/home/Banner";
import Principles from "@/components/pages/home/Principles";
import Services from "@/components/pages/home/Services";
import HowWeWork from "@/components/pages/home/HowWeWork";
import Intelligence from "@/components/pages/home/Intelligence";
import About from "@/components/pages/home/About";
import Faq from "@/components/pages/home/Faq";

export default function HomePage() {
  const { openBooking } = useBooking();

  return (
    <>
      {/* 1. Hero Section with Custom Analytics Artwork */}
      <Banner onOpenBooking={openBooking} />

      {/* 2. Trust & 4 Operating Principles */}
      <Principles />

      {/* 3. Three Core Services with Distinct Architectural Treatments */}
      <Services onOpenBooking={openBooking} />

      {/* 4. Four-Stage Execution Methodology */}
      <HowWeWork />

      {/* 5. Campaign Intelligence & Strategy Showcase */}
      <Intelligence />

      {/* 6. About Adocial - Philosophy & Guarantees */}
      <About />

      {/* 7. Comprehensive FAQ Accordion */}
      <Faq onOpenBooking={openBooking} />
    </>
  );
}
