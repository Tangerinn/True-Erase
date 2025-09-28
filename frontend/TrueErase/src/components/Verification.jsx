import React, { useState, useCallback } from 'react';
import '../style/Verification.css'; // Import the new CSS file

// --- Helper Components ---

const SuccessView = ({ onReset, data }) => (
    <div className="result-view result-view--success">
        <svg className="result-view__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <h3 className="result-view__title">Certificate is Authentic</h3>
        <p className="result-view__subtitle result-view__subtitle--success">The certificate has been successfully verified.</p>
        <div className="result-view__details">
            <p><strong className="result-view__detail-label">Device ID:</strong> {data?.deviceDetails?.deviceId || 'N/A'}</p>
            <p><strong className="result-view__detail-label">Wipe Method:</strong> {data?.wipeDetails?.wipeMethod || 'N/A'}</p>
            <p><strong className="result-view__detail-label">Timestamp:</strong> {data?.issueTimestamp || 'N/A'}</p>
        </div>
        <button onClick={onReset} className="result-view__button result-view__button--success">Verify Another</button>
    </div>
);

const FailureView = ({ onReset, data }) => (
    <div className="result-view result-view--failure">
        <svg className="result-view__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <h3 className="result-view__title">Verification Failed</h3>
        <div className="result-view__details result-view__details--failure">
            <div>
                <strong className="result-view__reason-title">Reason for Failure:</strong>
                <p className="result-view__reason-text">The verification code is missing or does not match the expected value. The certificate is considered invalid.</p>
            </div>
            {data && (
                <div>
                    <strong className="result-view__unverified-title">Unverified Data from File:</strong>
                    <p className="result-view__unverified-text">Device ID: {data?.deviceDetails?.deviceId || 'N/A'}</p>
                </div>
            )}
        </div>
        <div className="result-view__action-box">
            <strong className="result-view__action-title">⚠️ Action Required:</strong>
            <p className="result-view__action-text">Do not proceed with recycling this asset. Please contact the original owner or your administrator to resolve this discrepancy.</p>
        </div>
        <button onClick={onReset} className="result-view__button result-view__button--failure">Try Again</button>
    </div>
);

const VerifyingView = () => (
    <div className="verifying-view">
        <div className="verifying-view__spinner"></div>
        <p className="verifying-view__title">Verifying...</p>
        <p className="verifying-view__subtitle">Reading file and checking for verification key.</p>
    </div>
);


// --- Main Verification Component ---
const Verification = () => {
    const [state, setState] = useState('idle');
    const [isDragging, setIsDragging] = useState(false);
    const [verifiedData, setVerifiedData] = useState(null);

    const handleFile = useCallback((file) => {
        if (!file || !file.type.includes('json')) {
            alert("Please upload a valid .json certificate file.");
            return;
        }
        setState('verifying');
        const reader = new FileReader();
        reader.onload = (event) => {
            setTimeout(() => {
                try {
                    const data = JSON.parse(event.target.result);
                    setVerifiedData(data);
                    if (data.verification_code === "SIH2025-TRUE-ERASE-VALID") {
                        setState('success');
                    } else {
                        setState('failure');
                    }
                } catch (error) {
                    setVerifiedData(null);
                    setState('failure');
                }
            }, 2000);
        };
        reader.readAsText(file);
    }, []);

    const resetState = () => {
        setState('idle');
        setVerifiedData(null);
    };

    const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
    const handleDragLeave = (e) => { e.preventDefault(); setIsDragging(false); };
    const handleDrop = (e) => { e.preventDefault(); setIsDragging(false); handleFile(e.dataTransfer.files[0]); };
    const handleFileSelect = (e) => { handleFile(e.target.files[0]); };

    const renderContent = () => {
        switch (state) {
            case 'success': return <SuccessView onReset={resetState} data={verifiedData} />;
            case 'failure': return <FailureView onReset={resetState} data={verifiedData} />;
            case 'verifying': return <VerifyingView />;
            default:
                const dropzoneClass = `uploader__dropzone ${isDragging ? 'uploader__dropzone--dragging' : ''}`;
                return (
                    <div className="uploader">
                        <label onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} className={dropzoneClass}>
                            <input type="file" onChange={handleFileSelect} className="uploader__input" accept=".json" />
                            <svg className="uploader__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                            <p className="uploader__title">Upload Certificate to Verify</p>
                            <p className="uploader__subtitle">Drag & drop or click to upload a .json file.</p>
                        </label>
                    </div>
                );
        }
    };

    return (
        <section id="verify" className="verification">
            <div className="verification__container">
                <div className="verification__header">
                    <h2 className="verification__title">Certificate Verification Portal</h2>
                    <p className="verification__subtitle">Verify the authenticity of a True Erase certificate.</p>
                </div>
                <div className="verification__content">
                    {renderContent()}
                </div>
            </div>
        </section>
    );
};

export default Verification;