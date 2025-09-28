import React, { useState } from 'react';
import '../style/Verification.css'; // Adjust path based on your file structure

const Verification = () => {
  const [status, setStatus] = useState('idle'); // 'idle', 'success', 'failure'
  const [isDragging, setIsDragging] = useState(false);
  const [fileDetails, setFileDetails] = useState({});

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
                    
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      // --- FAKE VERIFICATION LOGIC ---
      // In a real app, you would send the file to a backend for verification.
      // Here, we'll simulate it based on the filename for demonstration.
      if (file.name.toLowerCase().includes('valid')) {
        setFileDetails({
          deviceId: 'SN-A9B8C7D6E5F4',
          wipeStatus: 'SUCCESS',
          timestamp: new Date().toUTCString(),
        });
        setStatus('success');
      } else {
        setStatus('failure');
      }
    }
  };
  
  const handleReset = () => {
    setStatus('idle');
    setFileDetails({});
  };

  // Combine class names based on state
  const dropzoneClasses = `verification__dropzone ${isDragging ? 'dragging' : ''} ${status}`;

  return (
    <section id="verification" className="verification">
      <div className="container">
        <h2 className="verification__title animate-fade-in">Trust, but Verify.</h2>
        <p className="verification__subtitle animate-fade-in">
          Drag and drop a TrueErase certificate here to instantly verify its 
          cryptographic signature and authenticity.
        </p>

        {/* Links to download sample files for the user to test */}
        <div className="verification__samples animate-fade-in">
          <a href="/sample-valid-certificate.json" download>Download Sample Valid File</a>
          <span>|</span>
          <a href="/sample-invalid-certificate.json" download>Download Sample Invalid File</a>
        </div>

        <div
          className={dropzoneClasses}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {status === 'idle' && (
            <div className="verification__idle-content">
              {/* Upload Icon */}
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="17 8 12 3 7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="3" x2="12" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Upload Certificate File</span>
            </div>
          )}

          {status === 'success' && (
            <div className="verification__result-content">
              {/* Success Icon */}
              <div className="verification__icon success-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="verification__details">
                <span>Device ID:</span><span>{fileDetails.deviceId}</span>
                <span>Wipe Status:</span><span className="success-text">{fileDetails.wipeStatus}</span>
                <span>Timestamp:</span><span>{fileDetails.timestamp}</span>
              </div>
              <p className="verification__status-text success-text">Signature Valid</p>
            </div>
          )}

          {status === 'failure' && (
            <div className="verification__result-content">
              {/* Failure Icon */}
              <div className="verification__icon failure-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="verification__status-text failure-text">Signature Invalid or Tampered</p>
            </div>
          )}
        </div>
        
        {status !== 'idle' && (
            <button onClick={handleReset} className="verification__reset-button">Verify Another File</button>
        )}
      </div>
    </section>
  );
};

export default Verification;