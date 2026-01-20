import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/newlogo.png';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    if (window.innerWidth < 992) {
      const navbar = document.getElementById('navbarNav');
      if (navbar && navbar.classList.contains('show')) {
        const bootstrap = window.bootstrap;
        new bootstrap.Collapse(navbar).hide();
      }
    }
  };

  // Common styles for nav links to avoid repetition
  const navLinkStyle = (path) => ({
    color: location.pathname === path ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
    borderBottom: location.pathname === path ? '2px solid #f39c12' : '2px solid transparent',
    transition: 'all 0.3s ease',
  });

  return (
    <>
      <nav 
        className={`navbar navbar-expand-lg navbar-dark sticky-top w-100 ${isSticky ? 'shadow-lg' : ''}`} 
        style={{ 
          backgroundColor: '#001A7E',
          paddingTop: isSticky ? '10px' : '20px',
          paddingBottom: isSticky ? '10px' : '20px',
          transition: 'all 0.4s ease',
          top: 0,
          zIndex: 1050
        }}
      >
        <div className="container">
          <Link to="/" onClick={handleNavClick}>
            <img 
              style={{ 
                height: isSticky ? '65px' : '95px', 
                transition: 'height 0.4s ease' 
              }} 
              src={logo} 
              alt="Logo" 
            />
          </Link>

          <button className="navbar-toggler border-1 border-white shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center gap-3">
              {/* Home Link */}
              <li className="nav-item">
                <Link 
                  className="nav-link fw-medium px-2 custom-nav-link" 
                  style={navLinkStyle('/')}
                  to="/" 
                  onClick={handleNavClick}
                >
                  Home
                </Link>
              </li>

              {/* About Us Link with Hover Classes */}
              <li className="nav-item">
                <Link 
                  className="nav-link fw-medium px-2 custom-nav-link" 
                  style={navLinkStyle('/about')}
                  to="/about" 
                  onClick={handleNavClick}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link fw-medium px-2 custom-nav-link" 
                  style={navLinkStyle('/about')}
                  to="/OW" 
                  onClick={handleNavClick}
                >
                  Our Work
                </Link>
              </li>

              {/* Services Link with Hover Classes */}
              <li className="nav-item">
                <Link 
                  className="nav-link fw-medium px-2 custom-nav-link" 
                  style={navLinkStyle('/services')}
                  to="/services" 
                  onClick={handleNavClick}
                >
                  Services
                </Link>
              </li>

              <li className="nav-item ms-lg-2">
                <Link 
                  className="btn btn-outline-light fw-bold px-4 rounded-1 hover-btn" 
                  to="/contact" 
                  onClick={handleNavClick}
                  style={{ transition: 'all 0.3s ease' }}
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Adding a small internal style for the hover effect */}
      <style>{`
        .custom-nav-link:hover {
          color: #ffffff !important;
          border-bottom: 2px solid #f39c12 !important;
        }
        .hover-btn:hover {
          background-color: #f39c12 !important;
          color: #001A7E !important;
          border-color: #f39c12 !important;
        }
      `}</style>
    </>
  );
}

export default Header;