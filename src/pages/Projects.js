import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/siteData";

function Projects() {
  useEffect(() => {
    document.title = "Projects — Vinay Patil";
  }, []);

  return (
    <section className="page-section">
      <div className="container">
        <header className="page-header fade-up">
          <h1 className="page-title">
            <span className="gradient-text">Projects</span>
          </h1>
          <p className="page-description">
            A selection of things I&apos;ve built, from RAG chatbots to ML
            pipelines and agentic AI systems.
          </p>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
