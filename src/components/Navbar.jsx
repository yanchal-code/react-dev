import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <header className="navbar bg-dark fixed-top">
      {/* Logo Section */}
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className="logo-icon"
        />
        <span className="version">v19</span>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
        />
        <div className="search-shortcut">
          <kbd>Ctrl</kbd> + <kbd>K</kbd>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="nav-links me-3">
        <a href="#learn" className="nav-item">
          Learn
        </a>
        <a href="#reference" className="nav-item">
          Reference
        </a>
        <a href="#community" className="nav-item">
          Community
        </a>
        <a href="#blog" className="nav-item">
          Blog
        </a>
        <FontAwesomeIcon icon={faSun} className="icon text-light" />
        <FontAwesomeIcon icon={faLanguage} className="icon" />
        <FontAwesomeIcon icon={faGithub} className="icon" />
      </nav>
    </header>
  );
}

export default Navbar;

