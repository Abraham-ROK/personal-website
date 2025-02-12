import React from "react";
import { navData } from "../../data/navbar_index";
import { useNavbarFunctions } from "../Home/Hooks/useNavigation";

const Navbar = () => {
  const { isMenuOpen, showHamburger, isLogoSticky, toggleMenu, closeMenu, toggleDarkMode } = useNavbarFunctions();

  return (
    <>
      <nav id="desktop-nav">
        <div className={`logo ${isLogoSticky ? "sticky-logo" : ""}`} onClick={toggleDarkMode}>
          {navData.logo}
        </div>
        <div>
          <ul className="nav-links">
            {navData.links.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav" className={showHamburger ? "visible" : ""}>
        <div className="logo" onClick={toggleDarkMode}>
          {navData.logo}
        </div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${isMenuOpen ? "open" : ""}`}>
            <ul>
              {navData.links.map((link) => (
                <li key={link.id}>
                  <a href={link.href} onClick={closeMenu}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
