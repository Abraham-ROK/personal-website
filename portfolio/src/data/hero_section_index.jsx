import profilePic from "../assets/img/giphy_work.gif";
import resumePDF from "../assets/img/resume-example.pdf";
import linkedinIcon from "../assets/img/linkedin.png";
import githubIcon from "../assets/img/github.png";
import locationImage from "../assets/img/location.png";

export const profileData = {
  id: "profile",
  image: profilePic,
  altText: "John Doe",
  greeting: "Hello, I'm",
  name: "John Doe",
  title: "Frontend Developer",
  location: "Île-de-France",
  location_image: locationImage,
  resume: resumePDF,
  contactLink: "./personal-website#contact",
  socials: [
    {
      id: "linkedin",
      icon: linkedinIcon,
      altText: "LinkedIn profile",
      link: "https://linkedin.com/",
    },
    {
      id: "github",
      icon: githubIcon,
      altText: "GitHub profile",
      link: "https://github.com/",
    },
  ],
};
