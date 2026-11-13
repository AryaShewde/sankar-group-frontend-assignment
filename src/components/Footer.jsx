import { useEffect, useState } from 'react'
import './Footer.css'

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  const footerLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="page-container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#" className="logo" aria-label="Proofdesk home">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2"/>
              </svg>
              proofdesk
            </a>
            <p className="footer-tagline">Client feedback, without the back-and-forth.</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="footer-links">
              {footerLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} onClick={e => handleLinkClick(e, link.href)}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Proofdesk. Built as a frontend assignment demo.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
