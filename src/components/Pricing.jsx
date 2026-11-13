import { useState, useRef, useEffect } from 'react'
import './Pricing.css'

const plans = [
  {
    name: 'Free',
    price: 0,
    period: 'month',
    description: 'Perfect for solo freelancers getting started.',
    features: [
      'Up to 3 active projects',
      'Unlimited reviewers',
      'Comment threads & annotations',
      'Version history (7 days)',
      'Email notifications',
      'Basic export (PDF)',
    ],
    cta: 'Start free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: 19,
    period: 'month',
    description: 'For growing teams who need more power.',
    features: [
      'Unlimited projects',
      'Unlimited reviewers',
      'Comment threads & annotations',
      'Unlimited version history',
      'Real-time collaboration',
      'Advanced export (PDF, PNG, Code)',
      'Custom branding',
      'Priority support',
      'API access',
      'SSO (SAML/OIDC)',
    ],
    cta: 'Get started',
    highlight: true,
  }
]

function PricingCard({ plan, index, billingCycle }) {
  const price = billingCycle === 'annual' ? Math.round(plan.price * 12 * 0.8) : plan.price
  const period = billingCycle === 'annual' ? 'year' : 'month'
  const savings = billingCycle === 'annual' ? 'Save 20%' : null

  return (
    <article className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}>
      {plan.highlight && (
        <div className="card-badge">
          <span>Most popular</span>
          {savings && <span className="badge-savings">{savings}</span>}
        </div>
      )}
      <header className="card-header">
        <h3 className="plan-name">{plan.name}</h3>
        <div className="plan-price">
          <span className="currency">$</span>
          <span className="amount">{price}</span>
          <span className="period">/{period}</span>
        </div>
        <p className="plan-desc">{plan.description}</p>
      </header>
      <ul className="plan-features">
        {plan.features.map((feature, i) => (
          <li key={i}>
            <svg className="feature-check" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <footer className="card-footer">
        <a href="#contact" className={`btn ${plan.highlight ? 'btn-primary' : 'btn-outline-accent'}`}>
          {plan.cta}
        </a>
      </footer>
    </article>
  )
}

function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly')
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.1 })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="pricing" ref={sectionRef} className="pricing" aria-label="Pricing">
      <div className="pricing-bg" aria-hidden="true">
        <div className="bg-glow pricing-glow" aria-hidden="true"></div>
      </div>
      <div className="container">
        <header className={`pricing-header ${visible ? 'visible' : ''}`}>
          <p className="section-label">Pricing</p>
          <h2 className="section-title">Simple, transparent pricing</h2>
          <p className="section-description">
            No hidden fees. No surprise charges. Cancel anytime. Demo pricing for assignment purposes.
          </p>
        </header>

        {/* Billing Toggle */}
        <div className="billing-toggle" role="group" aria-label="Billing period">
          <button
            type="button"
            className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('monthly')}
            aria-pressed={billingCycle === 'monthly'}
          >
            Monthly
          </button>
          <button
            type="button"
            className={`toggle-btn ${billingCycle === 'annual' ? 'active' : ''}`}
            onClick={() => setBillingCycle('annual')}
            aria-pressed={billingCycle === 'annual'}
          >
            Annual
            <span className="toggle-savings">Save 20%</span>
          </button>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} billingCycle={billingCycle} />
          ))}
        </div>

        <p className="pricing-note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          Demo pricing for assignment — not a real product.
        </p>
      </div>
    </section>
  )
}

export default Pricing