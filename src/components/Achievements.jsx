import "../styles/Achievements.css";
import { motion } from "framer-motion";

function Achievements() {
  const achievements = [
    {
      number: "12+",
      title: "Projects",
      description: "Completed Successfully",
    },
    {
      number: "8+",
      title: "Certificates",
      description: "Professional Certifications",
    },
    {
      number: "2",
      title: "Internships",
      description: "Industry Experience",
    },
    {
      number: "16+",
      title: "Technologies",
      description: "Hands-on Experience",
    },
  ];

  return (
    <section className="achievements">
      <div className="achievement-container">
        {achievements.map((item, index) => (
          <motion.div
            className="achievement-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2>{item.number}</h2>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;