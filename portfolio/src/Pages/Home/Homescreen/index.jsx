// Home.js
import React, { useEffect, useRef } from "react";
import HeroSection from "../HeroSection";
import AboutMe from "../AboutMe";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import { animateSections } from "../Hooks/useScroll"; // adjust path if needed

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
