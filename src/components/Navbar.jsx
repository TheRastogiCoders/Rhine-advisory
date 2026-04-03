import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink, useLocation } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [initiativesOpen, setInitiativesOpen] = useState(false)
  const location = useLocation()
  const mainNavMenuRef = useRef(null)

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

  // Lock body scroll when mobile menu is open; body class lowers FAB z-index behind blur
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      document.body.classList.add('mobile-nav-open')
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      document.body.classList.remove('mobile-nav-open')
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      document.body.classList.remove('mobile-nav-open')
    }
  }, [isMobileMenuOpen])

  // Keep “Home” at top — WebKit may restore list scroll between opens or after layout
  useEffect(() => {
    if (!isMobileMenuOpen) return
    const el = mainNavMenuRef.current
    if (!el) return
    el.scrollTop = 0
    const t = window.setTimeout(() => {
      el.scrollTop = 0
    }, 0)
    return () => clearTimeout(t)
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

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setInitiativesOpen(false)
  }, [location.pathname])

  const logoSrc =
    location.pathname === '/rhine-pr-marketing'
    ? '/pr.png'
    : location.pathname === '/rhine-hr'
      ? '/hr.png'
      : '/logo.png'
  const navClassName = ({ isActive }) => (isActive ? 'active' : '')

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {typeof document !== 'undefined' &&
        isMobileMenuOpen &&
        createPortal(
          <div
            className="navbar-backdrop active"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />,
          document.body
        )}
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="Rhine Advisory home">
          <img src={logoSrc} alt="Rhine Advisory" />
        </Link>

        <button
          type="button"
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="main-nav-menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        <div
          className={`navbar-menu-wrapper ${isMobileMenuOpen ? 'active' : ''}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <ul
            ref={mainNavMenuRef}
            id="main-nav-menu"
            className="navbar-menu"
            role="navigation"
            aria-label="Main menu"
          >
            <li><NavLink to="/" end className={navClassName}>Home</NavLink></li>
            <li><NavLink to="/about" className={navClassName}>About</NavLink></li>
            <li><NavLink to="/services" className={navClassName}>Services</NavLink></li>
            <li><NavLink to="/who-we-serve" className={navClassName}>Who We Serve</NavLink></li>
            <li className="nav-item-initiatives">
              <button
                type="button"
                className={`navbar-dropdown-trigger ${initiativesOpen ? 'open' : ''}`}
                onClick={() => setInitiativesOpen((value) => !value)}
                aria-expanded={initiativesOpen}
                aria-haspopup="true"
              >
                Rhine Initiatives
                <svg className="dropdown-chevron" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4.5 6 7.5 9 4.5"
                  />
                </svg>
              </button>
              <ul className={`navbar-dropdown ${initiativesOpen ? 'open' : ''}`}>
                <li><NavLink to="/rhine-pr-marketing" className={navClassName}>Rhine PR & Marketing</NavLink></li>
                <li><NavLink to="/rhine-hr" className={navClassName}>Rhine HR</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/research-insights" className={navClassName}>Research & Insights</NavLink></li>
            <li><NavLink to="/team" className={navClassName}>Team</NavLink></li>
            <li><NavLink to="/careers" className={navClassName}>Careers</NavLink></li>
            <li><NavLink to="/contact" className={navClassName}>Contact</NavLink></li>
            <li className="nav-item-cta-mobile">
              <NavLink to="/contact" className="navbar-cta-btn navbar-cta-btn--mobile">
                Get in touch
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-actions">
          <NavLink to="/contact" className="navbar-cta-btn">Get in touch</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

