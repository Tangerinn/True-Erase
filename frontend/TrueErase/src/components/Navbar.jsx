import React, { useState, useEffect } from 'react';
import '../style/Navbar.css'; // We will create this file next

const Navbar = () => {
  // State to track if the page has been scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      // Set state to true if user has scrolled more than 50px, otherwise false
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    // The 'scrolled' class is added conditionally based on the isScrolled state
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
        
        {/* Logo on the far left */}
        <a href="#home" className="navbar__logo">TrueErase</a>

        {/* Navigation links in the center */}
        <div className="navbar__links">
          <a href="#solutions">Solutions</a>
          <a href="#verification">Verification</a>
          <a href="#why-trueerase">Why TrueErase</a>
        </div>

        {/* Login/Sign Up buttons on the far right */}
        <div className="navbar__auth">
          <a href="#login" className="navbar__auth-login">Login</a>
          <a href="#signup" className="btn btn--primary navbar__auth-signup">Sign Up</a>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;