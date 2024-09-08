import React from 'react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav container flex">
        {/* Logo */}
        <a href="#" className="logo-content flex">
          <i className="bx bx-coffee logo-icon"></i>
          <span className="logo-text">
            <strong>Coffee.</strong>
          </span>
        </a>

        {/* Menu */}
        <div className={`menu-content ${isMenuOpen ? 'open' : ''}`}>
          <ul className="menu-list flex">
            <li>
              <a href="#home" className="nav-link active-navlink">
                home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                about
              </a>
            </li>
            <li>
              <a href="#menu" className="nav-link">
                menu
              </a>
            </li>
            <li>
              <a href="#review" className="nav-link">
                review
              </a>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="media-icons flex">
            <a href="https://www.facebook.com">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://twitter.com/i/flow/login">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://www.instagram.com/accounts/login">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="https://github.com/login">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://www.youtube.com/login">
              <i className="bx bxl-youtube"></i>
            </a>
          </div>

          {/* Close Button */}
          <i className="bx bx-x navClose-btn" onClick={toggleMenu}></i>
        </div>

        {/* Contact Info */}
        <div className="contact-content flex">
          <i className="bx bx-phone phone-icon"></i>
          <span className="phone-number">Make A Call Now</span>
        </div>

        {/* Menu Open Button */}
        <i className="bx bx-menu navOpen-btn" onClick={toggleMenu}></i>
      </nav>
    </header>
  );
};

export default Header;
