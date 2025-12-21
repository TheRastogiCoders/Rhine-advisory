import React from 'react'
import '../styles/about.css'

const About = () => {
  return (
    <div className="about">
      {/* ================= PAGE HEADER ================= */}
      <section className="page-header">
        <div className="container">
          <h1>OUR PHILOSOPHY</h1>
          <p className="page-subtitle">
            Independent. Disciplined. Transaction-Focused.
          </p>
        </div>
      </section>

      {/* ================= PHILOSOPHY SECTION ================= */}
      <section className="section philosophy-section">
        <div className="container">
          <div className="philosophy-box">
            <h2>Transactions are not about spreadsheets alone.</h2>
            <p className="philosophy-intro">
              They are about risk, capital, timing, governance, and execution discipline.
            </p>
            <p>
              At Rhine Advisory, we combine financial rigor, commercial insight, and deep
              transaction experience to help clients navigate complexity, manage downside
              risk, and unlock sustainable long-term value.
            </p>
            <p>
              Our advice is grounded in practical execution realities, not theoretical
              frameworks. We work alongside clients as trusted partners across the full
              transaction lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="section approach-section">
        <div className="container">
          <h2 className="section-title">OUR APPROACH</h2>
          <div className="approach-grid">
            <div className="approach-item">
              <h3>Independent Advice</h3>
              <p>
                We operate without product, financing, or distribution bias, ensuring
                objective advice aligned solely with client outcomes.
              </p>
            </div>
            <div className="approach-item">
              <h3>Execution Discipline</h3>
              <p>
                Our work is focused on closing transactions efficiently while protecting
                value through disciplined structuring and negotiation.
              </p>
            </div>
            <div className="approach-item">
              <h3>Risk-Adjusted Thinking</h3>
              <p>
                We identify, quantify, and mitigate deal risks early to support informed,
                high-conviction decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO WE WORK WITH ================= */}
      <section className="section work-with-section">
        <div className="container">
          <h2 className="section-title">WHO WE WORK WITH</h2>
          <div className="work-with-grid">
            <div className="work-item">Corporates pursuing inorganic growth</div>
            <div className="work-item">Private Equity & Venture Capital firms</div>
            <div className="work-item">SPAC sponsors and target companies</div>
            <div className="work-item">Family offices and strategic investors</div>
            <div className="work-item">Founders preparing for liquidity events</div>
          </div>
        </div>
      </section>

      {/* ================= VALUES SECTION ================= */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">OUR VALUES</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Confidentiality</h3>
              <p>
                We operate with discretion and integrity in high-stakes transactions.
              </p>
            </div>
            <div className="value-item">
              <h3>Accountability</h3>
              <p>
                We take ownership of outcomes, not just recommendations.
              </p>
            </div>
            <div className="value-item">
              <h3>Precision</h3>
              <p>
                Our work is analytical, structured, and decision-oriented.
              </p>
            </div>
            <div className="value-item">
              <h3>Partnership</h3>
              <p>
                We work as an extension of our clients’ leadership teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="section team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">Meet the driving force behind Rhine Advisory</p>
          </div>
          <div className="team-card">
            <div className="team-content">
              <div className="team-image">
                <img src="/team-member.jpg" alt="Vasu Rastogi" />
                <div className="social-links">
                  <a href="#" className="social-icon" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="social-icon" aria-label="Email">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
              <div className="team-info">
                <h3>X-X-X</h3>
                <p className="position">Sole Proprietor</p>
                <p className="bio">
                  Strategic advisor with expertise in business development and financial consulting, helping businesses navigate challenges and achieve sustainable growth.
                </p>
                <div className="expertise">
                  <span>Strategic Advisory</span>
                  <span>Business Development</span>
                  <span>Financial Consulting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
