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
          </div>
          <p className="footer-tagline">
          Strategic M&A, SPAC Advisory, Transaction Advisory, Capital Markets & Investment Solutions, Financial Model & Valuation Analysis.
          <br />
          The value lies within our name we don't just meet expectations; we go beyond to deliver outcomes that truly serve our clients core needs.
         
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
          
          <h4 className="address-heading">Delivery Center Address:</h4>
          <p>Westgate, 510-511, 5th floor D Block, Near YMCA Club, SG Road, Ahmedabad - 380015 Gujarat, India.</p>
          
          <h4 className="address-heading">HQ Address:</h4>
          <p>Serene Centrum, 510, Near Gangotri Exotica, Laxshmipura Road Vadodara, GUJARAT 390021</p>
          
          <h4 className="address-heading">Sales Office:</h4>
          <p>Empire Heights Tower, Marasi Drive, Business Bay, Dubai – UAE</p>
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
