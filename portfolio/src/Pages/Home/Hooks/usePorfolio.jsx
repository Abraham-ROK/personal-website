// projectFunctions.js
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const useProjectFunctions = () => {
  const [isPaused, setIsPaused] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    AOS.init();
    const container = projectsRef.current;
    if (container) {
      container.innerHTML += container.innerHTML; // Duplicate for seamless scrolling
    }
  }, []);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return { isPaused, projectsRef, handleMouseEnter, handleMouseLeave };
};
