// import { navData } from "../../data/navbar_index"; 

// import { useState, useEffect } from "react";
// import { Link } from "react-scroll";


// export default function Navbar() {
//   const [navActive, setNavActive] = useState(false);

//   const toggleNav = () => {
//     setNavActive(!navActive);
//   };

//   const closeMenu = () => {
//     setNavActive(false);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 500) {
//         closeMenu();
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     if (window.innerWidth <= 1200) {
//       closeMenu();
//     }
//   }, []);

//   return (
//     <nav className={`navbar ${navActive ? "active" : ""}`}>
//       {/* Logo */}
//       {/* <div className="logo">{navData.logo}</div> */}

//       {/* Hamburger Menu */}
//       <button
//         type="button"
//         className={`nav__hamburger ${navActive ? "active" : ""}`}
//         onClick={toggleNav}
//       >
//         <span className="nav__hamburger__line"></span>
//         <span className="nav__hamburger__line"></span>
//         <span className="nav__hamburger__line"></span>
//       </button>

//       {/* Navigation Links */}
//       <div className={`navbar--items ${navActive ? "active" : ""}`}>
//         <ul>
//           {navData.links.map((link) => (
//             <li key={link.id}>
//               <Link
//                 to={link.id}
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 className="navbar--content"
//                 activeClass="navbar--active-content"
//                 onClick={closeMenu}
//               >
//                 {link.text}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Contact Button */}
//       <Link
//         to={navData.contact.id}
//         spy={true}
//         smooth={true}
//         offset={-70}
//         duration={500}
//         className="btn btn-outline-primary"
//         onClick={closeMenu}
//       >
//         {navData.contact.text}
//       </Link>
//     </nav>
//   );
// }






// import React, { useState, useEffect } from 'react';
// import { navData } from "../../data/navbar_index";

// import React, { useState } from 'react';
// import { navData } from '../../data/navbar_index';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(prevState => !prevState);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <>
//       <nav id="desktop-nav">
//         <div className="logo">{navData.logo}</div>
//         <div>
//           <ul className="nav-links">
//             {navData.links.map(link => (
//               <li key={link.id}>
//                 <a href={link.href}>{link.text}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>

//       <nav id="hamburger-nav">
//         <div className="logo">{navData.logo}</div>
//         <div className="hamburger-menu">
//           <div
//             className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}
//             onClick={toggleMenu}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//           <div className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
//             <ul>
//               {navData.links.map(link => (
//                 <li key={link.id}>
//                   <a href={link.href} onClick={closeMenu}>
//                     {link.text}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { navData } from '../../data/navbar_index';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the desktop navbar.
      const desktopNav = document.getElementById('desktop-nav');
      const navHeight = desktopNav ? desktopNav.offsetHeight : 0;
      
      // For big screens (e.g., 1024px and above), show the hamburger menu 
      // once the user scrolls past the navbar's height.
      if (window.innerWidth >= 1024) {
        if (window.scrollY > navHeight) {
          setShowHamburger(true);
        } else {
          setShowHamburger(false);
        }
      } else {
        // On smaller screens, always show the hamburger menu.
        setShowHamburger(true);
      }
    };

    // Run the check immediately.
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Recalculate on resize

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">{navData.logo}</div>
        <div>
          <ul className="nav-links">
            {navData.links.map(link => (
              <li key={link.id}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Always render the hamburger nav but toggle its visibility using the "visible" class */}
      <nav id="hamburger-nav" className={showHamburger ? 'visible' : ''}>
        <div className="logo">{navData.logo}</div>
        <div className="hamburger-menu">
          <div
            className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              {navData.links.map(link => (
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
