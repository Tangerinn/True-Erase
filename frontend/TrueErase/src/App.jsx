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

function App() {
  
  return (
    <>
    <Navbar/>
    <Hero/>
    <TrustSection/>
    <FeatureTabs/>
    <Solutions/>
    <Verification/>
    <GetStarted/>
    <Footer/>
    </>
  )
}

export default App
