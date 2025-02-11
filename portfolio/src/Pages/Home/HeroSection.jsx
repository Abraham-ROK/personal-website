import { profileData } from "../../data/hero_section_index";

const HeroSection = () => {
  return (
    <section id={profileData.id}>
      <div className="hero_section__pic-container">
        <img src={profileData.image} alt={`${profileData.altText} profile`} />
      </div>
      <div className="section__text">
        <p className="section__text__p1">{profileData.greeting}</p>
        <h1 className="title">{profileData.name}</h1>
        <p className="section__text__p2">{profileData.title}</p>
        <div className="location">
          <img
            src={profileData.location_image}
            className="icon"
            alt="Location Icon"
          />
          <p className="section__text__p1">{profileData.location}</p>
        </div>

        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open(profileData.resume)}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-2"
            onClick={() => window.location.href = profileData.contactLink}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          {profileData.socials.map((social) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.altText}
              className="icon"
              onClick={() => window.location.href = social.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
