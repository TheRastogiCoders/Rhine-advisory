import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/who-we-serve.css'

const clientSegments = [
  {
    title: 'Corporates & strategic buyers',
    summary:
      'Boards and management teams navigating growth, portfolio reshaping, or defense — with clarity on value, structure, and execution risk.',
    image: '/iStock-2152298806.jpg',
    imageAlt: 'Corporate leadership and strategy discussion',
    bullets: ['M&A and divestitures', 'Carve-outs & separation', 'Capital structure & raising', 'Transaction readiness']
  },
  {
    title: 'Private equity, venture & growth capital',
    summary:
      'Sponsors and funds that need independent screening, diligence support, and portfolio-level judgment — without product conflict.',
    image: '/iStock-2190159060.jpg',
    imageAlt: 'Investment and private equity professionals',
    bullets: ['Deal evaluation & IC materials', 'Add-on strategy', 'Exit planning & timing', 'Portfolio company support']
  },
  {
    title: 'SPAC sponsors & public-market participants',
    summary:
      'Sponsors, targets, and PIPE investors evaluating the SPAC pathway, de-SPAC execution, and the governance expectations of listed markets.',
    image: '/iStock-1188211595.jpg',
    imageAlt: 'Capital markets and public company context',
    bullets: ['Target assessment & valuation', 'Business combination support', 'Disclosure & narrative', 'Post-close transition']
  },
  {
    title: 'Founders, promoters & startups',
    summary:
      'Leadership teams preparing for a raise, a process, or a strategic transaction — with investor-ready materials and realistic timelines.',
    image: '/iStock-1444490817.jpg',
    imageAlt: 'Founders and entrepreneurial team collaboration',
    bullets: ['Fundraising & term sheets', 'Strategic partnerships', 'Investor readiness', 'Growth capital planning']
  },
  {
    title: 'Family offices & institutional investors',
    summary:
      'Concentrated capital seeking disciplined evaluation of direct investments, co-investments, and illiquid positions.',
    image: '/iStock-2152298806.jpg',
    imageAlt: 'Institutional investment and wealth context',
    bullets: ['Direct investment review', 'Co-investment & club deals', 'Valuation & reporting', 'Governance & manager review']
  },
  {
    title: 'Investment banks & professional advisors',
    summary:
      'Partners who want a credible independent view alongside a live mandate — fairness support, second opinions, and specialist workstreams.',
    image: '/iStock-2190159060.jpg',
    imageAlt: 'Professional advisory collaboration',
    bullets: ['Fairness & valuation support', 'Diligence workstreams', 'Complex security valuation', 'Cross-border coordination']
  }
]

const approachPillars = [
  {
    title: 'Tailored scope',
    text: 'Each mandate is framed around your decision forums, timeline, and risk — not a generic playbook.'
  },
  {
    title: 'Outcome focus',
    text: 'We measure success by readiness to decide, negotiate, and close — not by slide count.'
  },
  {
    title: 'Long-term relationships',
    text: 'Many clients return across transactions; we invest in continuity, discretion, and institutional memory.'
  }
]

const WhoWeServe = () => {
  return (
    <div className="who-we-serve-page">
      <section className="wws-intro" aria-labelledby="wws-intro-heading">
        <div className="wws-intro-orb wws-intro-orb--left" aria-hidden="true" />
        <div className="wws-intro-orb wws-intro-orb--right" aria-hidden="true" />
        <div className="container wws-intro-container">
          <div className="wws-intro-copy">
            <p className="wws-intro-eyebrow">Client segments</p>
            <h1 id="wws-intro-heading">Who we serve</h1>
            <p className="wws-intro-lead">
              Rhine Advisory supports decision-makers who need independent judgment on transactions, capital, and valuation —
              from corporates and sponsors to founders, family offices, and public-market participants.
            </p>
            <div className="wws-intro-actions">
              <Link to="/contact" className="btn btn-primary">
                Start a conversation
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Our services
              </Link>
            </div>
          </div>
          <div className="wws-intro-cards" aria-label="Engagement snapshot">
            <article className="wws-intro-card">
              <h3 className="wws-intro-card-title">Senior-led</h3>
              <p className="wws-intro-card-sub">Every mandate</p>
            </article>
            <article className="wws-intro-card">
              <h3 className="wws-intro-card-title">Independent</h3>
              <p className="wws-intro-card-sub">No product bias</p>
            </article>
            <article className="wws-intro-card">
              <h3 className="wws-intro-card-title">Cross-border</h3>
              <p className="wws-intro-card-sub">Multi-market execution</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section wws-segments">
        <div className="container">
          <header className="wws-segments-head">
            <h2 className="wws-segments-title">Client segments we support</h2>
            <p className="wws-segments-intro">
              Representative profiles below — scope and team composition are tailored to each engagement.
            </p>
          </header>
          <div className="wws-segments-grid">
            {clientSegments.map((segment, index) => (
              <article key={segment.title} className="wws-segment-card">
                <div className="wws-segment-accent" aria-hidden="true" />
                <span className="wws-segment-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="wws-segment-image">
                  <img src={segment.image} alt={segment.imageAlt} loading="lazy" />
                </div>
                <h3>{segment.title}</h3>
                <p className="wws-segment-summary">{segment.summary}</p>
                <ul className="wws-segment-bullets">
                  {segment.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wws-approach">
        <div className="wws-approach-glow" aria-hidden="true" />
        <div className="container">
          <h2 className="wws-approach-title">Engagement approach</h2>
          <p className="wws-approach-sub">
            We align incentives with yours: clear deliverables, transparent scope, and advice you can take to the board or
            investment committee.
          </p>
          <div className="wws-approach-grid">
            {approachPillars.map((item) => (
              <article key={item.title} className="wws-approach-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section wws-cta">
        <div className="container">
          <h2>Discuss your situation</h2>
          <p>
            Share your mandate in confidence — we will suggest scope, timeline, and the right senior team for your
            objectives.
          </p>
          <div className="wws-cta-row">
            <Link to="/contact" className="wws-cta-link">
              Contact us
            </Link>
            <Link to="/about" className="wws-cta-link wws-cta-link--ghost">
              About the firm
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhoWeServe
