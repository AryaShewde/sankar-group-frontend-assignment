import ContactForm from './ContactForm'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact" aria-label="Contact and demo request">
      <div className="page-container">
        <div className="contact-inner">
          <div className="contact-info">
            <p className="section-label">Get in touch</p>
            <h2 className="section-title">Let&apos;s make client feedback simpler.</h2>
            <p className="section-description">
              Tell us a little about your team and how you currently manage client reviews. We&apos;d love to show you how Proofdesk can help.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>hello@proofdesk.demo</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                    <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>
          <div className="form-card">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
