import React from "react";
import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Benefits } from "./components/sections/Benefits";
import { FaqSection } from "./components/sections/FAQ";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <FaqSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
