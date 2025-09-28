import React from 'react';
import '../style/Hero.css'; // The styles for this component

// 1. Accept the onDownloadClick prop
const Hero = ({ onDownloadClick }) => {
  return (
    <section id="home" className="hero">
      <div className="container hero__container">
        {/* Main Headline */}
        <h1 className="hero__title animate-slide-up">
          A New Standard for Data Sanitization.
        </h1>
        
        {/* Sub-headline */}
        <p className="hero__subtitle animate-slide-up">
          TrueErase is a verifiable, NIST-compliant platform that provides 
          cryptographic proof of data destruction, enabling a fully trusted 
          circular economy.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="hero__cta-group animate-slide-up">
          {/* 2. Replace the <a> with a <button> and use the onClick handler */}
          <button 
            onClick={onDownloadClick} 
            className="btn btn--primary"
          >
            Download the Prototype
          </button>
          
          <a href="#solutions" className="hero__secondary-link">
            {'>'} See the workflow
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;