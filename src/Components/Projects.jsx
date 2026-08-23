

import "./Projects.css";
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const miniProjects = [
  {
    url: "https://re-captcha.netlify.app/",
    title: "Re-Captcha",
    description: "Google reCAPTCHA demo using React with form validation and token verification.",
    isGH: false,
  },
  {
    url: "https://birthday-gift-boxes-generator.netlify.app/",
    title: "Whip-Up Gift Box",
    description: "Generates birthday gift ideas with a fun animated UI using JavaScript.",
    isGH: false,
  },
  {
    url: "https://serverless-function-for-send-mail.netlify.app/",
    title: "Email Sender",
    description: "A serverless email sender using Netlify Functions and Nodemailer.",
    isGH: false,
  },
  {
    url: "https://react-for-card-flip.netlify.app/",
    title: "React Card Flip",
    description: "A card flipping game built with React showing animation and state control.",
    isGH: false,
  },
  {
    url: "https://weather-report-using-html.netlify.app/",
    title: "Weather Report",
    description: "Fetches weather data via an API and displays it with simple HTML + JS.",
    isGH: false,
  },
  {
    url: "https://speech-2-text-converter.netlify.app/",
    title: "Speech → Text",
    description: "Speech-to-text converter using the Web Speech API in JavaScript.",
    isGH: false,
  },
  {
    url: "https://anbarasu-number-guessing-game.netlify.app/",
    title: "Number Guessing Game",
    description: "A JavaScript-based game where the user guesses a random number.",
    isGH: false,
  },
  {
    url: "https://qr-code-generator-in-react.netlify.app/",
    title: "QR Code Generator",
    description: "QR code generator app built with React and the qrcode.react library.",
    isGH: false,
  },
];

const fullStackProjects = [
  {
    url: "https://github.com/Anbarasu-A-N/User_Docker",
    title: "User Management — Dockerized",
    description: "Full-stack user management with Spring Boot, React, PostgreSQL, and Docker.",
    isGH: true,
  },
  {
    url: "https://github.com/Anbarasu-A-N/Anbarasu_portfolio_docker",
    title: "Portfolio — Dockerized",
    description: "React portfolio containerised and deployed with Docker and GitHub Actions.",
    isGH: true,
  },
  {
    url: "https://github.com/Anbarasu-A-N/Agriculture_Loan_Portal",
    title: "Agriculture Loan Portal",
    description: "Java + MySQL portal for applying, tracking, and approving agriculture loans.",
    isGH: true,
  },
  {
    url: "https://github.com/Anbarasu-A-N/Travel_Planner_Console_App",
    title: "Travel Planner CLI",
    description: "A Java CLI app to plan trips, add itineraries, and manage travel budgets.",
    isGH: true,
  },
  {
    url: "https://github.com/Anbarasu-A-N/Chatbot",
    title: "Chatbot",
    description: "An AI-powered chatbot using JavaScript and simple NLP logic.",
    isGH: true,
  },
  {
    url: "https://github.com/Anbarasu-A-N/HomeAppliance",
    title: "Home Appliance Management",
    description: "Spring Boot REST API for managing smart home appliances.",
    isGH: true,
  },
];

/* ── GitHub SVG Icon ─────────────────────────── */
function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ width: 48, height: 48, color: "#6c63ff" }}
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

/* ── Single Project Card ─────────────────────── */
function ProjectCard({ project }) {
  return (
    <div className="proj-card" onClick={() => window.open(project.url, "_blank")}>
      {/* Thumbnail */}
      <div className="proj-thumb">
        {project.isGH ? (
          <div className="proj-thumb-gh">
            <GithubIcon />
            <span>GitHub Repository</span>
          </div>
        ) : (
          <iframe
            src={project.url}
            title={project.title}
            className="proj-iframe"
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
            tabIndex="-1"
          />
        )}
        {/* Hover overlay */}
        <div className="proj-thumb-overlay">
          <span className="proj-open-btn">
            {project.isGH ? "View on GitHub ↗" : "Open Live ↗"}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="proj-body">
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-desc">{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="proj-link"
          onClick={(e) => e.stopPropagation()}
        >
          {project.isGH ? "View on GitHub" : "Open Live"} →
        </a>
      </div>
    </div>
  );
}

/* ── Projects Page ───────────────────────────── */
function Projects() {
  const [init, setInit] = useState(false);
  const [activeTab, setActiveTab] = useState("mini");

  /* tsParticles — exactly your original config */
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    particles: {
      number: { value: 300, density: { enable: true, area: 80 } },
      color: { value: "#ffffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 3 } },
      links: {
        enable: true,
        distance: 150,
        color: "#000000",
        opacity: 0,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: { enable: true },
      },
      modes: {
        repulse: { distance: 200, duration: 0.4 },
        push: { quantity: 4 },
      },
    },
    detectRetina: true,
  };

  const list = activeTab === "mini" ? miniProjects : fullStackProjects;

  return (
    <>
      <Navbar />

      <div className="proj-page">
        {/* ── Particles background (your original) ── */}
        {init && (
          <Particles
            id="tsparticles-projects"
            options={particlesOptions}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
        )}

        {/* ── Content ── */}
        <div className="proj-content">
          {/* Section header */}
          <div className="proj-header">
            <h1 className="proj-heading">
              My Project
            </h1>
          </div>

          {/* Tabs */}
          <div className="proj-tabs">
            <button
              className={`proj-tab${activeTab === "mini" ? " active" : ""}`}
              onClick={() => setActiveTab("mini")}
            >
              Mini / Frontend
            </button>
            <button
              className={`proj-tab${activeTab === "fs" ? " active" : ""}`}
              onClick={() => setActiveTab("fs")}
            >
              Full Stack / GitHub
            </button>
          </div>

          {/* Cards grid */}
          <div className="proj-grid">
            {list.map((project, i) => (
              <ProjectCard key={`${project.url}-${i}`} project={project} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Projects;

/*

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
        {}
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

*/