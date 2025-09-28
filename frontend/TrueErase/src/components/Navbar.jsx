// import React, { useState, useEffect } from 'react';
// import '../style/Navbar.css';

// // 1. Modify the component to accept 'onLoginClick' AND 'isLoggedIn'
// const Navbar = ({ onLoginClick, isLoggedIn }) => {
//   // State to track if the page has been scrolled (unchanged)
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     // Function to handle the scroll event (unchanged)
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // 2. Define the Authenticated Content
//   const AuthenticatedAuthContent = (
//     // Replace the name "User" with actual user name or initials if available
//     <div className="navbar__profile">
//       <span className="navbar__profile-name">Welcome, User</span>
//       {/* Optionally add a Logout button or Profile icon here */}
//     </div>
//   );

//   // 3. Define the Unauthenticated Content
//   const UnauthenticatedAuthContent = (
//     <>
//       <button 
//         onClick={onLoginClick} 
//         className="navbar__auth-login"
//       >
//         Login
//       </button>
//       <a href="#signup" className="btn btn--primary navbar__auth-signup">Sign Up</a>
//     </>
//   );

//   return (
//     // The 'scrolled' class is added conditionally based on the isScrolled state (unchanged)
//     <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
//       <div className="navbar__container">
        
//         {/* Logo on the far left (unchanged) */}
//         <a href="#home" className="navbar__logo">TrueErase</a>

//         {/* 4. Conditionally render the Navigation links in the center */}
//         {/* The middle links are hidden if the user is logged in */}
//         {!isLoggedIn && (
//           <div className="navbar__links">
//             <a href="#solutions">Solutions</a>
//             <a href="#Login">Download</a>
//             <a href="#verification">Verification</a>
//             <a href="#featues">Features</a>
//           </div>
//         )}

//         {/* 5. Conditionally render the Login/Profile on the far right */}
//         <div className="navbar__auth">
//           {isLoggedIn ? AuthenticatedAuthContent : UnauthenticatedAuthContent}
//         </div>
        
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import '../style/Navbar.css';

// 1. Modify the component to accept 'onLoginClick' AND 'isLoggedIn'
const Navbar = ({ onLoginClick, isLoggedIn }) => {
  // State to track if the page has been scrolled (unchanged)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event (unchanged)
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 2. Define the Authenticated Content
  const AuthenticatedAuthContent = (
    // Replace the name "User" with actual user name or initials if available
    <div className="navbar__profile">
      <span className="navbar__profile-name">Welcome, User</span>
      {/* Optionally add a Logout button or Profile icon here */}
    </div>
  );

  // 3. Define the Unauthenticated Content
  const UnauthenticatedAuthContent = (
    <>
      <button 
        onClick={onLoginClick} // This button handles the click for the Login page
        className="navbar__auth-login"
      >
        Login
      </button>
      <a href="#signup" className="btn btn--primary navbar__auth-signup">Sign Up</a>
    </>
  );

  return (
    // The 'scrolled' class is added conditionally based on the isScrolled state (unchanged)
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
        
        {/* Logo on the far left (unchanged) */}
        <a href="#home" className="navbar__logo">TrueErase</a>

        {/* 4. Conditionally render the Navigation links in the center */}
        {!isLoggedIn && (
          <div className="navbar__links">
             <a href="#features" className="nav-link">Features</a>
            <a href="#solutions" className="nav-link">Solutions</a>
           
        

         
            <button 
              onClick={onLoginClick} 
              className="nav-link download-link"
            >
              Download
            </button> 

            {/* 💥 CORRECTED: Use onClick={onLoginClick} to show the Login view for Verification */}
            <button 
              onClick={onLoginClick} 
              className="nav-link"
            >
              Verify Certificate
            </button> 
      
          </div>
        )}

        {/* 5. Conditionally render the Login/Profile on the far right */}
        <div className="navbar__auth">
          {isLoggedIn ? AuthenticatedAuthContent : UnauthenticatedAuthContent}
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;