import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import GlassCard from '../components/GlassCard'
import { FaUser, FaEnvelope, FaCity, FaBriefcase, FaRupeeSign, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

const Onboarding = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    city: '',
    platform: '',
    dailyIncome: '',
    workingHours: '',
    deliveryZone: ''
  })

  const [errors, setErrors] = useState({})

  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Pune', 'Hyderabad']
  const platforms = ['Swiggy', 'Zomato', 'Amazon', 'Flipkart', 'Zepto', 'Blinkit']

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.city) newErrors.city = 'City is required'
    if (!formData.platform) newErrors.platform = 'Platform is required'
    if (!formData.dailyIncome) {
      newErrors.dailyIncome = 'Daily income is required'
    } else if (isNaN(formData.dailyIncome) || formData.dailyIncome <= 0) {
      newErrors.dailyIncome = 'Daily income must be a positive number'
    }
    if (!formData.workingHours) {
      newErrors.workingHours = 'Working hours are required'
    } else if (formData.workingHours < 1 || formData.workingHours > 24) {
      newErrors.workingHours = 'Working hours must be between 1 and 24'
    }
    if (!formData.deliveryZone.trim()) newErrors.deliveryZone = 'Delivery zone is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Save to localStorage for demo
      localStorage.setItem('userData', JSON.stringify(formData))
      
      toast.success('Onboarding successful! Redirecting to risk assessment...', {
        duration: 3000,
        icon: '🚀'
      })
      
      setTimeout(() => {
        navigate('/risk-assessment')
      }, 2000)
    } else {
      toast.error('Please fix the errors in the form')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }

  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '6rem 2rem'
    }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Join GigShield AI</h2>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Full Name */}
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <FaUser style={{ color: '#4facfe' }} />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="glass-input"
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ color: '#ff6b9d', fontSize: '0.9rem', marginTop: '0.25rem' }}
                  >
                    {errors.fullName}
                  </motion.p>
                )}
              </div>

              {/* Email */}
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <FaEnvelope style={{ color: '#4facfe' }} />
                  <span>Email *</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="glass-input"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ color: '#ff6b9d', fontSize: '0.9rem', marginTop: '0.25rem' }}
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* City */}
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <FaCity style={{ color: '#4facfe' }} />
                  <span>City *</span>
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="glass-select"
                >
                  <option value="">Select your city</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                {errors.city && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ color: '#ff6b9d', fontSize: '0.9rem', marginTop: '0.25rem' }}
                  >
                    {errors.city}
                  </motion.p>
                )}
              </div>

              {/* Platform */}
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <FaBriefcase style={{ color: '#4facfe' }} />
                  <span>Delivery Platform *</span>
                </label>
                <select
                  name="platform"
                  value={formData.platform}
                  onChange={handleChange}
                  className="glass-select"
                >
                  <option value="">Select your platform</option>
                  {platforms.map(platform => (
                    <option key={platform} value={platform}>{platform}</option>
                  ))}
                </select>
                {errors.platform && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ color: '#ff6b9d', fontSize: '0.9rem', marginTop: '0.25rem' }}
                  >
                    {errors.platform}
                  </motion.p>
                )}
              </div>

              {/* Daily Income */}
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <FaRupeeSign style={{ color: '#4facfe' }} />
                  <span>Average Daily Income (₹) *</span>
                </label>
                <input
                  type="number"
                  name="dailyIncome"
                  value={formData.dailyIncome}
                  onChange={handleChange}
                  className="glass-input"
                  placeholder="Enter your daily income"
                  min="0"
                />
                {errors.dailyIncome && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ color: '#ff6b9d', fontSize: '0.9rem', marginTop: '0.25rem' }}
                  >
                    {errors.dailyIncome}
                  </motion.p>
                )}
              </div>

              {/* Working Hours */}
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <FaClock style={{ color: '#4facfe' }} />
                  <span>Working Hours Per Day *</span>
                </label>
                <input
                  type="number"
                  name="workingHours"
                  value={formData.workingHours}
                  onChange={handleChange}
                  className="glass-input"
                  placeholder="Enter working hours (1-24)"
                  min="1"
                  max="24"
                />
                {errors.workingHours && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ color: '#ff6b9d', fontSize: '0.9rem', marginTop: '0.25rem' }}
                  >
                    {errors.workingHours}
                  </motion.p>
                )}
              </div>

              {/* Delivery Zone */}
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <FaMapMarkerAlt style={{ color: '#4facfe' }} />
                  <span>Delivery Zone *</span>
                </label>
                <input
                  type="text"
                  name="deliveryZone"
                  value={formData.deliveryZone}
                  onChange={handleChange}
                  className="glass-input"
                  placeholder="Enter your primary delivery zone"
                />
                {errors.deliveryZone && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ color: '#ff6b9d', fontSize: '0.9rem', marginTop: '0.25rem' }}
                  >
                    {errors.deliveryZone}
                  </motion.p>
                )}
              </div>

              <motion.button
                type="submit"
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ marginTop: '1rem', padding: '1rem' }}
              >
                Start Risk Assessment
              </motion.button>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  )
}

export default Onboarding