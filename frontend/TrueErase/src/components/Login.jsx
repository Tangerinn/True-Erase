import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'; // Import the auth service we created earlier
import '../style/Login.css'; // Import the styling

// 1. Accept onLoginSuccess as a prop
const Login = ({ onLoginSuccess }) => {
  // State to store the user's email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State to handle potential errors from Firebase
  const [error, setError] = useState('');
  // State to show a loading message while Firebase is working
  const [loading, setLoading] = useState(false);

  // This function is called when the user submits the form
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents the page from reloading on submit
    setLoading(true);   // Show loading indicator
    setError('');       // Clear any previous errors

    try {
      // Use the Firebase function to sign in
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // If successful:
      console.log('User logged in:', userCredential.user);
      
      // 2. IMPORTANT: Call the success handler passed from App.jsx
      if (onLoginSuccess) {
        onLoginSuccess();
      }
      
    } catch (err) {
      // If there's an error, display a user-friendly message
      setError('Failed to log in. Please check your email and password.');
      console.error("Firebase login error:", err.message);
    } finally {
      setLoading(false); // Hide loading indicator
      // Clear password field regardless of success/failure for security
      setPassword(''); 
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        
        {/* Display any error messages here */}
        {error && <p className="error-message">{error}</p>}
        
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Logging In...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;