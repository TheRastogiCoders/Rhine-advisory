import React, { useState, useEffect } from 'react'
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

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleHomeClick}>
          <img src={logoSrc} alt="Rhine Advisory" />
          <span></span>
        </Link>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <a 
              href="#"
              className={location.pathname === '/' && activeSection === 'home' ? 'active' : ''}
              onClick={handleHomeClick}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about-section"
              className={activeSection === 'about-section' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'about-section')}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#services-section"
              className={activeSection === 'services-section' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'services-section')}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#who-we-serve-section"
              className={activeSection === 'who-we-serve-section' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'who-we-serve-section')}
            >
              Who We Serve
            </a>
          </li>
          <li>
            <a 
              href="#contact-section"
              className={activeSection === 'contact-section' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'contact-section')}
            >
              Contact
            </a>
          </li>
          <li className="nav-item-initiatives">
            <button
              type="button"
              className={`navbar-dropdown-trigger ${initiativesOpen ? 'open' : ''}`}
              onClick={() => setInitiativesOpen(!initiativesOpen)}
              aria-expanded={initiativesOpen}
              aria-haspopup="true"
            >
              Rhine Initiatives
              <span className="dropdown-chevron">▼</span>
            </button>
            <ul className={`navbar-dropdown ${initiativesOpen ? 'open' : ''}`}>
              <li>
                <Link
                  to="/rhine-pr-marketing"
                  onClick={() => { setInitiativesOpen(false); setIsMobileMenuOpen(false); }}
                >
                  Rhine PR & Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/rhine-hr"
                  onClick={() => { setInitiativesOpen(false); setIsMobileMenuOpen(false); }}
                >
                  Rhine HR
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link 
              to="/research-insights" 
              className={isActive('/research-insights') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Research & Insights
            </Link>
          </li>
          <li>
            <Link 
              to="/team" 
              className={isActive('/team') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

