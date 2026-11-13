import { useState } from 'react'
import './Pricing.css'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'For freelancers getting started with client feedback.',
    features: [
      '1 active project',
      'Centralized client feedback',
      'Basic revision tracking',
      'Client approval workflow',
    ],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    description: 'For freelancers and small creative teams scaling their workflow.',
    features: [
      'Unlimited active projects',
      'Centralized client feedback',
      'Revision tracking',
      'Client approval workflow',
    ],
    cta: 'Choose Pro',
    highlighted: true,
  },
]

function scrollToContact(e) {
  e.preventDefault()
  const target = document.querySelector('#contact')
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}

function Pricing() {
  return (
    <section id="pricing" className="pricing" aria-label="Pricing">
      <div className="page-container">
        <div className="pricing-header">
          <p className="section-label">Pricing</p>
          <h2 className="section-title">Simple, transparent pricing</h2>
          <p className="section-description">
            Start free and upgrade as your team grows. No hidden fees, no surprises.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map(plan => (
            <div key={plan.name} className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
              {plan.highlighted && <span className="popular-badge">Most Popular</span>}
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price-value">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>
              <ul className="plan-features">
                {plan.features.map(feature => (
                  <li key={feature} className="plan-feature">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary plan-cta" onClick={scrollToContact}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="pricing-note">* Demo pricing — not an actual commercial product.</p>
      </div>
    </section>
  )
}

export default Pricing
