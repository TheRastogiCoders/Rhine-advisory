import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/services.css'

export const servicesList = [
    {
      title: "Mergers & Acquisitions (M&A) Advisory",
      summary: "End-to-end advisory across buy-side, sell-side, and complex strategic transactions.",
      description:
        "Rhine Advisory provides comprehensive M&A advisory services to corporates, sponsors, and investors across industries and geographies, with a strong focus on strategic alignment, valuation discipline, and execution certainty. We support clients from initial strategy and target screening through due diligence, negotiation, and closing, and help them realize value in the critical post-deal phase. Our senior-led teams bring deep sector knowledge and transaction experience to every mandate, ensuring that structure, price, and risk are aligned with your objectives.",
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
            "Negotiation support and closing assistance",
            "Post-acquisition integration and value realization support",
            "Fairness and valuation opinions for board and committee approval"
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
            "Supporting valuation negotiations and transaction execution",
            "Vendor due diligence and data room management",
            "Stakeholder communication and management alignment",
            "Carve-out and separation planning where required"
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
        "We advise SPAC sponsors, target companies, and PIPE investors across the full SPAC lifecycle, from strategic assessment to public market execution. Our team supports IPO readiness, target identification and evaluation, business combination structuring, and post-merger integration. We bring valuation discipline, regulatory awareness, and execution experience to help clients navigate the unique challenges of the SPAC pathway to going public.",
      subsections: [
        {
          title: "SPAC Sponsors",
          description: "End-to-end support for SPAC formation, target identification, and de-SPAC execution:",
          items: [
            "Target sourcing and strategic evaluation",
            "Valuation and transaction structuring",
            "Financial modeling and investor analysis",
            "Due diligence coordination",
            "De-SPAC execution support",
            "Fairness opinions and board committee support",
            "PIPE and financing structure advisory",
            "Regulatory and listing readiness"
          ]
        },
        {
          title: "Target Companies",
          description: "Helping private companies assess and execute a SPAC combination:",
          items: [
            "SPAC readiness assessment",
            "Business plan and financial forecast development",
            "Valuation support and negotiation",
            "Public market positioning",
            "Post-transaction transition support",
            "Proxy and disclosure support",
            "Negotiation strategy and term sheet review",
            "Integration planning and Day One readiness"
          ]
        }
      ]
    },
    {
      title: "Transaction Advisory Services",
      summary: "Independent diligence and execution support at critical transaction decision points.",
      description:
        "We provide financial and commercial diligence, risk assessment, and execution support to enable informed decision-making in high-stakes environments. Our work helps buyers and sellers understand true earnings, working capital, and risk before signing, and supports vendors through preparation and buyer management. We combine accounting rigor with commercial insight so that deal pricing and terms reflect reality.",
      subsections: [
        {
          title: "Buy-Side Advisory",
          description: "Diligence and execution support for acquirers:",
          items: [
            "Quality of earnings analysis",
            "Working capital and cash flow assessment",
            "Commercial diligence",
            "Synergy validation",
            "Deal risk identification",
            "Net debt and working capital true-up analysis",
            "Management reporting and adjustment schedules",
            "SPA negotiation support and closing mechanics"
          ]
        },
        {
          title: "Sell-Side Advisory",
          description: "Preparation and execution support for vendors:",
          items: [
            "Pre-deal financial cleanup",
            "Earnings normalization",
            "Deal readiness assessments",
            "Buyer diligence management",
            "SPA support",
            "Vendor due diligence and data room preparation",
            "Management presentations and Q&A support",
            "Working capital and completion accounts"
          ]
        }
      ]
    },
    {
      title: "Investment Solutions & Advisory",
      summary: "Capital allocation, portfolio strategy, and investment evaluation.",
      description:
        "We work with investors to design and execute capital allocation strategies aligned with risk, return, and liquidity objectives. Our advisory spans screening and due diligence, portfolio monitoring, and exit planning. We support private equity, venture capital, family offices, and strategic investors with independent analysis, valuation, and execution support so that capital is deployed and managed with discipline.",
      subsections: [
        {
          title: "Private Equity & Venture Capital",
          description: "Support for fund managers and growth investors:",
          items: [
            "Investment screening and evaluation",
            "Market and competitive analysis",
            "Portfolio performance assessment",
            "Exit planning and value maximization",
            "Due diligence and deal execution support",
            "Add-on acquisition strategy and screening",
            "Fairness and valuation opinions",
            "LP reporting and portfolio valuation support"
          ]
        },
        {
          title: "Family Offices & Strategic Investors",
          description: "Tailored advisory for family offices and strategic capital:",
          items: [
            "Direct investment evaluation",
            "Portfolio diversification",
            "Capital structuring",
            "Governance frameworks",
            "Co-investment and club deal support",
            "Illiquid asset valuation and reporting",
            "Succession and wealth transfer planning support",
            "Advisor selection and manager due diligence"
          ]
        }
      ]
    },
    {
      title: "Comprehensive Business Valuation & Advisory Services",
      summary: "Decision-oriented valuation and modeling.",
      description:
        "Our valuation and modeling capabilities support strategic, transaction, and investment decisions across the deal lifecycle.",
      subServicesGrid: true,
      subsections: [
        {
          title: "409A Valuations Services",
          description: "Independent, defensible 409A valuations for private companies to support equity compensation and satisfy IRS requirements. We deliver audit-ready reports that align with ASC 718 and help companies price stock options, RSUs, and other equity grants with confidence.\n\nOur team applies rigorous methodologies—including the probability-weighted expected return method (PWERM) and option-pricing models—to support grant dates, exercise prices, and financial statement disclosures. We work with companies at every stage, from early growth to pre-IPO, to maintain compliance and reduce audit and tax risk.",
          items: ["ASC 718 / 409A-compliant valuations", "Stock options, RSUs, and restricted stock", "Grant date and exercise price support", "Audit-ready documentation and support", "Annual updates and material event reviews"]
        },
        {
          title: "Gift & Estate Tax Valuations",
          description: "Valuation support for gift and estate tax planning and compliance. We provide defensible fair market value conclusions for closely held interests, family limited partnerships, and other assets to support Form 706 and Form 709 filings and minimize tax controversy risk.\n\nOur work includes discount analyses, blockage and marketability considerations, and coordination with estate and tax counsel. We help families and their advisors structure transfers, document values, and defend positions in the event of IRS examination.",
          items: ["Closely held business and partnership interests", "Family limited partnerships (FLPs) and LLCs", "Form 706 and Form 709 support", "Discount for lack of marketability (DLOM) and control", "Estate and gift planning coordination"]
        },
        {
          title: "Portfolio Valuation Services",
          description: "Valuation of illiquid and hard-to-value investments for fund managers, family offices, and institutional investors. We support fair value reporting under ASC 820 and deliver consistent, documented valuations for LP reporting and audited financials.\n\nWe cover private equity, venture capital, debt, and alternative investments. Our process emphasizes transparency, consistency, and auditability so that managers can meet reporting deadlines and satisfy auditor and regulator expectations.",
          items: ["ASC 820 / fair value measurement", "Private equity and venture capital holdings", "Illiquid debt and structured products", "LP and audited financial reporting", "Valuation policy and process design"]
        },
        {
          title: "Complex Securities Valuation",
          description: "Valuation of warrants, convertible notes, preferred stock, and other complex instruments. We apply option-pricing and scenario-based methods to support financing rounds, restructurings, and financial reporting with clear documentation and audit trails.\n\nOur analyses incorporate dilution, conversion features, and liquidity and marketability factors. We support cap table modeling, allocation of value across tranches, and disclosure for GAAP and IFRS reporting.",
          items: ["Warrants, options, and convertible instruments", "Preferred stock and multi-tranche equity", "Option-pricing and scenario-based models", "Cap table and allocation support", "Financial statement and audit support"]
        },
        {
          title: "High Net Worth Individuals",
          description: "Advisory and valuation services tailored to high net worth individuals and family offices. We support estate and gift planning, philanthropic structuring, and investment valuation for illiquid holdings, art, collectibles, and alternative assets.\n\nOur team works discreetly with families, trustees, and advisors to document values for planning, reporting, and compliance. We combine rigorous valuation practice with an understanding of family dynamics and long-term wealth objectives.",
          items: ["Estate and gift tax valuations", "Family office and trust reporting", "Illiquid and alternative asset valuation", "Art, collectibles, and unique assets", "Philanthropic and charitable planning support"]
        },
        {
          title: "Divorce Valuation Services",
          description: "Independent business and asset valuations for matrimonial matters. We provide court-ready, defensible valuations of closely held businesses, professional practices, and marital assets to support settlement negotiations and litigation.\n\nWe work with counsel and clients to deliver clear, well-documented analyses that withstand cross-examination. Our work covers operating companies, professional practices, real estate holdings, and other marital assets, with attention to standards of value and jurisdiction-specific requirements.",
          items: ["Closely held business valuation", "Professional practice valuation (medical, legal, etc.)", "Marital asset identification and valuation", "Expert testimony and litigation support", "Settlement and mediation support"]
        },
        {
          title: "Startup Valuation Services",
          description: "Early-stage and growth company valuations for fundraising, 409A compliance, and strategic planning. We combine market-based and scenario analysis to support founders, boards, and investors with credible, well-documented valuations.\n\nWe address pre-revenue and early-revenue companies, accounting for stage, risk, and optionality. Our deliverables support funding rounds, option grants, and strategic decisions while remaining defensible to auditors and the IRS.",
          items: ["Pre-money and post-money valuation", "409A and ASC 718 compliance", "Fundraising and term sheet support", "Scenario and sensitivity analysis", "Board and investor reporting"]
        },
        {
          title: "Equity Valuation Services",
          description: "Valuation of common and preferred equity across the capital structure. We support financing events, M&A, restructurings, and financial reporting with rigorous methodologies and clear allocation of enterprise value to each class of security.\n\nOur work includes waterfall analysis, option-pricing and PWERM, and consideration of liquidation preferences, participation rights, and anti-dilution. We help companies, investors, and counsel understand value distribution and support negotiations and disclosures.",
          items: ["Common and preferred equity valuation", "Waterfall and allocation analysis", "Financing, M&A, and restructuring support", "Fairness and allocation opinions", "Financial and tax reporting support"]
        },
        {
          title: "Machinery and Equipment Valuation",
          description: "Fair market value and orderly liquidation value appraisals for machinery, equipment, and fixed assets. We support M&A due diligence, lending, insurance, and financial reporting with defensible, third-party valuations.\n\nOur appraisals follow recognized standards and are suitable for secured lending, insurance placement, and purchase price allocation. We cover manufacturing, industrial, and specialized equipment across sectors.",
          items: ["Fair market value (FMV) and orderly liquidation value (OLV)", "M&A due diligence and purchase price allocation", "Collateral and lending support", "Insurance and risk management", "Financial reporting and tax support"]
        },
        {
          title: "Web3 & Crypto Asset",
          description: "Valuation and advisory for digital assets, tokens, and Web3 ventures. We support fair value reporting, fundraising, and transaction structuring with methodologies adapted to evolving regulatory and market practice.\n\nWe address tokens, NFTs, and protocol and venture interests where traditional valuation frameworks are extended or adapted. Our work supports financial reporting, fundraising, and M&A while remaining alert to regulatory and market developments.",
          items: ["Token and digital asset valuation", "NFT and digital collectible valuation", "Protocol and venture valuation", "Fundraising and transaction support", "Fair value and financial reporting"]
        },
        {
          title: "Transaction Opinions",
          description: "Independent fairness and valuation opinions for boards, special committees, and shareholders. We deliver rigorous, defensible analyses to support M&A, going-private, and other conflicted transactions and help satisfy fiduciary duties.\n\nOur opinions are structured to assist boards in meeting their duty of care and to provide shareholders with transparent, independent analysis. We work closely with counsel and management to tailor scope and deliverables to the transaction and governance context.",
          items: ["Fairness opinions for M&A and going-private", "Valuation opinions for conflicted transactions", "Special committee and board support", "Shareholder and regulatory communication", "Litigation and dispute support"]
        },
        {
          title: "Fairness Opinions",
          description: "Board-ready fairness opinions for mergers, acquisitions, divestitures, and related-party transactions. Our opinions are grounded in comparable company, precedent transaction, and DCF analysis and are designed to withstand scrutiny from shareholders and regulators.\n\nWe provide clear, written opinions with supporting analysis and assumptions. Our process is designed to meet timing and governance requirements while maintaining independence and analytical rigor.",
          items: ["Mergers and acquisitions", "Divestitures and carve-outs", "Related-party and conflicted transactions", "Going-private and minority squeeze-outs", "Board and committee deliverables"]
        },
        {
          title: "M&A Valuation Support",
          description: "Valuation and analytical support throughout the M&A process. We assist with target screening, offer pricing, negotiation support, and post-deal purchase price allocation and impairment testing.\n\nOur team supports buy-side and sell-side clients with stand-alone valuations, fairness support, and integration of valuation into due diligence and negotiation. We help align price with value and support post-close accounting and reporting.",
          items: ["Target screening and valuation", "Offer pricing and negotiation support", "Fairness and valuation opinions", "Purchase price allocation (ASC 805)", "Post-acquisition impairment testing"]
        },
        {
          title: "Transaction Advisory",
          description: "End-to-end valuation and diligence support for buyers and sellers. We help clients assess deal economics, structure transactions, and execute with clarity on value drivers and risk.\n\nOur advisory combines valuation, commercial diligence, and execution awareness. We work with corporates, financial sponsors, and management teams to support informed decision-making from letter of intent through closing and integration.",
          items: ["Deal economics and value assessment", "Commercial and financial diligence", "Structure and term evaluation", "Negotiation and execution support", "Integration and value realization"]
        },
        {
          title: "Purchase Price Allocation Support",
          description: "ASC 805 purchase price allocation and intangible asset valuation for M&A and carve-outs. We allocate consideration to tangible and intangible assets and goodwill with audit-ready documentation for financial reporting.\n\nWe identify and value intangible assets such as customer relationships, technology, and trade names, and support management and auditors through the allocation process. Our work is designed to meet GAAP requirements and withstand audit review.",
          items: ["ASC 805 purchase price allocation", "Tangible and intangible asset valuation", "Customer relationships, technology, and IP", "Goodwill and residual allocation", "Audit-ready documentation and support"]
        },
        {
          title: "Quality of Earnings Analysis",
          description: "Earnings quality and sustainability analysis for M&A and lending. We assess revenue recognition, working capital, one-time items, and run-rate earnings to support deal pricing and covenant compliance.\n\nOur analysis goes beyond reported numbers to identify adjustments, normalizations, and risks. We help buyers and lenders understand sustainable earnings, working capital requirements, and key drivers so that pricing and covenants are aligned with underlying performance.",
          items: ["Revenue recognition and sustainability", "Working capital and cash flow assessment", "Adjustments and normalizations", "Run-rate and sustainable earnings", "Lending and covenant support"]
        },
        {
          title: "Goodwill Impairment Testing",
          description: "ASC 350 goodwill and indefinite-lived intangible impairment testing. We support annual testing and triggering event analyses with defensible fair value measurements and clear documentation for auditors and regulators.\n\nWe perform Step 1 (fair value of reporting unit) and Step 2 (implied fair value of goodwill) analyses as required, using income and market approaches with documented assumptions. Our deliverables are designed to support management and auditors through the testing process.",
          items: ["ASC 350 goodwill impairment testing", "Reporting unit and CGU fair value", "Triggering event and annual testing", "Indefinite-lived intangible testing", "Audit and disclosure support"]
        },
        {
          title: "Qualified Small Business Stock",
          description: "Valuation and advisory for QSBS planning and Section 1202 qualification. We help founders and investors understand and document eligibility for federal exclusion and support cap table and exit structuring.\n\nWe work with companies and counsel to assess QSBS eligibility, document fair market value at issuance and at key dates, and support planning for exits. Our analyses are designed to support positions before the IRS and to inform structuring decisions.",
          items: ["Section 1202 / QSBS eligibility assessment", "Valuation at issuance and key dates", "Cap table and structuring support", "Exit planning and exclusion support", "Documentation for IRS and audit"]
        },
        {
          title: "Tax Valuation & Advisory Services",
          description: "Valuation support for tax planning, controversy, and compliance. We provide defensible fair market value conclusions for transfer pricing, restructuring, and other tax-driven transactions and work with counsel to support positions before the IRS and courts.\n\nOur team has experience across corporate restructuring, transfer pricing, and tax controversy. We deliver clear, well-documented valuations that align with tax law and regulatory guidance and support counsel in advocacy and dispute resolution.",
          items: ["Transfer pricing and related-party valuations", "Corporate restructuring and reorganization", "Tax controversy and IRS defense", "Estate, gift, and income tax support", "Expert testimony and dispute resolution"]
        }
      ]
    },
    {
      title: "Capital Markets Advisory",
      summary: "Comprehensive capital raising advisory optimizing deal structures across private equity, venture capital, and strategic channels.",
      description:
        "We support corporates, sponsors, and growth companies with capital raising strategy, structuring, and execution. Our advisory covers private placement structuring and execution, strategic investor identification and engagement, venture capital and growth equity advisory, debt financing and alternative structures, and cross-border capital market access. We help clients align structure, pricing, and terms with market conditions and investor expectations.",
      subsections: [
        {
          title: "Fund Administration and Accounting",
          description: "End-to-end fund administration and financial operations support:",
          items: [
            "Updating financial records and books of account",
            "Distribution management and waterfall calculations",
            "Portfolio valuation and NAV preparation",
            "Admin process design and oversight",
            "Fund setup and legal/regulatory coordination",
            "Preparing investor and regulatory reports",
            "Audit coordination and auditor liaison",
            "Compliance and regulatory filing support"
          ]
        },
        {
          title: "Capital Raising & Placement",
          description: "Advisory for equity and debt capital raises:",
          items: [
            "Private placement structuring and execution",
            "Strategic and financial investor identification",
            "Venture capital and growth equity advisory",
            "Debt financing and alternative structures",
            "Cross-border capital market access",
            "Term sheet and documentation support",
            "Valuation and fairness support for rounds"
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
            "Faster audits and fewer write-offs",
            "Physical inventory counts and cycle counts",
            "Reconciliation of physical vs. book and remediation plans",
            "Multi-site and multi-entity roll-up and reporting"
          ]
        },
        {
          title: "RAMS — Rhine Advisory Asset Management Software",
          description: "Browser-based platform to centralize asset data, track movement and generate audit-ready reports.",
          items: [
            "Browser-based and cloud-accessible",
            "Customizable interface and workflows",
            "Asset movement tracking",
            "Single install to simplify upkeep",
            "Dashboard and reporting for management and audit",
            "Integration with ERP and fixed-asset systems",
            "Role-based access and audit trails"
          ]
        },
        {
          title: "Inventory Audit Services",
          description: "Independent physical audits that validate the register, document discrepancies and deliver a remediation plan.",
          items: [
            "Complete asset visibility — history, status, and location in one verified register",
            "Improved financial accuracy — balance sheets and inventory values reflect what the business owns",
            "Faster audits and reporting — month- and year-end closures with ready, verified data",
            "Stronger compliance and governance — auditable proof of ownership for regulators, investors, and insurers",
            "Sample-based and full-count audit methodologies",
            "Reconciliation and write-off support",
            "Auditor liaison and management representation support"
          ]
        },
        {
          title: "Valuation & Cost Allocation",
          description: "Establish fair values and allocate costs by business unit or use, with clear documentation for finance and audit.",
          items: [
            "Realistic capital asset values",
            "Transparent financial allocation",
            "Cost allocation by usage, lifecycle, or department",
            "Smarter investment decisions",
            "Depreciation and useful-life review",
            "Impairment and disposal support",
            "Business case and ROI support for asset investments"
          ]
        },
        {
          title: "RTLS & GIS Tracking",
          description: "Real-time visibility of assets through location-based monitoring systems. See high-value assets on a live map.",
          items: [
            "Location precision without line-of-sight",
            "Track asset movement metrics",
            "Reduce losses and optimize utilization",
            "Reduce search time for high-value assets",
            "Integration with RAMS and ERP systems",
            "Alerts and exception reporting",
            "Mobile and field-user support"
          ]
        }
      ]
    }
  ]

const processPillars = [
  {
    title: 'Senior-led',
    text: 'Direct involvement from experienced advisors through execution — not a handoff to a junior bench.'
  },
  {
    title: 'Independent',
    text: 'No product, placement, or financing bias — recommendations aligned to your mandate and risk appetite.'
  },
  {
    title: 'Execution discipline',
    text: 'Structured work plans, board-ready outputs, and advice that respects real transaction timelines.'
  },
  {
    title: 'Confidential',
    text: 'Discreet processes, precise materials, and an outcome-driven mindset from first conversation to close.'
  }
]

const valueProps = [
  {
    title: 'Senior-led engagements',
    body: 'Every mandate is supervised by experienced professionals to ensure strategic alignment and execution quality.'
  },
  {
    title: 'Structured decision support',
    body: 'Valuation discipline, downside analysis, and transaction structuring for critical board-level decisions.'
  },
  {
    title: 'Cross-border capability',
    body: 'Support for complex transactions across jurisdictions with practical regulatory and market awareness.'
  }
]

const Services = () => {
  const navigate = useNavigate()

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-orb services-hero-orb--one" aria-hidden="true" />
        <div className="services-hero-orb services-hero-orb--two" aria-hidden="true" />
        <div className="container services-hero-grid">
          <div className="services-hero-copy">
            <p className="services-eyebrow">Transaction & capital advisory</p>
            <h1>Advisory across transactions, capital markets, and investment mandates.</h1>
            <p className="services-hero-lead">
              Independent, senior-led support for M&A, SPAC and public-market paths, valuation, diligence, and capital
              raising — with institutional rigor and execution awareness.
            </p>
            <div className="services-hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Discuss a mandate
              </Link>
              <Link to="/who-we-serve" className="btn btn-secondary">
                Who we serve
              </Link>
            </div>
            <div className="services-hero-pills" aria-label="Service themes">
              <span>M&A</span>
              <span>SPAC</span>
              <span>Valuation</span>
              <span>Capital markets</span>
              <span>Diligence</span>
            </div>
          </div>
          <div className="services-hero-visual">
            <img
              src="/iStock-1283279349 1.jpg"
              alt="Advisory team collaboration and transaction execution"
            />
          </div>
        </div>
      </section>

      <section className="services-stats" aria-label="Firm snapshot">
        <div className="container services-stats-inner">
          <div className="services-stat">
            <strong>{servicesList.length}</strong>
            <span>Practice areas</span>
          </div>
          <div className="services-stat">
            <strong>Senior-led</strong>
            <span>Every engagement</span>
          </div>
          <div className="services-stat">
            <strong>Global</strong>
            <span>Cross-border execution</span>
          </div>
        </div>
      </section>

      <section className="section services-catalog">
        <div className="container">
          <header className="services-catalog-head">
            <h2 className="services-catalog-title">What we deliver</h2>
            <p className="services-catalog-intro">
              Explore each practice area for scope, deliverables, and how we support boards, investors, and management
              teams through complex decisions.
            </p>
          </header>
          <div className="services-premium-grid">
            {servicesList.map((service, index) => (
              <article key={service.title} className="services-premium-card">
                <div className="services-premium-card-accent" aria-hidden="true" />
                <span className="services-premium-index">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="services-premium-card-title">{service.title}</h3>
                <p className="services-premium-card-summary">{service.summary}</p>
                <button
                  type="button"
                  className="services-premium-explore"
                  onClick={() => navigate('/service/view', { state: { service } })}
                >
                  View details
                  <span className="services-premium-explore-arrow" aria-hidden="true">
                    →
                  </span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-process">
        <div className="services-process-glow" aria-hidden="true" />
        <div className="container">
          <h2 className="services-process-heading">How we work</h2>
          <p className="services-process-sub">
            A consistent operating model across mandates — clear scope, institutional outputs, and judgment grounded in
            live transaction experience.
          </p>
          <div className="services-process-grid">
            {processPillars.map((item) => (
              <article key={item.title} className="services-process-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-value">
        <div className="container">
          <h2 className="services-value-title">How we deliver value</h2>
          <div className="services-value-grid">
            {valueProps.map((item) => (
              <article key={item.title} className="services-value-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section services-cta">
        <div className="container">
          <h2>Discuss your transaction</h2>
          <p>
            Engage with Rhine Advisory to evaluate, structure, and execute complex transactions with clarity and
            confidence.
          </p>
          <div className="services-cta-row">
            <Link to="/contact" className="services-cta-link">
              Contact our team
            </Link>
            <Link to="/about" className="services-cta-link services-cta-link--ghost">
              About the firm
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
