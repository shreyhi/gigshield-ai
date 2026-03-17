import React from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'
import GlassCard from './GlassCard'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: 'rgba(20, 20, 30, 0.9)',
        backdropFilter: 'blur(10px)',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <p style={{ color: '#fff' }}>{`${label} : ₹${payload[0].value}`}</p>
      </div>
    )
  }
  return null
}

const DashboardCharts = ({ weeklyData, riskTrends }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
      <GlassCard>
        <h3 style={{ marginBottom: '1.5rem' }}>Weekly Income Protection</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={weeklyData}>
            <defs>
              <linearGradient id="colorProtected" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4facfe" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#4facfe" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorClaims" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff6b9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ff6b9d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="week" stroke="rgba(255,255,255,0.3)" />
            <YAxis stroke="rgba(255,255,255,0.3)" />
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="protected" stroke="#4facfe" fillOpacity={1} fill="url(#colorProtected)" />
            <Area type="monotone" dataKey="claims" stroke="#ff6b9d" fillOpacity={1} fill="url(#colorClaims)" />
          </AreaChart>
        </ResponsiveContainer>
      </GlassCard>

      <GlassCard>
        <h3 style={{ marginBottom: '1.5rem' }}>Risk Score Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={riskTrends}>
            <XAxis dataKey="day" stroke="rgba(255,255,255,0.3)" />
            <YAxis stroke="rgba(255,255,255,0.3)" domain={[0, 1]} />
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="risk" 
              stroke="#a855f7" 
              strokeWidth={2}
              dot={{ fill: '#a855f7', strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </GlassCard>

      <GlassCard style={{ gridColumn: 'span 2' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>Claims History</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeklyData}>
            <XAxis dataKey="week" stroke="rgba(255,255,255,0.3)" />
            <YAxis stroke="rgba(255,255,255,0.3)" />
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="claims" fill="url(#colorClaims)" />
          </BarChart>
        </ResponsiveContainer>
      </GlassCard>
    </div>
  )
}

export default DashboardCharts