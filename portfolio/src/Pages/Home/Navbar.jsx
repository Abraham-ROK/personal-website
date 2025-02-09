import { navData } from "../../data/navbar_index"; 

import { useState, useEffect } from "react";
import { Link } from "react-scroll";


export default function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      {/* Logo */}
      {/* <div className="logo">{navData.logo}</div> */}

      {/* Hamburger Menu */}
      <button
        type="button"
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </button>

      {/* Navigation Links */}
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          {navData.links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar--content"
                activeClass="navbar--active-content"
                onClick={closeMenu}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Button */}
      <Link
        to={navData.contact.id}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="btn btn-outline-primary"
        onClick={closeMenu}
      >
        {navData.contact.text}
      </Link>
    </nav>
  );
}


