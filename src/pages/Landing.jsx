import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import GlassCard from '../components/GlassCard'
import { 
  FaRobot, FaShieldAlt, FaChartLine, 
  FaSun, FaCloudRain, FaWind, FaIndustry,
  FaUsers, FaBan, FaLock,
  FaApple, FaGoogle, FaAmazon
} from 'react-icons/fa'
import { MdOutlineSecurity, MdOutlineWarning } from 'react-icons/md'
import { BsFillCloudLightningRainFill } from 'react-icons/bs'

const Landing = () => {
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [disruptionsRef, disruptionsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const features = [
    {
      icon: <FaRobot />,
      title: "AI Risk Assessment",
      description: "Dynamic weekly premium calculation based on real-time risk analysis of weather, traffic, and platform stability.",
      accent: "blue"
    },
    {
      icon: <FaShieldAlt />,
      title: "Parametric Insurance",
      description: "Automatic payouts triggered by predefined events - no claims filing required. Get compensated instantly.",
      accent: "purple"
    },
    {
      icon: <MdOutlineSecurity />,
      title: "Fraud Detection",
      description: "Smart anomaly detection system prevents false claims and ensures fair compensation for genuine disruptions.",
      accent: "cyan"
    }
  ]

  const disruptions = {
    environmental: [
      { icon: <FaSun />, label: "Extreme Heat", value: ">40°C" },
      { icon: <FaCloudRain />, label: "Heavy Rain", value: ">50mm" },
      { icon: <BsFillCloudLightningRainFill />, label: "Floods", value: "Warning" },
      { icon: <FaIndustry />, label: "Pollution", value: "AQI>300" }
    ],
    social: [
      { icon: <FaUsers />, label: "Curfews", value: "Government" },
      { icon: <FaBan />, label: "Strikes", value: "Labor" },
      { icon: <FaLock />, label: "Zone Closures", value: "Security" }
    ],
    platform: [
      { icon: <FaApple />, label: "App Outages", value: ">1hr" },
      { icon: <FaGoogle />, label: "Payment Failures", value: "System" },
      { icon: <FaAmazon />, label: "Server Down", value: "AWS" }
    ]
  }

  return (
    <div>
      <Hero />

      {/* Features Section */}
      <section className="section" ref={featuresRef} style={{ background: 'rgba(0,0,0,0.2)' }}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            Why Choose GigShield AI?
          </motion.h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Disruption Types Section */}
      <section className="section" ref={disruptionsRef}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={disruptionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            We Cover All Disruptions
          </motion.h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {Object.entries(disruptions).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={disruptionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <GlassCard>
                  <h3 style={{ 
                    textTransform: 'capitalize',
                    marginBottom: '1.5rem',
                    color: index === 0 ? '#4facfe' : index === 1 ? '#a855f7' : '#ff6b9d'
                  }}>
                    {category}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 10 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '0.5rem',
                          borderRadius: '8px',
                          background: 'rgba(255,255,255,0.03)',
                          cursor: 'pointer'
                        }}
                      >
                        <div style={{ 
                          fontSize: '1.5rem',
                          color: index === 0 ? '#4facfe' : index === 1 ? '#a855f7' : '#ff6b9d'
                        }}>
                          {item.icon}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: '500' }}>{item.label}</div>
                          <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>{item.value}</div>
                        </div>
                        <MdOutlineWarning style={{ color: 'rgba(255,255,255,0.3)' }} />
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <GlassCard style={{ padding: '4rem' }}>
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '1.5rem' }}
            >
              Ready to Protect Your Income?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{ 
                fontSize: '1.2rem',
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '2rem',
                maxWidth: '600px',
                margin: '0 auto 2rem'
              }}
            >
              Join thousands of delivery partners who never worry about income loss due to disruptions.
            </motion.p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}
              onClick={() => window.location.href = '/onboarding'}
            >
              Get Protected Now
            </motion.button>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}

export default Landing