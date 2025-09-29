// // In sign-certificate.js

// import * as jose from 'jose';

// // --- PASTE YOUR SECRET PRIVATE KEY HERE ---
// // Replace the placeholder object below with the full private key you just generated.
// const privateKeyJwk = {
//     "kty": "EC",
//     "x": "y3gz75xFiwZg3tBYgKFOk2L6fzM6t31Qcq8zQN2ixTM",
//     "y": "YSVUXby5IIxpmibA4cnD9cgl_JLTlEd9n7jti59Q0Yo",
//     "crv": "P-256",
//     "d": "EpnwCLBNJ9nPXzmTOte-mMaxizQjW1zeI5XfO6CrhT0"
  
// }
// // -----------------------------------------

// // --- This is the data we are going to sign ---
// // This is the data we are going to sign
// // --- This is the data we are going to sign ---
// const certificateData = {
//     "certificateVersion": "1.0",
//     "certificateId": "a4e9-8b1c-3d7f-5a0a-1b8e",
//     "issuerName": "True Erase by Everizon",
//     "issueTimestamp": new Date().toISOString(),
//     "deviceDetails": {
//       "deviceId": "DEV-KINGSTON-250SSD-PQR",
//       "deviceModel": "Kingston 250GB SSD",
//       "deviceSerial": "K58219A0987654",
//       "hostSystem": "Dell Vostro"
//     },
//     "wipeDetails": {
//       "wipeMethod": "NIST 800-88 Purge (ATA Secure Erase)",
//       "wipeStatus": "Success",
//       "wipeEnvironment": "Arch Linux"
//     },
//     "cryptographicProof": {
//       "dataHash": "b2c3d4e5f67890a1b2c3d4e5f67890a1b2c3d4e5f67890a1b2c3d4e5f67890a1"
//     }
//   };

// async function signCertificate() {
//   try {
//     // Import the private key
//     const privateKey = await jose.importJWK(privateKeyJwk, 'ES256');

//     // Create the signature (JWS)
//     const signature = await new jose.CompactSign(
//       new TextEncoder().encode(JSON.stringify(certificateData))
//     )
//     .setProtectedHeader({ alg: 'ES256' })
//     .sign(privateKey);

//     // Add the signature to the certificate data
//     const finalCertificate = {
//       ...certificateData,
//       cryptographicProof: {
//         ...certificateData.cryptographicProof,
//         digitalSignature: signature
//       }
//     };

//     console.log('\n✅ Certificate signed successfully!');
//     console.log('--- YOUR NEW VALID CERTIFICATE (Save this as a .json file) ---\n');
//     console.log(JSON.stringify(finalCertificate, null, 2));
//     console.log('\n-----------------------------------------------------------');

//   } catch (error) {
//     console.error('Error signing certificate:', error);
//   }
// }

// signCertificate();

// In sign-certificate.js
import * as jose from 'jose';

// --- PASTE YOUR SECRET PRIVATE KEY HERE ---
const privateKeyJwk = {
    "kty": "EC",
    "x": "T-380hnAeF1Stndmbmx9qmxCAu9EvL8v_06c-tsC74A",
    "y": "SRlooOTAeaAiMkBtKzQfhIpfgvf9Nue5wPbysvFjYRs",
    "crv": "P-256",
    "d": "xobo0yt9Jh9qNPMlRH6v8tM0Ld_Ve-H7NhwPQIKfb5M"
  
  
};
// -----------------------------------------

const certificateData = {
    "certificateVersion": "1.0",
    "certificateId": "a4e9-8b1c-3d7f-5a0a-1b8e",
    "issuerName": "True Erase by Everizon",
    "issueTimestamp": new Date().toISOString(),
    "deviceDetails": {
      "deviceId": "DEV-KINGSTON-250SSD-PQR",
      "deviceModel": "Kingston 250GB SSD",
      "deviceSerial": "K58219A0987654",
      "hostSystem": "Dell Vostro"
    },
    "wipeDetails": {
      "wipeMethod": "NIST 800-88 Purge (ATA Secure Erase)",
      "wipeStatus": "Success",
      "wipeEnvironment": "Arch Linux"
    },
    "cryptographicProof": {
      "dataHash": "b2c3d4e5f67890a1b2c3d4e5f67890a1b2c3d4e5f67890a1b2c3d4e5f67890a1"
    }
};

async function signCertificate() {
  try {
    const privateKey = await jose.importJWK(privateKeyJwk, 'ES256');

    const signature = await new jose.CompactSign(
      new TextEncoder().encode(JSON.stringify(certificateData))
    )
    .setProtectedHeader({ alg: 'ES256' })
    .sign(privateKey);

    // ✨ --- NEW DEBUG LOGS --- ✨
    console.log('\n--- DEBUG: RAW SIGNATURE STRING ---');
    console.log(signature);
    console.log('---------------------------------');
    // ✨ ----------------------- ✨

    const finalCertificate = {
      ...certificateData,
      cryptographicProof: {
        ...certificateData.cryptographicProof,
        // digitalSignature: signature : 
        //the algo is super strong, if it say considers a whitespace, the certificate will be invalid.
        // to solve this, we'll trim the white-spaces.
        digitalSignature: signature.trim()
      }
    };

    console.log('\n✅ Certificate signed successfully!');
    console.log('--- YOUR NEW VALID CERTIFICATE (Save this as a .json file) ---\n');
    console.log(JSON.stringify(finalCertificate, null, 2));
    console.log('\n-----------------------------------------------------------');

  } catch (error) {
    console.error('Error signing certificate:', error);
  }
}

signCertificate();