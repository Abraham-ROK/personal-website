import { portfolioData } from "../../data/portfolio_index";
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [isPaused, setIsPaused] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    AOS.init();
    const container = projectsRef.current;
    if (container) {
      container.innerHTML += container.innerHTML; // Duplicate for seamless scrolling
    }
  }, []);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      {/* Outer container */}
      <div
        className="projects-viewport"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Animated scrolling container */}
        <div
          ref={projectsRef}
          className={`projects-container ${isPaused ? "paused" : ""}`}
        >
          {portfolioData.projects.map((project, index) => (
            <div className="details-container color-container" key={index}>
              <div className="article-container">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="project-img"
                />
              </div>
              <h2 className="project-title">{project.title}</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open(project.githubLink, "_blank")}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open(project.demoLink, "_blank")}
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
