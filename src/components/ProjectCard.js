import Icon from "./Icon";

function ProjectCard({ project, delay = 0 }) {
  return (
    <article
      className="project-card fade-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="project-header">
        <div>
          <h2 className="project-name">{project.title}</h2>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>

        {project.live ? (
          <span className="project-status">
            <Icon name="circle-check" className="tiny-icon" />
            Live Demo
          </span>
        ) : null}
      </div>

      <p className="project-description">{project.description}</p>

      <div className="tag-list">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="project-links">
        {project.github ? (
          <a
            className="text-link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" className="small-icon icon-fill" />
            Code
          </a>
        ) : null}

        {project.live ? (
          <a
            className="text-link text-link-accent"
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="external-link" className="small-icon" />
            Live Demo
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default ProjectCard;
