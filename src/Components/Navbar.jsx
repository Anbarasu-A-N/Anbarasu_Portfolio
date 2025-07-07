import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="navbar" className="navbar">
      <div id="navbar" className="menu-button" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <ul id="navbar" className={menuOpen ? "nav-menu open" : "nav-menu"} >
        <li id="navbar"><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li id="navbar"><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li id="navbar"><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
        <li id="navbar"><Link to="/resume" onClick={toggleMenu}>Resume</Link></li>
        <li id="navbar"><Link to="/recaptcha" onClick={toggleMenu}>Contact</Link></li>
        <li id="navbar"><Link to="/findme" onClick={toggleMenu}>Findme</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
