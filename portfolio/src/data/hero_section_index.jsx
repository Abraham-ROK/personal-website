import profilePic from "../assets/img/giphy_work.gif";
import resumePDF from "../assets/img/resume-example.pdf";
import linkedinIcon from "../assets/img/linkedin.png";
import githubIcon from "../assets/img/github.png";
import locationImage from "../assets/img/location.png";

// Dark mode
import linkedinIconDark from "../assets/img/linkedin_dark.png";
import githubIconDark from "../assets/img/github_dark.png";
import locationImageDark from "../assets/img/location_dark.png";

export const profileData = {
  id: "profile",
  image: profilePic,
  altText: "A-K",
  greeting: "Hello, I'm",
  name: "Abraham",
  title: "Data Engineer",
  location: "Paris, Île-de-France",
  location_image: locationImage,
  location_imageDark: locationImageDark,
  resume: resumePDF,
  contactLink: "./personal-website#contact",
  socials: [
    {
      id: "linkedin",
      icon: linkedinIcon,
      iconDark: linkedinIconDark,
      altText: "LinkedIn profile",
      link: "https://www.linkedin.com/in/r-abraham",
    },
    {
      id: "github",
      icon: githubIcon,
      iconDark: githubIconDark,
      altText: "GitHub profile",
      link: "https://github.com/Abraham-ROK",
    },
  ],
};
