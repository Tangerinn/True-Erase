import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './style/App.css'
import TrustSection from './components/TrustSection'
import FeatureTabs from './components/FeatureTabs'
import Solutions from './components/Solutions'
import Verification from './components/Verification'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'
import Login from './components/Login'

// Define constants for your views and a new state for the authenticated view
const VIEWS = {
  HOME: 'home',
  LOGIN: 'login',
  DASHBOARD: 'dashboard',
  VERIFICATION: 'verification' 
};

function App() {
  // State to track the current view
  const [currentView, setCurrentView] = useState(VIEWS.HOME);
  // State to track login status (Optional, but good practice)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 1. Define a function to switch the view (used by Navbar)
  const handleViewChange = (viewName) => {
    setCurrentView(viewName);
  };

  // 2. Define a function for successful login (passed to Login component)
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentView(VIEWS.DASHBOARD); // Switch to the post-login view
  };

  // ------------------------------------------------------------------
  // 3. Define content for each state
  // ------------------------------------------------------------------

  // Content for the unauthenticated Home page
  const HomeContent = (
    <>
      <Hero onDownloadClick={() => handleViewChange(VIEWS.LOGIN)} />
      <FeatureTabs />
      <Solutions />
      <TrustSection />
      {/* Keeping Verification here accessible on the homepage */}
      <Verification />
      <Footer />
    </>
  );

  // Content for the post-login Dashboard (Verification and GetStarted)
  const DashboardContent = (
    <>
      <GetStarted /> 

      {/* <Verification /> */}
      <Footer />
    </>
  );

  // ------------------------------------------------------------------
  // 4. Conditional Rendering Logic
  // ------------------------------------------------------------------

  const renderContent = () => {
    switch (currentView) {
      case VIEWS.LOGIN:
        // Pass the success handler to the Login component
        return <Login onLoginSuccess={handleLoginSuccess} />;

      case VIEWS.DASHBOARD:
        // Show only the post-login components
        return DashboardContent;

      case VIEWS.VERIFICATION:
        return <Verification />; 

      case VIEWS.HOME:
      default:
        // Show the standard homepage
        return HomeContent;
    }
  };

  return (
    <>
      {/* 💥 FIX: onVerifyClick prop is now correctly passed to the Navbar */}
      <Navbar
        onLoginClick={() => handleViewChange(VIEWS.LOGIN)}
        onVerifyClick={() => handleViewChange(VIEWS.VERIFICATION)} // <--- THIS LINE IS THE FIX
        isLoggedIn={isLoggedIn}
      />
      
      {/* Conditionally render the main content */}
      {renderContent()}
    </>
  );
}

export default App;