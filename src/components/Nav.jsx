import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = ({ isMenuOpen, toggleMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    if (toggleMenu) toggleMenu();
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
    if (toggleMenu) toggleMenu();
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    handleNavigation(sectionId);
  };
  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`} aria-label="Main Navigation">
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link 
            to="/" 
            onClick={handleHomeClick}
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/booking" onClick={() => toggleMenu && toggleMenu()}>
            Reserve a Table
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={(e) => handleLinkClick(e, 'about')}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={(e) => handleLinkClick(e, 'menu')}
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={(e) => handleLinkClick(e, 'contact')}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;