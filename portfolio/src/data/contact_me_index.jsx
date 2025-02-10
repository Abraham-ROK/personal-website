import linkedinIcon from "../assets/img/linkedin.png";
import emalIcon from "../assets/img/email.png";

export const contactData = {
  sectionTitle: "Get in Touch",
  mainTitle: "Contact Me",
  contactInfo: [
    {
      id: 1,
      iconSrc: emalIcon, // Keep the actual imported image here
      iconAlt: "Email icon",
      link: "mailto:examplemail@gmail.com",
      linkText: "Example@gmail.com",
      iconClass: "email-icon", // Add a class for email
    },
    {
      id: 2,
      iconSrc: linkedinIcon,
      iconAlt: "LinkedIn icon",
      link: "https://www.linkedin.com",
      linkText: "LinkedIn",
      iconClass: "", // No special class for LinkedIn
    },
  ],
};
