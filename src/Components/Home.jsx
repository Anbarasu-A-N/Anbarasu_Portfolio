import "./Home.css";
import { Link } from "react-router-dom";
import ProfilePhoto from "./Images/boy.jpg";
import Type from "./Type";
import Navbar from "./Navbar";
import { useEffect, useState } from "react"; // For init state
import Particles, { initParticlesEngine } from "@tsparticles/react"; // Updated imports
import { loadSlim } from "@tsparticles/slim"; // Slim loader for efficiency

function Home() {
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
      <div className="homebody">
        {/* Particles background layer - only render if initialized */}
        {init && (
          <Particles
            id="tsparticles"
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
        <h1 className="Hi">Hi There!!!</h1>
        <div className="home-container">
          <div className="left-container">
            <br />
            <h1 className="Name">I'm ANBARASU A N</h1>
            <div>
              <Type />
            </div>
            <Link to="/Projects" style={{ textDecoration: "none", zIndex: 1}}>
              <button id="home">View My Projects</button>
            </Link>
          </div>
          <div className="right-container">
            <div className="circle-container1">
              <div className="circle-container2">
                <Link to="/About" style={{ zIndex: 1}}>
                  <img src={ProfilePhoto}  alt="Profile" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;



