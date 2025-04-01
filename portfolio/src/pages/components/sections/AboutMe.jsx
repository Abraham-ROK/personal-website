import { heroData } from "../../../data/about_me_index";
import { useDarkMode } from "../../hooks/useDarkMode";

export default function HeroSection() {
  const darkMode = useDarkMode();
  return (
    <section id="about">
      <p className="section__text__p1">{heroData.title}</p>
      <h1 className="title">{heroData.subtitle}</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={heroData.image}
            alt="Profile portrait"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            {heroData.details.map((detail) => (
              <div key={detail.id} className="details-container">
                <img
                  src={darkMode ? detail.iconDark : detail.icon}
                  alt={`${detail.title} icon`}
                  className="icon"
                />
                <h3>{detail.title}</h3>
                <p>
                  {detail.description} <br /> {detail.extra}
                </p>
              </div>
            ))}
          </div>
          <div className="text-container">
            {/* Render the introductory text as a paragraph */}
            <p>{heroData.aboutText}</p>
            {/* Render the additional points as a bullet list */}
            <ul>
              {heroData.aboutBullets.map((bullet, index) => (
                <li 
                key={index} 
                style={{ fontWeight: 'bold',
                  textIndent: '2em', // This indents the content (including bullet if inside)
                  listStylePosition: 'inside' // Moves the bullet inside the element's content flow
                }}
                >
                  {bullet}
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
