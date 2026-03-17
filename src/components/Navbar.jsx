import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaShieldAlt, FaUser, FaTachometerAlt, FaFileAlt } from 'react-icons/fa'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Home', icon: <FaShieldAlt /> },
    { path: '/onboarding', label: 'Onboarding', icon: <FaUser /> },
    { path: '/dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
  ]

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1rem 2rem',
        background: scrolled ? 'rgba(10, 10, 15, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <FaShieldAlt style={{ color: '#4facfe', fontSize: '2rem' }} />
            <span style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #4facfe 0%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              GigShield AI
            </span>
          </motion.div>
        </Link>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} style={{ textDecoration: 'none' }}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: location.pathname === item.path ? '#4facfe' : 'rgba(255,255,255,0.7)',
                  transition: 'color 0.3s ease'
                }}
              >
                {item.icon}
                <span>{item.label}</span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    style={{
                      position: 'absolute',
                      bottom: -20,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: 'linear-gradient(135deg, #4facfe, #a855f7)'
                    }}
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar