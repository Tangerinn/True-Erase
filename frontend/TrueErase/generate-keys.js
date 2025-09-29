// In generate-keys.js

import * as jose from 'jose';

async function generateKeys() {
  console.log('Generating a new P-256 key pair...');

  // 💥 THE FIX IS HERE: We add `{ extractable: true }` to the function call.
  const { publicKey, privateKey } = await jose.generateKeyPair('ES256', { extractable: true });

  // We then export them into the standard JSON Web Key (JWK) format
  const publicJwk = await jose.exportJWK(publicKey);
  const privateJwk = await jose.exportJWK(privateKey);

  console.log('\n✅ Key pair generated successfully!');
  console.log('------------------------------------------');
  console.log('\n--- YOUR PUBLIC KEY (Safe to share) ---');
  console.log('Copy this entire object into your Verification.jsx file.\n');
  console.log(JSON.stringify(publicJwk, null, 2));
  
  console.log('\n------------------------------------------');
  console.log('\n--- YOUR PRIVATE KEY (!!! KEEP THIS SECRET !!!) ---');
  console.log('Save this somewhere safe. Do NOT put it in your frontend code.\n');
  console.log(JSON.stringify(privateJwk, null, 2));
  console.log('------------------------------------------');
}

generateKeys();