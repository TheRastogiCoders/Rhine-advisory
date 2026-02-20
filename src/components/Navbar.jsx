import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [initiativesOpen, setInitiativesOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav-item-initiatives')) {
        setInitiativesOpen(false)
      }
    }
    if (initiativesOpen) {
      document.addEventListener('click', handleClickOutside)
    }
    return () => document.removeEventListener('click', handleClickOutside)
  }, [initiativesOpen])

  // Close Rhine Initiatives dropdown when mobile menu closes
  useEffect(() => {
    if (!isMobileMenuOpen) setInitiativesOpen(false)
  }, [isMobileMenuOpen])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Close menu on Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])

  const isActive = (path) => location.pathname === path

  // Use initiative-specific logos on Rhine PR Marketing and Rhine HR pages
  const logoSrc = location.pathname === '/rhine-pr-marketing'
    ? '/pr.png'
    : location.pathname === '/rhine-hr'
      ? '/hr.png'
      : '/logo.png'

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    setActiveSection(sectionId)
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first, then scroll
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      // If on home page, just scroll
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  const handleHomeClick = (e) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    setActiveSection('home')
    if (location.pathname !== '/') {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const mobileMenuContent = (
    <div className="navbar-mobile-portal">
      <div
        className="navbar-backdrop active"
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />
      <div className="navbar-menu-wrapper active">
        <div className="navbar-drawer-header">
          <Link to="/" className="navbar-drawer-logo" onClick={handleHomeClick} aria-label="Rhine Advisory home">
            <img src={logoSrc} alt="" />
          </Link>
          <button
            type="button"
            className="navbar-drawer-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <ul id="main-nav-menu" className="navbar-menu" role="navigation" aria-label="Main menu">
          <li>
            <a href="#" className={location.pathname === '/' && activeSection === 'home' ? 'active' : ''} onClick={handleHomeClick}>Home</a>
          </li>
          <li>
            <a href="#about-section" className={activeSection === 'about-section' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'about-section')}>About</a>
          </li>
          <li>
            <a href="#services-section" className={activeSection === 'services-section' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'services-section')}>Services</a>
          </li>
          <li>
            <a href="#who-we-serve-section" className={activeSection === 'who-we-serve-section' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'who-we-serve-section')}>Who We Serve</a>
          </li>
          <li>
            <a href="#contact-section" className={activeSection === 'contact-section' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'contact-section')}>Contact</a>
          </li>
          <li className="nav-item-initiatives">
            <button
              type="button"
              id="rhine-initiatives-trigger"
              className={`navbar-dropdown-trigger ${initiativesOpen ? 'open' : ''}`}
              onClick={() => setInitiativesOpen(!initiativesOpen)}
              aria-expanded={initiativesOpen}
              aria-haspopup="true"
              aria-controls="rhine-initiatives-menu"
              aria-label={initiativesOpen ? 'Close Rhine Initiatives submenu' : 'Open Rhine Initiatives submenu'}
            >
              Rhine Initiatives
              <span className="dropdown-chevron" aria-hidden="true">▼</span>
            </button>
            <ul id="rhine-initiatives-menu" className={`navbar-dropdown ${initiativesOpen ? 'open' : ''}`} role="menu" aria-labelledby="rhine-initiatives-trigger" aria-hidden={!initiativesOpen}>
              <li role="none">
                <Link to="/rhine-pr-marketing" role="menuitem" onClick={() => { setInitiativesOpen(false); setIsMobileMenuOpen(false); }}>Rhine PR & Marketing</Link>
              </li>
              <li role="none">
                <Link to="/rhine-hr" role="menuitem" onClick={() => { setInitiativesOpen(false); setIsMobileMenuOpen(false); }}>Rhine HR</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/research-insights" className={isActive('/research-insights') ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Research & Insights</Link>
          </li>
          <li>
            <Link to="/team" className={isActive('/team') ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Team</Link>
          </li>
          <li>
            <Link to="/careers" className={isActive('/careers') ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
          </li>
        </ul>
      </div>
    </div>
  )

  return (
    <>
      {isMobileMenuOpen && typeof document !== 'undefined' && document.body && createPortal(mobileMenuContent, document.body)}

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={handleHomeClick}>
            <img src={logoSrc} alt="Rhine Advisory" />
            <span></span>
          </Link>
          <button
            type="button"
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="main-nav-menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
          {/* Desktop: inline menu (hidden on mobile via CSS) */}
          <div className="navbar-menu-wrapper">
            <ul className="navbar-menu" role="navigation" aria-label="Main menu">
              <li><a href="#" className={location.pathname === '/' && activeSection === 'home' ? 'active' : ''} onClick={handleHomeClick}>Home</a></li>
              <li><a href="#about-section" className={activeSection === 'about-section' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'about-section')}>About</a></li>
              <li><a href="#services-section" className={activeSection === 'services-section' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'services-section')}>Services</a></li>
              <li><a href="#who-we-serve-section" className={activeSection === 'who-we-serve-section' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'who-we-serve-section')}>Who We Serve</a></li>
              <li><a href="#contact-section" className={activeSection === 'contact-section' ? 'active' : ''} onClick={(e) => handleNavClick(e, 'contact-section')}>Contact</a></li>
              <li className="nav-item-initiatives">
                <button type="button" id="rhine-initiatives-trigger-desk" className={`navbar-dropdown-trigger ${initiativesOpen ? 'open' : ''}`} onClick={() => setInitiativesOpen(!initiativesOpen)} aria-expanded={initiativesOpen} aria-haspopup="true" aria-controls="rhine-initiatives-menu-desk" aria-label={initiativesOpen ? 'Close Rhine Initiatives submenu' : 'Open Rhine Initiatives submenu'}>Rhine Initiatives <span className="dropdown-chevron" aria-hidden="true">▼</span></button>
                <ul id="rhine-initiatives-menu-desk" className={`navbar-dropdown ${initiativesOpen ? 'open' : ''}`} role="menu" aria-labelledby="rhine-initiatives-trigger-desk" aria-hidden={!initiativesOpen}>
                  <li role="none"><Link to="/rhine-pr-marketing" role="menuitem" onClick={() => setInitiativesOpen(false)}>Rhine PR & Marketing</Link></li>
                  <li role="none"><Link to="/rhine-hr" role="menuitem" onClick={() => setInitiativesOpen(false)}>Rhine HR</Link></li>
                </ul>
              </li>
              <li><Link to="/research-insights" className={isActive('/research-insights') ? 'active' : ''}>Research & Insights</Link></li>
              <li><Link to="/team" className={isActive('/team') ? 'active' : ''}>Team</Link></li>
              <li><Link to="/careers" className={isActive('/careers') ? 'active' : ''}>Careers</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

