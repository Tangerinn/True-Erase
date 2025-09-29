// import React, { useState, useEffect } from 'react';
// import { onAuthStateChanged, signOut } from 'firebase/auth';
// import { auth } from './firebase';

// // Import all your components
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import FeatureTabs from './components/FeatureTabs';
// import Solutions from './components/Solutions';
// import TrustSection from './components/TrustSection';
// import Verification from './components/Verification';
// import GetStarted from './components/GetStarted';
// import Footer from './components/Footer';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Dashboard from './components/Dashboard'; 

// // Import your app's stylesheet
// import './style/App.css';

// // Define constants for all possible views
// const VIEWS = {
//   HOME: 'home',
//   LOGIN: 'login',
//   SIGNUP: 'signup',
//   DASHBOARD: 'dashboard',
//   VERIFICATION: 'verification' 
// };

// function App() {
//   const [currentView, setCurrentView] = useState(VIEWS.HOME);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Checks the user's login state when the app loads
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setIsLoggedIn(true);
//         setCurrentView(VIEWS.DASHBOARD);
//       } else {
//         setIsLoggedIn(false);
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   // Handlers for changing views and state
//   const handleViewChange = (viewName) => {
//     setCurrentView(viewName);
//   };

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//     setCurrentView(VIEWS.DASHBOARD);
//   };

//   const handleSignupSuccess = () => {
//     setIsLoggedIn(true);
//     setCurrentView(VIEWS.DASHBOARD);
//   };

//   const handleLogout = () => {
//     signOut(auth).then(() => {
//       setIsLoggedIn(false);
//       setCurrentView(VIEWS.HOME);
//     });
//   };

//   // --- Content blocks ---
//   const HomeContent = (
//     <>
//       <Hero onDownloadClick={() => handleViewChange(VIEWS.LOGIN)} />
//       <FeatureTabs />
//       <Solutions />
//       <TrustSection />
//       <Footer />
//     </>
//   );

//   const DashboardContent = (
//     <>
//       <GetStarted /> 
//       <Footer />
//     </>
//   );

//   // --- Main rendering logic ---
//   const renderContent = () => {
//     switch (currentView) {
//       case VIEWS.LOGIN:
//         return <Login onLoginSuccess={handleLoginSuccess} />;
//       case VIEWS.SIGNUP:
//         return <Signup onSignupSuccess={handleSignupSuccess} />;
//       case VIEWS.DASHBOARD:
//         return DashboardContent;
//       case VIEWS.VERIFICATION:
//         return <Verification />; 
//       case VIEWS.HOME:
//       default:
//         return HomeContent;

//         case VIEWS.DASHBOARD:
//   return <Dashboard />;
//     }
//   };

//   return (
//     <>
//       <Navbar
//         onHomeClick={() => handleViewChange(VIEWS.HOME)}
//         onLoginClick={() => handleViewChange(VIEWS.LOGIN)}
//         onVerifyClick={() => handleViewChange(VIEWS.VERIFICATION)}
//         onSignupClick={() => handleViewChange(VIEWS.SIGNUP)}
//         onLogout={handleLogout}
//         isLoggedIn={isLoggedIn}
//       />
      
//       <main>
//         {renderContent()}
//       </main>
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';

// Import all your components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureTabs from './components/FeatureTabs';
import Solutions from './components/Solutions';
import TrustSection from './components/TrustSection';
import Verification from './components/Verification';
// The 'GetStarted' component is no longer needed here
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard'; // This is the new dashboard

// Import your app's stylesheet
import './style/App.css';

// Define constants for all possible views
const VIEWS = {
  HOME: 'home',
  LOGIN: 'login',
  SIGNUP: 'signup',
  DASHBOARD: 'dashboard',
  VERIFICATION: 'verification' 
};

function App() {
  const [currentView, setCurrentView] = useState(VIEWS.HOME);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setCurrentView(VIEWS.DASHBOARD);
      } else {
        setUser(null);
        setCurrentView(VIEWS.HOME);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleViewChange = (viewName) => {
    setCurrentView(viewName);
  };

  const handleLogout = () => {
    signOut(auth);
  };

  const renderContent = () => {
    switch (currentView) {
      case VIEWS.LOGIN:
        return <Login onLoginSuccess={() => setCurrentView(VIEWS.DASHBOARD)} />;
      case VIEWS.SIGNUP:
        return <Signup onSignupSuccess={() => setCurrentView(VIEWS.DASHBOARD)} />;
      case VIEWS.DASHBOARD:
        // This now correctly renders your new Dashboard component
        return <Dashboard />; 
      case VIEWS.VERIFICATION:
        return <Verification />; 
      case VIEWS.HOME:
      default:
        return (
          <>
            <Hero onDownloadClick={() => handleViewChange(VIEWS.LOGIN)} />
            <FeatureTabs />
            <Solutions />
            <TrustSection />
            <Footer />
          </>
        );
    }
  };

  return (
    <>
      <Navbar
        onHomeClick={() => handleViewChange(VIEWS.HOME)}
        onLoginClick={() => handleViewChange(VIEWS.LOGIN)}
        onVerifyClick={() => handleViewChange(VIEWS.VERIFICATION)}
        onSignupClick={() => handleViewChange(VIEWS.SIGNUP)}
        onLogout={handleLogout}
        isLoggedIn={!!user} // Use the user object to determine login state
      />
      
      <main>
        {renderContent()}
      </main>
    </>
  );
}

export default App;