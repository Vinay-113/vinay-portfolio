import { useEffect } from "react";
import { Link } from "react-router-dom";
import { portfolioLinks, researchInterests } from "../data/siteData";
import Icon from "../components/Icon";

function Home() {
  const profilePhotoUrl = `${import.meta.env.BASE_URL}pfp.jpg`;

  useEffect(() => {
    document.title = "Vinay Patil — ML & AI Enthusiast";
  }, []);

  return (
    <div>
      <section className="hero-section">
        <div className="container hero-content fade-up">
          <div className="hero-copy">
            <p className="eyebrow">Hi, I&apos;m</p>
            <h1 className="hero-title">
              Vinay <span className="gradient-text">Patil</span>
            </h1>
            <p className="hero-subtitle">CS Undergrad at Mahindra University</p>
            <p className="hero-description">
              I&apos;m a 3rd-year CS student passionate about LLMs, NLP, and
              building AI-powered applications. Currently exploring transformer
              architectures, RAG systems, and generative AI.
            </p>

            <div className="hero-actions">
              <Link to="/projects" className="button button-primary">
                View Projects
                <Icon name="arrow-right" className="button-icon" />
              </Link>
              <Link to="/about" className="button button-secondary">
                About Me
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo-frame">
              <div className="hero-photo-core">
                <img
                  src={profilePhotoUrl}
                  alt="Portrait of Vinay Patil"
                  className="hero-photo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-heading fade-up">
            <h2 className="section-title">
              Research <span className="gradient-text">Interests</span>
            </h2>
            <p className="section-description">
              Areas I&apos;m actively exploring and building in.
            </p>
          </div>

          <div className="interest-grid">
            {researchInterests.map((interest, index) => (
              <article
                key={interest.title}
                className="interest-card fade-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="interest-icon">
                  <Icon name={interest.icon} className="feature-icon" />
                </div>
                <span className="interest-title">{interest.title}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="cta-card fade-up">
            <h2 className="section-title centered-title">
              Let&apos;s <span className="gradient-text">connect</span>
            </h2>
            <p className="section-description centered-copy">
              Open to collaborations, research opportunities, and interesting AI
              problems.
            </p>

            <div className="contact-list">
              <a
                href={`mailto:${portfolioLinks.primaryEmail}`}
                className="contact-chip"
              >
                <Icon name="mail" className="small-icon" />
                {portfolioLinks.primaryEmail}
              </a>

              <a
                href={`mailto:${portfolioLinks.academicEmail}`}
                className="contact-chip"
              >
                <Icon name="mail" className="small-icon" />
                {portfolioLinks.academicEmail}
              </a>
            </div>

            <div className="social-row">
              <a
                href={portfolioLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="social-link"
              >
                <Icon name="github" className="social-icon icon-fill" />
              </a>

              <a
                href={portfolioLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-link"
              >
                <Icon name="linkedin" className="social-icon icon-fill" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
