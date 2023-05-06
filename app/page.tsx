"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Servicecards from "./components/Servicecards";
import FAQSection from "./components/FAQSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import DownloadApp from "./components/DownloadApp";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicecards />
      <AboutUs />
      <Features />
      <Testimonials />
      <FAQSection />
      <DownloadApp />
      <Contact />
      <Footer />
    </>
  );
}
