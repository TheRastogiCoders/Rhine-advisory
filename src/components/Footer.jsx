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
            <img src="/image.png" alt="Rhine Advisory" />
            <h3>RHINE ADVISORY</h3>
          </div>
          <p className="footer-tagline">
            Strategic M&A | SPAC Advisory | Transaction Advisory | Investment Solutions | Capital Market & Investment Solutions | Structuring Capital. Executing Transactions.
          </p>
        </div>

        {/* ===== QUICK LINKS ===== */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/who-we-serve">Who We Serve</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </div>

        {/* ===== CONTACT ===== */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            Email:{' '}
            <a href="mailto:contact@rhineadvisory.com">
              contact@rhineadvisory.ae
            </a>
          </p>
          <p>
            Phone:{' '}
            <a href="tel:+918140243880">
              +91 81402 43880
            </a>
          </p>
          <p>Westgate, 510-511, 5th floor D Block, Near YMCA Club, SG Road, Ahmedabad - 380015 Gujarat, India.</p>
        </div>

      </div>

      {/* ===== DIVIDER LINE ===== */}
      <div className="footer-divider"></div>

      {/* ===== COPYRIGHT ===== */}
      <div className="footer-bottom">
        <p>&copy; 2021 Rhine Advisory. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
