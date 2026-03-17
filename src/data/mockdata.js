export const mockDisruptions = {
  rainfall: 52,
  temperature: 41,
  aqi: 310,
  windSpeed: 25,
  humidity: 85
};

export const mockPolicy = {
  weeklyIncome: 6300,
  coverage: 3000,
  premium: 110,
  coveragePercentage: 48,
  policyId: 'GS-2024-001',
  status: 'Active',
  startDate: '2024-01-15',
  endDate: '2024-12-31'
};

export const mockRiskAssessment = {
  riskScore: 0.65,
  riskLevel: 'Medium',
  city: 'Chennai',
  weeklyCoverage: 3000,
  estimatedPremium: 110,
  indicators: {
    weatherRisk: 0.75,
    trafficRisk: 0.45,
    pollutionRisk: 0.85,
    platformStabilityRisk: 0.55
  },
  factors: {
    extremeHeat: true,
    heavyRain: true,
    floods: false,
    pollution: true
  }
};

export const mockClaimHistory = [
  {
    id: 1,
    date: '2024-01-20',
    triggerEvent: 'Heavy Rain Warning',
    payoutAmount: 850,
    status: 'Paid'
  },
  {
    id: 2,
    date: '2024-01-18',
    triggerEvent: 'Extreme Heat',
    payoutAmount: 650,
    status: 'Paid'
  },
  {
    id: 3,
    date: '2024-01-15',
    triggerEvent: 'AQI > 300',
    payoutAmount: 1200,
    status: 'Paid'
  },
  {
    id: 4,
    date: '2024-01-10',
    triggerEvent: 'Platform Outage',
    payoutAmount: 450,
    status: 'Pending'
  }
];

export const mockUser = {
  name: 'Rajesh Kumar',
  email: 'rajesh.k@example.com',
  city: 'Mumbai',
  platform: 'Swiggy',
  dailyIncome: 900,
  workingHours: 8,
  deliveryZone: 'Andheri East',
  totalProtected: 24500,
  claimsFiled: 4,
  activeWeeks: 8
};

export const mockWeeklyData = [
  { week: 'W1', protected: 4200, claims: 850 },
  { week: 'W2', protected: 4200, claims: 650 },
  { week: 'W3', protected: 4200, claims: 1200 },
  { week: 'W4', protected: 4200, claims: 450 },
  { week: 'W5', protected: 4200, claims: 0 },
  { week: 'W6', protected: 4200, claims: 950 },
  { week: 'W7', protected: 4200, claims: 750 },
  { week: 'W8', protected: 4200, claims: 1100 }
];

export const mockRiskTrends = [
  { day: 'Mon', risk: 0.65 },
  { day: 'Tue', risk: 0.58 },
  { day: 'Wed', risk: 0.72 },
  { day: 'Thu', risk: 0.68 },
  { day: 'Fri', risk: 0.55 },
  { day: 'Sat', risk: 0.45 },
  { day: 'Sun', risk: 0.42 }
];