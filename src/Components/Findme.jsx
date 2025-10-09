

import "./Findme.css"; // Import the CSS file for styling
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react"; // For init state
import Particles, { initParticlesEngine } from "@tsparticles/react"; // Updated imports
import { loadSlim } from "@tsparticles/slim"; // Slim loader for efficiency

function Findme() {
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
    <Navbar/>
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
    <div className="Find-body">
      <center>
        <h2 id="Find-container"><b>You can see here</b></h2>
      </center>
    <div className="Find-container">
      
      <iframe
        title="Google Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.1389037283466!2d77.34647149465263!3d11.498376011846956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba923d507cfea7f%3A0xccc250382115a3c0!2sPattukaran%20Thottam!5e1!3m2!1sen!2sin!4v1687791514128!5m2!1sen!2sin"
        width="100%"
        height="550"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      >
      </iframe>
    </div>
    <br/>
    </div>
    <Footer/>
    </>
  );
}

export default Findme;



/*

import "./Findme.css"; // Import the CSS file for styling
import Navbar from "./Navbar";
import Footer from "./Footer";

function Findme() {
  return (
    <>
    <Navbar/>
    <div className="Find-body">
      <center>
        <h2 id="Find-container"><b>You can see here</b></h2>
      </center>
    <div className="Find-container">
      
      <iframe
        title="Google Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.1389037283466!2d77.34647149465263!3d11.498376011846956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba923d507cfea7f%3A0xccc250382115a3c0!2sPattukaran%20Thottam!5e1!3m2!1sen!2sin!4v1687791514128!5m2!1sen!2sin"
        width="100%"
        height="550"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      >
      </iframe>
    </div>
    <br/>
    </div>
    <Footer/>
    </>
  );
}

export default Findme;


/*
*/