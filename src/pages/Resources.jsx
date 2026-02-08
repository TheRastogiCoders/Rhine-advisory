import React, { useState, useCallback } from 'react'
import { FaSitemap, FaChartBar, FaChartLine } from 'react-icons/fa'
import '../styles/resources.css'

const DOWNLOADABLE_MONTHLY_REPORT_INDEX = 0

const latestReports = [
  { id: 1, title: '2026 IPO Outlook', subtitle: 'IPO trends and outlook for 2026', image: '/iStock-1395448518.jpg', authors: null, comingSoon: false },
  { id: 2, title: 'Pre IPO Analysis - SPACEX', subtitle: 'Analysis and insights on SPACEX pre-IPO', image: '/iStock-2152298806.jpg', authors: null, comingSoon: false },
  { id: 3, title: 'M&A Cheat Sheet for HR', subtitle: 'Essential M&A guidance for HR leaders', image: '/iStock-1444490817.jpg', authors: null, comingSoon: false },
  { id: 4, title: 'Guide to Green Investing with Insurers', subtitle: 'Sustainable investing and insurer perspectives', image: '/iStock-2190159060.jpg', authors: null, comingSoon: false },
  { id: 5, title: 'GCC Capital Market Outlook - 2026', subtitle: 'Liquidity and valuation trends across GCC markets', image: '/iStock-1170740969 1.jpg', authors: null, comingSoon: true },
  { id: 6, title: 'Saudi Arabia Macro Economic Strategy', subtitle: 'Saudi Arabia by the numbers - strategy outlook', image: '/iStock-1188211595.jpg', authors: null, comingSoon: true },
]

const monthlyReports = [
  { date: '18 January 2026', title: 'MENA Chemicals Monthly - January Issue: 2026 Starts On The Wrong Foot After Weaker-Than-Expected End To Year', authors: 'Yousef Husseini / Malak Rashad' },
]

const LatestReportCard = React.memo(function LatestReportCard ({ report, onDownloadClick }) {
  return (
    <article className={`latest-report-card ${report.comingSoon ? 'is-coming-soon' : ''}`}>
      {report.comingSoon && (
        <div className="latest-report-coming-soon">Coming Soon</div>
      )}
      <div className="latest-report-card-image">
        <img src={report.image} alt="" loading="lazy" decoding="async" />
        <div className="latest-report-card-overlay" />
      </div>
      <div className="latest-report-card-content">
        <h3 className="latest-report-card-title">{report.title}</h3>
        <p className="latest-report-card-subtitle">{report.subtitle}</p>
        {report.authors && (
          <p className="latest-report-card-authors">{report.authors}</p>
        )}
        {!report.comingSoon && (
          <div className="latest-report-card-actions">
            <button
              type="button"
              className="latest-report-action-btn"
              aria-label="Download"
              onClick={onDownloadClick}
            >
              <span className="action-icon">↓</span>
            </button>
            <button type="button" className="latest-report-action-btn" aria-label="View">
              <span className="action-icon">✓</span>
            </button>
          </div>
        )}
      </div>
    </article>
  )
})

const Resources = () => {
  const [showSubscribeMonthlyModal, setShowSubscribeMonthlyModal] = useState(false)
  const [showNewsletterModal, setShowNewsletterModal] = useState(false)
  const [subscribeEmail, setSubscribeEmail] = useState('')
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const handleDownloadReportClick = useCallback(() => {
    setShowSubscribeMonthlyModal(true)
  }, [])

  const handleSubscribeMonthlySubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    if (!email?.trim()) return
    setSubscribeEmail(email)
    setShowSubscribeMonthlyModal(false)
    setShowNewsletterModal(true)
    setNewsletterEmail(email)
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    setShowNewsletterModal(false)
    setNewsletterEmail('')
    setSubscribeEmail('')
    window.open('/broucher.pdf', '_blank')
  }

  return (
    <div className="resources">
      <section className="page-header">
        <div className="container">
          <h1>Research & Insights</h1>
          <p className="header-subtitle">Insights, research, and tools to help you make informed financial decisions</p>
        </div>
      </section>

      {/* ================= 1. LATEST REPORTS ================= */}
      <section className="latest-reports">
        <div className="container">
          <h2 className="latest-reports-title">LATEST REPORTS</h2>
          <div className="latest-reports-grid">
            {latestReports.map((report) => (
              <LatestReportCard
                key={report.id}
                report={report}
                onDownloadClick={handleDownloadReportClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= 2. MONTHLY REPORTS ================= */}
      <section className="monthly-reports">
        <div className="container">
          <div className="monthly-reports-header">
            <h2 className="monthly-reports-title">MONTHLY REPORTS</h2>
          </div>
          <div className="monthly-reports-grid">
            {monthlyReports.map((report, index) => (
              <article key={index} className="monthly-report-card">
                <time className="monthly-report-date">{report.date}</time>
                <h3 className="monthly-report-title">{report.title}</h3>
                <p className="monthly-report-authors">{report.authors}</p>
                {index === DOWNLOADABLE_MONTHLY_REPORT_INDEX && (
                  <button
                    type="button"
                    className="monthly-report-download-btn"
                    onClick={handleDownloadReportClick}
                  >
                    Download
                  </button>
                )}
              </article>
            ))}
          </div>
          <div className="monthly-reports-pagination">
            <span className="pagination-dot active" aria-current="true" />
            <span className="pagination-dot" />
            <span className="pagination-dot" />
            <span className="pagination-dot" />
          </div>
        </div>
      </section>

      {/* ================= 3. REPORT PROFILE (Stats) ================= */}
      <section className="report-profile">
        <div className="container">
          <h2 className="section-title">REPORT PROFILE</h2>
          <div className="research-stats-grid">
            <div className="research-stat-card">
              <span className="research-stat-value">20+</span>
              <span className="research-stat-label">Companies</span>
            </div>
            <div className="research-stat-card">
              <span className="research-stat-value">6+</span>
              <span className="research-stat-label">Sectors</span>
            </div>
            <div className="research-stat-card">
              <span className="research-stat-value">25+</span>
              <span className="research-stat-label">Industries</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. THE RESPONSIBILITY OF RESEARCH, REPORTS & NEWSLETTERS ================= */}
      <section className="section research-responsibility">
        <div className="container">
          <h2 className="section-title">THE RESPONSIBILITY OF RESEARCH, REPORTS & NEWSLETTERS</h2>
          <div className="research-responsibility-content">
            <p className="research-lead">
              At Rhine Advisory, we believe insight carries responsibility.
            </p>
            <p className="section-description">
              Our Research, Reports & Newsletter platform is built to deliver clarity across complex cross-border, tax, capital markets, and transaction-driven decisions.
            </p>
            <p className="section-description">
              Our publications span M&A, strategic transactions, SPAC mergers, valuation trends, and sector-specific developments across industries including technology, financial services, healthcare, real assets, consumer, and industrials. Each piece is designed to go beyond headlines—translating regulatory shifts, deal activity, and market signals into practical implications for decision-makers.
            </p>
            <p className="section-description">
              With enhanced functionality and intuitive navigation, users can seamlessly explore our analysis, thematic reports, and monthly perspectives—structured to support confident decisions for NRIs, family offices, founders, investors, and globally mobile executives navigating growth, restructuring, or exit scenarios.
            </p>
            <p className="section-description">
              Our approach reflects the disciplines of investment banking and management consulting: rigorous analysis, sector context, and clear execution-oriented insights—delivered with independence and discretion.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 6. LEADING RESEARCH CAPABILITIES ================= */}
      <section className="leading-research-capabilities">
        <div className="container">
          <h2 className="leading-research-title">Leading Research Capabilities</h2>
          <p className="leading-research-intro">
            Our research effort brings together the perspectives of a diverse range of experts—from fundamental and quantitative to economic and strategy. Their common focus is identifying opportunities and delivering better investment solutions and results for our clients.
          </p>
          <div className="leading-research-grid">
            <div className="leading-research-block">
              <div className="leading-research-icon">
                <FaSitemap aria-hidden="true" />
              </div>
              <h3 className="leading-research-block-title">Sector Expertise</h3>
              <p className="leading-research-block-desc">
                Our analysts have in-depth sector experience, thanks to a wealth of corporate and industry-specific experience. We believe this enables our analysts to offer our clients &apos;real views&apos; on the industry and gives our clients value-added investment ideas and research.
              </p>
            </div>
            <div className="leading-research-divider" aria-hidden="true" />
            <div className="leading-research-block">
              <div className="leading-research-icon">
                <FaChartBar aria-hidden="true" />
              </div>
              <h3 className="leading-research-block-title">Quantitative Model</h3>
              <p className="leading-research-block-desc">
                Our quantitative models are highly sophisticated, and while they are exceptionally in-depth, we have made them concise and easy to understand for our clients. We believe our quantitative models are one of the main reasons we consistently outperform, in terms of client expectations.
              </p>
            </div>
            <div className="leading-research-divider" aria-hidden="true" />
            <div className="leading-research-block">
              <div className="leading-research-icon">
                <FaChartLine aria-hidden="true" />
              </div>
              <h3 className="leading-research-block-title">Macroeconomic Insights</h3>
              <p className="leading-research-block-desc">
                Our award-winning macroeconomics team will bring you the latest economic news from around the region and highlight the impact from regional, sectoral, and company perspectives. The team focuses on adding fresh insights, complemented by our on-the-ground presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Popup 1: Subscribe monthly to download ================= */}
      {showSubscribeMonthlyModal && (
        <div className="report-modal-overlay" onClick={() => setShowSubscribeMonthlyModal(false)}>
          <div className="report-modal report-modal-footer-theme" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="report-modal-close" onClick={() => setShowSubscribeMonthlyModal(false)} aria-label="Close">×</button>
            <h3 className="report-modal-title">Subscribe to Monthly Reports</h3>
            <p className="report-modal-desc">Enter your email to subscribe and download this report.</p>
            <form onSubmit={handleSubscribeMonthlySubmit} className="report-modal-form">
              <div className="report-modal-field">
                <label htmlFor="subscribe-monthly-email">Email</label>
                <input type="email" id="subscribe-monthly-email" name="email" placeholder="Enter your email" required />
              </div>
              <button type="submit" className="btn btn-primary report-modal-submit">Subscribe &amp; Download</button>
            </form>
          </div>
        </div>
      )}

      {/* ================= Popup 2: Newsletter ================= */}
      {showNewsletterModal && (
        <div className="report-modal-overlay" onClick={() => setShowNewsletterModal(false)}>
          <div className="report-modal report-modal-footer-theme" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="report-modal-close" onClick={() => setShowNewsletterModal(false)} aria-label="Close">×</button>
            <h3 className="report-modal-title">Newsletter</h3>
            <p className="report-modal-desc">Subscribe to our newsletter for the latest insights and updates.</p>
            <form onSubmit={handleNewsletterSubmit} className="report-modal-form">
              <div className="report-modal-field">
                <label htmlFor="newsletter-email">Email</label>
                <input
                  type="email"
                  id="newsletter-email"
                  name="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary report-modal-submit">Subscribe</button>
            </form>
          </div>
        </div>
      )}

      {/* ================= 7. NEWSLETTER CTA ================= */}
      <section className="newsletter-cta">
        <div className="container">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest insights and updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Resources
