import React from 'react'
import { motion } from 'framer-motion'

const GlassCard = ({ 
  children, 
  accent = false,
  accentColor = 'blue',
  className = '',
  style = {},
  onClick,
  hoverEffect = true
}) => {
  return (
    <motion.div
      className={`glass-card ${accent ? `accent-${accentColor}` : ''} ${className}`}
      whileHover={hoverEffect ? { 
        y: -5,
        transition: { type: 'spring', stiffness: 300 }
      } : {}}
      style={{
        ...style
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard