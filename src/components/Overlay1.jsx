import React from "react";
import "./Overlay.css";
import { motion } from "framer-motion";

const Section = (props) => {
  const { children } = props;
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.3 },
      }}
    >
      {children}
    </motion.section>
  );
};

const Hero = () => {
  return (
    <Section>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi !! my name is <span>Prashantkumar Dudhmal</span>
          </h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 1.5 },
            }}
          >
            I'm a passionate <span>Full Stack Developer</span> creating amazing
            web experiences.
          </motion.p>
        </div>
      </section>
    </Section>
  );
};

const About = () => {
  return (
    <Section>
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I’m a dedicated and skilled Computer Science student passionate about
          innovation. I have experience in programming, 3D modeling, and web
          development, with a proven track record of collaborating in teams and
          delivering high-quality projects. I’m eager to contribute to
          cutting-edge technologies and take on exciting challenges.
        </p>
      </section>
    </Section>
  );
};

const Skills = () => {
  return (
    <Section>
      <section id="skills" className="skills">
        <h2>TechBubbles</h2>
      </section>
    </Section>
  );
};
const Projects = () => {
  return (
    <Section>
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Non-Invasive Glcometer</h3>
            <p>
              Developed a user-friendly device that accurately predicts blood
              sugar levels without the need for painful finger pricks. Our
              machine learning model, trained on extensive NIR spectroscopy
              data, delivers reliable results with 86% accuracy, empowering
              individuals with diabetes to better manage their condition.
            </p>
            <p>
              Winner of National level event Bio Med Bharat 2024- Runner up
              position
            </p>
          </div>
          <div className="project-card">
            <h3>Daily Digest</h3>
            <p>
              Abackend API for a news subscription service utilizing the Open
              News API. Implements user authentication with JWT, input
              validation, and protected routes for adding, fetching, and
              deleting bookmarked news articles. Includes routes for user
              registration, login, email verification, and user detail
              retrieval.
            </p>
          </div>
          <div className="project-card">
            <h3>V-KIT</h3>
            <p>
              Virtual College is an innovative project that creates a game-like
              virtual replica of our college campus to help distant students
              explore the facilities and infrastructure remotely. Developed
              using Blender for 3D modeling and Unity for interactive
              functionalities, the platform offers an immersive experience with
              features like guided virtual tours, interactive navigation, and
              information hotspots.
            </p>
          </div>
        </div>
      </section>
    </Section>
  );
};

const Overlay = () => {
  return (
    <>
      {/*<nav className="navbarr">
        <h3>Welcome to My site</h3>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>O</li>
        </ul>
      </nav>*/}
      <div className="overlay">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />
        {/* Skills Section */}
        <Skills />
        {/* Projects Section */}
        <Projects />
        {/* Contact Section */}
        <section id="contact" className="contact">
          <h2>Contact Me</h2>
          <p>Feel free to reach out to discuss projects or collaborations.</p>
          <a href="mailto:jane.doe@example.com" className="btn primary-btn">
            Email Me
          </a>
        </section>
      </div>
    </>
  );
};

export default Overlay;
