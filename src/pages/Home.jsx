import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { servicesList } from './Services'
import '../styles/home.css'
import '../styles/about.css'

const HERO_AUTO_MS = 6500

const heroSlides = [
  {
    id: 'advisory',
    bg: '/iStock-1444490817.jpg',
    bgPosition: '72% center',
    eyebrow: 'Transaction & investment advisory',
    title: 'Advisory-led execution for strategic and capital transactions.',
    paragraphs: ['M&A, capital, and SPAC mandates—senior-led from framing through close.']
  },
  {
    id: 'ma',
    bg: '/iStock-2152298806.jpg',
    bgPosition: 'center center',
    eyebrow: 'M&A',
    title: 'Buy-side, sell-side, and complex deals—structured for how you decide.',
    paragraphs: ['Valuation, diligence, and negotiation support from screening to close.']
  },
  {
    id: 'capital',
    bg: '/iStock-1283279349 1.jpg',
    bgPosition: '55% center',
    eyebrow: 'Capital markets',
    title: 'SPACs, private capital, and raises—with trade-offs and execution risk in view.',
    paragraphs: ['Public and private pathways, grounded in disclosure and institutional rigor.']
  },
  {
    id: 'global',
    bg: '/iStock-2190159060.jpg',
    bgPosition: '48% center',
    eyebrow: 'Cross-border',
    title: 'Local context with consistent standards across markets.',
    paragraphs: ['UAE to the US and Asia-Pacific—regional insight, board-ready output.']
  }
]

const Home = () => {
  const navigate = useNavigate()
  const [heroIndex, setHeroIndex] = useState(0)
  const [heroPaused, setHeroPaused] = useState(false)

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || heroPaused) {
      return undefined
    }
    const id = window.setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroSlides.length)
    }, HERO_AUTO_MS)
    return () => window.clearInterval(id)
  }, [heroPaused])

  const heroPct = 100 / heroSlides.length
  const edgeReasons = [
    {
      title: 'Independent perspective',
      text: 'We do not distribute proprietary products — recommendations align with your mandate, not our balance sheet.'
    },
    {
      title: 'Board- and IC-ready rigor',
      text: 'Analysis, models, and documentation are prepared to survive investor, auditor, and committee scrutiny.'
    },
    {
      title: 'Execution, not slideware',
      text: 'Advice reflects how deals are negotiated and closed: timelines, confidentiality, and real stakeholder dynamics.'
    },
    {
      title: 'Cross-border judgment',
      text: 'We combine market context across Dubai, India, Singapore, the Gulf, the US, Europe, and Asia-Pacific with consistent standards.'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Assess & frame',
      text: 'Clarify objectives, constraints, and decision forums so the work plan matches how you actually approve risk.'
    },
    {
      step: '02',
      title: 'Model & test',
      text: 'Build defensible valuation and scenarios; pressure-test structure, price, and downside before you commit.'
    },
    {
      step: '03',
      title: 'Execute & support',
      text: 'Stay engaged through diligence, negotiation, and close — and through early integration or stabilization where needed.'
    }
  ]

  const sectorTags = [
    'Technology & software',
    'Healthcare & life sciences',
    'Financial services',
    'Industrials & manufacturing',
    'Consumer & retail',
    'Energy & infrastructure',
    'Real estate & hospitality',
    'Business & professional services'
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
    <div className="home premium-home">
      <section
        className="premium-hero premium-hero--carousel"
        aria-roledescription="carousel"
        aria-label="Featured advisory themes"
        onMouseEnter={() => setHeroPaused(true)}
        onMouseLeave={() => setHeroPaused(false)}
      >
        <div className="premium-hero-viewport">
          <div
            className="premium-hero-track"
            style={{
              width: `${heroSlides.length * 100}%`,
              transform: `translateX(-${heroIndex * heroPct}%)`
            }}
          >
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className="premium-hero-slide"
                style={{ flex: `0 0 ${heroPct}%`, width: `${heroPct}%` }}
                aria-hidden={index !== heroIndex}
              >
                <div
                  className="premium-hero-slide-bg"
                  style={{
                    backgroundImage: `url("${slide.bg}")`,
                    backgroundPosition: slide.bgPosition
                  }}
                  aria-hidden="true"
                />
                <div className="premium-hero-slide-overlay" aria-hidden="true" />
                <div className="container premium-hero-slide-inner">
                  <div className="premium-hero-content">
                    <p className="premium-eyebrow">{slide.eyebrow}</p>
                    <h1 id={`hero-heading-${slide.id}`}>{slide.title}</h1>
                    <p>{slide.paragraphs[0]}</p>
                    <div className="premium-hero-actions">
                      <Link to="/services" className="btn btn-primary">
                        Explore services
                      </Link>
                      <Link to="/contact" className="btn btn-secondary">
                        Contact us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="premium-hero-dots" role="tablist" aria-label="Hero slides">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              className={`premium-hero-dot ${index === heroIndex ? 'is-active' : ''}`}
              aria-selected={index === heroIndex}
              aria-controls={`hero-heading-${slide.id}`}
              tabIndex={index === heroIndex ? 0 : -1}
              onClick={() => setHeroIndex(index)}
            >
              <span className="visually-hidden">Slide {index + 1}: {slide.title}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="premium-metrics">
        <div className="container">
          <p className="premium-metrics-intro">
            A compact, senior team focused on outcomes — supported by a network of specialist partners where mandates require
            deep local or technical depth.
          </p>
          <div className="premium-metrics-grid">
            <div className="premium-metric-card">
              <strong>20+</strong>
              <span>Expert consultants</span>
            </div>
            <div className="premium-metric-card">
              <strong>100+</strong>
              <span>Completed projects</span>
            </div>
            <div className="premium-metric-card">
              <strong>10+</strong>
              <span>Global partners</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section premium-about">
        <div className="container premium-about-grid">
          <div>
            <h2 className="section-title left">About Rhine Advisory</h2>
            <p>
              We provide SPAC merger, capital markets, and transaction advisory solutions to corporates, investors,
              sponsors, and founders navigating complex transactions where execution risk is real.
            </p>
            <p>
              Our advisory spans strategy formulation, structuring, valuation, transaction execution, and post-deal
              value creation with a strong cross-border perspective.
            </p>
            <p>
              Clients engage us when stakes are high and ambiguity is not an option — from fairness opinions and
              conflicted transactions to first-time issuers and complex multi-jurisdiction deals. We tailor scope and
              pace to your governance cadence and timeline.
            </p>
            <Link to="/about" className="btn btn-secondary">Read more about the firm</Link>
          </div>
          <div className="premium-about-cards">
            <article>
              <h3>Institutional Insight</h3>
              <p>Rigorous transaction analysis and valuation with board-ready output.</p>
            </article>
            <article>
              <h3>Execution Discipline</h3>
              <p>Senior-led teams focused on outcome, not presentation-heavy consulting.</p>
            </article>
            <article>
              <h3>Global Network</h3>
              <p>Connected across investors, sponsors, and capital market stakeholders.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section premium-edge">
        <div className="container">
          <h2 className="section-title left">Why decision-makers choose Rhine</h2>
          <p className="premium-edge-intro">
            Transaction advisory should reduce uncertainty — not add noise. Our model is built for leaders who need
            crisp recommendations and deliverables they can use in real decision forums.
          </p>
          <div className="premium-edge-grid">
            {edgeReasons.map((item) => (
              <article key={item.title} className="premium-edge-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section premium-services-preview">
        <div className="container">
          <div className="premium-section-head">
            <h2 className="section-title left">Our Services</h2>
            <Link to="/services" className="btn btn-secondary">View All Services</Link>
          </div>
          <div className="premium-services-grid">
            {servicesList.slice(0, 6).map((service) => (
              <article key={service.title} className="premium-service-card">
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <button
                  type="button"
                  className="service-link-btn"
                  onClick={() => navigate('/service/view', { state: { service } })}
                >
                  View details
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section premium-clients">
        <div className="container">
          <div className="premium-section-head">
            <div>
              <h2 className="section-title left">Who we serve</h2>
              <p className="premium-clients-lead">
                We work with sponsors, founders, boards, and investment teams who need independent judgment on structure,
                value, and execution — from growth capital to transformative M&amp;A and public-market paths.
              </p>
            </div>
            <Link to="/who-we-serve" className="btn btn-secondary premium-clients-cta">
              Explore client segments
            </Link>
          </div>
          <div className="premium-client-tags">
            <span>Private Equity & Venture Capital Funds</span>
            <span>SPAC Sponsors & Public Market Participants</span>
            <span>Corporates & Strategic Buyers</span>
            <span>Founders & Promoters</span>
            <span>Family Offices & Institutional Investors</span>
            <span>Investment Banks & Financial Institutions</span>
          </div>
        </div>
      </section>

      <section className="section premium-process">
        <div className="container">
          <h2 className="section-title left">How we partner with you</h2>
          <p className="premium-process-intro">
            Each mandate is scoped explicitly. We align on deliverables, timeline, and forums for decisions — then adapt
            as facts change without losing discipline.
          </p>
          <div className="premium-process-grid">
            {processSteps.map((item) => (
              <article key={item.step} className="premium-process-card">
                <span className="premium-process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section premium-sectors">
        <div className="container">
          <h2 className="section-title left">Sectors &amp; situations</h2>
          <p className="premium-sectors-intro">
            We support transactions across sectors where complexity, regulation, or capital structure matters. Representative
            areas include:
          </p>
          <div className="premium-sector-tags">
            {sectorTags.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
          <p className="premium-sectors-foot">
            <Link to="/services" className="premium-text-link">
              View our service areas
            </Link>
            <span className="premium-sectors-sep" aria-hidden="true">
              ·
            </span>
            <Link to="/team" className="premium-text-link">
              Meet the team
            </Link>
          </p>
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

      <section className="section premium-cta">
        <div className="container">
          <h2>Discuss your transaction with our senior advisory team.</h2>
          <p>
            We help decision-makers evaluate, structure, and execute high-stakes transactions with clarity and precision.
          </p>
          <div className="premium-hero-actions">
            <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
            <Link to="/research-insights" className="btn btn-secondary">Read Insights</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
