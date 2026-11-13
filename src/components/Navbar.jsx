import { useState, useEffect, useRef } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

function handleLinkClick(e, href) {
  e.preventDefault()
  const target = document.querySelector(href)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <header
      ref={navRef}
      className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileOpen ? 'mobile-open' : ''}`}
      role="banner"
    >
      <div className="navbar-inner">
        <a href="#" className="logo" aria-label="Proofdesk home">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2"/>
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          proofdesk
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <ul className="nav-list">
            {navLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={e => { handleLinkClick(e, link.href); closeMobile(); }}
                  className="nav-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary nav-cta" onClick={closeMobile}>
            Start free
          </a>
          <button
            className="hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="hamburger-line" aria-hidden="true"></span>
            <span className="hamburger-line" aria-hidden="true"></span>
            <span className="hamburger-line" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="mobile-menu" role="navigation" aria-label="Mobile navigation">
        <div className="mobile-menu-inner">
          <ul className="mobile-nav-list">
            {navLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={e => { handleLinkClick(e, link.href); closeMobile(); }}
                  className="mobile-nav-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary mobile-cta" onClick={closeMobile}>
            Start free
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar