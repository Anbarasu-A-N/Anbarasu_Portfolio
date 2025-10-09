

// Send using Netlify URL

import { useEffect, useState } from "react"; // For init state
import Particles, { initParticlesEngine } from "@tsparticles/react"; // Updated imports
import { loadSlim } from "@tsparticles/slim"; // Slim loader for efficiency
import axios from 'axios';
import './Contact.css';
import Footer from './Footer';
import Navbar from './Navbar';

const Contact = () => {
  const [recipient, setRecipient] = useState('');
  const [fullname, setFullname] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRecipientChange = (e) => {
    const email = e.target.value;
    setRecipient(email);
    setIsValidEmail(isEmailValid(email));
    if (!isEmailValid(email)) {
      setMessageText('Please enter a valid email address.');
    } else {
      setMessageText('');
    }
  };

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailValid(recipient)) {
      setMessageText('Please enter a valid email address.');
      return;
    }

    const formattedMessage = `
    Your Name: ${fullname}
    Your EmailId: ${recipient}

    ${message}
    `;

    const formData = {
      to: recipient,
      subject: subject,
      text: formattedMessage,
    };

    try {
      setLoading(true);
      const response = await axios.post('https://smtpserver.netlify.app/.netlify/functions/sendEmail', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data);
      setMessageText('Email sent successfully!');

      // Send a copy to the fixed email address if the first email is successful
      const copyFormData = {
        to: 'allsmart.org@gmail.com',
        subject: subject,
        text: formattedMessage,
      };

      await axios.post('https://smtpserver.netlify.app/.netlify/functions/sendEmail', copyFormData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setFullname('');
      setRecipient('');
      setSubject('');
      setMessage('');
      setIsValidEmail(true);
    } catch (error) {
      console.error(error);
      setMessageText('Error while sending email.');
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessageText('');
      }, 5000);
    }
  };

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
    <div className="contact-body">
      <Navbar />
      <div className="contactbody">
        <div className="contact-form">
          <h2 id="contact">Contact Me</h2>
          {messageText && <p className="message">{messageText}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group" id="contact">
              <label id="contact" htmlFor="fullname">Full Name:</label>
              <input
                type="contactfullname"
                id="fullname"
                value={fullname}
                onChange={handleFullnameChange}
                style={{ marginBottom: 10 }}
                required
              />
              <label id="contact" htmlFor="recipient">Your Gmail Id:</label>
              <input
                type="contactemail"
                id="recipient"
                value={recipient}
                onChange={handleRecipientChange}
                required
              />
              {!isValidEmail && <p className="error-message">Invalid email address</p>}
            </div>
            <div className="form-group">
              <label id="contact" htmlFor="subject">Subject:</label>
              <input
                type="contacttext"
                id="subject"
                value={subject}
                onChange={handleSubjectChange}
                required
              />
            </div>
            <div className="form-group">
              <label id="contact" htmlFor="message">Message:</label>
              <textarea
                id="contact"
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
            <button id="contact" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Gmail'}
            </button>
            <br></br>
            <h6 id="contact">(Note): This Email is sent to your Email by using My Gmail ID.</h6>
          </form>
        </div>
      </div>
      <div className="ContactFooter" id="contact">
      <Footer />
      </div>
      </div>
    </>
  );
};

export default Contact;


/*
// Send using Netlify URL

import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import Footer from './Footer';
import Navbar from './Navbar';

const Contact = () => {
  const [recipient, setRecipient] = useState('');
  const [fullname, setFullname] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRecipientChange = (e) => {
    const email = e.target.value;
    setRecipient(email);
    setIsValidEmail(isEmailValid(email));
    if (!isEmailValid(email)) {
      setMessageText('Please enter a valid email address.');
    } else {
      setMessageText('');
    }
  };

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailValid(recipient)) {
      setMessageText('Please enter a valid email address.');
      return;
    }

    const formattedMessage = `
    Your Name: ${fullname}
    Your EmailId: ${recipient}

    ${message}
    `;

    const formData = {
      to: recipient,
      subject: subject,
      text: formattedMessage,
    };

    try {
      setLoading(true);
      const response = await axios.post('https://smtpserver.netlify.app/.netlify/functions/sendEmail', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data);
      setMessageText('Email sent successfully!');

      // Send a copy to the fixed email address if the first email is successful
      const copyFormData = {
        to: 'allsmart.org@gmail.com',
        subject: subject,
        text: formattedMessage,
      };

      await axios.post('https://smtpserver.netlify.app/.netlify/functions/sendEmail', copyFormData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setFullname('');
      setRecipient('');
      setSubject('');
      setMessage('');
      setIsValidEmail(true);
    } catch (error) {
      console.error(error);
      setMessageText('Error while sending email.');
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessageText('');
      }, 5000);
    }
  };

  return (
    <>
    <div className="Contactbody">
      <Navbar />
      <div className="contactbody">
        <div className="contact-form">
          <h2 id="contact">Contact Me</h2>
          {messageText && <p className="message">{messageText}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group" id="contact">
              <label id="contact" htmlFor="fullname">Full Name:</label>
              <input
                type="contactfullname"
                id="fullname"
                value={fullname}
                onChange={handleFullnameChange}
                style={{ marginBottom: 10 }}
                required
              />
              <label id="contact" htmlFor="recipient">Your Gmail Id:</label>
              <input
                type="contactemail"
                id="recipient"
                value={recipient}
                onChange={handleRecipientChange}
                required
              />
              {!isValidEmail && <p className="error-message">Invalid email address</p>}
            </div>
            <div className="form-group">
              <label id="contact" htmlFor="subject">Subject:</label>
              <input
                type="contacttext"
                id="subject"
                value={subject}
                onChange={handleSubjectChange}
                required
              />
            </div>
            <div className="form-group">
              <label id="contact" htmlFor="message">Message:</label>
              <textarea
                id="contact"
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
            <button id="contact" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Gmail'}
            </button>
            <br></br>
            <h6 id="contact">(Note): This Email is sent to your Email by using My Gmail ID.</h6>
          </form>
        </div>
      </div>
      <div className="ContactFooter" id="contact">
      <Footer />
      </div>
      </div>
    </>
  );
};

export default Contact;

/*
*/