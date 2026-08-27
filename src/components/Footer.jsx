// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Little Lemon</h3>
          <address>
            <p>Chicago, IL</p>
            <p>123 Restaurant Street</p>
            <p>Phone: <a href="tel:+15551234567">(555) 123-4567</a></p>
          </address>
        </div>
        <div className="footer-section">
          <h4>Hours</h4>
          <ul>
            <li>Mon - Fri: 11:00 - 22:00</li>
            <li>Sat - Sun: 10:00 - 23:00</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li>
              <a 
                href="https://facebook.com/littlelemon" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
              >
                Facebook
              </a>
            </li>
            <li>
              <a 
                href="https://instagram.com/littlelemon" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                Instagram
              </a>
            </li>
            <li>
              <a 
                href="https://twitter.com/littlelemon" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;