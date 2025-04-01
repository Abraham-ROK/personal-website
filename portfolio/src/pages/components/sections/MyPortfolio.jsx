import { portfolioData } from "../../../data/portfolio_index";

const ProjectsGrid = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Want to Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="projects-grid">
        {portfolioData.projects.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="details-container color-container">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
