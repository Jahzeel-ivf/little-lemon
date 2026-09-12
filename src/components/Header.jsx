// src/components/Header.jsx
import React, { useState } from 'react';
import '../styles/Header.css';
import Nav from './Nav.jsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img
            src="/logo.png"
            alt="Little Lemon Restaurant Logo"
            className="logo"
          />
        </div>
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className="basket-container">
          <img src="/Basket.svg" alt="Basket" className="basket"/>
        </div>
      </div>
    </header>
  );
};

export default Header;