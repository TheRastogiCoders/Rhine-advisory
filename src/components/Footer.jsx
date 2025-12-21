import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* ===== BRAND SECTION ===== */}
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/logo.png" alt="Rhine Advisory" />
            <h3>RHINE ADVISORY</h3>
          </div>
          <p className="footer-tagline">
            Strategic M&A | SPAC Advisory | Transaction Advisory | Investment Solutions
          </p>
        </div>

        {/* ===== QUICK LINKS ===== */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Our Philosophy</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* ===== CONTACT ===== */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            Email:{' '}
            <a href="mailto:contact@rhineadvisory.com">
              contact@rhineadvisory.com
            </a>
          </p>
          <p>
            Phone:{' '}
            <a href="tel:+918140243880">
              +91-8140243880
            </a>
          </p>
          <p>Ahmedabad, Gujarat - India</p>
        </div>

      </div>

      {/* ===== DIVIDER LINE ===== */}
      <div className="footer-divider"></div>

      {/* ===== COPYRIGHT ===== */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rhine Advisory. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
