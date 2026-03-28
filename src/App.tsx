import React from "react";
import { Header }     from "./components/sections/Header";
import { Hero }       from "./components/sections/Hero";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Benefits }   from "./components/sections/Benefits";
import { FAQ }        from "./components/sections/FAQ";
import { Contact }    from "./components/sections/Contact";
import { Footer }     from "./components/sections/Footer";
import "./globals.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
