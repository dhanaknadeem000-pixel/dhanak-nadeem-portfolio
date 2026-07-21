import "../styles/Services.css";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCode,
  FaServer,
  FaPalette,
  FaWordpress,
  FaDesktop,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Full Stack Development",
      description:
        "Building complete web applications using React, Node.js, Express.js, and MongoDB.",
    },
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description:
        "Creating responsive, modern, and user-friendly interfaces using HTML, CSS, JavaScript, and React.",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description:
        "Developing secure REST APIs, server-side applications, and database integration.",
    },
    {
      icon: <FaPalette />,
      title: "Graphic Design",
      description:
        "Designing creative social media posts, banners, presentations, and branding materials.",
    },
    {
      icon: <FaWordpress />,
      title: "WordPress Development",
      description:
        "Building and customizing professional WordPress websites for businesses and portfolios.",
    },
    {
      icon: <FaDesktop />,
      title: "Software Development",
      description:
        "Developing desktop applications and solving real-world problems using Java, Python, C++, and C#.",
    },
  ];

  return (
    <section className="services" id="services">
      <h2>My Services</h2>

      <p className="services-subtitle">
        I provide high-quality software and web development services with a
        focus on performance, scalability, and user experience.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;