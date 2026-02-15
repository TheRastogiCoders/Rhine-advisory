import React, { useState } from 'react'
import '../styles/services.css'

const Services = () => {
  const [expandedService, setExpandedService] = useState(null)

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index)
  }

  const services = [
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
      title: "SPAC Merger Advisory Services",
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
    },
    {
      title: "Asset Management Valuation",
      summary: "Manage every asset with accuracy, compliance, and confidence across the full lifecycle.",
      description:
        "Asset management valuation today goes far beyond spreadsheets — it's about governance, cost control, and performance visibility. We deliver a complete, end-to-end framework for managing assets across their entire lifecycle — from verification and tagging to valuation, tracking, and audit readiness. We help enterprises and government entities across the UAE and GCC gain full visibility into their hardware and software portfolios, simplify complex IT environments, and maintain financial and regulatory compliance. By combining field services, software (RAMS — Rhine Advisory Asset Management Software), and real-time data, we enable organizations to reduce losses, improve utilization, and make smarter investment decisions.",
      subsections: [
        {
          title: "Verification, Tagging & Reconciliation",
          description: "Maintain up-to-date asset registers and eliminate discrepancies between physical and financial records.",
          items: [
            "Fixed-asset register accuracy across sites",
            "Industry-standard barcodes and RFID tagging",
            "Chain of custody and movement history",
            "Faster audits and fewer write-offs"
          ]
        },
        {
          title: "RAMS — Rhine Advisory Asset Management Software",
          description: "Browser-based platform to centralize asset data, track movement and generate audit-ready reports.",
          items: [
            "Browser-based and cloud-accessible",
            "Customizable interface and workflows",
            "Asset movement tracking",
            "Single install to simplify upkeep"
          ]
        },
        {
          title: "Inventory Audit Services",
          description: "Independent physical audits that validate the register, document discrepancies and deliver a remediation plan.",
          items: [
            "Complete asset visibility — history, status, and location in one verified register",
            "Improved financial accuracy — balance sheets and inventory values reflect what the business owns",
            "Faster audits and reporting — month- and year-end closures with ready, verified data",
            "Stronger compliance and governance — auditable proof of ownership for regulators, investors, and insurers"
          ]
        },
        {
          title: "Valuation & Cost Allocation",
          description: "Establish fair values and allocate costs by business unit or use, with clear documentation for finance and audit.",
          items: [
            "Realistic capital asset values",
            "Transparent financial allocation",
            "Cost allocation by usage, lifecycle, or department",
            "Smarter investment decisions"
          ]
        },
        {
          title: "RTLS & GIS Tracking",
          description: "Real-time visibility of assets through location-based monitoring systems. See high-value assets on a live map.",
          items: [
            "Location precision without line-of-sight",
            "Track asset movement metrics",
            "Reduce losses and optimize utilization",
            "Reduce search time for high-value assets"
          ]
        }
      ]
    }
  ]

  return (
    <div className="services">
      {/* ================= PAGE HEADER ================= */}
      <section className="page-header">
        <div className="container">
          <h1>OUR SERVICES</h1>
          <p className="page-subtitle" style={{ color: "var(--primary-red)" }}>
          Advisory Across Transactions, Capital Markets, and Investment Deals 
          </p>
         
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section className="section services-section">
        <div className="container">
          {services.map((service, index) => (
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
                      <ul className="service-list">
                        {sub.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="section how-we-work">
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


      {/* ================= CTA ================= */}
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
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
    >
      Contact Our Team
    </a>
  </div>
</section>

    </div>
  )
}

export default Services
