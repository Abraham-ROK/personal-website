// import React from 'react';
// import { navLinks, footerText } from "../../data/footer_index";

// const Footer = () => {
//   return (
//     <footer>
//       <nav>
//         <div className="nav-links-container">
//           <ul className="nav-links">
//             {navLinks.map((link) => (
//               <li key={link.id}>
//                 <a href={link.href}>{link.text}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>
//       <p>{footerText}</p>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { navLinks, footerText } from "../../data/footer_index";

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <p>{footerText}</p>
    </footer>
  );
};

export default Footer;
