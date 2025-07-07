
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
import Findme from "./Components/Findme";
import Recaptcha from "./Components/Recaptcha";

function App() {
  const verificationSuccess = useSelector(state => state.verificationSuccess);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/findme" element={<Findme />} />

          <Route path="/recaptcha" element={<Recaptcha />} />
          {verificationSuccess ? (
            <Route path="/contact" element={<Contact />} />
          ) : (
            <Route path="/contact" element={<Navigate to="/recaptcha" replace />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
