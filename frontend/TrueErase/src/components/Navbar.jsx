import React, { useState, useEffect } from 'react';
import '../style/Navbar.css';

const Navbar = ({ onHomeClick, onLoginClick, onVerifyClick, onSignupClick, onLogout, isLoggedIn }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
        
        <button onClick={onHomeClick} className="navbar__logo">TrueErase</button>

        {/* Center Links (Only visible when logged out) */}
        {!isLoggedIn && (
          <div className="navbar__links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#solutions" className="nav-link">Solutions</a>
            <button onClick={onLoginClick} className="nav-link download-link">Download</button> 
            <button onClick={onVerifyClick} className="nav-link">Verify Certificate</button> 
          </div>
        )}

        {/* Auth Section (Changes based on login state) */}
        <div className="navbar__auth">
          {isLoggedIn ? (
            // VIEW WHEN LOGGED IN
            <>
              <span className="navbar__profile-name">Welcome!</span>
              <button onClick={onLogout} className="btn btn--primary navbar__auth-signup">
                Logout
              </button>
            </>
          ) : (
            // VIEW WHEN LOGGED OUT
            <>
              <button onClick={onLoginClick} className="navbar__auth-login">
                Login
              </button>
              <button onClick={onSignupClick} className="btn btn--primary navbar__auth-signup">
                Sign Up
              </button>
            </>
          )}
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;