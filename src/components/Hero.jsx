import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaShieldAlt, FaChartLine, FaRobot } from 'react-icons/fa'

const Hero = () => {
  const navigate = useNavigate()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  }

  return (
    <section className="hero" style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
        >
          <motion.h1 variants={itemVariants} style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
            GigShield AI – Protecting Gig Workers From Income Loss
          </motion.h1>
          
          <motion.p variants={itemVariants} style={{ 
            fontSize: '1.2rem', 
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '2rem',
            lineHeight: 1.8
          }}>
            AI-powered parametric insurance that automatically compensates delivery partners 
            during disruptions. Get protected against weather, platform outages, and more.
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/onboarding')}
            >
              Get Protected
            </motion.button>
            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/dashboard')}
            >
              View Dashboard
            </motion.button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '3rem',
              justifyContent: 'center',
              marginTop: '4rem'
            }}
          >
            {[
              { icon: <FaShieldAlt />, value: '10K+', label: 'Protected Workers' },
              { icon: <FaChartLine />, value: '₹2.5Cr', label: 'Claims Paid' },
              { icon: <FaRobot />, value: '99.9%', label: 'AI Accuracy' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ fontSize: '2rem', color: '#4facfe', marginBottom: '0.5rem' }}>
                  {stat.icon}
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                  {stat.value}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.6)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero