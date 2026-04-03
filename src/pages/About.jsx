import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/about.css'

const About = () => {
  const capabilityAreas = [
    {
      title: 'Mergers & Acquisitions',
      text:
        'Buy-side and sell-side advisory, from strategy and screening through diligence, negotiation, and post-close value realization — with valuation discipline and board-ready materials throughout.'
    },
    {
      title: 'SPAC & Public Markets',
      text:
        'Support for sponsors, targets, and investors across SPAC formation, target assessment, de-SPAC execution, and the communications and governance expectations of public-market transactions.'
    },
    {
      title: 'Capital Raising & Structuring',
      text:
        'Framing of capital alternatives, investor narrative, and transaction structure so leadership can compare paths with transparent trade-offs and execution risk in view.'
    },
    {
      title: 'Valuation & Fairness Support',
      text:
        'Rigorous financial analysis, scenario work, and opinions-oriented support where decisions require defensible assumptions and clear linkage to price and terms.'
    },
    {
      title: 'Strategic & Transaction Readiness',
      text:
        'Helping teams prepare for a process or a live mandate: equity story, data readiness, stakeholder alignment, and integration or separation planning where relevant.'
    },
    {
      title: 'Research & Decision Support',
      text:
        'Sector and company research, investment committee-style synthesis, and ongoing analytical support so judgment calls rest on substance, not slides alone.'
    }
  ]

  const engagementSteps = [
    {
      title: 'Senior-led from day one',
      text:
        'Experienced advisors shape the work plan, quality bar, and client dialogue. You are not handed off to a rotating bench after the first meeting.'
    },
    {
      title: 'Phased, explicit scope',
      text:
        'We align on objectives, deliverables, and timelines early. As facts change, we update the view and reset expectations — not hide behind open-ended work streams.'
    },
    {
      title: 'Institutional-quality outputs',
      text:
        'Models, memos, and presentations are built to withstand scrutiny from boards, investors, counterparties, and regulators where applicable.'
    },
    {
      title: 'Execution-aware advice',
      text:
        'Recommendations account for market practice, timing, and stakeholder dynamics. We aim for decisions you can actually implement under real transaction pressure.'
    }
  ]

  const regionalPresence = [
    { name: 'United Arab Emirates', code: 'UAE', flag: '/uae.png' },
    { name: 'India', code: 'IND', flag: '/india.avif' },
    { name: 'Singapore', code: 'SGP', flag: '/Singapore.svg' },
    { name: 'Saudi Arabia', code: 'KSA', flag: '/SaudiArabia.webp' },
    { name: 'Europe', code: 'EUR', flag: '/europe.png' },
    { name: 'United States', code: 'USA', flag: '/us.png' },
    { name: 'Hong Kong', code: 'HKG', flag: '/hong-kong.png' },
    { name: 'Japan', code: 'JPN', flag: '/japan.png' }
  ]

  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About Rhine Advisory</h1>
          <p className="header-subtitle">
            Independent transaction and capital markets advisory — senior-led, cross-border, and grounded in institutional rigor.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-content-grid">
          <div>
            <h2>Who We Are</h2>
            <p>
              Rhine Advisory was founded by investment bankers, management consultants, and research
              professionals with one belief: high-stakes transactions demand clarity, discipline, and judgment —
              not generic frameworks or product-driven recommendations.
            </p>
            <p>
              We advise corporates, investors, sponsors, and founders across strategy formulation, transaction
              structuring, valuation, capital markets execution, and post-deal value creation. Our work sits at the
              intersection of finance, markets, and organizational reality, where small errors in framing or timing
              can change outcomes materially.
            </p>
            <p>
              As an independent advisory firm, we do not sell proprietary financial products or distribution
              channels. That independence allows us to align our incentives with your objectives and to speak
              plainly when a path does not serve your interests.
            </p>
          </div>
          <img src="/iStock-2152298806.jpg" alt="Rhine Advisory cross-border advisory expertise" />
        </div>
      </section>

      <section className="section about-surface-alt">
        <div className="container">
          <h2 className="section-title">Our Advisory Focus</h2>
          <p className="about-lead">
            We support clients across the transaction lifecycle — from early strategic choices through execution
            and post-close integration or stabilization. Representative areas of focus include:
          </p>
          <div className="about-capabilities-grid">
            {capabilityAreas.map((item) => (
              <article key={item.title} className="about-capability-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="about-inline-cta">
            <Link to="/services" className="btn btn-secondary">
              View all services
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-engage">
          <div className="about-engage-copy">
            <h2 className="section-title about-section-title-left">How We Engage</h2>
            <p className="about-lead about-lead-left">
              Every mandate is different, but our operating principles are consistent: experienced judgment,
              transparent scope, and deliverables you can use in real decision forums.
            </p>
          </div>
          <ul className="about-engage-list">
            {engagementSteps.map((step) => (
              <li key={step.title}>
                <strong>{step.title}</strong>
                <span>{step.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section about-surface-alt about-presence-section">
        <div className="container about-regions-block">
          <header className="about-presence-header">
            <h2 className="about-presence-title">Our Regional Presence</h2>
            <p className="about-presence-subtitle">
              Serving clients across priority markets with local insight and regional connectivity.
            </p>
          </header>
          <ul className="about-presence-grid" aria-label="Regional markets">
            {regionalPresence.map((region) => (
              <li key={region.code} className="about-presence-card">
                <div className="about-presence-icon">
                  <img src={region.flag} alt="" />
                </div>
                <span className="about-presence-name">{region.name}</span>
                <span className="about-presence-code">{region.code}</span>
              </li>
            ))}
          </ul>
          <p className="about-presence-footnote">
            Cross-border mandates combine local context with a consistent analytical and governance standard.
          </p>
          <p className="about-inline-cta">
            <Link to="/who-we-serve" className="btn btn-secondary">
              Who we serve
            </Link>
          </p>
        </div>
      </section>

      <section className="section about-principles">
        <div className="container">
          <h2 className="section-title">Our Commitment</h2>
          <div className="about-principles-grid">
            <article>
              <h3>Clarity in Complexity</h3>
              <p>
                We translate intricate structures, markets, and stakeholder positions into clear options and
                trade-offs so leadership can decide with confidence.
              </p>
            </article>
            <article>
              <h3>Institutional Rigor</h3>
              <p>
                Analysis, models, and documentation are prepared to institutional standards — suitable for boards,
                committees, and external scrutiny where required.
              </p>
            </article>
            <article>
              <h3>Execution Discipline</h3>
              <p>
                Advice reflects how deals are actually negotiated and closed: timelines, confidentiality,
                process risk, and the practical limits of any given transaction.
              </p>
            </article>
            <article>
              <h3>Independence</h3>
              <p>
                Without proprietary products to distribute, we can recommend the structure and path that fit your
                mandate — including advising against a transaction when the facts do not support it.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section cta-section about-cta">
        <div className="container">
          <h2>Work with Rhine Advisory</h2>
          <p>
            Whether you are evaluating a transaction, preparing for a process, or need senior judgment on structure
            and valuation, we welcome a confidential conversation.
          </p>
          <div className="about-cta-actions">
            <Link to="/contact" className="about-cta-link">
              Contact us
            </Link>
            <Link to="/team" className="about-cta-link about-cta-link--ghost">
              Meet our team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
