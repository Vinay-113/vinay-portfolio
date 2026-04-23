import { portfolioLinks } from "../data/siteData";
import Icon from "./Icon";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          Built by{" "}
          <span className="gradient-text footer-highlight">Vinay Patil</span> ·
          2025
        </p>

        <div className="footer-links">
          <a
            href={portfolioLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="footer-link"
          >
            <Icon name="github" className="footer-icon icon-fill" />
          </a>

          <a
            href={portfolioLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="footer-link"
          >
            <Icon name="linkedin" className="footer-icon icon-fill" />
          </a>

          <a
            href={`mailto:${portfolioLinks.primaryEmail}`}
            aria-label="Email"
            className="footer-link"
          >
            <Icon name="mail" className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
