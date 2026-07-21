import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Dhanak Nadeem</h3>

        <p>
          Computer Engineer | Full Stack Developer | Web Developer | Graphic Designer
        </p>

        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/dhanak-nadeem-a508b033b"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/the.digital.engineer"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a href="mailto:dhanaknadeem000@gmail.com">
            Email
          </a>
        </div>

        <p className="copyright">
          © 2026 Dhanak Nadeem. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;