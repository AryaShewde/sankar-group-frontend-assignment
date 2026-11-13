import './Features.css'

const features = [
  {
    title: 'Centralised Feedback',
    description: 'Keep client comments and feedback organised alongside the work being reviewed — instead of hunting through scattered email threads.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    title: 'Revision Tracking',
    description: 'Understand exactly which version is being reviewed and what changes still need attention — every revision documented in one place.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <polyline points="1 4 1 10 7 10"/>
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
      </svg>
    ),
  },
  {
    title: 'One-Click Approvals',
    description: 'Give clients a clear way to approve completed work with a single click, eliminating ambiguous "looks good" conversations.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
]

function Features() {
  return (
    <section id="features" className="features" aria-label="Features">
      <div className="page-container">
        <div className="features-header">
          <p className="section-label">Features</p>
          <h2 className="section-title">Everything you need to close projects faster</h2>
          <p className="section-description">
            Proofdesk replaces chaos with clarity — giving you and your clients one shared space to review, discuss, and approve work.
          </p>
        </div>

        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.title} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
