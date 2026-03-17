import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Onboarding from './pages/Onboarding'
import RiskAssessment from './pages/RiskAssessment'
import PolicyCreation from './pages/PolicyCreation'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <div className="app">
        <div className="gradient-bg">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/risk-assessment" element={<RiskAssessment />} />
            <Route path="/policy-creation" element={<PolicyCreation />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </AnimatePresence>
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'rgba(20, 20, 30, 0.9)',
              backdropFilter: 'blur(10px)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.1)',
            },
          }}
        />
      </div>
    </Router>
  )
}

export default App