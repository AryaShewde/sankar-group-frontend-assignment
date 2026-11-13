import { useState } from 'react'
import './ContactForm.css'

const initialForm = {
  name: '',
  email: '',
  company: '',
  message: '',
}

const initialErrors = {
  name: '',
  email: '',
  message: '',
}

function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const newErrors = { ...initialErrors }
    let valid = true

    if (!form.name.trim()) {
      newErrors.name = 'Please enter your name.'
      valid = false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email address.'
      valid = false
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.'
      valid = false
    }

    if (!form.message.trim()) {
      newErrors.message = 'Please share a few details about your needs.'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validate()) {
      setSubmitting(true)
      await new Promise(resolve => setTimeout(resolve, 1200))
      setSubmitting(false)
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="contact-success" role="alert">
        <div className="success-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
            <polyline points="9 12 11 14 15 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3>Thanks for reaching out!</h3>
        <p>This is a frontend demo — no actual submission was made. In a real application, your message would be sent to our team and we&apos;d follow up within 24 hours.</p>
        <button type="button" className="btn btn-secondary" onClick={() => { setForm(initialForm); setSubmitted(false); setErrors(initialErrors); }}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name <span className="required">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`form-input ${errors.name ? 'error' : ''}`}
          />
          {errors.name && <span id="name-error" className="form-error" role="alert">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address <span className="required">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`form-input ${errors.email ? 'error' : ''}`}
          />
          {errors.email && <span id="email-error" className="form-error" role="alert">{errors.email}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="company">Company or Team</label>
          <input
            type="text"
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Optional"
            className="form-input"
          />
        </div>
      </div>

      <div className="form-group full-width">
        <label htmlFor="message">Message <span className="required">*</span></label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about how you currently manage client reviews..."
          rows="4"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
        />
        {errors.message && <span id="message-error" className="form-error" role="alert">{errors.message}</span>}
      </div>

      <button type="submit" className="btn btn-primary btn-submit" disabled={submitting}>
        {submitting ? 'Sending...' : 'Request a Demo'}
      </button>
    </form>
  )
}

export default ContactForm