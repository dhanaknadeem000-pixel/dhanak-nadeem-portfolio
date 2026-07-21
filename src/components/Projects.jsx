import "../styles/Projects.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import taskManager from "../assets/projects/task-manager.png";
import restaurant from "../assets/projects/restaurant-management.png";
import urlShortener from "../assets/projects/url-shortener.png";
import jokeWebsite from "../assets/projects/joke-website.png";
import netflix from "../assets/projects/netflix-clone.png";
import translator from "../assets/projects/google-translator.png";
import calculator from "../assets/projects/calculator.png";
import pacman from "../assets/projects/pacman-game.png";
import snake from "../assets/projects/snake-game.png";
import bank from "../assets/projects/bank-management.png";
import ecat from "../assets/projects/ecat-app.png";
import street from "../assets/projects/automatic-street-lights.png";

function Projects() {
  const projects = [
    {
      title: "Task Manager",
      image: taskManager,
      description:
        "A full stack task management application built with React, Node.js, Express.js, and MongoDB.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "",
      github2: "",
    },

    {
      title: "Restaurant Management System",
      image: restaurant,
      description:
        "A restaurant management application for menu and order management using Node.js and MongoDB.",
      tech: ["React", "Node.js", "MongoDB"],
      github:
        "https://github.com/dhanaknadeem000-pixel/Restaurant-Management-System-Frontend",
      github2:
        "https://github.com/dhanaknadeem000-pixel/Restaurant-Management-System",
    },

    {
      title: "URL Shortener",
      image: urlShortener,
      description:
        "A URL shortening application developed with Node.js and SQLite.",
      tech: ["Node.js", "SQLite"],
      github:
        "https://github.com/dhanaknadeem000-pixel/CodeAlpha_SimpleURLShortener",
      github2: "",
    },

    {
      title: "Netflix Clone",
      image: netflix,
      description:
        "A responsive Netflix-inspired website with a modern user interface.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      github: "",
      github2: "",
    },

    {
      title: "Joke Website",
      image: jokeWebsite,
      description:
        "A fun web application that displays random jokes using a public API.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "",
      github2: "",
    },

    {
      title: "Pacman Game",
      image: pacman,
      description:
        "A classic Pacman game developed using Java with object-oriented programming concepts.",
      tech: ["Java"],
      github: "",
      github2: "",
    },

    {
      title: "Snake Game",
      image: snake,
      description: "A classic Snake game developed using Java.",
      tech: ["Java"],
      github: "",
      github2: "",
    },

    {
      title: "Bank Management System",
      image: bank,
      description:
        "A banking application built in Java featuring account management and transaction functionality.",
      tech: ["Java"],
      github: "",
      github2: "",
    },

    {
      title: "Calculator",
      image: calculator,
      description:
        "A responsive calculator application built using HTML, CSS, and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "",
      github2: "",
    },

    {
      title: "ECAT Exam Preparation App",
      image: ecat,
      description:
        "An educational application designed to help students prepare for the ECAT examination.",
      tech: ["SQL", "Power BI"],
      github: "",
      github2: "",
    },

    {
      title: "Google Translator",
      image: translator,
      description:
        "A language translation application inspired by Google Translate.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "",
      github2: "",
    },

    {
      title: "Automatic Street Lights",
      image: street,
      description:
        "A hardware-based automation project that controls street lights automatically based on surrounding light conditions.",
      tech: ["Arduino", "Sensors"],
      github: "",
      github2: "",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>

      <p className="project-subtitle">
        A collection of software, web development, and academic projects that
        demonstrate my technical skills and problem-solving abilities.
      </p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}

                {project.github2 && (
                  <a
                    href={project.github2}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub /> Backend
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;