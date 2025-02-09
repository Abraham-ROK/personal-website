import { heroData } from "../../data/about_me_index";

export default function HeroSection() {
  return (
    <section id="about">
      <p className="section__text__p1">{heroData.title}</p>
      <h1 className="title">{heroData.subtitle}</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={heroData.image} alt="Profile portrait" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            {heroData.details.map((detail) => (
              <div key={detail.id} className="details-container">
                <img src={detail.icon} alt={`${detail.title} icon`} className="icon" />
                <h3>{detail.title}</h3>
                <p>
                  {detail.description} <br /> {detail.extra}
                </p>
              </div>
            ))}
          </div>
          <div className="text-container">
            <p>{heroData.aboutText}</p>
          </div>
        </div>
      </div>

    </section>
  );
}
