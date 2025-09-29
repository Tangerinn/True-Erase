// import React, { useState, useCallback } from 'react';
// import '../style/Verification.css'; // Import the new CSS file
// import * as jose from 'jose'; // <-- Add this line

// // --- Helper Components ---

// const SuccessView = ({ onReset, data }) => (
//     <div className="result-view result-view--success">
//         <svg className="result-view__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
//         <h3 className="result-view__title">Certificate is Authentic</h3>
//         <p className="result-view__subtitle result-view__subtitle--success">The certificate has been successfully verified.</p>
//         <div className="result-view__details">
//             <p><strong className="result-view__detail-label">Device ID:</strong> {data?.deviceDetails?.deviceId || 'N/A'}</p>
//             <p><strong className="result-view__detail-label">Wipe Method:</strong> {data?.wipeDetails?.wipeMethod || 'N/A'}</p>
//             <p><strong className="result-view__detail-label">Timestamp:</strong> {data?.issueTimestamp || 'N/A'}</p>
//         </div>
//         <button onClick={onReset} className="result-view__button result-view__button--success">Verify Another</button>
//     </div>
// );

// const FailureView = ({ onReset, data }) => (
//     <div className="result-view result-view--failure">
//         <svg className="result-view__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
//         <h3 className="result-view__title">Verification Failed</h3>
//         <div className="result-view__details result-view__details--failure">
//             <div>
//                 <strong className="result-view__reason-title">Reason for Failure:</strong>
//                 <p className="result-view__reason-text">The cryptographic signature is invalid or the data has been tampered with. The certificate cannot be trusted.</p>
//             </div>
//             {data && (
//                 <div>
//                     <strong className="result-view__unverified-title">Unverified Data from File:</strong>
//                     <p className="result-view__unverified-text">Device ID: {data?.deviceDetails?.deviceId || 'N/A'}</p>
//                 </div>
//             )}
//         </div>
//         <div className="result-view__action-box">
//             <strong className="result-view__action-title">⚠️ Action Required:</strong>
//             <p className="result-view__action-text">Do not proceed with this asset. Contact the issuer to resolve this discrepancy.</p>
//         </div>
//         <button onClick={onReset} className="result-view__button result-view__button--failure">Try Again</button>
//     </div>
// );

// const VerifyingView = () => (
//     <div className="verifying-view">
//         <div className="verifying-view__spinner"></div>
//         <p className="verifying-view__title">Verifying...</p>
//         <p className="verifying-view__subtitle">Reading file and checking for verification key.</p>
//     </div>
// );


// // --- Main Verification Component ---
// const Verification = () => {
//     const [state, setState] = useState('idle');
//     const [isDragging, setIsDragging] = useState(false);
//     const [verifiedData, setVerifiedData] = useState(null);

//     // 💥 IMPORTANT: PASTE YOUR PUBLIC KEY HERE 💥
//     // Replace the placeholder values with the public key you generated.
//     const ecPublicKeyJWK = {
        
          
//         "kty": "EC",
//   "x": "T-380hnAeF1Stndmbmx9qmxCAu9EvL8v_06c-tsC74A",
//   "y": "SRlooOTAeaAiMkBtKzQfhIpfgvf9Nue5wPbysvFjYRs",
//   "crv": "P-256"


          
//       };
  
//     //   const handleFile = useCallback((file) => {
//     //     if (!file || !file.type.includes('json')) {
//     //         alert("Please upload a valid .json certificate file.");
//     //         return;
//     //     }
//     //     setState('verifying');
//     //     const reader = new FileReader();
//     //     reader.onload = (event) => {
//     //         setTimeout(() => { // <-- This is the old logic
//     //             try {
//     //                 const data = JSON.parse(event.target.result);
//     //                 setVerifiedData(data);
//     //                 if (data.verification_code === "SIH2025-TRUE-ERASE-VALID") {
//     //                     setState('success');
//     //                 } else {
//     //                     setState('failure');
//     //                 }
//     //             } catch (error) {
//     //                 setVerifiedData(null);
//     //                 setState('failure');
//     //             }
//     //         }, 2000);
//     //     };
//     //     reader.readAsText(file);
//     // }, []); old fake version

//     // const handleFile = useCallback(async (file) => {
//     //     if (!file || !file.type.includes('json')) {
//     //         alert("Please upload a valid .json certificate file.");
//     //         return;
//     //     }
//     //     setState('verifying');
//     //     setVerifiedData(null); // Clear previous data
    
//     //     const reader = new FileReader();
//     //     reader.onload = async (event) => {
//     //         try {
//     //             const fileContent = event.target.result;
//     //             const data = JSON.parse(fileContent);
//     //             setVerifiedData(data); // Show data even if verification fails
    
//     //             const signature = data?.cryptographicProof?.digitalSignature;
//     //             if (!signature) {
//     //                 throw new Error("Signature not found in certificate.");
//     //             }
                
//     //             const originalData = { ...data };
//     //             delete originalData.cryptographicProof.digitalSignature;
    
//     //             const publicKey = await jose.importJWK(ecPublicKeyJWK, 'ES256');
    
//     //             await jose.compactVerify(
//     //                 signature,
//     //                 new TextEncoder().encode(JSON.stringify(originalData)),
//     //                 publicKey
//     //             );
    
//     //             setState('success'); // Verification passed!
    
//     //         } catch (error) {
//     //             console.error("Verification failed:", error);
//     //             setState('failure'); // Any error in the process means failure
//     //         }
//     //     };
//     //     reader.readAsText(file);
//     // }, []); // Note: I removed ecPublicKeyJWK from dependency array for simplicity

//     // debugging with this one :

//     const handleFile = useCallback(async (file) => {
//         if (!file || !file.type.includes('json')) {
//             alert("Please upload a valid .json certificate file.");
//             return;
//         }
//         setState('verifying');
//         setVerifiedData(null);
    
//         const reader = new FileReader();
//         reader.onload = async (event) => {
//             try {
//                 const fileContent = event.target.result;
//                 const data = JSON.parse(fileContent);
    
//                 // ✨ --- FINAL DEBUG LOGS --- ✨
//                 console.clear(); // Clear the console for a clean view
//                 console.log("--- 🕵️ FINAL DEBUG STAND 🕵️ ---");
//                 console.log("Public Key being used by the app:", ecPublicKeyJWK);
//                 console.log("Full certificate object being processed:", data);
//                 // ✨ -------------------------- ✨
                
//                 setVerifiedData(data);
    
//                 const signature = data?.cryptographicProof?.digitalSignature;
//                 if (!signature) {
//                     throw new Error("Signature not found in certificate.");
//                 }
                
//                 const originalData = { ...data };
//                 delete originalData.cryptographicProof.digitalSignature;
    
//                 // const publicKey = await jose.importJWK(ecPublicKeyJWK, 'ES2ES256'); // fuck u gemini
//                 const publicKey = await jose.importJWK(ecPublicKeyJWK, 'ES256'); // <-- CORRECT
                
//                 // await jose.compactVerify(
//                 //     signature,
//                 //     new TextEncoder().encode(JSON.stringify(originalData)),
//                 //     publicKey
//                 // ); // fuck you gemini
//                 await jose.compactVerify(signature, publicKey);
    
//                 console.log("✅ SUCCESS! VERIFICATION PASSED IN-APP.");
//                 setState('success');
    
//             } catch (error) {
//                 console.error("❌ FAILED IN-APP. The specific error is:", error);
//                 setState('failure');
//             }
//         };
//         reader.readAsText(file);
//     }, []);
//     const resetState = () => {
//         setState('idle');
//         setVerifiedData(null);
//     };

//     const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
//     const handleDragLeave = (e) => { e.preventDefault(); setIsDragging(false); };
//     const handleDrop = (e) => { e.preventDefault(); setIsDragging(false); handleFile(e.dataTransfer.files[0]); };
//     const handleFileSelect = (e) => { handleFile(e.target.files[0]); };

//     const renderContent = () => {
//         switch (state) {
//             case 'success': return <SuccessView onReset={resetState} data={verifiedData} />;
//             case 'failure': return <FailureView onReset={resetState} data={verifiedData} />;
//             case 'verifying': return <VerifyingView />;
//             default:
//                 const dropzoneClass = `uploader__dropzone ${isDragging ? 'uploader__dropzone--dragging' : ''}`;
//                 return (
//                     <div className="uploader">
//                         <label onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} className={dropzoneClass}>
//                             <input type="file" onChange={handleFileSelect} className="uploader__input" accept=".json" />
//                             <svg className="uploader__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
//                             <p className="uploader__title">Upload Certificate to Verify</p>
//                             <p className="uploader__subtitle">Drag & drop or click to upload a .json file.</p>
//                         </label>
//                     </div>
//                 );
//         }
//     };

//     return (
//         <section id="verify" className="verification">
//             <div className="verification__container">
//                 <div className="verification__header">
//                     <h2 className="verification__title">Certificate Verification Portal</h2>
//                     {/* <p className="verification__subtitle">Verify the authenticity of a True Erase certificate.</p> */}
//                 </div>
//                 <div className="verification__content">
//                     {renderContent()}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Verification;


/**
 * Handles the logic for file upload and the simple verification process.
 * * --- Method Used (Simple Verification) ---
 * This function performs a basic, non-cryptographic check on the uploaded
 * JSON certificate. It reads the file, parses its content, and looks for a
 * specific, hardcoded string within the "verification_code" field. If the
 * string matches "SIH2025-TRUE-ERASE-VALID", the certificate is considered valid.
 * * --- The Need for Cryptographic Verification ---
 * This simple string-checking method is NOT SECURE and is only suitable for a
 * proof-of-concept. 
 * * The major security flaw is that anyone could create a completely fake JSON file,
 * copy the valid "verification_code" string into it, and it would pass this 
 * check. This method does not prove the authenticity of the certificate's data 
 * (like the device serial number) and offers no protection against tampering.
 * * A professional system must use cryptographic verification (e.g., checking a
 * digital signature with a public key). This is the only way to guarantee that
 * a certificate is both AUTHENTIC (genuinely issued by TrueErase) and has
 * INTEGRITY (has not been altered since it was issued).
 */

import React, { useState, useCallback } from 'react';
import * as jose from 'jose';
import '../style/Verification.css';

// --- Helper Components ---

const SuccessView = ({ onReset, data }) => (
    <div className="result-view result-view--success">
        <svg className="result-view__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <h3 className="result-view__title">Certificate is Authentic</h3>
        <p className="result-view__subtitle result-view__subtitle--success">The cryptographic signature has been successfully verified.</p>
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
                <p className="result-view__reason-text">The cryptographic signature is invalid or the data has been tampered with. The certificate cannot be trusted.</p>
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
            <p className="result-view__action-text">Do not proceed with this asset. Contact the issuer to resolve this discrepancy.</p>
        </div>
        <button onClick={onReset} className="result-view__button result-view__button--failure">Try Again</button>
    </div>
);

const VerifyingView = () => (
    <div className="verifying-view">
        <div className="verifying-view__spinner"></div>
        <p className="verifying-view__title">Verifying...</p>
        <p className="verifying-view__subtitle">Checking cryptographic signature.</p>
    </div>
);


const Verification = () => {
    const [state, setState] = useState('idle');
    const [isDragging, setIsDragging] = useState(false);
    const [verifiedData, setVerifiedData] = useState(null);

    const ecPublicKeyJWK = {
      "kty": "EC",
      "x": "T-380hnAeF1Stndmbmx9qmxCAu9EvL8v_06c-tsC74A",
      "y": "SRlooOTAeaAiMkBtKzQfhIpfgvf9Nue5wPbysvFjYRs",
      "crv": "P-256"
    };

    const handleFile = useCallback(async (file) => {
        if (!file || !file.type.includes('json')) {
            alert("Please upload a valid .json certificate file.");
            return;
        }
        setState('verifying');
        setVerifiedData(null);

        const reader = new FileReader();
        reader.onload = async (event) => {
            try {
                const fileContent = event.target.result;
                const data = JSON.parse(fileContent);
                setVerifiedData(data);

                const signature = data?.cryptographicProof?.digitalSignature;
                if (!signature) {
                    throw new Error("Signature not found in certificate.");
                }
                
                const publicKey = await jose.importJWK(ecPublicKeyJWK, 'ES256');
                
                // --- THIS IS THE FINAL CORRECTED LINE ---
                await jose.compactVerify(signature, publicKey);

                setState('success');

            } catch (error) {
                console.error("Verification failed:", error);
                setState('failure');
            }
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
                    <h2 className="verification__title">Cryptographic Verification Portal</h2>
                </div>
                <div className="verification__content">
                    {renderContent()}
                </div>
            </div>
        </section>
    );
};

export default Verification;
