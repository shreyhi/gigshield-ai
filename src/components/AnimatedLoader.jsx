import React from 'react'
import { motion } from 'framer-motion'

const AnimatedLoader = ({ message = "Loading..." }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem'
    }}>
      <motion.div
        className="loader"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        style={{
          width: '60px',
          height: '60px',
          border: '4px solid rgba(255,255,255,0.1)',
          borderTopColor: '#4facfe',
          borderRightColor: '#a855f7',
          borderRadius: '50%',
          marginBottom: '1.5rem'
        }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        style={{
          color: 'rgba(255,255,255,0.8)',
          fontSize: '1.1rem',
          background: 'linear-gradient(135deg, #4facfe, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        {message}
      </motion.p>
    </div>
  )
}

export default AnimatedLoader