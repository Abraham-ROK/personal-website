import React from "react";
import { profileData } from "../../../data/hero_section_index";
import { useDarkMode } from "../../hooks/useDarkMode"; // adjust the path as needed

const HeroSection = () => {
  const darkMode = useDarkMode();

  return (
    <section id={profileData.id}>
      <div className="hero_section__pic-container">
        <img
          src={profileData.image}
          alt={`${profileData.altText} profile`}
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">{profileData.greeting}</p>
        <h1 className="title">{profileData.name}</h1>
        <p className="section__text__p2">{profileData.title}</p>
        <div className="location">
          <img
            // Use dark mode image if dark mode is enabled, otherwise use the light version
            src={
              darkMode
                ? profileData.location_imageDark
                : profileData.location_image
            }
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
            onClick={() =>
              (window.location.href = profileData.contactLink)
            }
          >
            Contact Me
          </button>
        </div>
        <div id="socials-container">
          {profileData.socials.map((social) => (
            <img
              key={social.id}
              // Use dark mode icon if dark mode is active; otherwise use the default icon
              src={darkMode ? social.iconDark : social.icon}
              alt={social.altText}
              className="icon"
              onClick={() => (window.location.href = social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
