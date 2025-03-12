import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logoDark from "./../images/logo/DarkGroup_1918-removebg-preview610x409.png";
import logoLight from "./../images/logo/LightGroup_1920-removebg-preview.png";
import resume from "./../files/resume/Vyas_Yash_Resume.pdf";
// Import Font Awesome components and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply theme when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <a href="/">
            <img src={darkMode ? logoLight : logoDark} alt="Logo" />
          </a>
        </div>

        {/* Menu Items */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const link = document.createElement("a");
                link.href = resume;
                link.download = "Yash_Vyas_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Resume
            </a>
          </li>
          <li className="navbar-item">
            <a href="#education-and-work-experience">Education And Work</a>
          </li>
          <li className="navbar-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="navbar-item">
            <a href="#skills">Skills</a>
          </li>
          <li className="navbar-item">
            <a href="#recommendations">Recommendations</a>
          </li>
          <li className="navbar-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Social Icons and Dark Mode Toggle */}
        <div className="navbar-social">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/vyas-yash/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/virushere"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <span> | </span>
          {/* Dark Mode Toggle */}
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            <DarkModeSwitch 
              checked={darkMode}
              onChange={toggleDarkMode}
              size={24}
              moonColor="#ffffff"
              sunColor="#000000"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
