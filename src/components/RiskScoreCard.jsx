import React from 'react'
import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

const RiskScoreCard = ({ assessment }) => {
  const getRiskColor = (score) => {
    if (score < 0.3) return '#4ade80'
    if (score < 0.6) return '#fbbf24'
    if (score < 0.8) return '#f97316'
    return '#ef4444'
  }

  const getRiskLevel = (score) => {
    if (score < 0.3) return 'Low'
    if (score < 0.6) return 'Medium'
    if (score < 0.8) return 'High'
    return 'Critical'
  }

  return (
    <GlassCard accent={true} accentColor="purple">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Risk Assessment</h3>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              padding: '0.5rem 1rem',
              background: `linear-gradient(135deg, ${getRiskColor(assessment.riskScore)}40, transparent)`,
              borderRadius: '50px',
              border: `1px solid ${getRiskColor(assessment.riskScore)}`,
              color: getRiskColor(assessment.riskScore)
            }}
          >
            {getRiskLevel(assessment.riskScore)} Risk
          </motion.div>
        </div>

        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem 0'
        }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: `conic-gradient(${getRiskColor(assessment.riskScore)} ${assessment.riskScore * 360}deg, rgba(255,255,255,0.1) 0deg)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'rgba(10,10,15,0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column'
            }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: getRiskColor(assessment.riskScore) }}>
                {Math.round(assessment.riskScore * 100)}%
              </span>
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>Risk Score</span>
            </div>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>City</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{assessment.city}</div>
          </div>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Weekly Coverage</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>₹{assessment.weeklyCoverage}</div>
          </div>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Premium</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>₹{assessment.estimatedPremium}/week</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {Object.entries(assessment.indicators).map(([key, value]) => (
            <div key={key}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'rgba(255,255,255,0.7)', textTransform: 'capitalize' }}>
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </span>
                <span style={{ color: getRiskColor(value) }}>{Math.round(value * 100)}%</span>
              </div>
              <div className="progress-bar">
                <motion.div
                  className="progress-bar-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${value * 100}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                  style={{ backgroundColor: getRiskColor(value) }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  )
}

export default RiskScoreCard