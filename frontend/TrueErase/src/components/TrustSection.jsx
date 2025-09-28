import React from 'react';
import '../style/TrustSection.css'; // The styles for this component

const TrustSection = () => {
  // Array of logos to be displayed
  const logos = [
    { name: 'NIST' },
    { name: 'Python' },
    { name: 'Rust' },
    { name: 'Linux' },
    { name: 'JWS' },
    { name: 'PAdES' },
  ];

  // We duplicate the logos to create the seamless infinite scroll effect
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section id="trust" className="trust-section">
      <div className="container trust-section__container">
        <h2 className="trust-section__title animate-fade-in">
          Built on Trusted Standards & Open Technologies
        </h2>

        <div className="trust-carousel animate-fade-in">
          {/* Decorative Arrow on the left */}
          {/* <button className="trust-carousel__arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button> */}

          {/* The main scroller element */}
          <div className="trust-scroller">
            <div className="trust-scroller__track">
              {/* Render the duplicated logos */}
              {duplicatedLogos.map((logo, index) => (
                <div key={index} className="trust-scroller__logo">
                  <span>{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative Arrow on the right (CORRECTED SVG PATH) */}
          {/* <button className="trust-carousel__arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;