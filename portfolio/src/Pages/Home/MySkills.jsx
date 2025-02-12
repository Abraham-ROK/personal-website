import React from 'react';
import { experienceData } from '../../data/skills_index';
import { useDarkMode } from "../Home/Hooks/useDarkMode"; // Adjust the import path as needed



const MySkills = () => {
  const darkMode = useDarkMode();

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {experienceData.experience.map((group) => (
            <div key={group.id} className="details-container">
              <h2 className="experience-sub-title">{group.title}</h2>
              <div className="article-container">
                {group.skills.map((skill) => (
                  <article key={skill.id}>
                    <img
                      // Use iconDark when darkMode is active, otherwise icon
                      src={darkMode ? skill.iconDark : skill.icon}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>{skill.name}</h3>
                      <p>{skill.level}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
