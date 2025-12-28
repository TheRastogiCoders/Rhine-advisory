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
          <p className="hero-subtitle" text="italic">
            <i>"Structuring Capital, Executing Transactions"</i>
          </p>
          <p className="hero-description">
          Rhine Advisory is an independent transaction and investment advisory firm providing transaction advisory, SPAC and capital markets advisory, and institutional-grade investment research to corporates, investors, sponsors, and founders..
          </p>
          <p className="hero-description">
          We support clients across the entire transaction lifecycle including strategy formulation, opportunity identification, transaction structuring, financial modelling and valuation, capital markets and SPAC - related advisory, execution support, and post - deal value creation across complex transactions and capital events.
          </p>

          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">Explore Our Services</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* ================= ABOUT RHINE ADVISORY ================= */}
      <section className="section about-snapshot">
        <div className="container">
          <h2 className="section-title">ABOUT RHINE ADVISORY</h2>
          
          <h3 className="about-subtitle">Transaction Advisory and Capital Markets Expertise by Seasoned Professionals</h3>
          
          <div className="about-content">
            <div className="about-image-wrapper">
              <img 
                src="https://www.istockphoto.com/photo/businesswoman-and-businessman-shaking-hands-across-the-table-gm1444490817-483180893" 
                alt="Professional business team meeting" 
                className="about-image"
              />
            </div>
            <p className="section-description">
              Founded by a group of investment bankers, management consultants, and research professionals, Rhine Advisory was built on a simple belief:
            </p>
            <p className="section-description highlight-text">
              the most important transactions demand clarity, discipline, and judgment not noise.
            </p>
            <p className="section-description">
              We are an independent transaction and investment advisory firm providing SPAC, capital markets, and transaction advisory solutions to corporates, investors, sponsors, and founders navigating complex transactions and capital events where the cost of getting it wrong is high.
            </p>
            <p className="section-description">
              We advise clients across the entire transaction lifecycle from strategy formulation and opportunity identification to transaction structuring, financial modelling and valuation, capital markets execution, and post deal value creation. Our work is grounded in rigorous analysis, execution awareness, and a deep understanding of how capital markets behave under real conditions, not just on paper.
            </p>
            <p className="section-description">
              We exist to help decision makers move forward with conviction when certainty is scarce and stakes are real.
            </p>
          </div>

          <div className="about-subsection">
            <div className="subsection-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop&q=80" 
                alt="Global business network" 
                className="subsection-image"
              />
            </div>
            <h3 className="subsection-title">Built for Complex, Cross-Border Transactions</h3>
            <p className="section-description">
              Rhine Advisory brings a strong cross border perspective, supporting transactions that span jurisdictions, regulatory regimes, and investor bases. Our experience across Asian markets and U.S./European capital markets enables us to help clients structure and execute transactions with clarity, discipline, and regulatory alignment.
            </p>
            <p className="section-description">
              We work closely with management teams, sponsors, and investors to anticipate execution risks early and design transaction structures that hold up under market and regulatory scrutiny.
            </p>
          </div>

          <div className="about-subsection">
            <div className="subsection-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&q=80" 
                alt="Financial analysis and data" 
                className="subsection-image"
              />
            </div>
            <h3 className="subsection-title">Institutional Insight. Execution Discipline.</h3>
            <p className="section-description">
              Our advisory approach combines:
            </p>
            <ul className="about-list">
              <li>Transaction advisory focused on structure, downside risk, and execution feasibility</li>
              <li>SPAC and capital markets expertise across IPOs, de-SPAC transactions, PIPEs, and capital raises</li>
              <li>Institutional-grade investment research, financial modelling, and valuation</li>
            </ul>
            <p className="section-description">
              We are not theoretical advisors. We focus on decision ready analysis that supports real execution under real market conditions.
            </p>
          </div>

          <div className="about-subsection">
            <div className="subsection-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&q=80" 
                alt="Business partnership and collaboration" 
                className="subsection-image"
              />
            </div>
            <h3 className="subsection-title">Global Network and Proven Transaction Experience</h3>
            <p className="section-description">
              Rhine Advisory maintains strong relationships across the global capital markets ecosystem, including SPAC sponsors, institutional investors, strategic partners, and market participants. This network allows us to support clients not only with analysis, but with practical insight into investor expectations, market dynamics, and transaction timing.
            </p>
            <p className="section-description">
              Our team brings deep transaction experience across multiple sectors and geographies, supporting complex capital markets and strategic transactions where precision and judgment matter most.
            </p>
          </div>

          <div className="about-subsection">
            <h3 className="subsection-title">Our Commitment</h3>
            <p className="section-description">
              At Rhine Advisory, we are guided by a simple principle:
            </p>
            <p className="section-description highlight-text">
              Good transactions are not defined by approval they are defined by execution.
            </p>
            <p className="section-description">
              We are committed to:
            </p>
            <ul className="about-list">
              <li>Delivering clarity in complex decision environments</li>
              <li>Applying rigorous, defensible analysis</li>
              <li>Remaining closely aligned with execution realities</li>
              <li>Operating with discretion, accountability, and independence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= WHO WE SERVE ================= */}
      <section className="section who-we-serve">
        <div className="container">
          <h2 className="section-title">WHO WE SERVE</h2>
          <div className="serve-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop&q=80" 
              alt="Diverse business professionals" 
              className="section-hero-image"
            />
          </div>
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
          <div className="services-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=500&fit=crop&q=80" 
              alt="Business strategy and consulting" 
              className="section-hero-image"
            />
          </div>
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
            <div className="why-item">
              <h3>Capital Market and Fund Admin & Accounting </h3>
              <p>
              End-to-end fund administration, accounting, compliance and operational support for capital markets.

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
              <p>No junior hand-offs every mandate is led by experienced professionals.</p>
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

      {/* ================= OUR TEAM ================= */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">OUR TEAM</h2>
          <p className="team-intro">
            Our team brings together decades of combined experience in investment banking, 
            management consulting, and capital markets. We are committed to delivering 
            exceptional results for our clients.
          </p>
      </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
    <section
  className="section cta-section"
  style={{
    background: "linear-gradient(135deg, var(--dark-red), var(--primary-red))",
    color: "#ffffff",
    padding: "90px 20px",
    textAlign: "center"
  }}
>
  <div className="container">
    <h2
      style={{
        fontSize: "2.5rem",
        fontWeight: "700",
        marginBottom: "15px"
      }}
    >
      Discuss Your Transaction
    </h2>

    <p
      style={{
        maxWidth: "720px",
        margin: "0 auto 30px",
        fontSize: "1.15rem",
        opacity: "0.95"
      }}
    >
      Engage with Rhine Advisory to evaluate, structure, and execute
      complex transactions with confidence.
    </p>

    <a
      href="/contact"
      style={{
        display: "inline-block",
        background: "#ffffff",
        color: "var(--primary-red)",
        padding: "14px 36px",
        fontSize: "1rem",
        fontWeight: "600",
        borderRadius: "50px",
        textDecoration: "none",
        transition: "all 0.3s ease"
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
    >
      Contact Our Team
    </a>
  </div>
</section>


    </div>
  )
}

export default Home
