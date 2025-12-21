import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

const Home = () => {
  return (
    <div className="home">
      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="hero-content">
          <img src="logo.png" alt="" />
          <p className="hero-subtitle">
            Strategic M&A | SPAC Advisory | Transaction Advisory | Investment Solutions
          </p>
          <p className="hero-description">
            Rhine Advisory is an independent transaction and investment advisory firm supporting
            corporates, investors, sponsors, and founders in making high-conviction decisions across
            complex transactions and capital events.
          </p>
          <p className="hero-description">
            We advise clients across the entire transaction lifecycle from strategy formulation
            and opportunity identification to execution, capital structuring, and post-deal value creation.
          </p>

          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">Explore Our Services</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SNAPSHOT ================= */}
      <section className="section about-snapshot">
        <div className="container">
          <h2 className="section-title">OUR PHILOSOPHY</h2>
          <p className="section-description">
            Transactions are not about spreadsheets alone. They are about risk, capital,
            governance, timing, and disciplined execution.
          </p>
          <p className="section-description">
            At Rhine Advisory, we combine financial rigor, commercial insight, and deep transaction
            experience to help clients navigate complexity and unlock sustainable value.
          </p>
        </div>
      </section>

      {/* ================= WHO WE SERVE ================= */}
      <section className="section who-we-serve">
        <div className="container">
          <h2 className="section-title">WHO WE SERVE</h2>
          <div className="serve-grid">
            <div className="serve-item">Private Equity & Venture Capital Funds</div>
            <div className="serve-item">SPAC Sponsors & Public Market Participants</div>
            <div className="serve-item">Corporates & Strategic Buyers</div>
            <div className="serve-item">Founders & Promoters</div>
            <div className="serve-item">Family Offices & Institutional Investors</div>
            <div className="serve-item">Investment Banks & Financial Institutions</div>
          </div>
        </div>
      </section>

      {/* ================= CORE SERVICES SUMMARY ================= */}
      <section className="section services-overview">
        <div className="container">
          <h2 className="section-title">CORE ADVISORY SERVICES</h2>
          <div className="why-grid">
            <div className="why-item">
              <h3>M&A Advisory</h3>
              <p>
                End-to-end buy-side, sell-side, and cross-border M&A advisory focused on
                strategic fit, valuation discipline, and value creation.
              </p>
            </div>
            <div className="why-item">
              <h3>SPAC Advisory</h3>
              <p>
                Specialized advisory for SPAC sponsors, target companies, and PIPE investors
                from formation through de-SPAC execution.
              </p>
            </div>
            <div className="why-item">
              <h3>Transaction Advisory</h3>
              <p>
                Financial and commercial due diligence, deal risk assessment, and execution
                support across critical transaction stages.
              </p>
            </div>
            <div className="why-item">
              <h3>Investment Solutions</h3>
              <p>
                Capital allocation, investment evaluation, portfolio strategy, and exit
                planning for institutional and strategic investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY RHINE ADVISORY ================= */}
      <section className="section why-rhine">
        <div className="container">
          <h2 className="section-title">WHY RHINE ADVISORY</h2>
          <div className="why-grid">
            <div className="why-item">
              <h3>Senior-Led Execution</h3>
              <p>No junior hand-offs — every mandate is led by experienced professionals.</p>
            </div>
            <div className="why-item">
              <h3>Transaction-Focused Mindset</h3>
              <p>We focus on outcomes, not theoretical consulting frameworks.</p>
            </div>
            <div className="why-item">
              <h3>Independent Advice</h3>
              <p>Free from product, financing, or distribution bias.</p>
            </div>
            <div className="why-item">
              <h3>Confidential & Precise</h3>
              <p>High-trust advisory with discretion and execution discipline.</p>
            </div>
            <div className="why-item">
              <h3>Outcome-Driven Approach</h3>
              <p>Value creation prioritized over reports and presentations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="section cta-section">
        <div className="container">
          <h2>Ready to Navigate Complexity?</h2>
          <p>
            Partner with Rhine Advisory to structure, execute, and deliver
            high-impact transactions with confidence.
          </p>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
