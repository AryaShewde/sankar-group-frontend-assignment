import ContactForm from './ContactForm'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact" aria-label="Contact and demo request">
      <div className="contact-bg" aria-hidden="true">
        <div className="bg-glow contact-glow-1" aria-hidden="true"></div>
        <div className="bg-glow contact-glow-2" aria-hidden="true"></div>
        <div className="contact-pattern" aria-hidden="true"></div>
      </div>
      <div className="container">
        <div className="contact-inner">
          {/* Left: Visual */}
          <div className="contact-visual" aria-hidden="true">
            <div className="visual-composition">
              <div className="vc-shape vc-shape-1"></div>
              <div className="vc-shape vc-shape-2"></div>
              <div className="vc-shape vc-shape-3"></div>
              <div className="vc-shape vc-shape-4"></div>
              <div className="vc-window">
                <div className="vc-chrome">
                  <div className="vc-dots"><span></span><span></span><span></span></div>
                </div>
                <div className="vc-content">
                  <div className="vc-stat">
                    <span className="vc-number">847</span>
                    <span className="vc-label">Projects delivered</span>
                  </div>
                  <div className="vc-stat">
                    <span className="vc-number">12.3k</span>
                    <span className="vc-label">Comments resolved</span>
                  </div>
                  <div className="vc-stat">
                    <span className="vc-number">3.2x</span>
                    <span className="vc-label">Faster approvals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrapper">
            <div className="form-header">
              <p className="section-label">Get started</p>
              <h2 className="section-title">Let&apos;s make client feedback simpler.</h2>
              <p className="section-description">
                Tell us about your team and how you currently manage reviews. We&apos;ll set up a personalized demo.
              </p>
            </div>
            <div className="form-card">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact