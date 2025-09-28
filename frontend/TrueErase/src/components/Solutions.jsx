import React from 'react';
import '../style/Solutions.css'; // Adjust path based on your file structure

const Solutions = () => {
  const solutionsData = [
    {
      headline: 'Verifiable Chain-of-Custody.',
      audience: 'For IT Asset Recyclers (ITADs)',
      text: 'Provide your clients with undeniable proof of data destruction. Integrate TrueErase into your workflow to generate signed certificates for every asset, strengthen compliance, and build trust. Our tools are designed for batch processing in offline environments.',
      buttonText: 'Explore Recycler Solutions',
      buttonHref: '#itad-modal', // Placeholder for modal action
      buttonClass: 'btn--secondary'
    },
    {
      headline: 'Mitigate Risk, Ensure Compliance.',
      audience: 'For Enterprises & Data Centers',
      text: 'Decommission assets with confidence. TrueErase provides a secure, in-house solution to sanitize storage devices in line with NIST and other governance norms. Eliminate the financial and reputational risk associated with third-party data handlers and support your sustainability goals.',
      buttonText: 'Learn About Enterprise Deployment',
      buttonHref: '#enterprise-modal', // Placeholder for modal action
      buttonClass: 'btn--secondary'
    },
    {
      headline: 'Secure Wiping for Everyone.',
      audience: 'For Individuals & Developers',
      text: 'Securely erase your personal devices before selling or recycling them. Our bootable Live ISO is a free, one-click tool that functions entirely offline, ensuring your privacy is protected. The core engine is built on open-source tools, inviting developer collaboration.',
      buttonText: 'Download the Free Tool',
      buttonHref: '#get-started', // Scrolls to the download section
      buttonClass: 'btn--primary' // Primary button style for direct action
    }
  ];

  return (
    <section id="solutions" className="solutions">
      <div className="container">
        <h2 className="solutions__main-title animate-fade-in">
          A Solution for the Entire Asset Lifecycle.
        </h2>
        <div className="solutions__cards-container">
          {solutionsData.map((solution, index) => (
            <article key={index} className="solutions__card animate-fade-in">
              <div className="solutions__card-content">
                <span className="solutions__card-audience">{solution.audience}</span>
                <h3 className="solutions__card-headline">{solution.headline}</h3>
                <p className="solutions__card-text">{solution.text}</p>
              </div>
              <a href={solution.buttonHref} className={`btn ${solution.buttonClass}`}>
                {solution.buttonText}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;