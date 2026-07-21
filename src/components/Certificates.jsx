import "../styles/Certificates.css";
import { motion } from "framer-motion";

import pythonCertificate from "../assets/certificates/python-programming.png";
import javascriptCertificate from "../assets/certificates/javascript-programming.png";
import htmlCertificate from "../assets/certificates/html.png";
import cssCertificate from "../assets/certificates/css.png";
import successMindset from "../assets/certificates/success-mindset.png";
import dataScience from "../assets/certificates/data-science.png";
import artificialIntelligence from "../assets/certificates/artificial-intelligence.png";
import codealphaOffer from "../assets/certificates/codealpha-offer-letter.png";
import softwareDeveloper from "../assets/certificates/software developer.png";

function Certificates() {
  const certificates = [
    {
      title: "Python Programming",
      issuer: "Programming Certification",
      image: pythonCertificate,
      category: "Programming",
    },

    {
      title: "JavaScript Programming",
      issuer: "Programming Certification",
      image: javascriptCertificate,
      category: "Programming",
    },

    {
      title: "HTML Certification",
      issuer: "Web Development",
      image: htmlCertificate,
      category: "Web Development",
    },

    {
      title: "CSS Certification",
      issuer: "Web Development",
      image: cssCertificate,
      category: "Web Development",
    },

    {
      title: "Success Mindset",
      issuer: "Professional Development",
      image: successMindset,
      category: "Professional Development",
    },

    {
      title: "Data Science",
      issuer: "Data Science Certification",
      image: dataScience,
      category: "Technology",
    },

    {
      title: "Artificial Intelligence",
      issuer: "AI Certification",
      image: artificialIntelligence,
      category: "Technology",
    },

    {
      title: "Backend Development Intern — Offer Letter",
      issuer: "CodeAlpha",
      image: codealphaOffer,
      category: "Internship",
    },

    {
      title: "Software Development Intern",
      issuer: "DevelopersHub Corporation",
      image: softwareDeveloper,
      category: "Internship",
    },
  ];

  return (
    <section className="certificates" id="certificates">
      <h2>Certificates & Achievements</h2>

      <p className="certificates-subtitle">
        Certifications and professional achievements that reflect my continuous
        learning and technical development.
      </p>

      <div className="certificate-grid">
        {certificates.map((certificate, index) => (
          <motion.div
            className="certificate-card"
            key={certificate.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="certificate-content">
              <span className="certificate-category">
                {certificate.category}
              </span>

              <h3>{certificate.title}</h3>

              <p>{certificate.issuer}</p>

              <a
                href={certificate.image}
                target="_blank"
                rel="noreferrer"
                className="view-certificate"
              >
                View Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;