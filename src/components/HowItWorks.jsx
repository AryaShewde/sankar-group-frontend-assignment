import { useRef, useEffect, useState } from 'react'
import './HowItWorks.css'

const steps = [
  {
    number: '01',
    title: 'Upload',
    description: 'Share your deliverable with your client by uploading it to Proofdesk. Drag-and-drop files, import from Figma, or paste a link.',
    illustration: (
      <div className="step-illustration upload-illustration">
        <div className="si-window">
          <div className="si-chrome">
            <div className="si-dots"><span></span><span></span><span></span></div>
            <div className="si-address">proofdesk.io / new</div>
          </div>
          <div className="si-content">
            <div className="si-dropzone">
              <svg className="si-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="17 8 12 3 7 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="3" x2="12" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="si-text">Drag & drop your design files</span>
              <span className="si-hint">Supports Figma, Sketch, PDF, PNG, JPG</span>
            </div>
            <div className="si-files">
              <div className="si-file">
                <div className="si-file-icon pdf"></div>
                <div className="si-file-info">
                  <span className="si-file-name">Homepage_Design_v3.fig</span>
                  <span className="si-file-size">2.4 MB</span>
                </div>
                <svg className="si-check" viewBox="0 0 24 24" fill="none" aria-hidden="true"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="si-file">
                <div className="si-file-icon img"></div>
                <div className="si-file-info">
                  <span className="si-file-name">Hero_Section.png</span>
                  <span className="si-file-size">847 KB</span>
                </div>
                <svg className="si-check" viewBox="0 0 24 24" fill="none" aria-hidden="true"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
            <button className="btn btn-primary si-submit">Send for Review</button>
          </div>
        </div>
      </div>
    )
  },
  {
    number: '02',
    title: 'Review',
    description: 'Clients leave contextual comments directly on your work. Threaded discussions keep feedback organized. Real-time updates mean no refreshing.',
    illustration: (
      <div className="step-illustration review-illustration">
        <div className="si-window">
          <div className="si-chrome">
            <div className="si-dots"><span></span><span></span><span></span></div>
            <div className="si-address">proofdesk.io / p / website-redesign</div>
          </div>
          <div className="si-content review-content">
            <div className="ri-canvas">
              <div className="ri-mockup">
                <div className="ri-comment-marker" style={{ top: '20%', left: '15%' }}></div>
                <div className="ri-comment-marker" style={{ top: '55%', right: '20%' }}></div>
                <div className="ri-comment-marker active" style={{ top: '75%', left: '30%' }}></div>
              </div>
            </div>
            <div className="ri-thread">
              <div className="ri-comment active">
                <div className="ri-avatar"></div>
                <div className="ri-bubble">
                  <div className="ri-meta">
                    <span className="ri-author">Sarah Chen</span>
                    <span className="ri-time">Just now</span>
                  </div>
                  <div className="ri-text">The hero headline feels cramped on mobile. Can we increase line-height and add 24px bottom padding?</div>
                  <div className="ri-actions">
                    <button className="ri-action">Reply</button>
                    <button className="ri-action resolve">Resolve</button>
                  </div>
                </div>
              </div>
              <div className="ri-comment">
                <div className="ri-avatar alt"></div>
                <div className="ri-bubble">
                  <div className="ri-meta">
                    <span className="ri-author">Marcus Webb</span>
                    <span className="ri-time">5 min ago</span>
                  </div>
                  <div className="ri-text">Approved the color palette. The dark theme works perfectly for our brand.</div>
                  <div className="ri-actions">
                    <button className="ri-action">Reply</button>
                    <button className="ri-action resolve">Resolve</button>
                  </div>
                </div>
              </div>
              <div className="ri-comment">
                <div className="ri-avatar"></div>
                <div className="ri-bubble">
                  <div className="ri-meta">
                    <span className="ri-author">Priya Patel</span>
                    <span className="ri-time">12 min ago</span>
                  </div>
                  <div className="ri-text">Spacing fix deployed. Please review the updated hero section.</div>
                  <div className="ri-actions">
                    <button className="ri-action">Reply</button>
                    <button className="ri-action resolve">Resolve</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    number: '03',
    title: 'Approve',
    description: 'Stakeholders approve with one click — no account needed. Magic links, timestamped records, and automatic handoff to your team.',
    illustration: (
      <div className="step-illustration approve-illustration">
        <div className="si-window">
          <div className="si-chrome">
            <div className="si-dots"><span></span><span></span><span></span></div>
            <div className="si-address">proofdesk.io / approve / abc123</div>
          </div>
          <div className="si-content approve-content">
            <div className="ai-header">
              <div className="ai-project">
                <div className="ai-thumb">
                  <div className="thumb-gradient"></div>
                </div>
                <div>
                  <span className="ai-title">Website Redesign — Homepage</span>
                  <span className="ai-sub">Version 3.2 • Ready for approval</span>
                </div>
              </div>
              <div className="ai-badge approved">Approved</div>
            </div>
            <div className="ai-progress">
              <div className="ai-progress-bar">
                <div className="ai-fill" style={{ width: '100%' }}></div>
              </div>
              <div className="ai-progress-meta">
                <span>3 of 3 stakeholders approved</span>
                <span>All reviews completed</span>
              </div>
            </div>
            <div className="ai-reviewers">
              <div className="ai-reviewer">
                <div className="ai-avatar"></div>
                <div className="ai-reviewer-info">
                  <span className="ai-reviewer-name">Sarah Chen</span>
                  <span className="ai-reviewer-role">Creative Director</span>
                </div>
                <svg className="ai-check" viewBox="0 0 24 24" fill="none" aria-hidden="true"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="ai-reviewer">
                <div className="ai-avatar alt"></div>
                <div className="ai-reviewer-info">
                  <span className="ai-reviewer-name">Marcus Webb</span>
                  <span className="ai-reviewer-role">Founder</span>
                </div>
                <svg className="ai-check" viewBox="0 0 24 24" fill="none" aria-hidden="true"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="ai-reviewer">
                <div className="ai-avatar"></div>
                <div className="ai-reviewer-info">
                  <span className="ai-reviewer-name">Priya Patel</span>
                  <span className="ai-reviewer-role">Lead Designer</span>
                </div>
                <svg className="ai-check" viewBox="0 0 24 24" fill="none" aria-hidden="true"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
            <div className="ai-finalize">
              <div className="ai-finalize-text">
                <span className="ai-finalize-title">All set!</span>
                <span className="ai-finalize-sub">Project approved and ready for handoff.</span>
              </div>
              <button className="btn btn-primary">Finalize & Export</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
]

function StepCard({ step, index, total }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), index * 150)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <article
      ref={ref}
      className={`step-card ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="step-layout">
        <div className="step-number-col">
          <div className="step-ring">
            <span className="step-number">{step.number}</span>
          </div>
          {index < total - 1 && (
            <div className="step-connector" aria-hidden="true"></div>
          )}
        </div>
        <div className="step-content">
          <h3 className="step-title">{step.title}</h3>
          <p className="step-desc">{step.description}</p>
        </div>
        <div className="step-visual" aria-hidden="true">
          {step.illustration}
        </div>
      </div>
    </article>
  )
}

function HowItWorks() {
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
    <section id="how-it-works" ref={sectionRef} className="how-it-works" aria-label="How it works">
      <div className="hiw-bg" aria-hidden="true">
        <div className="bg-glow hiw-glow-1" aria-hidden="true"></div>
        <div className="bg-glow hiw-glow-2" aria-hidden="true"></div>
      </div>
      <div className="container">
        <header className={`hiw-header ${visible ? 'visible' : ''}`}>
          <p className="section-label">Process</p>
          <h2 className="section-title">From upload to approval in three steps</h2>
          <p className="section-description">
            Proofdesk replaces the chaotic back-and-forth with a clear, trackable workflow that your clients will actually enjoy using.
          </p>
        </header>

        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} total={steps.length} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks