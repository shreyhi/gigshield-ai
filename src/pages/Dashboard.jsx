import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import GlassCard from '../components/GlassCard'
import DashboardCharts from '../components/DashboardCharts'
import { 
  FaUser, FaShieldAlt, FaRupeeSign, 
  FaClock, FaExclamationTriangle, FaHistory,
  FaCheckCircle, FaTimesCircle
} from 'react-icons/fa'
import { 
  mockUser, 
  mockPolicy, 
  mockDisruptions, 
  mockClaimHistory,
  mockWeeklyData,
  mockRiskTrends 
} from '../data/mockdata'

const Dashboard = () => {
  const [user] = useState(mockUser)
  const [policy] = useState(mockPolicy)
  const [disruptions] = useState(mockDisruptions)
  const [claims] = useState(mockClaimHistory)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const getRiskLevel = (aqi) => {
    if (aqi < 100) return { level: 'Good', color: '#4ade80' }
    if (aqi < 200) return { level: 'Moderate', color: '#fbbf24' }
    if (aqi < 300) return { level: 'Unhealthy', color: '#f97316' }
    return { level: 'Hazardous', color: '#ef4444' }
  }

  const riskLevel = getRiskLevel(disruptions.aqi)

  return (
    <div style={{ 
      minHeight: '100vh',
      padding: '6rem 2rem'
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '2rem'
          }}>
            <h2>Dashboard</h2>
            <div style={{ 
              display: 'flex', 
              gap: '1rem',
              alignItems: 'center'
            }}>
              <GlassCard style={{ padding: '0.5rem 1rem' }}>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {currentTime.toLocaleTimeString()}
                </span>
              </GlassCard>
            </div>
          </div>

          {/* User Profile Card */}
          <GlassCard style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4facfe, #a855f7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>
                {user.name.charAt(0)}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ marginBottom: '0.25rem' }}>{user.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>{user.email}</p>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <div>
                    <span style={{ color: 'rgba(255,255,255,0.5)' }}>Platform: </span>
                    <span style={{ color: '#4facfe' }}>{user.platform}</span>
                  </div>
                  <div>
                    <span style={{ color: 'rgba(255,255,255,0.5)' }}>City: </span>
                    <span style={{ color: '#4facfe' }}>{user.city}</span>
                  </div>
                  <div>
                    <span style={{ color: 'rgba(255,255,255,0.5)' }}>Zone: </span>
                    <span style={{ color: '#4facfe' }}>{user.deliveryZone}</span>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4ade80' }}>
                  ₹{user.totalProtected}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.5)' }}>Total Protected</div>
              </div>
            </div>
          </GlassCard>

          {/* Stats Grid */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {[
              { icon: <FaShieldAlt />, label: 'Policy Status', value: policy.status, color: '#4ade80' },
              { icon: <FaRupeeSign />, label: 'Coverage Amount', value: `₹${policy.coverage}`, color: '#4facfe' },
              { icon: <FaClock />, label: 'Weekly Premium', value: `₹${policy.premium}`, color: '#a855f7' },
              { icon: <FaHistory />, label: 'Claims Filed', value: user.claimsFiled, color: '#ff6b9d' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <GlassCard style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', color: stat.color, marginBottom: '0.5rem' }}>
                    {stat.icon}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.25rem' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: stat.color }}>
                    {stat.value}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Disruption Alerts */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Active Alerts</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <GlassCard accent={true} accentColor="orange">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <FaExclamationTriangle style={{ color: '#f97316', fontSize: '2rem' }} />
                    <div>
                      <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Heavy Rain Warning</div>
                      <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                        {disruptions.rainfall}mm rainfall expected
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <GlassCard accent={true} accentColor="red">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <FaExclamationTriangle style={{ color: '#ef4444', fontSize: '2rem' }} />
                    <div>
                      <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Pollution Alert</div>
                      <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                        AQI: {disruptions.aqi} - {riskLevel.level}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <GlassCard accent={true} accentColor="yellow">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <FaExclamationTriangle style={{ color: '#fbbf24', fontSize: '2rem' }} />
                    <div>
                      <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Extreme Heat</div>
                      <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                        {disruptions.temperature}°C temperature
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>

          {/* Charts */}
          <DashboardCharts weeklyData={mockWeeklyData} riskTrends={mockRiskTrends} />

          {/* Claim History Table */}
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Recent Claims</h3>
            <GlassCard>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', color: 'rgba(255,255,255,0.7)' }}>Date</th>
                    <th style={{ padding: '1rem', textAlign: 'left', color: 'rgba(255,255,255,0.7)' }}>Trigger Event</th>
                    <th style={{ padding: '1rem', textAlign: 'right', color: 'rgba(255,255,255,0.7)' }}>Payout Amount</th>
                    <th style={{ padding: '1rem', textAlign: 'center', color: 'rgba(255,255,255,0.7)' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {claims.map((claim) => (
                    <motion.tr
                      key={claim.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      <td style={{ padding: '1rem' }}>{new Date(claim.date).toLocaleDateString()}</td>
                      <td style={{ padding: '1rem' }}>{claim.triggerEvent}</td>
                      <td style={{ padding: '1rem', textAlign: 'right', fontWeight: 'bold' }}>
                        ₹{claim.payoutAmount}
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '50px',
                          background: claim.status === 'Paid' ? 'rgba(74, 222, 128, 0.1)' : 'rgba(251, 191, 36, 0.1)',
                          color: claim.status === 'Paid' ? '#4ade80' : '#fbbf24',
                          border: `1px solid ${claim.status === 'Paid' ? '#4ade80' : '#fbbf24'}`
                        }}>
                          {claim.status === 'Paid' ? <FaCheckCircle /> : <FaTimesCircle />}
                          {claim.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard