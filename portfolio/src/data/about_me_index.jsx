// import heroImg from "../assets/img/1685463660924.gif";
import heroImg from "../assets/img/giphy6.gif";
import experienceIcon from "../assets/img/experience.png";
import educationIcon from "../assets/img/education.png";

// Dark mode 
import experienceIconDark from "../assets/img/experience_dark.png";
import educationIconDark from "../assets/img/education_dark.png";

export const heroData = {
  title: "Want To Know More",
  subtitle: "About Me",
  image: heroImg,
  details: [
    {
      id: "1",
      icon: experienceIcon,
      iconDark: experienceIconDark,
      title: "Experience",
      description: "2+ years",
      extra: "Data Engineer",
    },
    {
      id: "2",
      icon: educationIcon,
      iconDark: educationIconDark,
      title: "Education",
      description: "Master-level engineering degree from Efrei Paris",
      extra: "",
    },
  ],
  // This text will be rendered as a normal paragraph (not a bullet)
  aboutText: "Data Engineer skilled in SQL, Python and Cloud Computing.",
  // And these will be rendered as bullet points
  aboutBullets: [
    "I build ETL pipelines and improve Azure cloud solutions.",
    "I create dashboards that help people make decisions.",
    "I use my technical skills to improve business practices.",
  ],
};
