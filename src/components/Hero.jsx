import "../styles/Hero.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Left Side */}
      <div className="hero-content">

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          👋 Hello, I'm
        </motion.h3>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Dhanak Nadeem
        </motion.h1>

        <h2 className="typing-text">
          <Typewriter
            words={[
              "Computer Engineering Student",
              "Full Stack Developer",
              "Frontend Developer",
              "Backend Developer",
              "Graphic Designer",
              "Software Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I am Dhanak Nadeem, a passionate Computer Engineering student at
          the University of Engineering and Technology (UET), Lahore. I
          specialize in Full Stack Development, Web Development, Frontend &
          Backend Development, Software Development, and Graphic Design. I
          enjoy transforming ideas into modern, responsive, and scalable
          digital solutions while continuously learning new technologies and
          enhancing my problem-solving skills.
        </motion.p>

        <div className="hero-buttons">
          <a href="#contact" className="btn">
            Hire Me
          </a>

          <a href="/resume.pdf" className="btn-outline" download>
            Download Resume
          </a>
        </div>

        <div className="social-icons">
          <a
            href="https://linkedin.com/in/dhanka-nadeem/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/dhanaknaddem000-pixel"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://instagram.com/dhank000"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Right Side */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="circle">
          DN
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;