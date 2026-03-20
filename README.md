![WhatsApp Image 2026-03-20 at 13 31 12](https://github.com/user-attachments/assets/ecddacab-ddbe-43a0-817b-bdc25ac836a6)
# 🛡️ GigShield AI – Parametric Insurance for Delivery Partners

GigShield AI is an **AI-powered parametric insurance platform** designed to protect delivery partners from income loss caused by real-world disruptions such as heavy rain, floods, poor air quality, curfews, strikes, and platform outages.

Instead of forcing workers to file long, delayed claims, GigShield AI uses **AI-based risk scoring, disruption thresholds, fraud detection, and automated payout logic** to deliver a faster, fairer, and smarter income protection system.

Built with ❤️ for India’s gig workers.

---

# 📌 Table of Contents

- [💡 Inspiration](#-inspiration)
- [🎯 What It Does](#-what-it-does)
- [🔄 How Everything Connects](#-how-everything-connects)
- [🏗️ System Architecture](#️-system-architecture)
- [🧠 Architecture Diagram Explanation](#-architecture-diagram-explanation)
- [👥 User Personas](#-user-personas)
- [🌍 Covered Disruptions](#-covered-disruptions)
- [🤖 AI Risk Assessment](#-ai-risk-assessment)
- [💰 Weekly Pricing Model](#-weekly-pricing-model)
- [🛡️ Adversarial Defense & Anti-Spoofing Strategy](#️-adversarial-defense--anti-spoofing-strategy)
- [💻 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚠️ Challenges We Ran Into](#️-challenges-we-ran-into)
- [🏆 Accomplishments We're Proud Of](#-accomplishments-were-proud-of)
- [📚 What We Learned](#-what-we-learned)
- [🔮 What’s Next](#-whats-next)
- [🚀 How to Run](#-how-to-run)
- [📊 Key Metrics](#-key-metrics)
- [🙏 Final Thoughts](#-final-thoughts)

---

# 💡 Inspiration

## The Spark

The idea for GigShield AI was born from a simple observation:

Every day, millions of delivery partners risk their livelihoods because of disruptions they cannot control.

Living in India, we have seen these struggles up close:

- During **Mumbai’s monsoon**, delivery partners ride through flooded roads, risking their safety, vehicles, and daily income. Many lose **3–5 working days per month**.
- During **Delhi winters**, hazardous **AQI levels above 400** force workers to choose between their health and their earnings.
- During **platform outages**, thousands of gig workers are left with zero income and no compensation.

The final push came when we learned that **78% of delivery partners have no income protection**, while traditional insurance systems often take **15–30 days** to process claims.

Then came the **Market Crash challenge**.

A coordinated fraud ring of **500+ delivery partners** exploited **GPS spoofing** to fake their locations and drain an insurance pool. That moment made one thing clear:

**Simple GPS verification was no longer enough.**

We needed to build a system that could:

- Automatically protect honest workers
- Detect fraud without punishing genuine users
- Adapt premiums based on live risk
- Deliver a premium digital experience that workers can trust

---

# 🎯 What It Does

GigShield AI is an **AI-powered parametric insurance platform** that protects delivery partners from income loss caused by disruptions.

## For the Honest Worker

| Feature | How It Works |
|--------|--------------|
| Smart Onboarding | Collects user details, platform, income, and working hours with validation |
| AI Risk Assessment | Analyzes weather, pollution, and platform stability to generate a risk score |
| Dynamic Pricing | Calculates weekly premium based on selected coverage and risk factors |
| Auto-Payouts | When a disruption threshold is met, payout is triggered automatically |
| Dashboard | Shows alerts, policy status, claim history, and protected income |

## For the Platform

| Feature | How It Works |
|--------|--------------|
| Fraud Detection | Multi-layer verification catches spoofing and suspicious claims |
| Fraud Ring Detection | Graph analysis identifies coordinated fraudulent patterns |
| Trust Scoring | Builds trust over time so genuine workers face less friction |
| Appeal System | Allows flagged claims to be reviewed rapidly with supporting proof |

---

# 🔄 How Everything Connects

GigShield AI connects the user interface, application logic, external data, AI decision-making, fraud checks, and payment processing into one flow.

```text
User → Frontend App → Risk Engine → Policy Logic → Fraud Checks → Payout Decision → Notification
