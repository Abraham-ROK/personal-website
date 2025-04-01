import { useState, useEffect } from "react";

export const useNavbarFunctions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);
  const [isLogoSticky, setIsLogoSticky] = useState(false); // Keep track of sticky logo state

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("theme");
    root.setAttribute("theme", currentTheme === "dark-mode" ? "" : "dark-mode");
  };

  useEffect(() => {
    const handleScroll = () => {
      const desktopNav = document.getElementById("desktop-nav");
      const navHeight = desktopNav ? desktopNav.offsetHeight : 0;

      // Update hamburger menu visibility based on scroll position
      if (window.innerWidth >= 1024) {
        setShowHamburger(window.scrollY > navHeight);
      } else {
        setShowHamburger(true);
      }

      // Make the logo sticky if we scroll past the navbar
      setIsLogoSticky(window.scrollY > navHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return { isMenuOpen, showHamburger, isLogoSticky, toggleMenu, closeMenu, toggleDarkMode };
};
