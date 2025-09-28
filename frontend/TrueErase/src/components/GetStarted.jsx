import React from 'react';
import '../style/GetStarted.css'; // Adjust path based on your file structure

const GetStarted = () => {
  return (
    <section id="get-started" className="get-started">
      <div className="container get-started__container">
        <h2 className="get-started__title animate-fade-in">
          Download the Prototype Today.
        </h2>
        <p className="get-started__text animate-fade-in">
          Get the latest build of our secure wiping tool. The prototype is a bootable Live ISO 
          for Linux-based systems and demonstrates our core sanitization and certification workflow.
        </p>
        <a 
          href="/path/to/your/TrueErase.iso" // IMPORTANT: Replace with the actual file path
          download 
          className="btn btn--primary get-started__button animate-fade-in"
        >
          Download for Linux (Live ISO)
        </a>
      </div>
    </section>
  );
};

export default GetStarted;