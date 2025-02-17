import React from 'react';
import { experienceData } from '../../data/skills_index';
import { useDarkMode } from "../Home/Hooks/useDarkMode";

const MySkills = () => {
  const darkMode = useDarkMode();

  return (
    <section id="experience">
      <p className="section__text__p1">Want to Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="experience-details-container">
        {/* Grid wrapper to layout details in two columns */}
        <div className="experience-grid">
          {experienceData.experience.map((group) => (
            <div key={group.id} className="details-container">
              <h2 className="experience-sub-title">{group.title}</h2>
              <div className="article-container">
                {group.skills.map((skill) => (
                  <article key={skill.id}>
                    <img
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
