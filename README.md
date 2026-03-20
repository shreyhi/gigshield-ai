# 🛡️ GigShield AI

### AI-Powered Parametric Insurance for Delivery Partners

GigShield AI is an **AI-powered parametric insurance platform** designed to protect delivery partners from **income loss caused by real-world disruptions** such as heavy rain, floods, poor air quality, curfews, strikes, and platform outages.

Instead of forcing workers to go through long, delayed claim processes, GigShield AI uses **AI-based risk scoring, disruption thresholds, fraud detection, and automated payout logic** to create a system that is faster, fairer, and smarter.

Built with ❤️ for India’s gig workers.

---

## 📌 Table of Contents

* [Inspiration](#-inspiration)
* [What It Does](#-what-it-does)
* [How Everything Connects](#-how-everything-connects)
* [How We Built It](#-how-we-built-it)
* [System Architecture](#️-system-architecture)
* [User Personas](#-user-personas)
* [Challenges We Ran Into](#️-challenges-we-ran-into)
* [Accomplishments We're Proud Of](#-accomplishments-were-proud-of)
* [What We Learned](#-what-we-learned)
* [What’s Next](#-whats-next)
* [Key Metrics for Success](#-key-metrics-for-success)

---

## 💡 Inspiration

The idea for GigShield AI came from something very real and very visible around us:

Every day, millions of delivery partners risk their income because of disruptions they simply cannot control.

Living in India, these problems are easy to notice:

* During **Mumbai’s monsoon**, delivery partners ride through flooded roads, putting their safety, vehicles, and income at risk. Many lose **3–5 working days per month**.
* During **Delhi winters**, severe **AQI levels above 400** force workers to choose between protecting their health and earning money.
* During **platform outages**, thousands of gig workers suddenly lose their source of income with no safety net.

What made this even more serious was learning that **78% of delivery partners have no income protection**, while traditional insurance systems often take **15–30 days** to process claims.

Then came the **Market Crash challenge**.

A coordinated fraud ring of **500+ delivery partners** exploited **GPS spoofing** to fake locations and drain an insurance pool. That moment made one thing very clear:

> Simple GPS verification was no longer enough.

We wanted to build a system that could:

* Protect honest workers automatically
* Detect fraud without punishing genuine users
* Adjust premiums based on live risk
* Deliver a premium, trustworthy digital experience

---

## 🎯 What It Does

GigShield AI is an **AI-powered parametric insurance platform** that protects delivery partners from income loss caused by disruptions.

### For the Honest Worker

| Feature            | How It Works                                                                 |
| ------------------ | ---------------------------------------------------------------------------- |
| Smart Onboarding   | Collects user details, platform, income, and working hours with validation   |
| AI Risk Assessment | Analyzes weather, pollution, and platform stability to generate a risk score |
| Dynamic Pricing    | Calculates weekly premium based on selected coverage and risk factors        |
| Auto-Payouts       | When a disruption threshold is met, payout is triggered automatically        |
| Dashboard          | Shows alerts, policy status, claim history, and protected income             |

### For the Platform

| Feature              | How It Works                                                       |
| -------------------- | ------------------------------------------------------------------ |
| Fraud Detection      | Multi-layer verification catches spoofing and suspicious claims    |
| Fraud Ring Detection | Graph analysis identifies coordinated fraudulent patterns          |
| Trust Scoring        | Builds trust over time so genuine workers face less friction       |
| Appeal System        | Allows flagged claims to be reviewed rapidly with supporting proof |

---

## 🔄 How Everything Connects

GigShield AI brings together the user interface, application logic, external data, AI-based decision-making, fraud checks, and payout processing into one connected flow.

```text
User → Frontend App → Risk Engine → Policy Logic → Fraud Checks → Payout Decision → Notification
```

---

## 🛠️ How We Built It
 Tech Stack Decision

We chose **React + Vite** because it gave us speed and reusable components, **Framer Motion** for smooth animations that make the UI feel polished, and **Recharts** for responsive and attractive data visualization.

```text
src/
├── components/      # Reusable UI (GlassCard, Navbar, Charts)
├── pages/           # 5 main screens (Landing, Onboarding, RiskAssessment, PolicyCreation, Dashboard)
├── styles/          # CSS with glassmorphism effects
├── data/            # Mock data for demonstration
└── App.jsx          # Routing with React Router
```

```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}
```

### AI Risk Score Visualization

We created an animated radial progress bar to show the risk percentage, with color coding based on severity:

* Green (`<30%`) → Low risk
* Yellow (`30–60%`) → Medium risk
* Orange (`60–80%`) → High risk
* Red (`>80%`) → Critical risk

### Fraud Detection Algorithm

```python
def classify_authenticity(user_data):
    score = 0
    score += 25 if path_anomaly < 0.1 else -25
    score += 20 if max_speed < 50 else -20
    score += 20 if matches_cell_towers else -20
    score += 15 if has_matching_deliveries else -15
    
    if score > 60:
        return "GENUINE"
    if score < 30:
        return "FLAGGED_FRAUD"
    return "MANUAL_REVIEW"
```

---

## 🏗️ System Architecture

<p align="center">
  <img src="https://github.com/user-attachments/assets/ecddacab-ddbe-43a0-817b-bdc25ac836a6" alt="Architecture Design" width="400">
</p>

---

## 👥 User Personas

### Primary Persona: Rajesh Kumar

```text
👤 Demographics:
├── Age: 24 years
├── Occupation: Full-time Delivery Partner (Swiggy, Zomato)
├── Location: Mumbai (Andheri East)
├── Education: 12th Pass
├── Monthly Income: ₹18,000 - ₹22,000
└── Family: Lives with parents, 2 siblings

🎯 Goals:
├── Stable income to support family
├── Save for younger sister's marriage
├── Avoid income loss during monsoon
└── Simple, instant protection

😟 Pain Points:
├── Lost ₹5,200 last monsoon due to rains
├── Can't afford traditional insurance
├── No savings for emergencies
└── Platform doesn't provide benefits

💡 Motivations:
├── Wants financial security
├── Prefers automatic solutions
├── Needs trust and transparency
└── Values quick payouts
```

---

## ⚠️ Challenges We Ran Into

```text
1. Form Validation Without Backend

Challenge: We needed realistic form behavior without a backend.
Solution:
Implemented client-side validation using React state
Added clear conditional error rendering
Used localStorage to simulate persistence

2. Making Charts Responsive

Challenge: Charts had to work across desktop, tablet, and mobile.
Solution:
Used ResponsiveContainer
Set width to 100%
Chose readable chart heights for small screens

4. GPS Spoofing Defense

Challenge: Fraud rings could exploit simple location checks.

Solution:
Designed a multi-layer verification strategy
Combined GPS, speed, network, device, and behavior signals
Added ring detection logic conceptually

5. Animations That Don’t Overwhelm

Challenge: Too many animations can make the app feel gimmicky.

Solution:
Used subtle Framer Motion interactions
Added hover lift and smooth transitions
Focused on guidance rather than distraction
```

---

## 🏆 Accomplishments We're Proud Of

### 1. Complete 5-Page Prototype in Record Time

Built a fully functional, polished prototype with:

* Landing page with hero section and feature cards
* Onboarding form with validation
* AI risk assessment with animated loader
* Policy creation with interactive slider
* Dashboard with charts and claim history

### 2. Premium UI That Builds Confidence

Created a modern interface with a polished visual system that gives GigShield AI a premium feel and builds user confidence.

### 3. Realistic AI Simulation

Implemented an animated loader that says **"Analyzing environmental risks..."** and displays a detailed risk score with progress bars for:

* Weather Risk
* Traffic Risk
* Pollution Risk
* Platform Stability Risk

### 4. Adversarial Defense Strategy

Designed a sophisticated fraud detection system that:

* Differentiates genuine workers from spoofers using 6+ signals
* Detects coordinated fraud rings through graph analysis
* Balances security with user experience through trust scoring

### 5. Responsive Design

The prototype works smoothly across:

* Desktop (`1920×1080`)
* Tablet (`768×1024`)
* Mobile (`375×667`)

---

## 📚 What We Learned

### Technical Lessons

* Recharts is perfect for hackathon dashboards
* Responsive by default
* Easy to customize with gradients and tooltips
* Form validation requires thought
* Real-time feedback improves UX
* Clear error messages prevent frustration
* Fraud detection is about signals, not just GPS
* Multiple data points create robust verification
* Trust scoring rewards honest behavior

### Design Lessons

* Dark themes reduce eye strain
* Great for workers checking the app after long shifts
* Gradient accents create visual hierarchy
* Micro-interactions matter
* Card lifts and button glows signal interactivity
* Subtle animations guide without distracting
* Progress indicators build trust
* Animated loaders reassure users that the system is working
* Progress bars communicate risk clearly

### Strategic Lessons

* Understanding the user deeply matters
* Rajesh (Mumbai) and Priya (Delhi) have different risk profiles
* One size doesn’t fit all — location matters
* Defense should stay invisible for honest users
* Trusted workers can get auto-payouts
* Suspicious users can be routed for manual review without unnecessary friction
* AI is not magic — it depends on good data
* Risk scores are built from multiple weighted signals
* Fraud detection relies on pattern recognition

---

## 🔮 What’s Next

### Phase 2: Backend & APIs

```text
├── Node.js + Express API
├── PostgreSQL (Users, Policies, Claims)
├── Redis (Real-time risk caching)
├── Webhooks for platform status
└── UPI payment integration (Razorpay)
```

### Phase 3: ML Model Training

Train actual ML models using:

* Historical weather data (IMD API)
* Real AQI readings (CPCB API)
* Platform outage history
* Claim patterns (fraud vs. genuine)

### Phase 4: Mobile App

Build a React Native app with:

* Offline GPS caching
* Push notifications for alerts
* Photo upload for appeals

### Phase 5: Gamification

Add features that encourage positive behavior:

* Streak rewards for consistent protection
* Badges like *Early Adopter*, *Safety First*, and *30 Days Protected*
* Leaderboards for top protectors

### Phase 6: Expansion

Expand beyond delivery partners to include:

* E-rickshaw drivers
* Cab drivers
* Freelancers
* Small vendors

---

## 📊 Key Metrics for Success

| Metric                   | Phase 1 (Current) | Phase 2 Target | Phase 3 Goal |
| ------------------------ | ----------------- | -------------- | ------------ |
| Risk Prediction Accuracy | 85% (simulated)   | 92%            | 95%          |
| Fraud Detection Rate     | 95% (designed)    | 97%            | 99%          |
| False Positive Rate      | 2% (designed)     | 1.5%           | <1%          |
| Payout Speed (genuine)   | 10 min (designed) | 5 min          | 2 min        |
| User Onboarding Time     | 2 min             | 90 sec         | 60 sec       |

---

---

## 🛡️ Adversarial Defense & Anti-Spoofing Strategy

One of the biggest risks for a parametric insurance platform is false payout triggering through location spoofing. In our case, we designed GigShield AI with the assumption that simple GPS verification is no longer reliable enough on its own.

Our approach is to use a **multi-layer authenticity engine** that looks at a combination of movement patterns, delivery behavior, device consistency, and coordinated fraud signals before approving high-risk payout events.

### 1. The Differentiation

GigShield AI is designed to distinguish between a genuinely stranded delivery partner and a bad actor spoofing their location.

A **genuine worker** is likely to show signals such as:

- Consistent delivery history before the disruption
- Natural movement patterns leading into the affected area
- Reasonable speed and route behavior
- Device and network continuity
- Activity that matches platform-side delivery timing
- Environmental disruption signals that align with real operating conditions

A **spoofed claim** is more likely to show signals such as:

- Sudden location jumps into a red-alert zone
- Impossible travel speed or unrealistic path changes
- Device/network mismatch compared to past sessions
- No matching delivery activity near the claimed disruption window
- Multiple nearby accounts showing highly similar suspicious behavior
- Repeated high-risk payout attempts from linked users or devices

Instead of relying on one rule, the system combines these signals into a **fraud risk score** and classifies cases into:

- **Auto-approve** for highly trusted and consistent claims
- **Manual review** for uncertain or partially conflicting cases
- **Flagged fraud** for highly suspicious patterns

This helps us protect honest workers without making the system easy to exploit.

### 2. The Data

To detect coordinated fraud beyond basic GPS coordinates, GigShield AI analyzes multiple supporting data points:

- Historical route consistency
- Trip start and stop patterns
- Average movement speed
- App session continuity
- Platform delivery activity logs
- Order acceptance and completion timing
- Weather severity in the claimed zone
- Traffic disruption context
- Air quality conditions
- Claim frequency patterns
- Shared device or network clusters
- Repeated payout behavior across a connected group

This allows the system to detect not just individual spoofing attempts, but also **coordinated fraud rings** where multiple users behave in suspiciously similar ways.

### 3. The UX Balance

A strong fraud defense should not punish honest workers who may actually be facing bad weather, poor signal, or temporary network drops.

That is why GigShield AI uses a **graded response system** instead of instantly rejecting every suspicious case.

Our workflow is:

- **Low-risk claims** are processed automatically for fast payouts
- **Medium-risk claims** are temporarily held for lightweight review
- **High-risk claims** are flagged for deeper investigation
- **Trusted users with strong history** face less friction over time
- **Flagged users** can submit supporting proof through an appeal flow

To keep the experience fair, users are not immediately treated as fraudsters just because one signal fails. For example, a genuine worker in severe weather may have weak connectivity or incomplete GPS logs. In that case, the system checks surrounding signals such as past trust score, order history, device continuity, and regional disruption evidence before making a final decision.

This creates a balance between **security and worker dignity**:

- Honest users get quick protection
- Suspicious cases get careful review
- Coordinated abuse is harder to scale
- The liquidity pool stays protected for real claimants

### Why This Matters

The goal is not just to stop spoofing. The goal is to build a system that remains trustworthy under pressure.

By combining **behavioral signals, environmental context, trust scoring, and ring-level fraud analysis**, GigShield AI becomes far more resilient against adversarial attacks while still staying fair to the workers it is meant to protect.

---

## 🙏 Final Thoughts

GigShield AI is more than just an insurance idea.

It is a step toward building **fairer financial protection for gig workers**, especially those whose incomes are fragile and highly exposed to real-world disruptions.

Our goal was to imagine a system that feels:

* Fast
* Trustworthy
* Smart
* Worker-first

And this prototype is our first step in that direction.
