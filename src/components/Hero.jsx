import './Hero.css'

function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-inner page-container">
        <div className="hero-content">
          <p className="eyebrow">For freelancers & creative teams</p>
          <h1>Client feedback, without the back-and-forth.</h1>
          <p className="hero-desc">
            Proofdesk gives you a clean workspace to collect comments, track revisions, and get approvals — instead of hunting through email threads and chat messages.
          </p>
          <div className="cta-group">
            <a href="#contact" className="btn btn-primary">Start your workspace</a>
            <a href="#how-it-works" className="btn btn-secondary">See how it works</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="dashboard-preview" role="img" aria-label="Proofdesk dashboard showing a project awaiting client approval with comments and revision tracking">
            <div className="notification-pill">
              <span className="notification-dot"></span>
              Approved
            </div>
            <div className="dashboard-header">
              <span className="dot dot-red" aria-hidden="true"></span>
              <span className="dot dot-yellow" aria-hidden="true"></span>
              <span className="dot dot-green" aria-hidden="true"></span>
            </div>
            <div className="dashboard-body">
              <aside className="sidebar" aria-label="Project navigation">
                <div className="sidebar-logo">proofdesk</div>
                <nav>
                  <ul>
                    <li><span className="sidebar-item active">Website Redesign</span></li>
                    <li><span className="sidebar-item">Brand Identity</span></li>
                    <li><span className="sidebar-item">Landing Page</span></li>
                    <li><span className="sidebar-item">Mobile App UI</span></li>
                  </ul>
                </nav>
              </aside>
              <main className="main-area">
                <div className="project-card">
                  <div className="card-row">
                    <span className="card-title">Website Redesign — Homepage</span>
                    <span className="status-badge">Awaiting Review</span>
                  </div>
                  <div className="card-meta">
                    <span className="meta-item">
                      <span className="meta-dot" aria-hidden="true"></span>
                      3 revisions
                    </span>
                    <span className="meta-item">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                      </svg>
                      5 comments
                    </span>
                  </div>
                </div>

                <div className="comment-thread">
                  <div className="comment-row">
                    <div className="comment-avatar" aria-hidden="true"></div>
                    <div className="comment-content">
                      <div className="comment-author">Sarah M.</div>
                      <div className="comment-text">Can we adjust the spacing on the hero section?</div>
                    </div>
                  </div>
                  <div className="comment-row">
                    <div className="comment-avatar" aria-hidden="true"></div>
                    <div className="comment-content">
                      <div className="comment-author">Alex K.</div>
                      <div className="comment-text">Looks great overall — just minor tweak needed.</div>
                    </div>
                  </div>
                </div>

                <button className="approve-btn" type="button">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Approve
                </button>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
