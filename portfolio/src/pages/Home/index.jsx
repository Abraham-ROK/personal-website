// Home.js
import React, { useEffect, useRef } from "react";
import HeroSection from "../components/sections/HeroSection";
import AboutMe from "../components/sections/AboutMe";
import MySkills from "../components/sections/MySkills";
import MyPortfolio from "../components/sections/MyPortfolio";
import ContactMe from "../components/sections/ContactMe";
import Footer from "../components/layout/Footer";
import { animateSections } from "../hooks/useScroll"; // adjust path if needed

export default function Home() {
  const homeRef = useRef(null);

  useEffect(() => {
    // Call the imported animation function and capture the cleanup callback
    const revertAnimation = animateSections(homeRef);
    return () => revertAnimation();
  }, []);

  return (
    <main ref={homeRef}>
      <div className="scroll-section">
        <HeroSection />
      </div>
      <div className="scroll-section">
        <AboutMe />
      </div>
      <div className="scroll-section">
        <MySkills />
      </div>
      <div className="scroll-section">
        <MyPortfolio />
      </div>
      <div className="scroll-section">
        <ContactMe />
      </div>
      <Footer />
    </main>
  );
}
