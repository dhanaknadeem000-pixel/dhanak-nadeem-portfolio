import "../styles/About.css";

function About() {
  return (
    <section className="about" id="about">

      <h2>About Me</h2>

      <div className="about-container">

        <div className="about-card">
          <h3>Who Am I?</h3>

          <p>
            I am Dhanak Nadeem, a Computer Engineering student at the University of Engineering and Technology (UET) Lahore (Session 2024–2028). I am passionate about software development, problem-solving, and creating innovative digital solutions. I continuously enhance my knowledge by working on real-world projects and learning modern technologies to become a skilled Software Engineer and Full Stack Developer.
          </p>
        </div>

        <div className="about-card">
          <h3>What I Do</h3>

          <p>
            I develop responsive and user-friendly websites, build full stack web applications, design RESTful APIs, and create efficient backend systems. Along with web development, I also work on Graphic Design and WordPress projects. My goal is to deliver high-quality, scalable, and visually appealing digital solutions that provide an excellent user experience.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;