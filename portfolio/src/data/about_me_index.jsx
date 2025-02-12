// import heroImg from "../assets/img/hero_img.png";
import heroImg from "../assets/img/giphy5.gif";
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
      title: "Education",      description: "Master-level engineering degree from Efrei Paris",
      extra: "",
    },
  ],
  aboutText: `Data Engineer with expertise in Power BI, SQL, and data visualization, 
  I have successfully developed robust ETL pipelines, optimized Azure cloud solutions, 
  and designed interactive dashboards that enhance decision-making. 
  I am passionate about leveraging my technical skills to drive digital transformation and enable sustainable business practices.`,

};
