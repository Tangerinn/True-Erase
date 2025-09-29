import React, { useState, useEffect } from 'react';
import '../style/Navbar.css';

const Navbar = ({ onHomeClick, onLoginClick, onVerifyClick, onSignupClick, onLogout, isLoggedIn }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (handler) => {
    handler();
    setIsMenuOpen(false);
  };

  const AuthenticatedAuthContent = (
    <>
      <span className="navbar__profile-name">Welcome!</span>
      <button onClick={() => handleLinkClick(onLogout)} className="btn btn--primary navbar__auth-signup">
        Logout
      </button>
    </>
  );

  const UnauthenticatedAuthContent = (
    <>
      <button onClick={() => handleLinkClick(onLoginClick)} className="navbar__auth-login">
        Login
      </button>
      <button onClick={() => handleLinkClick(onSignupClick)} className="btn btn--primary navbar__auth-signup">
        Sign Up
      </button>
    </>
  );

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
        
        <button onClick={() => handleLinkClick(onHomeClick)} className="navbar__logo">TrueErase</button>

        {/* Hamburger Icon Button (Visible only on mobile) */}
        <button className="navbar__toggle" onClick={toggleMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d={isMenuOpen ? "M18 6L6 18M6 6L18 18" : "M3 12h18M3 6h18M3 18h18"}/>
          </svg>
        </button>
        
        {/* Main Links Wrapper (The container that opens/closes) */}
        <div className={`navbar__links-wrapper ${isMenuOpen ? 'open' : ''}`}>

          {/* Center Links (Only visible when logged out) */}
          {!isLoggedIn && (
            <div className="navbar__links">
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="nav-link">Features</a>
              <a href="#solutions" onClick={() => setIsMenuOpen(false)} className="nav-link">Solutions</a>
              <button onClick={() => handleLinkClick(onLoginClick)} className="nav-link download-link">Download</button> 
              <button onClick={() => handleLinkClick(onVerifyClick)} className="nav-link">Verify Certificate</button> 
            </div>
          )}

          {/* Auth Section for Mobile (Always inside the wrapper) */}
          <div className="navbar__auth navbar__auth--mobile">
            {isLoggedIn ? AuthenticatedAuthContent : UnauthenticatedAuthContent}
          </div>
        </div>

        {/* Auth Section for Desktop (Outside the mobile wrapper for positioning) */}
        <div className="navbar__auth navbar__auth--desktop">
          {isLoggedIn ? AuthenticatedAuthContent : UnauthenticatedAuthContent}
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;