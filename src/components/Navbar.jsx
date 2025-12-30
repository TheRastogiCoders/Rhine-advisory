import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

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
          <img src="/logo.png" alt="Rhine Advisory" />
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
            <Link 
              to="/team" 
              className={isActive('/team') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </Link>
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
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

