import { useEffect } from "react";
import Icon from "../components/Icon";
import {
  aboutParagraphs,
  achievements,
  education,
  experience,
  skillGroups
} from "../data/siteData";

function About() {
  useEffect(() => {
    document.title = "About — Vinay Patil";
  }, []);

  return (
    <section className="page-section">
      <div className="container about-layout">
        <div className="fade-up">
          <h1 className="page-title">
            About <span className="gradient-text">Me</span>
          </h1>

          <div className="about-copy">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <section className="content-block">
          <div className="block-heading">
            <div className="block-icon">
              <Icon name="graduation-cap" className="section-icon" />
            </div>
            <h2 className="block-title">Education</h2>
          </div>

          <article className="info-card fade-up">
            <div className="education-header">
              <div>
                <h3 className="card-title">{education.degree}</h3>
                <p className="muted-copy">{education.school}</p>
              </div>
              <p className="accent-copy">{education.timeline}</p>
            </div>

            <div className="coursework-block">
              <p className="coursework-title">
                <Icon name="book-open" className="small-icon accent-inline" />
                Key Coursework
              </p>

              <div className="tag-list">
                {education.coursework.map((course) => (
                  <span key={course} className="tag">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className="content-block">
          <div className="block-heading">
            <h2 className="block-title">Skills</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article
                key={group.title}
                className="skill-card fade-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <h3 className="skill-title gradient-text">{group.title}</h3>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-block">
          <div className="block-heading">
            <div className="block-icon">
              <Icon name="briefcase" className="section-icon" />
            </div>
            <h2 className="block-title">Experience</h2>
          </div>

          <div className="timeline">
            {experience.map((item, index) => (
              <article
                key={`${item.role}-${item.timeline}`}
                className="timeline-item fade-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <span className="timeline-marker" aria-hidden="true" />
                <p className="timeline-date">{item.timeline}</p>
                <h3 className="card-title timeline-role">{item.role}</h3>
                <p className="muted-copy">{item.organization}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-block">
          <div className="block-heading">
            <div className="block-icon">
              <Icon name="award" className="section-icon" />
            </div>
            <h2 className="block-title">Achievements</h2>
          </div>

          <div className="achievement-list">
            {achievements.map((achievement) => (
              <div key={achievement} className="achievement-card fade-up">
                <div className="block-icon achievement-icon">
                  <Icon name="award" className="section-icon" />
                </div>
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
