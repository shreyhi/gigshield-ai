import React from 'react'
import { motion } from 'framer-motion'

const FeatureCard = ({ icon, title, description, accent = 'blue' }) => {
  return (
    <motion.div
      className={`glass-card accent-${accent}`}
      whileHover={{ 
        scale: 1.05,
        transition: { type: 'spring', stiffness: 300 }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        padding: '2rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer'
      }}
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: '3rem',
          marginBottom: '1.5rem',
          color: accent === 'blue' ? '#4facfe' : 
                 accent === 'purple' ? '#a855f7' :
                 accent === 'cyan' ? '#00f2fe' : '#ff6b9d'
        }}
      >
        {icon}
      </motion.div>
      
      <h3 style={{ 
        fontSize: '1.5rem',
        marginBottom: '1rem',
        background: 'linear-gradient(135deg, #fff, #a5b4fc)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        {title}
      </h3>
      
      <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
        {description}
      </p>

      <motion.div
        style={{
          marginTop: '1.5rem',
          width: '50px',
          height: '2px',
          background: `linear-gradient(90deg, ${
            accent === 'blue' ? '#4facfe' : 
            accent === 'purple' ? '#a855f7' :
            accent === 'cyan' ? '#00f2fe' : '#ff6b9d'
          }, transparent)`
        }}
        initial={{ width: 0 }}
        whileInView={{ width: '50px' }}
        transition={{ delay: 0.3 }}
      />
    </motion.div>
  )
}

export default FeatureCard