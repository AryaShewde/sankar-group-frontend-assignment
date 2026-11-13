import { useRef, useEffect, useState } from 'react'
import './Features.css'

const features = [
  {
    number: '01',
    title: 'Centralized Feedback',
    description: 'Every comment, annotation, and request lives in one place. No more digging through email threads, Slack messages, or scattered screenshots.',
    graphic: (
      <div className="feature-graphic">
        <div className="graphic-window">
          <div className="graphic-chrome">
            <div className="graphic-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div className="graphic-content feedback-graphic">
            <div className="gf-sidebar">
              <div className="gf-nav-item active"><span></span>Feedback</div>
              <div className="gf-nav-item"><span></span>Revisions</div>
              <div className="gf-nav-item"><span></span>Approvals</div>
            </div>
            <div className="gf-main">
              <div className="gf-comment">
                <div className="gf-avatar"></div>
                <div className="gf-bubble">
                  <div className="gf-author">Sarah Chen</div>
                  <div className="gf-text">Move the CTA 20px lower</div>
                </div>
              </div>
              <div className="gf-comment">
                <div className="gf-avatar alt"></div>
                <div className="gf-bubble">
                  <div className="gf-author">Marcus Webb</div>
                  <div className="gf-text">Typography scale needs adjustment</div>
                </div>
              </div>
              <div className="gf-comment pending">
                <div className="gf-avatar"></div>
                <div className="gf-bubble">
                  <div className="gf-author">You</div>
                  <div className="gf-text">Updated — please review</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="graphic-glow"></div>
      </div>
    )
  },
  {
    number: '02',
    title: 'Revision Tracking',
    description: 'Automatic version history with visual diffs. See exactly what changed between versions, who requested it, and when it was resolved.',
    graphic: (
      <div className="feature-graphic">
        <div className="graphic-window">
          <div className="graphic-chrome">
            <div className="graphic-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div className="graphic-content revision-graphic">
            <div className="rg-timeline">
              <div className="rg-version current">
                <div className="rg-badge">v3.2</div>
                <div className="rg-info">
                  <span className="rg-title">Hero Redesign Final</span>
                  <span className="rg-meta">2 min ago • Approved</span>
                </div>
                <span className="rg-status approved">✓</span>
              </div>
              <div className="rg-connector"></div>
              <div className="rg-version">
                <div className="rg-badge">v3.1</div>
                <div className="rg-info">
                  <span className="rg-title">Spacing Adjustments</span>
                  <span className="rg-meta">1 hr ago • Changes req.</span>
                </div>
                <span className="rg-status pending">⟳</span>
              </div>
              <div className="rg-connector"></div>
              <div className="rg-version">
                <div className="rg-badge">v3.0</div>
                <div className="rg-info">
                  <span className="rg-title">Initial Draft</span>
                  <span className="rg-meta">3 hrs ago • Approved</span>
                </div>
                <span className="rg-status approved">✓</span>
              </div>
            </div>
            <div className="rg-diff">
              <div className="rg-diff-header">
                <span>v3.1 → v3.2</span>
                <span>12 changes</span>
              </div>
              <div className="rg-diff-lines">
                <div className="rg-line removed">- padding: 2rem 1.5rem;</div>
                <div className="rg-line added">+ padding: 3rem 2rem;</div>
                <div className="rg-line">  border-radius: 16px;</div>
                <div className="rg-line added">+ box-shadow: 0 24px 64px;</div>
              </div>
            </div>
          </div>
        </div>
        <div className="graphic-glow"></div>
      </div>
    )
  },
  {
    number: '03',
    title: 'One-Click Approvals',
    description: 'Stakeholders approve with a single click. No accounts needed for reviewers — just a secure magic link. Every approval is timestamped and recorded.',
    graphic: (
      <div className="feature-graphic">
        <div className="graphic-window">
          <div className="graphic-chrome">
            <div className="graphic-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div className="graphic-content approval-graphic">
            <div className="ag-card">
              <div className="ag-thumb">
                <div className="thumb-gradient"></div>
              </div>
              <div className="ag-info">
                <span className="ag-title">Website Redesign</span>
                <span className="ag-sub">Homepage v3.2 — Ready for sign-off</span>
              </div>
            </div>
            <div className="ag-progress">
              <div className="ag-progress-bar">
                <div className="ag-fill" style={{ width: '100%' }}></div>
              </div>
              <div className="ag-progress-meta">
                <span>3 of 3 approved</span>
                <span>All stakeholders signed</span>
              </div>
            </div>
            <div className="ag-reviewers">
              <div className="ag-reviewer">
                <div className="ag-avatar"></div>
                <span>Sarah Chen</span>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="ag-reviewer">
                <div className="ag-avatar alt"></div>
                <span>Marcus Webb</span>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="ag-reviewer">
                <div className="ag-avatar"></div>
                <span>Priya Patel</span>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
            <button className="btn btn-primary ag-finalize">Finalize Project</button>
          </div>
        </div>
        <div className="graphic-glow"></div>
      </div>
    )
  }
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), index * 120)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [index])

  const isEven = index % 2 === 0

  return (
    <article
      ref={ref}
      className={`feature-card ${visible ? 'visible' : ''} ${isEven ? 'reverse' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="feature-layout">
        <div className="feature-text">
          <div className="feature-number">{feature.number}</div>
          <h2 className="feature-title">{feature.title}</h2>
          <p className="feature-desc">{feature.description}</p>
        </div>
        <div className="feature-visual" aria-hidden="true">
          {feature.graphic}
        </div>
      </div>
    </article>
  )
}

function Features() {
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
    <section id="features" ref={sectionRef} className="features" aria-label="Features">
      <div className="features-bg" aria-hidden="true">
        <div className="bg-glow features-glow" aria-hidden="true"></div>
      </div>
      <div className="container">
        <header className={`features-header ${visible ? 'visible' : ''}`}>
          <p className="section-label">What you get</p>
          <h2 className="section-title">Built for how creative teams actually work</h2>
          <p className="section-description">
            Three focused capabilities that replace the chaotic feedback loop with a clear, trackable process.
          </p>
        </header>

        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features