import "./About.css"; // Import the CSS file for styling
import Skill from "./Skills";
import { Link } from "react-router-dom";
import ProfilePhoto from "./Images/boy1.png";
import Tools from "./Tools";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react"; // For init state
import Particles, { initParticlesEngine } from "@tsparticles/react"; // Updated imports
import { loadSlim } from "@tsparticles/slim"; // Slim loader for efficiency

function About() {
  const [init, setInit] = useState(false);

  // Initialize the tsParticles engine (runs once)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Loads core + basic presets (including links)
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Particle configuration (customize as needed)
  const particlesOptions = {
    background: {
      color: {
        value: "transparent", // Keeps your CSS background visible
      },
    },
    fpsLimit: 120, // Smooth performance
    particles: {
      number: {
        value: 300, // Number of dots
        density: {
          enable: true,
          area: 80, // Spread density
        },
      },
      color: {
        value: "#ffffffff", // Dark dots for light background (change to "#ffffff" for white)
      },
      shape: {
        type: "circle", // Dots as circles
      },
      opacity: {
        value: 0.5, // Semi-transparent
      },
      size: {
        value: { min: 1, max: 3 }, // Dot size range
      },
      links: {
        enable: true, // Connect dots with lines
        distance: 150, // Max distance for connections
        color: "#000000", // Dark lines (change to "#ffffff" for white)
        opacity: 0, // Line transparency
        width: 1, // Line thickness
      },
      move: {
        enable: true,
        speed: 2, // Slower movement for subtlety
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out", // Particles bounce out of edges
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // Dots move away on hover
        },
        onClick: {
          enable: true,
          mode: "push", // Add more dots on click
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        repulse: {
          distance: 200,
          duration: 0.3,
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true, // For high-res displays
  };

  return (
    <>
      <Navbar />
      <div className="aboutbody">
        {/* Particles background layer - only render if initialized */}
        {init && (
          <Particles
            id="tsparticles-about" // Unique ID to avoid conflicts with other pages
            options={particlesOptions}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1, // Behind content
            }}
          />
        )}
        <div className="aboutcontainer" id="about">
          <div className="leftcontainer" id="about">
            <h1 id="about">About Me</h1>
            <p>Hello, I'm Anbarasu A N!</p>
            <p>
              I'm a <strong>Devops Engineer</strong> and <strong> AWS Certified Solutions Architect</strong> and<br></br>
              a passionate <strong>Full Stack Developer</strong> skilled in developing and deploying scalable web applications.
            </p>
            <p>
              My expertise spans across <strong>AWS Cloud</strong>, <strong>Jenkins</strong>, <strong>Terraform</strong>, <strong>Ansible</strong>,
              <strong> Git</strong>, <strong>Linux</strong>, <strong>Spring Boot</strong>, <strong>Docker</strong>, and <strong>Kubernetes</strong>.
            </p>
            <p>
              I completed <strong>B.Tech in Information Technology</strong> at Sri Krishna College of Engineering and Technology <br></br>
              and I hold a <strong>diploma in Computer Engineering</strong> from Sakthi Polytechnic College
            </p>
            <p>
              I’ve successfully completed multiple projects like a <strong>Home Appliance Service Centre</strong> and an <strong>Agriculture Loan Portal</strong> <br></br>
              both full-stack applications built using Spring Boot and React, secured with JWT-based authentication <br></br>
              and Redux for global frontend state management, and deployed on AWS with high availability and security.
            </p>
            <p>
              I am enthusiastic about <strong>DevOps</strong>, <strong>CI/CD pipelines</strong>, and clean, maintainable code. <br></br>
               I’ve led teams and completed projects ahead of schedule, demonstrating strong leadership and team collaboration skills.
            </p>
          </div>
          <div className="rightcontainer" id="about">
            <div className="rightcontainerimg" id="about">
              <Link to="/About">
                <img src={ProfilePhoto} alt="Profile1" style={{ width: '350px', height: '350px' }} />
                <h3 id="about" >Cloud & DevOps</h3>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <Skill />
          <Tools />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;

/*
*/