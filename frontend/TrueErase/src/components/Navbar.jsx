import React, { useState, useEffect } from 'react';
import '../style/Navbar.css';

// 💥 CORRECTION 1: Remove unnecessary/incorrect imports
// import { verifyPasswordResetCode } from 'firebase/auth'; // <--- REMOVE THIS LINE
// import Verification from './Verification'; // <--- REMOVE THIS LINE


// 1. Modify the component to accept ALL necessary props: onLoginClick, onVerifyClick, and isLoggedIn
const Navbar = ({ onLoginClick, onVerifyClick, isLoggedIn }) => {
  // State to track if the page has been scrolled (unchanged)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event (unchanged)
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 2. Define the Authenticated Content (unchanged)
  const AuthenticatedAuthContent = (
    <div className="navbar__profile">
      <span className="navbar__profile-name">Welcome, User</span>
      {/* Optionally add a Logout button or Profile icon here */}
    </div>
  );

  // 3. Define the Unauthenticated Content (unchanged)
  const UnauthenticatedAuthContent = (
    <>
      <button 
        onClick={onLoginClick} 
        className="navbar__auth-login"
      >
        Login
      </button>
      <a href="#signup" className="btn btn--primary navbar__auth-signup">Sign Up</a>
    </>
  );

  return (
    // The 'scrolled' class is added conditionally based on the isScrolled state (unchanged)
    
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
        
        {/* Logo on the far left (unchanged) */}
        <a href="#home" className="navbar__logo">TrueErase</a>

        {/* 4. Conditionally render the Navigation links in the center */}
        {!isLoggedIn && (
          <div className="navbar__links">
            {/* 💥 OPTIMIZATION: Links ordered logically (Features, Solutions, Actions) */}
            <a href="#features" className="nav-link">Features</a>
            <a href="#solutions" className="nav-link">Solutions</a>
            
            {/* Download still uses onLoginClick */}
            <button 
              onClick={onLoginClick} 
              className="nav-link download-link"
            >
              Download
            </button> 

            {/* 💥 CORRECTION 2: Use the correct handler for Verification */}
            <button 
              onClick={onVerifyClick} 
              className="nav-link"
            >
              Verify Certificate
            </button> 
          </div>
        )}

        {/* 5. Conditionally render the Login/Profile on the far right (unchanged) */}
        <div className="navbar__auth">
          {isLoggedIn ? AuthenticatedAuthContent : UnauthenticatedAuthContent}
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;