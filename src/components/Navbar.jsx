import { useState } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const handleNavClick = (e, href) => {
    e.preventDefault()
    closeMenu()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#" className="logo" aria-label="Proofdesk home">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2"/>
          </svg>
          proofdesk
        </a>

        <nav aria-label="Main navigation">
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <ul id="mobile-menu" className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} onClick={e => handleNavClick(e, link.href)}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn btn-primary btn-sm" onClick={e => handleNavClick(e, '#contact')}>
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
