

import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setVerificationSuccess } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import './Recaptcha.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Particles, { initParticlesEngine } from "@tsparticles/react"; // Updated imports
import { loadSlim } from "@tsparticles/slim"; // Slim loader for efficiency

const generateRandomLetter = (excludeLetters) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const availableLetters = [...letters].filter(letter => !excludeLetters.includes(letter));
  const randomIndex = Math.floor(Math.random() * availableLetters.length);
  return availableLetters[randomIndex];
};

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const generateRandomWord = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let randomWord = '';
  const uniqueIndexes = new Set();

  while (uniqueIndexes.size < 5) {
    uniqueIndexes.add(Math.floor(Math.random() * letters.length));
  }

  uniqueIndexes.forEach((index) => {
    randomWord += letters.charAt(index);
  });

  return randomWord;
};

const Recaptcha = ({ setVerificationSuccess }) => {
  const [randomWord, setRandomWord] = useState(generateRandomWord());
  const [randomLetters, setRandomLetters] = useState([]);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [verificationMessage, setVerificationMessage] = useState('');
  const [robotCheckbox, setRobotCheckbox] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const generateRandomLetters = () => {
      const lettersWithWord = [];
      const usedLetters = [];

      for (let i = 0; i < 9; i++) {
        const isWordLetter = i < 5;

        if (isWordLetter) {
          lettersWithWord.push({ letter: randomWord[i], selected: false });
          usedLetters.push(randomWord[i]);
        } else {
          lettersWithWord.push({ letter: generateRandomLetter(usedLetters), selected: false });
        }
      }

      return shuffleArray(lettersWithWord);
    };

    setRandomLetters(generateRandomLetters());
    setVerificationMessage('');
  }, [randomWord]);

  const handleBoxClick = (index) => {
    const selectedLetter = randomLetters[index].letter;

    if (!selectedLetters.includes(selectedLetter)) {
      setSelectedLetters((prevSelectedLetters) => [...prevSelectedLetters, selectedLetter]);
    }
  };

  const verifySelection = () => {
    const selectedWord = selectedLetters.join('');
  
    if (selectedWord === randomWord && robotCheckbox) {
      setVerificationSuccess(true);
      navigate('/contact');
    } else {
      if (!robotCheckbox) {
        setVerificationMessage('Please check the "I am not a robot" box.');
      } else {
        setVerificationMessage('Verification failed. Try again.');
      }
      setVerificationSuccess(false);
    }
  };

  const resetVerification = () => {
    setRandomWord(generateRandomWord());
    setVerificationSuccess(false);
    setSelectedLetters([]);
    setRobotCheckbox(false);
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
    <Navbar />
    <body id="recaptcha">
      <div id="recaptcha" className='main-container'>
        <h1 id='recaptcha'>RECAPTCHA</h1>
        <div className="container" id="recaptcha">
          <center>
            <div className='grid-container' id="recaptcha">
              <h3 id="recaptcha">Generated Word: {randomWord}</h3>
              <div className="grid" id="recaptcha">
                {randomLetters.map((item, index) => (
                  <div
                    key={index}
                    id="recaptcha"
                    className={`box ${item.selected ? 'selected' : ''}`}
                    onClick={() => handleBoxClick(index)}
                  >
                    {item.letter}
                  </div>
                ))}
              </div>
            </div>
          </center>
          <div id='recaptcha'>
            <div id="recaptcha" className='recaptcha-check'>
              <p id="recaptcha">Selected Letters:<label id='recaptcha'> {selectedLetters.join('')}</label></p>
              <label id='recaptcha1'>
                <input
                  id='recaptcha1'
                  type="checkbox"
                  checked={robotCheckbox}
                  onChange={() => setRobotCheckbox(!robotCheckbox)}
                  required
                />
                I am not a robot
              </label>
            </div>
            {verificationMessage && <p id="recaptchaverify">{verificationMessage}</p>}
          </div>
        </div>
        <center>
          <button id="recaptcha" onClick={verifySelection}>Verify Selection</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button id="recaptcha" onClick={resetVerification}>Retry Verification</button>
        </center>
      </div>
    </body>
    <Footer />
    </>
  );
};

const mapDispatchToProps = {
  setVerificationSuccess,
};

export default connect(null, mapDispatchToProps)(Recaptcha);

