import linkedinIcon from "../assets/img/icons/social/linkedin.png";
import emalIcon from "../assets/img/icons/social/email.png";

// Dark mode 
import linkedinIconDark from "../assets/img/icons/social/linkedin_dark.png";
import emalIconDark from "../assets/img/icons/social/email_dark.png";


export const contactData = {
  sectionTitle: "Want to get in Touch? I’d love to hear from you.",
  mainTitle: "Contact Me",
  contactInfo: [
    {
      id: 1,
      iconSrc: emalIcon, // Keep the actual imported image here
      iconSrcDark: emalIconDark,
      iconAlt: "Email icon",
      link: "mailto:abraham.kenneth@outlook.fr",
      linkText: "Let's Talk",
      iconClass: "email-icon", // Add a class for email
    },
    {
      id: 2,
      iconSrc: linkedinIcon,
      iconSrcDark: linkedinIconDark,
      iconAlt: "LinkedIn icon",
      link: "https://www.linkedin.com/in/r-abraham",
      linkText: "LinkedIn",
      iconClass: "icon", // No special class for LinkedIn
    },
  ],
};
