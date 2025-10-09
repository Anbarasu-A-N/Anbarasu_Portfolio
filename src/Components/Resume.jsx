import React, { useState, useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './Resume.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ResumePDF = '/Resume.pdf';

const Resume = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    particles: {
      number: {
        value: 300,
        density: {
          enable: true,
          area: 80,
        },
      },
      color: {
        value: "#ffffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 1, max: 3 },
      },
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
        outModes: {
          default: "out",
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
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
    detectRetina: true,
  };

  const handleDownload = () => {
    const fileName = 'Resume.pdf';
    const pdfPath = ResumePDF;
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = fileName;
    link.click();
  };

  return (
    <div id="resume-page">
      <Navbar />
      {init && (
        <Particles
          id="tsparticles-resume"
          options={particlesOptions}
        />
      )}
      <div id="resume-content">
        <h1>RESUME</h1>
        <div id="pdf-container">
          <Worker workerUrl="/pdf.worker.min.js">
            <Viewer fileUrl={ResumePDF} />
          </Worker>
          <button onClick={handleDownload}>Download PDF</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;

/*

import React, { useState, useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './Resume.css'; // Import the updated CSS file
import Navbar from './Navbar';
import Footer from './Footer';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ResumePDF = '/Resume.pdf'; // Path relative to the 'public' folder

const Resume = () => {
  const [init, setInit] = useState(false);

  // Initialize the tsParticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Particle configuration
  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    particles: {
      number: {
        value: 300,
        density: {
          enable: true,
          area: 80,
        },
      },
      color: {
        value: "#ffffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 1, max: 3 },
      },
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
        outModes: {
          default: "out",
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
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
    detectRetina: true,
  };

  const handleDownload = () => {
    const fileName = 'Resume.pdf';
    const pdfPath = ResumePDF;
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = fileName;
    link.click();
  };

  return (
    <div id="resume-page">
      {init && (
        <Particles
          id="tsparticles-resume"
          options={particlesOptions}
        />
      )}
      <Navbar />
      <div id="resume-content">
        <h1>RESUME</h1>
        <div id="pdf-container">
          <Worker workerUrl="/pdf.worker.min.js">
            <Viewer fileUrl={ResumePDF} />
          </Worker>
          <button onClick={handleDownload}>Download PDF</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;



/*

//copied the pdf.worker.min.js file from node_modules/pdfjs-dist/build/ into the public folder
import React, { useState, useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './Resume.css'; // Import the CSS file
import Navbar from './Navbar';
import Footer from './Footer';
import Particles, { initParticlesEngine } from "@tsparticles/react"; // Updated imports
import { loadSlim } from "@tsparticles/slim"; // Slim loader for efficiency

const ResumePDF = '/Resume.pdf'; // Use a path relative to the 'public' folder

const Resume = () => {
  const [showPdf, setShowPdf] = useState(false);
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

  const onDocumentLoadSuccess = ({ numPages }) => {
    console.log(`Document loaded with ${numPages} pages`);
    setShowPdf(true);
  };

  const handleDownload = () => {
    const fileName = 'Resume.pdf';
    const pdfPath = ResumePDF;
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = fileName;
    link.click();
  };

  return (
    <>
      <div className='formbgcolor' id="resume">
      {init && (
        <Particles
          id="tsparticles-resume" // Unique ID to avoid conflicts
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
      <Navbar />
        <div className="form" id="resume">
          <div className="formfirst" id="resume">
            <h1 className="resume" id="resume" style={{ padding: 0, fontFamily: 'Times New Roman', textAlign: 'center' }}>
              RESUME PDF
            </h1>
            <div className="pdf-default-container" id="resume">
              <div className="pdf-container-wrapper" id="resume">
                <div className={`pdf-container ${showPdf ? 'visible' : 'hidden'}`} id="resume">
                  <div className="pdf-viewer" id="resume">
                    {showPdf && (
                      <Worker
                        workerUrl={new URL('/pdf.worker.min.js', import.meta.url).href} // Use pdf.worker.min.js
                      >
                        <Viewer fileUrl={ResumePDF} onLoadSuccess={onDocumentLoadSuccess} />
                      </Worker>
                    )}
                  </div>
                </div>
              </div>
              <div className="pdf-controls" id="resume">
                <button className="form-button" id="resume" onClick={() => setShowPdf(!showPdf)}>
                  {showPdf ? 'Hide PDF' : 'View PDF'}
                </button>
                <button className="form-button" id="resume" onClick={handleDownload}>
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      <div className="ResumeFooter" id="resume">
      <Footer />
      </div>
      </div>
    </>
  );
};

export default Resume;


/*

//copied the pdf.worker.min.js file from node_modules/pdfjs-dist/build/ into the public folder


import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './Resume.css'; // Import the CSS file
import Navbar from './Navbar';
import Footer from './Footer';

const ResumePDF = '/Resume.pdf'; // Use a path relative to the 'public' folder

const Resume = () => {
  const [showPdf, setShowPdf] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    console.log(`Document loaded with ${numPages} pages`);
    setShowPdf(true);
  };

  const handleDownload = () => {
    const fileName = 'Resume.pdf';
    const pdfPath = ResumePDF;
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = fileName;
    link.click();
  };

  return (
    <>
      <div className='formbgcolor' id="resume">
      <Navbar />
        <div className="form" id="resume">
          <div className="formfirst" id="resume">
            <h1 className="resume" id="resume" style={{ padding: 0, fontFamily: 'Times New Roman', textAlign: 'center' }}>
              RESUME PDF
            </h1>
            <div className="pdf-default-container" id="resume">
              <div className="pdf-container-wrapper" id="resume">
                <div className={`pdf-container ${showPdf ? 'visible' : 'hidden'}`} id="resume">
                  <div className="pdf-viewer" id="resume">
                    {showPdf && (
                      <Worker
                        workerUrl={new URL('/pdf.worker.min.js', import.meta.url).href} // Use pdf.worker.min.js
                      >
                        <Viewer fileUrl={ResumePDF} onLoadSuccess={onDocumentLoadSuccess} />
                      </Worker>
                    )}
                  </div>
                </div>
              </div>
              <div className="pdf-controls" id="resume">
                <button className="form-button" id="resume" onClick={() => setShowPdf(!showPdf)}>
                  {showPdf ? 'Hide PDF' : 'View PDF'}
                </button>
                <button className="form-button" id="resume" onClick={handleDownload}>
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      <div className="ResumeFooter" id="resume">
      <Footer />
      </div>
      </div>
    </>
  );
};

export default Resume;

/*
*/