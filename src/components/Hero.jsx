import { useState, useEffect } from 'react'
import './Hero.css'

// Dashboard tab data
const dashboardTabs = [
  {
    id: 'feedback',
    label: 'Feedback',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    content: (
      <div className="tab-content">
        <div className="comment-thread">
          <div className="comment-row">
            <div className="comment-avatar avatar-a" aria-hidden="true"></div>
            <div className="comment-bubble">
              <div className="comment-meta">
                <span className="comment-author">Sarah Chen</span>
                <span className="comment-time">2 min ago</span>
              </div>
              <div className="comment-text">The hero spacing feels tight on mobile. Can we add more breathing room?</div>
              <div className="comment-actions">
                <button className="comment-action">Reply</button>
                <button className="comment-action">Resolve</button>
              </div>
            </div>
          </div>
          <div className="comment-row">
            <div className="comment-avatar avatar-b" aria-hidden="true"></div>
            <div className="comment-bubble">
              <div className="comment-meta">
                <span className="comment-author">Marcus Webb</span>
                <span className="comment-time">15 min ago</span>
              </div>
              <div className="comment-text">Loving the new dashboard layout. The dark theme works beautifully.</div>
              <div className="comment-actions">
                <button className="comment-action">Reply</button>
                <button className="comment-action">Resolve</button>
              </div>
            </div>
          </div>
          <div className="comment-row">
            <div className="comment-avatar avatar-c" aria-hidden="true"></div>
            <div className="comment-bubble">
              <div className="comment-meta">
                <span className="comment-author">Priya Patel</span>
                <span className="comment-time">1 hour ago</span>
              </div>
              <div className="comment-text">Found a minor alignment issue on the pricing cards at 1024px breakpoint.</div>
              <div className="comment-actions">
                <button className="comment-action">Reply</button>
                <button className="comment-action">Resolve</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'revisions',
    label: 'Revisions',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M23 4v6h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 20v-6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    content: (
      <div className="tab-content">
        <div className="revision-list">
          <div className="revision-item current">
            <div className="revision-badge">Current</div>
            <div className="revision-info">
              <span className="revision-title">Homepage v3.2 — Hero Redesign</span>
              <span className="revision-meta">Updated 2 min ago • 3 comments</span>
            </div>
            <div className="revision-status status-approved">Approved</div>
          </div>
          <div className="revision-item">
            <div className="revision-badge">v3.1</div>
            <div className="revision-info">
              <span className="revision-title">Homepage v3.1 — Spacing Adjustments</span>
              <span className="revision-meta">Updated 1 hour ago • 2 comments</span>
            </div>
            <div className="revision-status status-changes">Changes Requested</div>
          </div>
          <div className="revision-item">
            <div className="revision-badge">v3.0</div>
            <div className="revision-info">
              <span className="revision-title">Homepage v3.0 — Initial Draft</span>
              <span className="revision-meta">Updated 3 hours ago • 5 comments</span>
            </div>
            <div className="revision-status status-approved">Approved</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'approvals',
    label: 'Approvals',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    content: (
      <div className="tab-content">
        <div className="approval-card">
          <div className="approval-header">
            <div className="approval-project">
              <div className="approval-thumb">
                <div className="thumb-gradient"></div>
              </div>
              <div>
                <span className="approval-title">Website — Homepage</span>
                <span className="approval-sub">v3.2 • Ready for final sign-off</span>
              </div>
            </div>
            <div className="approval-badge approved">Approved</div>
          </div>
          <div className="approval-progress">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '100%' }}></div>
            </div>
            <div className="progress-labels">
              <span>3 of 3 reviewers</span>
              <span>All approved</span>
            </div>
          </div>
          <div className="approval-reviewers">
            <div className="reviewer">
              <div className="reviewer-avatar avatar-a" aria-hidden="true"></div>
              <span>Sarah Chen</span>
              <svg className="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="reviewer">
              <div className="reviewer-avatar avatar-b" aria-hidden="true"></div>
              <span>Marcus Webb</span>
              <svg className="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="reviewer">
              <div className="reviewer-avatar avatar-c" aria-hidden="true"></div>
              <span>Priya Patel</span>
              <svg className="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
          <button className="btn btn-primary approve-final">Finalize & Close</button>
        </div>
      </div>
    )
  }
]

function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState('feedback')

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="hero" aria-label="Introduction">
      {/* Hero Background */}
      <div className="hero-bg">
        <img
          src="/hero-poster.webp"
          alt=""
          className="hero-poster"
          aria-hidden="true"
        />
        <div className="video-overlay" aria-hidden="true"></div>
        <div className="hero-glow glow-1" aria-hidden="true"></div>
        <div className="hero-glow glow-2" aria-hidden="true"></div>
      </div>

      <div className="hero-inner">
        {/* Left: Editorial Content */}
        <div className={`hero-content ${loaded ? 'visible' : ''}`}>
          <p className="eyebrow">For freelancers & creative teams</p>
          <h1>Client feedback,<br/>without the<br/>back-and-forth.</h1>
          <p className="hero-desc">
            Proofdesk gives you a clean workspace to collect comments, track revisions, and get approvals — instead of hunting through email threads and chat messages.
          </p>
          <div className="cta-group">
            <a href="#contact" className="btn btn-primary">
              Start your workspace
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#how-it-works" className="btn btn-ghost">See how it works</a>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>14-day free trial</span>
            </div>
          </div>
        </div>

        {/* Right: Framed Dashboard */}
        <div className={`hero-visual ${loaded ? 'visible' : ''}`}>
          <div className="dashboard-frame">
            {/* Frame Chrome */}
            <div className="frame-chrome">
              <div className="frame-dots">
                <span className="dot dot-close" aria-hidden="true"></span>
                <span className="dot dot-minimize" aria-hidden="true"></span>
                <span className="dot dot-maximize" aria-hidden="true"></span>
              </div>
              <div className="frame-address">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>app.proofdesk.io / workspace / website-redesign</span>
              </div>
              <div className="frame-actions">
                <button className="frame-btn" aria-label="Share">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="6" cy="19" r="3" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M13 19a5 5 0 0 1-5-5M13 5a5 5 0 0 1 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
                <button className="frame-btn" aria-label="Settings">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="dashboard-body">
              {/* Sidebar */}
              <aside className="sidebar">
                <div className="sidebar-brand">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>proofdesk</span>
                </div>
                <nav className="sidebar-nav" aria-label="Dashboard sections">
                  <ul>
                    <li>
                      <button className="sidebar-item active" aria-current="page">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="1.5"/>
                          <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                        <span>Dashboard</span>
                      </button>
                    </li>
                    <li>
                      <button className="sidebar-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5"/>
                          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                        <span>Projects</span>
                      </button>
                    </li>
                    <li>
                      <button className="sidebar-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                        <span>Messages</span>
                        <span className="sidebar-badge">3</span>
                      </button>
                    </li>
                    <li>
                      <button className="sidebar-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                        <span>Settings</span>
                      </button>
                    </li>
                  </ul>
                </nav>
                <div className="sidebar-footer">
                  <div className="user-mini">
                    <div className="avatar avatar-sm avatar-a" aria-hidden="true"></div>
                    <div className="user-mini-info">
                      <span className="user-mini-name">Alex K.</span>
                      <span className="user-mini-role">Owner</span>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <main className="main-content">
                {/* Tab Bar */}
                <div className="tab-bar" role="tablist" aria-label="Feedback views">
                  {dashboardTabs.map(tab => (
                    <button
                      key={tab.id}
                      role="tab"
                      aria-selected={activeTab === tab.id}
                      aria-controls={`panel-${tab.id}`}
                      id={`tab-${tab.id}`}
                      className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Tab Panels */}
                <div className="tab-panels">
                  {dashboardTabs.map(tab => (
                    <div
                      key={tab.id}
                      role="tabpanel"
                      id={`panel-${tab.id}`}
                      aria-labelledby={`tab-${tab.id}`}
                      className={`tab-panel ${activeTab === tab.id ? 'active' : ''}`}
                      hidden={activeTab !== tab.id}
                    >
                      {tab.content}
                    </div>
                  ))}
                </div>
              </main>
            </div>
          </div>

          {/* Floating notification - single, subtle */}
          <div className="float-notification" aria-live="polite" aria-atomic="true">
            <div className="float-icon success" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="float-content">
              <span className="float-title">Project approved</span>
              <span className="float-sub">Website Redesign • Just now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero