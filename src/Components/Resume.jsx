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
