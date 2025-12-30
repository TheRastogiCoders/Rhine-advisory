import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import '../styles/services.css'
import '../styles/contact.css'

const Home = () => {
  const [expandedService, setExpandedService] = useState(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    serviceInterest: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' })

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const services = [
    'Select a service',
    'Mergers & Acquisitions (M&A) Advisory',
    'SPAC Advisory Services',
    'Transaction Advisory Services',
    'Investment Solutions & Advisory',
    'Valuation & Financial Modeling',
    'Capital Markets Advisory',
    'Fund Administration and Accounting'
  ]

  const serviceDetails = [
    {
      title: "Mergers & Acquisitions (M&A) Advisory",
      summary: "End-to-end advisory across buy-side, sell-side, and complex strategic transactions.",
      description:
        "Rhine Advisory provides comprehensive M&A advisory services to corporates, sponsors, and investors across industries and geographies, with a strong focus on strategic alignment, valuation discipline, and execution certainty.",
      subsections: [
        {
          title: "Buy-Side Advisory",
          description: "We support acquirers through the full investment lifecycle:",
          items: [
            "Target identification and proprietary deal sourcing",
            "Strategic and commercial assessment",
            "Valuation, synergy analysis, and transaction modeling",
            "Deal structuring and financing evaluation",
            "Due diligence coordination",
            "Negotiation support and closing assistance"
          ],
          note:
            "Our focus extends beyond deal completion to long-term value creation and downside protection."
        },
        {
          title: "Sell-Side Advisory",
          description: "We help shareholders and promoters maximize value by:",
          items: [
            "Preparing businesses for sale and deal readiness",
            "Developing compelling equity stories and information memoranda",
            "Identifying and managing strategic and financial buyers",
            "Running competitive and confidential processes",
            "Supporting valuation negotiations and transaction execution"
          ],
          note:
            "We position assets to attract the right buyers at the right valuation — not just the fastest exit."
        }
      ]
    },
    {
      title: "SPAC Advisory Services",
      summary: "Independent advisory across SPAC formation, target evaluation, and de-SPAC execution.",
      description:
        "We advise SPAC sponsors, target companies, and PIPE investors across the full SPAC lifecycle, from strategic assessment to public market execution.",
      subsections: [
        {
          title: "SPAC Sponsors",
          items: [
            "Target sourcing and strategic evaluation",
            "Valuation and transaction structuring",
            "Financial modeling and investor analysis",
            "Due diligence coordination",
            "De-SPAC execution support"
          ]
        },
        {
          title: "Target Companies",
          items: [
            "SPAC readiness assessment",
            "Business plan and financial forecast development",
            "Valuation support and negotiation",
            "Public market positioning",
            "Post-transaction transition support"
          ]
        }
      ]
    },
    {
      title: "Transaction Advisory Services",
      summary: "Independent diligence and execution support at critical transaction decision points.",
      description:
        "We provide financial and commercial diligence, risk assessment, and execution support to enable informed decision-making in high-stakes environments.",
      subsections: [
        {
          title: "Buy-Side Advisory",
          items: [
            "Quality of earnings analysis",
            "Working capital and cash flow assessment",
            "Commercial diligence",
            "Synergy validation",
            "Deal risk identification"
          ]
        },
        {
          title: "Sell-Side Advisory",
          items: [
            "Pre-deal financial cleanup",
            "Earnings normalization",
            "Deal readiness assessments",
            "Buyer diligence management",
            "SPA support"
          ]
        }
      ]
    },
    {
      title: "Investment Solutions & Advisory",
      summary: "Capital allocation, portfolio strategy, and investment evaluation.",
      description:
        "We work with investors to design and execute capital allocation strategies aligned with risk, return, and liquidity objectives.",
      subsections: [
        {
          title: "Private Equity & Venture Capital",
          items: [
            "Investment screening and evaluation",
            "Market and competitive analysis",
            "Portfolio performance assessment",
            "Exit planning and value maximization"
          ]
        },
        {
          title: "Family Offices & Strategic Investors",
          items: [
            "Direct investment evaluation",
            "Portfolio diversification",
            "Capital structuring",
            "Governance frameworks"
          ]
        }
      ]
    },
    {
      title: "Valuation & Financial Modeling",
      summary: "Decision-oriented valuation and modeling.",
      description:
        "Our valuation and modeling capabilities support strategic, transaction, and investment decisions across the deal lifecycle.",
      subsections: [
        {
          title: "Valuation",
          items: [
            "DCF and comparable analysis",
            "Precedent transaction analysis",
            "LBO modeling",
            "Fairness opinions"
          ]
        },
        {
          title: "Financial Modeling",
          items: [
            "Integrated operating models",
            "Transaction models",
            "Scenario and sensitivity analysis",
            "Investor-ready outputs"
          ]
        }
      ]
    },
    {
      title: "Capital Markets Advisory",
      summary: "Comprehensive capital raising advisory optimizing deal structures across private equity, venture capital, and strategic channels.",
      description:
      "Private placement structuring and execution Strategic investor identification and engagement Venture capital and growth equity advisory Debt financing and alternative structures Cross-border capital market access ",
      subsections: [
        {
          title: "Fund Administration and Accounting",
          items: [
            "Updating financial records",
            "Distribution Management",
            "Portfolio Valuation",
            "Admin Process",
            "Fund Setup",
            "Preparing Report",
          ]
        }
      ]
    }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ success: null, message: '' })

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'c227dff2-8df3-43fe-91c4-40353cd715d3',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          service_interest: formData.serviceInterest,
          message: formData.message,
          from_name: 'Rhine Advisory Contact Form',
          reply_to: formData.email,
        }),
      });

      const result = await response.json()
      
      if (result.success) {
        setSubmitStatus({ success: true, message: 'Thank you for your message! We will get back to you soon.' })
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          serviceInterest: '',
          message: ''
        })
      } else {
        throw new Error(result.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: error.message || 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="home">
      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="hero-content">
          <img src="/logo.png" alt="" />
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
            <button onClick={() => scrollToSection('services-section')} className="btn btn-primary">Explore Our Services</button>
            <button onClick={() => scrollToSection('contact-section')} className="btn btn-secondary">Contact Us</button>
          </div>
        </div>
      </section>

      {/* ================= STATISTICS & REGIONAL PRESENCE ================= */}
      <section
        style={{
          padding: "80px 20px"
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "60px"
          }}
        >
          {/* ===== STATISTICS BOXES ===== */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "30px"
            }}
          >
            {[
              { value: "+20", label: "Expert Consultants" },
              { value: "+100", label: "Completed Projects" },
              { value: "+10", label: "Partners" }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  flex: "1 1 250px",
                  padding: "40px 25px",
                  borderRadius: "16px",
                  border: "1px solid rgba(0,0,0,0.08)",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-6px)"
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)"
                }}
              >
                <h2
                  style={{
                    fontSize: "2.8rem",
                    color: "var(--primary-red)",
                    marginBottom: "10px"
                  }}
                >
                  {item.value}
                </h2>
                <p style={{ fontSize: "1.05rem", fontWeight: "500" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* ===== REGIONAL PRESENCE BOX (WITH COUNTRY CARDS) ===== */}
          <div className="regional-presence-card">
            <h3 className="regional-title">Our Regional Presence</h3>
            <p className="regional-subtitle">
              Serving clients across priority markets with local insight and regional connectivity.
            </p>

            <div className="regional-grid">
              {[
                { name: "United Arab Emirates", code: "UAE", flag: "/uae.png" },
                { name: "India", code: "IND", flag: "/india.avif" },
                { name: "Singapore", code: "SGP", flag: "/Singapore.svg" },
                { name: "Saudi Arabia", code: "KSA", flag: "/SaudiArabia.webp" }
              ].map((country) => (
                <div key={country.code} className="regional-country-card">
                  <div className="regional-flag-wrapper">
                    <img
                      src={country.flag}
                      alt={`${country.name} flag`}
                      className="regional-flag"
                    />
                  </div>
                  <h4 className="regional-country-name">{country.name}</h4>
                  <p className="regional-country-code">{country.code}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT RHINE ADVISORY ================= */}
      <section id="about-section" className="section about-snapshot">
        <div className="container">
          <h2 className="section-title">ABOUT RHINE ADVISORY</h2>
          
          <h3 className="about-subtitle">Transaction Advisory and Capital Markets Expertise by Seasoned Professionals</h3>
          
          <div className="about-content">
            <div className="about-image-wrapper">
              <img 
                src="/iStock-1444490817.jpg" 
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
                src="/iStock-2152298806.jpg" 
                alt="Global business network" 
                className="subsection-image"
              />
            </div>
            <h3 className="subsection-title" style={{ textAlign: "center" }}>
              Built for Complex, Cross-Border Transactions
            </h3>
            <p className="section-description">
              Rhine Advisory brings a strong cross border perspective, supporting transactions that span jurisdictions, regulatory regimes, and investor bases. Our experience across Asian markets and U.S./European capital markets enables us to help clients structure and execute transactions with clarity, discipline, and regulatory alignment.
            </p>
            <p className="section-description">
              We work closely with management teams, sponsors, and investors to anticipate execution risks early and design transaction structures that hold up under market and regulatory scrutiny.
            </p>
          </div>

          <div className="about-subsection about-subsection-centered">
            <div className="subsection-image-wrapper">
              <img 
                src="/iStock-1395448518.jpg" 
                alt="Financial analysis and data" 
                className="subsection-image subsection-image-small"
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

          <div className="about-subsection about-subsection-centered">
            <div className="subsection-image-wrapper">
              <img 
                src="/iStock-2190159060.jpg" 
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

      {/* ================= WHO WE SERVE DETAILED ================= */}
      <section id="who-we-serve-section" className="section who-we-serve">
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

          {/* Detailed Client Categories */}
          <div style={{ marginTop: "60px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            <div className="client-category-card" style={{ background: "#ffffff", padding: "30px", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
              <div className="category-image">
                <img 
                  src="/iStock-2152298806.jpg" 
                  alt="Corporate business" 
                  className="category-img"
                  style={{ width: "100%", borderRadius: "8px", marginBottom: "20px" }}
                />
              </div>
              <h2 style={{ color: "var(--dark-red)", marginBottom: "15px" }}>Corporates</h2>
              <p style={{ marginBottom: "15px", color: "var(--text-light)" }}>Strategic advisory for businesses looking to grow, restructure, or navigate complex financial landscapes.</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ padding: "8px 0", color: "var(--text-light)" }}>• Mergers & Acquisitions</li>
                <li style={{ padding: "8px 0", color: "var(--text-light)" }}>• Divestitures & Carve-outs</li>
                <li style={{ padding: "8px 0", color: "var(--text-light)" }}>• Strategic Partnerships</li>
                <li style={{ padding: "8px 0", color: "var(--text-light)" }}>• Capital Raising</li>
              </ul>
            </div>

            <div className="client-category-card" style={{ background: "#ffffff", padding: "30px", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
              <div className="category-image">
                <img 
                  src="/iStock-2190159060.jpg" 
                  alt="Private equity and investment" 
                  className="category-img"
                  style={{ width: "100%", borderRadius: "8px", marginBottom: "20px" }}
                />
              </div>
              <h2 style={{ color: "var(--dark-red)", marginBottom: "15px" }}>Private Equity & Investors</h2>
              <p style={{ marginBottom: "15px", color: "var(--text-light)" }}>Comprehensive support for investment firms and individual investors.</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ padding: "8px 0", color: "var(--text-light)" }}>• Deal Sourcing & Evaluation</li>
                <li style={{ padding: "8px 0", color: "var(--text-light)" }}>• Due Diligence</li>
                <li style={{ padding: "8px 0", color: "var(--text-light)" }}>• Portfolio Company Support</li>
                <li style={{ padding: "8px 0", color: "var(--text-light)" }}>• Exit Strategy Planning</li>
              </ul>
            </div>

            <div className="client-category-card" style={{ background: "#ffffff", padding: "30px", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
              <div className="category-image">
                <img 
                  src="/iStock-1188211595.jpg" 
                  alt="Entrepreneurs and startups" 
                  className="category-img"
                  style={{ width: "100%", borderRadius: "8px", marginBottom: "20px" }}
                />
              </div>
              <h2 style={{ color: "var(--dark-red)", marginBottom: "15px" }}>Founders & Startups</h2>
              <p style={{ marginBottom: "15px", color: "var(--text-light)" }}>Guidance for emerging businesses at every stage of growth.</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ padding: "8px 0", color: "var(--text-light)" }}>• Seed & Early-stage Funding</li>
                <li style={{ padding: "8px 0", color: "var(--text-light)" }}>• Growth Capital</li>
                <li style={{ padding: "8px 0", color: "var(--text-light)" }}>• Strategic Planning</li>
                <li style={{ padding: "8px 0", color: "var(--text-light)" }}>• Investor Readiness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DETAILED SERVICES SECTION ================= */}
      <section id="services-section" className="section services-section" style={{ background: "#fafafa" }}>
        <div className="container">
          <h2 className="section-title">OUR SERVICES</h2>
          <p className="page-subtitle" style={{ color: "var(--primary-red)", textAlign: "center", marginBottom: "50px" }}>
            Advisory Across Transactions, Capital Markets, and Investment Deals 
          </p>
          
          {serviceDetails.map((service, index) => (
            <div key={index} className="service-card">
              <div
                className="service-header"
                onClick={() => toggleService(index)}
              >
                <div>
                  <h2>{service.title}</h2>
                  <p className="service-summary">{service.summary}</p>
                </div>
                <span className="toggle-icon">
                  {expandedService === index ? '−' : '+'}
                </span>
              </div>

              {expandedService === index && (
                <div className="service-content">
                  <p className="service-description">{service.description}</p>

                  {service.subsections.map((sub, i) => (
                    <div key={i} className="subsection">
                      <h3>{sub.title}</h3>
                      {sub.description && <p style={{ marginBottom: "15px", color: "var(--text-light)" }}>{sub.description}</p>}
                      <ul className="service-list">
                        {sub.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                      {sub.note && <p style={{ marginTop: "15px", fontStyle: "italic", color: "var(--primary-red)" }}>{sub.note}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="section how-we-work" style={{ background: "#ffffff" }}>
        <div className="container">
          <h2 className="section-title">HOW WE WORK</h2>
          <div className="how-we-work-image">
            <img 
              src="/iStock-1283279349 1.jpg" 
              alt="Team collaboration and execution" 
              className="section-hero-image"
            />
          </div>
          <div className="why-grid">
            <div className="why-item">Senior-led execution with direct partner involvement</div>
            <div className="why-item">Independent advice free from product or financing bias</div>
            <div className="why-item">Disciplined, execution-focused transaction mindset</div>
            <div className="why-item">Confidential, precise, and outcome-driven approach</div>
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

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact-section" className="section contact-section">
        <div className="container">
          <h2 className="section-title">CONTACT US</h2>
          <div className="contact-wrapper">
            
            {/* ================= CONTACT INFO ================= */}
            <div className="contact-info">
              <div className="info-card">
                <h3>Connect With Us</h3>
                <p className="info-description">
                  We work with corporates, investors, sponsors, and founders on
                  high-impact transactions and strategic decisions.
                </p>

                <div className="info-item">
                  <strong>Email</strong>
                  <a href="mailto:contact@rhineadvisory.ae">
                    contact@rhineadvisory.ae
                  </a>
                </div>

                <div className="info-item">
                  <strong>Phone</strong>
                  <a href="tel:+918140243880">
                    +91 81402 43880
                  </a>
                </div>

                <div className="info-item">
                  <strong>Delivery Center Address:</strong>
                  <p>Westgate, 510-511, 5th floor D Block, Near YMCA Club, SG Road, Ahmedabad - 380015 Gujarat, India.</p>
                </div>

                <div className="info-item">
                  <strong>HQ Address:</strong>
                  <p>Serene Centrum, 510, Near Gangotri Exotica, Laxshmipura Road Vadodara, GUJARAT 390021</p>
                </div>

                <div className="info-item">
                  <strong>Sales Office:</strong>
                  <p>Empire Heights Tower, Marasi Drive, Business Bay, Dubai – UAE</p>
                </div>
              </div>

              {/* ================= MAP SECTION ================= */}
              <div className="map-section">
                <h3>Find Us</h3>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865.8153813454534!2d72.50062853553113!3d23.003052074405353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b268747c875%3A0xd44523a6cd7ccb19!2sWestgate%20Complex!5e0!3m2!1sen!2sin!4v1766928159351!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Rhine Advisory Location - Delivery Center"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* ================= CONTACT FORM ================= */}
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Send Us a Message</h3>
                <p className="form-subtitle">
                Get in touch with us to discuss how we can help transform your organization
                </p>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="serviceInterest">Service Interest</label>
                  <select
                    id="serviceInterest"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="form-select"
                  >
                    {services.map((service, index) => (
                      <option key={index} value={service === 'Select a service' ? '' : service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    required
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button 
                    type="submit" 
                    className="btn btn-primary send-message-btn"
                    disabled={isSubmitting}
                  >
                    <span className="btn-icon">✈</span>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  {submitStatus.message && (
                    <div className={`form-message ${submitStatus.success ? 'success' : 'error'}`}>
                      {submitStatus.message}
                    </div>
                  )}
                </div>
              </form>
            </div>

          </div>
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

          <button
            onClick={() => scrollToSection('contact-section')}
            style={{
              display: "inline-block",
              background: "#ffffff",
              color: "var(--primary-red)",
              padding: "14px 36px",
              fontSize: "1rem",
              fontWeight: "600",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
          >
            Contact Our Team
          </button>
        </div>
      </section>

    </div>
  )
}

export default Home
