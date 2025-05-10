import { useState, useEffect } from 'react';
import './Header.css';

const Logo = () => (
  <svg
    className="logo-svg"
    viewBox="0 0 100 100"
    width="40"
    height="40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 20 L20 80 L40 80 L80 20 L80 80"
      stroke="currentColor"
      strokeWidth="8"
      fill="none"
      strokeLinecap="square"
            strokeLinejoin="round"
    />
  </svg>
);

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Apply theme to body
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">
          <Logo />
        </div>
        <span className="name">NIYOR</span>
      </div>
      
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="header-actions">
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? 'Dark' : 'Light '}
        </button>
        <a href="/resume.pdf" className="resume-btn" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </header>
  );
};

export default Header; 