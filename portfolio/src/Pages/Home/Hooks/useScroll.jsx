// animateSections.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateSections(homeRef) {
  const ctx = gsap.context(() => {
    const sections = gsap.utils.toArray(".scroll-section");
    sections.forEach((section) => animateSection(section));
  }, homeRef);
  return () => ctx.revert();
}

const animateSection = (section) =>
  gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top center",
      end: "bottom center",
      scrub: true,
      // markers: true, // Uncomment for debugging
    },
  })
    // Animate from a trapezoidal clip (peel effect), with 3D tilt and shadow
    .fromTo(
      section,
      {
        opacity: 0,
        clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)", // Start with a "folded" bottom edge
        rotationX: 10,        // Slight tilt for a 3D effect
        scale: 0.95,
        y: 50,
        filter: "drop-shadow(0px 20px 30px rgba(0,0,0,0.3))",
        transformOrigin: "50% 50%",
      },
      {
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Animate to a full rectangle
        rotationX: 0,
        scale: 1,
        y: 0,
        filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))",
        ease: "power3.out",
      }
    )
    // Subtle overshoot for extra dynamism
    .to(
      section,
      {
        scale: 1.02,
        ease: "power3.inOut",
      },
      "<0.2"
    )
    // Settle back to normal
    .to(
      section,
      {
        scale: 1,
        ease: "power3.inOut",
      },
      ">0.3"
    );
