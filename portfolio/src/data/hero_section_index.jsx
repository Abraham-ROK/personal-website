import profilePic from "../assets/img/profile/giphy_work.gif";
import resumePDF from "../assets/documents/Abraham_Kenneth_DE.pdf";
import linkedinIcon from "../assets/img/icons/social/linkedin.png";
import githubIcon from "../assets/img/icons/social/github.png";
import locationImage from "../assets/img/icons/ui/location.png";

// Dark mode
import linkedinIconDark from "../assets/img/icons/social/linkedin_dark.png";
import githubIconDark from "../assets/img/icons/social/github_dark.png";
import locationImageDark from "../assets/img/icons/ui/location_dark.png";

export const profileData = {
  id: "profile",
  image: profilePic,
  altText: "A-K",
  greeting: "Hello, I am",
  name: "Abraham",
  title: "Data Engineer",
  location: "Paris, Île-de-France",
  location_image: locationImage,
  location_imageDark: locationImageDark,
  resume: resumePDF,
  contactLink: "#contact",
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
