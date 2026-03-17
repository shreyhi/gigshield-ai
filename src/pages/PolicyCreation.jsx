import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import GlassCard from '../components/GlassCard'
import PolicyCard from '../components/PolicyCard'
import { mockPolicy } from '../data/mockdata'
import { FaShieldAlt, FaRupeeSign, FaClock, FaCheckCircle } from 'react-icons/fa'

const PolicyCreation = () => {
  const navigate = useNavigate()
  const [policy, setPolicy] = useState(mockPolicy)
  const [step, setStep] = useState(1)

  const handleActivate = () => {
    toast.success('Policy activated successfully!', {
      duration: 3000,
      icon: '✅'
    })
    setTimeout(() => {
      navigate('/dashboard')
    }, 2000)
  }

  const handleModify = () => {
    setStep(2)
    toast('Adjust your coverage using the slider', {
      icon: '🎯'
    })
  }

  const handleConfirmModify = () => {
    setStep(3)
    toast.success('Coverage updated successfully!')
    setTimeout(() => {
      setStep(1)
    }, 2000)
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
          {/* Progress Steps */}
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '3rem',
            position: 'relative'
          }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <motion.div
                  animate={{
                    backgroundColor: step >= i ? '#4facfe' : 'rgba(255,255,255,0.1)',
                    scale: step === i ? 1.1 : 1
                  }}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.5rem',
                    border: step >= i ? '2px solid #4facfe' : '2px solid rgba(255,255,255,0.1)',
                    background: step >= i ? 'rgba(79, 172, 254, 0.1)' : 'transparent'
                  }}
                >
                  {step > i ? <FaCheckCircle style={{ color: '#4facfe' }} /> : i}
                </motion.div>
                <div style={{ color: step >= i ? '#4facfe' : 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                  {i === 1 ? 'Review' : i === 2 ? 'Adjust' : 'Confirm'}
                </div>
              </div>
            ))}
            {/* Progress Line */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '10%',
              right: '10%',
              height: '2px',
              background: 'rgba(255,255,255,0.1)',
              zIndex: 0
            }}>
              <motion.div
                animate={{ width: `${((step - 1) / 2) * 100}%` }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #4facfe, #a855f7)',
                  borderRadius: '2px'
                }}
              />
            </div>
          </div>

          {/* Policy Card */}
          <PolicyCard 
            policy={policy} 
            onActivate={handleActivate}
            onModify={handleModify}
          />

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ marginTop: '2rem' }}
          >
            <GlassCard>
              <h3 style={{ marginBottom: '1rem' }}>Coverage Details</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <FaShieldAlt style={{ color: '#4facfe', fontSize: '1.5rem', marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Weather Events</div>
                  <div style={{ fontWeight: 'bold' }}>100% Covered</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <FaClock style={{ color: '#a855f7', fontSize: '1.5rem', marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Platform Outages</div>
                  <div style={{ fontWeight: 'bold' }}>24/7 Protection</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <FaRupeeSign style={{ color: '#ff6b9d', fontSize: '1.5rem', marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Instant Payout</div>
                  <div style={{ fontWeight: 'bold' }}>Within 1 Hour</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Modification Confirmation */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ marginTop: '2rem', textAlign: 'center' }}
            >
              <GlassCard accent={true} accentColor="green">
                <FaCheckCircle style={{ color: '#4ade80', fontSize: '3rem', marginBottom: '1rem' }} />
                <h3>Coverage Updated!</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>
                  Your policy has been modified successfully. You can now activate it.
                </p>
              </GlassCard>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default PolicyCreation