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
  aboutText: "Data Engineer with expertise in Power BI, SQL, and data visualization.",
  // And these will be rendered as bullet points
  aboutBullets: [
    "Successfully developed robust ETL pipelines and optimized Azure cloud solutions.",
    "Designed interactive dashboards that enhance decision-making.",
    "Passionate about leveraging technical skills to drive digital transformation and enable sustainable business practices.",
  ],
};
