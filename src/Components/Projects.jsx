


import "./Projects.css";
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect, useState } from "react"; // For init state
import Particles, { initParticlesEngine } from "@tsparticles/react"; // Updated imports
import { loadSlim } from "@tsparticles/slim"; // Slim loader for efficiency

const projects = [
  {
    url: "https://re-captcha.netlify.app/",
    title: "Re-Captcha",
    description: "Google reCAPTCHA demo using React with form validation and token verification."
  },
  {
    url: "https://birthday-gift-boxes-generator.netlify.app/",
    title: "Whip-Up Gift Box",
    description: "Generates birthday gift ideas with a fun animated UI using JavaScript."
  },
  {
    url: "https://serverless-function-for-send-mail.netlify.app/",
    title: "Email",
    description: "A serverless email sender using Netlify Functions and Nodemailer."
  },
  {
    url: "https://react-for-card-flip.netlify.app/",
    title: "React Card Flip",
    description: "A card flipping game built with React showing animation and state control."
  },
  {
    url: "https://weather-report-using-html.netlify.app/",
    title: "Weather Report",
    description: "Fetches weather data via an API and displays it with simple HTML + JS."
  },
  {
    url: "https://speech-2-text-converter.netlify.app/",
    title: "Speech = Text",
    description: "Speech-to-text converter using the Web Speech API in JavaScript."
  },
  {
    url: "https://anbarasu-number-guessing-game.netlify.app/",
    title: "Number Guessing Game",
    description: "A JavaScript-based game where the user guesses a random number."
  },
  {
    url: "https://qr-code-generator-in-react.netlify.app/",
    title: "QR Code Generator",
    description: "QR code generator app built with React and the qrcode.react library."
  },
];

const fullStackProjects = [
  {
    url: "https://github.com/Anbarasu-A-N/User_Docker",
    title: "User Management - Dockerized",
    description: "A full-stack user management app using Spring Boot, React, PostgreSQL, and Docker."
  },
  {
    url: "https://github.com/Anbarasu-A-N/Anbarasu_portfolio_docker",
    title: "Portfolio - Dockerized",
    description: "React portfolio app containerized and deployed with Docker and GitHub Actions."
  },
  {
    url: "https://github.com/Anbarasu-A-N/Agriculture_Loan_Portal",
    title: "Agriculture Loan Portal",
    description: "A Java + MySQL based portal for applying, tracking, and approving agriculture loans."
  },
  {
    url: "https://github.com/Anbarasu-A-N/Travel_Planner_Console_App",
    title: "Travel Planner Console App",
    description: "A Java-based CLI application to plan trips, add itineraries and manage travel budgets."
  },
  {
    url: "https://github.com/Anbarasu-A-N/Chatbot",
    title: "Chatbot",
    description: "An AI-powered chatbot using JavaScript and simple NLP logic."
  },
  {
    url: "https://github.com/Anbarasu-A-N/HomeAppliance",
    title: "Home Appliance Management",
    description: "Spring Boot-based backend for managing smart home appliances with a REST API."
  },
];

function Projects() {
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
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true, // For high-res displays
  };

  const handleProjectClick = (url) => {
    window.open(url, "_blank");
  };

  const handleMouseEnter = (e) => {
    const cardInner = e.currentTarget.closest('.flip-card-inner');
    if (cardInner) cardInner.style.transform = 'rotateY(180deg)';
  };

  const handleMouseLeave = (e) => {
    const cardInner = e.currentTarget.closest('.flip-card-inner');
    if (cardInner) cardInner.style.transform = 'rotateY(0deg)';
  };

  const renderCard = (project, index, isFullStack = false) => (
    <div id="project" key={`${project.url}-${index}`} className="scroll-item flip-card">
      <div className="flip-card-inner" id="project">
        <div className="flip-card-front" id="project" onClick={() => handleProjectClick(project.url)}>
          <div
            className="project-image"
            id="project"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ backgroundColor: isFullStack ? "#636363ff" : "transparent" }}
          >
            {isFullStack ? (
              <p id="project" style={{ color: "#000000ff", fontWeight: "bold" }}>GitHub Project</p>
            ) : (
              <iframe
                src={project.url}
                title={project.title}
                className="project-iframe"
                id="project"
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            )}
          </div>
          <p className="project-title" id="project">{project.title}</p>
        </div>
        <div className="flip-card-back" id="project">
          <div className="project-description" id="project">{project.description}</div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="Project-body" id="project">
        {/* Particles background layer - only render if initialized */}
        {init && (
          <Particles
            id="tsparticles-projects" // Unique ID to avoid conflicts
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
        <h1 className="Project" id="project">Full Stack Projects</h1>
        <div className="scroll-container" id="project">
          <div className="scroll-content" id="project">
            {fullStackProjects.concat(fullStackProjects).map((project, index) =>
              renderCard(project, index, true)
            )}
          </div>
        </div>

        <h1 className="Project" id="project">My Projects</h1>
        <div className="scroll-container" id="project">
          <div className="scroll-content" id="project">
            {projects.concat(projects).map((project, index) =>
              renderCard(project, index, false)
            )}
          </div>
        </div>
      </div>
      <div className="ProjectFooter">
      <Footer />
      </div>
    </>
  );
}

export default Projects;

