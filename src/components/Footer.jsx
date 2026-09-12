import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer" role="contentinfo" aria-label="Site footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="logo-container">
            <img
              src="/Logo_White.svg"
              alt="Little Lemon Restaurant Logo"
              className="logo-footer"
            />
          </div>
        </div>
        <div className="footer-section">
          <h3>Little Lemon</h3>
          <address>
            <p>Chicago, IL</p>
            <p>123 Restaurant Street</p>
            <p>Email: <a href="mailto:info@littlelemon.com" aria-label="Send us an email - On Click">info@littlelemon.com</a></p>
            <p>Phone: <a href="tel:+15551234567" aria-label="Call us - On Click">(555) 123-4567</a></p>
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
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook - On Click"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram - On Click"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter - On Click"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;