import React, { useState, useCallback, useEffect, useRef } from 'react'
import { FaSitemap, FaChartBar, FaChartLine } from 'react-icons/fa'
import '../styles/resources.css'

const latestReports = [
  { id: 1, title: '2026 IPO Outlook', subtitle: 'IPO trends and outlook for 2026', image: '/iStock-1395448518.jpg', authors: null, comingSoon: false, viewOnlyPdfUrl: '/IPO%20Outlook%20Report%20-%20Rhine%20Advisory.pdf' },
  { id: 2, title: 'Pre IPO Analysis - SPACEX', subtitle: 'Analysis and insights on SPACEX pre-IPO', image: '/iStock-2152298806.jpg', authors: null, comingSoon: false, viewOnlyPdfUrl: '/Pre%20IPO%20Analysis%20-%20SPACEX.pdf', restricted: true },
  { id: 3, title: 'M&A Cheat Sheet for HR', subtitle: 'Essential M&A guidance for HR leaders', image: '/iStock-1444490817.jpg', authors: null, comingSoon: false },
  { id: 4, title: 'Guide to Green Investing with Insurers', subtitle: 'Sustainable investing and insurer perspectives', image: '/iStock-2190159060.jpg', authors: null, comingSoon: false },
  { id: 5, title: 'GCC Capital Market Outlook - 2026', subtitle: 'Liquidity and valuation trends across GCC markets', image: '/iStock-1170740969 1.jpg', authors: null, comingSoon: true },
  { id: 6, title: 'Saudi Arabia Macro Economic Strategy', subtitle: 'Saudi Arabia by the numbers - strategy outlook', image: '/iStock-1188211595.jpg', authors: null, comingSoon: true },
]

const monthlyReports = [
  {
    date: 'January 2026',
    title: 'January Newsletter 2026',
    description: 'Our latest economic outlook and market perspectives for 2026 — key themes, regional insights, and strategic considerations for investors and decision-makers.',
    authors: 'Rhine Advisory',
    pdfUrl: '/Economic_Outlook_2026_Newsletter.pdf',
    comingSoon: false,
  },
  {
    date: 'February 2026',
    title: 'February Newsletter 2026',
    description: 'Coming soon — economic outlook and market perspectives for February 2026.',
    authors: 'Rhine Advisory',
    pdfUrl: null,
    comingSoon: true,
  },
  {
    date: 'March 2026',
    title: 'March Newsletter 2026',
    description: 'Coming soon — economic outlook and market perspectives for March 2026.',
    authors: 'Rhine Advisory',
    pdfUrl: null,
    comingSoon: true,
  },
]

const LatestReportCard = React.memo(function LatestReportCard ({ report, onDownloadClick, onViewOnlyClick }) {
  const isViewOnly = !!report.viewOnlyPdfUrl
  return (
    <article className={`latest-report-card ${report.comingSoon ? 'is-coming-soon' : ''}`}>
      <div className="latest-report-card-image">
        <img src={report.image} alt="" loading="lazy" decoding="async" />
        <div className="latest-report-card-overlay" />
        {report.comingSoon && (
          <div className="latest-report-coming-soon">Coming Soon</div>
        )}
        <div className="latest-report-card-content">
          <h3 className="latest-report-card-title">{report.title}</h3>
          <p className="latest-report-card-subtitle">{report.subtitle}</p>
          {report.authors && (
            <p className="latest-report-card-authors">{report.authors}</p>
          )}
          {!report.comingSoon && (
            <div className="latest-report-card-actions">
              {isViewOnly ? (
                <button
                  type="button"
                  className="latest-report-action-btn latest-report-view-btn"
                  aria-label="View document"
                  onClick={() => onViewOnlyClick(report)}
                >
                  <span className="action-icon">✓</span> View
                </button>
              ) : (
                <button
                  type="button"
                  className="latest-report-action-btn latest-report-view-btn"
                  aria-label="View"
                  onClick={onDownloadClick}
                >
                  <span className="action-icon">✓</span> View
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  )
})

const Resources = () => {
  const [showSubscribeMonthlyModal, setShowSubscribeMonthlyModal] = useState(false)
  const [showNewsletterModal, setShowNewsletterModal] = useState(false)
  const [subscribeEmail, setSubscribeEmail] = useState('')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [viewOnlyPdfReport, setViewOnlyPdfReport] = useState(null)
  const [showNoPermissionModal, setShowNoPermissionModal] = useState(false)
  const [reportPendingDownload, setReportPendingDownload] = useState(null)
  const [downloadNewsletterPdfOnNewsletterSubmit, setDownloadNewsletterPdfOnNewsletterSubmit] = useState(true)
  const latestReportsScrollRef = useRef(null)
  const loopedLatestReports = [...latestReports, ...latestReports]

  useEffect(() => {
    const el = latestReportsScrollRef.current
    if (!el) return
    let rafId = null
    let lastFrameTime = performance.now()
    let isPaused = false
    const pxPerSecond = 62

    const pause = () => {
      isPaused = true
    }

    const resume = () => {
      isPaused = false
      lastFrameTime = performance.now()
    }

    const tick = (now) => {
      const loopWidth = el.scrollWidth / 2
      if (!isPaused && loopWidth > 0) {
        const deltaMs = now - lastFrameTime
        const nextLeft = el.scrollLeft + (pxPerSecond * deltaMs) / 1000

        // Seamless loop by resetting position after first duplicated set.
        if (nextLeft >= loopWidth) {
          el.scrollLeft = nextLeft - loopWidth
        } else {
          el.scrollLeft = nextLeft
        }
      }
      lastFrameTime = now
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    // Keep autoplay smooth after switching tabs/windows.
    const onVisibilityChange = () => {
      lastFrameTime = performance.now()
    }

    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', resume)
    el.addEventListener('touchstart', pause, { passive: true })
    el.addEventListener('touchend', resume, { passive: true })
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      el.removeEventListener('mouseenter', pause)
      el.removeEventListener('mouseleave', resume)
      el.removeEventListener('touchstart', pause)
      el.removeEventListener('touchend', resume)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])

  const handleLatestReportsScroll = useCallback((direction) => {
    const el = latestReportsScrollRef.current
    if (!el) return
    const scrollAmount = Math.max(320, el.clientWidth * 0.72)
    el.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    })
  }, [])

  const handleDownloadReportClick = useCallback(() => {
    setDownloadNewsletterPdfOnNewsletterSubmit(true)
    setReportPendingDownload(null)
    setShowSubscribeMonthlyModal(true)
  }, [])

  const handleGetReportFromViewModal = useCallback(() => {
    if (viewOnlyPdfReport?.viewOnlyPdfUrl) {
      setReportPendingDownload(viewOnlyPdfReport)
      setDownloadNewsletterPdfOnNewsletterSubmit(false)
      setViewOnlyPdfReport(null)
      setShowSubscribeMonthlyModal(true)
    }
  }, [viewOnlyPdfReport])

  const handleViewOnlyClick = useCallback((report) => {
    if (report.restricted) {
      setShowNoPermissionModal(true)
      return
    }
    setReportPendingDownload(report)
    setDownloadNewsletterPdfOnNewsletterSubmit(false)
    setShowSubscribeMonthlyModal(true)
  }, [])

  const closeViewOnlyModal = useCallback(() => {
    setViewOnlyPdfReport(null)
  }, [])

  const handleSubscribeMonthlySubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    if (!email?.trim()) return
    if (reportPendingDownload?.viewOnlyPdfUrl) {
      window.open(reportPendingDownload.viewOnlyPdfUrl, '_blank')
      setReportPendingDownload(null)
    }
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
    if (downloadNewsletterPdfOnNewsletterSubmit) {
      window.open('/Economic_Outlook_2026_Newsletter.pdf', '_blank')
    }
    setDownloadNewsletterPdfOnNewsletterSubmit(true)
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
          <div className="latest-reports-head">
            <div>
              <h2 className="latest-reports-title">Latest Reports</h2>
              <p className="latest-reports-subtitle">Curated publications on IPOs, strategic transactions, and market intelligence.</p>
            </div>
          </div>
          <div className="latest-reports-grid" ref={latestReportsScrollRef}>
            {loopedLatestReports.map((report, index) => (
              <LatestReportCard
                key={`${report.id}-${index}`}
                report={report}
                onDownloadClick={handleDownloadReportClick}
                onViewOnlyClick={handleViewOnlyClick}
              />
            ))}
          </div>
          <div className="latest-reports-controls latest-reports-controls-bottom" aria-label="Latest reports navigation">
            <button
              type="button"
              className="latest-reports-nav-btn"
              onClick={() => handleLatestReportsScroll('prev')}
              aria-label="Scroll reports left"
            >
              &#8249;
            </button>
            <button
              type="button"
              className="latest-reports-nav-btn"
              onClick={() => handleLatestReportsScroll('next')}
              aria-label="Scroll reports right"
            >
              &#8250;
            </button>
          </div>
        </div>
      </section>

      {/* ================= 2. MONTHLY REPORTS ================= */}
      <section className="monthly-reports">
        <div className="container">
          <div className="monthly-reports-header">
            <h2 className="monthly-reports-title">MONTHLY NEWSLETTERS</h2>
          </div>
          <div className="monthly-reports-grid">
            {monthlyReports.map((report, index) => (
              <article key={index} className={`monthly-report-card ${report.comingSoon ? 'monthly-report-card-coming-soon' : ''}`}>
                <time className="monthly-report-date">{report.date}</time>
                <h3 className="monthly-report-title">{report.title}</h3>
                {report.description && (
                  <p className="monthly-report-description">{report.description}</p>
                )}
                <p className="monthly-report-authors">{report.authors}</p>
                {report.comingSoon ? (
                  <span className="monthly-report-coming-soon">Coming Soon</span>
                ) : report.pdfUrl ? (
                  <button
                    type="button"
                    className="monthly-report-download-btn"
                    onClick={handleDownloadReportClick}
                  >
                    Download
                  </button>
                ) : null}
              </article>
            ))}
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
          <p className="report-profile-more">…and many more to come.</p>
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
            <h3 className="report-modal-title">Get your report</h3>
            <p className="report-modal-desc">Enter your email below and we’ll send you the report right away. You’ll also receive our latest research and insights.</p>
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
            <h3 className="report-modal-title">You’re almost there</h3>
            <p className="report-modal-desc">Confirm your email to join our newsletter and get the latest insights, market updates, and reports delivered to your inbox.</p>
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

      {/* ================= View-only PDF popup (with Get report for download) ================= */}
      {viewOnlyPdfReport && viewOnlyPdfReport.viewOnlyPdfUrl && (
        <div className="report-view-only-overlay" onClick={closeViewOnlyModal}>
          <div className="report-view-only-modal" onClick={(e) => e.stopPropagation()}>
            <div className="report-view-only-header">
              <h3 className="report-view-only-title">{viewOnlyPdfReport.title}</h3>
              <button type="button" className="report-view-only-close" onClick={closeViewOnlyModal} aria-label="Close">×</button>
            </div>
            <div className="report-view-only-body">
              <iframe
                title={viewOnlyPdfReport.title}
                src={`${viewOnlyPdfReport.viewOnlyPdfUrl}#toolbar=0`}
                className="report-view-only-iframe"
              />
            </div>
            <div className="report-view-only-footer">
              <p className="report-view-only-notice">Enter your email in the form to receive a download link for this report.</p>
              <button type="button" className="report-view-only-get-btn" onClick={handleGetReportFromViewModal}>
                Get report
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= No permission to view report ================= */}
      {showNoPermissionModal && (
        <div className="report-modal-overlay" onClick={() => setShowNoPermissionModal(false)}>
          <div className="report-modal report-modal-footer-theme" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="report-modal-close" onClick={() => setShowNoPermissionModal(false)} aria-label="Close">×</button>
            <h3 className="report-modal-title">Access restricted</h3>
            <p className="report-modal-desc">You do not have permission to view this report.</p>
            <button type="button" className="btn btn-primary report-modal-submit" onClick={() => setShowNoPermissionModal(false)}>Close</button>
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

      <section className="section premium-info-band">
        <div className="container">
          <h2 className="section-title">Research Coverage Universe</h2>
          <div className="premium-info-grid">
            <article className="premium-info-card">
              <h3>Transactions & M&A</h3>
              <p>Deal structures, valuation trends, process benchmarks, and execution signals across major markets.</p>
            </article>
            <article className="premium-info-card">
              <h3>Capital Markets</h3>
              <p>IPO and financing perspectives with sector-level data and changing investor sentiment insights.</p>
            </article>
            <article className="premium-info-card">
              <h3>Macro & Sector Strategy</h3>
              <p>Cross-border economic and industry analysis translated into practical implications for decision-makers.</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources
