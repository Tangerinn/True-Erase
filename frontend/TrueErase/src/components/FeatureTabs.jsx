import React, { useState } from 'react';
import '../style/FeatureTabs.css'; // Make sure this path is correct based on your structure

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState(0); // State to keep track of the active tab

  const tabsData = [
    {
      title: 'Hybrid Sanitization',
      text: (
        <>
          Our engine orchestrates a multi-layered process, combining device-native commands 
          like NVMe Sanitize with cryptographic erasure and multiple overwrites. If one method fails, 
          the engine automatically attempts a fallback to ensure completion.
        </>
      ),
      // Simple SVG for Hybrid Sanitization (representing layers/multi-step)
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 17L7 14V9L12 12L17 9V14L12 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Verifiable Certificates',
      text: (
        <>
          After a successful wipe, all device logs and forensic data are bundled into 
          a JSON or PDF certificate. This file is then signed using JWS and PAdES standards, 
          making it a tamper-proof, auditable artifact that can be verified by any third party.
        </>
      ),
      // Simple SVG for Certificates (representing a document/signature)
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 15L12 18L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Adaptive Intelligence',
      text: (
        <>
          Before wiping, the engine scans the device, identifies its firmware, and 
          checks our risk database for known vulnerabilities. It then intelligently 
          selects the most effective and secure sanitization method for that specific piece of hardware.
        </>
      ),
      // Simple SVG for Adaptive Intelligence (representing a brain/gear/scan)
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 12C22 16.714 18.714 20 14 20C9.286 20 6 16.714 6 12C6 7.286 9.286 4 14 4C18.714 4 22 7.286 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12C2 16.714 5.286 20 10 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12C2 7.286 5.286 4 10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Full Compliance',
      text: (
        <>
          TrueErase is built to comply with the highest global standards, including 
          NIST SP 800-88 Rev. 1. This ensures that your data disposal methods meet 
          strict governance and IT compliance norms, protecting you from legal and financial risk.
        </>
      ),
      // Simple SVG for Compliance (representing a shield/checkmark)
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12L11 15L16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="features-tabs">
      <div className="container">
        <h2 className="features-tabs__title animate-fade-in">
          An Engine Designed for Absolute Assurance.
        </h2>

        <div className="features-tabs__content-wrapper">
          {/* Left Column: Tabs Navigation */}
          <div className="features-tabs__nav">
            {tabsData.map((tab, index) => (
              <button
                key={index}
                className={`features-tabs__nav-item ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Right Column: Tab Content and Graphic */}
          <div className="features-tabs__body">
            {/* The content, with a unique key to trigger animation on change */}
            <div key={activeTab} className="features-tabs__text animate-slide-up">
              <h3>{tabsData[activeTab].title}</h3>
              <p>{tabsData[activeTab].text}</p>
            </div>

            {/* The graphic, with a unique key to trigger animation on change */}
            <div key={`icon-${activeTab}`} className="features-tabs__graphic animate-fade-in">
              {tabsData[activeTab].icon}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTabs;