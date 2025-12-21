import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
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
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/who-we-serve" 
              className={isActive('/who-we-serve') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Who We Serve
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={isActive('/services') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/raise-funds" 
              className={isActive('/raise-funds') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Raise Funds
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`contact-btn ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

