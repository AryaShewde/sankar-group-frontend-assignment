import './HowItWorks.css'

const steps = [
  {
    number: '01',
    title: 'Upload',
    description: 'Share your deliverable with your client by uploading it to Proofdesk.',
  },
  {
    number: '02',
    title: 'Review',
    description: 'Collect feedback and track requested changes as they come in.',
  },
  {
    number: '03',
    title: 'Approve',
    description: 'Get a clear, recorded approval when the work is done.',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works" aria-label="How it works">
      <div className="page-container">
        <div className="how-it-works-header">
          <p className="section-label">How it works</p>
          <h2 className="section-title">Three steps from upload to approval</h2>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={step.number} className="step">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
              {index < steps.length - 1 && (
                <svg className="step-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
