import "../styles/Experience.css";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaLaptopCode } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      company: "CodeAlpha",
      role: "Full Stack Developer Intern",
      duration: "2026",
      mode: "Remote Internship",
      technologies: "React, Node.js, Express.js, MongoDB",
      responsibilities: [
        "Developed responsive full stack web applications.",
        "Built RESTful APIs and integrated MongoDB databases.",
        "Worked on frontend and backend development.",
        "Improved application performance and user experience.",
      ],
    },
    {
      company: "DeveloperHub Corporation",
      role: "Software Developer Intern",
      duration: "2025",
      mode: "Remote Internship",
      technologies: "HTML, CSS, JavaScript, React, Node.js",
      responsibilities: [
        "Developed modern software and web applications.",
        "Designed responsive user interfaces.",
        "Collaborated on frontend and backend projects.",
        "Followed industry coding standards and best practices.",
      ],
    },
    {
      company: "DeveloperHub Corporation",
      role: "Web Developer Intern",
      duration: "2025",
      mode: "Remote Internship",
      technologies: "HTML, CSS, JavaScript, React, Node.js",
      responsibilities: [
        "Developed modern  web applications.",
        "Designed responsive user interfaces.",
        "Followed industry coding standards and best practices.",
      ],
    },
  ];

  return (
    <section className="experience" id="experience">
      <h2>Professional Experience</h2>

      <p className="experience-subtitle">
        My internships and professional experience in software and web development.
      </p>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <motion.div
            className="experience-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{exp.company}</h3>

            <h4>
              <FaBriefcase /> {exp.role}
            </h4>

            <p>
              <FaCalendarAlt /> {exp.duration} • {exp.mode}
            </p>

            <p>
              <FaLaptopCode /> <strong>Tech Stack:</strong> {exp.technologies}
            </p>

            <ul>
              {exp.responsibilities.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;