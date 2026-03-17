import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import GlassCard from '../components/GlassCard'
import RiskScoreCard from '../components/RiskScoreCard'
import AnimatedLoader from '../components/AnimatedLoader'
import { mockRiskAssessment } from '../data/mockdata'

const RiskAssessment = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [assessment, setAssessment] = useState(null)

  useEffect(() => {
    // Simulate AI analysis
    const timer = setTimeout(() => {
      setAssessment(mockRiskAssessment)
      setLoading(false)
      toast.success('Risk analysis complete!')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleProceed = () => {
    navigate('/policy-creation')
  }

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <GlassCard>
          <AnimatedLoader message="Analyzing environmental risks..." />
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>
              Checking weather patterns, pollution levels, and platform stability...
            </p>
          </div>
        </GlassCard>
      </div>
    )
  }

  return (
    <div style={{ 
      minHeight: '100vh',
      padding: '6rem 2rem'
    }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
      
         <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>AI Risk Assessment Results</h2>
          
          <RiskScoreCard assessment={assessment} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ marginTop: '2rem', textAlign: 'center' }}
          >
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleProceed}
              style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}
            >
              Proceed to Policy Creation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default RiskAssessment