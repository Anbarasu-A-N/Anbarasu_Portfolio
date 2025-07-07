import "./Projects.css";
import Navbar from './Navbar';
import Footer from './Footer';

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
            style={{ backgroundColor: isFullStack ? "#e0e0e0" : "transparent" }}
          >
            {isFullStack ? (
              <p id="project" style={{ color: "#333", fontWeight: "bold" }}>GitHub Project</p>
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






/*

import "./Projects.css";
import Navbar from './Navbar';
import Footer from './Footer';

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
  const handleProjectClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <div className="Project-body" id="project">
        <h1 className="Project" id="project">Full Stack Projects</h1>
        <div className="scroll-container" id="project">
          <div className="scroll-content" id="project">
            {fullStackProjects.concat(fullStackProjects).map((project, index) => (
              <div id="project" key={`${project.url}-${index}`} className="scroll-item flip-card">
                <div className="flip-card-inner" id="project">
                  <div className="flip-card-front" id="project"onClick={() => handleProjectClick(project.url)}>
                    <div className="project-image" id="project"style={{ backgroundColor: "#e0e0e0" }}>
                      <p id="project"style={{ color: "#333", fontWeight: "bold" }}>GitHub Project</p>
                    </div>
                    <p className="project-title" id="project">{project.title}</p>
                  </div>
                  <div className="flip-card-back" id="project">
                    <div className="project-description" id="project">{project.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h1 className="Project" id="project">My Projects</h1>
        <div className="scroll-container" id="project">
          <div className="scroll-content" id="project">
            {projects.concat(projects).map((project, index) => (
              <div id="project" key={`${project.url}-${index}`} className="scroll-item flip-card">
                <div id="project" className="flip-card-inner">
                  <div id="project" className="flip-card-front" onClick={() => handleProjectClick(project.url)}>
                    <div
                      className="project-image"
                      id="project"
                      >
                      <iframe
                        src={project.url}
                        title={project.title}
                        className="project-iframe"
                        id="project"
                        sandbox="allow-scripts allow-same-origin"
                      ></iframe>
                    </div>
                    <p id="project" className="project-title">{project.title}</p>
                  </div>
                  <div className="flip-card-back" id="project">
                    <div className="project-description" id="project">{project.description}</div>
                  </div>
                </div>
              </div>
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

const projects = [
  { url: "https://re-captcha.netlify.app/", title: "Re-Captcha" },
  { url: "https://birthday-gift-boxes-generator.netlify.app/", title: "Whip-Up Gift Box" },
  { url: "https://serverless-function-for-send-mail.netlify.app/", title: "Email" },
  { url: "https://react-for-card-flip.netlify.app/", title: "React Card Flip" },
  { url: "https://weather-report-using-html.netlify.app/", title: "Weather Report" },
  { url: "https://speech-2-text-converter.netlify.app/", title: "Speech = Text" },
  { url: "https://anbarasu-number-guessing-game.netlify.app/", title: "Number Guessing Game" },
  { url: "https://qr-code-generator-in-react.netlify.app/", title: "QR Code Generator" },
];

const fullStackProjects = [
  { url: "https://github.com/Anbarasu-A-N/User_Docker", title: "User Management - Dockerized" },
  { url: "https://github.com/Anbarasu-A-N/Anbarasu_portfolio_docker", title: "Portfolio - Dockerized" },
  { url: "https://github.com/Anbarasu-A-N/Agriculture_Loan_Portal", title: "Agriculture Loan Portal" },
  { url: "https://github.com/Anbarasu-A-N/Travel_Planner_Console_App", title: "Travel Planner Console App" },
  { url: "https://github.com/Anbarasu-A-N/Chatbot", title: "Chatbot" },
  { url: "https://github.com/Anbarasu-A-N/HomeAppliance", title: "Home Appliance Management" },
];

function Projects() {
  const handleProjectClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <div className="Project-body" id="project">
        <h1 className="Project">Full Stack Projects</h1>
        <div className="scroll-container">
          <div className="scroll-content">
            {fullStackProjects.concat(fullStackProjects).map((project, index) => (
              <div
                key={`${project.url}-${index}`}
                className="scroll-item"
                onClick={() => handleProjectClick(project.url)}
              >
                <div className="project-image" style={{ backgroundColor: "#e0e0e0" }}>
                  <p style={{ color: "#333", fontWeight: "bold", textAlign: "center" }}>GitHub Project</p>
                </div>
                <p className="project-title">{project.title}</p>
              </div>
            ))}
          </div>
        </div>

        <h1 className="Project">My Projects</h1>
        <div className="scroll-container">
          <div className="scroll-content">
            {projects.concat(projects).map((project, index) => (
              <div
                key={`${project.url}-${index}`}
                className="scroll-item"
                onClick={() => handleProjectClick(project.url)}
              >
                
                <div className="iframe-container">
                  <iframe
                    src={project.url}
                    title={project.title}
                    className="project-iframe"
                    sandbox="allow-scripts allow-same-origin"
                  ></iframe>
                </div>
                <p className="project-title">{project.title}</p>
              </div>
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

// fetch project
import "./Projects.css";
import Navbar from './Navbar';
import Footer from './Footer';

const projects = [
  { url: "https://re-captcha.netlify.app/", title: "Re-Captcha" },
  { url: "https://birthday-gift-boxes-generator.netlify.app/", title: "Whip-Up Gift Box" },
  { url: "https://serverless-function-for-send-mail.netlify.app/", title: "Email" },
  { url: "https://react-for-card-flip.netlify.app/", title: "React Card Flip" },
  { url: "https://weather-report-using-html.netlify.app/", title: "Weather Report" },
  { url: "https://speech-2-text-converter.netlify.app/", title: "Speech = Text" },
  { url: "https://anbarasu-number-guessing-game.netlify.app/", title: "Number Guessing Game" },
  { url: "https://qr-code-generator-in-react.netlify.app/", title: "QR Code Generator" },
];

const fullStackProjects = [
  { url: "https://github.com/Anbarasu-A-N/User_Docker", title: "User Management - Dockerized" },
  { url: "https://github.com/Anbarasu-A-N/Anbarasu_portfolio_docker", title: "Portfolio - Dockerized" },
  { url: "https://github.com/Anbarasu-A-N/Agriculture_Loan_Portal", title: "Agriculture Loan Portal" },
  { url: "https://github.com/Anbarasu-A-N/Travel_Planner_Console_App", title: "Travel Planner Console App" },
  { url: "https://github.com/Anbarasu-A-N/Chatbot", title: "Chatbot" },
  { url: "https://github.com/Anbarasu-A-N/HomeAppliance", title: "Home Appliance Management" },
];


function Projects() {
  const handleProjectClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
    <Navbar/>
    <div className="Project-body" id="project">
      <h1 className="Project" id="project" >Full Stack Projects</h1>
        <div className="scroll-container">
          <div className="scroll-content">
            {fullStackProjects.concat(fullStackProjects).map((project, index) => (
              <div
                key={`${project.url}-${index}`}
                className="scroll-item"
                onClick={() => handleProjectClick(project.url)}
              >
                <div className="project-image" id="project"  style={{ backgroundColor: "#e0e0e0" }}>
                  <p style={{ color: "#333", fontWeight: "bold", textAlign: "center" }}>GitHub Project</p>
                </div>
                <p className="project-title" id="project" >{project.title}</p>
              </div>
            ))}
          </div>
        </div>
        
      <h1 className="Project" id="project" style={{ marginTop: 0, padding: 10 }}>My Projects</h1>
      <ul id="project" className="project-list">
        {projects.map(project => (
          <li id="project" key={project.url} onClick={() => handleProjectClick(project.url)}>
            <p id="project">{project.title}</p>
            <div
              className="project-image"
              id="project"
              style={{ backgroundImage: `url(${project.url}/screenshot.png)` }}
            ></div>
            <div id="project" className="iframe-container">
              <iframe
                id="project"
                src={project.url}
                title={project.title}
                className="project-iframe"
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
    <Footer/>
    </>
  );
}

export default Projects;





/*


// fetch project
import "./Projects.css";
import Navbar from './Navbar';
import Footer from './Footer';

const projects = [
  { url: "https://re-captcha.netlify.app/", title: "Re-Captcha" },
  { url: "https://birthday-gift-boxes-generator.netlify.app/", title: "Whip-Up Gift Box" },
  { url: "https://serverless-function-for-send-mail.netlify.app/", title: "Email" },
  { url: "https://react-for-card-flip.netlify.app/", title: "React Card Flip" },
  { url: "https://weather-report-using-html.netlify.app/", title: "Weather Report" },
  { url: "https://speech-2-text-converter.netlify.app/", title: "Speech = Text" },
  { url: "https://anbarasu-number-guessing-game.netlify.app/", title: "Number Guessing Game" },
  { url: "https://qr-code-generator-in-react.netlify.app/", title: "QR Code Generator" },
];

const fullStackProjects = [
  { url: "https://github.com/Anbarasu-A-N/User_Docker", title: "User Management - Dockerized" },
  { url: "https://github.com/Anbarasu-A-N/Anbarasu_portfolio_docker", title: "Portfolio - Dockerized" },
  { url: "https://github.com/Anbarasu-A-N/Agriculture_Loan_Portal", title: "Agriculture Loan Portal" },
  { url: "https://github.com/Anbarasu-A-N/Travel_Planner_Console_App", title: "Travel Planner Console App" },
  { url: "https://github.com/Anbarasu-A-N/Chatbot", title: "Chatbot" },
  { url: "https://github.com/Anbarasu-A-N/HomeAppliance", title: "Home Appliance Management" },
];


function Projects() {
  const handleProjectClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
    <Navbar/>
    <div className="Project-body" id="project">
      <h1 className="Project" id="project" style={{ marginTop: 40, padding: 10 }}>Full Stack Projects</h1>
        <ul className="project-list" id="project">
          {fullStackProjects.map(project => (
            <li key={project.url} onClick={() => handleProjectClick(project.url)}>
              <p id="project">{project.title}</p>
              <div className="project-image" id="project" style={{ backgroundColor: "#e0e0e0", height: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p id="project" style={{ color: "#333", fontWeight: "bold" }}>GitHub Project</p>
              </div>
            </li>
          ))}
        </ul>
        
      <h1 className="Project" id="project" style={{ marginTop: 0, padding: 10 }}>My Projects</h1>
      <ul id="project" className="project-list">
        {projects.map(project => (
          <li id="project" key={project.url} onClick={() => handleProjectClick(project.url)}>
            <p id="project">{project.title}</p>
            <div
              className="project-image"
              id="project"
              style={{ backgroundImage: `url(${project.url}/screenshot.png)` }}
            ></div>
            <div id="project" className="iframe-container">
              <iframe
                id="project"
                src={project.url}
                title={project.title}
                className="project-iframe"
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
    <Footer/>
    </>
  );
}

export default Projects;

/*
*/